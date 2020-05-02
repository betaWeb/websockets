import Websockets from '../index'
import domExtra from '@testing-library/jest-dom'
import WS from "jest-websocket-mock"

expect.extend(domExtra)
jest.setTimeout(10 * 1000)

function expectServerHasMessage (server, data) {
    setTimeout(async () => {
        await expect(server).toReceiveMessage(data)
    }, 500)
}

function expectServerHasMessages (server, ...messages) {
    setTimeout(async () => {
        await expect(server).toHaveReceivedMessages(messages)
    }, 500)
}

beforeEach(() => {
    this.server = new WS(`ws://localhost:1234`, { jsonProtocol: false })
})

describe('Websockets', () => {

    it('Should instantiate Websockets class correctly', () => {
        const client = new Websockets({
            port: 9000,
            base_url: 'local.dev',
            endpoint: 'endpoint'
        })
        expect(client.url).toBe(`ws://local.dev:9000/endpoint`)
        expect(client.isInitialized).toBeFalse()
    })

    it('Should store events correctly', () => {
        const client = new Websockets({namespace: 'demo'})

        client.on('test', () => alert('test'))
        client.on('test', () => alert('test1'))
        client.on('test', () => alert('test without namespace'), false)

        expect(client.events).toContainAnyKeys(['demo_test', 'test'])
        expect(client.events['demo_test']).toHaveLength(2)
        expect(client.events['test']).toHaveLength(1)
    })

    it('Should remove events correctly', () => {
        const client = new Websockets({namespace: 'demo'})

        client.on('test', () => alert('test'))
        client.on('test', () => alert('test1'))
        client.on('test', () => alert('test without namespace'), false)

        expect(client.events).toContainAllKeys(['demo_test', 'test'])

        client.off('test', () => alert('test without namespace'), false)
        client.off('test', () => alert('test1'))

        expect(client.events).toContainAllKeys(['demo_test'])
        expect(client.events['demo_test']).toHaveLength(1)
    })

    it('Should connect to the server correctly', async () => {
        const client = new Websockets({
            base_url: 'localhost',
            port: 1234
        })

        try {
            await client.connect()

            expect(client.isOpen).toBeTrue()

            expectServerHasMessage(this.server, { type: "_connected", payload: '' })
        } catch (e) {
            expect(e).toBeInstanceOf(Error)
        }
    })

    it('Should receive the server events correctly', async () => {
        const client = new Websockets({
            base_url: 'localhost',
            port: 1234
        })

        try {
            await client.connect()

            client.on('test', data => {
                expect(data).toContainAllKeys(['type', 'payload'])
                expect(data.type).toStrictEqual('test')
                expect(data.payload).toStrictEqual('Hello, World !')
            })

            this.server.send({ type: "test", payload: "Hello, World !" })
        } catch (e) {
            expect(e).toBeInstanceOf(Error)
        }
    })

    it('Should send simple events to the server correctly', async () => {
        const client = new Websockets({
            base_url: 'localhost',
            port: 1234
        })

        try {
            await client.connect()

            client.send('test')
            client.send('Hello, World !')

            expectServerHasMessages(this.server, 'test', 'Hello, World !')
        } catch (e) {
            expect(e).toBeInstanceOf(Error)
        }
    })

    it('Should emit complex events to the server correctly', async () => {
        const client = new Websockets({
            base_url: 'localhost',
            port: 1234
        })

        try {
            await client.connect()

            client.emit('test', {body: 'Hello, World !'})

            expectServerHasMessage(this.server, {type: "test", payload: {body: 'Hello, World !'}})
        } catch (e) {
            expect(e).toBeInstanceOf(Error)
        }
    })

    it('Should close ws connection correctly', async () => {
        const client = new Websockets({
            base_url: 'localhost',
            port: 1234
        })

        await client.connect()

        expect(client.isOpen).toBeTrue()

        client.emit('test', {body: 'Hello, World !'})

        expectServerHasMessage(this.server, {type: "test", payload: {body: 'Hello, World !'}})

        client.disconnect()

        expect(client.isClosed).toBeTrue()

        expect(() => client.emit('test', 'demo')).toThrowError('[Err] Websockets._checkConnection - connection closed.')
    })

})

afterEach(() => {
    this.server.close()
    WS.clean()
})
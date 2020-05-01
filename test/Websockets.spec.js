const Websockets = require('../index')
const domExtra = require('@testing-library/jest-dom')
import WS from "jest-websocket-mock";

expect.extend(domExtra)
jest.setTimeout(10 * 1000)

describe('Websockets', () => {

    beforeEach(() => {
        this.server = new WS(`ws://localhost:1234`, { jsonProtocol: true })
    })

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

            await expect(this.server).toReceiveMessage({ type: "_connected", payload: '' });
        } catch (e) {
            throw e
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
                expect(data).toContainAllKeys(['type', 'payload']);
                expect(data.type).toStrictEqual('test');
                expect(data.payload).toStrictEqual('Hello, World !');
            })

            this.server.send({ type: "test", payload: "Hello, World !" });
        } catch (e) {
            throw e
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

            setTimeout(async () => {
                await expect(this.server).toHaveReceivedMessages(['test', 'Hello, World !']);
            }, 500)
        } catch (e) {
            throw e
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

            setTimeout(async () => {
                await expect(this.server).toHaveReceivedMessages([
                    { type: "test", payload: {body: 'Hello, World !'} }
                ]);
            }, 500)
        } catch (e) {
            throw e
        }
    })

    afterEach(() => {
        this.server.close()
        WS.clean()
    })

})
import WebsocketsMessage from '../src/WebsocketsMessage'
import domExtra from '@testing-library/jest-dom'
const Blob = require("cross-blob")

expect.extend(domExtra)

describe('WebsocketsMessage', () => {

	describe('Serialize', () => {

		it('should serialize string data correctly', () => {
			const message = new WebsocketsMessage('Hello, World !')

			expect(message.serialize()).toStrictEqual("Hello, World !")
		})

		it('should serialize number data correctly', () => {
			const message = new WebsocketsMessage(1234)

			expect(message.serialize()).toStrictEqual('1234')
		})

		it('should serialize simple array data correctly', () => {
			const message = new WebsocketsMessage([1, 2, 3])

			expect(message.serialize()).toStrictEqual('[1,2,3]')
		})

		it('should serialize complex array data correctly', () => {
			const message = new WebsocketsMessage([1, 2, {id: 7}, ['test']])

			expect(message.serialize()).toStrictEqual('[1,2,{"id":7},["test"]]')
		})

		it('should serialize object data correctly', () => {
			const message = new WebsocketsMessage({ type: 'test', payload: 'Hello, World !' })

			expect(message.serialize()).toStrictEqual('{"type":"test","payload":"Hello, World !"}')
		})

		it('should serialize ArrayBuffer data correctly', () => {
			const message = new WebsocketsMessage(new ArrayBuffer(8))
			const data = message.serialize()

			expect(data).toBeInstanceOf(ArrayBuffer)
			expect(data.byteLength).toStrictEqual(8)
		})

		it('should serialize Blob data correctly', async () => {
			expect.assertions(2)

			const htmlParts = ['<span>Hello, World !</span>']
			const blob = new Blob(htmlParts, { type: 'text/html' })
			const message = new WebsocketsMessage(blob)
			const data = message.serialize()

			expect(data).toBeInstanceOf(Blob)

			const text = await data.text()
			expect(text).toStrictEqual(htmlParts[0])
		})
		
	})

	describe('Unserialize', () => {
		it('should unzesialize string data correctly', () => {
			const message = new WebsocketsMessage('Hello, World !')

			expect(message.unserialize()).toStrictEqual('Hello, World !')
		})

		it('should unzesialize number data correctly', () => {
			const message = new WebsocketsMessage('1234')

			expect(message.unserialize()).toStrictEqual(1234)
		})

		it('should unzesialize simple array data correctly', () => {
			const message = new WebsocketsMessage('[1, 2, 3]')

			expect(message.unserialize()).toStrictEqual([1, 2, 3])
		})

		it('should unzesialize complex array data correctly', () => {
			const message = new WebsocketsMessage('[1,2,{"id":7},["test"]]')

			expect(message.unserialize()).toStrictEqual([1, 2, { id: 7 }, ['test']])
		})

		it('should unzesialize JSON data correctly', () => {
			const message = new WebsocketsMessage('{"type":"test","payload":"Hello, World !"}')

			expect(message.unserialize()).toStrictEqual({ type: 'test', payload: 'Hello, World !' })
		})

		it('should unzesialize ArrayBuffer data correctly', () => {
			const message = new WebsocketsMessage(new ArrayBuffer(8))
			const data = message.unserialize()

			expect(data).toBeInstanceOf(ArrayBuffer)
			expect(data.byteLength).toStrictEqual(8)
		})

		it('should unserialize Blob data correctly', async () => {
			expect.assertions(2)

			const htmlParts = ['<span>Hello, World from server !</span>']
			const blob = new Blob(htmlParts, { type: 'text/html' })
			const message = new WebsocketsMessage(blob)
			const data = message.unserialize()

			expect(data).toBeInstanceOf(Blob)

			const text = await data.text()
			expect(text).toStrictEqual(htmlParts[0])
		})
	})

})

/**
 * @class
 * 
 * @namespace WebsocketsMessage
 * 
 * @typedef {*|Object|String|ArrayBuffer|Blob} WSData
 */
class WebsocketsMessage {

	/**
	 * @type {WSData}
	 * 
	 * @private
	 */
	_data = ''

	/**
	 * @type {Number}
	 * 
	 * @private
	 */
	_size = 0

	/**
	 * @returns {WSData}
	 * 
	 * @public
	 */
	get data() {
		return this._data
	}

	/**
	 * @returns {Number}
	 * 
	 * @public
	 */
	get size() {
		return this._size
	}

	/**
	 * @constructor
	 *
	 * @param {WSData} [data='']
	 *
	 * @throws {Error}
	 */
	constructor(data = '') {
		this._data = data
	}

	/**
	 * @returns {String|ArrayBuffer|Blob}
	 * 
	 * @public
	 */
	serialize() {
		if (
			this._data === null ||
			Array.isArray(this._data) ||
			this._data.constructor === Object
		) {
			try {
				this._data = JSON.stringify(this._data)

				this._size = this._data.length
			} catch { }
		} else if (this._data instanceof ArrayBuffer) {
			this._size = this._data.byteLength
		} else if (this._data instanceof Blob) {
			this._size = this._data.size
		} else if (
			typeof this._data === 'number' ||
			typeof this._data === 'boolean' ||
			typeof this._data === 'function'
		) {
			this._data = this._data.toString()

			this._size = this._data.length
		} else if (this._data === undefined) {
			this._data = ''

			this._size = 0
		}

		return this._data
	}

	/**
	 * @returns {WSData}
	 */
	unserialize() {
		try {
			return JSON.parse(this._data)
		} catch (e) {
			return this._data
		}
	}

}

if (typeof module !== 'undefined' &&
	typeof module.exports !== 'undefined' &&
	typeof global !== 'undefined'
) {
	module.exports = WebsocketsMessage
}

// Browser side
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
	if (!('WebsocketsMessage' in window)) {
		window['WebsocketsMessage'] = WebsocketsMessage
	}
}

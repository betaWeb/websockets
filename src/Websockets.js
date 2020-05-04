/**
 * @class
 */
class Websockets {
	/**
	 * @type {Object.<String, *>}
	 * 
	 * @public
	 * */
	options = {}

	/**
	 * @type {WebSocket}
	 *
	 * @public
	 */
	client = null

	/**
	 * @type {Number}
	 *
	 * @private
	 */
	_data_size = 0

	/**
	 * @type {Object.<String, Function[]>}
	 * 
	 * @private
	 */
	_events = {}

	/**
	 * @type {Number}
	 *
	 * @private
	 */
	_conn_retries = 0

	/**
	 * @type {Number}
	 *
	 * @private
	 */
	_send_retries = 0

	/**
	 * @property {String} [endpoint='']
	 * @property {String} [namespace='']
	 * @property {String} [scheme='auto'] 'ws', 'wss', 'auto'
	 * @property {String} base_url default: window.location.hostname
	 * @property {String|String[]} [protocols='']
	 * @property {Number} [connection_retries=0]
	 * @property {Number} [send_retries=3]
	 * @property {Boolean} [debug=false]
	 * @property {Object} ws_options
	 * @property {String} [ws_options.format='json']
	 * @property {Boolean} [ws_options.connectManually=true]
	 * @returns {Object.<String, *>}
	 */
	static get DEFAULT_OPTIONS() {
		return {
			endpoint: '',
			namespace: '',
			scheme: 'auto',
			base_url: window.location.hostname,
			port: null,
			protocols: [],
			type_key: 'type',
			payload_key: 'payload',
			connection_retries: 0,
			send_retries: 3,
			debug: false,
			onerror: () => {
				throw new Error('[Err] Websockets - unhandled error')
			},
			onclose: () => {},
			onopen: () => {},
			onprogress: null
		}
	}

	/**
	 * @returns {Object.<Number, String>}
	 */
	static get CLOSE_CODES() {
		return {
			1000: 'Normal closure',
			1001: 'Going Away',
			1002: 'Protocol Error',
			1003: 'Unsupported Data',
			1005: 'No Status Received',
			1006: 'Abnormal Closure',
			1007: 'Invalid frame payload data',
			1008: 'Policy Violation',
			1009: 'Message too big',
			1010: 'Missing Extension',
			1011: 'Internal Server Error',
			1012: 'Service Restart',
			1013: 'Try Again Later',
			1014: 'Bad Gateway',
			1015: 'TLS Handshake'
		}
	}


	/**
	 * @returns {Object.<String, String>}
	 */
	static get DEFAULT_EVENTS() {
		return {
			CONNECTED: '_connected',
			MESSAGE: '_message'
		}
	}

	/**
	 * @returns {String}
	 *
	 * @public
	 */
	get scheme() {
		if (this.options.scheme !== 'auto') {
			return this.options.scheme
		}

		return window.location.protocol === "https" ? "wss" : "ws"
	}

	/**
	 * @returns {String}
	 *
	 * @public
	 */
	get url() {
		let baseUrl = /^(wss?:)?\/\//.test(this.options.base_url) 
			? this.options.base_url 
			: `${this.scheme}://${this.options.base_url.replace(/^(https?:)?\/\//, '')}`

		if (this.options.port !== null && !baseUrl.endsWith(this.options.port)) {
			baseUrl += `:${this.options.port.toString()}`
		}

		baseUrl = baseUrl.replace(/\/$/, '')

		if (this.options.endpoint !== '') {
			return `${baseUrl}/${this.options.endpoint}`
		}

		return baseUrl
	}

	/**
	 * @returns {boolean}
	 *
	 * @private
	 */
	get hasSupport() {
		return 'WebSocket' in window || 'MozWebSocket' in window
	}

	/**
	 * @returns {Boolean}
	 *
	 * @public
	 */
	get isInitialized() {
		return this.client !== null
	}

	/**
	 * @returns {Boolean}
	 *
	 * @public
	 */
	get isConnecting() {
		return (
			this.isInitialized && 
			this.client.readyState === WebSocket.CONNECTING
		)
	}

	/**
	 * @returns {Boolean}
	 *
	 * @public
 	 */
	get isOpen() {
		return (
			this.isInitialized && 
			this.client.readyState === WebSocket.OPEN
		)
	}

	/**
	 * @returns {Boolean}
	 *
	 * @public
	 */
	get isSending() {
		return (
			this.isInitialized && 
			this.client.bufferedAmount > 0
		)
	}

	/**
	 * @returns {Boolean}
	 *
	 * @public
	 */
	get isClosed() {
		return this.isInitialized && (
			this.client.readyState === WebSocket.CLOSING ||
			this.client.readyState === WebSocket.CLOSED
		)
	}

	/**
	 * @returns {Object.<String, Function[]>}
	 *
	 * @public
	 */
	get events() {
		return this._events
	}

	/**
	 * @constructor
	 * 
	 * @param {Object} [options={}]
	 *
	 * @throws {Error}
	 */
	constructor(options = {}) {
		if (!this.hasSupport) {
			throw new Error("[Err] Websockets.constructor - your browser cannot supports WebSockets.")
		}

		this.options = {
			...Websockets.DEFAULT_OPTIONS,
			...options
		}

		if (window.location.protocol === 'http:' && this.options.scheme === 'wss') {
			throw new Error("[Err] Websockets.constructor - cannot use WebSockets in a mixed environment : do not open a secure WebSocket connection from a page loaded using HTTP.")
		} else if (window.location.protocol === 'https:' && this.options.scheme === 'ws') {
			throw new Error("[Err] Websockets.constructor - cannot use WebSockets in a mixed environment : do not open a non-secure WebSocket connection from a page loaded using HTTPS.")
		}
	}

	/**
	 * @returns {Promise}
	 *
	 * @public
	 */
	connect() {
		return new Promise(async (resolve, reject) => {
			try {
				this._instantiateClient()

				this.client.onerror = event => {
					this.options.onerror(event)
					reject()
				}

				this.client.onopen = event => {
					if (!this.isOpen) return

					this._messagesHandler()
					this.emit(Websockets.DEFAULT_EVENTS.CONNECTED)

					this.options.onopen(event)

					this.client.onclose = event => {
						const reason = Websockets.CLOSE_CODES[event.code]
							? Websockets.CLOSE_CODES[event.code]
							: 'Unknown Reason'

						this.options.onclose(event, reason)
					}

					resolve()
				}
			} catch (e) {
				await this._connectionRetry()
				reject(e)
			}
		})
	}

	/**
	 * @param {*|Object|String|ArrayBuffer|Blob} [data='']
	 *
	 * @returns {Promise}
	 * @throws {Error}
	 *
	 * @public
	 */
	send(data = '') {
		if (this.isClosed) {
			return new Promise((resolve) => {
				console.info('[Info] Websockets.send - connection closing or closed')

				resolve()
			});
		}

		try {
			data = this._prepareData(data)

			return new Promise((resolve, reject) => {
				try {
					this.client.send(data)

					this._debug(`Message sended.\npayload : ${data}`, 'send')

					if (this.options.onprogress !== null) {
						this._onProgress(data, resolve)
					} else {
						this._data_size = 0
						resolve()
					}
				} catch (e) {
					/**
					 * @todo send retry
					 */
					this._data_size = 0
					reject(e)
				}
			})
		} catch (e) {
			this._data_size = 0
			throw new Error(`[Err] Websockets.send - ${e.message}`)
		}
	}

	/**
	 * @param {String} type 
	 * @param {*} payload
	 * @param {Boolean} namespaced
	 *
	 * @returns {Promise}
	 * @throws {Error}
	 *
	 * @public
	 */
	emit(type, payload = '', namespaced = true) {
		if (namespaced === true)
			type = this._namespacedType(type)

		try {
			let promise = this.send({ 
				[this.options.type_key]: type, 
				[this.options.payload_key]: payload 
			})

			this._debug(`Event '${type}' emitted.`, 'emit')

			return promise
		} catch (e) {
			throw new Error(e)
		}
	}

	/**
	 * @param {String} type 
	 * @param {Function} callback 
	 * @param {Boolean} namespaced
	 *
	 * @returns {Websockets}
	 * @throws {Error}
	 *
	 * @public
	 * @fluent
	 */
	on(type, callback, namespaced = true) {
		if (namespaced === true)
			type = this._namespacedType(type)

		if (!this._events[type]) {
			this._events[type] = []
		}

		this._events[type].push(callback)

		this._debug(`Event '${type}' successfully added`, 'on')

		return this
	}

	/**
	 * @param {String} type
	 * @param {Function|null} [callback=null]
	 * @param {Boolean} namespaced
	 *
	 * @returns {Websockets}
	 * @throws {Error}
	 *
	 * @public
	 * @fluent
	 */
	off(type, callback = null, namespaced = true) {
		if (namespaced === true)
			type = this._namespacedType(type)

		if (!this._events[type]) {
			throw new Error('')
		}

		if (callback !== null) {
			this._events[type] = this._events[type].filter(cb =>
				// compare functions equality
				cb.toString().replace(/\s+/g, '') !== callback.toString().replace(/\s+/g, '')
			)

			if (this._events[type].length === 0) {
				this.off(type, null, namespaced)
			}

			this._debug(`Event '${type}' callback successfully removed`, 'off')
		} else {
			delete this._events[type]
			this._debug(`Event '${type}' successfully removed`, 'off')
		}

		return this
	}

	/**
	 * @param {Function} callback
	 *
	 * @returns {Websockets}
	 *
	 * @public
	 */
	onMessage(callback) {
		return this.on(
			Websockets.DEFAULT_EVENTS.MESSAGE, 
			callback
		) 
	}

	/**
	 * @returns {void|undefined}
	 * @throws {Error}
	 *
	 * @public
	 */
	disconnect() {
		if (this.isClosed) {
			console.info('[Info] Websockets.disconnect - connection already disconnected')

			return
		}

		if (this.isSending) {
			window.setTimeout(() => this.disconnect(), 500)
		} else {
			this._conn_retries = 0
			this._send_retries = 0

			this.client.close()
			this._debug('Websockets successfully disconnected', 'disconnect')
		}
	}

	/**
	 * @returns {void}
	 * @throws {Error}
	 *
	 * @public
	 */
	destroy() {
		this._events = {}
		this.disconnect()
		this.client = null
	}

	/**
	 * @returns {void}
	 * @throws {Error}
	 *
	 * @private
	 */
	_instantiateClient() {
		const wsConstructor = 'MozWebSocket' in window ? 'MozWebSocket' : 'WebSocket'

		try {
			this.client = new window[wsConstructor](
				this.url,
				this.options.protocols
			)
		} catch (e) {
			throw new Error(`[Err] Websockets._instantiateClient - error on '${wsConstructor}' client instantiation.`)
		}
	}

	/**
	 * @returns {undefined|Promise}
	 */
	async _connectionRetry() {
		if (this._conn_retries >= this.options.connection_retries) {
			if (this.options.connection_retries > 0) {
				this._debug(`Cannot establish connection after ${this._conn_retries} attempts`, '_connectionRetry')
			}

			this._conn_retries = 0

			return
		}

		this._conn_retries++

		this._debug(`Connection retry ${this._conn_retries}/${this.options.connection_retries}`, '_connectionRetry')

		await this.connect()
	}

	/**
	 * @returns {void}
	 *
	 * @private
	 */
	_messagesHandler() {
		this.client.onmessage = event => {
			let data
			try {
				data = JSON.parse(event.data)
			} catch (e) {
				data = event.data
			}

			this._dispatch(
				Websockets.DEFAULT_EVENTS.MESSAGE,
				data
			)

			if (data[this.options.type_key] !== undefined) {
				this._dispatch(data[this.options.type_key], data)
			}
		}
	}

	/**
	 * @param {*|Array|Object|String|ArrayBuffer|Blob} data
	 *
	 * @return {string|ArrayBuffer|Blob}
	 *
	 * @private
	 */
	_prepareData(data) {
		if (
			data === null ||
			Array.isArray(data) ||
			data.constructor === Object
		) {
			try {
				data = JSON.stringify(data)

				this._data_size = data.length
			} catch {}
		} else if (data instanceof ArrayBuffer) {
			this._data_size = data.byteLength
		} else if (data instanceof Blob) {
			this._data_size = data.size
		} else if (
			typeof data === 'number' ||
			typeof data === 'boolean' ||
			typeof data === 'function'
		) {
			data = data.toString()

			this._data_size = data.length
		} else if (data === undefined) {
			data = ''

			this._data_size = 0
		}

		return data
	}

	/**
	 * 
	 * @param {*|Object|String|ArrayBuffer|Blob} data
	 * @param {Function} resolver 
	 */
	_onProgress(data, resolver) {
		const interval = setInterval(() => {
			if (this.client.bufferedAmount > 0) {
				this.options.onprogress(this.client.bufferedAmount, this._data_size, data)
			} else {
				this.options.onprogress(0, this._data_size, data)
				this._data_size = 0
				clearInterval(interval)
				resolver()
			}
		}, 100)
	}

	/**
	 * 
	 * @param {String} type
	 * @param {*|Object|String|ArrayBuffer|Blob} data
	 * 
	 * @returns {void}
	 * 
	 * @private
	 */
	_dispatch(type, data) {
		if (this._events[type]) {
			this._debug(`'${type}' dispatched`, '_dispatch')
			this._events[type].forEach(cb => cb(data))
		}
	}

	/**
	 * @param {String} type
	 * 
	 * @returns {String}
	 *
	 * @private
	 */
	_namespacedType(type) {
		if (this.options.namespace !== '' && !type.startsWith(this.options.namespace)) {
			return `${this.options.namespace}_${type}`
		}

		return type
	}

	/**
	 * @param {String} message 
	 * @param {String|null} context
	 *
	 * @private
	 */
	_debug(message, context = null) {
		if (this.options.debug === true) {
			context = context !== null ? `.${context}` : ''
			console.info(`[DEBUG] Websockets${context} - ${message}`)
		}
	}

}

// Server side
if (typeof module !== 'undefined' &&
	typeof module.exports !== 'undefined' &&
	typeof global !== 'undefined'
) {
	module.exports = Websockets
}

// Browser side
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
	if (!('Websockets' in window)) {
		window['Websockets'] = Websockets
	}
}

/**
 * @class
 */
class Websockets {
	/**
	 * @type {String}
	 * 
	 * @public
	 */
	endpoint = '';

	/**
	 * @type {Object}
	 * 
	 * @public
	 * */
	options = {};

	/**
	 * @type {WebSocket}
	 *
	 * @public
	 */
	client = null;

	/**
	 * @type {Object}
	 * 
	 * @private
	 */
	_events = {};

	/**
	 * @property {String} [namespace='']
	 * @property {String} [sheme='auto'] 'ws', 'wss', 'auto'
	 * @property {String} base_url default: window.location.hostname
	 * @property {String|String[]} [protocols='']
	 * @property {Boolean} [debug=false]
	 * @property {Object} ws_options
	 * @property {String} [ws_options.format='json']
	 * @property {Boolean} [ws_options.connectManually=true]
	 * @returns {Object.<String, *>}
	 */
	static get DEFAULT_OPTIONS() {
		return {
			namespace: '',
			sheme: 'auto',
			base_url: window.location.hostname,
			port: null,
			protocols: [],
			debug: false,
			onerror: () => {
				throw new Error('[Err] Websockets - unhandled error');
			},
			onclose: () => {},
			onopen: () => {}
		};
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
	get sheme() {
		if (this.options.sheme !== 'auto') {
			return this.options.sheme; 
		}

		return window.location.protocol === "https" ? "wss" : "ws";
	}

	/**
	 * @returns {String}
	 *
	 * @public
	 */
	get url() {
		let baseUrl = /^(wss?:)?\/\//.test(this.options.base_url) 
			? this.options.base_url 
			: `${this.sheme}://${this.options.base_url.replace(/^(https?:)?\/\//, '')}`;

		if (this.options.port !== null && !baseUrl.endsWith(this.options.port)) {
			baseUrl += `:${this.options.port.toString()}`
		}

		return `${baseUrl.replace(/\/$/, '')}/${this.endpoint}`;
	}

	/**
	 * @returns {Boolean}
	 *
	 * @public
	 */
	get isInitialized() {
		return this.client !== null;
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
		);
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
		);
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
		);
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
		);
	}

	/**
	 * @returns {Object.<String, Function[]>}
	 *
	 * @public
	 */
	get events() {
		return this._events;
	}

	/**
	 * @constructor
	 * 
	 * @param {String|Object} [endpoint=''] 
	 * @param {Object} [options={}]
	 */
	constructor(endpoint = '', options = {}) {
		if (typeof endpoint === 'object') {
			options = endpoint
			this.endpoint = ''
		} else {
			this.endpoint = endpoint;
		}

		this.options = {
			...Websockets.DEFAULT_OPTIONS,
			...options
		};

		if (window.location.protocol === 'http:' && this.options.sheme === 'wss') {
			throw new Error("[Err] Websockets.url - cannot use WebSockets in a mixed environment : do not open a secure WebSocket connection from a page loaded using HTTP.");
		} else if (window.location.protocol === 'https:' && this.options.sheme === 'ws') {
			throw new Error("[Err] Websockets.url - cannot use WebSockets in a mixed environment : do not open a non-secure WebSocket connection from a page loaded using HTTPS.");
		}
	}

	/**
	 * @returns {void}
	 *
	 * @public
	 */
	connect() {
		try {
			this.client = new WebSocket(
				this.url,
				this.options.protocols
			);

			this.client.onerror = event => {
				this.options.onerror(event);
			};

			this.client.onopen = event => {
				if (!this.isOpen) return;

				this._messagesHandler();
				this.emit(Websockets.DEFAULT_EVENTS.CONNECTED);

				this.options.onopen(event);

				this.client.onclose = event => {
					const reason = Websockets.CLOSE_CODES[event.code]
						? Websockets.CLOSE_CODES[event.code]
						: 'Unknown Reason';

					this.options.onclose(event, reason);
				};
			};
		} catch (e) {
			throw new Error('[Err] Websockets.connect - error on socket connexion \n' + e);
		}
	}

	/**
	 * @param {*|Object|String|ArrayBuffer|Blob} [data='']
	 *
	 * @returns {Websockets}
	 *
	 * @public
	 * @fluent
	 */
	send(data = '') {
		this._checkConnection();
		if (this.isClosed) return;

		try {
			if (
				typeof data !== 'string' && 
				!(data instanceof ArrayBuffer) && 
				!(data instanceof Blob)
			) {
				data = JSON.stringify(data);
			}

			this.client.send(data);

			this._debug(`Message sended.\npayload : ${JSON.stringify(data)}`, 'send');
		} catch (e) {
			throw new Error(`[Err] Websockets.send - ${e.message}`);
		}

		return this;
	}

	/**
	 * @param {String} type 
	 * @param {*} payload
	 * @param {Boolean} namespaced
	 *
	 * @returns {Promise}
	 *
	 * @public
	 */
	emit(type, payload = {}, namespaced = true) {
		this._checkConnection();

		if (namespaced === true)
			type = this._namespacedType(type);

		return new Promise((resolve, reject) => {
			try {
				this.send({ type, payload });

				this._debug(`Event '${type}' emitted.`, 'emit');

				this.onProgess(finished => finished && resolve(type));
			} catch (e) {
				reject(e);
			}
		})
	}

	/**
	 * @param {String} type 
	 * @param {Function} callback 
	 * @param {Boolean} namespaced
	 *
	 * @returns {Websockets}
	 *
	 * @public
	 * @fluent
	 */
	on(type, callback, namespaced = true) {
		this._checkConnection();

		if (namespaced === true)
			type = this._namespacedType(type);

		if (!this._events[type]) {
			this._events[type] = [];
		}

		this._events[type].push(callback);

		this._debug(`Event '${type}' added successfully`, 'on');

		return this;
	}

	/**
	 * @param {Function} callback
	 *
	 * @returns {Websockets}
	 *
	 * @public
	 * @fluent
	 */
	onProgess(callback) {
		const interval = window.setInterval(() => {
			const finished = this.client.bufferedAmount === 0;

			callback(finished, this.client.bufferedAmount);

			if (finished) {
				clearInterval(interval);
			}
		}, 100);

		return this;
	}

	/**
	 * @param {Function} callback
	 *
	 * @public
	 */
	onMessage(callback) {
		return this.on(
			Websockets.DEFAULT_EVENTS.MESSAGE, 
			callback
		); 
	}

	/**
	 * @returns {void}
	 *
	 * @public
	 */
	disconnect() {
		this._checkConnection();

		if (this.isSending) {
			window.setTimeout(() => this.disconnect(), 500);
		} else {
			this.client.close();
			this._debug('Websockets successfully disconnected', 'disconnect');
		}
	}

	_checkConnection() {
		if (this.isClosed) {
			throw new Error('[Err] Websockets._checkConnection - connection closed.')
		}
	}

	/**
	 * @returns {void}
	 *
	 * @private
	 */
	_messagesHandler() {
		this.client.onmessage = event => {
			let data;
			try {
				data = JSON.parse(event.data);
			} catch (e) {
				data = event.data;
			}

			this._dispatchEvents(
				Websockets.DEFAULT_EVENTS.MESSAGE,
				data
			);

			if (data.type !== undefined) {
				this._dispatchEvents(data.type, data);
			}
		};
	}

	/**
	 * 
	 * @param {String} type 
	 * @param {Object} data
	 * 
	 * @returns {void}
	 * 
	 * @private
	 */
	_dispatchEvents(type, data) {
		if (this._events[type]) {
			this._debug(`'${type}' dispatched`, '_dispatchEvents');
			this._events[type].forEach(cb => cb(data));
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
			return `${this.options.namespace}_${type}`;
		}

		return type;
	}

	/**
	 * @param {String} message 
	 * @param {String|null} context
	 *
	 * @private
	 */
	_debug(message, context = null) {
		if (this.options.debug === true) {
			context = context !== null ? `.${context}` : '';
			console.info(`[DEBUG] Websockets${context} - ${message}`);
		}
	}

}

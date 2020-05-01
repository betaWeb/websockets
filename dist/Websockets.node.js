(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Websockets", [], factory);
	else if(typeof exports === 'object')
		exports["Websockets"] = factory();
	else
		root["Websockets"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./src/Websockets.js":
/*!***************************!*\
  !*** ./src/Websockets.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * @class
 */
var Websockets = /*#__PURE__*/function () {
  (0, _createClass2.default)(Websockets, [{
    key: "scheme",

    /**
     * @returns {String}
     *
     * @public
     */
    get: function get() {
      if (this.options.scheme !== 'auto') {
        return this.options.scheme;
      }

      return window.location.protocol === "https" ? "wss" : "ws";
    }
    /**
     * @returns {String}
     *
     * @public
     */

  }, {
    key: "url",
    get: function get() {
      var baseUrl = /^(wss?:)?\/\//.test(this.options.base_url) ? this.options.base_url : "".concat(this.scheme, "://").concat(this.options.base_url.replace(/^(https?:)?\/\//, ''));

      if (this.options.port !== null && !baseUrl.endsWith(this.options.port)) {
        baseUrl += ":".concat(this.options.port.toString());
      }

      baseUrl = baseUrl.replace(/\/$/, '');

      if (this.options.endpoint !== '') {
        return "".concat(baseUrl, "/").concat(this.options.endpoint);
      }

      return baseUrl;
    }
    /**
     * @returns {Boolean}
     *
     * @public
     */

  }, {
    key: "isInitialized",
    get: function get() {
      return this.client !== null;
    }
    /**
     * @returns {Boolean}
     *
     * @public
     */

  }, {
    key: "isConnecting",
    get: function get() {
      return this.isInitialized && this.client.readyState === WebSocket.CONNECTING;
    }
    /**
     * @returns {Boolean}
     *
     * @public
    	 */

  }, {
    key: "isOpen",
    get: function get() {
      return this.isInitialized && this.client.readyState === WebSocket.OPEN;
    }
    /**
     * @returns {Boolean}
     *
     * @public
     */

  }, {
    key: "isSending",
    get: function get() {
      return this.isInitialized && this.client.bufferedAmount > 0;
    }
    /**
     * @returns {Boolean}
     *
     * @public
     */

  }, {
    key: "isClosed",
    get: function get() {
      return this.isInitialized && (this.client.readyState === WebSocket.CLOSING || this.client.readyState === WebSocket.CLOSED);
    }
    /**
     * @returns {Object.<String, Function[]>}
     *
     * @public
     */

  }, {
    key: "events",
    get: function get() {
      return this._events;
    }
    /**
     * @constructor
     * 
     * @param {Object} [options={}]
     *
     * @throws
     */

  }], [{
    key: "DEFAULT_OPTIONS",

    /**
     * @type {Object}
     * 
     * @public
     * */

    /**
     * @type {WebSocket}
     *
     * @public
     */

    /**
     * @type {Object}
     * 
     * @private
     */

    /**
     * @property {String} [endpoint='']
     * @property {String} [namespace='']
     * @property {String} [scheme='auto'] 'ws', 'wss', 'auto'
     * @property {String} base_url default: window.location.hostname
     * @property {String|String[]} [protocols='']
     * @property {Boolean} [debug=false]
     * @property {Object} ws_options
     * @property {String} [ws_options.format='json']
     * @property {Boolean} [ws_options.connectManually=true]
     * @returns {Object.<String, *>}
     */
    get: function get() {
      return {
        endpoint: '',
        namespace: '',
        scheme: 'auto',
        base_url: window.location.hostname,
        port: null,
        protocols: [],
        debug: false,
        onerror: function onerror() {
          throw new Error('[Err] Websockets - unhandled error');
        },
        onclose: function onclose() {},
        onopen: function onopen() {},
        onprogress: null
      };
    }
    /**
     * @returns {Object.<Number, String>}
     */

  }, {
    key: "CLOSE_CODES",
    get: function get() {
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
      };
    }
    /**
     * @returns {Object.<String, String>}
     */

  }, {
    key: "DEFAULT_EVENTS",
    get: function get() {
      return {
        CONNECTED: '_connected',
        MESSAGE: '_message'
      };
    }
  }]);

  function Websockets() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2.default)(this, Websockets);
    (0, _defineProperty2.default)(this, "options", {});
    (0, _defineProperty2.default)(this, "client", null);
    (0, _defineProperty2.default)(this, "_events", {});
    this.options = _objectSpread(_objectSpread({}, Websockets.DEFAULT_OPTIONS), options);

    if (window.location.protocol === 'http:' && this.options.scheme === 'wss') {
      throw new Error("[Err] Websockets.url - cannot use WebSockets in a mixed environment : do not open a secure WebSocket connection from a page loaded using HTTP.");
    } else if (window.location.protocol === 'https:' && this.options.scheme === 'ws') {
      throw new Error("[Err] Websockets.url - cannot use WebSockets in a mixed environment : do not open a non-secure WebSocket connection from a page loaded using HTTPS.");
    }
  }
  /**
   * @returns {Promise}
   *
   * @public
   */


  (0, _createClass2.default)(Websockets, [{
    key: "connect",
    value: function connect() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        try {
          _this.client = new WebSocket(_this.url, _this.options.protocols);

          _this.client.onerror = function (event) {
            _this.options.onerror(event);

            reject();
          };

          _this.client.onopen = function (event) {
            if (!_this.isOpen) return;

            _this._messagesHandler();

            _this.emit(Websockets.DEFAULT_EVENTS.CONNECTED);

            _this.options.onopen(event);

            _this.client.onclose = function (event) {
              var reason = Websockets.CLOSE_CODES[event.code] ? Websockets.CLOSE_CODES[event.code] : 'Unknown Reason';

              _this.options.onclose(event, reason);
            };

            resolve();
          };
        } catch (e) {
          reject(e);
        }
      });
    }
    /**
     * @param {*|Object|String|ArrayBuffer|Blob} [data='']
     * @param {Function} progressCallback
     *
     * @returns {Promise}
     * @throws
     *
     * @public
     */

  }, {
    key: "send",
    value: function send() {
      var _this2 = this;

      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      this._checkConnection();

      try {
        if (typeof data !== 'string' && !(data instanceof ArrayBuffer) && !(data instanceof Blob)) {
          try {
            data = JSON.stringify(data);
          } catch (_unused) {}
        }

        return new Promise(function (resolve, reject) {
          try {
            _this2.client.send(data);

            _this2._debug("Message sended.\npayload : ".concat(data), 'send');

            if (_this2.options.onprogress !== null) {
              var interval = setInterval(function () {
                if (_this2.client.bufferedAmount > 0) {
                  _this2.options.onprogress(_this2.client.bufferedAmount, data);
                } else {
                  _this2.options.onprogress(0, data);

                  clearInterval(interval);
                  resolve();
                }
              }, 100);
            } else {
              resolve();
            }
          } catch (e) {
            reject(e);
          }
        });
      } catch (e) {
        throw new Error("[Err] Websockets.send - ".concat(e.message));
      }
    }
    /**
     * @param {String} type 
     * @param {*} payload
     * @param {Boolean} namespaced
     *
     * @returns {Websockets}
     * @throws
     *
     * @public
     */

  }, {
    key: "emit",
    value: function emit(type) {
      var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var namespaced = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      this._checkConnection();

      if (namespaced === true) type = this._namespacedType(type);

      try {
        this.send({
          type: type,
          payload: payload
        });

        this._debug("Event '".concat(type, "' emitted."), 'emit');
      } catch (e) {
        throw new Error(e);
      }

      return this;
    }
    /**
     * @param {String} type 
     * @param {Function} callback 
     * @param {Boolean} namespaced
     *
     * @returns {Websockets}
     * @throws
     *
     * @public
     * @fluent
     */

  }, {
    key: "on",
    value: function on(type, callback) {
      var namespaced = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      this._checkConnection();

      if (namespaced === true) type = this._namespacedType(type);

      if (!this._events[type]) {
        this._events[type] = [];
      }

      this._events[type].push(callback);

      this._debug("Event '".concat(type, "' successfully added"), 'on');

      return this;
    }
    /**
     * @param {String} type
     * @param {Function|null} [callback=null]
     * @param {Boolean} namespaced
     *
     * @returns {Websockets}
     * @throws
     *
     * @public
     * @fluent
     */

  }, {
    key: "off",
    value: function off(type) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var namespaced = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      this._checkConnection();

      if (namespaced === true) type = this._namespacedType(type);

      if (!this._events[type]) {
        throw new Error('');
      }

      if (callback !== null) {
        this._events[type] = this._events[type].filter(function (cb) {
          return (// compare functions equality
            cb.toString().replace(/\s+/g, '') !== callback.toString().replace(/\s+/g, '')
          );
        });

        if (this._events[type].length === 0) {
          this.off(type, null, namespaced);
        }

        this._debug("Event '".concat(type, "' callback successfully removed"), 'off');
      } else {
        delete this._events[type];

        this._debug("Event '".concat(type, "' successfully removed"), 'off');
      }

      return this;
    }
    /**
     * @param {Function} callback
     *
     * @public
     */

  }, {
    key: "onMessage",
    value: function onMessage(callback) {
      return this.on(Websockets.DEFAULT_EVENTS.MESSAGE, callback);
    }
    /**
     * @returns {void}
     * @throws
     *
     * @public
     */

  }, {
    key: "disconnect",
    value: function disconnect() {
      var _this3 = this;

      this._checkConnection();

      if (this.isSending) {
        window.setTimeout(function () {
          return _this3.disconnect();
        }, 500);
      } else {
        this.client.close();

        this._debug('Websockets successfully disconnected', 'disconnect');
      }
    }
    /**
     * @throws
     * @private
     */

  }, {
    key: "_checkConnection",
    value: function _checkConnection() {
      if (this.isClosed) {
        throw new Error('[Err] Websockets._checkConnection - connection closed.');
      }
    }
    /**
     * @returns {void}
     *
     * @private
     */

  }, {
    key: "_messagesHandler",
    value: function _messagesHandler() {
      var _this4 = this;

      this.client.onmessage = function (event) {
        var data;

        try {
          data = JSON.parse(event.data);
        } catch (e) {
          data = event.data;
        }

        _this4._dispatch(Websockets.DEFAULT_EVENTS.MESSAGE, data);

        if (data.type !== undefined) {
          _this4._dispatch(data.type, data);
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

  }, {
    key: "_dispatch",
    value: function _dispatch(type, data) {
      if (this._events[type]) {
        this._debug("'".concat(type, "' dispatched"), '_dispatch');

        this._events[type].forEach(function (cb) {
          return cb(data);
        });
      }
    }
    /**
     * @param {String} type
     * 
     * @returns {String}
     *
     * @private
     */

  }, {
    key: "_namespacedType",
    value: function _namespacedType(type) {
      if (this.options.namespace !== '' && !type.startsWith(this.options.namespace)) {
        return "".concat(this.options.namespace, "_").concat(type);
      }

      return type;
    }
    /**
     * @param {String} message 
     * @param {String|null} context
     *
     * @private
     */

  }, {
    key: "_debug",
    value: function _debug(message) {
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (this.options.debug === true) {
        context = context !== null ? ".".concat(context) : '';
        console.info("[DEBUG] Websockets".concat(context, " - ").concat(message));
      }
    }
  }]);
  return Websockets;
}(); // Server side


if ( true && typeof module.exports !== 'undefined' && typeof global !== 'undefined') {
  module.exports = Websockets;
} // Browser side


if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  if (!('Websockets' in window)) {
    window['Websockets'] = Websockets;
  }
}

/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./src/Websockets.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/Websockets.js */"./src/Websockets.js");


/***/ })

/******/ });
});
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

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

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

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./src/Websockets.js":
/*!***************************!*\
  !*** ./src/Websockets.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var WebsocketsMessage = __webpack_require__(/*! ./WebsocketsMessage */ "./src/WebsocketsMessage.js");
/**
 * @class
 *
 * @namespace Websockets
 * 
 * @typedef {{once: Boolean, callback: Function, namespaced: Boolean}} WSEvent
 * @typedef {*|Object|String|ArrayBuffer|Blob} WSData
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
     * @returns {boolean}
     *
     * @private
     */

  }, {
    key: "hasSupport",
    get: function get() {
      return 'WebSocket' in window || 'MozWebSocket' in window;
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
     * @returns {WSEvent[]}
     *
     * @public
     */

  }, {
    key: "events",
    get: function get() {
      return this._events;
    }
    /**
     * @returns {WebsocketsMessage}
     *
     * @public
     */

  }, {
    key: "currentData",
    get: function get() {
      return this._current_data;
    }
    /**
     * @constructor
     * 
     * @param {Object} [options={}]
     *
     * @throws {Error}
     */

  }], [{
    key: "DEFAULT_OPTIONS",

    /**
     * @type {Object.<String, *>}
     * 
     * @public
     * */

    /**
     * @type {WebSocket}
     *
     * @public
     */

    /**
     * @type {WebsocketsMessage|null}
     *
     * @private
     */

    /**
     * @type {Object.<String, WSEvent[]>}
     * 
     * @private
     */

    /**
     * @type {Number}
     *
     * @private
     */

    /**
     * @type {Number}
     *
     * @private
     */

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
    get: function get() {
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
    (0, _defineProperty2.default)(this, "_current_data", null);
    (0, _defineProperty2.default)(this, "_events", {});
    (0, _defineProperty2.default)(this, "_conn_retries", 0);
    (0, _defineProperty2.default)(this, "_send_retries", 0);

    if (!this.hasSupport) {
      throw new Error("[Err] Websockets.constructor - your browser cannot supports WebSockets.");
    }

    this.options = _objectSpread(_objectSpread({}, Websockets.DEFAULT_OPTIONS), options);

    if (window.location.protocol === 'http:' && this.options.scheme === 'wss') {
      throw new Error("[Err] Websockets.constructor - cannot use WebSockets in a mixed environment : do not open a secure WebSocket connection from a page loaded using HTTP.");
    } else if (window.location.protocol === 'https:' && this.options.scheme === 'ws') {
      throw new Error("[Err] Websockets.constructor - cannot use WebSockets in a mixed environment : do not open a non-secure WebSocket connection from a page loaded using HTTPS.");
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

      return new Promise( /*#__PURE__*/function () {
        var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(resolve, reject) {
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;

                  _this._instantiateClient();

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

                  _context.next = 11;
                  break;

                case 6:
                  _context.prev = 6;
                  _context.t0 = _context["catch"](0);
                  _context.next = 10;
                  return _this._connectionRetry();

                case 10:
                  reject(_context.t0);

                case 11:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[0, 6]]);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    }
    /**
     * @param {WSData} [data='']
     *
     * @returns {Promise}
     * @throws {Error}
     *
     * @public
     */

  }, {
    key: "send",
    value: function send() {
      var _this2 = this;

      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (this.isClosed) {
        return new Promise(function (resolve) {
          console.info('[Info] Websockets.send - connection closing or closed');
          resolve();
        });
      }

      try {
        this._current_data = new WebsocketsMessage(data);
        return new Promise(function (resolve, reject) {
          try {
            var _data = _this2._current_data.serialize();

            _this2.client.send(_data);

            _this2._debug("Message sended.\npayload : ".concat(_data), 'send');

            if (_this2.options.onprogress !== null) {
              _this2._onProgress(_data, resolve);
            } else {
              _this2._current_data = null;
              resolve();
            }
          } catch (e) {
            /**
             * @todo send retry
             */
            _this2._current_data = null;
            reject(e);
          }
        });
      } catch (e) {
        this._current_data = null;
        throw new Error("[Err] Websockets.send - ".concat(e.message));
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

  }, {
    key: "emit",
    value: function emit(type) {
      var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var namespaced = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      if (namespaced === true) type = this._namespacedType(type);

      try {
        var _this$send;

        var promise = this.send((_this$send = {}, (0, _defineProperty2.default)(_this$send, this.options.type_key, type), (0, _defineProperty2.default)(_this$send, this.options.payload_key, payload), _this$send));

        this._debug("Event '".concat(type, "' emitted."), 'emit');

        return promise;
      } catch (e) {
        throw new Error(e);
      }
    }
    /**
     * @param {String} type 
     * @param {Function} callback 
     * @param {Boolean} [namespaced=false]
     *
     * @returns {Websockets}
     *
     * @public
     * @fluent
     */

  }, {
    key: "on",
    value: function on(type, callback) {
      var namespaced = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return this._on(type, callback, namespaced, false);
    }
    /**
     * @param {String} type 
     * @param {Function} callback 
     * @param {Boolean} [namespaced=false]
     *
     * @returns {Websockets}
     *
     * @public
     * @fluent
     */

  }, {
    key: "once",
    value: function once(type, callback) {
      var namespaced = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return this._on(type, callback, namespaced, true);
    }
    /**
     * @param {String} type
     * @param {Function|null} [callback=null]
     * @param {Boolean} [namespaced=false]
     *
     * @returns {Websockets}
     * @throws {Error}
     *
     * @public
     * @fluent
     */

  }, {
    key: "off",
    value: function off(type) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var namespaced = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      if (namespaced === true) type = this._namespacedType(type);

      if (!this._events[type]) {
        throw new Error('');
      }

      if (callback !== null) {
        this._events[type] = this._events[type].filter(function (event) {
          return (// compare functions equality
            event.callback.toString().replace(/\s+/g, '') !== callback.toString().replace(/\s+/g, '')
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
     * @returns {Websockets}
     *
     * @public
     */

  }, {
    key: "onMessage",
    value: function onMessage(callback) {
      return this.on(Websockets.DEFAULT_EVENTS.MESSAGE, callback);
    }
    /**
     * @returns {void|undefined}
     * @throws {Error}
     *
     * @public
     */

  }, {
    key: "disconnect",
    value: function disconnect() {
      var _this3 = this;

      if (this.isClosed) {
        console.info('[Info] Websockets.disconnect - connection already disconnected');
        return;
      }

      if (this.isSending) {
        window.setTimeout(function () {
          return _this3.disconnect();
        }, 500);
      } else {
        this._conn_retries = 0;
        this._send_retries = 0;
        this.client.close();

        this._debug('Websockets successfully disconnected', 'disconnect');
      }
    }
    /**
     * @returns {void}
     * @throws {Error}
     *
     * @public
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this._events = {};
      this.disconnect();
      this.client = null;
    }
    /**
     * @param {String} type 
     * @param {Function} callback 
     * @param {Boolean} [namespaced=false]
     * @param {Boolean} [once=false]
     *
     * @returns {Websockets}
     *
     * @private
     * @fluent
     */

  }, {
    key: "_on",
    value: function _on(type, callback) {
      var namespaced = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var once = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      if (namespaced === true) type = this._namespacedType(type);

      if (!this._events[type]) {
        this._events[type] = [];
      }
      /**
       * @var {WSEvent}
       */


      var event = {
        once: once,
        callback: callback,
        namespaced: namespaced
      };

      this._events[type].push(event);

      this._debug("Event '".concat(type, "' successfully added"), 'on');

      return this;
    }
    /**
     * @returns {void}
     * @throws {Error}
     *
     * @private
     */

  }, {
    key: "_instantiateClient",
    value: function _instantiateClient() {
      var wsConstructor = 'MozWebSocket' in window ? 'MozWebSocket' : 'WebSocket';

      try {
        this.client = new window[wsConstructor](this.url, this.options.protocols);
      } catch (e) {
        throw new Error("[Err] Websockets._instantiateClient - error on '".concat(wsConstructor, "' client instantiation."));
      }
    }
    /**
     * @returns {undefined|Promise}
     * 
     * @private
     */

  }, {
    key: "_connectionRetry",
    value: function () {
      var _connectionRetry2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(this._conn_retries >= this.options.connection_retries)) {
                  _context2.next = 4;
                  break;
                }

                if (this.options.connection_retries > 0) {
                  this._debug("Cannot establish connection after ".concat(this._conn_retries, " attempts"), '_connectionRetry');
                }

                this._conn_retries = 0;
                return _context2.abrupt("return");

              case 4:
                this._conn_retries++;

                this._debug("Connection retry ".concat(this._conn_retries, "/").concat(this.options.connection_retries), '_connectionRetry');

                _context2.next = 8;
                return this.connect();

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _connectionRetry() {
        return _connectionRetry2.apply(this, arguments);
      }

      return _connectionRetry;
    }()
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
        var data = new WebsocketsMessage(event.data).unserialize();

        _this4._dispatch(Websockets.DEFAULT_EVENTS.MESSAGE, data);

        if (data[_this4.options.type_key] !== undefined) {
          _this4._dispatch(data[_this4.options.type_key], data);
        }
      };
    }
    /**
     * 
     * @param {WSData} data
     * @param {Function} resolver 
     * 
     * @private
     */

  }, {
    key: "_onProgress",
    value: function _onProgress(data, resolver) {
      var _this5 = this;

      var interval = setInterval(function () {
        if (_this5.client.bufferedAmount > 0) {
          _this5.options.onprogress(_this5.client.bufferedAmount, _this5._current_data.size, data);
        } else {
          _this5.options.onprogress(0, _this5._current_data.size, data);

          _this5._current_data = null;
          clearInterval(interval);
          resolver();
        }
      }, 100);
    }
    /**
     * 
     * @param {String} type
     * @param {WSData} data
     * 
     * @returns {void}
     * 
     * @private
     */

  }, {
    key: "_dispatch",
    value: function _dispatch(type, data) {
      var _this6 = this;

      if (this._events[type]) {
        this._debug("'".concat(type, "' dispatched"), '_dispatch');

        this._events[type].forEach(
        /**
         * @param {WSEvent} event
         */
        function (event) {
          event.callback(data);

          if (event.once === true) {
            _this6.off(type, data.callback, data.namespaced);
          }
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

/***/ "./src/WebsocketsMessage.js":
/*!**********************************!*\
  !*** ./src/WebsocketsMessage.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

/**
 * @class
 * 
 * @namespace WebsocketsMessage
 * 
 * @typedef {*|Object|String|ArrayBuffer|Blob} WSData
 */
var WebsocketsMessage = /*#__PURE__*/function () {
  (0, _createClass2.default)(WebsocketsMessage, [{
    key: "data",

    /**
     * @type {WSData}
     * 
     * @private
     */

    /**
     * @type {Number}
     * 
     * @private
     */

    /**
     * @returns {WSData}
     * 
     * @public
     */
    get: function get() {
      return this._data;
    }
    /**
     * @returns {Number}
     * 
     * @public
     */

  }, {
    key: "size",
    get: function get() {
      return this._size;
    }
    /**
     * @constructor
     *
     * @param {WSData} [data='']
     *
     * @throws {Error}
     */

  }]);

  function WebsocketsMessage() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    (0, _classCallCheck2.default)(this, WebsocketsMessage);
    (0, _defineProperty2.default)(this, "_data", '');
    (0, _defineProperty2.default)(this, "_size", 0);
    this._data = data;
  }
  /**
   * @returns {String|ArrayBuffer|Blob}
   * 
   * @public
   */


  (0, _createClass2.default)(WebsocketsMessage, [{
    key: "serialize",
    value: function serialize() {
      if (this._data === null || Array.isArray(this._data) || this._data.constructor === Object) {
        try {
          this._data = JSON.stringify(this._data);
          this._size = this._data.length;
        } catch (_unused) {}
      } else if (this._data instanceof ArrayBuffer) {
        this._size = this._data.byteLength;
      } else if (this._data instanceof Blob) {
        this._size = this._data.size;
      } else if (typeof this._data === 'number' || typeof this._data === 'boolean' || typeof this._data === 'function') {
        this._data = this._data.toString();
        this._size = this._data.length;
      } else if (this._data === undefined) {
        this._data = '';
        this._size = 0;
      }

      return this._data;
    }
    /**
     * @returns {WSData}
     */

  }, {
    key: "unserialize",
    value: function unserialize() {
      try {
        return JSON.parse(this._data);
      } catch (e) {
        return this._data;
      }
    }
  }]);
  return WebsocketsMessage;
}();

if ( true && typeof module.exports !== 'undefined' && typeof global !== 'undefined') {
  module.exports = WebsocketsMessage;
} // Browser side


if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  if (!('WebsocketsMessage' in window)) {
    window['WebsocketsMessage'] = WebsocketsMessage;
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
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([3,2,3]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _search_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _search_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_search_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_images_google_keep_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _static_images_google_keep_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_images_google_keep_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// document.write('search page!')


 // require('./search.less')




var Search =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search() {
    _classCallCheck(this, Search);

    return _possibleConstructorReturn(this, _getPrototypeOf(Search).apply(this, arguments));
  }

  _createClass(Search, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "search-text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _static_images_google_keep_png__WEBPACK_IMPORTED_MODULE_3___default.a,
        width: "300px"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Search Text")));
    }
  }]);

  return Search;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Search, null), document.getElementById('app'));

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var printWarning = function () {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(8);

  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function (text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */


function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }

        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }

        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */


checkPropTypes.resetWarningCache = function () {
  if (true) {
    loggedTypeFailures = {};
  }
};

module.exports = checkPropTypes;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(12);
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v0.17.0
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


if (true) {
  (function () {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    var enableSchedulerDebugging = false;
    var enableIsInputPending = false;
    var enableMessageLoopImplementation = true;
    var enableProfiling = true; // works by scheduling a requestAnimationFrame, storing the time for the start
    // of the frame, then scheduling a postMessage which gets scheduled after paint.
    // Within the postMessage handler do as much work as possible until time + frame
    // rate. By separating the idle call into a separate event tick we ensure that
    // layout, paint and other browser work is counted against the available time.
    // The frame rate is dynamically adjusted.

    var requestHostCallback;
    var requestHostTimeout;
    var cancelHostTimeout;
    var shouldYieldToHost;
    var requestPaint;

    if ( // If Scheduler runs in a non-DOM environment, it falls back to a naive
    // implementation using setTimeout.
    typeof window === 'undefined' || // Check if MessageChannel is supported, too.
    typeof MessageChannel !== 'function') {
      // If this accidentally gets imported in a non-browser environment, e.g. JavaScriptCore,
      // fallback to a naive implementation.
      var _callback = null;
      var _timeoutID = null;

      var _flushCallback = function () {
        if (_callback !== null) {
          try {
            var currentTime = exports.unstable_now();
            var hasRemainingTime = true;

            _callback(hasRemainingTime, currentTime);

            _callback = null;
          } catch (e) {
            setTimeout(_flushCallback, 0);
            throw e;
          }
        }
      };

      var initialTime = Date.now();

      exports.unstable_now = function () {
        return Date.now() - initialTime;
      };

      requestHostCallback = function (cb) {
        if (_callback !== null) {
          // Protect against re-entrancy.
          setTimeout(requestHostCallback, 0, cb);
        } else {
          _callback = cb;
          setTimeout(_flushCallback, 0);
        }
      };

      requestHostTimeout = function (cb, ms) {
        _timeoutID = setTimeout(cb, ms);
      };

      cancelHostTimeout = function () {
        clearTimeout(_timeoutID);
      };

      shouldYieldToHost = function () {
        return false;
      };

      requestPaint = exports.unstable_forceFrameRate = function () {};
    } else {
      // Capture local references to native APIs, in case a polyfill overrides them.
      var performance = window.performance;
      var _Date = window.Date;
      var _setTimeout = window.setTimeout;
      var _clearTimeout = window.clearTimeout;
      var requestAnimationFrame = window.requestAnimationFrame;
      var cancelAnimationFrame = window.cancelAnimationFrame;

      if (typeof console !== 'undefined') {
        // TODO: Remove fb.me link
        if (typeof requestAnimationFrame !== 'function') {
          console.error("This browser doesn't support requestAnimationFrame. " + 'Make sure that you load a ' + 'polyfill in older browsers. https://fb.me/react-polyfills');
        }

        if (typeof cancelAnimationFrame !== 'function') {
          console.error("This browser doesn't support cancelAnimationFrame. " + 'Make sure that you load a ' + 'polyfill in older browsers. https://fb.me/react-polyfills');
        }
      }

      if (typeof performance === 'object' && typeof performance.now === 'function') {
        exports.unstable_now = function () {
          return performance.now();
        };
      } else {
        var _initialTime = _Date.now();

        exports.unstable_now = function () {
          return _Date.now() - _initialTime;
        };
      }

      var isRAFLoopRunning = false;
      var isMessageLoopRunning = false;
      var scheduledHostCallback = null;
      var rAFTimeoutID = -1;
      var taskTimeoutID = -1;
      var frameLength = enableMessageLoopImplementation ? // We won't attempt to align with the vsync. Instead we'll yield multiple
      // times per frame, often enough to keep it responsive even at really
      // high frame rates > 120.
      5 : // Use a heuristic to measure the frame rate and yield at the end of the
      // frame. We start out assuming that we run at 30fps but then the
      // heuristic tracking will adjust this value to a faster fps if we get
      // more frequent animation frames.
      33.33;
      var prevRAFTime = -1;
      var prevRAFInterval = -1;
      var frameDeadline = 0;
      var fpsLocked = false; // TODO: Make this configurable
      // TODO: Adjust this based on priority?

      var maxFrameLength = 300;
      var needsPaint = false;

      if (enableIsInputPending && navigator !== undefined && navigator.scheduling !== undefined && navigator.scheduling.isInputPending !== undefined) {
        var scheduling = navigator.scheduling;

        shouldYieldToHost = function () {
          var currentTime = exports.unstable_now();

          if (currentTime >= frameDeadline) {
            // There's no time left in the frame. We may want to yield control of
            // the main thread, so the browser can perform high priority tasks. The
            // main ones are painting and user input. If there's a pending paint or
            // a pending input, then we should yield. But if there's neither, then
            // we can yield less often while remaining responsive. We'll eventually
            // yield regardless, since there could be a pending paint that wasn't
            // accompanied by a call to `requestPaint`, or other main thread tasks
            // like network events.
            if (needsPaint || scheduling.isInputPending()) {
              // There is either a pending paint or a pending input.
              return true;
            } // There's no pending input. Only yield if we've reached the max
            // frame length.


            return currentTime >= frameDeadline + maxFrameLength;
          } else {
            // There's still time left in the frame.
            return false;
          }
        };

        requestPaint = function () {
          needsPaint = true;
        };
      } else {
        // `isInputPending` is not available. Since we have no way of knowing if
        // there's pending input, always yield at the end of the frame.
        shouldYieldToHost = function () {
          return exports.unstable_now() >= frameDeadline;
        }; // Since we yield every frame regardless, `requestPaint` has no effect.


        requestPaint = function () {};
      }

      exports.unstable_forceFrameRate = function (fps) {
        if (fps < 0 || fps > 125) {
          console.error('forceFrameRate takes a positive int between 0 and 125, ' + 'forcing framerates higher than 125 fps is not unsupported');
          return;
        }

        if (fps > 0) {
          frameLength = Math.floor(1000 / fps);
          fpsLocked = true;
        } else {
          // reset the framerate
          frameLength = 33.33;
          fpsLocked = false;
        }
      };

      var performWorkUntilDeadline = function () {
        if (enableMessageLoopImplementation) {
          if (scheduledHostCallback !== null) {
            var currentTime = exports.unstable_now(); // Yield after `frameLength` ms, regardless of where we are in the vsync
            // cycle. This means there's always time remaining at the beginning of
            // the message event.

            frameDeadline = currentTime + frameLength;
            var hasTimeRemaining = true;

            try {
              var hasMoreWork = scheduledHostCallback(hasTimeRemaining, currentTime);

              if (!hasMoreWork) {
                isMessageLoopRunning = false;
                scheduledHostCallback = null;
              } else {
                // If there's more work, schedule the next message event at the end
                // of the preceding one.
                port.postMessage(null);
              }
            } catch (error) {
              // If a scheduler task throws, exit the current browser task so the
              // error can be observed.
              port.postMessage(null);
              throw error;
            }
          } else {
            isMessageLoopRunning = false;
          } // Yielding to the browser will give it a chance to paint, so we can
          // reset this.


          needsPaint = false;
        } else {
          if (scheduledHostCallback !== null) {
            var _currentTime = exports.unstable_now();

            var _hasTimeRemaining = frameDeadline - _currentTime > 0;

            try {
              var _hasMoreWork = scheduledHostCallback(_hasTimeRemaining, _currentTime);

              if (!_hasMoreWork) {
                scheduledHostCallback = null;
              }
            } catch (error) {
              // If a scheduler task throws, exit the current browser task so the
              // error can be observed, and post a new task as soon as possible
              // so we can continue where we left off.
              port.postMessage(null);
              throw error;
            }
          } // Yielding to the browser will give it a chance to paint, so we can
          // reset this.


          needsPaint = false;
        }
      };

      var channel = new MessageChannel();
      var port = channel.port2;
      channel.port1.onmessage = performWorkUntilDeadline;

      var onAnimationFrame = function (rAFTime) {
        if (scheduledHostCallback === null) {
          // No scheduled work. Exit.
          prevRAFTime = -1;
          prevRAFInterval = -1;
          isRAFLoopRunning = false;
          return;
        } // Eagerly schedule the next animation callback at the beginning of the
        // frame. If the scheduler queue is not empty at the end of the frame, it
        // will continue flushing inside that callback. If the queue *is* empty,
        // then it will exit immediately. Posting the callback at the start of the
        // frame ensures it's fired within the earliest possible frame. If we
        // waited until the end of the frame to post the callback, we risk the
        // browser skipping a frame and not firing the callback until the frame
        // after that.


        isRAFLoopRunning = true;
        requestAnimationFrame(function (nextRAFTime) {
          _clearTimeout(rAFTimeoutID);

          onAnimationFrame(nextRAFTime);
        }); // requestAnimationFrame is throttled when the tab is backgrounded. We
        // don't want to stop working entirely. So we'll fallback to a timeout loop.
        // TODO: Need a better heuristic for backgrounded work.

        var onTimeout = function () {
          frameDeadline = exports.unstable_now() + frameLength / 2;
          performWorkUntilDeadline();
          rAFTimeoutID = _setTimeout(onTimeout, frameLength * 3);
        };

        rAFTimeoutID = _setTimeout(onTimeout, frameLength * 3);

        if (prevRAFTime !== -1 && // Make sure this rAF time is different from the previous one. This check
        // could fail if two rAFs fire in the same frame.
        rAFTime - prevRAFTime > 0.1) {
          var rAFInterval = rAFTime - prevRAFTime;

          if (!fpsLocked && prevRAFInterval !== -1) {
            // We've observed two consecutive frame intervals. We'll use this to
            // dynamically adjust the frame rate.
            //
            // If one frame goes long, then the next one can be short to catch up.
            // If two frames are short in a row, then that's an indication that we
            // actually have a higher frame rate than what we're currently
            // optimizing. For example, if we're running on 120hz display or 90hz VR
            // display. Take the max of the two in case one of them was an anomaly
            // due to missed frame deadlines.
            if (rAFInterval < frameLength && prevRAFInterval < frameLength) {
              frameLength = rAFInterval < prevRAFInterval ? prevRAFInterval : rAFInterval;

              if (frameLength < 8.33) {
                // Defensive coding. We don't support higher frame rates than 120hz.
                // If the calculated frame length gets lower than 8, it is probably
                // a bug.
                frameLength = 8.33;
              }
            }
          }

          prevRAFInterval = rAFInterval;
        }

        prevRAFTime = rAFTime;
        frameDeadline = rAFTime + frameLength; // We use the postMessage trick to defer idle work until after the repaint.

        port.postMessage(null);
      };

      requestHostCallback = function (callback) {
        scheduledHostCallback = callback;

        if (enableMessageLoopImplementation) {
          if (!isMessageLoopRunning) {
            isMessageLoopRunning = true;
            port.postMessage(null);
          }
        } else {
          if (!isRAFLoopRunning) {
            // Start a rAF loop.
            isRAFLoopRunning = true;
            requestAnimationFrame(function (rAFTime) {
              onAnimationFrame(rAFTime);
            });
          }
        }
      };

      requestHostTimeout = function (callback, ms) {
        taskTimeoutID = _setTimeout(function () {
          callback(exports.unstable_now());
        }, ms);
      };

      cancelHostTimeout = function () {
        _clearTimeout(taskTimeoutID);

        taskTimeoutID = -1;
      };
    }

    function push(heap, node) {
      var index = heap.length;
      heap.push(node);
      siftUp(heap, node, index);
    }

    function peek(heap) {
      var first = heap[0];
      return first === undefined ? null : first;
    }

    function pop(heap) {
      var first = heap[0];

      if (first !== undefined) {
        var last = heap.pop();

        if (last !== first) {
          heap[0] = last;
          siftDown(heap, last, 0);
        }

        return first;
      } else {
        return null;
      }
    }

    function siftUp(heap, node, i) {
      var index = i;

      while (true) {
        var parentIndex = Math.floor((index - 1) / 2);
        var parent = heap[parentIndex];

        if (parent !== undefined && compare(parent, node) > 0) {
          // The parent is larger. Swap positions.
          heap[parentIndex] = node;
          heap[index] = parent;
          index = parentIndex;
        } else {
          // The parent is smaller. Exit.
          return;
        }
      }
    }

    function siftDown(heap, node, i) {
      var index = i;
      var length = heap.length;

      while (index < length) {
        var leftIndex = (index + 1) * 2 - 1;
        var left = heap[leftIndex];
        var rightIndex = leftIndex + 1;
        var right = heap[rightIndex]; // If the left or right node is smaller, swap with the smaller of those.

        if (left !== undefined && compare(left, node) < 0) {
          if (right !== undefined && compare(right, left) < 0) {
            heap[index] = right;
            heap[rightIndex] = node;
            index = rightIndex;
          } else {
            heap[index] = left;
            heap[leftIndex] = node;
            index = leftIndex;
          }
        } else if (right !== undefined && compare(right, node) < 0) {
          heap[index] = right;
          heap[rightIndex] = node;
          index = rightIndex;
        } else {
          // Neither child is smaller. Exit.
          return;
        }
      }
    }

    function compare(a, b) {
      // Compare sort index first, then task id.
      var diff = a.sortIndex - b.sortIndex;
      return diff !== 0 ? diff : a.id - b.id;
    } // TODO: Use symbols?


    var NoPriority = 0;
    var ImmediatePriority = 1;
    var UserBlockingPriority = 2;
    var NormalPriority = 3;
    var LowPriority = 4;
    var IdlePriority = 5;
    var runIdCounter = 0;
    var mainThreadIdCounter = 0;
    var profilingStateSize = 4;
    var sharedProfilingBuffer = enableProfiling ? // $FlowFixMe Flow doesn't know about SharedArrayBuffer
    typeof SharedArrayBuffer === 'function' ? new SharedArrayBuffer(profilingStateSize * Int32Array.BYTES_PER_ELEMENT) : // $FlowFixMe Flow doesn't know about ArrayBuffer
    typeof ArrayBuffer === 'function' ? new ArrayBuffer(profilingStateSize * Int32Array.BYTES_PER_ELEMENT) : null // Don't crash the init path on IE9
    : null;
    var profilingState = enableProfiling && sharedProfilingBuffer !== null ? new Int32Array(sharedProfilingBuffer) : []; // We can't read this but it helps save bytes for null checks

    var PRIORITY = 0;
    var CURRENT_TASK_ID = 1;
    var CURRENT_RUN_ID = 2;
    var QUEUE_SIZE = 3;

    if (enableProfiling) {
      profilingState[PRIORITY] = NoPriority; // This is maintained with a counter, because the size of the priority queue
      // array might include canceled tasks.

      profilingState[QUEUE_SIZE] = 0;
      profilingState[CURRENT_TASK_ID] = 0;
    } // Bytes per element is 4


    var INITIAL_EVENT_LOG_SIZE = 131072;
    var MAX_EVENT_LOG_SIZE = 524288; // Equivalent to 2 megabytes

    var eventLogSize = 0;
    var eventLogBuffer = null;
    var eventLog = null;
    var eventLogIndex = 0;
    var TaskStartEvent = 1;
    var TaskCompleteEvent = 2;
    var TaskErrorEvent = 3;
    var TaskCancelEvent = 4;
    var TaskRunEvent = 5;
    var TaskYieldEvent = 6;
    var SchedulerSuspendEvent = 7;
    var SchedulerResumeEvent = 8;

    function logEvent(entries) {
      if (eventLog !== null) {
        var offset = eventLogIndex;
        eventLogIndex += entries.length;

        if (eventLogIndex + 1 > eventLogSize) {
          eventLogSize *= 2;

          if (eventLogSize > MAX_EVENT_LOG_SIZE) {
            console.error("Scheduler Profiling: Event log exceeded maximum size. Don't " + 'forget to call `stopLoggingProfilingEvents()`.');
            stopLoggingProfilingEvents();
            return;
          }

          var newEventLog = new Int32Array(eventLogSize * 4);
          newEventLog.set(eventLog);
          eventLogBuffer = newEventLog.buffer;
          eventLog = newEventLog;
        }

        eventLog.set(entries, offset);
      }
    }

    function startLoggingProfilingEvents() {
      eventLogSize = INITIAL_EVENT_LOG_SIZE;
      eventLogBuffer = new ArrayBuffer(eventLogSize * 4);
      eventLog = new Int32Array(eventLogBuffer);
      eventLogIndex = 0;
    }

    function stopLoggingProfilingEvents() {
      var buffer = eventLogBuffer;
      eventLogSize = 0;
      eventLogBuffer = null;
      eventLog = null;
      eventLogIndex = 0;
      return buffer;
    }

    function markTaskStart(task, ms) {
      if (enableProfiling) {
        profilingState[QUEUE_SIZE]++;

        if (eventLog !== null) {
          // performance.now returns a float, representing milliseconds. When the
          // event is logged, it's coerced to an int. Convert to microseconds to
          // maintain extra degrees of precision.
          logEvent([TaskStartEvent, ms * 1000, task.id, task.priorityLevel]);
        }
      }
    }

    function markTaskCompleted(task, ms) {
      if (enableProfiling) {
        profilingState[PRIORITY] = NoPriority;
        profilingState[CURRENT_TASK_ID] = 0;
        profilingState[QUEUE_SIZE]--;

        if (eventLog !== null) {
          logEvent([TaskCompleteEvent, ms * 1000, task.id]);
        }
      }
    }

    function markTaskCanceled(task, ms) {
      if (enableProfiling) {
        profilingState[QUEUE_SIZE]--;

        if (eventLog !== null) {
          logEvent([TaskCancelEvent, ms * 1000, task.id]);
        }
      }
    }

    function markTaskErrored(task, ms) {
      if (enableProfiling) {
        profilingState[PRIORITY] = NoPriority;
        profilingState[CURRENT_TASK_ID] = 0;
        profilingState[QUEUE_SIZE]--;

        if (eventLog !== null) {
          logEvent([TaskErrorEvent, ms * 1000, task.id]);
        }
      }
    }

    function markTaskRun(task, ms) {
      if (enableProfiling) {
        runIdCounter++;
        profilingState[PRIORITY] = task.priorityLevel;
        profilingState[CURRENT_TASK_ID] = task.id;
        profilingState[CURRENT_RUN_ID] = runIdCounter;

        if (eventLog !== null) {
          logEvent([TaskRunEvent, ms * 1000, task.id, runIdCounter]);
        }
      }
    }

    function markTaskYield(task, ms) {
      if (enableProfiling) {
        profilingState[PRIORITY] = NoPriority;
        profilingState[CURRENT_TASK_ID] = 0;
        profilingState[CURRENT_RUN_ID] = 0;

        if (eventLog !== null) {
          logEvent([TaskYieldEvent, ms * 1000, task.id, runIdCounter]);
        }
      }
    }

    function markSchedulerSuspended(ms) {
      if (enableProfiling) {
        mainThreadIdCounter++;

        if (eventLog !== null) {
          logEvent([SchedulerSuspendEvent, ms * 1000, mainThreadIdCounter]);
        }
      }
    }

    function markSchedulerUnsuspended(ms) {
      if (enableProfiling) {
        if (eventLog !== null) {
          logEvent([SchedulerResumeEvent, ms * 1000, mainThreadIdCounter]);
        }
      }
    }
    /* eslint-disable no-var */
    // Math.pow(2, 30) - 1
    // 0b111111111111111111111111111111


    var maxSigned31BitInt = 1073741823; // Times out immediately

    var IMMEDIATE_PRIORITY_TIMEOUT = -1; // Eventually times out

    var USER_BLOCKING_PRIORITY = 250;
    var NORMAL_PRIORITY_TIMEOUT = 5000;
    var LOW_PRIORITY_TIMEOUT = 10000; // Never times out

    var IDLE_PRIORITY = maxSigned31BitInt; // Tasks are stored on a min heap

    var taskQueue = [];
    var timerQueue = []; // Incrementing id counter. Used to maintain insertion order.

    var taskIdCounter = 1; // Pausing the scheduler is useful for debugging.

    var isSchedulerPaused = false;
    var currentTask = null;
    var currentPriorityLevel = NormalPriority; // This is set while performing work, to prevent re-entrancy.

    var isPerformingWork = false;
    var isHostCallbackScheduled = false;
    var isHostTimeoutScheduled = false;

    function advanceTimers(currentTime) {
      // Check for tasks that are no longer delayed and add them to the queue.
      var timer = peek(timerQueue);

      while (timer !== null) {
        if (timer.callback === null) {
          // Timer was cancelled.
          pop(timerQueue);
        } else if (timer.startTime <= currentTime) {
          // Timer fired. Transfer to the task queue.
          pop(timerQueue);
          timer.sortIndex = timer.expirationTime;
          push(taskQueue, timer);

          if (enableProfiling) {
            markTaskStart(timer, currentTime);
            timer.isQueued = true;
          }
        } else {
          // Remaining timers are pending.
          return;
        }

        timer = peek(timerQueue);
      }
    }

    function handleTimeout(currentTime) {
      isHostTimeoutScheduled = false;
      advanceTimers(currentTime);

      if (!isHostCallbackScheduled) {
        if (peek(taskQueue) !== null) {
          isHostCallbackScheduled = true;
          requestHostCallback(flushWork);
        } else {
          var firstTimer = peek(timerQueue);

          if (firstTimer !== null) {
            requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
          }
        }
      }
    }

    function flushWork(hasTimeRemaining, initialTime) {
      if (enableProfiling) {
        markSchedulerUnsuspended(initialTime);
      } // We'll need a host callback the next time work is scheduled.


      isHostCallbackScheduled = false;

      if (isHostTimeoutScheduled) {
        // We scheduled a timeout but it's no longer needed. Cancel it.
        isHostTimeoutScheduled = false;
        cancelHostTimeout();
      }

      isPerformingWork = true;
      var previousPriorityLevel = currentPriorityLevel;

      try {
        if (enableProfiling) {
          try {
            return workLoop(hasTimeRemaining, initialTime);
          } catch (error) {
            if (currentTask !== null) {
              var currentTime = exports.unstable_now();
              markTaskErrored(currentTask, currentTime);
              currentTask.isQueued = false;
            }

            throw error;
          }
        } else {
          // No catch in prod codepath.
          return workLoop(hasTimeRemaining, initialTime);
        }
      } finally {
        currentTask = null;
        currentPriorityLevel = previousPriorityLevel;
        isPerformingWork = false;

        if (enableProfiling) {
          var _currentTime = exports.unstable_now();

          markSchedulerSuspended(_currentTime);
        }
      }
    }

    function workLoop(hasTimeRemaining, initialTime) {
      var currentTime = initialTime;
      advanceTimers(currentTime);
      currentTask = peek(taskQueue);

      while (currentTask !== null && !(enableSchedulerDebugging && isSchedulerPaused)) {
        if (currentTask.expirationTime > currentTime && (!hasTimeRemaining || shouldYieldToHost())) {
          // This currentTask hasn't expired, and we've reached the deadline.
          break;
        }

        var callback = currentTask.callback;

        if (callback !== null) {
          currentTask.callback = null;
          currentPriorityLevel = currentTask.priorityLevel;
          var didUserCallbackTimeout = currentTask.expirationTime <= currentTime;
          markTaskRun(currentTask, currentTime);
          var continuationCallback = callback(didUserCallbackTimeout);
          currentTime = exports.unstable_now();

          if (typeof continuationCallback === 'function') {
            currentTask.callback = continuationCallback;
            markTaskYield(currentTask, currentTime);
          } else {
            if (enableProfiling) {
              markTaskCompleted(currentTask, currentTime);
              currentTask.isQueued = false;
            }

            if (currentTask === peek(taskQueue)) {
              pop(taskQueue);
            }
          }

          advanceTimers(currentTime);
        } else {
          pop(taskQueue);
        }

        currentTask = peek(taskQueue);
      } // Return whether there's additional work


      if (currentTask !== null) {
        return true;
      } else {
        var firstTimer = peek(timerQueue);

        if (firstTimer !== null) {
          requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
        }

        return false;
      }
    }

    function unstable_runWithPriority(priorityLevel, eventHandler) {
      switch (priorityLevel) {
        case ImmediatePriority:
        case UserBlockingPriority:
        case NormalPriority:
        case LowPriority:
        case IdlePriority:
          break;

        default:
          priorityLevel = NormalPriority;
      }

      var previousPriorityLevel = currentPriorityLevel;
      currentPriorityLevel = priorityLevel;

      try {
        return eventHandler();
      } finally {
        currentPriorityLevel = previousPriorityLevel;
      }
    }

    function unstable_next(eventHandler) {
      var priorityLevel;

      switch (currentPriorityLevel) {
        case ImmediatePriority:
        case UserBlockingPriority:
        case NormalPriority:
          // Shift down to normal priority
          priorityLevel = NormalPriority;
          break;

        default:
          // Anything lower than normal priority should remain at the current level.
          priorityLevel = currentPriorityLevel;
          break;
      }

      var previousPriorityLevel = currentPriorityLevel;
      currentPriorityLevel = priorityLevel;

      try {
        return eventHandler();
      } finally {
        currentPriorityLevel = previousPriorityLevel;
      }
    }

    function unstable_wrapCallback(callback) {
      var parentPriorityLevel = currentPriorityLevel;
      return function () {
        // This is a fork of runWithPriority, inlined for performance.
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = parentPriorityLevel;

        try {
          return callback.apply(this, arguments);
        } finally {
          currentPriorityLevel = previousPriorityLevel;
        }
      };
    }

    function timeoutForPriorityLevel(priorityLevel) {
      switch (priorityLevel) {
        case ImmediatePriority:
          return IMMEDIATE_PRIORITY_TIMEOUT;

        case UserBlockingPriority:
          return USER_BLOCKING_PRIORITY;

        case IdlePriority:
          return IDLE_PRIORITY;

        case LowPriority:
          return LOW_PRIORITY_TIMEOUT;

        case NormalPriority:
        default:
          return NORMAL_PRIORITY_TIMEOUT;
      }
    }

    function unstable_scheduleCallback(priorityLevel, callback, options) {
      var currentTime = exports.unstable_now();
      var startTime;
      var timeout;

      if (typeof options === 'object' && options !== null) {
        var delay = options.delay;

        if (typeof delay === 'number' && delay > 0) {
          startTime = currentTime + delay;
        } else {
          startTime = currentTime;
        }

        timeout = typeof options.timeout === 'number' ? options.timeout : timeoutForPriorityLevel(priorityLevel);
      } else {
        timeout = timeoutForPriorityLevel(priorityLevel);
        startTime = currentTime;
      }

      var expirationTime = startTime + timeout;
      var newTask = {
        id: taskIdCounter++,
        callback: callback,
        priorityLevel: priorityLevel,
        startTime: startTime,
        expirationTime: expirationTime,
        sortIndex: -1
      };

      if (enableProfiling) {
        newTask.isQueued = false;
      }

      if (startTime > currentTime) {
        // This is a delayed task.
        newTask.sortIndex = startTime;
        push(timerQueue, newTask);

        if (peek(taskQueue) === null && newTask === peek(timerQueue)) {
          // All tasks are delayed, and this is the task with the earliest delay.
          if (isHostTimeoutScheduled) {
            // Cancel an existing timeout.
            cancelHostTimeout();
          } else {
            isHostTimeoutScheduled = true;
          } // Schedule a timeout.


          requestHostTimeout(handleTimeout, startTime - currentTime);
        }
      } else {
        newTask.sortIndex = expirationTime;
        push(taskQueue, newTask);

        if (enableProfiling) {
          markTaskStart(newTask, currentTime);
          newTask.isQueued = true;
        } // Schedule a host callback, if needed. If we're already performing work,
        // wait until the next time we yield.


        if (!isHostCallbackScheduled && !isPerformingWork) {
          isHostCallbackScheduled = true;
          requestHostCallback(flushWork);
        }
      }

      return newTask;
    }

    function unstable_pauseExecution() {
      isSchedulerPaused = true;
    }

    function unstable_continueExecution() {
      isSchedulerPaused = false;

      if (!isHostCallbackScheduled && !isPerformingWork) {
        isHostCallbackScheduled = true;
        requestHostCallback(flushWork);
      }
    }

    function unstable_getFirstCallbackNode() {
      return peek(taskQueue);
    }

    function unstable_cancelCallback(task) {
      if (enableProfiling) {
        if (task.isQueued) {
          var currentTime = exports.unstable_now();
          markTaskCanceled(task, currentTime);
          task.isQueued = false;
        }
      } // Null out the callback to indicate the task has been canceled. (Can't
      // remove from the queue because you can't remove arbitrary nodes from an
      // array based heap, only the first one.)


      task.callback = null;
    }

    function unstable_getCurrentPriorityLevel() {
      return currentPriorityLevel;
    }

    function unstable_shouldYield() {
      var currentTime = exports.unstable_now();
      advanceTimers(currentTime);
      var firstTask = peek(taskQueue);
      return firstTask !== currentTask && currentTask !== null && firstTask !== null && firstTask.callback !== null && firstTask.startTime <= currentTime && firstTask.expirationTime < currentTask.expirationTime || shouldYieldToHost();
    }

    var unstable_requestPaint = requestPaint;
    var unstable_Profiling = enableProfiling ? {
      startLoggingProfilingEvents: startLoggingProfilingEvents,
      stopLoggingProfilingEvents: stopLoggingProfilingEvents,
      sharedProfilingBuffer: sharedProfilingBuffer
    } : null;
    exports.unstable_ImmediatePriority = ImmediatePriority;
    exports.unstable_UserBlockingPriority = UserBlockingPriority;
    exports.unstable_NormalPriority = NormalPriority;
    exports.unstable_IdlePriority = IdlePriority;
    exports.unstable_LowPriority = LowPriority;
    exports.unstable_runWithPriority = unstable_runWithPriority;
    exports.unstable_next = unstable_next;
    exports.unstable_scheduleCallback = unstable_scheduleCallback;
    exports.unstable_cancelCallback = unstable_cancelCallback;
    exports.unstable_wrapCallback = unstable_wrapCallback;
    exports.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel;
    exports.unstable_shouldYield = unstable_shouldYield;
    exports.unstable_requestPaint = unstable_requestPaint;
    exports.unstable_continueExecution = unstable_continueExecution;
    exports.unstable_pauseExecution = unstable_pauseExecution;
    exports.unstable_getFirstCallbackNode = unstable_getFirstCallbackNode;
    exports.unstable_Profiling = unstable_Profiling;
  })();
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(14);
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v0.17.0
 * scheduler-tracing.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


if (true) {
  (function () {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    }); // Helps identify side effects in begin-phase lifecycle hooks and setState reducers:
    // In some cases, StrictMode should also double-render lifecycles.
    // This can be confusing for tests though,
    // And it can be bad for performance in production.
    // This feature flag can be used to control the behavior:
    // To preserve the "Pause on caught exceptions" behavior of the debugger, we
    // replay the begin phase of a failed component inside invokeGuardedCallback.
    // Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:
    // Gather advanced timing metrics for Profiler subtrees.
    // Trace which interactions trigger each commit.

    var enableSchedulerTracing = true; // SSR experiments
    // Only used in www builds.
    // Only used in www builds.
    // Disable javascript: URL strings in href for XSS protection.
    // React Fire: prevent the value and checked attributes from syncing
    // with their related DOM properties
    // These APIs will no longer be "unstable" in the upcoming 16.7 release,
    // Control this behavior with a flag to support 16.6 minor releases in the meanwhile.
    // Experimental React Flare event system and event components support.
    // Experimental Host Component support.
    // Experimental Scope support.
    // New API for JSX transforms to target - https://github.com/reactjs/rfcs/pull/107
    // We will enforce mocking scheduler with scheduler/unstable_mock at some point. (v17?)
    // Till then, we warn about the missing mock, but still fallback to a sync mode compatible version
    // For tests, we flush suspense fallbacks in an act scope;
    // *except* in some of our own tests, where we test incremental loading states.
    // Add a callback property to suspense to notify which promises are currently
    // in the update queue. This allows reporting and tracing of what is causing
    // the user to see a loading state.
    // Also allows hydration callbacks to fire when a dehydrated boundary gets
    // hydrated or deleted.
    // Part of the simplification of React.createElement so we can eventually move
    // from React.createElement to React.jsx
    // https://github.com/reactjs/rfcs/blob/createlement-rfc/text/0000-create-element-changes.md

    var DEFAULT_THREAD_ID = 0; // Counters used to generate unique IDs.

    var interactionIDCounter = 0;
    var threadIDCounter = 0; // Set of currently traced interactions.
    // Interactions "stack"–
    // Meaning that newly traced interactions are appended to the previously active set.
    // When an interaction goes out of scope, the previous set (if any) is restored.

    exports.__interactionsRef = null; // Listener(s) to notify when interactions begin and end.

    exports.__subscriberRef = null;

    if (enableSchedulerTracing) {
      exports.__interactionsRef = {
        current: new Set()
      };
      exports.__subscriberRef = {
        current: null
      };
    }

    function unstable_clear(callback) {
      if (!enableSchedulerTracing) {
        return callback();
      }

      var prevInteractions = exports.__interactionsRef.current;
      exports.__interactionsRef.current = new Set();

      try {
        return callback();
      } finally {
        exports.__interactionsRef.current = prevInteractions;
      }
    }

    function unstable_getCurrent() {
      if (!enableSchedulerTracing) {
        return null;
      } else {
        return exports.__interactionsRef.current;
      }
    }

    function unstable_getThreadID() {
      return ++threadIDCounter;
    }

    function unstable_trace(name, timestamp, callback) {
      var threadID = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_THREAD_ID;

      if (!enableSchedulerTracing) {
        return callback();
      }

      var interaction = {
        __count: 1,
        id: interactionIDCounter++,
        name: name,
        timestamp: timestamp
      };
      var prevInteractions = exports.__interactionsRef.current; // Traced interactions should stack/accumulate.
      // To do that, clone the current interactions.
      // The previous set will be restored upon completion.

      var interactions = new Set(prevInteractions);
      interactions.add(interaction);
      exports.__interactionsRef.current = interactions;
      var subscriber = exports.__subscriberRef.current;
      var returnValue;

      try {
        if (subscriber !== null) {
          subscriber.onInteractionTraced(interaction);
        }
      } finally {
        try {
          if (subscriber !== null) {
            subscriber.onWorkStarted(interactions, threadID);
          }
        } finally {
          try {
            returnValue = callback();
          } finally {
            exports.__interactionsRef.current = prevInteractions;

            try {
              if (subscriber !== null) {
                subscriber.onWorkStopped(interactions, threadID);
              }
            } finally {
              interaction.__count--; // If no async work was scheduled for this interaction,
              // Notify subscribers that it's completed.

              if (subscriber !== null && interaction.__count === 0) {
                subscriber.onInteractionScheduledWorkCompleted(interaction);
              }
            }
          }
        }
      }

      return returnValue;
    }

    function unstable_wrap(callback) {
      var threadID = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_THREAD_ID;

      if (!enableSchedulerTracing) {
        return callback;
      }

      var wrappedInteractions = exports.__interactionsRef.current;
      var subscriber = exports.__subscriberRef.current;

      if (subscriber !== null) {
        subscriber.onWorkScheduled(wrappedInteractions, threadID);
      } // Update the pending async work count for the current interactions.
      // Update after calling subscribers in case of error.


      wrappedInteractions.forEach(function (interaction) {
        interaction.__count++;
      });
      var hasRun = false;

      function wrapped() {
        var prevInteractions = exports.__interactionsRef.current;
        exports.__interactionsRef.current = wrappedInteractions;
        subscriber = exports.__subscriberRef.current;

        try {
          var returnValue;

          try {
            if (subscriber !== null) {
              subscriber.onWorkStarted(wrappedInteractions, threadID);
            }
          } finally {
            try {
              returnValue = callback.apply(undefined, arguments);
            } finally {
              exports.__interactionsRef.current = prevInteractions;

              if (subscriber !== null) {
                subscriber.onWorkStopped(wrappedInteractions, threadID);
              }
            }
          }

          return returnValue;
        } finally {
          if (!hasRun) {
            // We only expect a wrapped function to be executed once,
            // But in the event that it's executed more than once–
            // Only decrement the outstanding interaction counts once.
            hasRun = true; // Update pending async counts for all wrapped interactions.
            // If this was the last scheduled async work for any of them,
            // Mark them as completed.

            wrappedInteractions.forEach(function (interaction) {
              interaction.__count--;

              if (subscriber !== null && interaction.__count === 0) {
                subscriber.onInteractionScheduledWorkCompleted(interaction);
              }
            });
          }
        }
      }

      wrapped.cancel = function cancel() {
        subscriber = exports.__subscriberRef.current;

        try {
          if (subscriber !== null) {
            subscriber.onWorkCanceled(wrappedInteractions, threadID);
          }
        } finally {
          // Update pending async counts for all wrapped interactions.
          // If this was the last scheduled async work for any of them,
          // Mark them as completed.
          wrappedInteractions.forEach(function (interaction) {
            interaction.__count--;

            if (subscriber && interaction.__count === 0) {
              subscriber.onInteractionScheduledWorkCompleted(interaction);
            }
          });
        }
      };

      return wrapped;
    }

    var subscribers = null;

    if (enableSchedulerTracing) {
      subscribers = new Set();
    }

    function unstable_subscribe(subscriber) {
      if (enableSchedulerTracing) {
        subscribers.add(subscriber);

        if (subscribers.size === 1) {
          exports.__subscriberRef.current = {
            onInteractionScheduledWorkCompleted: onInteractionScheduledWorkCompleted,
            onInteractionTraced: onInteractionTraced,
            onWorkCanceled: onWorkCanceled,
            onWorkScheduled: onWorkScheduled,
            onWorkStarted: onWorkStarted,
            onWorkStopped: onWorkStopped
          };
        }
      }
    }

    function unstable_unsubscribe(subscriber) {
      if (enableSchedulerTracing) {
        subscribers.delete(subscriber);

        if (subscribers.size === 0) {
          exports.__subscriberRef.current = null;
        }
      }
    }

    function onInteractionTraced(interaction) {
      var didCatchError = false;
      var caughtError = null;
      subscribers.forEach(function (subscriber) {
        try {
          subscriber.onInteractionTraced(interaction);
        } catch (error) {
          if (!didCatchError) {
            didCatchError = true;
            caughtError = error;
          }
        }
      });

      if (didCatchError) {
        throw caughtError;
      }
    }

    function onInteractionScheduledWorkCompleted(interaction) {
      var didCatchError = false;
      var caughtError = null;
      subscribers.forEach(function (subscriber) {
        try {
          subscriber.onInteractionScheduledWorkCompleted(interaction);
        } catch (error) {
          if (!didCatchError) {
            didCatchError = true;
            caughtError = error;
          }
        }
      });

      if (didCatchError) {
        throw caughtError;
      }
    }

    function onWorkScheduled(interactions, threadID) {
      var didCatchError = false;
      var caughtError = null;
      subscribers.forEach(function (subscriber) {
        try {
          subscriber.onWorkScheduled(interactions, threadID);
        } catch (error) {
          if (!didCatchError) {
            didCatchError = true;
            caughtError = error;
          }
        }
      });

      if (didCatchError) {
        throw caughtError;
      }
    }

    function onWorkStarted(interactions, threadID) {
      var didCatchError = false;
      var caughtError = null;
      subscribers.forEach(function (subscriber) {
        try {
          subscriber.onWorkStarted(interactions, threadID);
        } catch (error) {
          if (!didCatchError) {
            didCatchError = true;
            caughtError = error;
          }
        }
      });

      if (didCatchError) {
        throw caughtError;
      }
    }

    function onWorkStopped(interactions, threadID) {
      var didCatchError = false;
      var caughtError = null;
      subscribers.forEach(function (subscriber) {
        try {
          subscriber.onWorkStopped(interactions, threadID);
        } catch (error) {
          if (!didCatchError) {
            didCatchError = true;
            caughtError = error;
          }
        }
      });

      if (didCatchError) {
        throw caughtError;
      }
    }

    function onWorkCanceled(interactions, threadID) {
      var didCatchError = false;
      var caughtError = null;
      subscribers.forEach(function (subscriber) {
        try {
          subscriber.onWorkCanceled(interactions, threadID);
        } catch (error) {
          if (!didCatchError) {
            didCatchError = true;
            caughtError = error;
          }
        }
      });

      if (didCatchError) {
        throw caughtError;
      }
    }

    exports.unstable_clear = unstable_clear;
    exports.unstable_getCurrent = unstable_getCurrent;
    exports.unstable_getThreadID = unstable_getThreadID;
    exports.unstable_trace = unstable_trace;
    exports.unstable_wrap = unstable_wrap;
    exports.unstable_subscribe = unstable_subscribe;
    exports.unstable_unsubscribe = unstable_unsubscribe;
  })();
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "61685b8027b49fb8c3926799fd27e078.png";

/***/ })
/******/ ]);
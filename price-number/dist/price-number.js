(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["priceNumber"] = factory();
	else
		root["priceNumber"] = factory();
})(window, function() {
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
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function sub(amt1, amt2) {
    let carry = 0;
    let p1 = amt1.split('.')[1], p2 = amt2.split(".")[1];
    let z1 = amt1.split('.')[0], z2 = amt2.split('.')[0];
    if (p1 == undefined) {
        p1 = "00";
    }
    if (p2 == undefined) {
        p2 = "00";
    }
    if (p1.length < 2) {
        p1 += "0";
    }
    if (p2.length < 2) {
        p2 += "0";
    }
    let ans = "";
    let c = 1;
    while (c >= 0) {
        ans = (parseInt(p1[c]) + carry >= parseInt(p2[c]) ? parseInt(p1[c]) + carry - parseInt(p2[c]) :
            parseInt(p1[c]) + carry + 10 - parseInt(p2[c])) + ans;
        carry = parseInt(p1[c]) + carry >= parseInt(p2[c]) ? 0 : -1;
        c -= 1;
    }
    ans = "." + ans;
    c = z1.length - z2.length;
    while (c--) {
        z2 = '0' + z2;
    }
    c = z1.length - 1;
    while (c >= 0) {
        ans = (parseInt(z1[c]) + carry >= parseInt(z2[c]) ? parseInt(z1[c]) + carry - parseInt(z2[c]) :
            parseInt(z1[c]) + carry + 10 - parseInt(z2[c])) + ans;
        carry = parseInt(z1[c]) + carry >= parseInt(z2[c]) ? 0 : -1;
        c -= 1;
    }
    let offset = 0;
    for (let i = 0; i < ans.length - 2; i++) {
        if (ans[i] == '0' && ans[i + 1] != '.') {
            offset += 1;
        }else {
            break;
        }
    }
    ans = ans.substring(offset);
    return ans[0] == '.' ? "0" + ans : ans;
}

// console.log(sub("0.17", "0.12"));
/* harmony default export */ __webpack_exports__["default"] = ({
    sub
});



/***/ })
/******/ ])["default"];
});
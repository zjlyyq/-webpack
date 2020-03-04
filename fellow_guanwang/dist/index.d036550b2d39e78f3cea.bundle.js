(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],[
/* 0 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var loadsh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! loadsh */ 1);\n/* harmony import */ var loadsh__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(loadsh__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print */ 4);\n\r\n// import './style.css';\r\n \r\n\r\nfunction component() {\r\n    var element = document.createElement('div');\r\n  \r\n    // Loadsh 现在通过import导入\r\n    element.innerHTML = loadsh__WEBPACK_IMPORTED_MODULE_0___default.a.join(['Hello', 'webpack',' 4'], ' ');\r\n    element.onclick = _print__WEBPACK_IMPORTED_MODULE_1__[\"default\"].bind(null, 'Hello webpack!');\r\n\r\n    return element;\r\n}\r\n  \r\ndocument.body.appendChild(component());\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return print; });\nfunction print(text) {\r\n    console.log(text);\r\n    console.log(module.i)\r\n};\n\n//# sourceURL=webpack:///./src/print.js?");

/***/ })
],[[0,"runtime","vendors~index"]]]);
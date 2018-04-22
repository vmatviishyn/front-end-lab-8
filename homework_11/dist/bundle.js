/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calculating_module__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interface_module__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_styles_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_styles_css__);




Object(__WEBPACK_IMPORTED_MODULE_1__interface_module__["a" /* default */])();

let output = document.getElementById('result');
let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');

let addBtn = document.getElementById('add');
let subtractBtn = document.getElementById('subtract');
let multiply = document.getElementById('multiply');
let divide = document.getElementById('divide');
let percent = document.getElementById('percent');
let radical = document.getElementById('radical');

addBtn.addEventListener("click", ()=>{
    output.innerHTML = __WEBPACK_IMPORTED_MODULE_0__calculating_module__["a" /* default */].add(+number1.value, +number2.value);
});

subtractBtn.addEventListener("click", ()=>{
    output.innerHTML = __WEBPACK_IMPORTED_MODULE_0__calculating_module__["a" /* default */].subtract(+number1.value, +number2.value);
});

multiply.addEventListener("click", ()=>{
    output.innerHTML = __WEBPACK_IMPORTED_MODULE_0__calculating_module__["a" /* default */].multiply(+number1.value, +number2.value);
});

divide.addEventListener("click", ()=>{
    output.innerHTML = __WEBPACK_IMPORTED_MODULE_0__calculating_module__["a" /* default */].divide(+number1.value, +number2.value);
});

percent.addEventListener("click", ()=>{
    output.innerHTML = __WEBPACK_IMPORTED_MODULE_0__calculating_module__["a" /* default */].percent(+number1.value, +number2.value);
});

radical.addEventListener("click", ()=>{
    output.innerHTML = __WEBPACK_IMPORTED_MODULE_0__calculating_module__["a" /* default */].radical(+number1.value);
});



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let add = (number1, number2) => {
    return number1 + number2;
}

let subtract = (number1, number2) => {
    return number1 - number2;
}

let multiply = (number1, number2) => {
    return number1 * number2;
}

let divide = (number1, number2) => {
    return number1 / number2;
}

let percent = (number1, number2) => {
    return Math.floor((number1 / number2) * 100);
}

let radical = (number) => {
    return Math.sqrt(number);
}

/* harmony default export */ __webpack_exports__["a"] = ({
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    percent: percent,
    radical: radical
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (() => {
    let root = document.getElementsByClassName('calculator')[0];

    let inputs = document.createElement('div');
    inputs.className = "calculator--inputs";
    let number1 = document.createElement('input');
    number1.id = "number1";
    let number2 = document.createElement('input');
    number2.id = "number2";

    inputs.appendChild(number1);
    inputs.appendChild(number2);
    root.appendChild(inputs);

    let text = document.createElement('h4');
    text.id = "result";
    root.appendChild(text);

    let buttons = document.createElement('div');
    buttons.className = "calculator--buttons";

    let addBtn = document.createElement('input');
    addBtn.type = "button";
    addBtn.value = "+";
    addBtn.id = "add"

    let subtract = document.createElement('input');
    subtract.type = "button";
    subtract.value = "-";
    subtract.id = "subtract";

    let multiply = document.createElement('input');
    multiply.type = "button";
    multiply.value = "*";
    multiply.id = "multiply";

    let divide = document.createElement('input');
    divide.type = "button";
    divide.value = "/";
    divide.id = "divide";

    let percent = document.createElement('input');
    percent.type = "button";
    percent.value = "%";
    percent.id = "percent";

    let radical = document.createElement('input');
    radical.type = "button";
    radical.value = "√";
    radical.id = "radical";

    buttons.appendChild(addBtn);
    buttons.appendChild(subtract);
    buttons.appendChild(multiply);
    buttons.appendChild(divide);
    buttons.appendChild(percent);
    buttons.appendChild(radical);

    root.appendChild(buttons);
});



/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
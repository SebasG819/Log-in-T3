/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Form/section1.css":
/*!******************************************!*\
  !*** ./src/components/Form/section1.css ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".section1{\\r\\n    background: linear-gradient(#A11FC1ff, #231843ff);\\r\\n    border-radius: 8px;\\r\\n}\\r\\n\\r\\nh1{\\r\\n    color: white;\\r\\n    font-size: 54px;\\r\\n}\\r\\n\\r\\nh2{\\r\\n    color: white;\\r\\n    font-size: 30px;\\r\\n}\\r\\n\\r\\nh4{\\r\\n    color: white;\\r\\n}\\r\\n\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Form/section1.css?");

/***/ }),

/***/ "./src/components/btn/button.css":
/*!***************************************!*\
  !*** ./src/components/btn/button.css ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"button{\\r\\n    \\r\\n        border-radius:28px;\\r\\n        border:1px solid #070707;\\r\\n        display:inline-block;\\r\\n        cursor:pointer;\\r\\n        color:#000000;\\r\\n        font-family:Arial;\\r\\n        font-size:17px;\\r\\n        padding:16px 31px;\\r\\n        text-decoration:none;\\r\\n        text-shadow:0px 1px 0px #ffffff;\\r\\n\\r\\n    \\r\\n        background-color:#ffffff;\\r\\n    \\r\\n    \\r\\n\\r\\n        top:1px;\\r\\n    \\r\\n    \\r\\n\\r\\n\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/btn/button.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://dca_scoffolding/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://dca_scoffolding/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/components/Form/index.ts":
/*!**************************************!*\
  !*** ./src/components/Form/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FormLog\": () => (/* binding */ FormLog)\n/* harmony export */ });\n/* harmony import */ var _section1_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./section1.css */ \"./src/components/Form/section1.css\");\n/* harmony import */ var _export__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../export */ \"./src/components/export.ts\");\n/* harmony import */ var _services_Databtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/Databtn */ \"./src/services/Databtn.ts\");\n/* harmony import */ var _btn_buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../btn/buttons */ \"./src/components/btn/buttons.ts\");\n/* harmony import */ var _butemailandpass_emailandpass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../butemailandpass/emailandpass */ \"./src/components/butemailandpass/emailandpass.ts\");\n\n\n\n\n\nclass FormLog extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a, _b;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = ``;\n            const container = this.ownerDocument.createElement(\"section\");\n            container.className = \"section1\";\n            const css = this.ownerDocument.createElement(\"style\");\n            css.innerHTML = _section1_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(css);\n            const Login = this.ownerDocument.createElement(\"h1\");\n            Login.innerText = \"Log In\";\n            container.appendChild(Login);\n            const Check = this.ownerDocument.createElement(\"h2\");\n            Check.innerText = \"Check your followers' new plays\";\n            container.appendChild(Check);\n            _services_Databtn__WEBPACK_IMPORTED_MODULE_2__.pdata.forEach((dat) => {\n                const buttonsess = this.ownerDocument.createElement(\"btn-sec\");\n                buttonsess.setAttribute(_btn_buttons__WEBPACK_IMPORTED_MODULE_3__.Attribut.btn_img, dat.btn_img);\n                buttonsess.setAttribute(_btn_buttons__WEBPACK_IMPORTED_MODULE_3__.Attribut.name, dat.name);\n                container.appendChild(buttonsess);\n            });\n            const Notregis = this.ownerDocument.createElement(\"h5\");\n            Notregis.innerText = \"Not registered yet?\";\n            const Notaccount = this.ownerDocument.createElement(\"h5\");\n            Notaccount.innerText = \"Create an Account\";\n            const ema = this.ownerDocument.createElement(\"h4\");\n            ema.innerText = \"Email\";\n            container.appendChild(ema);\n            const email = this.ownerDocument.createElement(\"email-pass\");\n            email.setAttribute(_butemailandpass_emailandpass__WEBPACK_IMPORTED_MODULE_4__.attr.placeholder, \"email\");\n            email.setAttribute(_butemailandpass_emailandpass__WEBPACK_IMPORTED_MODULE_4__.attr.type, \"email\");\n            container.appendChild(email);\n            const pass = this.ownerDocument.createElement(\"h4\");\n            pass.innerText = \"password\";\n            container.appendChild(pass);\n            const password = this.ownerDocument.createElement(\"email-pass\");\n            password.setAttribute(_butemailandpass_emailandpass__WEBPACK_IMPORTED_MODULE_4__.attr.placeholder, \"password\");\n            password.setAttribute(_butemailandpass_emailandpass__WEBPACK_IMPORTED_MODULE_4__.attr.type, \"password\");\n            container.appendChild(password);\n            (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(container);\n            container.appendChild(Notregis);\n            container.appendChild(Notaccount);\n        }\n    }\n}\ncustomElements.define(\"form-log\", FormLog);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Form/index.ts?");

/***/ }),

/***/ "./src/components/Login/buttlogin.ts":
/*!*******************************************!*\
  !*** ./src/components/Login/buttlogin.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass BtnLog extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n                <section>\r\n                <button> Log in</button>\r\n                </section>\r\n                `;\n        }\n    }\n}\ncustomElements.define(\"btn-log\", BtnLog);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BtnLog);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Login/buttlogin.ts?");

/***/ }),

/***/ "./src/components/btn/buttons.ts":
/*!***************************************!*\
  !*** ./src/components/btn/buttons.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Attribut\": () => (/* binding */ Attribut),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.css */ \"./src/components/btn/button.css\");\n\nvar Attribut;\n(function (Attribut) {\n    Attribut[\"btn_img\"] = \"btn_img\";\n    Attribut[\"name\"] = \"name\";\n})(Attribut || (Attribut = {}));\nclass Btnsec extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            btn_img: null,\n            name: null\n        };\n        return Object.keys(attrs);\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n                \r\n                <section>\r\n                <button><img src=\"${this.btn_img}\">${this.name}</button>\r\n                </section>\r\n                `;\n            const css = this.ownerDocument.createElement(\"style\");\n            css.innerHTML = _button_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(css);\n        }\n    }\n}\ncustomElements.define(\"btn-sec\", Btnsec);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Btnsec);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/btn/buttons.ts?");

/***/ }),

/***/ "./src/components/butemailandpass/emailandpass.ts":
/*!********************************************************!*\
  !*** ./src/components/butemailandpass/emailandpass.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"attr\": () => (/* binding */ attr),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar attr;\n(function (attr) {\n    attr[\"placeholder\"] = \"placeholder\";\n    attr[\"type\"] = \"type\";\n})(attr || (attr = {}));\nclass emailandpass extends HTMLElement {\n    static get observedAttributes() {\n        const attr = {\n            placeholder: null,\n            type: null,\n        };\n        return Object.keys(attr);\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = \"\";\n            const log = this.ownerDocument.createElement(\"input\");\n            log.placeholder = `${this.placeholder}`;\n            log.type = `${this.type}`;\n            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(log);\n        }\n    }\n}\ncustomElements.define(\"email-pass\", emailandpass);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (emailandpass);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/butemailandpass/emailandpass.ts?");

/***/ }),

/***/ "./src/components/export.ts":
/*!**********************************!*\
  !*** ./src/components/export.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BtnLog\": () => (/* reexport safe */ _Login_buttlogin__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   \"Btnpass\": () => (/* reexport safe */ _butemailandpass_emailandpass__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"Btnsec\": () => (/* reexport safe */ _components_btn_buttons__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _components_btn_buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/btn/buttons */ \"./src/components/btn/buttons.ts\");\n/* harmony import */ var _butemailandpass_emailandpass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./butemailandpass/emailandpass */ \"./src/components/butemailandpass/emailandpass.ts\");\n/* harmony import */ var _Login_buttlogin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login/buttlogin */ \"./src/components/Login/buttlogin.ts\");\n\n\n\n//export { default as Right } from \"./Right/rightside\"\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/export.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/export */ \"./src/components/export.ts\");\n/* harmony import */ var _components_Form_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Form/index */ \"./src/components/Form/index.ts\");\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        const something = this.ownerDocument.createElement('form-log');\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(something);\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

/***/ }),

/***/ "./src/services/Databtn.ts":
/*!*********************************!*\
  !*** ./src/services/Databtn.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pdata\": () => (/* binding */ pdata)\n/* harmony export */ });\nconst pdata = [\n    { btn_img: \"./images/image_face.png\",\n        name: \"Sign in with Facebok\" },\n    { btn_img: \"./images/image_google.png\",\n        name: \"Sign in with Google\" },\n    { btn_img: \"./images/image_riot.png\",\n        name: \"Sign in with Riot\" }\n];\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/services/Databtn.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
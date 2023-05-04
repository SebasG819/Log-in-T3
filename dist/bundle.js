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

/***/ "./src/components/Form/index.ts":
/*!**************************************!*\
  !*** ./src/components/Form/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FormLog\": () => (/* binding */ FormLog)\n/* harmony export */ });\n/* harmony import */ var _export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../export */ \"./src/components/export.ts\");\n/* harmony import */ var _services_Databtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/Databtn */ \"./src/services/Databtn.ts\");\n/* harmony import */ var _services_dataemandpass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dataemandpass */ \"./src/services/dataemandpass.ts\");\n/* harmony import */ var _btn_buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../btn/buttons */ \"./src/components/btn/buttons.ts\");\n/* harmony import */ var _butemailandpass_emailandpass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../butemailandpass/emailandpass */ \"./src/components/butemailandpass/emailandpass.ts\");\n\n\n\n\n\nclass FormLog extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = ``;\n            const container = this.ownerDocument.createElement(\"section\");\n            const Login = this.ownerDocument.createElement(\"h1\");\n            Login.innerText = \"Log In\";\n            const Check = this.ownerDocument.createElement(\"h2\");\n            Check.innerText = \"Check your followers' new plays\";\n            const text = this.ownerDocument.createElement(\"section\");\n            const Notregis = this.ownerDocument.createElement(\"h5\");\n            Notregis.innerText = \"Not registered yet?\";\n            const Notaccount = this.ownerDocument.createElement(\"h5\");\n            Notaccount.innerText = \"Create an Account\";\n            _services_Databtn__WEBPACK_IMPORTED_MODULE_1__.pdata.forEach((dat) => {\n                const buttonsess = this.ownerDocument.createElement(\"btn-sec\");\n                buttonsess.setAttribute(_btn_buttons__WEBPACK_IMPORTED_MODULE_3__.Attribut.btn_img, dat.btn_img);\n                buttonsess.setAttribute(_btn_buttons__WEBPACK_IMPORTED_MODULE_3__.Attribut.name, dat.name);\n                container.appendChild(buttonsess);\n            });\n            _services_dataemandpass__WEBPACK_IMPORTED_MODULE_2__.emandpassdata.forEach((dat) => {\n                const butemaiandpass = this.ownerDocument.createElement(\"btn-pass\");\n                butemaiandpass.setAttribute(_butemailandpass_emailandpass__WEBPACK_IMPORTED_MODULE_4__.Attribu.text, dat.name);\n                butemaiandpass.setAttribute(_butemailandpass_emailandpass__WEBPACK_IMPORTED_MODULE_4__.Attribu.tittle, dat.tittle);\n                container.appendChild(butemaiandpass);\n            });\n            container.appendChild(Login);\n            container.appendChild(Check);\n            container.appendChild(text);\n            container.appendChild(Notregis);\n            container.appendChild(Notaccount);\n            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(container);\n        }\n    }\n}\ncustomElements.define(\"form-log\", FormLog);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Form/index.ts?");

/***/ }),

/***/ "./src/components/Login/buttlogin.ts":
/*!*******************************************!*\
  !*** ./src/components/Login/buttlogin.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass BtnLog extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n                <section>\r\n                <button> Log in</button>\r\n                </section>\r\n                `;\n        }\n    }\n}\ncustomElements.define(\"btn-log\", BtnLog);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BtnLog);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Login/buttlogin.ts?");

/***/ }),

/***/ "./src/components/Right/rightside.ts":
/*!*******************************************!*\
  !*** ./src/components/Right/rightside.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Right extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n                <section>\r\n                    \r\n                </section>\r\n                `;\n        }\n    }\n}\ncustomElements.define(\"Right-side\", Right);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Right);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Right/rightside.ts?");

/***/ }),

/***/ "./src/components/btn/buttons.ts":
/*!***************************************!*\
  !*** ./src/components/btn/buttons.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Attribut\": () => (/* binding */ Attribut),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Attribut;\n(function (Attribut) {\n    Attribut[\"btn_img\"] = \"btn_img\";\n    Attribut[\"name\"] = \"name\";\n})(Attribut || (Attribut = {}));\nclass Btnsec extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            btn_img: null,\n            name: null\n        };\n        return Object.keys(attrs);\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n                <link rel=\"stylesheet\" href=\"./components/Side-profile/scard.css\">\r\n                <section>\r\n                <button><img src=\"${this.btn_img}\">${this.name}</button>\r\n                </section>\r\n                `;\n        }\n    }\n}\ncustomElements.define(\"btn-sec\", Btnsec);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Btnsec);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/btn/buttons.ts?");

/***/ }),

/***/ "./src/components/butemailandpass/emailandpass.ts":
/*!********************************************************!*\
  !*** ./src/components/butemailandpass/emailandpass.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Attribu\": () => (/* binding */ Attribu),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Attribu;\n(function (Attribu) {\n    Attribu[\"text\"] = \"text\";\n    Attribu[\"tittle\"] = \"tittle\";\n})(Attribu || (Attribu = {}));\nclass Btnpass extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            text: null,\n            tittle: null\n        };\n        return Object.keys(attrs);\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n                <section>\r\n                <h3>${this.tittle}</h3>\r\n                <input type=\"button\" placeholder = \"${this.text}\">\r\n                </section>\r\n                `;\n        }\n    }\n}\ncustomElements.define(\"btn-pass\", Btnpass);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Btnpass);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/butemailandpass/emailandpass.ts?");

/***/ }),

/***/ "./src/components/export.ts":
/*!**********************************!*\
  !*** ./src/components/export.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BtnLog\": () => (/* reexport safe */ _Login_buttlogin__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   \"Btnpass\": () => (/* reexport safe */ _butemailandpass_emailandpass__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"Btnsec\": () => (/* reexport safe */ _components_btn_buttons__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"Right\": () => (/* reexport safe */ _Right_rightside__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _components_btn_buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/btn/buttons */ \"./src/components/btn/buttons.ts\");\n/* harmony import */ var _butemailandpass_emailandpass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./butemailandpass/emailandpass */ \"./src/components/butemailandpass/emailandpass.ts\");\n/* harmony import */ var _Login_buttlogin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login/buttlogin */ \"./src/components/Login/buttlogin.ts\");\n/* harmony import */ var _Right_rightside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Right/rightside */ \"./src/components/Right/rightside.ts\");\n\n\n\n\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/export.ts?");

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

/***/ }),

/***/ "./src/services/dataemandpass.ts":
/*!***************************************!*\
  !*** ./src/services/dataemandpass.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"emandpassdata\": () => (/* binding */ emandpassdata)\n/* harmony export */ });\nconst emandpassdata = [\n    { name: \"Enter your email\",\n        tittle: \"Email*\" },\n    { name: \"Enter your password\",\n        tittle: \"Password*\" }\n];\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/services/dataemandpass.ts?");

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
/******/ 			// no module.id needed
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
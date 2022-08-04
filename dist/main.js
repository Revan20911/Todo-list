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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/domElements */ \"./src/modules/domElements.js\");\n\n\nvar init = function () {\n  var p = document.querySelector('#project-tab');\n  p.addEventListener('click', _modules_domElements__WEBPACK_IMPORTED_MODULE_0__.projectDom);\n  var t = document.querySelector('#todos');\n  t.addEventListener('click', _modules_domElements__WEBPACK_IMPORTED_MODULE_0__.todoDom);\n  var form = document.querySelector(\".modal\");\n  var c = document.querySelector('#cancel');\n  c.addEventListener('click', cancel);\n\n  function cancel() {\n    form.style.display = \"none\";\n  }\n}();\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/domElements.js":
/*!************************************!*\
  !*** ./src/modules/domElements.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectDom\": () => (/* binding */ projectDom),\n/* harmony export */   \"todoDom\": () => (/* binding */ todoDom)\n/* harmony export */ });\n/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listeners */ \"./src/modules/listeners.js\");\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\nvar Project = /*#__PURE__*/_createClass(function Project(id, name, description) {\n  _classCallCheck(this, Project);\n\n  this.id = id;\n  this.name = name;\n  this.description = description;\n});\n\nvar projectDom = function projectDom() {\n  var form = document.querySelector(\".modal\");\n  var projects = JSON.parse(localStorage.getItem('projects')) || [];\n\n  var _projectList = document.querySelector('.list-box');\n\n  var box = [];\n  clearList(_projectList);\n  addButton();\n\n  if (projects.length > 0) {\n    projects.forEach(function (project) {\n      var pbox = document.createElement(\"div\");\n      pbox.className = \"pbox\";\n      var pName = document.createElement(\"h2\");\n      pName.innerHTML = project.name;\n      var pInfo = document.createElement(\"p\");\n      pInfo.innerHTML = project.info;\n      box.push('');\n\n      _projectList.appendChild(pbox);\n\n      pbox.appendChild(pName);\n      pbox.appendChild(pInfo);\n    });\n  }\n\n  function addProject() {\n    var newP = new Project();\n    var name = document.querySelector('#name');\n    newP.name = name;\n    var id = document.querySelector('#itemId');\n    newP.id = id;\n    var description = document.querySelector(\"#description\");\n    newP.description = description;\n    projects.push(newP);\n    localStorage.setItem('projects', JSON.stringify(projects));\n    submitForm.style.displaye = \"none\";\n  }\n\n  function clearList(parent) {\n    while (parent.firstChild) {\n      parent.removeChild(parent.firstChild);\n    }\n  }\n\n  function deleteProject() {}\n\n  function addButton() {\n    var button = document.createElement(\"button\");\n    button.className = \"nav-button\";\n    button.id = \"add-project\";\n    button.innerHTML = \"Add Project\";\n\n    _projectList.appendChild(button);\n\n    (0,_listeners__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(button, form);\n  }\n\n  return {\n    _projectList: _projectList\n  };\n};\n\nvar Todo = /*#__PURE__*/_createClass(function Todo(id, name, description) {\n  _classCallCheck(this, Todo);\n\n  this.id = id;\n  this.name = name;\n  this.description = description;\n});\n\nvar todoDom = function todoDom() {\n  var form = document.querySelector(\".modal\");\n  var todos = JSON.parse(localStorage.getItem('todos')) || [];\n\n  var _todoList = document.querySelector('.list-box');\n\n  clearList(_todoList);\n  addButton();\n  todos.forEach(function (todo) {\n    var tbox = document.createElement(\"div\");\n    tbox.className = \"pbox\";\n    var tName = document.createElement(\"h2\");\n    tName.innerHTML = todo.name;\n    var tInfo = document.createElement(\"p\");\n    tInfo.innerHTML = todo.info;\n\n    _todoList.appendChild(tbox);\n\n    tbox.appendChild(tName);\n    tbox.appendChild(tInfo);\n  });\n\n  function clearList(parent) {\n    while (parent.firstChild) {\n      parent.removeChild(parent.firstChild);\n    }\n  }\n\n  function addButton() {\n    var button = document.createElement(\"button\");\n    button.className = \"nav-button\";\n    button.id = \"add-project\";\n    button.innerHTML = \"Add Project\";\n\n    _todoList.appendChild(button);\n\n    (0,_listeners__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(button, form);\n  }\n\n  return {\n    _todoList: _todoList\n  };\n};\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/domElements.js?");

/***/ }),

/***/ "./src/modules/listeners.js":
/*!**********************************!*\
  !*** ./src/modules/listeners.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar listeners = function listeners(button, form) {\n  button.addEventListener('click', add);\n\n  function add() {\n    form.style.display = \"flex\";\n  }\n\n  function del() {}\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listeners);\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/listeners.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
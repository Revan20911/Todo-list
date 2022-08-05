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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/domElements */ \"./src/modules/domElements.js\");\n\n\nvar render = function () {\n  var form = document.querySelector('.modal');\n  var projectArray = JSON.parse(localStorage.getItem('projectArray')) || [];\n  var todos = JSON.parse(localStorage.getItem('todos')) || [];\n\n  var _List = document.querySelector('.list-box');\n\n  (0,_modules_domElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(form, _List, todos, projectArray);\n}();\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/Projects.js":
/*!*********************************!*\
  !*** ./src/modules/Projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectDom\": () => (/* binding */ projectDom)\n/* harmony export */ });\n/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listeners */ \"./src/modules/listeners.js\");\n\n\nvar projectDom = function projectDom(form, _List, projectArray) {\n  form.setAttribute('data', 'project');\n\n  function show() {\n    clearList(_List);\n    addButton();\n\n    if (projectArray.length > 0) {\n      projectArray.forEach(function (project) {\n        var pbox = document.createElement(\"div\");\n        pbox.className = \"pbox\";\n        var pName = document.createElement(\"h2\");\n        pName.innerHTML = project.name;\n        var pInfo = document.createElement(\"p\");\n        pInfo.innerHTML = project.info;\n\n        _List.appendChild(pbox);\n\n        pbox.appendChild(pName);\n        pbox.appendChild(pInfo);\n        console.log(projectArray);\n      });\n    }\n  }\n\n  show();\n\n  function clearList(parent) {\n    while (parent.firstChild) {\n      parent.removeChild(parent.firstChild);\n    }\n  }\n\n  function deleteProject() {}\n\n  function addButton() {\n    var button = document.createElement(\"button\");\n    button.className = \"nav-button\";\n    button.id = \"add-project\";\n    button.innerHTML = \"Add Project\";\n\n    _List.appendChild(button);\n\n    (0,_listeners__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(button, form);\n  }\n};\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/Projects.js?");

/***/ }),

/***/ "./src/modules/domElements.js":
/*!************************************!*\
  !*** ./src/modules/domElements.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Functions */ \"./src/modules/Functions\");\n/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projects */ \"./src/modules/Projects.js\");\n/* harmony import */ var _Todos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Todos */ \"./src/Todos\");\n\n\n\n\nvar init = function init(form, _List, todos, projectArray) {\n  var p = document.querySelector('#project-tab');\n  p.addEventListener('click', renderProjects);\n  var t = document.querySelector('#todos');\n  t.addEventListener('click', renderTodos);\n  var c = document.querySelector('#cancel');\n  c.addEventListener('click', cancel);\n\n  function cancel() {\n    form.style.display = \"none\";\n  } // let s = document.querySelector('#submit');\n  // s.addEventListener('click', submit);\n  // function submit(){\n  //     if(form.hasAttribute('data', 'todos')){\n  //         dom.addTodo();\n  //     }else if(form.hasAttribute('data', 'project')){\n  //         dom.addProject();\n  //     }\n  //   cancel();\n  // }\n\n\n  function renderProjects() {\n    (0,_Projects__WEBPACK_IMPORTED_MODULE_1__.projectDom)(form, _List, projectArray);\n  }\n\n  function renderTodos() {\n    (0,_Todos__WEBPACK_IMPORTED_MODULE_2__.todoDom)(form, _List, todos);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/domElements.js?");

/***/ }),

/***/ "./src/modules/listeners.js":
/*!**********************************!*\
  !*** ./src/modules/listeners.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar listeners = function listeners(button, form) {\n  button.addEventListener('click', add);\n\n  function add() {\n    form.style.display = \"flex\";\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listeners);\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/listeners.js?");

/***/ }),

/***/ "./src/Todos":
/*!*******************!*\
  !*** ./src/Todos ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoDom\": () => (/* binding */ todoDom)\n/* harmony export */ });\n/* harmony import */ var _modules_listeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/listeners */ \"./src/modules/listeners.js\");\n\n\n\nconst todoDom = ((form, _List, todos) => {\n\n    \n    form.setAttribute('data', 'todo');\n\n    function show(){\n\n        clearList(_List);\n        addButton();\n\n        todos.forEach((todo) => {\n\n            let tbox = document.createElement(\"div\");\n            tbox.className = \"pbox\";\n    \n            let tName = document.createElement(\"h2\");\n            tName.innerHTML = todo.name;\n    \n            let tInfo = document.createElement(\"p\");\n            tInfo.innerHTML = todo.info;\n    \n            _List.appendChild(tbox);\n            tbox.appendChild(tName);\n            tbox.appendChild(tInfo);\n    \n    \n        })\n\n\n    }\n    show();\n    \n\n    function clearList (parent){\n\n        while(parent.firstChild){\n \n         parent.removeChild(parent.firstChild);\n \n        }\n \n     }\n\n     function addButton(){\n\n        let button = document.createElement(\"button\");\n        button.className = \"nav-button\"\n        button.id = \"add-todo\";\n        button.innerHTML = \"Add Todo\";\n\n        _List.appendChild(button);\n\n        (0,_modules_listeners__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(button, form);\n\n    }\n\n});\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/Todos?");

/***/ }),

/***/ "./src/modules/Classes":
/*!*****************************!*\
  !*** ./src/modules/Classes ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"Todo\": () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo{\n    constructor (id, name, description) {\n\n        this.id = id;\n        this.name = name;\n        this.description = description;\n    }\n\n}\n\nclass Project{\n    constructor (id, name, description) {\n\n        this.id = id;\n        this.name = name;\n        this.description = description;\n\n    } \n}\n\n\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/Classes?");

/***/ }),

/***/ "./src/modules/Functions":
/*!*******************************!*\
  !*** ./src/modules/Functions ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProject\": () => (/* binding */ addProject),\n/* harmony export */   \"addTodo\": () => (/* binding */ addTodo)\n/* harmony export */ });\n/* harmony import */ var _Classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classes */ \"./src/modules/Classes\");\n\n\n\nfunction addProject (_List, projectArray){\n\n    let pbox = document.createElement(\"div\");\n    pbox.className = \"pbox\";\n\n    const name = document.querySelector('#name').value;\n    let pName = document.createElement(\"h2\");\n    pName.innerHTML = name;\n    \n    const id = document.querySelector('#itemId');\n    \n    const description = document.querySelector(\"#description\").value;\n    let pInfo = document.createElement(\"p\");\n    pInfo.innerHTML = description;\n\n\n    const newP = new _Classes__WEBPACK_IMPORTED_MODULE_0__.Project(null, name, description);\n    projectArray.push(newP);\n    localStorage.setItem('projectArray', JSON.stringify(projectArray));\n\n    _List.appendChild(pbox);\n    pbox.appendChild(pName);\n    pbox.appendChild(pInfo);\n\n    console.log('Project Added Successfully');\n  \n}\n\nfunction addTodo (_List, todos){\n\n   \n    let pbox = document.createElement(\"div\");\n    pbox.className = \"pbox\";\n\n    const name = document.querySelector('#name').value;\n    let pName = document.createElement(\"h2\");\n    pName.innerHTML = name;\n    \n    const id = document.querySelector('#itemId');\n    \n    const description = document.querySelector(\"#description\").value;\n    let pInfo = document.createElement(\"p\");\n    pInfo.innerHTML = description;\n\n\n    const newT = new _Classes__WEBPACK_IMPORTED_MODULE_0__.Todo(null, name, description);\n    todos.push(newT);\n    localStorage.setItem('todos', JSON.stringify(todos));\n\n    _List.appendChild(pbox);\n    pbox.appendChild(pName);\n    pbox.appendChild(pInfo);\n\n    console.log('Todo Added Successfully');\n  \n}\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/Functions?");

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
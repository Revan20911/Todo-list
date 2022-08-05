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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/domElements */ \"./src/modules/domElements.js\");\n\n\nvar init = function () {\n  var form = document.querySelector('.modal');\n  var projectArray = JSON.parse(localStorage.getItem('projectArray')) || [];\n  var todos = JSON.parse(localStorage.getItem('todos')) || [];\n\n  var _List = document.querySelector('.list-box');\n\n  (0,_modules_domElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(form, _List, todos, projectArray);\n}();\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/Functions.js":
/*!**********************************!*\
  !*** ./src/modules/Functions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProject\": () => (/* binding */ addProject),\n/* harmony export */   \"addTodo\": () => (/* binding */ addTodo)\n/* harmony export */ });\n/* harmony import */ var _Classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classes */ \"./src/modules/Classes\");\n\n\nfunction addProject(_List, _arr, _arrStr) {\n  var pbox = document.createElement(\"div\");\n  pbox.className = \"pbox\";\n  var name = document.querySelector('#name').value;\n  var pName = document.createElement(\"h2\");\n  pName.innerHTML = name;\n  var id = document.querySelector('#itemId');\n  var description = document.querySelector(\"#description\").value;\n  var pInfo = document.createElement(\"p\");\n  pInfo.innerHTML = description;\n  var buttonDiv = document.createElement('div');\n  buttonDiv.className = \"bdiv\"; // const completed = document.querySelector('#completed').value;\n\n  var pCompleted = document.createElement('input');\n  pCompleted.type = \"checkbox\";\n  var delButton = document.createElement(\"button\");\n  delbutton.innerHTML = '<i class=\"fa-solid fa-trash\"></i>';\n  var newP = new _Classes__WEBPACK_IMPORTED_MODULE_0__.Project(null, name, description);\n\n  _arr.push(newP);\n\n  localStorage.setItem(_arrStr, JSON.stringify(_arr));\n\n  _List.appendChild(pbox);\n\n  pbox.appendChild(pName);\n  pbox.appendChild(pInfo);\n  pbox.appendChild(buttonDiv);\n  buttonDiv.appendChild(pCompleted);\n  buttonDiv.appendChild(delButton);\n  buttonDiv.appendChild(delButton).addEventListener('click', function () {\n    _List.removeChild(pbox);\n\n    _arr.splice(pbox, 1);\n\n    localStorage.setItem(_arrStr, JSON.stringify(_arr));\n  });\n  console.log('Project Added Successfully');\n}\n\nfunction addTodo(_List, _arr, _arrStr) {\n  var tbox = document.createElement(\"div\");\n  tbox.className = \"pbox\";\n  var name = document.querySelector('#name').value;\n  var tName = document.createElement(\"h2\");\n  tName.innerHTML = name;\n  var id = document.querySelector('#itemId');\n  var description = document.querySelector(\"#description\").value;\n  var tInfo = document.createElement(\"p\");\n  tInfo.innerHTML = description;\n  var buttonDiv = document.createElement('div');\n  buttonDiv.className = \"bdiv\"; // const completed = document.querySelector('#completed').value;\n\n  var pCompleted = document.createElement('input');\n  pCompleted.type = \"checkbox\";\n  var delButton = document.createElement(\"button\");\n  delButton.id = \"del\";\n  delButton.innerHTML = '<i class=\"fa-solid fa-trash\"></i>';\n  var newT = new _Classes__WEBPACK_IMPORTED_MODULE_0__.Todo(null, name, description);\n\n  _arr.push(newT);\n\n  localStorage.setItem(_arrStr, JSON.stringify(_arr));\n\n  _List.appendChild(tbox);\n\n  tbox.appendChild(tName);\n  tbox.appendChild(tInfo);\n  tbox.appendChild(buttonDiv);\n  buttonDiv.appendChild(pCompleted);\n  buttonDiv.appendChild(delButton);\n  buttonDiv.appendChild(delButton).addEventListener('click', function () {\n    _List.removeChild(tbox);\n\n    _arr.splice(tbox, 1);\n\n    localStorage.setItem(_arrStr, JSON.stringify(_arr));\n  });\n  console.log('Todo Added Successfully');\n}\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/Functions.js?");

/***/ }),

/***/ "./src/modules/Projects.js":
/*!*********************************!*\
  !*** ./src/modules/Projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectDom\": () => (/* binding */ projectDom)\n/* harmony export */ });\n/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listeners */ \"./src/modules/listeners.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements */ \"./src/modules/elements\");\n\n\n\nvar projectDom = function projectDom(form, _List, projectArray) {\n  form.setAttribute('data', 'project');\n\n  function show() {\n    clearList(_List);\n    addButton();\n\n    if (projectArray.length > 0) {\n      projectArray.forEach(function (project) {\n        (0,_elements__WEBPACK_IMPORTED_MODULE_1__.createProjectItem)(_List, project, projectArray, 'projectArray');\n      });\n    }\n  }\n\n  show();\n\n  function clearList(parent) {\n    while (parent.firstChild) {\n      parent.removeChild(parent.firstChild);\n    }\n  }\n\n  function addButton() {\n    var button = document.createElement(\"button\");\n    button.className = \"nav-button\";\n    button.id = \"add-project\";\n    button.innerHTML = \"Add Project\";\n\n    _List.appendChild(button);\n\n    (0,_listeners__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(button, form);\n  }\n};\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/Projects.js?");

/***/ }),

/***/ "./src/modules/Todos.js":
/*!******************************!*\
  !*** ./src/modules/Todos.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoDom\": () => (/* binding */ todoDom)\n/* harmony export */ });\n/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listeners */ \"./src/modules/listeners.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements */ \"./src/modules/elements\");\n\n\n\nvar todoDom = function todoDom(form, _List, todos) {\n  form.setAttribute('data', 'todo');\n\n  function show() {\n    clearList(_List);\n    addButton();\n    todos.forEach(function (todo) {\n      (0,_elements__WEBPACK_IMPORTED_MODULE_1__.createTodoItem)(_List, todo, todos, 'todos');\n    });\n  }\n\n  show();\n\n  function clearList(parent) {\n    while (parent.firstChild) {\n      parent.removeChild(parent.firstChild);\n    }\n  }\n\n  function addButton() {\n    var button = document.createElement(\"button\");\n    button.className = \"nav-button\";\n    button.id = \"add-todo\";\n    button.innerHTML = \"Add Todo\";\n\n    _List.appendChild(button);\n\n    (0,_listeners__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(button, form);\n  }\n};\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/Todos.js?");

/***/ }),

/***/ "./src/modules/domElements.js":
/*!************************************!*\
  !*** ./src/modules/domElements.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Functions.js */ \"./src/modules/Functions.js\");\n/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projects */ \"./src/modules/Projects.js\");\n/* harmony import */ var _Todos_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Todos.js */ \"./src/modules/Todos.js\");\n\n\n\n\nvar render = function render(form, _List, todos, projectArray) {\n  var p = document.querySelector('#project-tab');\n  p.addEventListener('click', renderProjects);\n  var t = document.querySelector('#todos');\n  t.addEventListener('click', renderTodos);\n  var c = document.querySelector('#cancel');\n  c.addEventListener('click', cancel);\n\n  function cancel() {\n    form.style.display = \"none\";\n  }\n\n  var s = document.querySelector('#submit');\n  s.addEventListener('click', submit);\n\n  function submit() {\n    if (form.getAttribute('data') == 'todo') {\n      (0,_Functions_js__WEBPACK_IMPORTED_MODULE_0__.addTodo)(_List, todos, 'todos');\n      cancel();\n    } else if (form.getAttribute('data') == \"project\") {\n      (0,_Functions_js__WEBPACK_IMPORTED_MODULE_0__.addProject)(_List, projectArray, 'projectArray');\n      cancel();\n    }\n  }\n\n  function renderProjects() {\n    (0,_Projects__WEBPACK_IMPORTED_MODULE_1__.projectDom)(form, _List, projectArray);\n  }\n\n  function renderTodos() {\n    (0,_Todos_js__WEBPACK_IMPORTED_MODULE_2__.todoDom)(form, _List, todos);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/domElements.js?");

/***/ }),

/***/ "./src/modules/listeners.js":
/*!**********************************!*\
  !*** ./src/modules/listeners.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar listeners = function listeners(button, form) {\n  button.addEventListener('click', add);\n\n  function add() {\n    form.style.display = \"flex\";\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listeners);\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/listeners.js?");

/***/ }),

/***/ "./src/modules/Classes":
/*!*****************************!*\
  !*** ./src/modules/Classes ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"Todo\": () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo{\n    constructor (id, name, description, complete) {\n\n        this.id = id;\n        this.name = name;\n        this.description = description;\n        this.complete = complete;\n    }\n\n}\n\nclass Project{\n    constructor (id, name, description) {\n\n        this.id = id;\n        this.name = name;\n        this.description = description;\n\n    } \n}\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/Classes?");

/***/ }),

/***/ "./src/modules/elements":
/*!******************************!*\
  !*** ./src/modules/elements ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProjectItem\": () => (/* binding */ createProjectItem),\n/* harmony export */   \"createTodoItem\": () => (/* binding */ createTodoItem)\n/* harmony export */ });\n/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listeners */ \"./src/modules/listeners.js\");\n\n\nfunction createProjectItem(_List, project, _arr, _arrStr){\n\n    let pbox = document.createElement(\"div\");\n    pbox.className = \"pbox\";\n\n    let pName = document.createElement(\"h2\");\n    pName.innerHTML = project.name;\n\n    let pInfo = document.createElement(\"p\");\n    pInfo.innerHTML = project.description;\n\n    let buttonDiv = document.createElement('div');\n    buttonDiv.className = \"bdiv\";\n    \n    let pCompleted = document.createElement('input');\n    pCompleted.type = \"checkbox\";\n\n    let delButton = document.createElement(\"button\");\n    \n    delButton.innerHTML = '<i class=\"fa-solid fa-trash\"></i>';\n    delButton.id=\"del\";\n    \n\n    _List.appendChild(pbox);\n    pbox.appendChild(pName);\n    pbox.appendChild(pInfo);\n    pbox.appendChild(buttonDiv);\n    buttonDiv.appendChild(pCompleted);\n    buttonDiv.appendChild(delButton);\n    buttonDiv.appendChild(delButton).addEventListener('click', () => {\n\n        _List.removeChild(pbox);\n        _arr.splice(pbox, 1);\n        localStorage.setItem(_arrStr, JSON.stringify(_arr));\n    });\n}\n\nfunction createTodoItem(_List, todo, _arr, _arrStr){\n\n    let tbox = document.createElement(\"div\");\n    tbox.className = \"pbox\";\n    \n    let tName = document.createElement(\"h2\");\n    tName.innerHTML = todo.name;\n    \n    let tInfo = document.createElement(\"p\");\n    tInfo.innerHTML = todo.description;\n\n    let buttonDiv = document.createElement('div');\n    buttonDiv.className = \"bdiv\";\n    \n    let pCompleted = document.createElement('input');\n    pCompleted.type = \"checkbox\";\n\n    let delButton = document.createElement(\"button\");\n    \n    delButton.innerHTML = '<i class=\"fa-solid fa-trash\"></i>';\n    delButton.id=\"del\";\n    \n    _List.appendChild(tbox);\n    tbox.appendChild(tName);\n    tbox.appendChild(tInfo);\n    tbox.appendChild(buttonDiv);\n    buttonDiv.appendChild(pCompleted);\n    buttonDiv.appendChild(delButton);\n    buttonDiv.appendChild(delButton).addEventListener('click', () => {\n\n        _List.removeChild(tbox);\n        _arr.splice(tbox, 1);\n        localStorage.setItem(_arrStr, JSON.stringify(_arr));\n    });\n\n}\n\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/elements?");

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
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/domElements */ \"./src/modules/domElements.js\");\n\n\nvar init = function () {\n  var form = document.querySelector('.modal');\n  var projectArray = JSON.parse(localStorage.getItem('projectArray')) || [];\n  var todos = JSON.parse(localStorage.getItem('todos')) || [];\n\n  var _List = document.querySelector('.todo-content');\n\n  var _side = document.querySelector('#my-projects');\n\n  (0,_modules_domElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(form, _List, _side, todos, projectArray);\n}();\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/Functions.js":
/*!**********************************!*\
  !*** ./src/modules/Functions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProject\": () => (/* binding */ addProject),\n/* harmony export */   \"addProjectTodo\": () => (/* binding */ addProjectTodo),\n/* harmony export */   \"addTodo\": () => (/* binding */ addTodo)\n/* harmony export */ });\n/* harmony import */ var _Classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classes */ \"./src/modules/Classes\");\n // These functions get called when hitting the submit button for their respective pages.\n\nfunction addProject(_List, _arr, _arrStr, form) {\n  var name = document.querySelector('#name').value;\n  var pName = document.createElement(\"h2\");\n  pName.innerHTML = name;\n  var description = document.querySelector(\"#description\").value;\n  var pInfo = document.createElement(\"p\");\n  pInfo.innerHTML = description;\n  var pbox = document.createElement(\"div\");\n  pbox.className = \"pbox\";\n  var buttonDiv = document.createElement('div');\n  buttonDiv.className = \"bdiv\"; // const completed = document.querySelector('#completed').value;\n\n  var pCompleted = document.createElement('input');\n  pCompleted.type = \"checkbox\";\n  var delButton = document.createElement(\"button\");\n  delButton.innerHTML = '<i class=\"fa-solid fa-trash\"></i>';\n  delButton.id = \"add-task\";\n  var newTask = document.createElement(\"button\");\n  newTask.innerHTML = '<i class=\"fa-solid fa-plus\"></i>';\n  newTask.id = \"add-task\";\n  var projectId = name;\n  var pTasks = document.createElement(\"div\");\n  pTasks.className = \"list-box\";\n  pTasks.id = projectId;\n  var newP = new _Classes__WEBPACK_IMPORTED_MODULE_0__.Project(projectId, name, description);\n\n  _arr.push(newP);\n\n  localStorage.setItem(_arrStr, JSON.stringify(_arr));\n\n  _List.appendChild(pbox);\n\n  pbox.appendChild(pTasks);\n  pbox.appendChild(pName);\n  pbox.appendChild(pInfo);\n  pbox.appendChild(buttonDiv);\n  buttonDiv.appendChild(pCompleted);\n  buttonDiv.appendChild(newTask);\n  buttonDiv.appendChild(newTask).addEventListener('click', function () {\n    form.setAttribute('data', projectId);\n    form.style.display = 'flex';\n  });\n  buttonDiv.appendChild(delButton);\n  buttonDiv.appendChild(delButton).addEventListener('click', function () {\n    _List.removeChild(pbox);\n\n    _arr.splice(pbox, 1);\n\n    localStorage.setItem(_arrStr, JSON.stringify(_arr));\n  });\n  console.log('Project Added Successfully');\n}\n\nfunction getId(max, min) {\n  return Math.floor(Math.random() * (max - min));\n}\n\nfunction addTodo(_List, _arr, _arrStr) {\n  var tbox = document.createElement(\"div\");\n  tbox.className = \"pbox\";\n  var name = document.querySelector('#name').value;\n  var tName = document.createElement(\"h2\");\n  tName.innerHTML = name;\n  var id = document.querySelector('#itemId');\n  var description = document.querySelector(\"#description\").value;\n  var tInfo = document.createElement(\"p\");\n  tInfo.innerHTML = description;\n  var priority = document.querySelector(\"#priority\").value;\n  var tPriority = document.createElement(\"label\");\n  tPriority.innerHTML = priority;\n  var buttonDiv = document.createElement('div');\n  buttonDiv.className = \"bdiv\"; // const completed = document.querySelector('#completed').value;\n\n  var pCompleted = document.createElement('input');\n  pCompleted.type = \"checkbox\";\n  var delButton = document.createElement(\"button\");\n  delButton.id = \"del\";\n  delButton.innerHTML = '<i class=\"fa-solid fa-trash\"></i>';\n  var newT = new _Classes__WEBPACK_IMPORTED_MODULE_0__.Todo(null, name, description, null, priority);\n\n  _arr.push(newT);\n\n  localStorage.setItem(_arrStr, JSON.stringify(_arr));\n\n  _List.appendChild(tbox);\n\n  tbox.appendChild(tName);\n  tbox.appendChild(tInfo);\n  tbox.appendChild(buttonDiv);\n  buttonDiv.appendChild(tPriority);\n  buttonDiv.appendChild(pCompleted);\n  buttonDiv.appendChild(delButton);\n  buttonDiv.appendChild(delButton).addEventListener('click', function () {\n    _List.removeChild(tbox);\n\n    _arr.splice(tbox, 1);\n\n    localStorage.setItem(_arrStr, JSON.stringify(_arr));\n  });\n  console.log('Todo Added Successfully');\n}\n\nfunction addProjectTodo(_List, project) {\n  var p = JSON.parse(localStorage.getItem(toString(project.id)));\n  var tbox = document.createElement(\"div\");\n  tbox.className = \"pbox\";\n  var name = document.querySelector('#name').value;\n  var tName = document.createElement(\"h2\");\n  tName.innerHTML = name;\n  var id = document.querySelector('#itemId');\n  var description = document.querySelector(\"#description\").value;\n  var tInfo = document.createElement(\"p\");\n  tInfo.innerHTML = description;\n  var priority = document.querySelector(\"#priority\").value;\n  var tPriority = document.createElement(\"label\");\n  tPriority.innerHTML = priority;\n  var buttonDiv = document.createElement('div');\n  buttonDiv.className = \"bdiv\"; // const completed = document.querySelector('#completed').value;\n\n  var pCompleted = document.createElement('input');\n  pCompleted.type = \"checkbox\";\n  var delButton = document.createElement(\"button\");\n  delButton.id = \"del\";\n  delButton.innerHTML = '<i class=\"fa-solid fa-trash\"></i>';\n  var taskId = project.id;\n  var newT = new _Classes__WEBPACK_IMPORTED_MODULE_0__.Todo(taskId, name, description, null, priority);\n  p.push(newT);\n  localStorage.setItem(toString(project.id), JSON.stringify(p));\n\n  _List.appendChild(tbox);\n\n  tbox.appendChild(tName);\n  tbox.appendChild(tInfo);\n  tbox.appendChild(buttonDiv);\n  buttonDiv.appendChild(tPriority);\n  buttonDiv.appendChild(pCompleted);\n  buttonDiv.appendChild(delButton);\n  buttonDiv.appendChild(delButton).addEventListener('click', function () {\n    _List.removeChild(tbox);\n\n    p.splice(tbox, 1);\n    localStorage.setItem(toString(project.id), JSON.stringify(p));\n  });\n  console.log('Project Todo Added Successfully');\n}\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/Functions.js?");

/***/ }),

/***/ "./src/modules/Projects.js":
/*!*********************************!*\
  !*** ./src/modules/Projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectDom\": () => (/* binding */ projectDom)\n/* harmony export */ });\n/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listeners */ \"./src/modules/listeners.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements */ \"./src/modules/elements\");\n\n\n\nvar projectDom = function projectDom(form, _List, _side, projectArray) {\n  //TODO: Have the project store local todo items in a data-structure and then store the items locally.\n  //TODO: Have the project call the locally stored todos and render them on the main page. \n  form.setAttribute('data', 'project');\n\n  function show() {\n    clearList(_side);\n    addButton();\n\n    if (projectArray.length > 0) {\n      projectArray.forEach(function (project) {\n        // Renders a DOM item for each project. \n        (0,_elements__WEBPACK_IMPORTED_MODULE_1__.createProjectItem)(_side, _List, project, projectArray, 'projectArray', form);\n      });\n    }\n  }\n\n  show(); //Clears page each time the module is initialized. \n\n  function clearList(parent) {\n    while (parent.firstChild) {\n      parent.removeChild(parent.firstChild);\n    }\n  } // Creates add button.\n\n\n  function addButton() {\n    var button = document.createElement(\"button\");\n    button.className = \"nav-button\";\n    button.id = \"add-project\";\n    button.innerHTML = \"Add Project\";\n\n    _side.appendChild(button);\n\n    (0,_listeners__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(button, form);\n  }\n};\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/Projects.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Functions.js */ \"./src/modules/Functions.js\");\n/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projects */ \"./src/modules/Projects.js\");\n/* harmony import */ var _Todos_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Todos.js */ \"./src/modules/Todos.js\");\n\n\n\n\nvar render = function render(form, _List, _side, todos, projectArray) {\n  // Constant DOM ID's\n  var p = document.querySelector('#project-tab');\n  p.addEventListener('click', renderProjects);\n  var t = document.querySelector('#todos');\n  t.addEventListener('click', renderTodos);\n  var c = document.querySelector('#cancel');\n  c.addEventListener('click', cancel);\n\n  function cancel() {\n    form.style.display = \"none\";\n  }\n\n  var s = document.querySelector('#submit');\n  s.addEventListener('click', submit); // This function determines what gets created when submit is clicked. \n\n  function submit() {\n    if (form.getAttribute('data') == 'todo') {\n      (0,_Functions_js__WEBPACK_IMPORTED_MODULE_0__.addTodo)(_List, todos, 'todos');\n      cancel();\n    } else if (form.getAttribute('data') == \"project\") {\n      (0,_Functions_js__WEBPACK_IMPORTED_MODULE_0__.addProject)(_side, projectArray, 'projectArray', form);\n      cancel();\n    } else if (form.getAttribute('data') != \"project\" && form.getAttribute('data') != \"todo\") {\n      projectArray.forEach(function (project) {\n        //ISSUE: This is the root cause of the issue regarding the todos not attaching correctly to projects. \n        var list = form.getAttribute('data');\n\n        if (list === project.name) {\n          (0,_Functions_js__WEBPACK_IMPORTED_MODULE_0__.addProjectTodo)(_List, project);\n          console.log('pushed');\n        }\n      });\n    }\n  } // Rendering Todos and Project pages\n\n\n  function renderProjects() {\n    (0,_Projects__WEBPACK_IMPORTED_MODULE_1__.projectDom)(form, _List, _side, projectArray);\n  }\n\n  function renderTodos() {\n    (0,_Todos_js__WEBPACK_IMPORTED_MODULE_2__.todoDom)(form, _List, todos);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/domElements.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"Todo\": () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo{\n    constructor (id, name, description, complete, priority) {\n\n        this.id = id;\n        this.name = name;\n        this.description = description;\n        this.complete = complete;\n        this.priority = priority;\n        // this.date = date;\n    }\n\n}\n\nclass Project{\n    constructor (id, name, description, tasks=[]) {\n\n        this.id = id;\n        this.name = name;\n        this.description = description;\n        this.tasks = tasks;\n\n    } \n\n    \n\n}\n\n\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/Classes?");

/***/ }),

/***/ "./src/modules/elements":
/*!******************************!*\
  !*** ./src/modules/elements ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProjectItem\": () => (/* binding */ createProjectItem),\n/* harmony export */   \"createTodoItem\": () => (/* binding */ createTodoItem)\n/* harmony export */ });\n/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listeners */ \"./src/modules/listeners.js\");\n\n\n\n//TODO: Refactor this and './Functions' into a single module to reduce clutter and make more portable.\n\n\nconst createProjectItem = ((_side, _List, project, _arr, _arrStr,form) => {\n\n    //TODO: Have the project store local todo items in a data-structure and then store the items locally.\n    //TODO: Have the project call the locally stored todos and render them on the main page. \n\n    \n    const arr = JSON.parse(localStorage.getItem(toString(project.id)));   \n\n    let pbox = document.createElement(\"div\");\n    pbox.className = \"pbox\";\n    pbox.id = project.id;\n\n    if(project.id == null || project.id == \"\"){\n\n        pbox.id = project.name + project.description;\n    }\n\n    let pName = document.createElement(\"h2\");\n    pName.innerHTML = project.name;\n\n    let pInfo = document.createElement(\"p\");\n    pInfo.innerHTML = project.description;\n\n    let buttonDiv = document.createElement('div');\n    buttonDiv.className = \"bdiv\";\n    \n    let pCompleted = document.createElement('input');\n    pCompleted.type = \"checkbox\";\n\n    let delButton = document.createElement(\"button\");\n    \n    delButton.innerHTML = '<i class=\"fa-solid fa-trash\"></i>';\n    delButton.id=\"del\";\n\n    let newTask = document.createElement(\"button\");\n    newTask.innerHTML = '<i class=\"fa-solid fa-plus\"></i>';\n    newTask.id = \"add-task\";\n\n    let pTasks = document.createElement(\"div\");\n    pTasks.className = \"list-box\";\n    pTasks.id = project.name + project.description;\n\n    _side.appendChild(pbox);\n    _side.appendChild(pbox).addEventListener('click', () => {\n\n        _List.setAttribute('data', project.name);\n        clearList(_List);\n\n        arr.forEach((task) => {\n\n                if(task.id === project.id){\n\n                    createProjectTodoItem(_List, project, task);\n                    console.log(project.id, task.id);\n                }\n                \n        })\n    });\n    pbox.appendChild(pName);\n    pbox.appendChild(pInfo);\n    pbox.appendChild(buttonDiv);\n    buttonDiv.appendChild(pCompleted);\n    buttonDiv.appendChild(newTask);\n    buttonDiv.appendChild(newTask).addEventListener('click', () => {\n\n        form.setAttribute('data', pName.innerHTML);\n        form.style.display = 'flex';\n\n    });\n    buttonDiv.appendChild(delButton);\n    buttonDiv.appendChild(delButton).addEventListener('click', () => {\n\n        _side.removeChild(pbox);\n        _arr.splice(pbox, 1);\n        localStorage.setItem(_arrStr, JSON.stringify(_arr));\n    });\n    pbox.appendChild(pTasks).addEventListener('load', ()=> {\n\n        arr.forEach((task) => {\n\n            if(task.id === project.id){\n    \n                createProjectTodoItem(pTasks, project, task);\n            }  \n        })\n    });\n\n    function clearList (parent){\n\n        while(parent.firstChild){\n    \n         parent.removeChild(parent.firstChild);\n    \n        }\n    \n     }\n    \n    return {\n\n\n        _side,\n        pbox,\n        buttonDiv,\n        delButton,\n    \n\n    };\n    \n});\n\nfunction createTodoItem(_List, todo, _arr, _arrStr){\n\n    let tbox = document.createElement(\"div\");\n    tbox.className = \"pbox\";\n    \n    let tName = document.createElement(\"h2\");\n    tName.innerHTML = todo.name;\n    \n    let tInfo = document.createElement(\"p\");\n    tInfo.innerHTML = todo.description;\n\n    let tPriority = document.createElement(\"label\");\n    tPriority.innerHTML = todo.priority;\n\n    let buttonDiv = document.createElement('div');\n    buttonDiv.className = \"bdiv\";\n    \n    let pCompleted = document.createElement('input');\n    pCompleted.type = \"checkbox\";\n\n    if(todo.complete == true){\n\n        pCompleted.value == true;\n\n    }\n\n    let delButton = document.createElement(\"button\");\n    \n    delButton.innerHTML = '<i class=\"fa-solid fa-trash\"></i>';\n    delButton.id=\"del\";\n\n    let todoDate = document.createElement(\"label\");\n    todoDate.innerHTML = todo.date;\n    \n    _List.appendChild(tbox);\n    tbox.appendChild(tName);\n    tbox.appendChild(tInfo);\n    tbox.appendChild(buttonDiv);\n    buttonDiv.appendChild(tPriority);\n    buttonDiv.appendChild(pCompleted);\n    buttonDiv.appendChild(delButton);\n    buttonDiv.appendChild(delButton).addEventListener('click', () => {\n\n        _List.removeChild(tbox);\n        _arr.splice(tbox, 1);\n        localStorage.setItem(_arrStr, JSON.stringify(_arr));\n    });\n\n}\n\nfunction createProjectTodoItem(_List, project, todo){\n\n    let tbox = document.createElement(\"div\");\n    tbox.className = \"pbox\";\n    \n    let tName = document.createElement(\"h2\");\n    tName.innerHTML = todo.name;\n    \n    let tInfo = document.createElement(\"p\");\n    tInfo.innerHTML = todo.description;\n\n    let tPriority = document.createElement(\"label\");\n    tPriority.innerHTML = todo.priority;\n\n    let buttonDiv = document.createElement('div');\n    buttonDiv.className = \"bdiv\";\n    \n    let pCompleted = document.createElement('input');\n    pCompleted.type = \"checkbox\";\n\n    if(todo.complete == true){\n\n        pCompleted.value == true;\n\n    }\n\n    let delButton = document.createElement(\"button\");\n    \n    delButton.innerHTML = '<i class=\"fa-solid fa-trash\"></i>';\n    delButton.id=\"del\";\n\n    let todoDate = document.createElement(\"label\");\n    todoDate.innerHTML = todo.date;\n    \n    _List.appendChild(tbox);\n    tbox.appendChild(tName);\n    tbox.appendChild(tInfo);\n    tbox.appendChild(buttonDiv);\n    buttonDiv.appendChild(tPriority);\n    buttonDiv.appendChild(pCompleted);\n    buttonDiv.appendChild(delButton);\n    buttonDiv.appendChild(delButton).addEventListener('click', () => {\n\n        _List.removeChild(tbox);\n        project.tasks.splice(tbox, 1);\n        localStorage.setItem(toString(project.id), JSON.stringify(project.tasks));\n    });\n\n}\n\n\n\n\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/elements?");

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
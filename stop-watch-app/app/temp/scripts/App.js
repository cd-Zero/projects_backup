/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _test = __webpack_require__(1);

	var _test2 = _interopRequireDefault(_test);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	// global variable
	var time = 0.0;
	var run = null;
	console.log(!null == true);

	// **** DOM ELEMENTS ****
	// start button
	var start_button = document.querySelector('#start');
	// reset button
	var reset_button = document.querySelector('#reset');
	// record button
	var record_button = document.querySelector('#record');
	// time_log_element
	var time_log = document.querySelector('#time_log');

	start_button.addEventListener('click', timer);
	reset_button.addEventListener('click', reset);

	// functions

	// timer func
	function timer() {
	  // record_current_time function
	  record_button.addEventListener('click', recordTime);
	  if (!run) {
	    run = setInterval(function () {
	      myTimer();
	    }, 10);
	  } else {
	    clearInterval(run);
	    run = null;
	  }
	}

	function myTimer() {
	  time += 0.01;
	  time_log.innerHTML = time.toFixed(2);
	}

	// reset func
	function reset() {
	  location.reload();
	}

	// record_timer_function
	function recordTime() {
	  // JS create element
	  var list = document.createElement("LI");
	  var recorded_time = document.querySelector("#recorded_time");
	  var listText = document.createTextNode(time.toFixed(2));

	  list.appendChild(listText);
	  recorded_time.appendChild(list);
	}

/***/ }
/******/ ]);
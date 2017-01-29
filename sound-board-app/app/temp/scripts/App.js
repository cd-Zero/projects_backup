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

	var key = document.querySelectorAll(".key");

	for (var i = 0; i < key.length; i++) {

	  key[i].addEventListener('mousedown', down);

	  key[i].addEventListener('mouseup', up);
	}

	document.addEventListener('keydown', function () {
	  console.log(String.fromCharCode(event.keyCode).toLowerCase());
	  var key_pressed = String.fromCharCode(event.keyCode).toLowerCase();
	  document.querySelector('#' + key_pressed).className += " key--large";

	  var sound = new Audio('' + document.querySelector('#' + key_pressed).dataset.sound);
	  console.log(sound);
	  sound.play();
	});

	document.addEventListener('keyup', function () {
	  var key_pressed = String.fromCharCode(event.keyCode).toLowerCase();
	  document.querySelector('#' + key_pressed).className = 'key';
	});

	// functions
	function down() {
	  this.className += ' key--large';
	  var sound = new Audio(this.dataset.sound);
	  sound.play();
	}
	function up() {
	  this.className = 'key';
	}

/***/ }
/******/ ]);
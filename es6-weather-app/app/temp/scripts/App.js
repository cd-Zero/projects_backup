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

	document.querySelector('#generate').addEventListener('click', function () {

	  var ourRequest = new XMLHttpRequest();

	  var city = document.querySelector('#city-input').value;
	  var country = document.querySelector('#country-input').value;
	  ourRequest.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country + '&APPID=c144deeef83c9fc568b52b95903fb474', true);

	  ourRequest.onload = function () {

	    var weatherData = JSON.parse(ourRequest.responseText);
	    console.log(weatherData);

	    var fTemp = weatherData.main.temp * 9 / 5 - 459.67;

	    document.querySelector('#display-weather-des').innerHTML = weatherData.weather["0"].description;
	    document.querySelector('#display-city').innerHTML = weatherData.name;
	    document.querySelector('#display-country').innerHTML = weatherData.sys.country;
	    document.querySelector('#display-temp').innerHTML = fTemp;
	    document.querySelector('#display-icon').innerHTML = weatherData.weather["0"].icon;
	  };

	  ourRequest.send();
	});

	// clear button code
	document.querySelector("#clear").addEventListener('click', function () {
	  document.querySelector('.x h1').innerHTML = "";
	});

/***/ }
/******/ ]);
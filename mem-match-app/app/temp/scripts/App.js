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

	var _Memory = __webpack_require__(1);

	var _Memory2 = _interopRequireDefault(_Memory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	//global variables go here:
	var interval;
	var started = false;
	var time = 0;
	var ready = true;
	var numCompleted = 0;
	var clickedArray = [];

	//execute functions here:
	function randomAnswers() {
	    var answers = [1, 1, 2, 2, 3, 3, 4, 4, 5];
	    answers.sort(function (item) {
	        return .5 - Math.random();
	    });
	    return answers;
	}

	function setUp() {
	    var grid = document.getElementsByTagName("td");
	    var answers = randomAnswers();

	    document.addEventListener('keydown', function (event) {
	        if (event.key > 0 && event.key < 10) {
	            grid[event.key - 1].click();
	        }
	    });
	    document.getElementById('restart').addEventListener('click', function () {
	        location.reload();
	    });
	    for (var i = 0; i < grid.length; i++) {
	        var cell = grid[i];
	        cell.completed = false;
	        cell.clicked = false;
	        cell.value = answers[i];

	        cell.addEventListener("mouseenter", function () {
	            if (this.completed == false && this.clicked == false) this.style.background = "orange";
	        });

	        cell.addEventListener("mouseleave", function () {
	            if (this.completed == false && this.clicked == false) this.style.background = "blue";
	        });

	        cell.addEventListener('click', function () {
	            if (ready == false) return;

	            startTimer();

	            function reveal(cell) {
	                cell.style.backgroundColor = "red";
	                cell.innerHTML = cell.value;
	                cell.clicked = true;
	            }

	            // if condiont is true reveal function is run
	            if (this.clicked == false && this.completed == false) {
	                clickedArray.push(this);
	                reveal(this);
	            }

	            if (clickedArray.length == 2) {

	                if (clickedArray[0].value == clickedArray[1].value) {
	                    //if a matching pair is found
	                    complete(clickedArray[0]);
	                    complete(clickedArray[1]);

	                    clickedArray = [];

	                    if (numCompleted == 8) {
	                        alert("You won in " + time + " seconds!");
	                        clearInterval(interval);
	                    }
	                } else {
	                    //if a matching pair is not found
	                    ready = false;
	                    document.getElementById("gridTable").style.border = "5px solid red";

	                    setTimeout(function () {
	                        hide(clickedArray[0]);
	                        hide(clickedArray[1]);

	                        clickedArray = [];

	                        ready = true;
	                        document.getElementById("gridTable").style.border = "5px solid black";
	                    }, 500);
	                }
	            }
	        });
	    }
	}

	setUp();

	//function definitions go here:


	function startTimer() {
	    if (started == false) {
	        interval = setInterval(function () {
	            time++;
	            document.getElementById("timer").innerHTML = "Time Elapsed: " + time;
	        }, 1000);
	        started = true;
	    }
	}

	function hide(cell) {
	    cell.style.backgroundColor = "blue";
	    cell.innerHTML = "";
	    cell.clicked = false;
	}

	function complete(cell) {
	    numCompleted++;
	    cell.completed = true;
	    cell.style.backgroundColor = "purple";
	}

/***/ }
/******/ ]);
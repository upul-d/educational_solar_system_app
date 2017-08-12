/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var Board = __webpack_require__(1);
var Square = __webpack_require__(2);


window.addEventListener('load', function() {
  var canvas = document.querySelector('#canvas');
  var square = new Square(canvas, 50, 50, 50, 50, 'black', 'red', "images/sun.png");
  square.drawFill();
  square.drawBorder();
  square.drawImg();
  var board = new Board(canvas);
  board.squares.push(square);
  var test = board.getSquareWithin(101, 101)
  console.log(test);
  board.onClick = function(square) {
    console.log("yay a square")
  }
})

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var Board = function(canvas) {

  this.squares =[];
  this.onClick = function() {};

  canvas.addEventListener("click", function(event)  {
    var x = event.offsetX;
    var y = event.offsetY;
    var square = this.getSquareWithin(x,y);
    if(square !== null) {
      this.onClick(square);
    }
  }.bind(this))
}

Board.prototype.getSquareWithin = function(x,y){
  for (square of this.squares) {
    if (square.isWithin(x,y)) {
      return square
    }
  }
  return null;
}








module.exports = Board

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var Square = function(canvas, x, y, width, height, border, fill, img) {
  this.canvas = canvas;
  this.context = canvas.getContext("2d");
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.border = border;
  this.fill = fill;
  this.img = img;
}

Square.prototype.drawFill = function() {
  this.context.fillStyle = this.fill;
  this.context.fillRect(this.x, this.y, this.width, this.height);
}

Square.prototype.drawBorder = function() {
  this.context.strokeStyle = this.border;
  this.context.strokeRect(this.x, this.y, this.width, this.height);

}

Square.prototype.drawImg = function() {
  this.pic = document.createElement("img");
  this.pic.src = this.img;
  this.pic.addEventListener("load", function() {
    this.context.drawImage(this.pic, this.x, this.y, this.width, this.height);
  }.bind(this))
}

Square.prototype.isWithin = function (x,y) {
  if(x > this.x && x < this.x + this.width && y > this.y && y < this.y + this.height){
    return true;
  }
  return false;
}











module.exports = Square;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
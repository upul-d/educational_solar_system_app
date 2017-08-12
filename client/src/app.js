var Board = require('./views/board.js');
var Square = require('./views/square.js');


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
  board.onHover = function(square) {
    console.log("hovering")
  }
})
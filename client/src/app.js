var Board = require('./views/board.js');
var Square = require('./views/square.js');


window.addEventListener('load', function() {
  console.log('hello');
  var canvas = document.querySelector('#canvas');
  var square = new Square(canvas, 50, 50, 50, 50, 'black', 'red');
  square.drawFill();
})
var Board = require('./views/board.js');
var Square = require('./views/square.js');


window.addEventListener('load', function() {
  var canvas = document.querySelector('#canvas');
  var square = new Square(canvas, 50, 50, 50, 50, 'black', 'red', "images/sun.png");
  square.drawFill();
  square.drawBorder();
  square.drawImg();
  console.log(square.isWithin(49, 49));
})
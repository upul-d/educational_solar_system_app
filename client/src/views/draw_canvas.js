var Board = require('./board.js');
var Square = require('./square.js');

var DrawCanvas = function(canvas) {
  this.canvas = canvas;
  this.context = canvas.getContext("2d");
  this.scale = 1;
  this.render();
} 

DrawCanvas.prototype.render = function() {
  this.context.translate(250, 250);
  var sun = new Square(this.canvas, -55*this.scale, -55*this.scale, 110*this.scale, 110*this.scale, "transparent", "transparent");
  sun.img = "images/sun.png";
  sun.drawImg();
}



module.exports = DrawCanvas;
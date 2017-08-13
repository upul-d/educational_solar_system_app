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

  var mercury = new Square(this.canvas, -65*this.scale, 65*this.scale, 20*this.scale, 20*this.scale, "transparent", "transparent");
  mercury.img = "images/mercury.png";
  mercury.drawImg();

  var venus = new Square(this.canvas, 90*this.scale, 90*this.scale, 30*this.scale, 30*this.scale, "transparent", "transparent");
  venus.img = "images/venus.png";
  venus.drawImg();





}



module.exports = DrawCanvas;
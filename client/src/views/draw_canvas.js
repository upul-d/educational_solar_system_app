var Board = require('./board.js');
var Square = require('./square.js');

var DrawCanvas = function(canvas) {
  this.canvas = canvas;
  this.context = canvas.getContext("2d");
  this.scale = 1;
  this.render();
} 

DrawCanvas.prototype.render = function() {
  this.context.translate(400, 250);
  var sun = new Square(this.canvas, -55*this.scale, -55*this.scale, 110*this.scale, 110*this.scale, "transparent", "transparent");
  sun.img = "images/sun.png";
  sun.drawImg();

  var mercury = new Square(this.canvas, -65*this.scale, 65*this.scale, 20*this.scale, 20*this.scale, "transparent", "transparent");
  mercury.img = "images/mercury.png";
  mercury.drawImg();

  var venus = new Square(this.canvas, 70*this.scale, 70*this.scale, 30*this.scale, 30*this.scale, "transparent", "transparent");
  venus.img = "images/venus.png";
  venus.drawImg();

  var earth = new Square(this.canvas, 90*this.scale, -90*this.scale, 40*this.scale, 40*this.scale, "transparent", "transparent");
  earth.img = "images/earth.png";
  earth.drawImg();

  var mars = new Square(this.canvas, -100*this.scale, -100*this.scale, 30*this.scale, 30*this.scale, "transparent", "transparent");
  mars.img = "images/mars.png";
  mars.drawImg();

  var jupiter = new Square(this.canvas, -200*this.scale, 120*this.scale, 70*this.scale, 70*this.scale, "transparent", "transparent");
  jupiter.img = "images/jupiter.png";
  jupiter.drawImg();

  var saturn = new Square(this.canvas, 250*this.scale, 135*this.scale, 60*this.scale, 60*this.scale, "transparent", "transparent");
  saturn.img = "images/saturn.png";
  saturn.drawImg();

  var neptune = new Square(this.canvas, -350*this.scale, -75*this.scale, 45*this.scale, 45*this.scale, "transparent", "transparent");
  neptune.img = "images/neptune.png";
  neptune.drawImg();

  var uranus = new Square(this.canvas, 320*this.scale, -200*this.scale, 45*this.scale, 45*this.scale, "transparent", "transparent");
  uranus.img = "images/uranus.png";
  uranus.drawImg();

  var pluto= new Square(this.canvas, -390*this.scale, 200*this.scale, 20*this.scale, 20*this.scale, "transparent", "transparent");
  pluto.img = "images/pluto.png";
  pluto.drawImg();
}



module.exports = DrawCanvas;
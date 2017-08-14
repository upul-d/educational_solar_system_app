var Square = require('./square.js');

var DrawCanvas = function(canvasHandler, canvas, mainObject) {
  this.canvas = canvas;
  this.canvasHandler = canvasHandler;
  this.context = canvas.getContext("2d");
  this.scale = 1;
  this.mainObject = mainObject;
  this.render();
}

DrawCanvas.prototype.makeSquare = function(x, y, width, height){
  var square = new Square(this.canvas, x*this.scale, y*this.scale, width*this.scale, height*this.scale, "transparent", "transparent");
  this.canvasHandler.squares.push(square);
  return square;
}

DrawCanvas.prototype.render = function() {
  this.context.translate(400, 250);
  // this.context.translate(400+(-90)-20, 250+(90)-20);
  var sun = this.makeSquare(-55, -55, 110, 110);
  sun.img = "images/sun.png";
  sun.drawImg();

  var mercury = this.makeSquare(-65, 65, 20, 20);
  mercury.img = "images/mercury.png";
  mercury.drawImg();

  var venus = this.makeSquare(70, 70, 30, 30);
  venus.img = "images/venus.png";
  venus.drawImg();

  var earth = this.makeSquare(90, -90, 40, 40);
  earth.img = "images/earth.png";
  earth.drawImg();

  var mars = this.makeSquare(-100, -100, 30, 30);
  mars.img = "images/mars.png";
  mars.drawImg();

  var jupiter = this.makeSquare(-200, 120, 70, 70);
  jupiter.img = "images/jupiter.png";
  jupiter.drawImg();

  var saturn = this.makeSquare(250, 135, 60, 60);
  saturn.img = "images/saturn.png";
  saturn.drawImg();

  var neptune = this.makeSquare(-350, -75, 45, 45);
  neptune.img = "images/neptune.png";
  neptune.drawImg();

  var uranus = this.makeSquare(320, -200, 45, 45);
  uranus.img = "images/uranus.png";
  uranus.drawImg();
  uranus.data = this.mainObject.planets[6]

  var pluto= this.makeSquare(this.canvas, -390, 200, 20, 20);
  pluto.img = "images/pluto.png";
  pluto.drawImg();
}



module.exports = DrawCanvas;

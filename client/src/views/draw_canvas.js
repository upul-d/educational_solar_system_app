var Square = require('./square.js');

var DrawCanvas = function(canvasHandler, canvas, mainObject) {
  this.canvas = canvas;

  this.canvasWidth = canvas.width;
  this.canvasHeight = canvas.height;

  this.canvasHandler = canvasHandler;
  this.context = canvas.getContext("2d");

  this.context.translate(400, 250);

  this.scale = 1;
  this.mainObject = mainObject;
  this.render();
}

DrawCanvas.prototype.makeSquare = function(x, y, width, height){
  var square = new Square(this.canvas, x*this.scale, y*this.scale, width*this.scale, height*this.scale, "transparent", "transparent");
  console.log("square: ", square);
  this.canvasHandler.squares.push(square);
  return square;
}

DrawCanvas.prototype.render = function() {
  // this.scale = 10;
  // this.context.translate(400+(-90*this.scale)-20*this.scale, 250+(90*this.scale)-20*this.scale);
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

  var pluto= this.makeSquare(-390, 200, 20, 20);
  pluto.img = "images/pluto.png";
  pluto.drawImg();
  console.log(this.canvasHandler.squares)
}

DrawCanvas.prototype.clear = function(){
    this.canvasHandler.squares = []
    this.context.clearRect(-this.canvasWidth/2, -this.canvasHeight/2, this.canvasWidth, this.canvasHeight);
}

DrawCanvas.prototype.moveToLocation = function(square){
  this.scale = 10;
  this.clear();
  // var x = 400 + square.x*this.scale - square.width/2*this.scale
  // var y = 400 + square.y*this.scale - square.height/2*this.scale
  // this.context.translate(x, y);

  console.log(square);
  this.render();
  this.context.translate(-square.x*this.scale-square.width*this.scale/2, -square.y*this.scale-square.height*this.scale/2);
}


module.exports = DrawCanvas;

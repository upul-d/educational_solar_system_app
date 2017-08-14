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
  earth.data = this.mainObject.planets[2];

  var mars = this.makeSquare(-100, -100, 30, 30);
  mars.img = "images/mars.png";
  mars.drawImg();
  mars.data = this.mainObject.planets[3];

  var jupiter = this.makeSquare(-200, 120, 70, 70);
  jupiter.img = "images/jupiter.png";
  jupiter.drawImg();
  jupiter.data = this.mainObject.planets[4];

  var saturn = this.makeSquare(250, 135, 60, 60);
  saturn.img = "images/saturn.png";
  saturn.drawImg();
  saturn.data = this.mainObject.planets[5];


  var uranus = this.makeSquare(320, -200, 45, 45);
  uranus.img = "images/uranus.png";
  uranus.drawImg();
  uranus.data = this.mainObject.planets[6]


  var neptune = this.makeSquare(-350, -75, 45, 45);
  neptune.img = "images/neptune.png";
  neptune.drawImg();
  neptune.data = this.mainObject.planets[7];



  var pluto= this.makeSquare(-390, 200, 20, 20);
  pluto.img = "images/pluto.png";
  pluto.drawImg();
  pluto.data = this.mainObject.planets[8];
}

DrawCanvas.prototype.clear = function(){
    this.canvasHandler.squares = []
    this.context.clearRect(-this.canvasWidth/2, -this.canvasHeight/2, this.canvasWidth, this.canvasHeight);
}

DrawCanvas.prototype.moveToLocation = function(square){
  this.scale = 7;
  this.clear();

  this.render();
  this.context.translate(-square.x*this.scale - square.width*this.scale/2, -square.y*this.scale - square.height*this.scale/2);
}


module.exports = DrawCanvas;

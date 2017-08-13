var Board = require('./board.js');
var Square = require('./square.js');

var DrawCanvas = function(canvas) {
  this.canvas = canvas;
  this.render();
} 

DrawCanvas.prototype.render = function() {

}

module.exports = DrawCanvas;
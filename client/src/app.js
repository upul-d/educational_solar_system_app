
var DrawCanvas = require('./views/draw_canvas.js');


window.addEventListener('load', function() {
  var canvas = document.querySelector('#canvas');
  new DrawCanvas(canvas);
})
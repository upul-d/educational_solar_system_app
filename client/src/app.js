
var DrawCanvas = require('./views/draw_canvas.js');


window.addEventListener('load', function() {
  var canvas = document.querySelector('#canvas');
  var context = canvas.getContext("2d");
  context.translate(250, 250);
  new DrawCanvas(canvas);
})
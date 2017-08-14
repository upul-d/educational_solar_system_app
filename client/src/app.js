var populateScreen = require("./views/populate_screen.js");
var setNavEvents = require('./views/info_nav_events.js');
var DrawCanvas = require('./views/draw_canvas.js');
var CanvasHandler = require('./views/canvas_handler.js');

var canvasHandler;
var drawCanvas;

var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();
}

var requestComplete = function() {
  if(this.status !== 200) {
    alert("Sorry, we weren't able to connect. Please try again later.");
    return;
  }

  var jsonString = this.responseText;
  solarSystem = JSON.parse(jsonString);
  populateScreen(solarSystem.planets[5]);
  console.log(solarSystem);
  drawCanvas = new DrawCanvas(canvasHandler, canvas, solarSystem);
}

var manageBackgroundCanvas = function(){
  var resizeCanvas = function() {
    canvasTwo.width = window.innerWidth;
    canvasTwo.height = window.innerHeight;
  }

  var canvasTwo = document.querySelector("#canvas-full");
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
}

window.addEventListener('load', function() {
  var canvas = document.querySelector('#canvas');
  makeRequest("/solar_system", requestComplete);
  canvasHandler = new CanvasHandler(canvas)
  setNavEvents();

  var currentSquare;
  canvasHandler.onClick = function(square){
    if(currentSquare === square) return;

    currentSquare = square;
    populateScreen(square.data);
    drawCanvas.moveToLocation(square);
  }

  var hoverName = document.querySelector("#hover");
  canvasHandler.onHover = function(square){
    if(square){
      hoverName.innerText = square.data.Name;
    }else{
      hoverName.innerText = "Solar System";
    }

  }

  manageBackgroundCanvas();
})

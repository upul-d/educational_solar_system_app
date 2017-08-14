
var DrawCanvas = require('./views/draw_canvas.js');

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
  console.log(solarSystem);
}

window.addEventListener('load', function() {
  var canvas = document.querySelector('#canvas');
  new DrawCanvas(canvas);
  makeRequest("/solar_system", requestComplete);
})

var populateScreen = require("./views/populate_screen.js");
var setNavEvents = require('./views/info_nav_events.js');
var DrawCanvas = require('./views/draw_canvas.js');
var CanvasHandler = require('./views/canvas_handler.js');

var canvasHandler;
var drawCanvas;
var hoverName;

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
  populateScreen(solarSystem.details[0]);
  console.log(solarSystem);
  // var canvas = document.querySelector('#canvas');
  // console.log('this is the canvas:', canvas);
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
  var storedFavourites = localStorage.getItem("favourites");
  if(!storedFavourites){
    var emptyArray = JSON.stringify([]);
    localStorage.setItem("favourites", emptyArray);
  } else {
    var finalFavourites = JSON.parse(storedFavourites);
    populateFavourites(finalFavourites);

  }

  var canvas = document.querySelector('#canvas');
  canvasHandler = new CanvasHandler(canvas);
  makeRequest("/solar_system", requestComplete);
  setNavEvents();

  var currentSquare;
  hoverName = document.querySelector("#hover");
  canvasHandler.onClick = function(square){
    if(currentSquare === square) return;

    currentSquare = square;
    populateScreen(square.data);
    manageMoveToLocation(square);

    var favouritesButton = document.querySelector("#favouritesButton");
    favouritesButton.addEventListener("click", function() {

      var storedFavourites = localStorage.getItem("favourites");
      var favouritesArray = JSON.parse(storedFavourites);

      for(var item of favouritesArray){
        if(item.Name === square.data.Name){
          return;
        }
      }

      favouritesArray.push(square.data);

      var jsonString = JSON.stringify(favouritesArray);
      localStorage.setItem("favourites", jsonString);

      populateFavourites(favouritesArray);
    })
  }


  canvasHandler.onHover = function(square){
    if(square){
      hoverName.innerText = square.data.Name;
    }else{
      hoverName.innerText = "Solar System";
    }
  }

  manageBackgroundCanvas();


})

var manageMoveToLocation = function(square){
  drawCanvas.moveToLocation(square);
  hoverName.innerText = square.data.Name;
  var form = document.querySelector("#form");
  form.style.display = "block";
  canvasHandler.onClick = function(){};
  canvasHandler.onHover = function(){};
}

var populateFavourites = function(favourites) {
  removeFavourites();
  var newArray = []
  var ul = document.createElement("ul");
  ul.id= "favUl"

  var liEvent = function(){

  }

  favourites.forEach(function (favourite, index) {
    var li = document.createElement("li");
    li.innerHTML = "<a href='#'>" + favourite.Name + "</a>";
    li.addEventListener('click', function(){
      var squares = canvasHandler.squares;
      for(var square of squares){
        if(square.data.Name === favourites[index].Name){
          manageMoveToLocation(square);
          break;
        }
      }
      populateScreen(favourites[index]);
    })
    ul.appendChild(li);
    newArray.push(li);
  });

  for(var favourite of favourites){

  }


  var box = document.querySelector("#left-side");
  box.appendChild(ul);
}

var removeFavourites = function(favourites) {
  var sidebar = document.querySelector("#left-side");
  var ul = document.querySelector("#favUl");
  if(ul){
  sidebar.removeChild(ul);
}
}

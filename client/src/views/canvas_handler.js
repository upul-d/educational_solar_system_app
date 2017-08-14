var CanvasHandler = function(canvas) {

  this.squares =[];
  this.onClick = function() {};

  canvas.addEventListener("click", function(event)  {
    var x = event.offsetX;
    var y = event.offsetY;
    var square = this.getSquareWithin(x,y);
    if(square !== null) {
      this.onClick(square);
    }
  }.bind(this))

  this.onHover = function() {};

  canvas.addEventListener("mousemove", function(event)  {
    var x = event.offsetX;
    var y = event.offsetY;
    var square = this.getSquareWithin(x,y);
    if(square !== null) {
      this.onHover(square);
    }
  }.bind(this))

}

CanvasHandler.prototype.getSquareWithin = function(x,y){
  for (square of this.squares) {
    if (square.isWithin(x,y)) {
      return square
    }
  }
  return null;
}








module.exports = CanvasHandler

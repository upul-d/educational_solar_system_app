var Board = function(canvas) {

  this.squares =[];
  this.onClick = function() {};

  canvas.addEventListener("click", function()  {

  })
}

Board.prototype.getSquareWithin = function(x,y){
  for (square of this.squares) {
    if (square.isWithin(x,y)) {
      return square
    }
  }
}








module.exports = Board
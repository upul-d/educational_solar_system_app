var Square = function(canvas, x, y, width, height, border, fill) {
  this.canvas = canvas;
  this.context = canvas.getContext("2d");
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.border = border;
  this.fill = fill;
}

Square.prototype.drawFill = function() {
  this.context.fillStyle = this.fill;
  this.context.fillRect(this.x, this.y, this.width, this.height);
}

Square.prototype.drawBorder = function() {
  this.context.strokeStyle = this.border;
  this.context.strokeRect(this.x, this.y, this.width, this.height);

}

module.exports = Square;
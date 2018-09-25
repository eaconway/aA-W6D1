function MovingObject (params) {
  this.pos = params.pos;
  this.velocity = params.velocity;
  this.radius = params.radius;
  this.color = params.color;
  
}

MovingObject.prototype.move = function () {
  this.pos[0] += this.velocity[0];
  this.pos[1] += this.velocity[1];
};

MovingObject.prototype.draw = function (ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
   this.pos[0],
   this.pos[1],
   this.radius,
   0,
   2 * Math.PI,
   false
  );

  ctx.fill();
};

MovingObject.prototype.isCollidedWith = function (otherMovingObject) {
  
};

module.exports = MovingObject;
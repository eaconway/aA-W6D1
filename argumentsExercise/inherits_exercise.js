// Function.prototype.inherits = function(parent) {
//   function Surrogate() {}
//   Surrogate.prototype = parent.prototype;
//   this.prototype = new Surrogate();
//   this.prototype.constructor = this;
// };

Function.prototype.inherits = function(parent) {
  this.prototype = Object.create(parent.prototype);
  this.prototype.constructor = this;
};

function Rectangle (name){ 
  this.name = name; 
  this.hello = function(){ 
    console.log(`hi, ${this.name}`); 
  };
}

function Square (name){ 
  Rectangle.call(this, name);
}

Square.inherits(Rectangle);
let s = new Square("thinking ruby");
s.hello();

// function MovingObject () {}
// 
// function Ship () {}
// Ship.inherits(MovingObject);
// 
// function Asteroid () {}
// Asteroid.inherits(MovingObject);













// asteroids.js
const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
// let cv = document.getElementById("game-canvas");
// let ctx = cv.getContext('2d');
// 
// const mo = new MovingObject(
//   { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00"}
// );
// 
// mo.draw(ctx);
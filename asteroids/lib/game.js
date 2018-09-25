// const movi

const Asteroid = require('./asteroid.js');
const Bullet = require('./bullet.js');
const Ship = require('./ship.js');
const Utils = require('./utils.js');

// DEFAULTS = {
// 
// };

class Game {
  constructor () {
    this.DIM_X = 300;
    this.DIM_Y = 300;
    this.NUM_ASTEROIDS = 10;
    
    this.asteroids = [];
    this.addAsteroids();
  }
  
  addAsteroids(){
    while (this.asteroids.length < this.NUM_ASTEROIDS) {
      this.asteroids.push(new Asteroid({pos: this.randomPosition() }));
    }
  }
  
  randomPosition(){
    return [Math.floor(Math.random() * Math.floor(this.DIM_X)),
      Math.floor(Math.random() * Math.floor(this.DIM_Y))];
  }
  
  draw(ctx){
    ctx.clearRect();
    this.asteroids.forEach((ast) => {
      ast.draw(ctx);
    });
  }
  moveObjects(){
    this.asteroids.forEach((ast) => {
      ast.move();
    });
  }
}
const movingObject = require('./moving_object.js');
const Util = require("./utils");



class Asteroid extends movingObject{
  constructor (params = {}) {
    // params.pos = 
    params.color = '#00FF00';
    params.radius = 50;
    params.velocity = Util.randomVec(params.radius);

    // params.pos = Util.randomVec(params.radius);
    super(params);
  }
}
module.exports = Asteroid;
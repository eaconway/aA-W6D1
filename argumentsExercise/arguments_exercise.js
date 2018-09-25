
function sum(...args){
  let sum = 0;
  args.forEach((el) => { sum += el; });
  return sum;
}

console.log("sum: ", sum(1, 2, 3, 4) === 10);
console.log("sum: ", sum(1, 2, 3, 4, 5) === 15);


Function.prototype.myBind = function(obj, ...therestofthem){
  console.log("this", this);
  console.log("obj: ", obj);
  console.log("the rest: ", therestofthem);
  const that = this;
  return function(...otherthem) {
    that.call(obj, ...therestofthem.concat(otherthem));//(...therestofthem.concat(otherthem));
  };
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(breakfast, "meow", "Kush")();
// Breakfast says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "me"
markov.says.myBind(breakfast)("meow", "a tree");
// Breakfast says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(breakfast, "meow")("Markov");
// Breakfast says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(breakfast);
notMarkovSays("meow", "me");
// Breakfast says meow to me!
// true


/////////////////


function sum(args) {
  let sum = 0;
  args.forEach((el) => { sum += el; });
  return sum;
}

const curriedSum = function(num_args){
  let params = [];
  const curry = function(args){
    params.push(args);
    if(params.length === num_args){
      return sum(params);
    } else {
      console.log("params length: ", params.length);
      return curry;
    }
  };
  return curry;
};

const sumThing = curriedSum(4);
console.log("Curry", sumThing(5)(30)(20)(1)); // => 56'



Function.prototype.curry = function(num_args) {
  const params = [];
  const that = this;
  console.log("that:", that);
  function curryLoop(args){
    params.push(args);
    
    if(params.length === num_args){
      console.log("params length", params);
      return that(params);
    } else {
      console.log("params not yet done", params);
      return curryLoop;
    }
  }
  return curryLoop;
};



Function.prototype.curry = function(ctx, num_args) {
  const params = [];
  const that = this;
  console.log("that:", that);
  
  function curryLoop(args){
    params.push(args);
    
    if(params.length === num_args){
      console.log("params length", params);
      return that.apply(ctx, params);
    } else {
      console.log("params not yet done", params);
      return curryLoop;
    }
  }
  return curryLoop;
};





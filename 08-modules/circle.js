
//when use yarn installed program, we do not need to indicate ./ current directory
//becauses we we yarn add prompt-sync, when we require prompt sync, it will directly look for
//files under node_modules
const prompt = require("prompt-sync")();

//when we import from our own file, we need to use ./ at current directory
//if we do not put ./, node will look for files into node_modules file
const {pi, calculateArea} = require('./math.js');


let r = prompt("enter a radius");


let area = calculateArea(r);
console.log(area);
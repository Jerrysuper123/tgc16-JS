// in JS, {.. } forms a local scope, outside is global scope

const prompt = require("prompt-sync")();
let age = prompt("please enter your age");
if(age < 76){
    console.log("cannot retire yet");
    let x = 42;
}

console.log(x);

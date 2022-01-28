//unary - operator that works with one clause
let x = 3;
// console.log(x++);
//++ only works after line 3
// console.log(x);

let y=4;
//++ will add 1 to y in line 9
// console.log(++y);
// console.log(y)

//ternary operator
let number = 3;
number = (number <5? number: 0 );
// console.log(number);

console.log("3||4 =>", 3||4);
console.log("0||4 =>", 0||4);
console.log("", undefined||"Jerry")

//name = (undefined || "N/A")
//if first is undefined, take the second value
// if first is good/true, take the first value

const prompt = require('prompt-sync')();
let name = prompt("Enter your name");
name = (name || 'N/A');
console.log(name);
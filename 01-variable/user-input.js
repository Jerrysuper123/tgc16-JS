//how to add prompt
//download at
//yarn add prompt-sync
//either 1. do it per folder
//or 2. do it at workspace for all directories

//import in prompt sync into our program
//require prompt sync needs to have additional (), it returns a function

const prompt = require('prompt-sync')();

let s = prompt("How are you?");
console.log("hi ", s);
//ask for user to input consistently, stop only when user input y or n

const prompt = require('prompt-sync')();

let ans = prompt('give yes or no');
//we want ans==='yes' || ans==="no"
//demorgan theorem always take the opposite

while(ans!=="y"&& ans!=="n"){
    ans = prompt("give yes or no");
    // break;
}

console.log("you have given a yes or no")
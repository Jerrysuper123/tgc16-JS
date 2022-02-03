const prompt = require('prompt-sync')();
const fs = require('fs');

let input;
let validFruits = ['apple', 'orange','pineapple','watermelon','durian'];
while(true){
    input = prompt('enter a fruit ').toLowerCase().trim();
    if(validFruits.includes(input)){
        fs.appendFileSync('data.txt', '\n'+input);
    } else{
        break;
    }
} 

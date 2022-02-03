const fs = require('fs');
//using const because we do not want to reassign it accidentally later

let data = fs.readFileSync('data.txt');
let text = data.toString();

let fruits = text.split('\n');
console.log(fruits);

let obj = {
    apple: 0.5,
    orange: 0.7,
    pineapple: 1,
    watermelon: 2.5,
    durian: 10
}

let total = 0;
for(let fruit of fruits ){
    //chekc if my fruit in in the obj to make sure the right value is entered
    //we trim the space if "apple " has a space, we can also trim it
    fruit = fruit.toLowerCase().trim();
    if(fruit in obj){
        total = total + obj[fruit];
    }
}

console.log(total);

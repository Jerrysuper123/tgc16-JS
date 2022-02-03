const fs = require('fs');
const prompt = require('prompt-sync')();
let fileName = prompt('give a file name');

//file is a good way to use try and catch
try{
let data = fs.readFileSync(fileName);
let lines = data.toString().split('\n');
// console.log(lines[1]);
//[ 'chicken 2.50 3', 'apple 3.00 4', 'rice 1.50 3' ]

for(let i of lines){
    //use space to split is not good, better to use comma (comma separate lines)
    let item = i.split(',');
    let subtotal = Number(item[1]*item[2]);
    console.log(item[0],subtotal);
}

} catch(e){
 console.log('there is an error')
}
console.log('the program ends');

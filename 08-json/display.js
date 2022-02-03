const fs = require('fs');

let data = fs.readFileSync('employees.json');
let text = data.toString();

//json parse will convert text into array/obj
let employees = JSON.parse(text);
console.log(employees);


//serialization - convert data into string/save into program
//de serialization - convert string into data 
const fs = require('fs');
const prompt = require('prompt-sync')();
let text = fs.readFileSync('employees.json').toString();
let employeeArray = JSON.parse(text);
// console.log(dataArray);

let inputId = prompt('enter a userID: ').toLowerCase().trim();
for(let employee of employeeArray){
    if(employee.userId===inputId){
        console.log(employee.firstName);
        console.log(employee.lastName);
        console.log(employee.jobTitle);
    }
}

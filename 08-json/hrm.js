const prompt = require('prompt-sync')();
const fs = require('fs');
let filename = 'employee.json';
let employees = [];

while(true){
    let ans = prompt('enter a new employee yes/no?')
    if(ans.toLowerCase()==='no'){
        break;
    }
    let employeeName = prompt('enter employee name');
    let jobTitle = prompt('enter job title');
    employees.push({
        employeeName: employeeName,
        jobTitle: jobTitle
    })
}

console.log(employees);

//stringnify the employees and write to employees.json file
let str = JSON.stringify(employees);
fs.writeFileSync('employees.json', str);
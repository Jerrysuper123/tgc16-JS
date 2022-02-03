const prompt = require('prompt-sync')();

const fs = require('fs');

let fileName = "story2.txt";

while(true){
    let line = prompt('>');
    if(line=='-1'){
        break;
    }
    //append file is a loop not very efficient, has to open and close file again and again
    fs.appendFileSync(fileName, line + '\n');
}

console.log("End")
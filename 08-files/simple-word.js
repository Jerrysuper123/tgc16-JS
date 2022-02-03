const prompt = require('prompt-sync')();

const fs = require('fs');
let fileName = 'story.txt';

//type if first, then replade it with while
let line = prompt('>');
let story = "";
while(line!=="-1"){
    story = story + '\n' + line;
    line = prompt('>');
}

fs.writeFileSync(fileName, story);

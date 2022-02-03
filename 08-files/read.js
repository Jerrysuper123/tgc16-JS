//for node js, we need to install fs module - file system
//gitpod already comes with node js

const fs = require('fs');

//store raw data
//sync means synchronously, means js will read until file finished reading
let data = fs.readFileSync('data.txt');

//convert raw data to string
let text = data.toString();
let lines = text.split('\n');

console.log(lines[1]);
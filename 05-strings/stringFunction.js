//you can acess the char by indexing
//you can get the length of the string

//'' => empty string
//' ' => has a space in between

let fruit = "Grandmother";

//slice (starting index, up to but not including)
//slice(staring index, ) => start and go all the way to the end
//slice returns a new string below, but does not change the original string(immutable)
console.log(fruit.slice(3));
console.log(fruit)

//slice without any argument will result in a new copy of the string
console.log(fruit.slice())

//give a copy of string in uppercase or lowerCase
//this function return a new string, the original string is intact (immutable)
console.log("in upper case", fruit.toUpperCase());
console.log("in lower case", fruit.toLowerCase());
console.log(fruit);

//trim all white space from the back or right of the string
console.log('asass '.trim()+"!");
console.log(' asass'.trim()+"!");

//includes return true is a letter/phase is in the string
//return false if it does not include
//string is case sensitive - G is different from g
console.log(fruit.includes('Gran'));

//use indexOf - find the index of the first occurence of the substring
console.log(fruit.indexOf('ra'));

//split will break a string into array
let sentence = "this is so funny";
let phrase = "tom,jerrry,haha";
console.log(sentence.split(' '));
console.log(phrase.split(','));
console.log(fruit.split(''));

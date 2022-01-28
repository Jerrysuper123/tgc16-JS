//you can acess the char by indexing
//you can get the length of the string

//'' => empty string
//' ' => has a space in between

let fruit = "grandmother";

//slice (starting index, up to but not including)
//slice(staring index, ) => start and go all the way to the end
//slice returns a new string below, but does not change the original string(immutable)
console.log(fruit.slice(3));
console.log(fruit)

//slice without any argument will result in a new copy of the string
console.log(fruit.slice())
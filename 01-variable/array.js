//create new array
let fruit = [];
let numbers = new Array();

//create 10 slots
let allZero = new Array(10);
console.log("allzero: ", allZero);

//array/object is reference values again primitive values (boolean, string)
//primitive let s = "string";
//variable store reference to the array only
//variable b1 and b2 only stores memory address of the array
let b1 = [1,2,3,4]
let b2 = b1;
b1[0] = -99;
console.log("B2= ", b2); //[-99,2,3,4]

//you can use slice() function to create deep copy of the file, so that b1
//b1 and b2 refer to different arrays


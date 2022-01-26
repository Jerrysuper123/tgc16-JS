
let something;
//below will get NAN becos undefined + 3;
//NAN is hard to track the error
//anything associated with NAN will become a NAN
let s = something + 3;
console.log("s =", s);

//JS has a lot of silent failures, making it hard to spot errors, that is why 

//anything associated with infinity will become infinity
let i = 22/0;
console.log("i =", i);
let j = i + 2;
console.log("j =", j);
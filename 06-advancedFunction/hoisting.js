// annoymous functions
// functions with no name
(function() {
    console.log("Hello World")
})();

// we can call the foobar function
// because we define it as a function
// and js will perform hoisting
foobar();

f(); //will cause error

// function expression
// no hoisting,, i.e must define
// first you can use
let f = function(n) {
 return n * 2;
}
console.log(f(3));

// js will perform hoisting on
// functions
function foobar() {
    console.log("hello world from foobar");
}
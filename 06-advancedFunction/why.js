//why anonymous function
//easier to write

let numbers = [4,5,5,7,3,3];

numbers.sort(function(a,b){
    return a-b;
})

//arrow function shorten the writing
numbers.sort((a,b)=>a-b);
console.log(numbers);
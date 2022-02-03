// replaceNthCharacter("ABC", 1, "Z") ==> "AZC";
// replaceNthCharacter("Idea", 3, "A") ==> "IdeA";

// 1. Write a function replaceNthCharacter() that takes in three
// arguments. The first argument is a string, the second argument
// is a single character, and the last argument is an index.
// The function will return a string same as the first argument,
// excpet the character at the specific index is the second argument.

// replaceNthCharacter("ABC", 1, "Z") ==> "AZC";
// replaceNthCharacter("Idea", 3, "A") ==> "IdeA";

let prompt = require("prompt-sync")();

function replaceNthCharacter(str, index, letter){
    //can use slice
    let arr = str.split(''); //[ 's', 't', 'r' ]

  
    // return Array;
    arr[index] = letter; //[ 'z', 't', 'r' ]
    //join(), separate element by comma ,
    //join(''), no separation among elements
    //join('-'), join elements with -
    str = arr.join(''); //'ztr'
    return str;
}

console.log(replaceNthCharacter('str',0,'z'))


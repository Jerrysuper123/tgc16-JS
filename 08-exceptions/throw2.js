const prompt = require('prompt-sync')();

function askforName(){
    let name = prompt("Enter your name");

    if(name ==""){
        //name = "" is to detect an error for empty string
        throw "Username is emtpy"
    }

    return name;
}

try{
    let userName = askforName();
    console.log("Welcome ", userName);
    //e is an argument, it is a parameter for a function
    //this e is any errors in the function, not just a specific type of error
} catch (e){
    //below catches above throw, and e matches the error of "" empty string
    //but e can be any errors of the function crashing
    console.log(e);
}

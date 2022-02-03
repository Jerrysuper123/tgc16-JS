//function name is a reference is a function
function shout(a){
    console.log(a);
}

//f store a reference to shout
let f = shout;


function process(func, val){
    return func(val);
}

//we pass f=shout function to process function
process(f,3);
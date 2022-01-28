//or logical shortCircuit
function f1(){
    console.log('f1');
    return true;
}

function f2(){
    console.log('f2');
    return false;
}

//or shorCircuit, f2 function will not be called below
console.log(f1()||f2());

//logical and shortcircuit
//only f2 will be called below becos it is false
console.log(f2()&&f1());

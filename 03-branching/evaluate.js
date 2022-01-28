let x = 3;
let y = 4;
password = "rotiprata";

console.log(undefined||4); //return 4
console.log(undefined===false); //return false, undefined !== false

if(undefined){ //undefined is false in a conditonal if
    console.log('undefined is true')
} else{
    console.log('undefined is false')
}

console.log("x== parseInt('2')+1 =>",x== parseInt('2')+1);// return true

//3
console.log("y==='4' =>",y==='4'); //return false

//4
console.log("x==4?10:25",x==4?10:25); //25

//5
console.log(x>0 && y<5? "yes": "no"); //yes

//6
console.log((0||y)&&true); //true

//7
console.log(x+""+y==34); //true, when string added to interger become string concat ("34"==34)

//8
console.log(x>0?x>10?"A":"B":"C"); //B

//9
console.log(password==='rotiprata' && x-4); //return -1 (it is true), why?? AND operator false takes stronger effect
//or operator true takes stronger effect

//10
console.log(x+1-y? "Ok" : "not ok"); //return not okay

//11
console.log(password/3? "ok": "not okay");//return not kay, password/3 is NAN

//12
console.log(Math.sqrt(x-y)?'okay':'not ok'); //return not okay, sqr(-1) = NaN
//If the number is a negative number, the sqrt() function will return NaN.
console.log('3'==3);
//return true

//3 equals restrict type
console.log('3'===3)
//return false

const prompt = require('prompt-sync')();
function evenOdd(){
    let val = prompt('give an number');
    if(val%2===0){
        console.log('even')
    } else{
        console.log('odd');
    }
}
console.log(evenOdd());

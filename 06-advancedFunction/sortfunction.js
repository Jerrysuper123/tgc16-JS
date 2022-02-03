let numbers = [333,11,23,334,55,66];
//please sort the number array by custom compare function
numbers.sort(compare);
console.log(numbers);


function compare(a,b){
    return a-b;
    //a=333, b=11
    // a-b = 333-11 = 322 is postive, a will go behind b
};

let fruits = ['bpple',"aear","asadad" ];//[ 'aear', 'asadad', 'bpple' ]
console.log(fruits.sort());
console.log(fruits.sort(compareL)); //[ 'aear', 'bpple', 'asadad' ]

//sort by length of the string
function compareL(a,b){
    return a.length - b.length;
}


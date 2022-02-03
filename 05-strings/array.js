//slicing, indexing, includes, index string is the same as array
//arrays are mutable
let fruit = ['apple','pear','orange'];
fruit[0] = 'papaya';
console.log(fruit);

//push function to add element to the end of the array
//push function will change array in place
console.log(fruit.push("Chicken rice"));
console.log(fruit);

//pop is to return element at the end of the array
console.log(fruit.pop());
console.log(fruit);

//change the order of the array
fruit.reverse();
console.log("reverse order= ",fruit);

//splice (where start to delete, how many to delete)
let number = [1,2,3,4,5];
console.log("number= ",number);
//it does return the deleted portion, but edit the orginal array in place
number.splice(1,2);
console.log('splice(1,2)=>',number);

//traversing thru the array using for loop i++
//or you use let el of arr loop
for(let el of number){
    console.log(el);
}

//let of also works for string
//string and array are considered consequence (go from left to right);
for (let i of 'number'){
    console.log(i);
}
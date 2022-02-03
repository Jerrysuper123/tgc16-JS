//array are sequence
let fruits = ['apple','pear','banana']
for(let f of fruits){
    console.log(f);
}




//object are not sequence
//keys are added to objects will not be in order you added them
let o = {};
o.food = "chicken rice";
o.price =  3.4;
o.author = 'Paul';
console.log(o);
//empty object are falsy


//for let item in object to traversal keys
for(let propertyName in o){
    console.log(propertyName);
    console.log(o[propertyName]);
}
//key value pair is object

let fruit = {
    'a': 'apple',
    'b': 'banana',
    'c': 'cherries'
}

//one pair of key value is known as property
// we refer as property name and property value

//using index to access value
console.log('fruit[b]=>',fruit['b'])
//using dot notation to access value
console.log('fruit.a=>',fruit.a);


//to use the dot notation, property name must be a valid variable name in js
let student = {
    'first name' : 'John'
}

// console.log(student.fist name) //cannot access
console.log('student["first name"] =>',student["first name"]);

//you can omit '' on the keys, js will still treat it as strings
//js will always treat keys as string
let recipe = {
    title: 'spicy fried chicken',
    calories: 800,
    'number of servings' : 3
}

//object in js can store functions
let spaceShip = {
    speed: 10,
    //a function inside an object is called a method
    calculateDistanceTravelled: function(time){
        console.log('attempting to cal distance travelled')
        //this refers to the object that the function is in
        //if it is just speed, there is no speed in the local scope of this function
        return this.speed*time;
    }
}
let starDestroyer = {
    speed: 10,
    calculateDistanceTravelled: function(time){
        console.log('attempting to cal distance travelled from start destroyer');
        return this.speed*time**1.5;
    }
}

//oustide the object, you have to put name to access
console.log(spaceShip.speed);
console.log('spaceShip.calculateDistanceTravelled() =>',spaceShip.calculateDistanceTravelled(10));
console.log('starDestroyer.calculateDistanceTravelled()=>',starDestroyer.calculateDistanceTravelled(10))


//we can add in properties or method later
let employeeRecord = {
    firstName : 'Tan'
}

//add in last name
employeeRecord.lastName = 'ah kow';
employeeRecord.getName  = function(){
    return this.firstName + " " + this.lastName;
}

console.log(employeeRecord);
console.log("getName function =>", employeeRecord.getName());

//primitive - string, float, int (string despite being object with method and property, they are immutable - they act the same as primitive)
//reference /civilized - function, arr, obj

//for reference, varaibles store a reference to the same object/array/function

let food = {
    'a': 'apple',
    'b': 'banana',
    'c': 'cherries'
}

//a must be in quotation to be string, below ways are quite new
console.log(`'a' in food => `,'a' in food)
console.log(`'d' in food => `,'d' in food)

//old ways of using
//why has own property - can read object.Photoype - no importance in practical situations
console.log(`food.hasOwnProperty('c')=>`,food.hasOwnProperty('c'));
let letter = `haha`;

//sometimes known as template literal
//1)backtick can have multiple lines with spacing
//2) can include "", special characters as well 
//2)you can also insert variables

let email = `
Dear customer,
how are you?
our motto "our customer is always right"
`;

console.log(email);

//string is immutable, you cannot change the individual char in the string
let fruit = "Pear"
fruit[0] = 's';
console.log("Pear becomes ", fruit);

//below are overiding reassignement
let name = "Ya Kun";
name = 'Jerry';
//how far a person can travel with 35 dollar
let budget = 35;

let firstRate = 3.5; //500 kilometer
let secondRate = 3.5; //400 kiolmeter

let distance=0;

while(budget>=3.5){
    if(distance<10000){
        budget -= firstRate;
        distance+=500;
    }

    if(distance>10000){
        budget -= secondRate;
        distance+=400;
    }
}
console.log(distance);
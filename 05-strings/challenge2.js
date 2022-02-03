
// 2. CRAPS
// Create a game of craps using the Math.random() function to generate random numbers.
// At the start of the game, the player starts with $100.
// Each round of the game, roll one dice (getting a number between 1 to 6) and display that the user.
// Then ask the user how much money to bet. After which, roll the second dice and add up the total of both dice.
// If the sum is 7, the player loses the amount he has bet. Otherwise, he earns an amount equal to the bet.
// Next, ask the player if they want to continue. If they decide to, repeat one more round. Otherwise, the game ends.

let prompt = require("prompt-sync")();
let money = 100;

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function inputValidation(val){
    //regular expression to text if the input is a digit
    if(/\d/.test(val)){
        return true;
    } else{
        return false;
    }
}

// console.log(inputValidation(Number('str')*1));

function winOrLose(sum, bet){
    if(sum===7){
        money = money - bet;
        console.log(`
        sum of two dices is 7, you lose ${bet},
        currently, your balance is ${money}
        `)
    } else{
        console.log("bet is NAN =>",bet);
        money = money + bet;
        console.log(`Sum of two dices is not 7, you win ${bet},
        currently, your balance is ${money}
        `)
    }
    return money;
}

let globalBet;
function askingForBet(){
    globalBet = Number(prompt('how much money to bet? '));
    if(!inputValidation(globalBet)){
        console.log("you have entered invalid number, please try again!")
        askingForBet();
    }   
    return globalBet;
}

while(true){
    // break;
    let x = randomNumber(1,6);
    console.log('Dice rolled to: ',x);
    let bet = askingForBet();

    let y = randomNumber(1,6);
    console.log('Dice rolled to: ',y);
    let sum = x + y;
    let money = winOrLose(sum, bet);

    if(money<=0){
        console.log("you lost all the money, Game over!");
        break;
    }

    let ans = prompt('continue to play y/n? ');
    if(ans === "n"){
        break;
    }
}

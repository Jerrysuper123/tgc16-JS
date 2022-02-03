
// 3. Tit Tat Toe
// Using JavaScript, and an array of array of integers, where 0 is
// empty square, 1 is O and 2 is X, create two-player tit tat toe game.
// The game ends when one player has three of their symbols in a row,
// column or diagonal, and or when the board is full and no other symbols
// can be put down. Declare who is the winner.
let prompt = require("prompt-sync")();

let chessBoard = [
    [[''],[''],['']],
    [[''],[''],['']],
    [[''],[''],['']]
]

let round = 0;
let winEnd = false;

function inputValidation(index){
    if(index>=0 && index<=2){
        return true;
    }else{
        return false;
    }
}

// console.log(inputValidation(2));
//diffcult for state manage without class

let userInput;
function askingInput(dimension, val){
    userInput = Number(prompt(`player ${val} please enter your ${dimension} index (0-2): `));
    let validated = inputValidation(userInput);
    if(validated===false){
        console.log('you have entered invalid values, enter value between 0-2');
        askingInput(dimension,val);
        if(validated===true) return;
    }
    return userInput;
}

function callPlayer(arr, player){
    round++;
    console.log(`round : ${round}`);
    let xIndex = askingInput('x', player);
    let yIndex = askingInput('y', player)
    
    let chess;
    if(player===1){
        chess = 'O';
    } else if (player===2) {
        chess = 'X';
    }
    console.log("xIndex ", xIndex, "yIndex ",yIndex);
    arr[yIndex][xIndex][0] = chess;
    console.log(arr);
    winOrLose(arr);
    return round;
}

while(true){
    // break;
    let round = callPlayer(chessBoard, 1);
    if(winEnd===true) break;
    if(round>=9){
        console.log('round 9 has finished, Game end')
        break;
    }
    round = callPlayer(chessBoard, 2);
    if(winEnd===true) break;
    if(round>=9){
        console.log('round 9 has finished, Game end')
        break;
    }
}

function winOrLose (arr){
    //rows are the same
    if(arr[0][0][0]!== '' && arr[0][0][0]===arr[0][1][0] && arr[0][1][0]===arr[0][2][0]){
        console.log(`player ${arr[0][0][0]} has won`);
        winEnd = true;
    }

    if(arr[1][0][0]!== '' && arr[1][0][0]===arr[1][1][0] && arr[1][1][0]===arr[1][2][0]){
        console.log(`player ${arr[1][0][0]} has won`);
        winEnd = true;
    }
    if(arr[2][0][0]!== '' && arr[2][0][0]===arr[2][1][0] && arr[2][1][0]===arr[2][2][0]){
        console.log(`player ${arr[2][0][0]} has won`);
        winEnd = true;
    }

    //columns are the same
    if(arr[0][0][0]!== '' && arr[0][0][0]===arr[1][0][0] && arr[1][0][0]===arr[2][0][0]){
        console.log(`player ${arr[0][0][0]} has won`);
        winEnd = true;
    }
    if(arr[0][1][0]!== '' && arr[0][1][0]===arr[1][1][0] && arr[1][1][0]===arr[2][1][0]){
        console.log(`player ${arr[0][1][0]} has won`);
        winEnd = true;
    }
    if(arr[0][2][0]!== '' && arr[0][2][0]===arr[1][2][0] && arr[1][2][0]===arr[2][2][0]){
        console.log(`player ${arr[0][2][0]} has won`);
        winEnd = true;
    }

    //if diagnal are the same
    if(arr[0][0][0]!== '' && arr[0][0][0]===arr[1][1][0] && arr[1][1][0]===arr[2][2][0]){
        console.log(`player ${arr[0][0][0]} has won`);
        winEnd = true;
    }
    if(arr[0][2][0]!== ''&& arr[0][2][0]===arr[1][1][0] && arr[1][1][0]===arr[2][0][0]){
        console.log(`player ${arr[0][2][0]} has won`);
        winEnd = true;
    }
    return null;
}
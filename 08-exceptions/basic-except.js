// return the average of sum of the array

function findAverage(arr){
    if(arr.length===0){
        //throw an error
        throw "array is empty"
    }

    let total = 0;

    for(let el of arr){
        total = total + el;
    }
    return total/arr.length;
}

try{
    console.log("average of empty array",findAverage([])); //0/0 is NAN
} catch(e){
    console.log(e);
}

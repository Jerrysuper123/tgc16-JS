let numbers = [1,2,-3,4];

//json.stringigy to convert arr/obj into a string

let jsonString = JSON.stringify(numbers);
console.log("typeOf Jsonstring ", typeof(jsonString));

//we can use stringnify to convert to string and write into a file and retrieve file
//becos only string goes into file and out of files (not object or array)
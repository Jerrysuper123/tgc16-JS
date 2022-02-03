let books = [];
const prompt = require('prompt-sync')();
const fs = require('fs');

while(true){
    let ans = prompt('enter info or not y/n').toLowerCase();
    if(ans==='n'){
        break
    }
    let ISBN = prompt('enter ISBN: ');
    let title = prompt('enter a title: ')
    let author = prompt('author: ')
    let date = prompt('date: ');
    books.push(ISBN);
    books.push(title);
    books.push(author);
    books.push(date);
}

// console.log(books);
let bookString = JSON.stringify(books);
fs.writeFileSync('books.json', bookString);
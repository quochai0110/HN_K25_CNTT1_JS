let bookName = prompt("mời nhập tên sách").trim().toUpperCase();
// console.log("bookName",bookName);

let bookAuthor = prompt("mời nhập tên tác giả");
let year = +prompt("nhập năm xuất bản");
let bookId= bookAuthor.slice(0,3) + year + (Math.floor(Math.random()*1000)+1);
console.log("bookId",bookId);
let price = parseFloat(prompt("nhập giá sách"));
let quantity = +prompt("nhập số lượng sách");
let bookAge= 2026- year; // tuổi của sách
let total = price*quantity; // giá tiền
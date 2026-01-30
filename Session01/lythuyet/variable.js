/* 

    Variable : Biến : Dùng để lưu trữ dữ liệu 
    3 từ khóa để khai báo biến
       js 1995
        1. var
            + có thể khai báo lại
            + có thể gán lại giá trị
            + có hoisting  truy cập được
            + phạm vi hoạt động function
        2. const  (ES6_ 2015) : thường dùng khai báo hằng số
            + không thể khai báo lại
            + không thể gán lại giá trị
            + có hoisting nhưng không truy cập được
            + phạm vi là block scope
        3. let    ( ES6_2015)
            + không thể khai báo lại 
            + có thể gán lại giá trị 
            + có hoisting nhưng không truy cập được
            + phạm vi block scope

    + Từ khóa khai báo biến :  3
    + Tên biến: 
        + viết theo tên tiếng anh
        + tuân theo quy tắc con lạc đà camel case
        + không bắt đầu bằng số
        + tránh các từ khóa đặc biệt ( let, var, const, class...)
    + giá trị của biến : mang giá trị thuộc một kiểu dữ liệu

    
*/
var fullName = " Lê Minh Sơn";
var fullName = "Nguyễn Minh Đức";
fullName = " Nguyễn Thanh Nga";
let bookName = " Đắc Nhân Tâm";
// let bookName= ""
bookName = "lập trình javasctip";
let age = 20;
let isLogin = true;

{
  var a = 6;
}

console.log(a);


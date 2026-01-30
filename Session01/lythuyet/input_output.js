/* 

Nhập và xuất
I: Nhập
 + dùng prompt : mặc định là string nếu nhập, nếu không nhập giá trị sẽ là null
II: Xuất
    + aleart ()
    + console.log()
    + document.write()
III_ chuyển đổi kiểu dữ liệu
1. string->number
    + dùng Number
    + dùng toán tử + 
    + parseInt : chuyển sang số nguyên ( nhập 5.1 vẫn lấy 5)
    + parseFloat: chuyển sang số thập phân 
*/

let number1 = Number(prompt("mời nhập số thứ 1")); // string
let number2 = +prompt("mời nhập số thứ 2"); //string
let total = number1 + number2;
console.log("total", total);
let a = parseInt(prompt("mời nhập số a"));
let b = parseFloat(prompt("mời nhập số b"));
let c = a + b;
console.log("giá trị c:", a);
let fullName="nguyễn minh đức";
console.log(`sinh viên chăm chỉ: ${fullName}`);


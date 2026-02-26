/* 
Các loại function và cách khai báo
Tham số và đối số trong hàm : GIÚP HÀM CÓ THỂ TÁI SỬ DỤNG
    + parameter(tham số) : được khai báo trực tiếp trong hàm
    + argument (đối số)  : khi gọi hàm truyền giá trị 
Gía trị trả về của hàm  : RETURN
*/

// 1. function declaration:
sayHello("hoa");
function sayHello(params) {
  console.log("xin chào!", params);
}

function login() {
  console.log("nhập email");
  console.log("mật khẩu");
}
// 2. function expression
const sum = function () {
  let a = 5;
  let b = 6;
  console.log(` tổng ${a} + ${b} = ${a + b}`);
};
// sum();

// 3. arrow function
const addToCart = () => {};

// KHAI BÁO MẢNG CHỨA ĐIỂM THI CUỐI MÔN HỌC JS BẤT KÌ
// TÍNH TỔNG TẤT CẢ CỦA CÁC ĐIỂM THI CUỐI MÔN
let scores1 = [4, 7, 5, 9];
let scores2 = [6, 7, 8, 3];
function totalScore(param1, param2) {
  let sum = 0;
  for (let i = 0; i < param1.length; i++) {
    sum += param1[i];
  }
  console.log(` kết quả : ${sum}`); // 25
}
totalScore(scores1); // [4,7,5,9]
totalScore(scores2); // [6,7,8,3]

let students = ["hoa", "thu", "lan", "ngoc", "minh"];
let result = [];

// viết hàm hiển thị danh sách sinh viên
function renderStudent(arr) {
  for (let i = 0; i < arr.length; i++) {
    document.write(`${arr[i]} <br>`);
  }
}
renderStudent(students);
// dùng promt cho người dùng nhập từ khóa tìm kiếm sinh viên sau đó hiển thị sinh viên
let studentName = prompt("mời nhập từ khóa tìm kiếm");
console.log("studentName", studentName);
for (let i = 0; i < students.length; i++) {
  if (students[i].includes(studentName)) {
    result.push(students[i]);
  }
}
document.write("******** <br>");
console.log("result", result);
renderStudent(result);

/* 
    Cho người dùng nhập vào email đăng ký
    Kiểm tra nếu có ký tự @ thì hiển thị email hợp lệ
    Không có thì không hợp lệ!
*/

/* 
    + Kiểm tra email nếu hợp lệ thì trả về true
    + nếu không hợp lệ trả về false
    
    */
function checkEmail(param) {
  if (param.includes("@")) {
    return true;
  }
  return false;
}

let email = prompt("mời nhập email");
if (checkEmail(email)) {
  console.log("email hợp lệ!");
} else {
  console.log("không hợp lệ!");
}

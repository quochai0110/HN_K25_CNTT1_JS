/* 
    Toán tử trong JS
    1.Toán tử số học : +, -, *, /, % ( chia lấy dư), ** (mũ);
    2.Toán tử so sánh: >, < , !=,!==, >=, <=, ==, ===;
        == : so sánh tương đối: chỉ so sánh giá trị
        ===: so sánh tuyệt đối : so sánh giá trị và kiểu dữ liệu
    3.Toán tử logic : ||, &&
    4.Toán tử 3 ngôi : dạng viết gọn của if_else  ? : 
    5.Toán tử phủ định !
    6. Toán tử tăng giảm ++, -- 
    ++a : tiền tố  : tăng trước
    a++ : hậu tố   : tăng sau 

    *************

    I _ truthy : không phải falsy
    II_falsy : 0, false, null, undefined, NaN, "", 
    || ==> tính từ trái sang phải gặp giá trị truthy thì lấy không thì lấy cuối cùng
    &&: gặp thì lấy falsy không thì lấy cuối cùng

     
*/
// if (5 > 4) {
//   console.log("đúng");
// } else {
//   console.log("sai");
// }
// let result = 5 > 4 ? console.log("đúng") : console.log("sai");
// let age = 20;

// let a=5;
// console.log(a++);
// console.log(a);

// let score = 7.5;
// if (score > 0 && score <= 10) {
//   if (score >= 8) {
//     console.log("học lực giỏi");

//   } else {
//     console.log("học lực khá hoặc trung bình, yếu");
//   }
// } else {
//   console.log("điểm không hợp lệ");
// }
// score>0&&score<=10 ? score>=8 ?console.log("học lực giỏi"):console.log("học lực khá hoặc trung bình, yếu")
//  : console.log("điểm không hợp lệ");

let score = +prompt("Enter a number");
let result = score % 2;
switch(result){
  case 0 :
    console.log("Đây là số chẵn !");
    break;
  case 1:
    console.log("Đây là số lẻ");
    break;
  default:
    console.log("Số không hợp lệ");
}

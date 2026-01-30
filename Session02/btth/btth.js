// Hệ thống kiểm tra người dùng có đủ điều kiện để mượn sách và tính tiền phạt
// nếu trả sách muộn

// 1. Sử dụng lệnh prompt để nhập thông tin

let username = prompt("mời nhập tên người dùng");
let role = prompt("mời nhập vai trò người dùng");
let account_balance = +prompt("nhập số dư tài khoản ngân hàng");
let card_status = prompt("nhập trạng thái thẻ trong thư viện");
let date = +prompt("nhập số ngày quá hạn trả sách");
switch (role.toLowerCase()) {
  case "admin":
    console.log("chào admin, bạn có quyền truy cập vào hệ thống");
    break;
  case "student":
    console.log("chào sinh viên, bạn có thể mượn sách");
    break;
  case "guest":
    console.log("chào khách, bạn có thể đọc tại chỗ");
    break;
  default:
    console.log("vai trò không hợp lệ");
    break;
}

// kiểm tra điều kiện mượn sách

let check =
  username != null &&
  (role == "admin" || role == "student") &&
  account_balance > 0 &&
  card_status == "true";
if (check) {
  console.log("đủ điều kiện mượn sách");
} else {
  console.log("không đủ điều kiện");
}

// tính phí trả sách dựa vào số ngày trả sách muộn
/* 

- Nếu số ngày <= 0: Không phạt. In ra "Cảm ơn bạn đã trả đúng hạn".

- Nếu số ngày từ 1 đến 5 ngày: Phạt 5.000đ/ngày.

- Nếu số ngày từ 6 đến 10 ngày: Phạt 10.000đ/ngày.

- Nếu số ngày > 10 ngày: Phạt 200.000đ (cố định) 
và in thêm cảnh báo "TÀI KHOẢN BỊ KHÓA".
*/
if (date == 0) {
  console.log("cảm ơn bạn đúng hạn");
} else if (date >= 1 && date <= 5) {
  console.log(` số tiền phạt: `, date * 5000);
} else if (date >= 6 && date <= 10) {
  console.log(` số tiền phạt: `, date * 10000);
} else if (date > 10) {
  console.log(" số tiền phạt:200.000 ");
}

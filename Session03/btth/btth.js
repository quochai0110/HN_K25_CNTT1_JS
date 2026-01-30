/* 
K biết trước số lần lặp dùng while || dowhile

*/
let password = "";
password = prompt("nhập password");
let flag = true;
let count = 3;
while (password != "admin123") {
  if (count == 1) {
    flag = false;
    break;
  }
  password = prompt(`moi nhập lại pass còn ${count - 1} lần nhập `);
  count--;
}

if (flag) {
  let choose;
  while (choose != 3) {
    choose = +prompt("mời nhập lựa chọn");
    switch (choose) {
      case 1:
        break;
      case 2:
        break;

      default:
        console.log("lựa chọn không hợp lệ");

        break;
    }
  }
} else {
  console.log("bạn chưa đăng nhập đúng!");
}

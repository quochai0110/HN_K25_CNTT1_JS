/* 
- khi nào dùng : 
                + khi cần lặp ít nhất 1 lần
                + thường trong các bài toán menu
- cú pháp :
 do {
 }while()
- luồng thực thi: chạy khi điều kiện trong while là đúng
- chạy ÍT NHẤT 1 LẦN
*/
// bài toán dạng menu, yêu cầu chọn case 1 đến 6, case 7 thì thoát
let choose;
do {
  choose = +prompt("mời bạn nhập lựa chọn");
  switch (choose) {
    case 1:
      console.log("chọn chức năng 1");
      break;
    case 2:
      console.log("chọn chức năng 2");
      break;

    default:
      break;
  }
} while (choose != 7);

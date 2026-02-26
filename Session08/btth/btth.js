/* 
QUẢN LÝ ĐỘI BÓNG
VỚI CÁC CHỨC NĂNG ĐƯỢC HIỂN THỊ TRONG MENU

*/
const squad = [
  ["Nguyen Van A", 10, "FW"],

  ["Tran Van B", 5, "MF"],

  ["Le Van C", 2, "DF"],

  ["Pham Van D", 12, "FW"],

  ["Hoang Van E", 0, "GK"],

  ["Dang Van F", 7, "MF"],
];
let choose;
do {
  choose = +prompt(` Nhập các lựa chọn:
        1. xem danh sách đội bóng
        2. Tìm kiếm cầu thủ
        3. Lọc vị trí
        4. Tính tổng bàn thắng
        5. Kiểm tra hiệu suất
        0. Thoát `);
  switch (choose) {
    case 0:
      console.log("thoát chương trình");
      break;
    case 1:
      displayPlayer();
      break;
    case 2:
      // tìm kiếm cầu thủ
      searchForPlayer();
      break;
    case 3:
      filterByIndex();
      break;
    default:
      console.log("lựa chọn không hợp lệ!");
  }
} while (choose != 0);

// tạo hàm hiển thị danh sách cầu thủ
function displayPlayer() {
  squad.forEach((value, index, arr) => {
    console.log(`TÊN: ${value[0]} VỊ TRÍ: ${value[2]} BÀN THẮNG:${value[1]} `);
  });
}

// tạo hàm tìm kiếm cầu thủ

function searchForPlayer() {
  let name = prompt("mời nhập tên cầu thủ");
  let result = squad.find((value) => {
    return value[0].toLowerCase() == name.toLowerCase();
  });
  if (result) {
    console.log("thông tin cầu thủ", result);
  } else {
    console.log("không tìm thấy cầu thủ!");
  }
}

// lọc cầu thủ theo vị trí
function filterByIndex() {
  let index = prompt("mời nhập vị trí cần lọc");
  let result = squad.filter((value) => {
    return value[2] == index;
  });
  console.log("result", result);
}

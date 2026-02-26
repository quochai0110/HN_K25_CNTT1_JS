let squad = [
  { id: 1, name: "Nguyen Van A", goals: 10, position: "FW" },
  { id: 2, name: "Tran Van B", goals: 5, position: "MF" },
  { id: 3, name: "Le Van C", goals: 0, position: "DF" },
  { id: 4, name: "Pham Van D", goals: 12, position: "FW" },
  { id: 5, name: "Dang Van E", goals: 0, position: "GK" },
];
let choose;
do {
  choose = +prompt(` mời nhập lựa chọn:
        1. Hiển thị danh sách đội bóng.
        2. Thêm cầu thủ mới.
        3. Tìm cầu thủ theo id.
        4. Cập nhật thành tích.
        5. Chuyển nhượng cầu thủ.
        0. Thoát chương trình.`);
  switch (choose) {
    case 0:
      console.log("thoát chương trình");

      break;
    case 1:
      // hiển thị danh sách cầu thủ
      displayPlayers();
      break;
    case 2:
      // thêm cầu thủ mới
      addPlayer();
      break;
    case 3:
      // tìm cầu thủ theo id
      findById();
      break;
    case 4:
      // cập nhật bàn thắng cầu thủ vừa ghi bàn
      updateGoal();
      break;
    case 5:
      break;

    default:
      console.log("lựa chọn không hợp lệ!");
  }
} while (choose != 0);

// hàm hiển thị danh sách cầu thủ
function displayPlayers() {
  for (let i = 0; i < squad.length; i++) {
    console.log(
      `Mã: ${squad[i].id} - ${squad[i].name} (${squad[i].position}) : ${squad[i].goals}`,
    );
  }
}
// hàm thêm cầu thủ mới
function addPlayer() {
  let name = prompt("nhập tên cầu thủ");
  let position = prompt("nhập vị trí");
  let goal = +prompt("số bàn thắng ghi được");
  let id = Math.floor(Math.random() * 999999) + Date.now();
  // khởi tạo đối tượng cầu thủ
  let new_player = {
    id: id,
    name: name,
    goals: goal,
    position: position,
  };
  squad.push(new_player);
  alert("thêm cầu thủ thành công!");
}
// hàm tìm kiếm cầu thủ theo id
function findById() {
  let id = prompt("mời nhập id cầu thủ cần tìm kiếm!");
  let result = squad.find((item) => item.id == id);
  if (result) {
    console.log("có", result);
  } else {
    console.log(` không tìm thấy cầu thủ với id: ${id}`);
  }
}
// hàm cập nhật bàn thắng cầu thủ vừa ghi bàn
function updateGoal() {
  let id = prompt("nhập id cầu thủ vừa ghi bàn");
  let index_update = squad.findIndex((item) => {
    return item.id == id;
  });
  if (index_update != -1) {
    // tìm thấy cầu thủ
    squad[index_update].goals += 1;
  } else {
    console.log(` không tìm thấy cầu thủ với id : ${id}`);
  }
}

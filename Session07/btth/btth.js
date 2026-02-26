// Tạo 2 mảng
// mảng 1 chứa danh sách cầu thủ
// mảng 2 chứa bàn thắng tương ứng với các cầu thủ

let playerList = [];
let goalList = [];
let choose;
do {
  choose = +prompt("mời nhập lựa chọn");
  switch (choose) {
    case 0:
      console.log("thoát chương trình");
      break;
    case 1:
      let name = prompt("mời nhập tên cầu thủ");
      let goal = +prompt("nhập số bàn thắng");
      addPlayer(name, goal);
      break;
    case 2:
      //   console.log("xem danh sách đội hình");
      showSquad();
      break;
    case 3:
      //   console.log("xem thành tích của toàn đội");
      console.log(` tổng số bàn thắng đội khi được là:`, getTotalGoals());
      break;
    case 4:
      //   console.log("tìm vua phá lưới!");
      for (let i = 0; i < goalList.length; i++) {
        if (goalList[i] == findMostGoals(goalList)) {
          console.log(` cầu thủ ${playerList[i]} ghi được: ${goalList[i]} bàn`);
        }
      }
      break;
    default:
      console.log("lựa chọn không hợp lệ!");
  }
} while (choose != 0);

/* viết các hàm thực hiện chức năng */

// Hàm thêm cầu thủ
function addPlayer(name, goal) {
  playerList.push(name);
  goalList.push(goal);
}
// Hàm show danh sách đội hình
function showSquad() {
  for (let i = 0; i < playerList.length; i++) {
    console.log(`${i + 1}. ${playerList[i]} - ${goalList[i]} bàn!`);
  }
}
// Hàm tính thành tích toàn đội
function getTotalGoals() {
  let sum = 0;
  for (let i = 0; i < goalList.length; i++) {
    sum += goalList[i];
  }
  return sum;
}

// tìm vua phá lưới:
function findMostGoals(goalsArray) {
  let max = goalsArray[0];
  for (let i = 1; i < goalsArray.length; i++) {
    if (goalsArray[i] > max) {
      max = goalsArray[i];
    }
  }
  return max;
}

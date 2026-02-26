let players = [
  "messi-forward-20-15-5",
  "ronaldo-Midfielder-15-11-15", //14
  "neymar-forward-5-6-9",
  "alisson-Defender-6-9-4",
  "kante-Goalkeeper-8-11-3",
  "kante1-forward-18-12-14",
];

// viết hàm báo cáo
function reportByPosition(param) {
  // lọc ra các cầu thủ có số bàn thắng >= mingoals;
  let mingoals = +prompt("mời nhập số lượng bàn thắng tối thiểu ghi được");
  let result = param.filter((value) => {
    // console.log(111, +value.split("-")[2]);
    return +value.split("-")[2] >= mingoals;
  });
  console.log("result", result);
  // lọc theo từng vị trí
  // vị trí forward
  let resultForward = param.filter((value) => {
    return value.split("-")[1] == "forward";
  });
  console.log("resultForward", resultForward);
  /* 
    Số lượng cầu thủ
    Tổng bàn thắng
    Tổng kiến tạo
    Tổng số trận (của các cầu thủ trong nhóm)
    Trung bình hiệu suất mỗi trận = Tổng (bàn thắng + kiến tạo) của nhóm / Tổng số trận của nhóm (làm tròn 2 chữ số thập phân)
  */
  // số lượng cầu thủ:
  console.log("số lượng cầu thủ", resultForward.length);
  // tổng số bàn thắng ghi được
  let goals = resultForward.reduce((acc, value) => {
    return acc + +value.split("-")[2];
  }, 0);
  console.log("tổng số bàn thắng",goals);
  
}
reportByPosition(players);
let str1 = "ronaldo-forward-15-11-15";
// console.log(1111, str1.split("-"));

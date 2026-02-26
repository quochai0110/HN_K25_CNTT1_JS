let students = [
  ["ms01", "na", "js", 8.0],
  ["ms02", "minh", "js", 9.0],
  ["ms03", "đức", "js", 7.0],
  ["ms04", "mạnh", "js", 6.0],
];
// tính năng cập nhật
let result = students.findIndex((val) => {
  return val[0] == "ms021";
});
if (result != -1) {
  // tồn tại sinh viên có mã sinh viên
  let score = +prompt("mời nhập điểm mới cần cập nhật");
  students[result][3] = score;
} else {
  // không tồn tại sinh viên
}

let numbers=[0  ,2,3];
console.log(numbers.find((value)=>value<4));


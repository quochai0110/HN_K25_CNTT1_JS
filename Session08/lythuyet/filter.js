/* 

    FILTER:  LỌC

    1. ĐẦU VÀO: là hàm
    2. ĐẦU RA .
        + trả về mảng mới  []
*/
let numbers = [3, 8, 4, 13, 42];
let scores = [
  ["đức", "C++", 5],
  ["bình", "C++", 4],
  ["linh", "C++", 6],

];
// [["đức", "C++", 5],["linh", "C++", 6],]
let result = numbers.filter((value1, index, arr) => {
  return value1 > 11;
});
// console.log("result", result);
let result1 = scores.filter((value) => {
  return value[2] >= 7;
});
console.log("result1",result1);


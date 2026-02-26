/* 

    TÍNH TOÁN

    1. ĐẦU VÀO :
        NHẬN VÀO 2 THAM SỐ
        1. HÀM
        2. GIÁ TRỊ KHỞI TẠO
    2. ĐẦU RA : giá trị
*/
let numbers = [4, 7, 8, 9, 11, 3];
let scores = [
  ["đức", "C++", 5],
  ["bình", "C++", 4],
  ["linh", "C++", 6],

];

let sum = 0;
for (let index = 0; index < numbers.length; index++) {
  sum += numbers[index];
}
// acumulator : biến tích lũy
let result = numbers.reduce((acc, curentValue) => {
  return acc + curentValue;
});
console.log("result", result);
let result1= scores.reduce((acc1,value)=>{
    return acc1 + value[2]
})
console.log("result1",result1);


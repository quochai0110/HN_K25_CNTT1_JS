/* 
Vòng lặp là gì? công việc hay đoạn logic thực hiện lặp đi lặp lại

1. for 
    _ dùng khi biết trước số lần gặp 
    _ gồm 3 phần: các phần ngăn cách với nhau bằng dấu phẩy
      phần 1: giá trị khởi tạo
      phần 2: điều kiện
      phần 3: bước nhảy
    _ đầu tiên lấy giá trị khởi tạo đi kiểm tra điều kiện
        + Nếu điều kiện sai==> dừng vòng lặp
        + Nếu điều kiện đúng ==> thực hiện thân for ==> quay về BƯỚC NHẢY ==>
            KIỂM TRA ĐIỀU KIỆN
    FOR_LỒNG
2. while
    _ dùng khi không biết trước số lần lặp 
    _ cú pháp : while (điều kiện){
    }
    _ kiểm tra điều kiện nếu đúng thì chạy 
      + nếu sai thì dừng
    NOTE: phải có điều kiện dừng không thì vòng lặp sẽ bị vô hạn
3. do-while

    + khi nào dùng?
    + cú pháp
    + luồng hoạt động

*/
/* 
Nam làm việc thêm bằng công việc phát tờ rơi
mỗi lần gặp 1 người thì Nam lại đưa cho họ 1 tờ báo
giả sử Nam cầm 100 tờ báo thì điều kiện dừng là phát hết 100 tờ

*/
// for(let i=2; i<=100; i+=2){
//     console.log(`số tờ đã phát được: ${i}`);

// }

for (let i = 1; i < 3; i++) {
  for (let j = 1; j < 4; j++) {
    console.log("j", j);
  }
}
/* 
    i=1 : 
        j= 1,2,3
    i=2: 
        j=1,2,3
    i=3: 
*/

for (let i = 1; i <= 10; i++) {
  document.write(`bang cửu chương ${i} là: `+ "<br>");
 
  for (let j = 1; j <= 10; j++) {
    document.write(`${i} x ${j} = ${i * j}`);
    document.write(`<br> `);
  }
}

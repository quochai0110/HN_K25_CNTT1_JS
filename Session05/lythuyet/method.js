/* 
    Các phương thức làm việc với mảng
    1. indexOf() : Kiểm tra xem phần tử có tồn tại trong mảng hay không
        + Nếu tồn tại trả về vị trí (0 ...)
        + Nếu không có trả về -1;
    2. includes(): Kiểm tra phần tử có tồn tại hay không
        + Trả về true || false
    3. slice()   : cắt, sao chép ra 1 cái mảng mới không liên quan gì tới mảng 
    ban đầu
    4. reverse() : đảo ngược phần tử trong mảng
    5. join()    : chuyển mảng thành string
    6. split()   : chuyển string sang mảng

*/
let student = ["Na", "Trang", "Minh", "Đức"];
// thầy muốn tra xem lớp mình có ai tên Trang hay không?
let flag = 1;
for (let i = 0; i < student.length; i++) {
  if (student[i] == "Trang") {
    flag = 0;
    break;
  }
}
if (flag == 1) {
  // console.log("khong có");
} else {
  // console.log("có");
}
// let result = student.indexOf("Trang1");
let result = student.includes("Trang1");

console.log("Result:",result);
if(result!=-1){
    // console.log("có");
    
}
console.log("cắt sao chép trang:", student.slice(2));

let courses=["HTML", "CSS", "JS"];  // HTML_CSS_JS
// courses.reverse();
console.log("course:", courses.join("@"));

 let fullname= "lê_minh_thu";
 console.log("mảng mới:", fullname.split("_"));
 




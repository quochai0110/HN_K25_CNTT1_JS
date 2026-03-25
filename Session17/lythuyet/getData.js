/* 

LẤY DỮ LIỆU
localStorage.getItem("TÊN_KEY");
đối với mảng hoặc object khi lấy về PHẢI chuyển từ định dạng JSON sang dạng ban đầu
của nó.
JSON.parse(GIÁ TRỊ LẤY VỀ);

******************************
XÓA DỮ LIỆU
1. Xóa từng key
    localStorage.removeItem("TÊN_KEY");
2. Xóa hết
    localStorage.clear()
*/
let age= localStorage.getItem("age");
console.log("age",age);
// let fullname= "fullName";
let fullName= localStorage.getItem("fullName");
console.log("fullName", fullName);

let products= JSON.parse(localStorage.getItem("products"));
console.log("products",products);

let obj={
    name:"hoa",
    age:18,
    name: "thu"
}



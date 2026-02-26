/* 

Object (đối tượng). mô phỏng 1 đối tượng trong thực tế
VD: đối tượng con mèo, cái xe ô tô, con người, cái bàn...
Gồm 2 thành phần chính: 
 1. THUỘC TÍNH (PROPERTIES)
 2. PHƯƠNG THỨC (METHODS)

 Con mèo : thuộc tính(màu mắt, màu lông, cân nặng...)
           phương thức(bắt chuột, kêu...)
 TẠI SAO LẠI SINH RA OBJECT
 giúp gom nhóm các thuộc tính, phương thức chung cho đối tượng để dễ quản lý, thao tác
 CÁCH KHAI BÁO ĐỐI TƯỢNG
 Bên trong đối tượng bao gồm các cặp KEY VÀ VALUE được ngăn cách với nhau bởi dấu phẩy

*/
let email = "thinh@gmail";
let fullName = "le phuoc thinh";
let password = "";
let student = {
  name: "thu",
  email: "thu@gmail.com",
}; // khởi tạo đối tượng sinh viên
let product = {
  id: 1,
  price: 5000,
  image: "",
  name: "iphone15",
  sayHello: function name(params) {
    console.log("xin chào!");
  },
};

/* 
THAO TÁC VỚI ĐỐI TƯỢNG 
CRUD
1. C_ CREATE thêm 
2. R_ READ hiển thị
3. U_ UPDATE cập nhật
4. D_ DELETE xóa
*/
// tạo đối tượng sách
let book = {};
// thêm các thuộc tính
book.id = "001";
book.author = "Nguyễn Nhật ánh";
book["bookLame"] = "hoa vàng";
// console.log("book", book);
for (const key in book) {
  console.log("key:", book[key]); //
}
book.bookLame = "câu chuyện ngàn năm";
book.bookName = "câu chuyện ngàn năm";
delete book.bookLame;
console.log("book", book);
// KIỂU ĐƠN GIẢN _ KIỂU THAM TRỊ
let a = 5; // tạo a
let b = a; // gán a cho b (GÁN GIÁ TRỊ)
a = 11; // cập nhật a
console.log("b", b); // hiển thị b: 5
// KIỂU THAM CHIẾU 
let objA = {
  email: "123",
};
let objB = objA; // gán a cho b (GÁN ĐỊA CHỈ)
objA.email = "456"; // cập nhật a
console.log("objB", objB); // hiển thị b
console.log("objA",objA);

 let id= "A"; let obj1 = { id};
 let obj={
    id:"A"
 }
 // tương đương với cái nào 

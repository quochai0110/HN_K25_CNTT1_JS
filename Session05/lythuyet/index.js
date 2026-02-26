/* 
    I- Mảng là gì: 1 biến lưu nhiều giá trị khác nhau
        1. Khai báo mảng
         TỪ KHÓA KHAI BÁO BIẾN + TÊN MẢNG = [];
         let students = [];
        2. Truy cập phần tử trong mảng
        + Mảng có chỉ có index bắt đầu là : 0
        + Truy cập theo chỉ số INDEX;
        3. Đếm số lượng phần tử trong mảng. tên mảng . length
        4. Thao tác với mảng :
            CRUD
            C(Create: Thêm phần tử)
                + push():PHƯƠNG THỨC thêm phần tử vào cuối mảng
                + unshift(): thêm phần tử vào đầu mảng
                + splice() : thêm phần tử vào vị trí bất kì
                    splice(index, deleteCount, item);
            R(Read): đọc, hiển thị
            U(Update): cập nhật
                + Cập nhật theo index
                + Dùng splice(): splice(index, deleteCount, item)
            D(Delete): Xóa phần tử
                + pop(): xóa phần tử cuối của mảng
                + shift(): xóa ở đầu
                + splice(): xóa phần tử ở vị trí bất kì

*/
let numbers = [1, 5, 9, 4];
let students = ["minh", "thu", "lan", "hồng"]; // [minh, thu, phương ,lan ,hồng]
students.splice(2, 0, "phương");
students.splice(3, 1, "hoa");
students.splice(1, 1,"hưng");
console.log("students", students);
console.log(students[2]);
console.log("số lượng phần tử trong mảng students", students.length);
let scores = [];
scores.push(5);
scores.push(8); // [5,8]
scores.unshift(6); // [6,5,8]   ==> [6,5,7,8]
scores.splice(2, 0, 7);
console.log("mảng scores", scores);

let courses = ["JS", "HTML", "python", "CSS"];
// courses[1] = "C++";
// courses.splice(2, 1, "Java");
courses.splice(1,1)
for (let i = 0; i < courses.length; i++) {
  console.log("khóa học", courses[i]);
}

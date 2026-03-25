/* 

BROWSER STORAGE:
- Dịch vụ cho phép lưu trữ dữ liệu phía trình duyệt web!
    Cung cấp 3 kiểu lưu dữ liệu
    1. Local Storage
        + Dung lượng lưu: 5_10 MB. (1MB=1024KB)
        1 ảnh trong máy tính: khoảng 100KB 
        + Dữ liệu khi lưu (đóng trình duyệt, tắt máy) thì dữ liệu không bị mất!
    2. Session Storage
        + Dung lượng lưu : 5_10MB 
        + Phiên làm việc : Khi đóng trình duyệt, tắt máy thì dữ liệu bị mất

    3. Cookies
        + Có thể set được thời gian tồi tại

    *******************
- CÁCH LƯU TRỮ DỮ LIỆU.
I- LƯU: localStorage.setItem(TÊN_KEY, VALUE);

Đối với dữ liệu là mảng hoặc object khi lưu PHẢI chuyển sang định dạng JSON.
JSON.stringify(DỮ LIỆU)

*/
let fullName = "Vũ Hồng Vân";
localStorage.setItem("fullName", fullName);
let age = 18;
localStorage.setItem("age", age);
let students = ["Thu", "Hồng", "Huyền"];
localStorage.setItem("STUDENTS", JSON.stringify(students));

let products = [
    {
        id:1,
        name:"sản phẩm 1"
    },
    {
        id:2,
        name:"sản phẩm 2"
    }
]
localStorage.setItem("products",JSON.stringify(products));
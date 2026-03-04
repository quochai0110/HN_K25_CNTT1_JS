/* 

DOM: document object model (mô hình tài liệu dạng ĐỐI TƯỢNG).
AI TẠO RA DOM?
    Khi trang web được tải lên trình duyệt sẽ tạo ra mô hình cây DOM
    GIÚP:
        + thêm, sửa, xóa các phần tử HTML
        + thêm sửa xóa các thuộc tính của các phần tử HTML
        + tạo sự kiện tương tác với giao diện (click, hover, submit...)
    
    CÁC THÀNH PHẦN TRONG DOM
    1. ELEMENT
        CÁC CÁCH LẤY ELEMENT
        + lấy theo id: document.getElementById("heading") 
            ==> trả về duy nhất ĐỐI TƯỢNG ELEMENT ví id là duy nhất
        + lấy theo class: document.getElementsByClassName("title")
            ==> trả về HTML collection (gần giống mảng)
        + lấy theo tên thẻ (tagName): document.getElementsByTagName("p");
            ==> trả về HTML collection (gần giống mảng)
    2. ATRIBUTE : THUỘC TÍNH
    3. TEXT  :Nội dung 
        innerText
        innerHTML
        

    EVENT: sự kiện tương tác

ĐỐI TƯỢNG THỰC TẾ : 
    THUỘC TÍNH
    PHƯƠNG THỨC
*/
let student = {
  name: "thu",
  email: "thu@gmail.com",
  say: () => {
    console.log("xin chào!");
  },
};
// student.say();
document.write();
Math.random();
console.log();
let getElementsByClassName = document.getElementsByClassName("title");
console.log("getElementsByClassName", getElementsByClassName[1]);
let getElementsByTagName = document.getElementsByTagName("p");
console.log("getElementsByTagName", getElementsByTagName);


function login(){
    console.log("đăng nhập");
    
}

function checkInput(){
    console.log(111);
    
}
let elementH ={
    style:{
        color:"red"
    }
}
// function đổi màu text
let flag=true;
function  changeColor() {
    let elementH1= document.getElementsByClassName("title")[0];
    if(flag){
        elementH1.id= "heading";
        flag=false;
    }else{
        elementH1.id= "heading1";
        flag=true;  
    }

   
}
let user={

}
user.name="Đức";

// 
function changeText(){
    // B1: lấy element
    let elementP= document.getElementById("content");
    elementP.innerHTML=" <button>thẻ p</button>"

    document.getElementById("list").innerHTML=`
        <li>C++</li>
        <li>Java</li>
        <li>C</li>`

    
}
console.log("danh sách class",document.getElementsByClassName("title2")[0].classList.add("title4"));

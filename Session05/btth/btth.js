let books = ["Nha Gia Kim", "Dac Nhan Tam", "Tuan Lam Viec 4 Gio"];
let choose;
do {
  choose = +prompt(`mời nhập lựa chọn chức năng:
        1. Hiển thị sách
        2. Thêm sách mới
        3. Mượn sách
        4. Cập nhật sách
        5. Sắp xếp
        0. Thoát
    `);
    switch (choose) {
        case 1:
            console.log("tổng số sách trong kho: ", books.length);
            for(let i=0; i<books.length; i++){
                console.log(` Sách thứ ${i+1}: ${books[i]} `);
            }
            
            break;
        
        case 2:
            let bookName = prompt("Mời nhập tên sách: ");
            books.push(bookName);
            console.log(books);
             
            break;
        case 3: 
            let bookBorrow = prompt("Nhập tên sách muốn mượn: ");
            let check = books.indexOf(bookBorrow);
            if(check == -1){
                console.log("Sách không tồn tại");
            }else{
                console.log(`Đã cho mượn sách ${bookBorrow[check]}`);
                books.splice(check, 1);
            }
            

        default:
            break;
    }
} while (choose != 0);

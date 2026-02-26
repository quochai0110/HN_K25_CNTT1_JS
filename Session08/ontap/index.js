/* 

Bài 1: 
    1. Biến 
        + let, var, const : phân biệt 

    2. Kiểu dữ liệu 
     chia 2 nhóm
     nhóm 1: nguyên thủy, đơn giản, primitive type, tham trị
        + number
        + string
        + boolean
        + undefined
        + NaN
        + null
     nhóm 2: phức tạp, reference type, tham chiếu
        + array
        + function
        + object
    3. Toán tử _ operator
        + toán tử số học : +, -, *, /, %, **
        + toán tử logic : &&, ||
        + toán tử so sánh : >, <, <=, >=, !=, !==, ==, ===
        + toán tử tăng giảm : ++a, a++
        + toán tử ba ngôi ? : 
Bài 2: câu điều kiện & vòng lặp
    condition: 
        + if_else
        + if_else : lồng
        + if_else : bậc thang
        + switch-case
    loop:
        + for
        + while
        + do while 
Bài 3: mảng
       + cách khai báo let const var TÊN MẢNG =[];
       + Thao tác với mảng
       + CURD 
        C: CREATE : THÊM 
         _push(): thêm cuối
         _unshift(): thêm vào đầu
         _splice() : thêm vào vị trí bất kì
        R: READ   : ĐỌC, HIỂN THỊ 
         for, for - in, for of ...
        U: UPDATE : CẬP NHẬT
         _arr[index]= giá trị mới
         _splice(vị trí, số lượng phần tử xóa, giá trị muốn thêm vào): 
        D: DELETE : XÓA
         _pop()   : xóa phần tử cuối
         _shift() : xóa phần tử đầu
         _splice(): xóa vị trí bất kì

        CÁC PHƯƠNG THỨC LÀM VIỆC VỚI MẢNG
        1. slice(): cắt sao chép ra mảng mới 
        2. concat(): gộp nối mảng
        3. reverce(): đảo ngược mảng
        4. split()  : chuyển string sang mảng
        5. join()   : chuyển mảng sang string
        6. indexOf() : trả về vị trí (không có trả về -1)
        7. includes(): trả về true || flase
        8. sort()    : sắp xếp theo bảng mã ASC
Bài 4: function
        1. DECLARATION FUNCTION
         function name(){

         }
        2. EXPRESSION FUNCTION
        const fn = function(){
        }
        3. ARROW FUNCTION
        ()=>{}
        
        _ THAM SỐ: phần định nghĩa trong hàm (PARAMETER)
        _ ĐỐI SỐ : khi gọi hàm truyền giá trị (ARGUMENT)
        _ PHẢI GỌI HÀM THÌ HÀM MỚI ĐƯỢC THỰC THI
Bài 5: CÁC PHƯƠNG THỨC (METHOD) LÀM VIỆC VỚI MẢNG.
        _ map, forEach, filter, reducer, find, findIndex, some, every...
        _ Nếu dùng for có thể giải quyết hết tất cả bài toán của mảng
        _ HOF (higher order function) _ HÀM BẬC CAO
        ?????
        _ Một function bình thường muốn trở thành HOF thì phải thỏa mãn 1 trong 2 điều kiện
        1. HÀM NHẬN HÀM KHÁC LÀM THAM SỐ!
        2. HÀM TRẢ VỀ 1 HÀM KHÁC
*/
function sayHello() {
  console.log("xin chào!");
  return function fn1() {};
}
const fn = (call) => {
  call();
};
fn(sayHello);
// fn được gọi HOF

let numbers = [5, 56, 55, 45, 16];
// lấy ra các phần tử lớn hơn 30;
let result1 = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 30) {
    result1.push(numbers[i]);
  }
}
// lấy ra các phần tử chẵn
let result2 = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    result2.push(numbers[i]);
  }
}
// dùng filter
let result3 = numbers.filter((item) => item % 2 == 0);
let result4 = numbers.filter((item) => item > 30);

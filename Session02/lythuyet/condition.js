/* 
    Câu điều kiện
    1. if_else
    2. if_else bậc thang
    3. if_else lồng 
*/

let age = 20;
// điều kiện thõa mãn truthy là hợp lệ
// let nana="khánh";
let day = prompt("mời nhập ngày trong tuần");
if (day == 2) {
  console.log("thứ 2");
} else if (day == 3) {
  console.log("thứ 3");
} else if (day == 4) {
  console.log("thứ 4");
} else{
    console.log("thứ 5");
    
}
let number=16;
if(number>11){
    if(number%4==0){
        console.log(`${number} chia hết cho 4`);
        if(number%8==0){
            
        }
        
    }else{
        console.log(`${number} không chia hết cho 4`);
        // viết logic
        if( number>20){

        }
        
    }
}

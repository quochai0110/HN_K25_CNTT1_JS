let month = +prompt("mời nhập tháng trong năm"); // string
switch (month) { // ===
  case 2: {
    console.log(`tháng 2 có 28|| 29 ngày`);
    break;
  }
  case 3: {
    console.log(`tháng 3} có 31 ngày`);
    break;
  }
  case 4: {
    console.log(`tháng 4 có 30 ngày`);
    break;
  }
  default:
    console.log("cuối");
}

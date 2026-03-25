// const products = [
//   { id: 1, name: "Sản phẩm 1", price: 10000 },
//   { id: 2, name: "Sản phẩm 2", price: 20000 },
//   { id: 3, name: "Sản phẩm 3", price: 30000 },
//   { id: 4, name: "Sản phẩm 4", price: 40000 },
//   { id: 5, name: "Sản phẩm 5", price: 70000 },
//   { id: 6, name: "Sản phẩm 6", price: 90000 },
// ];
// localStorage.setItem("products",JSON.stringify(products));
const products= JSON.parse(localStorage.getItem("products"))  ||  [];
// Tạo hàm (function)
function renderProducts() {
  let str = "";
  for (let i = 0; i < products.length; i++) {
    str += ` <div class="product-card">
                    <img src="/img/banhchung.webp" alt="">
                    <h3> ${products[i].name}</h3>
                    <p class="price">${products[i].price}đ</p>
                    <button class="btn-add">Thêm vào giỏ</button>
                </div>`;
  }

  document.getElementById("product-list").innerHTML= str;

}
renderProducts();


const products = [
  { id: 1, title: "Fjallraven - Foldsack No. 1 Backpack", price: 109.95, image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
  { id: 2, title: "Mens Casual Premium Slim Fit T-Shirts", price: 22.3, image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" },
  { id: 3, title: "Mens Cotton Jacket", price: 55.99, image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" },
  { id: 4, title: "Mens Casual Slim Fit", price: 15.99, image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" },
  { id: 5, title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet", price: 695, image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg" },
  { id: 6, title: "Solid Gold Petite Micropave", price: 168, image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg" },
  { id: 7, title: "White Gold Plated Princess", price: 9.99, image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" },
  { id: 8, title: "Pierced Owl Rose Gold Plated Stainless Steel Double", price: 10.99, image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" },
  { id: 9, title: "WD 2TB Elements Portable External Hard Drive - USB 3.0", price: 64, image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" },
  { id: 10, title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s", price: 109, image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg" },
];

let totalPrice = 0;

function renderProduct(products) {
  const productList = document.getElementById("product-list");
  
  products.forEach(product => {
      const productElement = document.createElement("div");
      productElement.classList.add("product"); // добавим класс для стилизации

      productElement.innerHTML = `
          <img src="${product.image}" alt="${product.title}" />
          <h3>${product.title}</h3>
          <p>Price: $${product.price}</p>
          <button onclick="addToCart(${product.price})">buy now</button>
      `;
      
      productList.appendChild(productElement);
  });
}

function addToCart(price) {
  totalPrice += price;
  document.getElementById("total-price").textContent = totalPrice.toFixed(2);
}

document.addEventListener("DOMContentLoaded", function() {
  renderProduct(products);
});


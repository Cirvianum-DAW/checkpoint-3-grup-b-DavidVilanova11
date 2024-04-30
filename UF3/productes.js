const products = [
  { category: "Electrònica", price: 499.99, name: "Telèfon Intel·ligent" },
  { category: "Electrònica", price: 799.99, name: "Portàtil" },
  { category: "Electrònica", price: 299.99, name: "Auriculars sense fils" },
  { category: "Electrònica", price: 199.99, name: "Televisor Intel·ligent" },
  { category: "Electrònica", price: 149.99, name: "Relotge Intel·ligent" },
  { category: "Llar", price: 249.99, name: "Rentadora" },
  { category: "Llar", price: 149.99, name: "Assecadora" },
  { category: "Llar", price: 99.99, name: "Cafetera" },
  { category: "Llar", price: 79.99, name: "Torradora" },
  { category: "Llar", price: 199.99, name: "Aspiradora" },
];

const form = document.getElementById("formulari");
const selectElement = document.getElementById("product");
const quantityInput = document.getElementById("quantity");
const priceInput = document.getElementById("price");
const addButton = document.getElementById("add-button");

document.addEventListener("DOMContentLoaded", (event) => {
  const form = document.getElementById("formulari");
  const selectElement = document.getElementById("product");
  const quantityInput = document.getElementById("quantity");
  const priceInput = document.getElementById("price");

  // Afegir les pel·lícules al selector
  products.forEach((product) => {
    const option = document.createElement("option");
    option.text = product.name;
    option.value = product.name;
    selectElement.appendChild(option);
  });
});

selectElement.addEventListener("change", (e) => {
  quantityInput.value = 1;

  console.log(selectElement.value);
  products.forEach((product) => {
    if (product.name == selectElement.value) {
      priceInput.value = product.price;
      return;
    }
  });
});

addButton.addEventListener("click", (event) => {
  

});

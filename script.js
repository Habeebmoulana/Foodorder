let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  renderCart();
}

function renderCart() {
  const div = document.getElementById("cartItems");
  div.innerHTML = "";

  cart.forEach((item, index) => {
    div.innerHTML += `
      <p>
        <span>${item.name} - $${item.price}</span>
        <button onclick="removeItem(${index})">❌</button>
      </p>`;
  });

  document.getElementById("totalAmount").innerText = "Total: $" + total;
}

function removeItem(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  renderCart();
}

function placeOrder() {
  if (cart.length === 0) {
    alert("Cart empty");
    return;
  }
  alert("Order placed! Total $" + total);
  cart = [];
  total = 0;
  renderCart();
}

function login() {
  const u = username.value;
  const p = password.value;
  alert(u === "admin" && p === "1234" ? "Login success" : "Invalid login");
}


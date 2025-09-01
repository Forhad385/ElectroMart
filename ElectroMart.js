<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ElectroMart - Electronics Store</title>
  <style>
    /* Keep existing CSS (already included inline above) */
  </style>
</head>
<body>
  <header>
    <h1>ElectroMart</h1>
    <nav>
      <ul>
        <li>Home</li>
        <li>Shop</li>
        <li>Cart</li>
        <li>Login</li>
      </ul>
    </nav>
  </header>

  <div class="banner">Best Electronics Deals!</div>

  <div class="container">
    <h2>Categories</h2>
    <div class="categories">
      <div class="category-card" data-category="Laptops">Laptops</div>
      <div class="category-card" data-category="Mobiles">Mobiles</div>
      <div class="category-card" data-category="Tablets">Tablets</div>
      <div class="category-card" data-category="Accessories">Accessories</div>
    </div>

    <h2 style="margin-top:2rem;">Featured Products</h2>
    <div class="products">
      <div class="product-card" data-name="HP Pavilion 15" data-price="799">
        <img src="https://source.unsplash.com/400x300/?laptop" alt="Laptop">
        <div class="product-info">
          <h3>HP Pavilion 15</h3>
          <p class="price">$799</p>
          <button class="btn add-to-cart">Add to Cart</button>
        </div>
      </div>
      <div class="product-card" data-name="iPhone 14" data-price="999">
        <img src="https://source.unsplash.com/400x300/?smartphone" alt="Mobile">
        <div class="product-info">
          <h3>iPhone 14</h3>
          <p class="price">$999</p>
          <button class="btn add-to-cart">Add to Cart</button>
        </div>
      </div>
      <div class="product-card" data-name="Sony WH-1000XM4" data-price="349">
        <img src="https://source.unsplash.com/400x300/?headphones" alt="Headphones">
        <div class="product-info">
          <h3>Sony WH-1000XM4</h3>
          <p class="price">$349</p>
          <button class="btn add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>

    <div class="cart">
      <h2>Your Cart</h2>
      <div id="cart-items"></div>
      <p id="cart-total"><strong>Total: $0</strong></p>
      <button class="btn" id="checkout-btn" style="margin-top:1rem;">Checkout</button>
    </div>

    <form id="checkout-form">
      <h2>Checkout Form</h2>
      <input type="text" placeholder="Full Name" required>
      <input type="email" placeholder="Email" required>
      <input type="text" placeholder="Address" required>
      <input type="text" placeholder="Phone" required>
      <select>
        <option>Cash on Delivery</option>
        <option>Credit Card</option>
      </select>
      <button type="submit" class="btn">Place Order</button>
    </form>
  </div>

  <footer>
    <p>&copy; 2025 ElectroMart. All Rights Reserved.</p>
  </footer>

  <script>
    const cart = [];
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    function updateCart() {
      cartItemsContainer.innerHTML = '';
      let total = 0;

      cart.forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `
          <span>${item.name} (x${item.quantity})</span>
          <span>$${item.price * item.quantity}</span>
          <button class="btn" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(div);
        total += item.price * item.quantity;
      });

      cartTotal.innerHTML = `<strong>Total: $${total}</strong>`;
    }

    function removeFromCart(index) {
      cart.splice(index, 1);
      updateCart();
    }

    document.querySelectorAll('.add-to-cart').forEach(btn => {
      btn.addEventListener('click', () => {
        const product = btn.closest('.product-card');
        const name = product.dataset.name;
        const price = parseFloat(product.dataset.price);

        const existing = cart.find(item => item.name === name);
        if (existing) {
          existing.quantity++;
        } else {
          cart.push({ name, price, quantity: 1 });
        }
        updateCart();
      });
    });

    document.getElementById('checkout-form').addEventListener('submit', (e) => {
      e.preventDefault();
      if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
      }
      alert('Order placed successfully!');
      cart.length = 0;
      updateCart();
      e.target.reset();
    });
  </script>
</body>
</html>

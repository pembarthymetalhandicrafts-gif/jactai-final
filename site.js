const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const CART_KEY = 'jactai_cart';
const WISHLIST_KEY = 'jactai_wishlist';

const getStore = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key) || '[]');
  } catch {
    return [];
  }
};

const setStore = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const addToCart = (product) => {
  const items = getStore(CART_KEY);
  const existing = items.find((item) => item.id === product.id);
  if (existing) {
    existing.qty += 1;
  } else {
    items.push({ ...product, qty: 1 });
  }
  setStore(CART_KEY, items);
  alert(`${product.name} added to cart`);
};

const toggleWishlist = (product) => {
  const list = getStore(WISHLIST_KEY);
  const idx = list.findIndex((item) => item.id === product.id);
  if (idx >= 0) {
    list.splice(idx, 1);
  } else {
    list.push(product);
  }
  setStore(WISHLIST_KEY, list);
};

const products = [
  { id: 'p1', name: 'Carved Sheesham Wall Panel', category: 'Home Decor', price: 89, image: 'https://images.pexels.com/photos/6186824/pexels-photo-6186824.jpeg' },
  { id: 'p2', name: 'Brass Lotus Urli Bowl', category: 'Metal Art', price: 64, image: 'https://images.pexels.com/photos/6207361/pexels-photo-6207361.jpeg' },
  { id: 'p3', name: 'Hand-painted Terracotta Vase', category: 'Traditional Items', price: 52, image: 'https://images.pexels.com/photos/5705479/pexels-photo-5705479.jpeg' },
  { id: 'p4', name: 'Wooden Elephant Figurine Set', category: 'Wooden Crafts', price: 48, image: 'https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg' },
  { id: 'p5', name: 'Hammered Copper Serving Tray', category: 'Metal Art', price: 76, image: 'https://images.pexels.com/photos/6207945/pexels-photo-6207945.jpeg' },
  { id: 'p6', name: 'Handwoven Gift Hamper Box', category: 'Gifts', price: 39, image: 'https://images.pexels.com/photos/5705477/pexels-photo-5705477.jpeg' },
  { id: 'p7', name: 'Block Print Cushion Pair', category: 'Home Decor', price: 44, image: 'https://images.pexels.com/photos/6585750/pexels-photo-6585750.jpeg' },
  { id: 'p8', name: 'Vintage Bell Hanging', category: 'Traditional Items', price: 33, image: 'https://images.pexels.com/photos/7147449/pexels-photo-7147449.jpeg' }
];

const productGrid = document.querySelector('[data-product-grid]');
if (productGrid) {
  const render = (list) => {
    productGrid.innerHTML = list.map((p, i) => `
      <article class="product-card">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <div class="badges">${i < 2 ? '<span class="tag">Best Seller</span>' : ''}${i > 4 ? '<span class="tag">New Arrival</span>' : ''}</div>
        <h3>${p.name}</h3>
        <p class="small">${p.category}</p>
        <div class="product-meta"><span class="price">$${p.price}</span></div>
        <div class="actions">
          <button class="button button-primary" data-add='${JSON.stringify(p)}'>Add to Cart</button>
          <button class="button button-outline" data-wish='${JSON.stringify(p)}'>♡ Wishlist</button>
        </div>
      </article>`).join('');

    productGrid.querySelectorAll('[data-add]').forEach((btn) => {
      btn.addEventListener('click', () => addToCart(JSON.parse(btn.dataset.add)));
    });
    productGrid.querySelectorAll('[data-wish]').forEach((btn) => {
      btn.addEventListener('click', () => {
        toggleWishlist(JSON.parse(btn.dataset.wish));
        btn.textContent = '♥ Saved';
      });
    });
  };

  render(products);

  const categoryEl = document.querySelector('#category-filter');
  const maxPriceEl = document.querySelector('#price-filter');
  const searchEl = document.querySelector('#search-filter');

  const applyFilters = () => {
    const category = categoryEl?.value || 'all';
    const maxPrice = Number(maxPriceEl?.value || 9999);
    const query = (searchEl?.value || '').toLowerCase();
    const filtered = products.filter((p) => {
      const catOk = category === 'all' || p.category === category;
      const priceOk = p.price <= maxPrice;
      const qOk = p.name.toLowerCase().includes(query);
      return catOk && priceOk && qOk;
    });
    render(filtered);
  };

  [categoryEl, maxPriceEl, searchEl].forEach((el) => el?.addEventListener('input', applyFilters));
}

const productAddBtn = document.querySelector('[data-product-add]');
if (productAddBtn) {
  productAddBtn.addEventListener('click', () => {
    const product = JSON.parse(productAddBtn.dataset.productAdd);
    addToCart(product);
  });
}

const wishBtn = document.querySelector('[data-product-wish]');
if (wishBtn) {
  wishBtn.addEventListener('click', () => {
    const product = JSON.parse(wishBtn.dataset.productWish);
    toggleWishlist(product);
    wishBtn.textContent = '♥ Saved';
  });
}

const cartWrap = document.querySelector('[data-cart-items]');
const cartTotal = document.querySelector('[data-cart-total]');
if (cartWrap && cartTotal) {
  const renderCart = () => {
    const items = getStore(CART_KEY);
    if (!items.length) {
      cartWrap.innerHTML = '<p class="small">Your cart is empty. Browse the shop to add handmade treasures.</p>';
      cartTotal.textContent = '$0';
      return;
    }

    cartWrap.innerHTML = items.map((item) => `
      <article class="card">
        <div class="product-meta"><h3>${item.name}</h3><span class="price">$${item.price} × ${item.qty}</span></div>
        <p class="small">${item.category}</p>
      </article>`).join('');

    const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;
  };

  renderCart();
}

if (!document.querySelector('.floating-whatsapp')) {
  const wa = document.createElement('a');
  wa.className = 'floating-whatsapp';
  wa.href = 'https://wa.me/15551234567?text=Hello%20I%20want%20to%20order%20handicrafts';
  wa.textContent = 'WhatsApp';
  wa.target = '_blank';
  wa.rel = 'noopener noreferrer';
  document.body.appendChild(wa);
}

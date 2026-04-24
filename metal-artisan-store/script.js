const products = [
  {
    name: 'Peacock Deepam',
    category: 'Temple Items',
    price: 4999,
    originalPrice: 6499,
    image: 'https://images.unsplash.com/photo-1516557070061-c3d1653fa646?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Lotus Urli Bowl',
    category: 'Home Decor',
    price: 3599,
    originalPrice: 4499,
    image: 'https://images.unsplash.com/photo-1612198790700-0ff08cb726e5?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Sacred Nandi Idol',
    category: 'Temple Items',
    price: 6999,
    originalPrice: 8599,
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Brass Wall Panel',
    category: 'Custom Metal Art',
    price: 12999,
    originalPrice: 15499,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Vintage Brass Bell',
    category: 'Temple Items',
    price: 2199,
    originalPrice: 2799,
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Heritage Brass Vase',
    category: 'Home Decor',
    price: 5499,
    originalPrice: 6799,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80'
  }
];

const productGrid = document.getElementById('productGrid');
const chips = document.querySelectorAll('.chip');
const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');

const currency = (value) => `₹${value.toLocaleString('en-IN')}`;

function renderProducts(filter = 'all') {
  const list = filter === 'all' ? products : products.filter((item) => item.category === filter);

  productGrid.innerHTML = list
    .map(
      (item) => `
      <article class="card">
        <img src="${item.image}" alt="${item.name}" loading="lazy" />
        <div class="card-body">
          <p class="tag">${item.category}</p>
          <h3>${item.name}</h3>
          <div class="meta">
            <span class="price">${currency(item.price)}</span>
            <span class="old">${currency(item.originalPrice)}</span>
          </div>
          <a class="btn btn-ghost" href="https://wa.me/919999999999" target="_blank" rel="noopener">Order on WhatsApp</a>
        </div>
      </article>
    `
    )
    .join('');
}

chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    chips.forEach((c) => c.classList.remove('active'));
    chip.classList.add('active');
    renderProducts(chip.dataset.filter);
  });
});

menuBtn.addEventListener('click', () => {
  mainNav.classList.toggle('show');
});

renderProducts();

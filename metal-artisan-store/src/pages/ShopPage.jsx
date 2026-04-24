import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { categories, products } from '../data/content';
import useWishlist from '../hooks/useWishlist';

const pageSize = 6;

const priceRanges = [
  { id: 'all', label: 'All Prices', min: 0, max: Infinity },
  { id: 'under-3000', label: 'Under ₹3,000', min: 0, max: 3000 },
  { id: '3000-7000', label: '₹3,000 - ₹7,000', min: 3000, max: 7000 },
  { id: '7000-plus', label: 'Above ₹7,000', min: 7000, max: Infinity }
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [page, setPage] = useState(1);
  const { wishlistSet, toggleWishlist } = useWishlist();

  const filteredProducts = useMemo(() => {
    const priceFilter = priceRanges.find((range) => range.id === selectedPrice) ?? priceRanges[0];
    return products.filter((product) => {
      const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
      const priceMatch = product.price >= priceFilter.min && product.price <= priceFilter.max;
      return categoryMatch && priceMatch;
    });
  }, [selectedCategory, selectedPrice]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const onFilterChange = (updateFn) => (event) => {
    updateFn(event.target.value);
    setPage(1);
  };

  return (
    <>
      <Seo title="Shop | JactAI Crafts" description="Browse premium handcrafted metal products by category and price." />

      <h1 className="text-4xl font-semibold text-[#2b1d10]">Shop</h1>
      <p className="mt-2 text-[#5d4630]">Curated handcrafted metal collections with heritage craftsmanship.</p>

      <section className="mt-8 grid gap-4 rounded-2xl border border-[#ead8ba] bg-[#fffaf1] p-5 md:grid-cols-2">
        <div>
          <label htmlFor="category" className="mb-2 block text-sm font-semibold text-[#6f4d1f]">Category</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={onFilterChange(setSelectedCategory)}
            className="w-full rounded-lg border border-[#dcc29a] bg-white p-3"
          >
            <option value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="price" className="mb-2 block text-sm font-semibold text-[#6f4d1f]">Price</label>
          <select
            id="price"
            value={selectedPrice}
            onChange={onFilterChange(setSelectedPrice)}
            className="w-full rounded-lg border border-[#dcc29a] bg-white p-3"
          >
            {priceRanges.map((range) => (
              <option key={range.id} value={range.id}>{range.label}</option>
            ))}
          </select>
        </div>
      </section>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {paginatedProducts.map((product) => (
          <article key={product.id} className="rounded-2xl border border-[#ead8ba] bg-white p-4 shadow-sm">
            <div className="relative">
              <img src={product.image} alt={product.shortName} className="h-56 w-full rounded-xl object-cover" />
              <button
                type="button"
                onClick={() => toggleWishlist(product.id)}
                className="absolute right-3 top-3 rounded-full bg-white/90 px-2 py-1 text-sm"
              >
                {wishlistSet.has(product.id) ? '♥' : '♡'}
              </button>
              {product.isBestSeller ? <span className="absolute left-3 top-3 rounded-full bg-[#2f6f4f] px-3 py-1 text-xs text-white">Best Seller</span> : null}
              {product.isOnSale ? <span className="absolute bottom-3 left-3 rounded-full bg-[#a93f2e] px-3 py-1 text-xs text-white">Sale</span> : null}
            </div>
            <h2 className="mt-4 text-xl font-semibold text-[#2f2319]">{product.shortName}</h2>
            <p className="mt-1 text-sm text-[#705331]">{product.category}</p>
            <p className="mt-2 font-semibold text-[#b07f2f]">₹{product.price.toLocaleString('en-IN')}</p>
            <p className="text-sm text-[#786147]">⭐ {product.rating} ({product.reviewsCount} reviews)</p>
            <Link to={`/product/${product.id}`} className="mt-3 inline-block rounded-full bg-[#b88a3d] px-4 py-2 text-sm font-semibold text-white">
              View Details
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          disabled={currentPage === 1}
          onClick={() => setPage((old) => Math.max(1, old - 1))}
          className="rounded-full border border-[#d8ba8f] px-4 py-2 disabled:opacity-40"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            type="button"
            onClick={() => setPage(pageNumber)}
            className={`rounded-full px-4 py-2 ${pageNumber === currentPage ? 'bg-[#b88a3d] text-white' : 'border border-[#d8ba8f]'}`}
          >
            {pageNumber}
          </button>
        ))}
        <button
          type="button"
          disabled={currentPage === totalPages}
          onClick={() => setPage((old) => Math.min(totalPages, old + 1))}
          className="rounded-full border border-[#d8ba8f] px-4 py-2 disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </>
  );
}

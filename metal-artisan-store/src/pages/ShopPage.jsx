import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { categories, products } from '../data/content';

const priceRanges = [
  { id: 'all', label: 'All Prices', min: 0, max: Infinity },
  { id: 'under-3000', label: 'Under ₹3,000', min: 0, max: 3000 },
  { id: '3000-7000', label: '₹3,000 - ₹7,000', min: 3000, max: 7000 },
  { id: '7000-plus', label: 'Above ₹7,000', min: 7000, max: Infinity }
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');

  const filteredProducts = useMemo(() => {
    const priceFilter = priceRanges.find((range) => range.id === selectedPrice) ?? priceRanges[0];
    return products.filter((product) => {
      const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
      const priceMatch = product.price >= priceFilter.min && product.price <= priceFilter.max;
      return categoryMatch && priceMatch;
    });
  }, [selectedCategory, selectedPrice]);

  return (
    <>
      <Seo
        title="Shop Pembarthy Metal Crafts | Brass Handicrafts India | Metal Artisan"
        description="Explore handmade Pembarthy brass handicrafts including home decor, pooja items, and custom metal art."
      />

      <h1 className="text-4xl font-bold text-gold">Shop Handmade Brass Items</h1>
      <p className="mt-3 max-w-4xl text-sand/80">
        Explore handmade Pembarthy brass handicrafts including home decor, pooja items, and custom metal art.
      </p>

      <section className="mt-8 grid gap-4 rounded-xl border border-gold/20 bg-zinc-900 p-5 md:grid-cols-2">
        <div>
          <label htmlFor="category" className="mb-2 block text-sm font-semibold text-gold">
            Filter by category
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
            className="w-full rounded-md border border-gold/30 bg-black/40 p-3 text-sand"
          >
            <option value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="price" className="mb-2 block text-sm font-semibold text-gold">
            Filter by price
          </label>
          <select
            id="price"
            value={selectedPrice}
            onChange={(event) => setSelectedPrice(event.target.value)}
            className="w-full rounded-md border border-gold/30 bg-black/40 p-3 text-sand"
          >
            {priceRanges.map((range) => (
              <option key={range.id} value={range.id}>
                {range.label}
              </option>
            ))}
          </select>
        </div>
      </section>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <article key={product.id} className="rounded-xl border border-gold/20 bg-zinc-900 p-4">
            <img loading="lazy" src={product.image} alt={product.shortName} className="h-56 w-full rounded-lg object-cover" />
            <h2 className="mt-4 text-xl font-semibold">{product.shortName}</h2>
            <p className="mt-1 text-sm text-sand/70">{product.category}</p>
            <p className="mt-2 text-gold">₹{product.price.toLocaleString('en-IN')}</p>
            <Link to={`/product/${product.id}`} className="mt-3 inline-block rounded-md bg-gold px-4 py-2 text-black">
              View Details
            </Link>
          </article>
        ))}
      </div>

      {filteredProducts.length === 0 ? (
        <p className="mt-8 rounded-lg border border-gold/20 bg-zinc-900 p-4 text-sand/80">
          No products found for this filter combination. Try another category or price range.
        </p>
      ) : null}
    </>
  );
}

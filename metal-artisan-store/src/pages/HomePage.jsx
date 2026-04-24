import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { products } from '../data/content';
import useWishlist from '../hooks/useWishlist';

const whyChooseUs = ['Handmade', 'Quality checked', 'Traditional methods', 'Sustainable crafting'];

export default function HomePage() {
  const popularProducts = products.slice(0, 6);
  const newProducts = products.slice(2, 8);
  const featured = products[0];
  const { wishlistSet, toggleWishlist } = useWishlist();

  return (
    <>
      <Seo
        title="JactAI Crafts | Premium Handmade Metal Handicrafts"
        description="Discover authentic handcrafted metal decor by JactAI Crafts. Cultural, premium, and timeless products made by skilled artisans."
      />

      <section className="overflow-hidden rounded-3xl border border-[#d1b37a]/45 bg-[#f9f2e7] shadow-xl lg:grid lg:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=1400&q=80"
          alt="Artisan crafting metal by hand"
          className="h-72 w-full object-cover lg:h-full"
        />
        <div className="p-7 md:p-10">
          <p className="text-xs uppercase tracking-[0.25em] text-[#8f6a2e]">JactAI Crafts</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight text-[#2b1d10] md:text-5xl">Crafted for Generations</h1>
          <p className="mt-4 max-w-lg text-[#5d4630]">
            Authentic handmade metal handicrafts from skilled artisans.
          </p>
          <Link to="/shop" className="mt-7 inline-block rounded-full bg-[#b88a3d] px-7 py-3 font-semibold text-white">
            Shop Now
          </Link>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-3xl font-semibold text-[#2b1d10]">Most Popular Products</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {popularProducts.map((product) => (
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
                {product.isBestSeller ? (
                  <span className="absolute left-3 top-3 rounded-full bg-[#2f6f4f] px-3 py-1 text-xs text-white">Best Seller</span>
                ) : null}
              </div>
              <h3 className="mt-4 font-semibold text-[#2f2319]">{product.shortName}</h3>
              <p className="mt-2 text-[#b07f2f]">₹{product.price.toLocaleString('en-IN')}</p>
              <Link to={`/product/${product.id}`} className="mt-3 inline-block text-sm text-[#7d5a2c] underline">
                View Product
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-3xl border border-[#e7d3af] bg-[#fffaf1] p-8">
        <h2 className="text-3xl font-semibold text-[#2b1d10]">Preserving Heritage, Creating Art</h2>
        <p className="mt-4 max-w-4xl leading-8 text-[#5d4630]">
          At JactAI Crafts, every piece starts as raw metal and evolves through fire, hand tools, and patience. Our artisans carry
          inherited skills from one generation to the next, turning functional objects into emotional heirlooms. When you bring a
          JactAI craft home, you preserve a living cultural tradition.
        </p>
      </section>

      <section className="mt-14 grid gap-6 rounded-3xl border border-[#e2c894] bg-[#2f2418] p-7 text-[#f3e7d5] md:grid-cols-2">
        <img src={featured.image} alt={featured.shortName} className="h-60 w-full rounded-2xl object-cover" />
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-[#ddb568]">Featured Craft Award</p>
          <h2 className="mt-3 text-3xl font-semibold">{featured.shortName}</h2>
          <p className="mt-3 text-[#e5d0ad]">Awarded for excellence in handcrafted detailing and heritage-inspired metalwork.</p>
          <Link to={`/product/${featured.id}`} className="mt-5 inline-block rounded-full bg-[#ddb568] px-5 py-2 font-semibold text-[#2f2418]">
            Explore Featured Product
          </Link>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-3xl font-semibold text-[#2b1d10]">New Products</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {newProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="rounded-2xl border border-[#ead8ba] bg-white p-3 shadow-sm">
              <img src={product.image} alt={product.shortName} className="h-40 w-full rounded-xl object-cover" />
              <p className="mt-3 text-sm font-semibold text-[#2f2319]">{product.shortName}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-[#2b1d10]">Why Choose Us</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item) => (
            <div key={item} className="rounded-2xl border border-[#ead8ba] bg-[#fffaf1] p-5 text-center font-medium text-[#4f3a25]">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-3xl bg-[#b88a3d] px-8 py-10 text-center text-white shadow-lg">
        <h2 className="text-3xl font-semibold">Bring home timeless craftsmanship</h2>
        <Link to="/shop" className="mt-5 inline-block rounded-full bg-white px-6 py-3 font-semibold text-[#8a6228]">
          Shop Collection
        </Link>
      </section>
    </>
  );
}

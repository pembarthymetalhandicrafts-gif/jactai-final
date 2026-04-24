import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { categories, products } from '../data/content';

export default function HomePage() {
  return (
    <>
      <Seo title="Metal Artisan | Pembarthy Brass Handicrafts" description="Shop premium handmade brass handicrafts from Pembarthy artisans in Telangana." />
      <section className="grid gap-10 rounded-2xl border border-gold/30 bg-gradient-to-br from-zinc-900 to-black p-8 shadow-glow lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold leading-tight text-sand md:text-5xl">Handmade Pembarthy Brass Handicrafts for Timeless Homes</h1>
          <p className="mt-5 text-sand/80">Bring home heritage with handcrafted decor shaped by artisan families from Telangana, India.</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link to="/shop" className="rounded-md bg-gold px-6 py-3 font-semibold text-black">Shop Now</Link>
            <a href="https://wa.me/919999999999?text=Hi%20I%20want%20to%20order%20Pembarthy%20brass%20items" className="rounded-md border border-gold px-6 py-3 font-semibold text-gold">WhatsApp</a>
          </div>
        </div>
        <img loading="lazy" src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80" alt="Handmade brass decor" className="h-80 w-full rounded-xl object-cover" />
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-gold">Categories</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {categories.map((cat) => (
            <article key={cat.name} className="rounded-xl border border-gold/20 bg-zinc-900 p-5">
              <h3 className="text-lg font-semibold">{cat.name}</h3>
              <p className="mt-2 text-sm text-sand/75">{cat.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-gold">Featured Products</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <article key={product.id} className="overflow-hidden rounded-xl border border-gold/25 bg-zinc-900">
              <img loading="lazy" src={product.image} alt={product.name} className="h-52 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="mt-2 text-gold">₹{product.price.toLocaleString('en-IN')}</p>
                <Link to={`/product/${product.id}`} className="mt-3 inline-block text-sm text-sand underline">View Product</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-8 rounded-xl border border-gold/20 bg-zinc-900 p-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-gold">Artisan Story</h2>
          <p className="mt-3 text-sand/80">Metal Artisan partners directly with master craft families in Pembarthy village. Every purchase preserves hand skills passed across generations.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gold">Trust Badges</h2>
          <ul className="mt-3 space-y-2 text-sand/85">
            <li>✓ 100% Handmade in Telangana</li>
            <li>✓ Authentic Pembarthy Craft Techniques</li>
            <li>✓ Secure Packaging & Pan-India Shipping</li>
          </ul>
        </div>
      </section>
    </>
  );
}

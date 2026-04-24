import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { categories, products, whatsappLink } from '../data/content';

const trustBadges = ['Handmade', 'Made in India', 'Award Winning Artisan'];

export default function HomePage() {
  return (
    <>
      <Seo
        title="Buy Authentic Pembarthy Brass Handicrafts Online | Metal Artisan"
        description="Buy authentic pembarthy metal crafts online. Discover brass handicrafts India loves, handmade brass items, and premium Telangana handicrafts direct from artisans."
      />

      <section className="grid items-center gap-8 rounded-3xl border border-gold/30 bg-gradient-to-br from-zinc-900 to-black p-8 shadow-glow lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Buy Authentic Pembarthy Brass Handicrafts Online
          </h1>
          <p className="mt-4 text-lg text-sand/80">
            Handmade by skilled Telangana artisans – Direct from workshop
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Link to="/shop" className="rounded-md bg-gold px-6 py-3 font-semibold text-black transition hover:opacity-90">
              Shop Now
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-gold px-6 py-3 font-semibold text-gold transition hover:bg-gold/10"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>

        <img
          loading="lazy"
          src="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80"
          alt="Pembarthy brass handicrafts showcase"
          className="h-80 w-full rounded-2xl object-cover"
        />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-gold">Trusted Craft Promise</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {trustBadges.map((badge) => (
            <div key={badge} className="rounded-xl border border-gold/20 bg-zinc-900/80 p-4 text-center font-medium">
              {badge}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-gold">Shop by Category</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {categories.map((category) => (
            <article key={category.id} className="rounded-xl border border-gold/20 bg-zinc-900 p-5">
              <h3 className="text-lg font-semibold">{category.name}</h3>
              <p className="mt-2 text-sm text-sand/75">{category.description}</p>
              <Link to="/shop" className="mt-4 inline-block text-sm text-gold underline">
                Explore
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-gold">Featured Products</h2>
        <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 6).map((product) => (
            <article key={product.id} className="overflow-hidden rounded-xl border border-gold/20 bg-zinc-900">
              <img loading="lazy" src={product.image} alt={product.shortName} className="h-52 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{product.shortName}</h3>
                <p className="mt-1 text-sm text-sand/70">{product.category}</p>
                <p className="mt-2 text-gold">₹{product.price.toLocaleString('en-IN')}</p>
                <Link to={`/product/${product.id}`} className="mt-3 inline-block text-sm text-sand underline hover:text-gold">
                  View Product
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-2xl border border-gold/20 bg-zinc-900 p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-gold">Artisan Story</h2>
        <p className="mt-3 leading-7 text-sand/80">
          Pembarthy is a renowned metal craft village in Telangana known for handworked brass artistry. Each piece at Metal
          Artisan is shaped, engraved, and polished by craft families preserving generations of skill. By choosing authentic
          handmade brass items, you support real artisans and keep this heritage alive.
        </p>
      </section>

      <section className="mt-14 rounded-2xl border border-gold/30 bg-gradient-to-r from-zinc-900 to-black p-8 text-center">
        <h2 className="text-3xl font-bold text-gold">Order Now via WhatsApp</h2>
        <p className="mt-3 text-sand/80">Quick assistance for custom orders, gifting, and bulk purchases.</p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex rounded-md bg-green-500 px-6 py-3 font-semibold text-white"
        >
          Start WhatsApp Order
        </a>
      </section>
    </>
  );
}

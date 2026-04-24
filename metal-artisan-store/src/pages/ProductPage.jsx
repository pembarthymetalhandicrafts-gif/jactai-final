import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import { products } from '../data/content';

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id) ?? products[0];
  const related = products.filter((item) => item.id !== product.id).slice(0, 2);

  return (
    <>
      <Seo title={`${product.name} | Metal Artisan`} description={product.description} />
      <article className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <img src={product.image} alt={product.name} className="h-[420px] w-full rounded-xl object-cover" />
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((n) => (
              <img key={n} loading="lazy" src={product.image} alt={`${product.name} view ${n}`} className="h-24 w-full rounded-md object-cover opacity-85" />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold text-sand">{product.name}</h1>
          <div className="mt-4 flex items-center gap-3">
            <span className="text-3xl font-bold text-gold">₹{product.price.toLocaleString('en-IN')}</span>
            <span className="text-lg text-sand/50 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
            <span className="rounded bg-gold/20 px-2 py-1 text-xs text-gold">Save {Math.round((1 - product.price / product.originalPrice) * 100)}%</span>
          </div>
          <p className="mt-5 text-sand/85">{product.description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-md bg-gold px-6 py-3 font-semibold text-black">Buy Now</button>
            <a href={`https://wa.me/919999999999?text=I%20want%20to%20order%20${encodeURIComponent(product.name)}`} className="rounded-md border border-green-400 px-6 py-3 font-semibold text-green-400">Order on WhatsApp</a>
          </div>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gold">Why you will love it</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sand/80">
              {product.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>

          <section className="mt-8 rounded-lg border border-gold/20 bg-zinc-900 p-4">
            <h2 className="text-xl font-semibold text-gold">Trust Badges</h2>
            <p className="mt-2 text-sand/80">✓ Handmade • ✓ Authentic Pembarthy • ✓ Secure Delivery</p>
          </section>
        </div>
      </article>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-gold">Benefits of Authentic Brass</h2>
        <p className="mt-3 text-sand/80">Brass is long-lasting, spiritually significant, and only improves with age. It makes each room feel rich, rooted, and meaningful.</p>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-gold">Customer Reviews</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <blockquote className="rounded-lg border border-gold/20 bg-zinc-900 p-4 text-sand/85">“Absolutely stunning craftsmanship. Our pooja room feels divine.” — S. Reddy</blockquote>
          <blockquote className="rounded-lg border border-gold/20 bg-zinc-900 p-4 text-sand/85">“Looks premium and authentic. Great gifting option.” — Priya N.</blockquote>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-gold">Related Products</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {related.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`} className="rounded-lg border border-gold/20 bg-zinc-900 p-4 hover:border-gold">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="mt-1 text-gold">₹{item.price.toLocaleString('en-IN')}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

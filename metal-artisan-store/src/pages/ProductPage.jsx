import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import { products } from '../data/content';

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id) ?? products[0];
  const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 3);
  const displayTitle = `Handmade Pembarthy Brass ${product.shortName}`;

  return (
    <>
      <Seo
        title={`${displayTitle} | Metal Artisan`}
        description={`${displayTitle} for home decor, pooja, and gifting. Authentic brass handicrafts India craftsmanship from Telangana artisans.`}
      />

      <article className="grid gap-8 lg:grid-cols-2">
        <div>
          <img src={product.gallery[0]} alt={displayTitle} className="h-[430px] w-full rounded-xl object-cover" />
          <div className="mt-4 grid grid-cols-3 gap-3">
            {product.gallery.map((image, index) => (
              <img
                key={image}
                src={image}
                loading="lazy"
                alt={`${displayTitle} preview ${index + 1}`}
                className="h-24 w-full rounded-md object-cover"
              />
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-4xl font-bold">{displayTitle}</h1>
          <div className="mt-4 flex items-center gap-3">
            <span className="text-3xl font-bold text-gold">₹{product.price.toLocaleString('en-IN')}</span>
            <span className="text-lg text-sand/50 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
            <span className="rounded bg-gold/20 px-2 py-1 text-xs text-gold">
              Save {Math.round((1 - product.price / product.originalPrice) * 100)}%
            </span>
          </div>

          <p className="mt-5 leading-7 text-sand/85">
            {product.description} This piece is ideal for home decor styling, sacred pooja spaces, and premium gifting occasions.
            Every order supports artisan families preserving pembarthy metal crafts traditions.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-md bg-gold px-6 py-3 font-semibold text-black">Buy Now</button>
            <a
              href={`https://wa.me/919999999999?text=${encodeURIComponent(`I want to order ${displayTitle}`)}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-green-500 px-6 py-3 font-semibold text-green-400"
            >
              Order via WhatsApp
            </a>
          </div>

          <section className="mt-7 rounded-lg border border-gold/20 bg-zinc-900 p-5">
            <h2 className="text-xl font-semibold text-gold">Why this product stands out</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sand/85">
              <li>Handmade</li>
              <li>Authentic</li>
              <li>Durable</li>
            </ul>
          </section>

          <section className="mt-6">
            <h3 className="text-xl font-semibold text-gold">Benefits</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sand/80">
              {product.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </section>
        </div>
      </article>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-gold">Related Products</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {relatedProducts.map((item) => (
            <Link
              key={item.id}
              to={`/product/${item.id}`}
              className="rounded-lg border border-gold/20 bg-zinc-900 p-4 transition hover:border-gold"
            >
              <img src={item.image} alt={item.shortName} className="h-32 w-full rounded object-cover" />
              <h3 className="mt-3 font-semibold">{item.shortName}</h3>
              <p className="mt-1 text-gold">₹{item.price.toLocaleString('en-IN')}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

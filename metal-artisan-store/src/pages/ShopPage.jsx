import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { products } from '../data/content';

export default function ShopPage() {
  return (
    <>
      <Seo title="Shop Brass Handicrafts | Metal Artisan" description="Browse handmade Pembarthy brass decor, idols, and gifting collections." />
      <h1 className="text-4xl font-bold text-gold">Shop Handmade Brass Handicrafts</h1>
      <p className="mt-3 text-sand/75">Premium, handcrafted pieces made by artisans from Pembarthy, Telangana.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <article key={product.id} className="rounded-xl border border-gold/20 bg-zinc-900 p-4">
            <img loading="lazy" src={product.image} alt={product.name} className="h-60 w-full rounded-lg object-cover" />
            <h2 className="mt-4 text-xl font-semibold">{product.name}</h2>
            <p className="mt-2 text-gold">₹{product.price.toLocaleString('en-IN')}</p>
            <Link to={`/product/${product.id}`} className="mt-3 inline-block rounded-md bg-gold px-4 py-2 text-black">View Details</Link>
          </article>
        ))}
      </div>
    </>
  );
}

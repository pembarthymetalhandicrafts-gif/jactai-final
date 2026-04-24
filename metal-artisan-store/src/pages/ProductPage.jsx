import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import { products, whatsappPhone } from '../data/content';
import useWishlist from '../hooks/useWishlist';

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id) ?? products[0];
  const [activeImage, setActiveImage] = useState(product.gallery[0]);
  const [cartCount, setCartCount] = useState(0);
  const { wishlistSet, toggleWishlist } = useWishlist();
  const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 3);

  const whatsappMessage = encodeURIComponent(`Hello JactAI Crafts, I want to order ${product.shortName}.`);

  return (
    <>
      <Seo
        title={`${product.shortName} | JactAI Crafts`}
        description={`${product.shortName} handcrafted by skilled artisans. Premium metal decor with heritage craftsmanship.`}
      />

      <article className="grid gap-9 lg:grid-cols-2">
        <div>
          <img src={activeImage} alt={product.shortName} className="h-[430px] w-full rounded-2xl object-cover" />
          <div className="mt-4 grid grid-cols-3 gap-3">
            {product.gallery.map((image, index) => (
              <button key={image} type="button" onClick={() => setActiveImage(image)}>
                <img
                  src={image}
                  alt={`${product.shortName} view ${index + 1}`}
                  className={`h-24 w-full rounded-lg object-cover ${activeImage === image ? 'ring-2 ring-[#b88a3d]' : ''}`}
                />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-4xl font-semibold text-[#2b1d10]">{product.shortName}</h1>
          <p className="mt-2 text-[#705331]">⭐ {product.rating} ({product.reviewsCount} reviews)</p>
          <div className="mt-3 flex items-center gap-3">
            <span className="text-3xl font-bold text-[#b07f2f]">₹{product.price.toLocaleString('en-IN')}</span>
            {product.originalPrice > product.price ? (
              <span className="text-lg text-[#8d7658] line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
            ) : null}
          </div>

          <p className="mt-5 leading-8 text-[#5d4630]">{product.description}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setCartCount((old) => old + 1)}
              className="rounded-full bg-[#b88a3d] px-6 py-3 font-semibold text-white"
            >
              Add to Cart
            </button>
            <a
              href={`https://wa.me/${whatsappPhone}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#2f6f4f] px-6 py-3 font-semibold text-[#2f6f4f]"
            >
              WhatsApp Order
            </a>
            <button
              type="button"
              onClick={() => toggleWishlist(product.id)}
              className="rounded-full border border-[#d0b080] px-5 py-3"
            >
              {wishlistSet.has(product.id) ? '♥ Wishlisted' : '♡ Add to Wishlist'}
            </button>
          </div>

          {cartCount > 0 ? <p className="mt-3 text-sm text-[#5b7d4c]">Added to cart: {cartCount}</p> : null}

          <section className="mt-8 rounded-2xl border border-[#ead8ba] bg-[#fffaf1] p-6">
            <h2 className="text-xl font-semibold text-[#2b1d10]">Craft Highlights</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-[#5d4630]">
              {product.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </section>

          <section className="mt-6 rounded-2xl border border-[#ead8ba] bg-white p-6">
            <h2 className="text-xl font-semibold text-[#2b1d10]">Reviews</h2>
            <div className="mt-3 space-y-3">
              {product.reviews.map((review) => (
                <blockquote key={review.name + review.text} className="rounded-xl bg-[#f9f2e7] p-3 text-[#5d4630]">
                  “{review.text}” — <span className="font-semibold">{review.name}</span>
                </blockquote>
              ))}
            </div>
          </section>
        </div>
      </article>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-[#2b1d10]">You may also like</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {relatedProducts.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`} className="rounded-xl border border-[#ead8ba] bg-white p-4">
              <img src={item.image} alt={item.shortName} className="h-36 w-full rounded-lg object-cover" />
              <h3 className="mt-3 font-semibold text-[#2f2319]">{item.shortName}</h3>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

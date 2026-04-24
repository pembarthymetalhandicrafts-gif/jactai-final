import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { blogPosts } from '../data/content';

export default function BlogListPage() {
  return (
    <>
      <Seo
        title="Blog | Pembarthy Metal Crafts & Handmade Brass Items"
        description="Read expert articles on pembarthy metal crafts, handmade brass items, and Telangana handicrafts heritage."
      />

      <h1 className="text-4xl font-bold text-gold">Metal Artisan Blog</h1>
      <h2 className="mt-2 text-xl text-sand/80">Insights on pembarthy metal crafts and brass handicrafts India traditions</h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {blogPosts.map((post) => (
          <article key={post.slug} className="overflow-hidden rounded-xl border border-gold/20 bg-zinc-900">
            <img src={post.cover} alt={post.title} className="h-52 w-full object-cover" loading="lazy" />
            <div className="p-5">
              <h3 className="text-2xl font-semibold">{post.title}</h3>
              <p className="mt-1 text-sm text-sand/60">{post.date}</p>
              <p className="mt-3 text-sand/80">{post.excerpt}</p>
              <Link to={`/blog/${post.slug}`} className="mt-4 inline-block text-gold underline">
                Read Article
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { blogPosts } from '../data/content';

export default function BlogListPage() {
  return (
    <>
      <Seo title="Brass Craft Blog | Metal Artisan" description="Read educational stories and guides about authentic Pembarthy metal handicrafts." />
      <h1 className="text-4xl font-bold text-gold">Metal Artisan Blog</h1>
      <p className="mt-3 text-sand/75">Stories that educate customers and celebrate Telangana heritage.</p>
      <div className="mt-8 space-y-5">
        {blogPosts.map((post) => (
          <article key={post.slug} className="rounded-xl border border-gold/20 bg-zinc-900 p-5">
            <h2 className="text-2xl font-semibold text-sand">{post.title}</h2>
            <p className="mt-2 text-sm text-sand/55">{post.date}</p>
            <p className="mt-3 text-sand/75">{post.excerpt}</p>
            <Link to={`/blog/${post.slug}`} className="mt-3 inline-block text-gold underline">Read article</Link>
          </article>
        ))}
      </div>
    </>
  );
}

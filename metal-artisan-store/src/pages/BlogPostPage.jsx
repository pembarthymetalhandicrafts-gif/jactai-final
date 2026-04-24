import { useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import { blogPosts } from '../data/content';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((entry) => entry.slug === slug) ?? blogPosts[0];

  return (
    <article className="mx-auto max-w-3xl">
      <Seo title={`${post.title} | Metal Artisan Blog`} description={post.excerpt} />
      <h1 className="text-4xl font-bold text-gold">{post.title}</h1>
      <p className="mt-3 text-sm text-sand/60">{post.date}</p>
      <img src={post.cover} alt={post.title} className="mt-6 h-72 w-full rounded-xl object-cover" />
      <p className="mt-6 text-lg text-sand/80">{post.excerpt}</p>

      {post.content.map((section) => (
        <section key={section.heading} className="mt-8">
          <h2 className="text-2xl font-semibold text-sand">{section.heading}</h2>
          <p className="mt-3 leading-7 text-sand/80">{section.body}</p>
        </section>
      ))}
    </article>
  );
}

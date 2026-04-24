import Seo from '../components/Seo';

export default function AboutPage() {
  return (
    <>
      <Seo
        title="Pembarthy Artisan – Preserving Traditional Metal Craft | Metal Artisan"
        description="Learn how Metal Artisan preserves Telangana handicrafts through authentic pembarthy metal crafts, artisan awards, and heritage storytelling."
      />
      <h1 className="text-4xl font-bold text-gold">Pembarthy Artisan – Preserving Traditional Metal Craft</h1>

      <section className="mt-6 space-y-6 rounded-2xl border border-gold/20 bg-zinc-900 p-6 leading-7 text-sand/85">
        <p>
          Metal Artisan was founded to bridge traditional workmanship and modern ecommerce. We work directly with master craft
          families from Pembarthy, Telangana, ensuring fair value for artisans and authentic quality for customers.
        </p>
        <p>
          Our workshop partners are known for their temple commissions, bespoke decor projects, and award-winning hand-engraved
          brass work. Their craftsmanship has been appreciated in exhibitions, media features, and curated heritage showcases
          across India.
        </p>
        <p>
          Every order you place helps preserve the legacy of pembarthy metal crafts while supporting the next generation of
          artisans. This is more than shopping—it is cultural continuity through design.
        </p>
      </section>
    </>
  );
}

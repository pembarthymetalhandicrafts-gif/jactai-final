import Seo from '../components/Seo';

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Us | JactAI Crafts"
        description="Discover the artisan story, heritage techniques, and cultural craftsmanship behind JactAI Crafts."
      />

      <h1 className="text-4xl font-semibold text-[#2b1d10]">About Us</h1>
      <p className="mt-3 max-w-4xl text-[#5d4630]">
        JactAI Crafts partners with traditional metal artisans to preserve heritage skills and bring authentic handmade products
        to modern homes.
      </p>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1518991791750-749a0f5b7f84?auto=format&fit=crop&w=1400&q=80"
          alt="Artisan workshop environment"
          className="h-80 w-full rounded-2xl object-cover"
        />
        <div className="rounded-2xl border border-[#ead8ba] bg-[#fffaf1] p-6 leading-8 text-[#5d4630]">
          <h2 className="text-2xl font-semibold text-[#2b1d10]">Story of our artisans</h2>
          <p className="mt-3">
            Our artisan network includes master engravers, casters, and polishers who learned directly from elders in their
            families. Each finished piece reflects hours of handwork rather than factory molds.
          </p>
          <p className="mt-3">
            We focus on fair-value collaborations, transparent sourcing, and craft continuity so heritage does not disappear in
            a mass-production world.
          </p>
        </div>
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1400&q=80"
          alt="Close-up of handcrafted metal details"
          className="h-64 w-full rounded-2xl object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1400&q=80"
          alt="Metal artisan at work"
          className="h-64 w-full rounded-2xl object-cover"
        />
      </section>
    </>
  );
}

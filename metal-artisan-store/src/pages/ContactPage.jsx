import Seo from '../components/Seo';
import { contact, whatsappLink } from '../data/content';

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact Metal Artisan | Telangana Brass Handicrafts"
        description="Contact us for custom orders and bulk purchases of brass handicrafts. Reach Metal Artisan by phone, email, WhatsApp, or visit Pembarthy workshop."
      />

      <h1 className="text-4xl font-bold text-gold">Contact Metal Artisan</h1>
      <p className="mt-3 text-sand/80">Contact us for custom orders and bulk purchases of brass handicrafts</p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <section className="rounded-xl border border-gold/20 bg-zinc-900 p-6">
          <h2 className="text-2xl font-semibold text-gold">Get in touch</h2>
          <p className="mt-4">Phone: {contact.phone}</p>
          <p className="mt-1">Email: {contact.email}</p>
          <p className="mt-1">Address: {contact.address}</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex rounded-md bg-green-500 px-5 py-3 font-semibold text-white"
          >
            WhatsApp Us
          </a>
        </section>

        <section className="overflow-hidden rounded-xl border border-gold/20 bg-zinc-900">
          <iframe
            title="Pembarthy Telangana Map"
            src="https://www.google.com/maps?q=Pembarthy%20Telangana&output=embed"
            className="h-full min-h-[320px] w-full"
            loading="lazy"
          />
        </section>
      </div>
    </>
  );
}

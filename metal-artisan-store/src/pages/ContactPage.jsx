import Seo from '../components/Seo';
import { contact, whatsappLink } from '../data/content';

export default function ContactPage() {
  return (
    <>
      <Seo title="Contact Us | JactAI Crafts" description="Contact JactAI Crafts for orders, custom requests, and support." />

      <h1 className="text-4xl font-semibold text-[#2b1d10]">Contact Us</h1>
      <p className="mt-3 text-[#5d4630]">We would love to help with custom orders, gifting, and bulk requests.</p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-[#ead8ba] bg-[#fffaf1] p-6">
          <h2 className="text-2xl font-semibold text-[#2b1d10]">Get in touch</h2>
          <p className="mt-4">Phone: {contact.phone}</p>
          <p className="mt-1">Email: {contact.email}</p>
          <p className="mt-1">Address: {contact.address}</p>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-5 inline-block rounded-full bg-[#2f6f4f] px-5 py-3 font-semibold text-white">
            WhatsApp Us
          </a>

          <form className="mt-7 space-y-3">
            <input type="text" placeholder="Your Name" className="w-full rounded-lg border border-[#dcc29a] p-3" />
            <input type="email" placeholder="Email Address" className="w-full rounded-lg border border-[#dcc29a] p-3" />
            <textarea rows="4" placeholder="Message" className="w-full rounded-lg border border-[#dcc29a] p-3" />
            <button type="button" className="rounded-full bg-[#b88a3d] px-5 py-3 font-semibold text-white">Send Message</button>
          </form>
        </section>

        <section className="overflow-hidden rounded-2xl border border-[#ead8ba] bg-white">
          <iframe
            title="JactAI Crafts map"
            src="https://www.google.com/maps?q=Banjara%20Hills%20Hyderabad&output=embed"
            className="h-full min-h-[500px] w-full"
            loading="lazy"
          />
        </section>
      </div>
    </>
  );
}

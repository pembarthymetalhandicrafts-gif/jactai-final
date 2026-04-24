import Seo from '../components/Seo';

export default function ContactPage() {
  return (
    <>
      <Seo title="Contact Metal Artisan" description="Contact Metal Artisan for brass handicraft orders, bulk gifting, and customization." />
      <h1 className="text-4xl font-bold text-gold">Contact Us</h1>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-gold/20 bg-zinc-900 p-6">
          <h2 className="text-xl font-semibold">Order Support</h2>
          <p className="mt-2 text-sand/75">WhatsApp: +91 99999 99999</p>
          <p className="text-sand/75">Email: care@metalartisan.in</p>
        </div>
        <form className="rounded-xl border border-gold/20 bg-zinc-900 p-6">
          <h2 className="text-xl font-semibold">Send a Message</h2>
          <input className="mt-4 w-full rounded bg-black/40 p-3" placeholder="Your Name" />
          <input className="mt-3 w-full rounded bg-black/40 p-3" placeholder="Email" />
          <textarea className="mt-3 w-full rounded bg-black/40 p-3" rows="4" placeholder="Message" />
          <button type="button" className="mt-4 rounded bg-gold px-4 py-2 font-semibold text-black">Submit</button>
        </form>
      </div>
    </>
  );
}

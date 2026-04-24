import { Link, NavLink, Outlet } from 'react-router-dom';
import { contact, whatsappLink } from '../data/content';

const links = [
  ['/', 'Home'],
  ['/shop', 'Shop'],
  ['/about', 'About Us'],
  ['/contact', 'Contact Us']
];

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#fffdf8] text-[#3a2b1b]">
      <header className="sticky top-0 z-50 border-b border-[#e8d6b7] bg-[#fffaf2]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link to="/" className="text-xl font-semibold tracking-[0.16em] text-[#8e6426]">
            JACTAI CRAFTS
          </Link>
          <div className="flex flex-wrap items-center gap-5 text-sm">
            {links.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => `transition ${isActive ? 'text-[#8e6426]' : 'text-[#5a442a] hover:text-[#8e6426]'}`}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10">
        <Outlet />
      </main>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-40 rounded-full bg-[#2f6f4f] px-5 py-3 text-sm font-bold text-white shadow-xl transition hover:scale-105"
      >
        WhatsApp Order
      </a>

      <footer className="border-t border-[#e8d6b7] bg-[#fff7ea] py-10">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 text-sm text-[#5a442a] md:grid-cols-3">
          <div>
            <h3 className="font-semibold text-[#8e6426]">JactAI Crafts</h3>
            <p className="mt-2">Premium handcrafted metal decor rooted in Indian artisan heritage.</p>
          </div>
          <div>
            <h3 className="font-semibold text-[#8e6426]">Quick Links</h3>
            <ul className="mt-2 space-y-1">
              {links.map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-[#8e6426]">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[#8e6426]">Contact</h3>
            <p className="mt-2">Phone: {contact.phone}</p>
            <p>Email: {contact.email}</p>
            <p>{contact.address}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

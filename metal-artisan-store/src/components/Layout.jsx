import { Link, NavLink, Outlet } from 'react-router-dom';
import { contact, whatsappLink } from '../data/content';

const links = [
  ['/', 'Home'],
  ['/shop', 'Shop'],
  ['/about', 'About'],
  ['/contact', 'Contact'],
  ['/blog', 'Blog']
];

export default function Layout() {
  return (
    <div className="min-h-screen bg-ink text-sand">
      <header className="sticky top-0 z-50 border-b border-gold/20 bg-ink/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link to="/" className="text-xl font-semibold tracking-[0.16em] text-gold">
            METAL ARTISAN
          </Link>
          <div className="flex flex-wrap items-center gap-5 text-sm">
            {links.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `transition ${isActive ? 'text-gold' : 'text-sand/85 hover:text-gold'}`
                }
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
        className="fixed bottom-5 right-5 z-40 rounded-full bg-green-500 px-5 py-3 text-sm font-bold text-white shadow-2xl transition hover:scale-105"
      >
        Order on WhatsApp
      </a>

      <footer className="border-t border-gold/20 bg-black/20 py-10">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 text-sm text-sand/75 md:grid-cols-3">
          <div>
            <h3 className="font-semibold text-gold">Metal Artisan</h3>
            <p className="mt-2">Authentic pembarthy metal crafts direct from Telangana workshops.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gold">Quick Links</h3>
            <ul className="mt-2 space-y-1">
              {links.map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-gold">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gold">Contact</h3>
            <p className="mt-2">Phone: {contact.phone}</p>
            <p>Email: {contact.email}</p>
            <p>{contact.address}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

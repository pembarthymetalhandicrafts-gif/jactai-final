import { Link, NavLink, Outlet } from 'react-router-dom';

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
      <header className="sticky top-0 z-50 border-b border-gold/30 bg-ink/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link to="/" className="text-xl font-semibold tracking-wide text-gold">Metal Artisan</Link>
          <div className="flex flex-wrap gap-4 text-sm">
            {links.map(([to, label]) => (
              <NavLink key={to} to={to} className={({ isActive }) => (isActive ? 'text-gold' : 'text-sand/90 hover:text-gold')}>
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
        href="https://wa.me/919999999999?text=Hi%20Metal%20Artisan%2C%20I%20want%20to%20place%20an%20order"
        className="fixed bottom-5 right-5 rounded-full bg-green-500 px-5 py-3 text-sm font-bold text-white shadow-xl transition hover:scale-105"
      >
        WhatsApp Order
      </a>
      <footer className="border-t border-gold/20 py-8 text-center text-sm text-sand/70">© 2026 Metal Artisan. Crafted in Telangana.</footer>
    </div>
  );
}

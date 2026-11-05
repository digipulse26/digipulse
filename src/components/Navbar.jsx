import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { services } from '../data';
import logo from '../images/Logo.png';

const links = [
  { to: '/', label: 'Beranda', end: true },
  { to: '/tentang', label: 'Tentang' },
  { to: '/layanan', label: 'Layanan', menu: true },
  { to: '/portofolio', label: 'Portofolio' },
  { to: '/produk', label: 'Produk' },
  { to: '/kontak', label: 'Kontak' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; }, [open]);

  const cls = ({ isActive }) => `px-3 py-2 text-sm font-semibold rounded-full transition-colors ${isActive ? 'text-white bg-white/10' : 'text-slate-400 hover:text-white'}`;

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled || open ? 'bg-background/85 backdrop-blur-md border-b border-white/5' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="DigiPulse beranda">
          <img src={logo} alt="" className="h-10 sm:h-11 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Utama">
          {links.map((l) => l.menu ? (
            <div key={l.to} className="relative group">
              <NavLink to={l.to} className={cls}>
                <span className="inline-flex items-center gap-1">{l.label}<ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" /></span>
              </NavLink>
              <div className="absolute left-0 top-full pt-3 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200">
                <div className="w-64 p-2 rounded-2xl bg-secondary border border-white/10 shadow-2xl">
                  {services.map((s) => (
                    <Link key={s.slug} to={`/layanan/${s.slug}`} className="block px-3 py-2 rounded-xl text-sm text-slate-300 hover:bg-white/5 hover:text-white">{s.title}</Link>
                  ))}
                  <Link to="/layanan" className="mt-1 flex items-center justify-between px-3 py-2 rounded-xl text-sm font-bold text-primary hover:bg-primary/10">Lihat semua layanan <ArrowRight className="w-4 h-4" /></Link>
                </div>
              </div>
            </div>
          ) : (
            <NavLink key={l.to} to={l.to} end={l.end} className={cls}>{l.label}</NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/kontak" className="btn btn-primary hidden sm:inline-flex !py-2.5 !px-5 !text-sm">Mulai Diskusi</Link>
          <button className="lg:hidden p-2 rounded-full bg-white/5 border border-white/10" onClick={() => setOpen(!open)} aria-label={open ? 'Tutup menu' : 'Buka menu'} aria-expanded={open}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden h-[calc(100dvh-4rem)] overflow-y-auto px-6 pb-10 page-enter">
          <nav className="flex flex-col" aria-label="Seluler">
            {links.map((l, i) => (
              <NavLink key={l.to} to={l.to} end={l.end} style={{ animationDelay: `${i * 40}ms` }} className={({ isActive }) => `page-enter py-4 text-3xl font-extrabold border-b border-white/5 ${isActive ? 'text-gradient' : 'text-white'}`}>{l.label}</NavLink>
            ))}
          </nav>
          <Link to="/kontak" className="btn btn-primary mt-8 w-full justify-center">Mulai Diskusi</Link>
        </div>
      )}
    </header>
  );
}

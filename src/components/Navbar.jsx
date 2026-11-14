import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { services, groups } from '../data';
import { ConsultLink } from './fx';
import logo from '../images/Logo-putih.png';

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

  const cls = ({ isActive }) => `relative px-3 py-2 text-[0.92rem] transition-colors ${isActive ? 'text-white after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-0.5 after:rounded-full after:[background:var(--brand)]' : 'text-slate-400 hover:text-white'}`;

  return (
    <header className={`fixed top-0 inset-x-0 z-50 pt-[max(0.75rem,env(safe-area-inset-top))] sm:pt-0 transition-colors duration-300 ${scrolled || open ? 'bg-background/90 backdrop-blur-md border-b rule' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[4.5rem] sm:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="DigiPulse beranda">
          <img src={logo} alt="" className="h-11 sm:h-12 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Utama">
          {links.map((l) => l.menu ? (
            <div key={l.to} className="relative group">
              <NavLink to={l.to} className={cls}>{l.label}</NavLink>
              <div className="absolute left-0 top-full pt-4 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200">
                <div className="w-[34rem] p-5 panel bg-secondary shadow-2xl grid grid-cols-2 gap-x-6 gap-y-5">
                  {groups.map((g) => (
                    <div key={g.slug}>
                      <p className="flex items-center gap-2 mono text-[11px] uppercase tracking-wide" style={{ color: g.color }}><i className="w-1.5 h-1.5 rounded-full" style={{ background: g.color }} />{g.title}</p>
                      <div className="mt-2 flex flex-col">
                        {g.items.map((slug) => { const sv = services.find((x) => x.slug === slug); return (
                          <Link key={slug} to={`/layanan/${slug}`} className="py-1 text-sm text-slate-300 hover:text-white">{sv.title}</Link>
                        ); })}
                      </div>
                    </div>
                  ))}
                  <Link to="/layanan" className="col-span-2 pt-4 border-t rule flex items-center justify-between text-sm text-primary-soft hover:text-white">Lihat semua layanan <ArrowRight className="w-4 h-4" /></Link>
                </div>
              </div>
            </div>
          ) : (
            <NavLink key={l.to} to={l.to} end={l.end} className={cls}>{l.label}</NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ConsultLink className="btn btn-cta hidden sm:inline-flex !py-2.5 !px-4 !text-sm">Konsultasi Sekarang <ArrowRight className="w-4 h-4" /></ConsultLink>
          {/* Tombol menu HP: solid dan kontras, ikon garis berubah menjadi silang saat terbuka */}
          <button className={`lg:hidden h-11 pl-4 pr-3.5 inline-flex items-center gap-2.5 rounded-full text-sm font-semibold transition-colors ${open ? 'bg-accent text-[#0C0C10]' : 'bg-[#F4F1EA] text-[#0C0C10]'}`} onClick={() => setOpen(!open)} aria-label={open ? 'Tutup menu' : 'Buka menu'} aria-expanded={open}>
            {open ? 'Tutup' : 'Menu'}
            <span className="relative w-4 h-3" aria-hidden="true">
              <i className={`absolute left-0 w-4 h-[2px] rounded bg-current transition-all duration-300 ${open ? 'top-[5px] rotate-45' : 'top-0'}`} />
              <i className={`absolute left-0 w-4 h-[2px] rounded bg-current transition-all duration-300 ${open ? 'top-[5px] -rotate-45' : 'top-[10px]'}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden h-[calc(100dvh-4.5rem)] overflow-y-auto px-6 pb-10 page-enter">
          <nav className="flex flex-col" aria-label="Seluler">
            {links.map((l, i) => (
              <NavLink key={l.to} to={l.to} end={l.end} style={{ animationDelay: `${i * 40}ms` }} className={({ isActive }) => `page-enter flex items-baseline gap-4 py-4 border-b rule display text-3xl ${isActive ? 'text-white' : 'text-slate-400'}`}>
                <span className="mono text-xs text-accent-soft">0{i + 1}</span>{l.label}
              </NavLink>
            ))}
          </nav>
          <ConsultLink className="btn btn-cta mt-8 w-full justify-between">Konsultasi Sekarang <ArrowRight className="w-4 h-4" /></ConsultLink>
        </div>
      )}
    </header>
  );
}

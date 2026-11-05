import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Clock } from 'lucide-react';
import { EMAIL, services } from '../data';
import logo from '../images/Logo.png';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5 space-y-5">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="" className="h-10 sm:h-11 w-auto" />
          </Link>
          <p className="text-slate-400 max-w-sm leading-relaxed">Kami membantu bisnis dan institusi membuat produk digital yang terasa mudah dipakai, dari ide pertama sampai berjalan di lapangan.</p>
        </div>
        <div className="md:col-span-3">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Navigasi</h3>
          <ul className="space-y-2 text-slate-300">
            {[['/', 'Beranda'], ['/tentang', 'Tentang'], ['/layanan', 'Layanan'], ['/portofolio', 'Portofolio'], ['/produk', 'Produk'], ['/kontak', 'Kontak']].map(([to, l]) => (
              <li key={to}><Link className="hover:text-primary transition-colors" to={to}>{l}</Link></li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Kontak</h3>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-primary" />{EMAIL}</li>
            <li className="flex items-center gap-3"><Clock className="w-4 h-4 text-primary" />Senin – Jumat, 09.00 – 17.00 WIB</li>
          </ul>
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mt-8 mb-3">Layanan</h3>
          <div className="flex flex-wrap gap-2">
            {services.slice(0, 4).map((s) => <Link key={s.slug} to={`/layanan/${s.slug}`} className="text-xs px-3 py-1 rounded-full bg-white/5 text-slate-400 hover:text-white">{s.title}</Link>)}
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} DigiPulse · Studio Digital &amp; IoT</div>
    </footer>
  );
}

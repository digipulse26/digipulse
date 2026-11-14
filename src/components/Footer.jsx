import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { EMAIL, services } from '../data';
import logo from '../images/Logo-putih.png';

const nav = [['/', 'Beranda'], ['/tentang', 'Tentang'], ['/layanan', 'Layanan'], ['/portofolio', 'Portofolio'], ['/produk', 'Produk'], ['/kontak', 'Kontak']];

export default function Footer() {
  return (
    <footer className="border-t rule">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <img src={logo} alt="DigiPulse" className="h-11 w-auto" />
            <p className="mt-6 text-slate-400 max-w-sm leading-relaxed">Kami membantu bisnis dan institusi membangun produk digital yang nyaman digunakan, mulai dari gagasan awal hingga beroperasi di lapangan.</p>
            <a href={`mailto:${EMAIL}`} className="link mt-8 text-lg">{EMAIL} <ArrowUpRight className="w-4 h-4" /></a>
          </div>
          <div className="md:col-span-3">
            <p className="label mb-5">Navigasi</p>
            <ul className="space-y-2.5 text-slate-300">
              {nav.map(([to, l]) => <li key={to}><Link className="hover:text-white transition-colors" to={to}>{l}</Link></li>)}
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="label mb-5">Layanan</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-6 text-slate-300">
              {services.map((s) => <li key={s.slug}><Link className="hover:text-white transition-colors" to={`/layanan/${s.slug}`}>{s.title}</Link></li>)}
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-6 border-t rule flex flex-col sm:flex-row gap-2 justify-between mono text-xs text-slate-500">
          <span>© {new Date().getFullYear()} DigiPulse — Studio Digital &amp; IoT</span>
          <span>Senin – Jumat, 09.00 – 17.00 WIB</span>
        </div>
      </div>
    </footer>
  );
}

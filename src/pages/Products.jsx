import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Headphones, Boxes, Radio } from 'lucide-react';
import { products } from '../data';
import { Tilt, CtaBand } from '../components/fx';
import { VRStage } from './Portfolio';

const icons = { pulsedesk: Headphones, pulsestock: Boxes, pulsesense: Radio };

export default function Products() {
  return (
    <>
      <section className="relative overflow-hidden min-h-[70vh] flex items-end">
        <VRStage className="absolute inset-0 opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 pt-40 pb-14 w-full">
          <span className="eyebrow page-enter">Produk Digital</span>
          <h1 className="mt-5 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] max-w-4xl page-enter" style={{ animationDelay: '80ms' }}>Produk DigiPulse untuk menunjang <span className="text-gradient">pekerjaan harian Anda.</span></h1>
          <p className="mt-5 text-lg text-slate-300 max-w-xl page-enter" style={{ animationDelay: '160ms' }}>Solusi yang kami kembangkan agar aktivitas sehari-hari lebih ringkas dan terorganisasi. Kenali produk yang sudah tersedia maupun yang sedang kami siapkan.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-3 gap-8 scene">
        {products.map((p, i) => {
          const Icon = icons[p.slug];
          return (
            <div key={p.slug} className="reveal" style={{ '--d': `${i * 100}ms` }}><Tilt max={12} className="h-full">
              <article className="relative h-full card p-8 overflow-hidden scan hover:border-primary/50 transition-colors">
                <i className="hud tl" /><i className="hud tr" /><i className="hud bl" /><i className="hud br" />
                <div className="depth-3 w-16 h-16 rounded-2xl bg-primary/15 border border-primary/40 text-primary flex items-center justify-center shadow-xl shadow-primary/20 float" style={{ '--d': `${i * 0.6}s` }}><Icon className="w-8 h-8" /></div>
                <span className={`depth-1 inline-block mt-6 text-[11px] font-bold px-3 py-1 rounded-full border ${p.status === 'Tersedia' ? 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10' : 'text-amber-300 border-amber-500/30 bg-amber-500/10'}`}>{p.status}</span>
                <h2 className="depth-2 mt-4 text-3xl font-extrabold">{p.name}</h2>
                <p className="mt-3 text-slate-400 leading-relaxed">{p.desc}</p>
                <ul className="depth-1 mt-6 space-y-2">{p.feats.map((f) => <li key={f} className="flex items-center gap-3 text-sm text-slate-200"><Check className="w-4 h-4 text-primary" />{f}</li>)}</ul>
                <Link to="/kontak" className="depth-2 mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary">{p.status === 'Tersedia' ? 'Jadwalkan demo' : 'Masuk daftar tunggu'} <ArrowRight className="w-4 h-4" /></Link>
              </article>
            </Tilt></div>
          );
        })}
      </section>
      <CtaBand title="Membutuhkan solusi yang dirancang khusus?" text="Jika produk di atas belum sesuai, kami siap merancang solusi yang selaras dengan alur kerja Anda." />
    </>
  );
}

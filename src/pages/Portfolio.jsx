import React, { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { projects } from '../data';
import { Tilt, CtaBand } from '../components/fx';

// Panggung AR/VR: kubus wireframe 3D, cincin orbit, dan lantai grid bergerak
export function VRStage({ className = '' }) {
  return (
    <div className={`scene overflow-hidden ${className}`} aria-hidden="true">
      <div className="grid-floor" />
      <div className="absolute inset-0 flex items-center justify-center preserve">
        <div className="ring" style={{ width: '22rem', height: '22rem' }} />
        <div className="ring" style={{ width: '30rem', height: '30rem', borderColor: 'rgb(var(--accent) / .4)', animationDuration: '24s', animationDirection: 'reverse' }} />
        <div className="cube float"><b /><b /><b /><b /><b /><b /></div>
      </div>
    </div>
  );
}

export function PortfolioPage() {
  const cats = ['Semua', 'Website', 'Aplikasi'];
  const [f, setF] = useState('Semua');
  const list = f === 'Semua' ? projects : projects.filter((p) => p.tag === f);
  return (
    <>
      <section className="relative overflow-hidden min-h-[70vh] flex items-end">
        <VRStage className="absolute inset-0 opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 pt-40 pb-14 w-full">
          <span className="eyebrow page-enter">Portofolio</span>
          <h1 className="mt-5 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] max-w-4xl page-enter" style={{ animationDelay: '80ms' }}>Proyek yang pernah <span className="text-gradient">kami kerjakan.</span></h1>
          <p className="mt-5 text-lg text-slate-300 max-w-xl page-enter" style={{ animationDelay: '160ms' }}>Studi kasus yang memperlihatkan persoalan, keputusan, dan hasil di balik setiap proyek.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex gap-2 mb-10" role="tablist">
          {cats.map((c) => <button key={c} role="tab" aria-selected={f === c} onClick={() => setF(c)} className={`px-5 py-2 rounded-full text-sm font-bold border transition-all ${f === c ? 'bg-primary border-primary text-white' : 'border-white/10 text-slate-400 hover:text-white'}`}>{c}</button>)}
        </div>
        <div key={f} className="grid md:grid-cols-2 gap-8">
          {list.map((p, i) => (
            <Tilt key={p.slug} as="div" className="page-enter" style={{ animationDelay: `${i * 80}ms` }}>
              <Link to={`/portofolio/${p.slug}`} className="group relative block rounded-3xl overflow-hidden border border-white/10 bg-secondary aspect-[4/3] scan">
                <img src={p.img} alt={p.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <i className="hud tl" /><i className="hud tr" /><i className="hud bl" /><i className="hud br" />
                <div className="absolute bottom-0 p-7 depth-2">
                  <span className="eyebrow">{p.cat}</span>
                  <h2 className="mt-3 text-2xl font-extrabold">{p.title}</h2>
                  <p className="mt-2 text-sm text-slate-300 max-w-sm">{p.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary">Lihat studi kasus <ArrowUpRight className="w-4 h-4" /></span>
                </div>
              </Link>
            </Tilt>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}

export function PortfolioDetail() {
  const { slug } = useParams();
  const i = projects.findIndex((p) => p.slug === slug);
  if (i < 0) return <Navigate to="/portofolio" replace />;
  const p = projects[i]; const next = projects[(i + 1) % projects.length];
  return (
    <div key={slug}>
      <section className="relative overflow-hidden pt-36 pb-12">
        <VRStage className="absolute inset-0 opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6">
          <Link to="/portofolio" className="text-sm font-semibold text-slate-400 hover:text-white">← Portofolio</Link>
          <span className="eyebrow ml-4">{p.cat}</span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight max-w-4xl leading-[1.05]">{p.title}</h1>
          <p className="mt-5 text-lg text-slate-300 max-w-2xl">{p.desc}</p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 pb-16 scene">
        <Tilt max={4} className="rounded-3xl overflow-hidden border border-white/10 aspect-[16/8] relative">
          <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
        </Tilt>
      </section>
      <section className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-6">
        {[['Persoalan', p.problem], ['Pendekatan', p.solution]].map(([h, t], k) => (
          <div key={h} className="reveal card p-8" style={{ '--d': `${k * 100}ms` }}><h2 className="text-xs font-bold tracking-widest text-primary uppercase">{h}</h2><p className="mt-3 text-slate-200 leading-relaxed">{t}</p></div>
        ))}
        <div className="reveal card p-8" style={{ '--d': '200ms' }}>
          <h2 className="text-xs font-bold tracking-widest text-primary uppercase">Hasil</h2>
          <ul className="mt-3 space-y-3">{p.result.map((r) => <li key={r} className="flex gap-3 text-slate-200"><Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />{r}</li>)}</ul>
        </div>
      </section>
      <Link to={`/portofolio/${next.slug}`} className="group flex items-center justify-between max-w-7xl mx-auto px-6 py-10 border-t border-white/10 hover:text-primary transition-colors">
        <span><span className="block text-xs tracking-[.3em] text-slate-500">PROYEK BERIKUTNYA</span><span className="text-2xl md:text-4xl font-extrabold">{next.title}</span></span>
        <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
      </Link>
    </div>
  );
}

import React, { useRef, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { projects } from '../data';
import { Tilt, CtaBand, Label } from '../components/fx';
import { ProjectShot } from '../components/visuals';
import { useParallax, CursorFollower } from '../components/interact';

// Panggung AR/VR: kubus wireframe 3D, cincin orbit, dan lantai grid bergerak
export function VRStage({ className = '' }) {
  const ref = useRef(null);
  useParallax(ref);
  return (
    <div ref={ref} className={`scene overflow-hidden ${className}`} aria-hidden="true">
      <div className="grid-floor" />
      <div className="vr-rig absolute inset-0 flex items-center justify-center preserve">
        <div className="ring" style={{ width: '22rem', height: '22rem' }} />
        <div className="ring" style={{ width: '30rem', height: '30rem', borderColor: 'rgb(var(--accent) / .3)', animationDuration: '26s', animationDirection: 'reverse' }} />
        <div className="cube float"><b /><b /><b /><b /><b /><b /></div>
      </div>
    </div>
  );
}

// Kepala halaman bersama untuk halaman dengan panggung AR/VR
export function StageHead({ label, children, text }) {
  return (
    <section className="relative overflow-hidden min-h-[78svh] flex items-end border-b rule">
      <VRStage className="absolute inset-0 md:left-1/3 opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 pt-40 pb-14 w-full">
        <Label className="page-enter">{label}</Label>
        <h1 className="mt-8 text-[2.75rem] sm:text-6xl md:text-[6rem] leading-[0.98] max-w-4xl page-enter" style={{ animationDelay: '80ms' }}>{children}</h1>
        <p className="mt-8 text-lg text-slate-300 max-w-xl leading-relaxed page-enter" style={{ animationDelay: '160ms' }}>{text}</p>
      </div>
    </section>
  );
}

export function PortfolioPage() {
  const cats = ['Semua', 'Website', 'Aplikasi', 'Desain & Video'];
  const [f, setF] = useState('Semua');
  const list = f === 'Semua' ? projects : projects.filter((p) => p.tag === f);
  const [hov, setHov] = useState(false);
  return (
    <>
      <StageHead label="Portofolio" text="Tantangan, solusi, dan hasil dari setiap proyek.">
        Proyek yang telah <span className="serif">kami kerjakan.</span>
      </StageHead>

      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="flex items-center justify-between gap-4 border-b rule mb-12">
          <div className="flex gap-x-6 gap-y-1 flex-wrap" role="tablist">
            {cats.map((c) => <button key={c} role="tab" aria-selected={f === c} onClick={() => setF(c)} className={`pb-4 -mb-px border-b whitespace-nowrap transition-colors ${f === c ? 'text-white border-white' : 'text-slate-500 border-transparent hover:text-slate-300'}`}>{c}</button>)}
          </div>
          <span className="hidden sm:inline mono text-xs text-slate-500 pb-4 shrink-0">{String(list.length).padStart(2, '0')} proyek</span>
        </div>
        <div key={f} className="grid md:grid-cols-2 gap-x-8 gap-y-16 scene">
          {list.map((p, i) => (
            <div key={p.slug} className={`page-enter ${i % 2 === 1 ? 'md:mt-20' : ''}`} style={{ animationDelay: `${i * 80}ms` }}>
              <Tilt max={6} className="rounded-[4px]">
                <Link to={`/portofolio/${p.slug}`} aria-label={p.title} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} className="group relative block rounded-[4px] overflow-hidden border border-white/[0.08] blueprint aspect-[4/3] scan md:cursor-none">
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03]"><ProjectShot shot={p.shot} /></div>
                  <i className="hud tl" /><i className="hud tr" /><i className="hud bl" /><i className="hud br" />
                  <span className="absolute top-4 left-6 mono text-[11px] text-white/80 depth-1">{String(i + 1).padStart(2, '0')}</span>
                </Link>
              </Tilt>
              <Link to={`/portofolio/${p.slug}`} className="group block mt-5">
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="text-2xl md:text-3xl group-hover:text-primary-soft transition-colors">{p.title}</h2>
                  <span className="mono text-xs text-slate-500 shrink-0">{p.cat}</span>
                </div>
                <p className="mt-2 text-slate-400 max-w-md">{p.desc}</p>
                <span className="link mt-4 text-sm">Lihat proyek <ArrowUpRight className="w-4 h-4" /></span>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <CursorFollower show={hov}>
        <span className="w-24 h-24 rounded-full bg-white text-slate-950 flex items-center justify-center mono text-[11px] uppercase tracking-wide">Buka <ArrowUpRight className="w-3.5 h-3.5 ml-1" /></span>
      </CursorFollower>
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
        <VRStage className="absolute inset-0 md:left-1/2 opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-6 mono text-xs text-slate-500">
            <Link to="/portofolio" className="hover:text-white">← Portofolio</Link>
            <span>{p.cat}</span>
          </div>
          <h1 className="mt-10 text-[2.75rem] sm:text-6xl md:text-[5.5rem] leading-[0.98] max-w-5xl">{p.title}</h1>
          <p className="mt-8 text-lg text-slate-300 max-w-2xl leading-relaxed">{p.desc}</p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 pb-16 scene">
        <Tilt max={4} className="rounded-[6px] overflow-hidden aspect-[4/3] md:aspect-[16/9] relative border border-white/[0.08] blueprint">
          <div className="absolute inset-0 md:inset-x-[12%]"><ProjectShot shot={p.shot} /></div>
        </Tilt>
      </section>
      <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-3 border-t rule">
        {[['Tantangan', p.problem, 'text-rose-300'], ['Solusi', p.solution, 'text-amber-200']].map(([h, t, c], k) => (
          <div key={h} className="reveal group py-10 md:pr-10 border-b md:border-b-0 md:border-r rule md:[&:nth-child(2)]:px-10" style={{ '--d': `${k * 120}ms` }}>
            <span className={`mono text-xs uppercase tracking-wide ${c}`}>0{k + 1} · {h}</span>
            <p className="mt-5 text-xl text-slate-200 leading-relaxed">{t}</p>
          </div>
        ))}
        <div className="reveal py-10 md:pl-10" style={{ '--d': '240ms' }}>
          <span className="mono text-xs uppercase tracking-wide text-emerald-300">03 · Hasil</span>
          <ul className="mt-5 space-y-4">{p.result.map((r, n) => <li key={r} className="group flex gap-4 text-lg text-slate-200 transition-transform duration-500 hover:translate-x-1"><span className="num-outline display text-2xl leading-none">{n + 1}</span>{r}</li>)}</ul>
        </div>
      </section>
      <Link to={`/portofolio/${next.slug}`} className="group block px-6 py-16 border-t rule">
        <div className="max-w-7xl mx-auto flex items-end justify-between gap-6">
          <div>
            <span className="label">Proyek berikutnya</span>
            <span className="block mt-4 display text-3xl md:text-6xl group-hover:text-primary-soft transition-colors">{next.title}</span>
          </div>
          <ArrowRight className="w-8 h-8 text-slate-500 group-hover:text-white group-hover:translate-x-2 transition-all shrink-0" />
        </div>
      </Link>
    </div>
  );
}

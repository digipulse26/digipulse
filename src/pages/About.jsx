import React, { useRef } from 'react';
import { Particles, CtaBand, Label } from '../components/fx';
import { Parallax, Layer, useScrollVelocity } from '../components/interact';
import { tools } from '../data';

const values = [
  { t: 'Sesuai kebutuhan', d: 'Hanya fitur yang benar-benar dipakai.' },
  { t: 'Mudah dikembangkan', d: 'Kode rapi, mudah diteruskan siapa pun.' },
  { t: 'Aman & andal', d: 'Keamanan dan performa diperiksa sejak awal.' },
  { t: 'Kolaborasi terbuka', d: 'Setiap keputusan dibahas bersama.' },
];

const roles = ['Desain', 'Kode', 'Perangkat', 'Strategi'];
const palette = ['#38BDF8', '#A78BFA', '#34D399', '#FBBF24'];
const scope = ['Website', 'Aplikasi web', 'SaaS', 'Integrasi', 'IoT', 'Desain & video'];
const eco = [
  ['react', 'next', 'node', 'laravel', 'postgres', 'docker', 'aws', 'cloudflare', 'vercel', 'xendit', 'stripe'],
  ['esp32', 'raspberrypi', 'arduino', 'mqtt', 'grafana', 'figma', 'illustrator', 'photoshop', 'premiere', 'canva', 'davinci'],
];

// Deretan logo yang berjalan; lajunya mengikuti kecepatan gulir
function LogoRow({ items, rev }) {
  const ref = useRef(null);
  useScrollVelocity(ref);
  const row = items.map((it) => (
    <span key={it} title={tools[it]} className="mx-2 w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-[6px] bg-slate-100 flex items-center justify-center transition-transform duration-300 hover:-translate-y-1.5 hover:rotate-[-4deg]">
      <img src={`${import.meta.env.BASE_URL}logos/${it}.svg`} alt={tools[it]} width="36" height="36" loading="lazy" decoding="async" className="w-[40%] h-[40%] object-contain" />
    </span>
  ));
  return (
    <div ref={ref} className={`marquee ${rev ? 'rev' : ''} py-2 hover:[&_.marquee-track]:[animation-play-state:paused]`}>
      <div className="marquee-track">{row}</div>
      <div className="marquee-track" aria-hidden="true">{row}</div>
    </div>
  );
}

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden min-h-[92svh] flex items-end">
        <Parallax className="absolute inset-0">
          <Layer z={-40} className="absolute inset-0"><div className="aurora"><i /><i /><i /></div></Layer>
          <Particles />
          <Layer z={30} className="absolute right-[-8rem] top-28 hidden md:block pointer-events-none"><div className="w-[26rem] h-[26rem] border border-primary-soft/25 liquid" /></Layer>
          <Layer z={60} className="absolute right-[-4rem] top-40 hidden md:block pointer-events-none"><div className="w-[20rem] h-[20rem] bg-primary/10 liquid" style={{ animationDelay: '-6s' }} /></Layer>
        </Parallax>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-16 w-full">
          <Label className="page-enter">Tentang DigiPulse</Label>
          <h1 className="mt-8 text-[2.75rem] sm:text-6xl md:text-[6.5rem] leading-[0.98] max-w-5xl page-enter" style={{ animationDelay: '80ms' }}>
            Studio digital yang mengutamakan <span className="serif">kebutuhan klien.</span>
          </h1>
          <div className="mt-12 pt-6 border-t rule grid md:grid-cols-12 gap-6 page-enter" style={{ animationDelay: '160ms' }}>
            <p className="md:col-span-6 text-lg text-slate-300 leading-relaxed">
              Kami membantu usaha dan institusi membangun produk digital yang tepat guna.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32 border-t rule">
        <div className="max-w-7xl mx-auto">
          <div className="reveal">
            <Label>Siapa kami</Label>
            <p className="mt-8 display text-[3.2rem] sm:text-7xl md:text-[7.5rem] leading-[0.92] tracking-[-0.045em]">
              {roles.map((r, i) => (
                <React.Fragment key={r}>
                  <span className="cycle inline-block transition-transform duration-300 hover:-translate-y-2" style={{ '--i': i, '--cc': palette[i] }}>{r}</span>
                  {i < roles.length - 1 && <span className="serif text-slate-400"> + </span>}
                </React.Fragment>
              ))}
            </p>
          </div>
          <div className="mt-14 pt-6 border-t rule grid md:grid-cols-12 gap-6 reveal" style={{ '--d': '120ms' }}>
            <p className="md:col-span-5 text-xl text-slate-200 leading-snug">Cukup satu tim untuk semua kebutuhan digital usaha Anda.</p>
            <ul className="md:col-span-6 md:col-start-7 flex flex-wrap gap-x-5 gap-y-2 mono text-xs uppercase tracking-wide text-slate-500">
              {scope.map((s, i) => <li key={s}><span className="text-primary-soft">0{i + 1}</span> {s}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-24 md:py-32 border-t rule overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          <div className="reveal max-w-3xl">
            <Label>Prinsip kerja</Label>
            <h2 className="mt-6 text-4xl md:text-6xl leading-[1.02]">Yang kami pegang di <span className="serif">setiap proyek.</span></h2>
          </div>
          <ol className="mt-16 grid sm:grid-cols-2 border-t rule">
            {values.map((v, i) => (
              <li key={v.t} style={{ '--d': `${(i % 2) * 100}ms`, '--gc': palette[i] }} className="reveal group relative py-10 border-b rule sm:[&:nth-child(odd)]:pr-10 sm:[&:nth-child(even)]:pl-10 sm:[&:nth-child(odd)]:border-r overflow-hidden">
                <span className="absolute inset-0 blueprint opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex items-start gap-6">
                  <span className="num-outline display text-7xl leading-[.8]">{i + 1}</span>
                  <div>
                    <h3 className="text-2xl md:text-3xl transition-transform duration-500 group-hover:translate-x-1">{v.t}</h3>
                    <p className="mt-2 text-slate-400 leading-relaxed">{v.d}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-24 md:py-32 border-t rule overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 reveal">
          <Label>Ekosistem</Label>
          <h2 className="mt-6 text-4xl md:text-5xl leading-[1.02]">Teknologi yang <span className="serif">teruji.</span></h2>
        </div>
        <div className="mt-12 space-y-3">
          <LogoRow items={eco[0]} />
          <LogoRow items={eco[1]} rev />
        </div>
      </section>
      <CtaBand />
    </>
  );
}

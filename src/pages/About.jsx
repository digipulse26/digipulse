import React from 'react';
import { Target, Layers, ShieldCheck, Handshake, PenTool, Code, Cpu, Compass, Globe, AppWindow, Cloud, Workflow, Radio, Palette } from 'lucide-react';
import { Particles, CtaBand, Label } from '../components/fx';
import { tools } from '../data';

const values = [
  { I: Target, t: 'Sesuai kebutuhan', d: 'Hanya fitur yang benar-benar dipakai.' },
  { I: Layers, t: 'Mudah dikembangkan', d: 'Kode rapi, mudah diteruskan siapa pun.' },
  { I: ShieldCheck, t: 'Aman & andal', d: 'Keamanan dan performa diperiksa sejak awal.' },
  { I: Handshake, t: 'Kolaborasi terbuka', d: 'Setiap keputusan dibahas bersama.' },
];

const roles = [[PenTool, 'Desainer'], [Code, 'Engineer'], [Cpu, 'IoT'], [Compass, 'Strategi']];
const scope = [[Globe, 'Website'], [AppWindow, 'Aplikasi web'], [Cloud, 'SaaS'], [Workflow, 'Integrasi'], [Radio, 'IoT'], [Palette, 'Desain & video']];
const eco = ['react', 'next', 'node', 'laravel', 'postgres', 'docker', 'aws', 'cloudflare', 'vercel', 'xendit', 'esp32', 'raspberrypi', 'figma', 'illustrator', 'premiere', 'canva'];

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden min-h-[92svh] flex items-end">
        <div className="aurora"><i /><i /><i /></div>
        <Particles />
        <div className="absolute right-[-8rem] top-28 w-[26rem] h-[26rem] border border-primary-soft/25 liquid pointer-events-none hidden md:block" />
        <div className="absolute right-[-4rem] top-40 w-[20rem] h-[20rem] bg-primary/10 liquid pointer-events-none hidden md:block" style={{ animationDelay: '-6s' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-16 w-full">
          <Label className="page-enter">Tentang DigiPulse</Label>
          <h1 className="mt-8 text-[2.75rem] sm:text-6xl md:text-[6.5rem] leading-[0.98] max-w-5xl page-enter" style={{ animationDelay: '80ms' }}>
            Studio digital yang mengutamakan <span className="serif">kebutuhan klien.</span>
          </h1>
          <div className="mt-12 pt-6 border-t rule grid md:grid-cols-12 gap-6 page-enter" style={{ animationDelay: '160ms' }}>
            <p className="md:col-span-6 text-lg text-slate-300 leading-relaxed">
              Kami membantu bisnis dan institusi membangun produk digital yang tepat guna.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32 border-t rule">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5 reveal">
            <Label>Siapa kami</Label>
            <h2 className="mt-6 text-4xl md:text-5xl leading-[1.02]">Tim ringkas yang bekerja <span className="serif">dekat</span> dengan setiap klien.</h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 reveal" style={{ '--d': '120ms' }}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {roles.map(([I, t], i) => (
                <div key={t} className="panel aspect-square flex flex-col items-center justify-center gap-3 float" style={{ '--d': `${i * -1.5}s` }}>
                  <span className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary-soft/40 text-primary-soft flex items-center justify-center"><I className="w-6 h-6" /></span>
                  <span className="text-sm text-slate-200">{t}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-lg text-slate-300 leading-relaxed">Dari layar hingga sensor, ditangani oleh satu tim.</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {scope.map(([I, s]) => <li key={s} className="inline-flex items-center gap-2 rounded-full border border-white/12 px-3 py-1.5 text-sm text-slate-300"><I className="w-4 h-4 text-primary-soft" />{s}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-24 md:py-32 border-t rule overflow-hidden">
        <div className="aurora opacity-60"><i /><i /></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="reveal max-w-3xl">
            <Label>Prinsip kerja</Label>
            <h2 className="mt-6 text-4xl md:text-6xl leading-[1.02]">Prinsip yang kami terapkan dalam <span className="serif">setiap proyek.</span></h2>
          </div>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <div key={v.t} style={{ '--d': `${i * 80}ms` }} className="reveal panel p-7">
                <span className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary-soft/40 text-primary-soft flex items-center justify-center"><v.I className="w-6 h-6" /></span>
                <h3 className="mt-8 text-2xl">{v.t}</h3>
                <p className="mt-2 text-slate-400 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32 border-t rule">
        <div className="max-w-7xl mx-auto">
          <div className="reveal">
            <Label>Ekosistem</Label>
            <h2 className="mt-6 text-4xl md:text-5xl leading-[1.02]">Teknologi yang <span className="serif">teruji.</span></h2>
          </div>
          <ul className="mt-12 grid grid-cols-4 sm:grid-cols-8 gap-3">
            {eco.map((it, i) => (
              <li key={it} title={tools[it]} style={{ '--d': `${(i % 8) * 50}ms` }} className="reveal aspect-square rounded-xl bg-slate-100 flex items-center justify-center transition-transform hover:-translate-y-1">
                <img src={`${import.meta.env.BASE_URL}logos/${it}.svg`} alt={tools[it]} width="32" height="32" loading="lazy" decoding="async" className="w-[42%] h-[42%] object-contain" />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

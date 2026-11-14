import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { services, steps, tools } from '../data';
import { Marquee, CtaBand, Rules, Label } from '../components/fx';

export function Kinetic({ text, wave = false, className = '' }) {
  return (
    <span className={className} aria-label={text}>
      {text.split('').map((ch, i) => (
        <span key={i} aria-hidden="true" className="kin" style={{ '--i': i }}>
          {wave ? <span className="kchar" style={{ '--i': i }}>{ch === ' ' ? ' ' : ch}</span> : (ch === ' ' ? ' ' : ch)}
        </span>
      ))}
    </span>
  );
}

export function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-14">
        <Rules />
        <div className="relative max-w-7xl mx-auto px-6">
          <Label n={`0${services.length}`}>Layanan</Label>
          <h1 className="mt-6 font-bold tracking-[-0.05em] leading-[0.85] text-[18vw] md:text-[12rem]">
            <span className="glitch auto" data-text="Layanan"><Kinetic text="Layanan" wave /></span>
          </h1>
          <div className="mt-10 pt-6 border-t rule grid md:grid-cols-12 gap-6">
            <p className="md:col-span-6 text-lg text-slate-300 leading-relaxed">
              Setiap bisnis memiliki tantangan yang berbeda. Kami membantu Anda menentukan apa yang perlu dibangun, lalu mengerjakannya melalui proses yang jelas dan efisien.
            </p>
          </div>
        </div>
      </section>

      <div className="py-5 border-y rule display text-5xl md:text-7xl font-bold outline-text overflow-hidden">
        <Marquee items={['Web', 'Aplikasi', 'SaaS', 'UI/UX', 'API', 'IoT', 'Desain', 'Video']} />
      </div>

      <section className="max-w-7xl mx-auto px-6 py-16">
        {services.map((s) => (
          <Link key={s.slug} to={`/layanan/${s.slug}`} className="svc-row reveal group grid grid-cols-12 gap-4 items-baseline py-8 border-b rule">
            <span className="col-span-2 md:col-span-1 mono text-xs text-slate-500">{s.no}</span>
            <h2 className="svc-title col-span-10 md:col-span-6 text-[2.4rem] leading-none md:text-6xl font-bold"><span className="fill glitch" data-text={s.title}>{s.title}</span></h2>
            <p className="col-span-12 md:col-span-4 text-slate-400 leading-relaxed">{s.short}</p>
            <ArrowUpRight className="hidden md:block col-span-1 justify-self-end w-6 h-6 text-slate-500 group-hover:text-white transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        ))}
      </section>
      <CtaBand />
    </>
  );
}

export function ServiceDetail() {
  const { slug } = useParams();
  const idx = services.findIndex((s) => s.slug === slug);
  if (idx < 0) return <Navigate to="/layanan" replace />;
  const s = services[idx];
  const next = services[(idx + 1) % services.length];
  const [first, ...rest] = s.title.split(' ');
  return (
    <div key={slug}>
      <section className="relative overflow-hidden pt-36 pb-14">
        <Rules />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-6 mono text-xs text-slate-500">
            <Link to="/layanan" className="hover:text-white">← Semua layanan</Link>
            <span>{s.no} / 0{services.length}</span>
          </div>
          <h1 className="mt-10 font-bold tracking-[-0.05em] leading-[0.9] text-[14vw] md:text-[9rem] break-words">
            <span className="glitch auto" data-text={first}><Kinetic text={first} wave /></span>
            {rest.length > 0 && <><br /><span className="serif font-normal tracking-[-0.02em]"><Kinetic text={rest.join(' ')} /></span></>}
          </h1>
          <div className="mt-10 pt-6 border-t rule grid md:grid-cols-12 gap-6 items-end">
            <p className="md:col-span-6 text-xl text-slate-300 leading-relaxed">{s.desc}</p>
            <div className="md:col-span-4 md:col-start-9 md:justify-self-end">
              <Link to="/kontak" className="btn btn-primary">Konsultasikan layanan ini <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      <div className="py-5 border-y rule display text-3xl md:text-5xl text-slate-600 overflow-hidden"><Marquee items={s.tags} rev /></div>

      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4 reveal">
          <Label>Manfaat untuk Anda</Label>
          <h2 className="mt-6 text-4xl md:text-5xl leading-[1.02]">Cakupan <span className="serif">pekerjaan.</span></h2>
          <p className="mt-6 text-slate-400 leading-relaxed">{s.short}</p>
        </div>
        <ol className="md:col-span-7 md:col-start-6 border-t rule">
          {s.points.map((p, i) => (
            <li key={p} style={{ '--d': `${i * 80}ms` }} className="reveal reveal-r grid grid-cols-12 gap-4 py-6 border-b rule">
              <span className="col-span-2 mono text-xs text-primary-soft pt-1.5">0{i + 1}</span>
              <span className="col-span-10 text-lg text-slate-200 leading-snug">{p}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <Label>Teknologi &amp; tools</Label>
            <h2 className="mt-6 text-4xl md:text-5xl leading-[1.02]">Teknologi <span className="serif">pendukung.</span></h2>
          </div>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l rule">
          {s.stack.map((grp, i) => (
            <div key={grp.g} style={{ '--d': `${i * 80}ms` }} className="reveal p-6 border-r border-b rule">
              <p className="mono text-xs uppercase tracking-wide text-slate-500">{grp.g}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {grp.items.map((it) => (
                  <span key={it} title={tools[it]} className="w-14 h-14 rounded-[4px] bg-slate-100 flex items-center justify-center transition-transform hover:-translate-y-1">
                    {it === 'capcut'
                      ? <span className="text-[11px] font-semibold text-slate-900">CapCut</span>
                      : <img src={`${import.meta.env.BASE_URL}logos/${it}.svg`} alt={tools[it]} width="30" height="30" loading="lazy" decoding="async" className="w-[30px] h-[30px] object-contain" />}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t rule px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="reveal"><Label>Proses</Label><h2 className="mt-6 text-4xl md:text-5xl leading-[1.02]">Cara kami <span className="serif">mengerjakannya.</span></h2></div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 border-t rule">
            {steps.slice(0, 4).map((st, i) => (
              <div key={st.t} style={{ '--d': `${i * 80}ms` }} className="reveal py-8 lg:pr-8 border-b lg:border-b-0 rule">
                <span className="mono text-xs text-primary-soft">0{i + 1}</span>
                <h3 className="mt-4 text-xl">{st.t}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{st.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Link to={`/layanan/${next.slug}`} className="group block px-6 py-20 border-t rule">
        <div className="max-w-7xl mx-auto flex items-end justify-between gap-6">
          <div>
            <span className="label">Layanan berikutnya</span>
            <span className="block mt-4 display text-4xl md:text-7xl font-bold outline-text group-hover:text-white group-hover:[-webkit-text-stroke:0] transition-colors">{next.title}</span>
          </div>
          <ArrowRight className="w-8 h-8 md:w-12 md:h-12 text-slate-500 group-hover:text-white group-hover:translate-x-2 transition-all shrink-0" />
        </div>
      </Link>
    </div>
  );
}

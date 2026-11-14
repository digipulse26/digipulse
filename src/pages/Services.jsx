import React, { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { services, tools, groups, groupOf } from '../data';
import { Marquee, CtaBand, Rules, Label, ConsultLink } from '../components/fx';
import { CursorFollower } from '../components/interact';
import { GroupVisual, ServiceVisual, Gallery } from '../components/visuals';
import { ServicePlay } from '../components/play';

const flow = [['Konsultasi', 'Solusi tepat'], ['Analisis', 'Rencana matang'], ['Desain', 'Desain menarik'], ['Pengerjaan', 'Sistem optimal']];

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
  // Pratinjau visual layanan yang mengikuti kursor saat baris disorot (laptop)
  const [hov, setHov] = useState(null);
  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-14">
        <Rules />
        <div className="relative max-w-7xl mx-auto px-6">
          <Label n={`0${groups.length}`}>Kelompok layanan</Label>
          <h1 className="mt-6 font-bold tracking-[-0.05em] leading-[0.85] text-[18vw] md:text-[12rem]">
            <span className="glitch auto" data-text="Layanan"><Kinetic text="Layanan" wave /></span>
          </h1>
          <div className="mt-10 pt-6 border-t rule grid md:grid-cols-12 gap-6">
            <p className="md:col-span-6 text-lg text-slate-300 leading-relaxed">
              Empat bidang layanan. Pilih yang sesuai, atau diskusikan dulu dengan kami.
            </p>
          </div>
        </div>
      </section>

      <div className="py-5 border-y rule display text-5xl md:text-7xl font-bold outline-text overflow-hidden">
        <Marquee items={['Web', 'Aplikasi', 'SaaS', 'UI/UX', 'API', 'IoT', 'Desain', 'Video']} />
      </div>

      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        {groups.map((g, gi) => (
          <div key={g.slug} id={g.slug} className="scroll-mt-28 grid md:grid-cols-12 gap-6 md:gap-10 py-14 border-b rule first:pt-0">
            <div className="md:col-span-4 reveal">
              <div className="md:sticky md:top-28">
                <span className="mono text-xs text-primary-soft">0{gi + 1} / 0{groups.length}</span>
                <h2 className="mt-4 text-4xl md:text-5xl leading-[1.02]">{g.title}</h2>
                <p className="mt-4 text-xl text-white leading-snug">{g.hook}</p>
                <div className="mt-8 blueprint rounded-[6px] border border-white/[0.08] p-5"><GroupVisual slug={g.slug} /></div>
                <p className="mt-5 text-sm text-slate-500">Sesuai untuk <span className="text-slate-300">{g.who}</span></p>
              </div>
            </div>
            <div className="md:col-span-8 border-t rule">
              {g.items.map((slug) => { const s = services.find((x) => x.slug === slug); return (
                <Link key={slug} to={`/layanan/${slug}`} onMouseEnter={() => setHov(slug)} onMouseLeave={() => setHov(null)} className="svc-row reveal group grid grid-cols-12 gap-4 items-baseline py-7 border-b rule last:border-b-0">
                  <h3 className="svc-title col-span-12 md:col-span-7 text-[2.1rem] leading-none md:text-5xl font-bold"><span className="fill glitch" data-text={s.title}>{s.title}</span></h3>
                  <p className="col-span-11 md:col-span-4 text-slate-400 leading-relaxed">{s.short}</p>
                  <ArrowUpRight className="col-span-1 justify-self-end w-6 h-6 text-slate-500 group-hover:text-white transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              ); })}
            </div>
          </div>
        ))}
      </section>
      <CursorFollower show={!!hov}>
        <div className="w-[24rem] translate-x-[55%] -translate-y-[10%] blueprint bg-background/95 rounded-[6px] border border-white/15 p-6 shadow-2xl shadow-black/60">
          {hov && <div key={hov} className="swap-in"><ServiceVisual slug={hov} /></div>}
        </div>
      </CursorFollower>
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
  const g = groupOf(s.slug);
  return (
    <div key={slug}>
      <section className="relative overflow-hidden pt-36 pb-14">
        <Rules />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-6 mono text-xs text-slate-500">
            <Link to="/layanan" className="hover:text-white">← Semua layanan</Link>
            {g && <Link to={`/layanan#${g.slug}`} className="hover:text-white">{g.title}</Link>}
          </div>
          <h1 className="mt-10 font-bold tracking-[-0.05em] leading-[0.9] text-[14vw] md:text-[9rem] break-words">
            <span className="glitch auto" data-text={first}><Kinetic text={first} wave /></span>
            {rest.length > 0 && <><br /><span className="serif font-normal tracking-[-0.02em]"><Kinetic text={rest.join(' ')} /></span></>}
          </h1>
          <div className="mt-10 pt-6 border-t rule grid md:grid-cols-12 gap-6 items-end">
            <p className="md:col-span-6 text-xl text-slate-300 leading-relaxed">{s.desc}</p>
            <div className="md:col-span-5 md:col-start-8 md:justify-self-end md:text-right">
              <ConsultLink className="btn btn-primary">Konsultasikan layanan ini <ArrowRight className="w-4 h-4" /></ConsultLink>
              <p className="mt-3 text-sm text-slate-500">Perkembangan dapat dipantau · Pendampingan setelah peluncuran</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="relative overflow-hidden blueprint rounded-[6px] border border-white/[0.08] px-5 py-8 sm:px-10 md:py-12">
          <i className="hud tl" /><i className="hud tr" /><i className="hud bl" /><i className="hud br" />
          <ServicePlay slug={s.slug} />
        </div>
      </section>

      <div className="py-5 border-y rule display text-3xl md:text-5xl text-slate-600 overflow-hidden"><Marquee items={s.tags} rev /></div>

      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4 reveal">
          <Label>Lingkup pekerjaan</Label>
          <h2 className="mt-6 text-4xl md:text-5xl leading-[1.02]">Yang kami <span className="serif">kerjakan.</span></h2>
        </div>
        <ol className="md:col-span-8 md:col-start-5 grid sm:grid-cols-2 border-t rule">
          {s.points.map((p, i) => (
            <li key={p} style={{ '--d': `${i * 80}ms` }} className={`reveal group py-8 border-b rule sm:[&:nth-child(odd)]:pr-8 sm:[&:nth-child(even)]:pl-8 sm:[&:nth-child(odd)]:border-r`}>
              <span className="num-outline display text-6xl leading-none">0{i + 1}</span>
              <p className="mt-5 text-lg text-slate-200 leading-snug transition-transform duration-500 group-hover:translate-x-1">{p}</p>
            </li>
          ))}
        </ol>
      </section>

      {(s.slug === 'graphic-design' || s.slug === 'video-editing') && (
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="reveal mb-12"><Label>Contoh karya</Label><h2 className="mt-6 text-4xl md:text-5xl leading-[1.02]">Hasil yang bisa <span className="serif">Anda dapatkan.</span></h2></div>
          <Gallery slug={s.slug} />
        </section>
      )}

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
          <ol className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-y-10 reveal flow">
            {flow.map(([t, d], i) => (
              <li key={t} className="relative pr-6 group">
                <span className="flow-line block h-px bg-primary-soft origin-left" style={{ transitionDelay: `${i * 250}ms` }} />
                <span className="mt-5 block mono text-xs text-primary-soft">Langkah 0{i + 1}</span>
                <h3 className="mt-3 text-2xl transition-colors group-hover:text-primary-soft">{t}</h3>
                <p className="mt-1 text-sm text-slate-400">{d}</p>
              </li>
            ))}
          </ol>
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

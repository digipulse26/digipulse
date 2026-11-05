import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { services, steps, tools } from '../data';
import { Marquee, CtaBand } from '../components/fx';

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
      <section className="relative overflow-hidden pt-36 pb-12">
        <div className="absolute inset-0 pointer-events-none"><div className="absolute -top-20 right-0 w-[30rem] h-[30rem] rounded-full bg-accent/20 blur-[100px]" /></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="eyebrow">Layanan</span>
          <h1 className="mt-6 font-black tracking-tighter leading-[0.9] text-[17vw] md:text-[11rem]">
            <span className="glitch auto text-white" data-text="LAYANAN"><Kinetic text="LAYANAN" wave /></span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
            Mulailah dari persoalan yang nyata. Kami bantu memilih apa yang perlu dibangun, lalu mengerjakannya tanpa membuat prosesnya lebih rumit dari yang seharusnya.
          </p>
        </div>
      </section>

      <div className="py-6 border-y border-white/5 text-5xl md:text-7xl font-black outline-text overflow-hidden">
        <Marquee items={['WEB', 'APP', 'SAAS', 'UI/UX', 'API', 'IOT', 'DESAIN', 'VIDEO']} />
      </div>

      <section className="max-w-7xl mx-auto px-6 py-16">
        {services.map((s) => (
          <Link key={s.slug} to={`/layanan/${s.slug}`} className="svc-row reveal group grid md:grid-cols-12 gap-4 items-center py-8 border-b border-white/10 rounded-lg">
            <span className="md:col-span-1 text-sm font-bold text-primary tracking-widest">{s.no}</span>
            <h2 className="svc-title md:col-span-6 text-4xl md:text-6xl font-black tracking-tight"><span className="fill glitch" data-text={s.title}>{s.title}</span></h2>
            <p className="md:col-span-4 text-slate-400 leading-relaxed">{s.short}</p>
            <span className="md:col-span-1 md:justify-self-end w-12 h-12 rounded-full border border-white/15 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors"><ArrowUpRight className="w-5 h-5" /></span>
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
      <section className="relative overflow-hidden pt-36 pb-16">
        <div className="absolute inset-0 pointer-events-none"><div className="absolute top-0 -left-20 w-[28rem] h-[28rem] rounded-full bg-primary/25 blur-[100px]" /></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <Link to="/layanan" className="text-sm font-semibold text-slate-400 hover:text-white">← Semua layanan</Link>
          <p className="mt-8 text-sm font-bold tracking-widest text-primary">{s.no} / 0{services.length}</p>
          <h1 className="mt-3 font-black tracking-tighter leading-[0.95] text-[13vw] md:text-[8.5rem] break-words">
            <span className="glitch auto" data-text={first}><Kinetic text={first} wave /></span>
            {rest.length > 0 && <><br /><span className="outline-text"><Kinetic text={rest.join(' ')} /></span></>}
          </h1>
          <p className="mt-8 text-xl text-slate-300 max-w-2xl leading-relaxed">{s.desc}</p>
          <Link to="/kontak" className="btn btn-primary mt-8">Diskusikan layanan ini <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>

      <div className="py-5 border-y border-white/5 text-3xl md:text-5xl font-black text-slate-500 overflow-hidden"><Marquee items={s.tags} rev /></div>

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
        <div className="reveal"><span className="eyebrow">Yang Anda dapatkan</span><h2 className="mt-5 text-3xl md:text-4xl font-extrabold tracking-tight">Cakupan pekerjaan</h2></div>
        <ul className="space-y-4">
          {s.points.map((p, i) => (
            <li key={p} style={{ '--d': `${i * 80}ms` }} className="reveal reveal-r card p-5 flex items-start gap-4 hover:border-primary/40 transition-colors">
              <span className="mt-0.5 w-7 h-7 rounded-full bg-primary/15 text-primary flex items-center justify-center flex-shrink-0"><Check className="w-4 h-4" /></span>
              <span className="text-slate-200">{p}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="reveal"><span className="eyebrow">Teknologi &amp; tools</span><h2 className="mt-5 text-3xl md:text-4xl font-extrabold tracking-tight">Yang kami pakai untuk layanan ini</h2></div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {s.stack.map((grp, i) => (
            <div key={grp.g} style={{ '--d': `${i * 80}ms` }} className="reveal card p-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary">{grp.g}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {grp.items.map((it) => (
                  <span key={it} title={tools[it]} className="group/logo w-14 h-14 rounded-2xl bg-white/90 flex items-center justify-center hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30 transition-all">
                    {it === 'capcut'
                      ? <span className="text-[11px] font-black text-slate-900">CapCut</span>
                      : <img src={`${import.meta.env.BASE_URL}logos/${it}.svg`} alt={tools[it]} width="32" height="32" loading="lazy" decoding="async" className="w-8 h-8 object-contain" />}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/30 border-y border-white/5 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="reveal text-3xl md:text-4xl font-extrabold tracking-tight">Bagaimana kami mengerjakannya</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.slice(0, 4).map((st, i) => (
              <div key={st.t} style={{ '--d': `${i * 80}ms` }} className="reveal card p-6">
                <span className="text-5xl font-black outline-text">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-bold">{st.t}</h3>
                <p className="mt-1 text-sm text-slate-400 leading-relaxed">{st.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Link to={`/layanan/${next.slug}`} className="group block px-6 py-20 text-center hover:bg-primary/5 transition-colors">
        <span className="text-xs tracking-[.3em] text-slate-500">LAYANAN BERIKUTNYA</span>
        <span className="block mt-3 text-4xl md:text-7xl font-black tracking-tight outline-text group-hover:text-gradient group-hover:[-webkit-text-stroke:0] transition-all">{next.title}</span>
      </Link>
    </div>
  );
}

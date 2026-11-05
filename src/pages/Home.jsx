import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Ear, Compass, Hammer, LifeBuoy } from 'lucide-react';
import { services, projects, steps } from '../data';
import { useScrollyProgress } from '../hooks';
import { Marquee, CtaBand } from '../components/fx';

const chapters = [
  { icon: Ear, k: 'Dengar', t: 'Kami mulai dari mendengar, bukan menawarkan.', d: 'Sebelum menyentuh desain atau kode, kami memahami bisnis Anda: siapa penggunanya, apa yang menghambat, dan hasil seperti apa yang dianggap berhasil.' },
  { icon: Compass, k: 'Rancang', t: 'Jalurnya digambar dulu supaya tidak tersesat.', d: 'Kebutuhan dipetakan menjadi alur pengguna, struktur halaman, dan prioritas fitur. Anda bisa melihat dan mengoreksi arah sebelum pengembangan dimulai.' },
  { icon: Hammer, k: 'Bangun', t: 'Dikerjakan bertahap, bisa dicoba setiap saat.', d: 'Hasil kerja dirilis ke lingkungan uji secara berkala. Anda ikut melihat kemajuan nyata, bukan menunggu kejutan di akhir.' },
  { icon: LifeBuoy, k: 'Dampingi', t: 'Setelah rilis, kami tetap ada.', d: 'Domain, pemantauan, dan perbaikan lanjutan kami siapkan agar produk terus sehat dan bisa tumbuh bersama kebutuhan Anda.' },
];

function Scrolly() {
  const [ref, active] = useScrollyProgress(chapters.length);
  return (
    <section ref={ref} className="relative" style={{ height: `${chapters.length * 90 + 40}vh` }} aria-label="Cara kami bekerja">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <div className="scrolly-orb absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[34rem] rounded-full bg-primary/25 blur-[90px] pointer-events-none" />
        <div className="absolute top-24 left-0 right-0 max-w-7xl mx-auto px-6">
          <div className="h-[3px] bg-white/10 rounded-full overflow-hidden"><div className="scrolly-bar h-full bg-gradient-to-r from-primary to-accent" /></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-8 md:gap-16 items-center pt-16">
          <div className="relative min-h-[17rem] md:min-h-[24rem]">
            {chapters.map((c, i) => (
              <div key={c.k} className="scrolly-layer absolute inset-0 flex flex-col justify-center" style={{ opacity: active === i ? 1 : 0, transform: active === i ? 'none' : `translate3d(0, ${i < active ? -40 : 40}px, 0)`, pointerEvents: active === i ? 'auto' : 'none' }} aria-hidden={active !== i}>
                <span className="text-7xl md:text-9xl font-black outline-text leading-none">0{i + 1}</span>
                <span className="eyebrow mt-6 self-start">{c.k}</span>
                <h2 className="mt-4 text-2xl md:text-4xl font-extrabold tracking-tight leading-tight">{c.t}</h2>
                <p className="mt-4 text-slate-400 leading-relaxed max-w-lg">{c.d}</p>
              </div>
            ))}
          </div>
          <div className="relative h-56 md:h-[26rem] flex items-center justify-center scene">
            {chapters.map((c, i) => {
              const Icon = c.icon; const off = i - active;
              return (
                <div key={c.k} className="scrolly-layer absolute w-52 h-40 md:w-80 md:h-56 rounded-3xl border flex items-center justify-center backdrop-blur-sm"
                  style={{ transform: `translate3d(${off * 26}px, ${off * -22}px, ${-Math.abs(off) * 60}px) rotate(${off * 3}deg)`, opacity: off < 0 ? 0 : 1 - off * 0.28, zIndex: 10 - Math.abs(off), background: active === i ? 'rgb(var(--primary) / .22)' : 'rgb(var(--secondary) / .85)', borderColor: active === i ? 'rgb(var(--primary) / .8)' : 'rgb(255 255 255 / .08)', boxShadow: active === i ? '0 30px 80px -20px rgb(var(--primary) / .55)' : 'none' }}>
                  <Icon className={`w-14 h-14 md:w-20 md:h-20 transition-colors ${active === i ? 'text-white' : 'text-slate-600'}`} strokeWidth={1.4} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Chooser() {
  const opts = ['Website', 'Aplikasi', 'IoT', 'Kreatif'];
  const [sel, setSel] = useState('Website');
  const list = services.filter((s) => s.fit === sel);
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="reveal text-center max-w-2xl mx-auto">
          <span className="eyebrow">Mulai dari kebutuhan</span>
          <h2 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight">Anda ingin membuat apa?</h2>
          <p className="mt-4 text-slate-400">Pilih arahnya, kami tunjukkan layanan yang paling mendekati.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-1 max-w-full mx-auto w-fit p-1.5 rounded-3xl sm:rounded-full bg-white/5 border border-white/10" role="tablist">
            {opts.map((o) => (
              <button key={o} role="tab" aria-selected={sel === o} onClick={() => setSel(o)} className={`px-4 sm:px-6 py-2.5 rounded-full text-sm font-bold transition-all ${sel === o ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'text-slate-400 hover:text-white'}`}>{o}</button>
            ))}
          </div>
        </div>
        <div key={sel} className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((s, i) => (
            <Link key={s.slug} to={`/layanan/${s.slug}`} style={{ animationDelay: `${i * 70}ms` }} className="page-enter group card p-8 hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col">
              <span className="text-xs font-bold text-primary tracking-widest">{s.no}</span>
              <h3 className="mt-3 text-2xl font-extrabold group-hover:text-primary transition-colors">{s.title}</h3>
              <p className="mt-3 text-slate-400 text-sm leading-relaxed flex-1">{s.desc}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">Pelajari <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const words = ['Produk', 'digital', 'yang', 'terasa'];
  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28">
        <div className="aurora"><i /><i /><i /></div>
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <span className="eyebrow page-enter">Studio Digital &amp; IoT</span>
          <h1 className="mt-6 text-5xl sm:text-7xl lg:text-[8.5rem] font-extrabold tracking-tight leading-[0.98]">
            {words.map((w, i) => <React.Fragment key={w}><span className="word"><span style={{ '--d': `${i * 90}ms` }}>{w}</span></span>{' '}</React.Fragment>)}
            <span className="word"><span className="text-gradient" style={{ '--d': '420ms' }}>hidup.</span></span>
          </h1>
          <div className="mt-8 grid md:grid-cols-12 gap-8 items-end">
            <p className="md:col-span-6 text-lg md:text-xl text-slate-400 leading-relaxed page-enter" style={{ animationDelay: '500ms' }}>
              DigiPulse merancang website, aplikasi, dan sistem IoT yang enak dipakai, masuk akal untuk dibangun, dan siap tumbuh bersama bisnis Anda.
            </p>
            <div className="md:col-span-6 flex flex-wrap gap-4 md:justify-end page-enter" style={{ animationDelay: '650ms' }}>
              <Link to="/kontak" className="btn btn-primary">Mulai Diskusi <ArrowRight className="w-4 h-4" /></Link>
              <Link to="/portofolio" className="btn btn-ghost">Lihat Karya</Link>
            </div>
          </div>
        </div>
        <div className="relative mt-16 py-5 border-y border-white/5 bg-background/40 text-xl md:text-3xl font-extrabold text-slate-500">
          <Marquee items={services.map((s) => s.title)} />
        </div>
        <div className="absolute bottom-24 right-6 hidden md:flex flex-col items-center gap-2 text-[10px] tracking-[.3em] text-slate-500 [writing-mode:vertical-rl]">SCROLL</div>
      </section>

      <Scrolly />
      <Chooser />

      <section className="py-24 px-6 bg-secondary/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div><span className="eyebrow">Karya pilihan</span><h2 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight">Proyek yang pernah kami kerjakan</h2></div>
            <Link to="/portofolio" className="btn btn-ghost self-start md:self-auto">Semua portofolio <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.slice(0, 2).map((p, i) => (
              <Link key={p.slug} to={`/portofolio/${p.slug}`} style={{ '--d': `${i * 100}ms` }} className="reveal group relative block rounded-3xl overflow-hidden aspect-[4/3] border border-white/10">
                <img src={p.img} alt={p.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute bottom-0 p-8">
                  <span className="eyebrow">{p.cat}</span>
                  <h3 className="mt-3 text-2xl md:text-3xl font-extrabold">{p.title}</h3>
                  <p className="mt-2 text-slate-300 text-sm max-w-md">{p.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="reveal text-center mb-14">
            <span className="eyebrow">Proses kerja</span>
            <h2 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight">Alur yang menyesuaikan kebutuhan</h2>
            <p className="mt-4 text-slate-400">Tahap dan kedalamannya bisa disesuaikan dengan lingkup, risiko, dan kondisi produk yang sudah berjalan.</p>
          </div>
          <ol className="relative border-l border-white/10 ml-3 space-y-8">
            {steps.map((s, i) => (
              <li key={s.t} className="reveal pl-8 relative" style={{ '--d': `${(i % 3) * 60}ms` }}>
                <span className="absolute -left-[15px] top-0 w-7 h-7 rounded-full bg-background border-2 border-primary flex items-center justify-center text-[10px] font-bold text-primary">{i + 1}</span>
                <h3 className="text-xl font-bold">{s.t}</h3>
                <p className="mt-1 text-slate-400 leading-relaxed">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

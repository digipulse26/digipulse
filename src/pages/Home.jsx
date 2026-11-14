import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ArrowDown } from 'lucide-react';
import { services, projects, steps } from '../data';
import { useScrollyProgress } from '../hooks';
import { Marquee, CtaBand, Rules, Label } from '../components/fx';

const chapters = [
  { k: 'Dengar', t: 'Setiap proyek kami mulai dengan mendengarkan Anda.', d: 'Sebelum merancang apa pun, kami memahami bisnis Anda terlebih dahulu: siapa penggunanya, kendala yang dihadapi, dan hasil yang ingin dicapai.' },
  { k: 'Rancang', t: 'Arah yang jelas sebelum pekerjaan dimulai.', d: 'Kebutuhan Anda kami petakan menjadi alur pengguna, struktur halaman, dan prioritas fitur, sehingga setiap keputusan dapat Anda tinjau sejak awal.' },
  { k: 'Bangun', t: 'Dikerjakan bertahap, dapat Anda pantau kapan saja.', d: 'Hasil kerja kami rilis secara berkala ke lingkungan uji. Anda melihat kemajuan yang nyata, tanpa kejutan di akhir proyek.' },
  { k: 'Dampingi', t: 'Setelah peluncuran, kami tetap mendampingi.', d: 'Domain, pemantauan, dan perbaikan lanjutan kami siapkan agar produk Anda terus berjalan dengan baik dan berkembang sesuai kebutuhan.' },
];

function Scrolly() {
  const [ref, active] = useScrollyProgress(chapters.length);
  return (
    <section ref={ref} className="relative border-t rule" style={{ height: `${chapters.length * 90 + 40}vh` }} aria-label="Cara kami bekerja">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <Rules />
        <div className="relative max-w-7xl mx-auto px-6 w-full grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 relative min-h-[22rem] md:min-h-[26rem]">
            {chapters.map((c, i) => (
              <div key={c.k} className="scrolly-layer absolute inset-0 flex flex-col justify-center" style={{ opacity: active === i ? 1 : 0, transform: active === i ? 'none' : `translate3d(0, ${i < active ? -32 : 32}px, 0)`, pointerEvents: active === i ? 'auto' : 'none' }} aria-hidden={active !== i}>
                <Label n={`0${i + 1} / 0${chapters.length}`}>{c.k}</Label>
                <h2 className="mt-6 text-[2.1rem] sm:text-5xl md:text-6xl leading-[1.02]">{c.t}</h2>
                <p className="mt-6 text-slate-400 text-lg leading-relaxed max-w-xl">{c.d}</p>
              </div>
            ))}
          </div>
          <ol className="hidden md:block md:col-span-4 md:col-start-9 relative pl-8">
            <span className="absolute left-0 top-0 bottom-0 w-px bg-white/10" />
            <span className="scrolly-rail absolute left-0 top-0 bottom-0 w-px bg-primary-soft" />
            {chapters.map((c, i) => (
              <li key={c.k} className={`py-5 border-b rule flex items-baseline justify-between transition-colors duration-500 ${active === i ? 'text-white' : 'text-slate-600'}`}>
                <span className="display text-3xl">{c.k}</span>
                <span className="mono text-xs">0{i + 1}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="md:hidden absolute bottom-10 left-6 right-6 h-px bg-white/10"><div className="scrolly-bar h-full bg-primary-soft" /></div>
      </div>
    </section>
  );
}

function Chooser() {
  const opts = ['Website', 'Aplikasi', 'IoT', 'Kreatif'];
  const [sel, setSel] = useState('Website');
  const list = services.filter((s) => s.fit === sel);
  return (
    <section className="px-6 py-24 md:py-32 border-t rule">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 items-end reveal">
          <div className="md:col-span-7">
            <Label>Mulai dari kebutuhan Anda</Label>
            <h2 className="mt-6 text-4xl md:text-6xl leading-[1.02]">Apa yang ingin Anda <span className="serif">wujudkan?</span></h2>
          </div>
          <p className="md:col-span-4 md:col-start-9 text-slate-400 leading-relaxed">Pilih arahnya, dan kami tunjukkan layanan yang paling sesuai untuk Anda.</p>
        </div>
        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-2 border-b rule" role="tablist">
          {opts.map((o) => (
            <button key={o} role="tab" aria-selected={sel === o} onClick={() => setSel(o)} className={`relative pb-4 -mb-px text-base transition-colors border-b ${sel === o ? 'text-white border-white' : 'text-slate-500 border-transparent hover:text-slate-300'}`}>{o}</button>
          ))}
        </div>
        <div key={sel}>
          {list.map((s, i) => (
            <Link key={s.slug} to={`/layanan/${s.slug}`} style={{ animationDelay: `${i * 60}ms` }} className="page-enter group grid grid-cols-12 gap-4 items-baseline py-7 border-b rule">
              <span className="col-span-2 md:col-span-1 mono text-xs text-slate-500">{s.no}</span>
              <h3 className="col-span-10 md:col-span-4 text-2xl md:text-3xl group-hover:text-primary-soft transition-colors">{s.title}</h3>
              <p className="col-span-12 md:col-span-6 md:col-start-6 text-slate-400 leading-relaxed">{s.desc}</p>
              <ArrowUpRight className="hidden md:block col-span-1 justify-self-end w-5 h-5 text-slate-500 group-hover:text-white transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
      <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden pt-32">
        <Rules />
        <div className="relative max-w-7xl mx-auto px-6 w-full pb-12">
          <Label className="page-enter">Studio digital &amp; IoT — Indonesia</Label>
          <h1 className="mt-8 text-[3.3rem] sm:text-7xl lg:text-[8.75rem] leading-[0.95] font-semibold">
            {words.map((w, i) => <React.Fragment key={w}><span className="word"><span style={{ '--d': `${i * 90}ms` }}>{w}</span></span>{' '}</React.Fragment>)}
            <span className="word"><span className="serif" style={{ '--d': '420ms' }}>hidup.</span></span>
          </h1>
          <div className="mt-12 grid md:grid-cols-12 gap-8 items-end">
            <p className="md:col-span-5 text-lg text-slate-300 leading-relaxed page-enter" style={{ animationDelay: '500ms' }}>
              DigiPulse merancang website, aplikasi, dan sistem IoT yang nyaman digunakan, dibangun dengan perencanaan matang, dan siap berkembang bersama bisnis Anda.
            </p>
            <div className="md:col-span-5 md:col-start-8 flex flex-wrap gap-3 md:justify-end page-enter" style={{ animationDelay: '650ms' }}>
              <Link to="/kontak" className="btn btn-primary">Mulai Konsultasi <ArrowRight className="w-4 h-4" /></Link>
              <Link to="/portofolio" className="btn btn-ghost">Lihat Karya Kami</Link>
            </div>
          </div>
          <div className="mt-16 pt-5 border-t rule grid grid-cols-2 md:grid-cols-4 gap-4 mono text-xs text-slate-500 page-enter" style={{ animationDelay: '800ms' }}>
            <span><span className="text-white">0{services.length}</span> layanan</span>
            <span>Web · Aplikasi · IoT</span>
            <span className="hidden md:block">Desain · Video</span>
            <span className="md:text-right inline-flex md:justify-end items-center gap-2">Gulir <ArrowDown className="w-3.5 h-3.5" /></span>
          </div>
        </div>
        <div className="relative py-6 border-t rule display text-3xl md:text-5xl text-slate-600">
          <Marquee items={services.map((s) => s.title)} />
        </div>
      </section>

      <Scrolly />
      <Chooser />

      <section className="px-6 py-24 md:py-32 border-t rule">
        <div className="max-w-7xl mx-auto">
          <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <Label>Karya pilihan</Label>
              <h2 className="mt-6 text-4xl md:text-6xl leading-[1.02]">Hasil kerja yang <span className="serif">berbicara.</span></h2>
            </div>
            <Link to="/portofolio" className="link self-start md:self-auto">Lihat semua portofolio <ArrowUpRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid md:grid-cols-12 gap-x-6 gap-y-14">
            {projects.slice(0, 2).map((p, i) => (
              <Link key={p.slug} to={`/portofolio/${p.slug}`} style={{ '--d': `${i * 100}ms` }} className={`reveal group block ${i === 0 ? 'md:col-span-7' : 'md:col-span-5 md:mt-24'}`}>
                <div className="overflow-hidden rounded-[4px] aspect-[4/3] bg-secondary">
                  <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover grayscale-[35%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.03]" />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h3 className="text-2xl md:text-3xl">{p.title}</h3>
                  <span className="mono text-xs text-slate-500 shrink-0">{p.cat}</span>
                </div>
                <p className="mt-2 text-slate-400 max-w-md">{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32 border-t rule">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4 reveal">
            <div className="md:sticky md:top-28">
              <Label>Proses kerja</Label>
              <h2 className="mt-6 text-4xl md:text-5xl leading-[1.02]">Alur kerja yang <span className="serif">fleksibel.</span></h2>
              <p className="mt-6 text-slate-400 leading-relaxed">Setiap tahap dan kedalamannya kami sesuaikan dengan lingkup proyek, tingkat risiko, dan kondisi produk Anda saat ini.</p>
            </div>
          </div>
          <ol className="md:col-span-7 md:col-start-6 border-t rule">
            {steps.map((s, i) => (
              <li key={s.t} className="reveal grid grid-cols-12 gap-4 py-6 border-b rule" style={{ '--d': `${(i % 3) * 60}ms` }}>
                <span className="col-span-2 mono text-xs text-slate-500 pt-1.5">0{i + 1}</span>
                <h3 className="col-span-10 md:col-span-4 text-xl">{s.t}</h3>
                <p className="col-span-10 col-start-3 md:col-span-6 text-slate-400 leading-relaxed">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

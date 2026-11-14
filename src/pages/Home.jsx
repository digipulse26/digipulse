import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Plus } from 'lucide-react';
import { services, projects, groups, pains, faqs } from '../data';
import { useScrollyProgress } from '../hooks';
import { Marquee, CtaBand, Rules, Label, ConsultLink } from '../components/fx';

const chapters = [
  { k: 'Dengar', t: 'Setiap proyek kami mulai dengan mendengarkan Anda.', d: 'Sebelum merancang apa pun, kami memahami bisnis Anda terlebih dahulu: siapa penggunanya, kendala yang dihadapi, dan hasil yang ingin dicapai.' },
  { k: 'Rancang', t: 'Arah yang jelas sebelum pekerjaan dimulai.', d: 'Kebutuhan Anda kami petakan menjadi alur pengguna, struktur halaman, dan prioritas fitur, sehingga setiap keputusan dapat Anda tinjau sejak awal.' },
  { k: 'Bangun', t: 'Dikerjakan bertahap, dapat Anda pantau kapan saja.', d: 'Hasil kerja kami rilis secara berkala ke lingkungan uji. Anda melihat kemajuan yang nyata, tanpa kejutan di akhir proyek.' },
  { k: 'Dampingi', t: 'Setelah peluncuran, kami tetap mendampingi.', d: 'Domain, pemantauan, dan perbaikan lanjutan kami siapkan agar produk Anda terus berjalan dengan baik dan berkembang sesuai kebutuhan.' },
];

const trust = ['Progres dapat dipantau setiap tahap', 'Pendampingan setelah rilis', 'Desain hingga sistem dalam satu tim'];

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
                <Label n={`0${i + 1} / 0${chapters.length}`}>Cara kami bekerja · {c.k}</Label>
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

function Pains() {
  return (
    <section className="px-6 py-24 md:py-32 border-t rule">
      <div className="max-w-7xl mx-auto">
        <div className="reveal max-w-3xl">
          <Label>Apakah ini terdengar familiar?</Label>
          <h2 className="mt-6 text-4xl md:text-6xl leading-[1.02]">Masalah yang sering dialami bisnis, dan cara kami <span className="serif">menyelesaikannya.</span></h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 border-t rule">
          {pains.map((p, i) => (
            <a key={p.q} href={`#layanan-${p.to}`} style={{ '--d': `${(i % 2) * 100}ms` }} className={`reveal group block py-10 border-b rule ${i % 2 === 0 ? 'md:pr-12 md:border-r' : 'md:pl-12'}`}>
              <p className="display text-2xl md:text-[1.75rem] leading-snug text-white">“{p.q}”</p>
              <p className="mt-4 text-slate-400 leading-relaxed flex gap-3"><ArrowRight className="w-4 h-4 mt-1 shrink-0 text-primary-soft transition-transform group-hover:translate-x-1" />{p.a}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Groups() {
  return (
    <section className="px-6 py-24 md:py-32 border-t rule">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 items-end reveal">
          <div className="md:col-span-7">
            <Label>Layanan</Label>
            <h2 className="mt-6 text-4xl md:text-6xl leading-[1.02]">Empat cara kami membantu bisnis Anda <span className="serif">tumbuh.</span></h2>
          </div>
          <p className="md:col-span-4 md:col-start-9 text-slate-400 leading-relaxed">Mulai dari satu kebutuhan. Bila bisnis Anda berkembang, layanan lain siap menyusul tanpa perlu berganti tim.</p>
        </div>
        <div className="mt-14 border-t rule">
          {groups.map((g, i) => (
            <div key={g.slug} id={`layanan-${g.slug}`} style={{ '--d': `${i * 60}ms` }} className="reveal scroll-mt-28 grid md:grid-cols-12 gap-6 py-10 border-b rule">
              <span className="md:col-span-1 mono text-xs text-slate-500 pt-2">0{i + 1}</span>
              <div className="md:col-span-5">
                <h3 className="text-3xl md:text-4xl">{g.title}</h3>
                <p className="mt-3 text-xl text-white leading-snug">{g.hook}</p>
              </div>
              <div className="md:col-span-6">
                <p className="text-slate-400 leading-relaxed">{g.desc}</p>
                <p className="mt-4 text-sm text-slate-500">Cocok untuk: <span className="text-slate-300">{g.who}</span></p>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                  {g.items.map((slug) => { const s = services.find((x) => x.slug === slug); return (
                    <Link key={slug} to={`/layanan/${slug}`} className="link text-sm">{s.title} <ArrowUpRight className="w-3.5 h-3.5" /></Link>
                  ); })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="px-6 py-24 md:py-32 border-t rule">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4 reveal">
          <div className="md:sticky md:top-28">
            <Label>Pertanyaan umum</Label>
            <h2 className="mt-6 text-4xl md:text-5xl leading-[1.02]">Sebelum Anda <span className="serif">menghubungi kami.</span></h2>
            <p className="mt-6 text-slate-400 leading-relaxed">Belum menemukan jawabannya? Tanyakan langsung, kami dengan senang hati menjelaskan.</p>
            <ConsultLink className="link mt-6 text-sm">Tanyakan langsung <ArrowUpRight className="w-4 h-4" /></ConsultLink>
          </div>
        </div>
        <div className="md:col-span-7 md:col-start-6 border-t rule">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b rule reveal">
              <summary className="flex items-start justify-between gap-6 py-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="text-lg md:text-xl text-white">{f.q}</span>
                <Plus className="w-5 h-5 mt-1 shrink-0 text-slate-400 transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="pb-6 pr-10 text-slate-400 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const words = ['Bisnis', 'Anda', 'layak', 'terlihat'];
  return (
    <>
      <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden pt-32">
        <Rules />
        <div className="relative max-w-7xl mx-auto px-6 w-full pb-12">
          <Label className="page-enter">Studio digital untuk UMKM, perusahaan &amp; institusi</Label>
          <h1 className="mt-8 text-[3.1rem] sm:text-7xl lg:text-[8.25rem] leading-[0.95] font-semibold">
            {words.map((w, i) => <React.Fragment key={w}><span className="word"><span style={{ '--d': `${i * 90}ms` }}>{w}</span></span>{' '}</React.Fragment>)}
            <span className="word"><span className="serif" style={{ '--d': '420ms' }}>meyakinkan.</span></span>
          </h1>
          <div className="mt-12 grid md:grid-cols-12 gap-8 items-end">
            <p className="md:col-span-6 text-lg md:text-xl text-slate-300 leading-relaxed page-enter" style={{ animationDelay: '500ms' }}>
              Kami membangun website, aplikasi, sistem IoT, dan konten promosi yang membantu bisnis Anda <span className="text-white">dipercaya, ditemukan, dan dihubungi</span> calon pelanggan.
            </p>
            <div className="md:col-span-5 md:col-start-8 flex flex-wrap gap-3 md:justify-end page-enter" style={{ animationDelay: '650ms' }}>
              <ConsultLink className="btn btn-primary">Konsultasi Sekarang <ArrowRight className="w-4 h-4" /></ConsultLink>
              <Link to="/portofolio" className="btn btn-ghost">Lihat Karya Kami</Link>
            </div>
          </div>
          <ul className="mt-14 pt-5 border-t rule flex flex-col sm:flex-row sm:flex-wrap gap-x-8 gap-y-2 text-sm text-slate-400 page-enter" style={{ animationDelay: '800ms' }}>
            {trust.map((t) => <li key={t} className="flex items-center gap-2.5"><span className="w-1 h-1 rounded-full bg-primary-soft" />{t}</li>)}
          </ul>
        </div>
        <div className="relative py-6 border-t rule display text-3xl md:text-5xl text-slate-600">
          <Marquee items={['Website', 'Aplikasi', 'Sistem Terintegrasi', 'IoT', 'Desain Grafis', 'Video', 'UI/UX']} />
        </div>
      </section>

      <Pains />
      <Groups />

      <section className="px-6 py-24 md:py-32 border-t rule">
        <div className="max-w-7xl mx-auto">
          <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <Label>Bukti kerja</Label>
              <h2 className="mt-6 text-4xl md:text-6xl leading-[1.02]">Hasil yang <span className="serif">terukur.</span></h2>
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
                <p className="mt-3 text-primary-soft">{p.result[0]}</p>
                <p className="mt-1 text-slate-400 max-w-md">{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Scrolly />
      <Faq />
      <CtaBand title="Siap membuat bisnis Anda lebih dipercaya?" text="Ceritakan kebutuhan Anda secara singkat. Kami bantu menentukan solusi yang paling tepat, lengkap dengan langkah dan estimasinya." />
    </>
  );
}

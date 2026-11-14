import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Plus, Globe, MessageCircle, FileSpreadsheet, LayoutDashboard, TriangleAlert, BellRing, Shuffle, LayoutGrid, Eye, LifeBuoy, Users } from 'lucide-react';
import { services, projects, groups, pains, faqs } from '../data';
import { useScrollyProgress } from '../hooks';
import { Marquee, CtaBand, Rules, Label, ConsultLink } from '../components/fx';
import { HeroVisual, GroupVisual, ProjectShot, ChatVisual, Wireframe, BuildVisual, Monitor } from '../components/visuals';

const chapters = [
  { k: 'Memahami', t: 'Kami dengarkan kebutuhan Anda.', d: 'Kendala dan tujuan dicatat sebelum apa pun dibuat.', V: ChatVisual },
  { k: 'Merancang', t: 'Rancangan disetujui lebih dulu.', d: 'Anda melihat tampilannya sebelum pengembangan dimulai.', V: Wireframe },
  { k: 'Membangun', t: 'Progres dapat Anda pantau.', d: 'Versi uji diperbarui berkala untuk Anda coba.', V: BuildVisual },
  { k: 'Mendampingi', t: 'Tetap didampingi setelah rilis.', d: 'Pemantauan, pencadangan, dan perbaikan berjalan rutin.', V: Monitor },
];

const trust = [[Eye, 'Progres transparan'], [LifeBuoy, 'Didampingi setelah rilis'], [Users, 'Desain & kode satu tim']];
const painIcons = [[Globe, MessageCircle], [FileSpreadsheet, LayoutDashboard], [TriangleAlert, BellRing], [Shuffle, LayoutGrid]];
const featured = ['apex-financial-dashboard', 'kopi-senja-promosi'].map((slug) => projects.find((p) => p.slug === slug));

function Scrolly() {
  const [ref, active] = useScrollyProgress(chapters.length);
  return (
    <section ref={ref} className="relative border-t rule" style={{ height: `${chapters.length * 90 + 40}vh` }} aria-label="Cara kami bekerja">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <Rules />
        <div className="relative max-w-7xl mx-auto px-6 w-full grid md:grid-cols-12 gap-4 md:gap-10 items-center">
          <div className="md:col-span-6 relative min-h-[11rem] md:min-h-[24rem] order-2 md:order-1">
            {chapters.map((c, i) => (
              <div key={c.k} className="scrolly-layer absolute inset-0 flex flex-col justify-center" style={{ opacity: active === i ? 1 : 0, transform: active === i ? 'none' : `translate3d(0, ${i < active ? -32 : 32}px, 0)`, pointerEvents: active === i ? 'auto' : 'none' }} aria-hidden={active !== i}>
                <Label n={`0${i + 1} / 0${chapters.length}`}>{c.k}</Label>
                <h2 className="mt-4 md:mt-6 text-[1.9rem] sm:text-5xl md:text-6xl leading-[1.02]">{c.t}</h2>
                <p className="mt-3 md:mt-6 text-slate-400 md:text-lg leading-relaxed max-w-md">{c.d}</p>
              </div>
            ))}
          </div>
          <div className="md:col-span-5 md:col-start-8 relative h-[17rem] sm:h-[22rem] md:h-[28rem] order-1 md:order-2">
            {chapters.map((c, i) => (
              <div key={c.k} className="scrolly-layer absolute inset-0 flex items-center justify-center" style={{ opacity: active === i ? 1 : 0, transform: active === i ? 'none' : `scale(.94) translate3d(0, ${i < active ? -24 : 24}px, 0)` }} aria-hidden="true">
                <div className="w-full max-w-[22rem] md:max-w-md"><c.V /></div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 md:bottom-12 inset-x-0 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="h-px bg-white/10"><div className="scrolly-bar h-full bg-primary-soft" /></div>
            <ol className="mt-3 hidden sm:grid grid-cols-4 gap-2 mono text-[10px] sm:text-xs uppercase tracking-wide">
              {chapters.map((c, i) => <li key={c.k} className={`truncate transition-colors duration-500 ${active === i ? 'text-white' : 'text-slate-600'}`}>0{i + 1} {c.k}</li>)}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pains() {
  return (
    <section className="px-6 py-24 md:py-32 border-t rule">
      <div className="max-w-7xl mx-auto">
        <div className="reveal max-w-3xl">
          <Label>Kendala yang sering kami tangani</Label>
          <h2 className="mt-6 text-4xl md:text-6xl leading-[1.02]">Dari kendala, menjadi <span className="serif">solusi.</span></h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pains.map((p, i) => { const [From, To] = painIcons[i]; return (
            <a key={p.q} href={`#layanan-${p.to}`} style={{ '--d': `${i * 80}ms` }} className="reveal group panel p-6 flex flex-col hover:border-white/20 transition-colors">
              <div className="flex items-center gap-3">
                <span className="w-12 h-12 rounded-xl border border-accent/30 bg-accent/10 text-rose-300 flex items-center justify-center"><From className="w-5 h-5" /></span>
                <span className="flex-1 h-px bg-gradient-to-r from-accent/40 to-primary-soft/60 relative"><ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-soft nudge" /></span>
                <span className="w-12 h-12 rounded-xl border border-primary-soft/40 bg-primary/15 text-primary-soft flex items-center justify-center"><To className="w-5 h-5" /></span>
              </div>
              <p className="mt-6 text-slate-500 line-through decoration-slate-600">{p.q}</p>
              <p className="mt-2 display text-xl text-white leading-snug">{p.a}</p>
            </a>
          ); })}
        </div>
      </div>
    </section>
  );
}

function Groups() {
  return (
    <section className="px-6 py-24 md:py-32 border-t rule">
      <div className="max-w-7xl mx-auto">
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <Label>Layanan</Label>
            <h2 className="mt-6 text-4xl md:text-6xl leading-[1.02]">Empat bidang, <span className="serif">satu tim.</span></h2>
          </div>
          <Link to="/layanan" className="link self-start md:self-auto">Semua layanan <ArrowUpRight className="w-4 h-4" /></Link>
        </div>
        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {groups.map((g, i) => (
            <div key={g.slug} id={`layanan-${g.slug}`} style={{ '--d': `${(i % 2) * 100}ms` }} className="reveal scroll-mt-28 panel overflow-hidden group">
              <Link to={`/layanan#${g.slug}`} aria-label={`Layanan ${g.title}`} className="block px-6 pt-8 pb-4 sm:px-10 sm:pt-10 bg-[radial-gradient(ellipse_at_top,rgb(99_102_241/.18),transparent_70%)] border-b rule">
                <div className="transition-transform duration-700 group-hover:-translate-y-1"><GroupVisual slug={g.slug} /></div>
              </Link>
              <div className="p-6 sm:p-8">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-3xl">{g.title}</h3>
                  <span className="mono text-xs text-slate-500">0{i + 1}</span>
                </div>
                <p className="mt-2 text-slate-300">{g.hook}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((slug) => { const s = services.find((x) => x.slug === slug); return (
                    <Link key={slug} to={`/layanan/${slug}`} className="inline-flex items-center gap-1.5 rounded-full border border-white/12 px-3 py-1.5 text-sm text-slate-300 hover:text-white hover:border-white/30 transition-colors">{s.title} <ArrowUpRight className="w-3.5 h-3.5" /></Link>
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
            <Label>Pertanyaan yang sering diajukan</Label>
            <h2 className="mt-6 text-4xl md:text-5xl leading-[1.02]">Informasi sebelum <span className="serif">memulai.</span></h2>
            <ConsultLink className="link mt-6 text-sm">Hubungi kami <ArrowUpRight className="w-4 h-4" /></ConsultLink>
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
  const words = ['Teknologi', 'yang', 'bekerja', 'untuk'];
  return (
    <>
      <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden pt-32">
        <Rules />
        <div className="relative max-w-7xl mx-auto px-6 w-full pb-12 grid lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          <div className="lg:col-span-7">
            <Label className="page-enter">Studio pengembangan digital &amp; IoT</Label>
            <h1 className="mt-8 text-[3.1rem] sm:text-7xl lg:text-[6.4rem] leading-[0.95] font-semibold">
              {words.map((w, i) => <React.Fragment key={w}><span className="word"><span style={{ '--d': `${i * 90}ms` }}>{w}</span></span>{' '}</React.Fragment>)}
              <span className="word"><span className="serif" style={{ '--d': '420ms' }}>bisnis Anda.</span></span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl page-enter" style={{ animationDelay: '500ms' }}>
              Website, aplikasi, IoT, dan materi promosi, <span className="text-white">dari rancangan hingga pendampingan.</span>
            </p>
            <div className="mt-8 flex flex-wrap gap-3 page-enter" style={{ animationDelay: '650ms' }}>
              <ConsultLink className="btn btn-primary">Konsultasi Sekarang <ArrowRight className="w-4 h-4" /></ConsultLink>
              <Link to="/portofolio" className="btn btn-ghost">Lihat Portofolio</Link>
            </div>
          </div>
          <div className="lg:col-span-5 w-full max-w-lg mx-auto lg:max-w-none page-enter" style={{ animationDelay: '300ms' }}>
            <HeroVisual />
          </div>
          <ul className="lg:col-span-12 pt-5 border-t rule grid grid-cols-3 gap-3 text-xs sm:text-sm text-slate-400 page-enter" style={{ animationDelay: '800ms' }}>
            {trust.map(([I, t]) => <li key={t} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3"><span className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-primary-soft shrink-0"><I className="w-4 h-4" /></span>{t}</li>)}
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
              <Label>Portofolio</Label>
              <h2 className="mt-6 text-4xl md:text-6xl leading-[1.02]">Hasil <span className="serif">pekerjaan kami.</span></h2>
            </div>
            <Link to="/portofolio" className="link self-start md:self-auto">Lihat seluruh portofolio <ArrowUpRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid md:grid-cols-12 gap-x-6 gap-y-14">
            {featured.map((p, i) => (
              <Link key={p.slug} to={`/portofolio/${p.slug}`} style={{ '--d': `${i * 100}ms` }} className={`reveal group block ${i === 0 ? 'md:col-span-7' : 'md:col-span-5 md:mt-24'}`}>
                <div className="relative overflow-hidden rounded-[6px] aspect-[4/3] border border-white/[0.08] bg-[radial-gradient(ellipse_at_top,rgb(99_102_241/.22),rgb(15_23_42/.6)_70%)]">
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03]"><ProjectShot shot={p.shot} /></div>
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h3 className="text-2xl md:text-3xl">{p.title}</h3>
                  <span className="mono text-xs text-slate-500 shrink-0">{p.cat}</span>
                </div>
                <p className="mt-2 text-slate-400">{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Scrolly />
      <Faq />
      <CtaBand title="Mari diskusikan kebutuhan usaha Anda." text="Ceritakan kebutuhan Anda, kami bantu tentukan langkah, waktu, dan biayanya." />
    </>
  );
}

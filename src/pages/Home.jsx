import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Plus } from 'lucide-react';
import { services, projects, groups, pains, faqs, tagColor } from '../data';
import { useScrollyProgress } from '../hooks';
import { Marquee, CtaBand, Rules, Label, ConsultLink } from '../components/fx';
import { CursorFollower } from '../components/interact';
import { HeroVisual, GroupVisual, ProjectShot, ChatVisual, Wireframe, BuildVisual, Monitor } from '../components/visuals';

const chapters = [
  { k: 'Memahami', t: 'Kami dengarkan kebutuhan Anda.', d: 'Kendala dan tujuan dicatat sebelum apa pun dibuat.', V: ChatVisual },
  { k: 'Merancang', t: 'Rancangan disetujui lebih dulu.', d: 'Anda melihat tampilannya sebelum pengembangan dimulai.', V: Wireframe },
  { k: 'Membangun', t: 'Progres dapat Anda pantau.', d: 'Versi uji diperbarui berkala untuk Anda coba.', V: BuildVisual },
  { k: 'Mendampingi', t: 'Kami akan mendampingi setelah rilis.', d: 'Pemantauan, pencadangan, dan perbaikan berjalan rutin.', V: Monitor },
];

const trust = ['Progres transparan', 'Kami akan mendampingi setelah rilis', 'Desain & kode satu tim'];
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
              <div key={c.k} className="scrolly-layer absolute inset-0 flex items-center justify-center" style={{ opacity: active === i ? 1 : 0, transform: active === i ? 'none' : `scale(.94) translate3d(0, ${i < active ? -24 : 24}px, 0)`, pointerEvents: active === i ? 'auto' : 'none' }} aria-hidden={active !== i}>
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

// Setiap kendala "terselesaikan" saat digulir: teks masalah dicoret, solusinya muncul
function Pains() {
  return (
    <section className="light px-6 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="reveal grid md:grid-cols-12 gap-6 items-end">
          <div className="md:col-span-9"><Label>Kendala umum</Label><h2 className="mt-6 text-4xl md:text-6xl leading-[1.02] text-[#0C0C10]">Kendala yang sering kami temui, <span className="serif">lalu kami selesaikan.</span></h2></div>
        </div>
        <ol className="mt-14 border-t rule">
          {pains.map((p, i) => { const gc = groups.find((g) => g.slug === p.to).color; return (
            <li key={p.q}>
              <a href={`#layanan-${p.to}`} className="pain reveal group relative grid grid-cols-12 gap-x-4 gap-y-3 items-baseline py-8 md:py-10 border-b rule">
                <span className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500" style={{ background: gc }} />
                <span className="col-span-2 md:col-span-1 mono text-xs text-[#6B6870] pl-3">0{i + 1}</span>
                <p className="col-span-10 md:col-span-5 display text-2xl md:text-[2rem] leading-tight text-[#0C0C10]"><span className="strike">{p.q}</span></p>
                <p className="sol col-span-10 col-start-3 md:col-span-5 md:col-start-auto flex items-start gap-3 text-xl md:text-2xl font-medium text-[#0C0C10] leading-snug">
                  <span className="mt-2 w-3 h-3 rounded-full shrink-0" style={{ background: gc }} />{p.a}
                </p>
                <ArrowUpRight className="go hidden md:block col-span-1 justify-self-end w-6 h-6 text-[#6B6870] group-hover:text-[#0C0C10]" />
              </a>
            </li>
          ); })}
        </ol>
      </div>
    </section>
  );
}

// Pemilih bidang layanan: arahkan / ketuk nama bidang, panggung visual berganti
function Groups() {
  const [cur, setCur] = useState(0);
  const [auto, setAuto] = useState(true);
  useEffect(() => {
    if (!auto) return;
    const id = setInterval(() => setCur((c) => (c + 1) % groups.length), 5000);
    return () => clearInterval(id);
  }, [auto, cur]);
  const pick = (i) => { setCur(i); setAuto(false); };
  const g = groups[cur];
  return (
    <section className="px-6 py-24 md:py-32" style={{ '--gc': g.color }}>
      <div className="max-w-7xl mx-auto">
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <Label>Layanan</Label>
            <h2 className="mt-6 text-4xl md:text-6xl leading-[1.02]">Empat bidang, <span className="grad-text serif">satu tim.</span></h2>
          </div>
          <Link to="/layanan" className="link self-start md:self-auto">Semua layanan <ArrowUpRight className="w-4 h-4" /></Link>
        </div>
        <div className="mt-14 grid lg:grid-cols-12 gap-10 items-start">
          <ol className="lg:col-span-5 border-t rule">
            {groups.map((x, i) => (
              <li key={x.slug} id={`layanan-${x.slug}`} className="scroll-mt-28 border-b rule" style={{ '--gc': x.color }}>
                <button type="button" onMouseEnter={() => pick(i)} onFocus={() => pick(i)} onClick={() => pick(i)} aria-expanded={cur === i}
                  className="w-full text-left py-6 flex items-baseline gap-5 group">
                  <span className="mono text-xs transition-colors" style={{ color: cur === i ? x.color : undefined }}><span className={cur === i ? '' : 'text-slate-600'}>0{i + 1}</span></span>
                  <span className={`display text-[2rem] md:text-5xl leading-none transition-all duration-500 ${cur === i ? 'translate-x-2' : 'text-slate-600 group-hover:text-slate-300'}`} style={{ color: cur === i ? x.color : undefined }}>{x.title}</span>
                </button>
                <div className="lg:hidden grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(.2,.8,.2,1)]" style={{ gridTemplateRows: cur === i ? '1fr' : '0fr' }}>
                  <div className="overflow-hidden">
                    <div className="pb-7 pl-9">
                      <p className="text-slate-300 text-lg">{x.hook}</p>
                      <div className="mt-6 blueprint rounded-[6px] border p-5" style={{ borderColor: `color-mix(in srgb, ${x.color} 45%, transparent)` }}>{cur === i && <div key={cur} className="swap-in"><GroupVisual slug={x.slug} /></div>}</div>
                      <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                        {x.items.map((slug) => { const s = services.find((y) => y.slug === slug); return (
                          <li key={slug}><Link to={`/layanan/${slug}`} className="link text-sm">{s.title} <ArrowUpRight className="w-3.5 h-3.5" /></Link></li>
                        ); })}
                      </ul>
                    </div>
                  </div>
                </div>
                {cur === i && auto && <i key={cur} className="block h-0.5 origin-left -mb-px" style={{ background: x.color, animation: 'growX 5s linear both' }} />}
              </li>
            ))}
          </ol>
          <div className="hidden lg:block lg:col-span-7 lg:sticky lg:top-28">
            <Link to={`/layanan#${g.slug}`} aria-label={`Lihat layanan ${g.title}`} className="relative block blueprint rounded-[10px] border p-10 overflow-hidden transition-colors duration-700" style={{ borderColor: `color-mix(in srgb, ${g.color} 45%, transparent)`, }}>
              <span className="absolute inset-x-0 top-0 h-1" style={{ background: g.color }} />
              <i className="hud tl" /><i className="hud tr" /><i className="hud bl" /><i className="hud br" />
              <span className="absolute top-5 right-6 mono text-[11px] uppercase tracking-wide" style={{ color: g.color }}>0{cur + 1} / 0{groups.length} · {g.title}</span>
              <div key={cur} className="swap-in"><GroupVisual slug={g.slug} /></div>
            </Link>
            <div key={'t' + cur} className="mt-6 grid grid-cols-12 gap-6 items-start fade-in">
              <p className="col-span-6 text-lg text-slate-300 leading-snug">{g.hook}</p>
              <ul className="col-span-6 flex flex-wrap gap-x-6 gap-y-2">
                {g.items.map((slug) => { const s = services.find((y) => y.slug === slug); return (
                  <li key={slug}><Link to={`/layanan/${slug}`} className="link text-sm">{s.title} <ArrowUpRight className="w-3.5 h-3.5" /></Link></li>
                ); })}
              </ul>
            </div>
          </div>
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
                <span className="text-lg md:text-xl text-white transition-transform duration-300 group-hover:translate-x-1">{f.q}</span>
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
  const [hover, setHover] = useState(false);
  return (
    <>
      <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden pt-32">
        <Rules />
        <div className="relative max-w-7xl mx-auto px-6 w-full pb-12 grid lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          <div className="lg:col-span-7">
            <Label className="page-enter">Studio pengembangan digital &amp; IoT</Label>
            <h1 className="mt-8 text-[3.1rem] sm:text-7xl lg:text-[6.4rem] leading-[0.95] font-semibold">
              {words.map((w, i) => <React.Fragment key={w}><span className="word"><span style={{ '--d': `${i * 90}ms` }}>{w}</span></span>{' '}</React.Fragment>)}
              <span className="word"><span className="serif grad-text" style={{ '--d': '420ms' }}>usaha Anda.</span></span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl page-enter" style={{ animationDelay: '500ms' }}>
              Website, aplikasi, IoT, dan materi promosi, <span className="text-white">dari rancangan hingga pendampingan.</span>
            </p>
            <div className="mt-8 flex flex-wrap gap-3 page-enter" style={{ animationDelay: '650ms' }}>
              <ConsultLink className="btn btn-cta">Konsultasi Sekarang <ArrowRight className="w-4 h-4" /></ConsultLink>
              <Link to="/portofolio" className="btn btn-ghost">Lihat Portofolio</Link>
            </div>
          </div>
          <div className="lg:col-span-5 w-full max-w-lg mx-auto lg:max-w-none page-enter" style={{ animationDelay: '300ms' }}>
            <HeroVisual />
          </div>
          <ul className="lg:col-span-12 pt-5 border-t rule grid grid-cols-3 gap-4 mono text-[11px] sm:text-xs uppercase tracking-wide text-slate-500 page-enter" style={{ animationDelay: '800ms' }}>
            {trust.map((t, i) => <li key={t}><span className="text-primary-soft">0{i + 1}</span> {t}</li>)}
          </ul>
        </div>
        <div className="relative py-5 md:py-6 display font-bold text-3xl md:text-5xl text-[#0C0C10] -rotate-[1.2deg] scale-[1.03] origin-center" style={{ background: 'var(--brand)' }}>
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
              <h2 className="mt-6 text-4xl md:text-6xl leading-[1.02]">Hasil <span className="grad-text serif">pekerjaan kami.</span></h2>
            </div>
            <Link to="/portofolio" className="link self-start md:self-auto">Lihat seluruh portofolio <ArrowUpRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid md:grid-cols-12 gap-x-6 gap-y-14">
            {featured.map((p, i) => (
              <Link key={p.slug} to={`/portofolio/${p.slug}`} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ '--d': `${i * 100}ms` }} className={`reveal group block md:cursor-none ${i === 0 ? 'md:col-span-7' : 'md:col-span-5 md:mt-24'}`}>
                <div className="relative overflow-hidden rounded-[6px] aspect-[4/3] border border-white/[0.08] blueprint">
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]"><ProjectShot shot={p.shot} /></div>
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h3 className="text-2xl md:text-3xl">{p.title}</h3>
                  <span className="inline-flex items-center gap-2 mono text-xs uppercase tracking-wide shrink-0" style={{ color: tagColor[p.tag] }}><i className="w-1.5 h-1.5 rounded-full" style={{ background: tagColor[p.tag] }} />{p.cat}</span>
                </div>
                <p className="mt-2 text-slate-400">{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
        <CursorFollower show={hover}>
          <span className="w-24 h-24 rounded-full bg-white text-slate-950 flex items-center justify-center mono text-[11px] uppercase tracking-wide">Lihat <ArrowUpRight className="w-3.5 h-3.5 ml-1" /></span>
        </CursorFollower>
      </section>

      <Scrolly />
      <Faq />
      <CtaBand title="Mari diskusikan kebutuhan usaha Anda." text="Ceritakan kebutuhan Anda, kami bantu tentukan langkah, waktu, dan biayanya." />
    </>
  );
}

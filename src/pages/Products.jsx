import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { products } from '../data';
import { Tilt, CtaBand } from '../components/fx';
import { ProductShot } from '../components/visuals';
import { StageHead } from './Portfolio';

// Warna tiap produk dipakai lewat --pc; tint dibuat dengan color-mix agar tetap satu sumber warna
const tint = (pct) => `color-mix(in srgb, var(--pc) ${pct}%, transparent)`;

function Status({ p }) {
  const ready = p.status === 'Tersedia';
  return (
    <span className={`inline-flex items-center gap-2 ${ready ? 'text-emerald-300' : 'text-amber-200'}`}>
      <span className={`w-1.5 h-1.5 rounded-full blink ${ready ? 'bg-emerald-400' : 'bg-amber-300'}`} />{p.status}
    </span>
  );
}

export default function Products() {
  return (
    <>
      <StageHead label="Produk digital" text="Perangkat lunak siap pakai buatan DigiPulse. Tampilan di bawah adalah simulasi yang bisa Anda coba.">
        Produk untuk menunjang <span className="serif">pekerjaan harian</span> Anda.
      </StageHead>

      {/* Katalog ringkas: tiga kartu berwarna berbeda, langsung menuju produknya */}
      <nav aria-label="Katalog produk" className="max-w-7xl mx-auto px-6 -mt-6 relative z-10 grid sm:grid-cols-3 gap-4">
        {products.map((p, i) => (
          <a key={p.slug} href={`#${p.slug}`} style={{ '--pc': p.color, '--d': `${i * 80}ms` }}
            className="reveal group relative block rounded-[6px] border border-white/10 bg-secondary/80 p-6 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-[var(--pc)]">
            <span className="absolute inset-x-0 top-0 h-1" style={{ background: 'var(--pc)' }} />
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: tint(8) }} />
            <span className="relative flex items-center justify-between mono text-[11px] uppercase tracking-wide">
              <span style={{ color: 'var(--pc)' }}>P—0{i + 1} · {p.cat}</span>
              <ArrowDown className="w-4 h-4 text-slate-500 transition-transform group-hover:translate-y-1 group-hover:text-white" />
            </span>
            <span className="relative mt-6 block display text-3xl text-white">{p.name}</span>
            <span className="relative mt-1 block text-sm text-slate-400">{p.desc}</span>
            <span className="relative mt-5 block mono text-[11px] uppercase tracking-wide"><Status p={p} /></span>
          </a>
        ))}
      </nav>

      <div className="mt-16 border-t rule">
      {products.map((p, i) => {
        const ready = p.status === 'Tersedia';
        const flip = i % 2 === 1;
        return (
          <section key={p.slug} id={p.slug} style={{ '--pc': p.color }} className="relative scroll-mt-24 overflow-hidden border-b rule">
            <span className="absolute inset-x-0 top-0 h-1" style={{ background: 'var(--pc)' }} />
            {/* Nama produk besar sebagai latar, berwarna khas produk */}
            <span aria-hidden="true" className={`absolute bottom-[-0.18em] ${flip ? 'left-[-0.04em]' : 'right-[-0.04em]'} display font-bold leading-none text-[26vw] md:text-[17vw] pointer-events-none select-none`} style={{ color: tint(7) }}>{p.name}</span>

            <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className={`lg:col-span-7 reveal scene ${flip ? 'lg:order-2' : ''}`}>
                <Tilt max={6} className="rounded-[10px]">
                  <div className="rounded-[10px] p-4 sm:p-7 border" style={{ borderColor: tint(40), background: tint(7) }}>
                    <div className="depth-2"><ProductShot slug={p.slug} /></div>
                  </div>
                </Tilt>
                <p className="mt-4 mono text-[11px] uppercase tracking-wide" style={{ color: 'var(--pc)' }}>↳ {p.hint}</p>
              </div>

              <div className={`lg:col-span-5 reveal ${flip ? 'lg:order-1' : ''}`} style={{ '--d': '120ms' }}>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mono text-xs uppercase tracking-wide">
                  <span className="px-2.5 py-1 rounded-full text-[#0b0f1c] font-semibold" style={{ background: 'var(--pc)' }}>{p.cat}</span>
                  <Status p={p} />
                </div>
                <h2 className="mt-6 text-6xl md:text-7xl font-bold leading-[.95]" style={{ color: 'var(--pc)' }}>{p.name}</h2>
                <p className="mt-5 text-xl text-slate-200 leading-snug">{p.desc}</p>
                <ul className="mt-8 border-t rule">
                  {p.feats.map((f, k) => (
                    <li key={f} className="group py-4 border-b rule flex items-baseline gap-5 text-lg text-slate-200">
                      <span className="mono text-xs" style={{ color: 'var(--pc)' }}>0{k + 1}</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/kontak" className="btn btn-product mt-10">{ready ? 'Jadwalkan demo' : 'Masuk daftar tunggu'} <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>
          </section>
        );
      })}
      </div>
      <CtaBand title="Membutuhkan solusi yang dirancang khusus?" text="Kami merancang solusi yang sesuai dengan alur kerja Anda." />
    </>
  );
}

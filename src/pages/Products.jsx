import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { products } from '../data';
import { Tilt, CtaBand } from '../components/fx';
import { ProductShot } from '../components/visuals';
import { StageHead } from './Portfolio';

export default function Products() {
  return (
    <>
      <StageHead label="Produk digital" text="Perangkat lunak siap pakai buatan DigiPulse. Coba langsung tampilannya di bawah.">
        Produk untuk menunjang <span className="serif">pekerjaan harian</span> Anda.
      </StageHead>

      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-3 gap-6 scene">
        {products.map((p, i) => {
          const ready = p.status === 'Tersedia';
          return (
            <div key={p.slug} className="reveal" style={{ '--d': `${i * 100}ms` }}>
              <Tilt max={10} className="h-full rounded-[6px]">
                <article className="relative h-full panel p-7 md:p-8 overflow-hidden scan flex flex-col">
                  <i className="hud tl" /><i className="hud tr" /><i className="hud bl" /><i className="hud br" />
                  <div className="flex items-center justify-between mono text-xs depth-1">
                    <span className="text-slate-500">P—0{i + 1}</span>
                    <span className={`inline-flex items-center gap-2 ${ready ? 'text-emerald-300' : 'text-amber-200'}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${ready ? 'bg-emerald-400' : 'bg-amber-300'}`} />{p.status}
                    </span>
                  </div>
                  <div className="depth-2 mt-8"><ProductShot slug={p.slug} /></div>
                  <h2 className="depth-3 mt-8 text-4xl font-bold">{p.name}</h2>
                  <p className="mt-2 text-slate-400 leading-relaxed">{p.desc}</p>
                  <ul className="depth-1 mt-6 border-t rule">
                    {p.feats.map((f, k) => <li key={f} className="py-3 border-b rule text-sm text-slate-200 flex gap-4"><span className="mono text-xs text-slate-500 pt-0.5">0{k + 1}</span>{f}</li>)}
                  </ul>
                  <p className="mt-4 mono text-[11px] uppercase tracking-wide text-slate-500">{p.slug === 'pulsedesk' ? 'Klik tiket untuk memproses' : p.slug === 'pulsestock' ? 'Tekan “Pindai” untuk menambah stok' : 'Data sensor diperbarui langsung'}</p>
                  <div className="mt-auto pt-8 depth-2">
                    <Link to="/kontak" className="link text-sm">{ready ? 'Jadwalkan demo' : 'Masuk daftar tunggu'} <ArrowUpRight className="w-4 h-4" /></Link>
                  </div>
                </article>
              </Tilt>
            </div>
          );
        })}
      </section>
      <CtaBand title="Membutuhkan solusi yang dirancang khusus?" text="Kami rancang solusi yang sesuai dengan alur kerja Anda." />
    </>
  );
}

import React from 'react';
import { Particles, CtaBand, Label } from '../components/fx';

const values = [
  { t: 'Fokus pada kebutuhan yang nyata', d: 'Kami memastikan terlebih dahulu apa yang benar-benar perlu dibangun, agar anggaran dan waktu Anda tidak terserap oleh fitur yang jarang digunakan.' },
  { t: 'Sederhana untuk dikembangkan', d: 'Struktur kode dan sistem kami rancang agar mudah dipahami, diperbarui, dan dilanjutkan oleh siapa pun di kemudian hari.' },
  { t: 'Aman dan dapat diandalkan', d: 'Keamanan, performa, dan aksesibilitas kami periksa sebagai bagian wajib dari setiap pekerjaan, bukan sekadar tambahan di akhir.' },
  { t: 'Kolaborasi yang terbuka', d: 'Anda selalu mengetahui perkembangan pekerjaan. Komunikasi kami jelas, keputusan dibahas bersama, dan tanpa istilah yang membingungkan.' },
];

const scope = ['Website & aplikasi web', 'Produk SaaS', 'UI/UX', 'Integrasi sistem', 'IoT & perangkat', 'Desain grafis & video'];

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden min-h-[92svh] flex items-end">
        <div className="aurora"><i /><i /><i /></div>
        <Particles />
        <div className="absolute right-[-8rem] top-28 w-[26rem] h-[26rem] border border-primary-soft/25 liquid pointer-events-none hidden md:block" />
        <div className="absolute right-[-4rem] top-40 w-[20rem] h-[20rem] bg-primary/10 liquid pointer-events-none hidden md:block" style={{ animationDelay: '-6s' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-16 w-full">
          <Label className="page-enter">Tentang DigiPulse</Label>
          <h1 className="mt-8 text-[2.75rem] sm:text-6xl md:text-[6.5rem] leading-[0.98] max-w-5xl page-enter" style={{ animationDelay: '80ms' }}>
            Teknologi yang bekerja untuk <span className="serif">kebutuhan nyata</span> Anda.
          </h1>
          <div className="mt-12 pt-6 border-t rule grid md:grid-cols-12 gap-6 page-enter" style={{ animationDelay: '160ms' }}>
            <p className="md:col-span-6 text-lg text-slate-300 leading-relaxed">
              Kami membantu bisnis dan institusi merancang website, aplikasi web, serta sistem informasi yang tepat guna, mudah dikelola, dan siap berkembang.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32 border-t rule">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5 reveal">
            <Label>Siapa kami</Label>
            <h2 className="mt-6 text-4xl md:text-5xl leading-[1.02]">Tim ringkas yang bekerja <span className="serif">dekat</span> dengan setiap klien.</h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 space-y-6 text-slate-300 text-lg leading-relaxed reveal" style={{ '--d': '120ms' }}>
            <p>DigiPulse adalah studio digital yang terdiri dari desainer, engineer, dan perencana strategi yang bekerja sebagai satu tim. Kami memadukan pengembangan perangkat lunak dengan perangkat keras IoT, sehingga satu kebutuhan dapat ditangani secara menyeluruh, dari layar hingga sensor.</p>
            <p className="text-slate-400">Kami memilih proyek dengan cermat, agar setiap pekerjaan dapat dikerjakan dengan baik, dijelaskan secara jujur, dan dirawat setelah diluncurkan.</p>
            <ul className="pt-6 flex flex-wrap gap-x-6 gap-y-2 mono text-xs text-slate-500 uppercase tracking-wide">
              {scope.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-24 md:py-32 border-t rule overflow-hidden">
        <div className="aurora opacity-60"><i /><i /></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="reveal max-w-3xl">
            <Label>Prinsip kerja</Label>
            <h2 className="mt-6 text-4xl md:text-6xl leading-[1.02]">Empat hal yang kami pegang di <span className="serif">setiap proyek.</span></h2>
          </div>
          <div className="mt-16 grid md:grid-cols-2 border-t rule">
            {values.map((v, i) => (
              <div key={v.t} style={{ '--d': `${(i % 2) * 100}ms` }} className={`reveal py-10 border-b rule md:px-0 ${i % 2 === 0 ? 'md:pr-12 md:border-r' : 'md:pl-12'}`}>
                <span className="mono text-xs text-primary-soft">0{i + 1}</span>
                <h3 className="mt-4 text-2xl md:text-3xl">{v.t}</h3>
                <p className="mt-3 text-slate-400 leading-relaxed max-w-md">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32 border-t rule">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 reveal">
          <div className="md:col-span-5">
            <Label>Ekosistem</Label>
            <h2 className="mt-6 text-4xl md:text-5xl leading-[1.02]">Berkolaborasi dengan mitra teknologi <span className="serif">tepercaya.</span></h2>
          </div>
          <p className="md:col-span-5 md:col-start-8 self-end text-slate-400 text-lg leading-relaxed">Kami bekerja bersama penyedia infrastruktur, pembayaran, dan perangkat keras yang telah teruji, agar hasil kerja kami andal dan tahan lama.</p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

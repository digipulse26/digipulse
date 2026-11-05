import React from 'react';
import { Target, Layers, ShieldCheck, Handshake } from 'lucide-react';
import { Particles, CtaBand } from '../components/fx';

const values = [
  { icon: Target, t: 'Fokus pada kebutuhan yang nyata', d: 'Kami memastikan terlebih dahulu apa yang benar-benar perlu dibangun, agar anggaran dan waktu Anda tidak terserap oleh fitur yang jarang digunakan.' },
  { icon: Layers, t: 'Sederhana untuk dikembangkan', d: 'Struktur kode dan sistem kami rancang agar mudah dipahami, diperbarui, dan dilanjutkan oleh siapa pun di kemudian hari.' },
  { icon: ShieldCheck, t: 'Aman dan dapat diandalkan', d: 'Keamanan, performa, dan aksesibilitas kami periksa sebagai bagian wajib dari setiap pekerjaan, bukan sekadar tambahan di akhir.' },
  { icon: Handshake, t: 'Kolaborasi yang terbuka', d: 'Anda selalu mengetahui perkembangan pekerjaan. Komunikasi kami jelas, keputusan dibahas bersama, dan tanpa istilah yang membingungkan.' },
];

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden min-h-[88vh] flex items-center">
        <div className="aurora"><i /><i /><i /></div>
        <Particles />
        <div className="absolute right-[-6rem] top-24 w-80 h-80 bg-gradient-to-br from-primary/40 to-accent/30 liquid blur-sm opacity-60 pointer-events-none hidden md:block" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
          <span className="eyebrow page-enter">Tentang DigiPulse</span>
          <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] max-w-4xl page-enter" style={{ animationDelay: '80ms' }}>
            Teknologi yang bekerja untuk <span className="text-gradient">kebutuhan nyata Anda.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed page-enter" style={{ animationDelay: '160ms' }}>
            Kami membantu bisnis dan institusi merancang website, aplikasi web, serta sistem informasi yang tepat guna, mudah dikelola, dan siap berkembang.
          </p>
        </div>
      </section>

      <section className="relative py-24 px-6 overflow-hidden">
        <div className="aurora opacity-50"><i /><i /></div>
        <div className="relative max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5 reveal">
            <span className="eyebrow">Siapa kami</span>
            <h2 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight">Tim ringkas yang bekerja dekat dengan setiap klien.</h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-slate-300 text-lg leading-relaxed reveal" style={{ '--d': '120ms' }}>
            <p>DigiPulse adalah studio digital yang terdiri dari desainer, engineer, dan perencana strategi yang bekerja sebagai satu tim. Kami memadukan pengembangan perangkat lunak dengan perangkat keras IoT, sehingga satu kebutuhan dapat ditangani secara menyeluruh, dari layar hingga sensor.</p>
            <p>Kami memilih proyek dengan cermat, agar setiap pekerjaan dapat dikerjakan dengan baik, dijelaskan secara jujur, dan dirawat setelah diluncurkan.</p>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-6 bg-secondary/30 border-y border-white/5 overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          <div className="reveal max-w-2xl"><span className="eyebrow">Prinsip kerja</span><h2 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight">Prinsip yang kami pegang di setiap proyek</h2></div>
          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {values.map((v, i) => { const Icon = v.icon; return (
              <div key={v.t} style={{ '--d': `${(i % 2) * 100}ms` }} className="reveal card p-8 backdrop-blur-sm hover:border-primary/40 transition-colors group">
                <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/30 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors"><Icon className="w-6 h-6" /></div>
                <h3 className="mt-5 text-xl font-bold">{v.t}</h3>
                <p className="mt-2 text-slate-400 leading-relaxed">{v.d}</p>
              </div>
            ); })}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center reveal">
          <span className="eyebrow">Ekosistem</span>
          <h2 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight">Berkolaborasi dengan mitra teknologi tepercaya</h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">Kami bekerja bersama penyedia infrastruktur, pembayaran, dan perangkat keras yang telah teruji, agar hasil kerja kami andal dan tahan lama.</p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

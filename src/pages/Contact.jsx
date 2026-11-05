import React, { useState } from 'react';
import { Mail, Clock, Send } from 'lucide-react';
import { EMAIL } from '../data';
import { Tilt } from '../components/fx';
import { VRStage } from './Portfolio';

const kinds = ['Website', 'Aplikasi', 'IoT', 'Perangkat IoT', 'Desain & Video'];
const input = 'w-full px-4 py-3 rounded-xl bg-background/70 border border-white/10 text-white placeholder:text-slate-500 focus:border-primary focus:outline-none transition-colors';

export default function Contact() {
  const [kind, setKind] = useState('Website');
  const [f, setF] = useState({ name: '', email: '', msg: '' });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const body = `Nama: ${f.name}\nEmail: ${f.email}\nSaya ingin membuat: ${kind}\n\n${f.msg}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('Diskusi proyek ' + kind)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <section className="relative overflow-hidden min-h-screen pt-36 pb-24">
      <VRStage className="absolute inset-0 opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <span className="eyebrow page-enter">Mulai percakapan</span>
          <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05] page-enter" style={{ animationDelay: '80ms' }}>Ceritakan apa yang sedang <span className="text-gradient">Anda kerjakan.</span></h1>
          <p className="mt-5 text-lg text-slate-300 leading-relaxed page-enter" style={{ animationDelay: '160ms' }}>Anda tidak perlu menyiapkan brief yang sempurna. Bagikan konteks, kendala, dan hasil yang diharapkan, lalu kami bantu merumuskan langkah berikutnya.</p>
          <ul className="mt-8 space-y-4 text-slate-200 page-enter" style={{ animationDelay: '240ms' }}>
            <li className="flex items-center gap-4"><span className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 text-primary flex items-center justify-center"><Mail className="w-5 h-5" /></span>{EMAIL}</li>
            <li className="flex items-center gap-4"><span className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 text-primary flex items-center justify-center"><Clock className="w-5 h-5" /></span>Senin – Jumat, 09.00 – 17.00 WIB</li>
          </ul>
        </div>

        <div className="lg:col-span-7 scene">
          <Tilt max={5} className="page-enter">
            <form onSubmit={submit} className="relative card p-7 md:p-10 backdrop-blur-xl bg-secondary/70 scan space-y-6">
              <i className="hud tl" /><i className="hud tr" /><i className="hud bl" /><i className="hud br" />
              <div className="depth-1">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Saya ingin membuat</p>
                <div className="flex flex-wrap gap-2">
                  {kinds.map((k) => <button type="button" key={k} onClick={() => setKind(k)} aria-pressed={kind === k} className={`px-4 py-2 rounded-full text-sm font-bold border transition-all ${kind === k ? 'bg-primary border-primary text-white shadow-lg shadow-primary/30' : 'border-white/10 text-slate-400 hover:text-white'}`}>{k}</button>)}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 depth-1">
                <label className="block"><span className="text-xs font-bold uppercase tracking-widest text-slate-400">Nama</span><input required value={f.name} onChange={set('name')} className={`${input} mt-2`} placeholder="Nama Anda" /></label>
                <label className="block"><span className="text-xs font-bold uppercase tracking-widest text-slate-400">Email</span><input required type="email" value={f.email} onChange={set('email')} className={`${input} mt-2`} placeholder="nama@email.com" /></label>
              </div>
              <label className="block depth-1"><span className="text-xs font-bold uppercase tracking-widest text-slate-400">Ceritakan kebutuhan Anda</span><textarea required rows={5} value={f.msg} onChange={set('msg')} className={`${input} mt-2 resize-none`} placeholder="Apa yang ingin Anda bangun, dan kendala apa yang sedang dihadapi?" /></label>
              <button type="submit" className="btn btn-primary depth-2 w-full justify-center">Kirim Pesan <Send className="w-4 h-4" /></button>
              <p className="text-xs text-slate-500 text-center">Pesan akan terbuka di aplikasi email Anda dengan isi yang sudah terisi otomatis.</p>
            </form>
          </Tilt>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { EMAIL } from '../data';
import { Label } from '../components/fx';
import { VRStage } from './Portfolio';

const kinds = ['Website', 'Aplikasi', 'IoT', 'Perangkat IoT', 'Desain & Video'];
const field = 'mt-2 w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-[0.97rem] text-white placeholder:text-slate-500 transition-colors hover:border-white/20 focus:border-primary-soft/70 focus:bg-white/[0.05] focus:outline-none';

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
      <VRStage className="absolute inset-0 lg:right-1/2 opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-14 lg:gap-10">
        <div className="lg:col-span-5">
          <Label className="page-enter">Mulai percakapan</Label>
          <h1 className="mt-8 text-[2.75rem] sm:text-6xl leading-[0.98] page-enter" style={{ animationDelay: '80ms' }}>Ceritakan apa yang sedang <span className="serif">Anda kerjakan.</span></h1>
          <p className="mt-8 text-lg text-slate-300 leading-relaxed page-enter" style={{ animationDelay: '160ms' }}>Anda tidak perlu menyiapkan brief yang sempurna. Bagikan konteks, kendala, dan hasil yang diharapkan, lalu kami bantu merumuskan langkah berikutnya.</p>
          <dl className="mt-12 border-t rule page-enter" style={{ animationDelay: '240ms' }}>
            <div className="py-5 border-b rule grid grid-cols-3 gap-4">
              <dt className="text-sm text-slate-500 pt-0.5">Email</dt>
              <dd className="col-span-2"><a href={`mailto:${EMAIL}`} className="link">{EMAIL} <ArrowUpRight className="w-4 h-4" /></a></dd>
            </div>
            <div className="py-5 border-b rule grid grid-cols-3 gap-4">
              <dt className="text-sm text-slate-500 pt-0.5">Jam kerja</dt>
              <dd className="col-span-2 text-slate-200">Senin – Jumat, 09.00 – 17.00 WIB</dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 page-enter" style={{ animationDelay: '200ms' }}>
          <form onSubmit={submit} className="rounded-2xl border border-white/10 bg-secondary/60 backdrop-blur-sm p-6 sm:p-9 space-y-7">
            <div>
              <h2 className="text-2xl">Kirim pesan</h2>
              <p className="mt-1.5 text-sm text-slate-400">Cukup isi singkat, kami akan menghubungi Anda kembali.</p>
            </div>

            <fieldset>
              <legend className="text-sm text-slate-300">Saya ingin membuat</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {kinds.map((k) => (
                  <button type="button" key={k} onClick={() => setKind(k)} aria-pressed={kind === k}
                    className={`px-3.5 py-1.5 rounded-full text-sm border transition-colors duration-200 ${kind === k ? 'bg-white text-slate-950 border-white' : 'border-white/12 text-slate-400 hover:text-white hover:border-white/30'}`}>
                    {k}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="grid sm:grid-cols-2 gap-5">
              <label className="block"><span className="text-sm text-slate-300">Nama</span><input required value={f.name} onChange={set('name')} className={field} placeholder="Nama lengkap" autoComplete="name" /></label>
              <label className="block"><span className="text-sm text-slate-300">Email</span><input required type="email" value={f.email} onChange={set('email')} className={field} placeholder="nama@email.com" autoComplete="email" /></label>
            </div>
            <label className="block"><span className="text-sm text-slate-300">Pesan</span><textarea required rows={5} value={f.msg} onChange={set('msg')} className={`${field} resize-none`} placeholder="Ceritakan singkat apa yang ingin Anda bangun dan kendala yang sedang dihadapi." /></label>

            <div className="pt-2 flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs text-slate-500 sm:max-w-[15rem]">Pesan akan dibuka di aplikasi email Anda dan siap dikirim.</p>
              <button type="submit" className="btn btn-primary justify-center shrink-0 whitespace-nowrap">Kirim Pesan <ArrowRight className="w-4 h-4" /></button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

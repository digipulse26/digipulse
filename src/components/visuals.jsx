import React, { useState } from 'react';
import { Parallax, Layer } from './interact';
import { BellRing, Check, MessageCircle, CreditCard, FileSpreadsheet, Webhook, Play, ShoppingBag, Search, Mic, ArrowRight, ScanBarcode } from 'lucide-react';

/*
  Visual ilustrasi (dummy) yang dibangun dengan HTML/CSS/SVG, tanpa file gambar.
  Ukuran isi memakai satuan cqw (container query) agar proporsinya sama di layar mana pun.
*/

const Bar = ({ w = '60%', c = 'bg-white/15', h = 'h-[1.1cqw]', className = '' }) => (
  <i className={`block rounded-full ${h} ${c} ${className}`} style={{ width: w }} />
);

/* ---------- Bingkai ---------- */
export function Browser({ url = 'usahaanda.id', children, className = '' }) {
  return (
    <div className={`@container ${className}`}><div className="rounded-[1.4cqw] border border-white/12 bg-[#0b1224] overflow-hidden shadow-2xl shadow-black/50">
      <div className="flex items-center gap-[1cqw] px-[2cqw] h-[4.6cqw] border-b border-white/10 bg-white/[0.03]">
        <i className="w-[1.3cqw] h-[1.3cqw] rounded-full bg-rose-400/60" /><i className="w-[1.3cqw] h-[1.3cqw] rounded-full bg-amber-300/60" /><i className="w-[1.3cqw] h-[1.3cqw] rounded-full bg-emerald-400/60" />
        <span className="ml-[2cqw] flex-1 max-w-[50%] h-[2.6cqw] rounded-full bg-white/[0.06] mono text-[1.6cqw] leading-[2.6cqw] px-[1.5cqw] text-slate-500 truncate">{url}</span>
      </div>
      {children}
    </div></div>
  );
}

export function Phone({ children, className = '' }) {
  return (
    <div className={`@container ${className}`}><div className="relative aspect-[9/19] rounded-[14cqw] border-[2.5cqw] border-slate-700 bg-[#0b1224] overflow-hidden shadow-2xl shadow-black/60">
      <span className="absolute top-[2.5cqw] left-1/2 -translate-x-1/2 w-[26cqw] h-[4.5cqw] rounded-full bg-slate-800 z-10" />
      <div className="absolute inset-0 pt-[11cqw] flex flex-col">{children}</div>
    </div></div>
  );
}

/* ---------- Layar website & aplikasi ---------- */
export function ScreenSite() {
  return (
    <div className="aspect-[16/10] p-[4cqw] flex flex-col gap-[3.5cqw] bg-gradient-to-br from-[#0b1224] to-[#141a3c]">
      <div className="flex items-center gap-[1.6cqw]">
        <i className="w-[2.6cqw] h-[2.6cqw] rounded-[.6cqw] bg-primary" /><Bar w="10%" c="bg-white/60" />
        <span className="flex-1" /><Bar w="7%" /><Bar w="7%" /><Bar w="7%" />
        <i className="w-[11cqw] h-[3cqw] rounded-full bg-white/85" />
      </div>
      <div className="flex-1 grid grid-cols-2 gap-[4cqw] items-center min-h-0">
        <div className="space-y-[1.6cqw]">
          <span className="text-[1.6cqw] mono text-primary-soft">PROFIL USAHA</span>
          <p className="text-[4.2cqw] leading-[1.02] font-semibold text-white display">Solusi tepat untuk usaha Anda.</p>
          <Bar w="85%" /><Bar w="65%" />
          <div className="flex gap-[1.4cqw] pt-[1cqw]"><i className="w-[14cqw] h-[3.4cqw] rounded-full bg-primary" /><i className="w-[11cqw] h-[3.4cqw] rounded-full border border-white/25" /></div>
        </div>
        <div className="h-full rounded-[1.2cqw] bg-gradient-to-br from-primary/70 via-primary-soft/30 to-accent/50 relative overflow-hidden">
          <i className="absolute w-[20cqw] aspect-square rounded-full bg-white/20 -right-[4cqw] -bottom-[5cqw]" />
          <i className="absolute w-[9cqw] aspect-square rounded-[1cqw] bg-white/25 left-[3cqw] top-[3cqw] float" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[1.8cqw]">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-[1cqw] border border-white/10 p-[1.6cqw] space-y-[1cqw]">
            <i className="block w-[2.6cqw] h-[2.6cqw] rounded-[.6cqw] bg-primary-soft/50" /><Bar w="70%" c="bg-white/40" /><Bar w="50%" c="bg-white/10" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ScreenSiteMobile() {
  return (
    <div className="flex-1 px-[7cqw] pb-[7cqw] flex flex-col gap-[5cqw] bg-gradient-to-b from-[#0b1224] to-[#141a3c]">
      <div className="flex items-center justify-between"><i className="w-[9cqw] h-[9cqw] rounded-[2cqw] bg-primary" /><span className="space-y-[1.5cqw]"><Bar w="10cqw" h="h-[1.5cqw]" c="bg-white/50" /><Bar w="10cqw" h="h-[1.5cqw]" c="bg-white/50" /></span></div>
      <p className="text-[11cqw] leading-[1] font-semibold text-white display">Solusi tepat untuk usaha Anda.</p>
      <Bar w="90%" h="h-[2.4cqw]" /><Bar w="70%" h="h-[2.4cqw]" />
      <i className="w-[55%] h-[10cqw] rounded-full bg-primary" />
      <div className="flex-1 rounded-[4cqw] bg-gradient-to-br from-primary/70 via-primary-soft/30 to-accent/50" />
    </div>
  );
}

export const DASH = [
  { t: 'Ringkasan hari ini', k: [['Pendapatan', '128,4 jt', '+12%'], ['Pesanan', '342', '+8%'], ['Pelanggan', '1.204', '+5%']], bars: [40, 65, 50, 80, 58, 92, 74], line: 'M0 32 L12 28 L24 30 L36 20 L48 23 L60 14 L72 17 L84 8 L100 10' },
  { t: 'Ringkasan 7 hari', k: [['Pendapatan', '842,0 jt', '+9%'], ['Pesanan', '2.311', '+6%'], ['Pelanggan', '5.870', '+4%']], bars: [70, 52, 88, 61, 76, 49, 95], line: 'M0 26 L12 30 L24 18 L36 24 L48 12 L60 20 L72 10 L84 16 L100 6' },
  { t: 'Ringkasan 30 hari', k: [['Pendapatan', '3,6 M', '+15%'], ['Pesanan', '9.804', '+11%'], ['Pelanggan', '21.4 rb', '+7%']], bars: [30, 42, 55, 60, 72, 84, 98], line: 'M0 36 L12 33 L24 31 L36 26 L48 24 L60 18 L72 15 L84 10 L100 4' },
];

export function ScreenDash({ d = DASH[0] }) {
  const bars = d.bars;
  return (
    <div className="aspect-[16/10] flex bg-[#0b1224]">
      <div className="w-[8%] border-r border-white/10 flex flex-col items-center gap-[2.2cqw] py-[3cqw]">
        {[0, 1, 2, 3, 4].map((i) => <i key={i} className={`w-[2.4cqw] h-[2.4cqw] rounded-[.6cqw] ${i === 0 ? 'bg-primary' : 'bg-white/15'}`} />)}
      </div>
      <div className="flex-1 p-[3cqw] flex flex-col gap-[2.4cqw] min-w-0">
        <div className="flex items-center justify-between">
          <span className="text-[2.2cqw] font-semibold text-white">{d.t}</span>
          <i className="w-[12cqw] h-[3cqw] rounded-full bg-white/10" />
        </div>
        <div className="grid grid-cols-3 gap-[1.8cqw]">
          {d.k.map(([k, v, dd]) => (
            <div key={k} className="rounded-[1cqw] border border-white/10 bg-white/[0.03] p-[1.6cqw]">
              <p className="text-[1.6cqw] text-slate-500 leading-none">{k}</p>
              <p className="mt-[1cqw] text-[3cqw] font-semibold text-white leading-none">{v}</p>
              <p className="mt-[.8cqw] text-[1.5cqw] text-emerald-400 leading-none">{dd}</p>
            </div>
          ))}
        </div>
        <div className="flex-1 grid grid-cols-5 gap-[1.8cqw] min-h-0">
          <div className="col-span-3 rounded-[1cqw] border border-white/10 p-[1.6cqw]">
            <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full">
              <path key={d.t + 'a'} className="fade-in" d={`${d.line} L100 40 L0 40Z`} fill="rgba(99,102,241,.22)" />
              <path key={d.t} className="draw" pathLength="1" d={d.line} fill="none" stroke="rgb(165,180,252)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>
          <div className="col-span-2 rounded-[1cqw] border border-white/10 p-[1.6cqw] flex items-end gap-[6%]">
            {bars.map((b, i) => <i key={i} className="bar-live flex-1 rounded-t-[.4cqw] bg-primary-soft/60 transition-[height] duration-700" style={{ height: `${b}%`, '--d': `${i * -0.4}s` }} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ScreenShop() {
  const c = ['from-rose-400/70 to-amber-300/60', 'from-sky-400/60 to-indigo-400/60', 'from-emerald-300/60 to-teal-500/50', 'from-violet-400/60 to-fuchsia-400/50', 'from-amber-300/70 to-orange-400/50', 'from-slate-300/50 to-slate-500/40'];
  return (
    <div className="aspect-[16/10] p-[3cqw] bg-[#0b1224] flex flex-col gap-[2.4cqw]">
      <div className="flex items-center gap-[2cqw]">
        <span className="text-[2.4cqw] font-semibold text-white display">VELOX</span>
        <span className="flex-1 h-[3.4cqw] rounded-full bg-white/[0.06] flex items-center gap-[1cqw] px-[1.5cqw] text-slate-500"><Search className="w-[2cqw] h-[2cqw]" /><Bar w="30%" h="h-[1cqw]" c="bg-white/10" /></span>
        <span className="relative text-white"><ShoppingBag className="w-[3cqw] h-[3cqw]" /><i className="absolute -top-[.6cqw] -right-[.8cqw] w-[1.8cqw] h-[1.8cqw] rounded-full bg-accent" /></span>
      </div>
      <div className="flex-1 grid grid-cols-3 gap-[1.8cqw] min-h-0">
        {c.map((g, i) => (
          <div key={i} className="rounded-[1cqw] border border-white/10 overflow-hidden flex flex-col">
            <div className={`flex-1 bg-gradient-to-br ${g} flex items-center justify-center`}><i className={`w-[7cqw] aspect-square bg-white/35 ${i % 2 ? 'rounded-[1.4cqw] rotate-12' : 'rounded-full'}`} /></div>
            <div className="px-[1.2cqw] py-[1cqw] flex justify-between items-center"><Bar w="40%" h="h-[.9cqw]" /><span className="text-[1.5cqw] text-primary-soft leading-none">Rp{(i + 2) * 45}rb</span></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ScreenPortal({ sel = 1, onSel }) {
  const st = ['Buat akun', 'Pilih paket', 'Undang tim'];
  return (
    <div className="aspect-[16/10] p-[3.5cqw] bg-gradient-to-br from-[#0b1224] to-[#12183a] grid grid-cols-5 gap-[3cqw]">
      <div className="col-span-2 flex flex-col gap-[2.2cqw]">
        <span className="text-[2.4cqw] font-semibold text-white display">Mulai dalam 3 langkah</span>
        {st.map((s, i) => (
          <div key={s} className={`flex items-center gap-[1.6cqw] rounded-[1cqw] border p-[1.5cqw] ${i === 1 ? 'border-primary-soft/60 bg-primary/10' : 'border-white/10'}`}>
            <span className={`w-[3.2cqw] h-[3.2cqw] rounded-full flex items-center justify-center text-[1.6cqw] ${i === 0 ? 'bg-emerald-400 text-slate-900' : i === 1 ? 'bg-primary text-white' : 'bg-white/10 text-slate-400'}`}>{i === 0 ? <Check className="w-[2cqw] h-[2cqw]" /> : i + 1}</span>
            <span className="text-[1.8cqw] text-slate-200">{s}</span>
          </div>
        ))}
      </div>
      <div className="col-span-3 grid grid-cols-3 gap-[1.6cqw] items-stretch">
        {['Dasar', 'Bisnis', 'Tim'].map((p, i) => (
          <button type="button" key={p} onClick={() => onSel && onSel(i)} tabIndex={onSel ? 0 : -1} className={`text-left rounded-[1.2cqw] border p-[1.6cqw] flex flex-col gap-[1.2cqw] transition-all duration-500 ${i === sel ? 'border-primary-soft/70 bg-primary/15 -translate-y-[1.5cqw]' : 'border-white/10 hover:border-white/25'}`}>
            <span className="text-[1.7cqw] text-slate-400">{p}</span>
            <span className="text-[3cqw] font-semibold text-white leading-none">{['99', '249', '499'][i]}<span className="text-[1.4cqw] text-slate-500">rb</span></span>
            {[0, 1, 2].map((k) => <span key={k} className="flex items-center gap-[.8cqw]"><Check className="w-[1.6cqw] h-[1.6cqw] text-emerald-400 shrink-0" /><Bar w="70%" h="h-[.9cqw]" /></span>)}
            <i className={`mt-auto h-[3cqw] rounded-full transition-colors ${i === sel ? 'bg-primary' : 'bg-white/10'}`} />
          </button>
        ))}
      </div>
    </div>
  );
}

export function ScreenApp() {
  return (
    <div className="flex-1 px-[7cqw] pb-[7cqw] flex flex-col gap-[5cqw]">
      <div>
        <p className="text-[4.5cqw] text-slate-500">Rapat mingguan · 10.00</p>
        <p className="text-[7cqw] font-semibold text-white display leading-tight">Merekam…</p>
      </div>
      <div className="h-[16cqw] flex items-center gap-[1.6cqw]">
        {Array.from({ length: 16 }).map((_, i) => <i key={i} className="eq flex-1 rounded-full bg-primary-soft" style={{ '--d': `${(i % 5) * -0.18}s`, height: `${30 + ((i * 37) % 60)}%` }} />)}
      </div>
      <div className="rounded-[4cqw] bg-white/[0.05] p-[4cqw] space-y-[2.4cqw]"><Bar w="90%" h="h-[2.2cqw]" /><Bar w="75%" h="h-[2.2cqw]" /><Bar w="55%" h="h-[2.2cqw]" /></div>
      <div className="space-y-[3cqw]">
        <p className="text-[4.5cqw] text-slate-400">Tindak lanjut</p>
        {['Kirim proposal', 'Jadwalkan demo', 'Revisi anggaran'].map((t, i) => (
          <div key={t} className="flex items-center gap-[3cqw]"><span className={`w-[6cqw] h-[6cqw] rounded-[1.6cqw] flex items-center justify-center ${i < 2 ? 'bg-primary text-white' : 'border border-white/25'}`}>{i < 2 && <Check className="w-[4cqw] h-[4cqw]" />}</span><span className="text-[5cqw] text-slate-200">{t}</span></div>
        ))}
      </div>
      <span className="mt-auto self-center w-[18cqw] h-[18cqw] rounded-full bg-accent flex items-center justify-center text-white pulse-ring"><Mic className="w-[8cqw] h-[8cqw]" /></span>
    </div>
  );
}

function Gauge({ v, label, unit, c = 'rgb(165,180,252)' }) {
  return (
    <div className="relative aspect-square">
      <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
        <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="3" />
        <circle className="gauge" cx="18" cy="18" r="15" fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" pathLength="100" strokeDasharray={`${v} 100`} />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[12cqw] font-semibold text-white leading-none">{label}</span>
        <span className="text-[4.5cqw] text-slate-500 mt-[1cqw]">{unit}</span>
      </div>
    </div>
  );
}

export function ScreenIoT({ temp = 27 }) {
  const hot = temp > 30;
  return (
    <div className="flex-1 px-[7cqw] pb-[7cqw] flex flex-col gap-[5cqw]">
      <div className="flex items-center justify-between"><p className="text-[6.5cqw] font-semibold text-white display">Gudang A</p><span className="flex items-center gap-[1.5cqw] text-[4cqw] text-emerald-300"><i className="w-[2cqw] h-[2cqw] rounded-full bg-emerald-400 blink" />Online</span></div>
      <div className="grid grid-cols-2 gap-[4cqw]">
        <div className="@container"><Gauge v={Math.round(((temp - 10) / 35) * 100)} label={`${temp}°`} unit="Suhu" c={hot ? 'rgb(244,63,94)' : 'rgb(165,180,252)'} /></div>
        <div className="@container"><Gauge v={64} label="64%" unit="Lembap" c="rgb(56,189,248)" /></div>
      </div>
      <div className="rounded-[4cqw] border border-white/10 p-[4cqw]">
        <p className="text-[4cqw] text-slate-500">24 jam terakhir</p>
        <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="mt-[2cqw] w-full h-[16cqw]"><path className="draw" pathLength="1" d="M0 20 L10 18 L20 22 L30 15 L40 17 L50 10 L60 14 L70 8 L80 12 L90 5 L100 9" fill="none" stroke="rgb(165,180,252)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" /></svg>
      </div>
      {hot ? (
        <div key="hot" className="mt-auto rounded-[4cqw] bg-accent/15 border border-accent/40 p-[4cqw] flex items-center gap-[3cqw] swap-in">
          <BellRing className="w-[7cqw] h-[7cqw] text-accent shrink-0 ring-bell" />
          <span className="text-[4.5cqw] text-slate-100 leading-snug">Suhu ruang 2 melewati batas</span>
        </div>
      ) : (
        <div key="ok" className="mt-auto rounded-[4cqw] bg-emerald-400/10 border border-emerald-400/30 p-[4cqw] flex items-center gap-[3cqw] swap-in">
          <Check className="w-[7cqw] h-[7cqw] text-emerald-300 shrink-0" />
          <span className="text-[4.5cqw] text-slate-100 leading-snug">Semua sensor normal</span>
        </div>
      )}
    </div>
  );
}

const TICKET = { Baru: 'bg-accent/20 text-rose-300', Proses: 'bg-amber-300/15 text-amber-200', Selesai: 'bg-emerald-400/15 text-emerald-300' };
export function ScreenInbox() {
  const [rows, setRows] = useState([['Pesanan belum tiba', 'Baru'], ['Ganti alamat kirim', 'Proses'], ['Minta faktur', 'Selesai'], ['Produk tidak sesuai', 'Proses']]);
  const [cur, setCur] = useState(0);
  const pick = (i) => {
    setCur(i);
    setRows((r) => r.map((x, k) => (k === i ? [x[0], x[1] === 'Baru' ? 'Proses' : x[1] === 'Proses' ? 'Selesai' : 'Selesai'] : x)));
  };
  return (
    <div className="aspect-[16/10] bg-[#0b1224] grid grid-cols-5">
      <div className="col-span-3 border-r border-white/10 p-[3cqw] space-y-[1.6cqw]">
        <span className="text-[2.4cqw] font-semibold text-white">Kotak masuk</span>
        {rows.map(([t, s], i) => (
          <button type="button" key={t} onClick={() => pick(i)} className={`w-full text-left flex items-center gap-[1.6cqw] rounded-[1cqw] p-[1.4cqw] transition-colors ${i === cur ? 'bg-white/[0.08]' : 'hover:bg-white/[0.04]'}`}>
            <i className="w-[3.4cqw] h-[3.4cqw] rounded-full bg-gradient-to-br from-primary-soft/70 to-accent/50 shrink-0" />
            <span className="flex-1 min-w-0 text-[1.8cqw] text-slate-200 truncate">{t}</span>
            <span key={s} className={`text-[1.4cqw] px-[1.2cqw] py-[.4cqw] rounded-full swap-in ${TICKET[s]}`}>{s}</span>
          </button>
        ))}
      </div>
      <div key={cur} className="col-span-2 p-[3cqw] flex flex-col gap-[1.8cqw] swap-in">
        <span className="text-[1.7cqw] text-slate-400 truncate">{rows[cur][0]}</span>
        <span className="self-start max-w-[85%] rounded-[1.4cqw] bg-white/[0.07] p-[1.6cqw] space-y-[.8cqw]"><Bar w="12cqw" h="h-[.9cqw]" /><Bar w="9cqw" h="h-[.9cqw]" /></span>
        <span className="self-end max-w-[85%] rounded-[1.4cqw] bg-primary/60 p-[1.6cqw] space-y-[.8cqw]"><Bar w="13cqw" h="h-[.9cqw]" c="bg-white/50" /><Bar w="8cqw" h="h-[.9cqw]" c="bg-white/50" /></span>
        <span className="self-start rounded-[1.4cqw] bg-white/[0.07] px-[1.6cqw] py-[1.2cqw] flex gap-[.6cqw]"><i className="typing w-[1cqw] h-[1cqw] rounded-full bg-white/50" /><i className="typing w-[1cqw] h-[1cqw] rounded-full bg-white/50" style={{ animationDelay: '.15s' }} /><i className="typing w-[1cqw] h-[1cqw] rounded-full bg-white/50" style={{ animationDelay: '.3s' }} /></span>
        <i className="mt-auto h-[3.4cqw] rounded-full border border-white/15" />
      </div>
    </div>
  );
}

export function ScreenStock() {
  const [rows, setRows] = useState([['Beras 5 kg', 128], ['Minyak 2 L', 12], ['Gula 1 kg', 64], ['Tepung 1 kg', 7]]);
  const [hit, setHit] = useState(-1);
  const scan = () => {
    const i = rows.findIndex((r) => r[1] < 15);
    const k = i < 0 ? Math.floor(Math.random() * rows.length) : i;
    setHit(k);
    setRows((r) => r.map((x, j) => (j === k ? [x[0], x[1] + 12] : x)));
  };
  return (
    <div className="aspect-[16/10] bg-[#0b1224] p-[3cqw] flex flex-col gap-[2cqw]">
      <div className="flex items-center justify-between">
        <span className="text-[2.4cqw] font-semibold text-white">Stok · Gudang Utama</span>
        <button type="button" onClick={scan} className="flex items-center gap-[1cqw] rounded-full bg-primary hover:bg-primary-soft hover:text-slate-950 transition-colors px-[1.8cqw] py-[.8cqw] text-[1.6cqw] text-white"><ScanBarcode className="w-[2.2cqw] h-[2.2cqw]" />Pindai +12</button>
      </div>
      <div className="flex-1 rounded-[1cqw] border border-white/10 overflow-hidden">
        {rows.map(([n, q], i) => { const w = Math.min(100, (q / 140) * 100); return (
          <div key={n} className={`grid grid-cols-12 items-center gap-[1.4cqw] px-[2cqw] py-[1.6cqw] border-b border-white/[0.06] last:border-0 transition-colors duration-700 ${hit === i ? 'bg-primary/15' : ''}`}>
            <span className="col-span-4 text-[1.8cqw] text-slate-200">{n}</span>
            <span className="col-span-5 h-[1.2cqw] rounded-full bg-white/[0.06] overflow-hidden"><i className={`block h-full rounded-full transition-all duration-700 ${q < 15 ? 'bg-accent' : 'bg-primary-soft/70'}`} style={{ width: `${w}%` }} /></span>
            <span className="col-span-1 text-[1.8cqw] text-white text-right">{q}</span>
            <span className={`col-span-2 justify-self-end text-[1.3cqw] px-[1cqw] py-[.3cqw] rounded-full ${q < 15 ? 'bg-accent/20 text-rose-300' : 'bg-emerald-400/15 text-emerald-300'}`}>{q < 15 ? 'Menipis' : 'Aman'}</span>
          </div>
        ); })}
      </div>
      <div className="flex items-end gap-[.4cqw] h-[5cqw]">{Array.from({ length: 34 }).map((_, i) => <i key={i} className="bg-white/70 h-full" style={{ width: `${[.3, .6, .3, .9][i % 4]}cqw` }} />)}<span className="ml-[1.6cqw] mono text-[1.5cqw] text-slate-500">899 1234 5678</span></div>
    </div>
  );
}

/* ---------- Perangkat & diagram ---------- */
export function IotDevice({ className = '', alert = false }) {
  return (
    <svg viewBox="0 0 220 150" className={className} fill="none" aria-hidden="true">
      <path d="M40 92 H18 V112" stroke="rgba(165,180,252,.5)" strokeWidth="1.5" className="flow" />
      <rect x="4" y="112" width="30" height="24" rx="4" fill="#111a33" stroke="rgba(165,180,252,.6)" />
      <text x="19" y="128" textAnchor="middle" fontSize="9" fill="#cbd5e1" fontFamily="Geist Mono, monospace">°C</text>
      <rect x="40" y="46" width="120" height="74" rx="6" fill="#0f1733" stroke="rgba(165,180,252,.55)" />
      {Array.from({ length: 10 }).map((_, i) => <rect key={'t' + i} x={50 + i * 10.5} y="40" width="4" height="8" rx="1" fill="rgba(203,213,225,.55)" />)}
      {Array.from({ length: 10 }).map((_, i) => <rect key={'b' + i} x={50 + i * 10.5} y="118" width="4" height="8" rx="1" fill="rgba(203,213,225,.55)" />)}
      <rect x="82" y="64" width="36" height="36" rx="3" fill="#1e293b" stroke="rgba(255,255,255,.18)" />
      <text x="100" y="85" textAnchor="middle" fontSize="7" fill="#94a3b8" fontFamily="Geist Mono, monospace">ESP32</text>
      <circle cx="56" cy="62" r="3.5" fill={alert ? '#f43f5e' : '#34d399'} className="blink" />
      <rect x="128" y="60" width="20" height="10" rx="2" fill="rgba(99,102,241,.5)" />
      <path d="M160 70 H170 V58 H176 V82 H182 V58 H188 V82 H194 V70" stroke="rgba(165,180,252,.7)" strokeWidth="1.5" />
      {[14, 26, 38].map((r, i) => <path key={r} className="wave" style={{ animationDelay: `${i * 0.35}s` }} d={`M${196 - r * 0.7} ${44 - r * 0.7} A ${r} ${r} 0 0 1 ${196 + r * 0.7} ${44 - r * 0.7}`} stroke="rgb(165,180,252)" strokeWidth="2" strokeLinecap="round" />)}
    </svg>
  );
}

export const HUB_NODES = [
    { x: 14, y: 22, I: MessageCircle, t: 'WhatsApp', c: 'text-emerald-300' },
    { x: 86, y: 22, I: CreditCard, t: 'Pembayaran', c: 'text-sky-300' },
    { x: 14, y: 78, I: FileSpreadsheet, t: 'Spreadsheet', c: 'text-emerald-200' },
    { x: 86, y: 78, I: Webhook, t: 'API mitra', c: 'text-rose-300' },
];
export function Hub({ onNode, packet, active = -1 }) {
  const nodes = HUB_NODES;
  return (
    <div className="@container w-full"><div className="relative w-full aspect-[16/10]">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        {nodes.map((n) => <line key={n.t} x1="50" y1="50" x2={n.x} y2={n.y} stroke="rgba(165,180,252,.55)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" className="flow" />)}
      </svg>
      {packet && <i key={packet.id} className="packet" style={{ '--fx': `${nodes[packet.i].x}%`, '--fy': `${nodes[packet.i].y}%` }} />}
      {nodes.map((n, i) => (
        <button type="button" key={n.t} onClick={() => onNode && onNode(i)} tabIndex={onNode ? 0 : -1} className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-[1.2cqw] group" style={{ left: `${n.x}%`, top: `${n.y}%` }}>
          <span className={`w-[10cqw] h-[10cqw] rounded-[2.4cqw] bg-[#111a33] border flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${active === i ? 'border-primary-soft scale-110' : 'border-white/12'} ${n.c}`}><n.I className="w-[4.6cqw] h-[4.6cqw]" /></span>
          <span className="text-[2.2cqw] text-slate-300 whitespace-nowrap">{n.t}</span>
        </button>
      ))}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[20cqw] h-[20cqw] rounded-full bg-primary/25 border border-primary-soft/60 flex flex-col items-center justify-center pulse-ring">
        <span className="text-[3cqw] font-semibold text-white display">Sistem Anda</span>
        <span className="text-[1.8cqw] text-primary-soft mono">tersinkron</span>
      </div>
    </div></div>
  );
}

export function Wireframe() {
  return (
    <div className="@container w-full"><div className="grid grid-cols-[1fr_auto_1fr] items-center gap-[3cqw]">
      <div className="aspect-[3/4] rounded-[1.6cqw] border border-dashed border-white/25 p-[3cqw] flex flex-col gap-[2cqw]">
        <span className="mono text-[1.8cqw] text-slate-500">WIREFRAME</span>
        <i className="h-[12cqw] rounded-[1cqw] border border-dashed border-white/20 bg-[repeating-linear-gradient(45deg,transparent_0_6px,rgba(255,255,255,.04)_6px_7px)]" />
        <Bar w="80%" h="h-[1.6cqw]" c="bg-white/20" /><Bar w="60%" h="h-[1.6cqw]" c="bg-white/10" />
        <div className="grid grid-cols-2 gap-[1.6cqw]"><i className="h-[8cqw] rounded-[1cqw] border border-dashed border-white/20" /><i className="h-[8cqw] rounded-[1cqw] border border-dashed border-white/20" /></div>
        <i className="mt-auto h-[4cqw] w-[45%] rounded-full border border-dashed border-white/30" />
      </div>
      <ArrowRight className="w-[5cqw] h-[5cqw] text-primary-soft nudge" />
      <div className="aspect-[3/4] rounded-[1.6cqw] border border-white/12 bg-[#0f1733] p-[3cqw] flex flex-col gap-[2cqw]">
        <span className="mono text-[1.8cqw] text-primary-soft">FINAL</span>
        <i className="h-[12cqw] rounded-[1cqw] bg-gradient-to-br from-primary/70 via-primary-soft/40 to-accent/50" />
        <span className="text-[3cqw] font-semibold text-white display leading-tight">Pesan meja dalam 30 detik</span>
        <Bar w="60%" h="h-[1.6cqw]" c="bg-white/20" />
        <div className="grid grid-cols-2 gap-[1.6cqw]"><i className="h-[8cqw] rounded-[1cqw] bg-white/[0.07]" /><i className="h-[8cqw] rounded-[1cqw] bg-white/[0.07]" /></div>
        <i className="mt-auto h-[4cqw] w-[45%] rounded-full bg-primary" />
      </div>
    </div></div>
  );
}

export function Monitor() {
  const names = ['Website', 'API', 'Database'];
  const [st, setSt] = useState(['ok', 'ok', 'ok']);
  const run = () => {
    setSt(['wait', 'wait', 'wait']);
    names.forEach((_, i) => setTimeout(() => setSt((s) => s.map((x, k) => (k === i ? 'ok' : x))), 600 + i * 500));
  };
  const busy = st.includes('wait');
  return (
    <div className="@container w-full"><div className="rounded-[1.6cqw] border border-white/12 bg-[#0b1224] p-[4cqw] space-y-[3cqw]">
      <div className="flex items-center justify-between"><span className="text-[3.2cqw] font-semibold text-white display">Status sistem</span><button type="button" onClick={run} disabled={busy} className="flex items-center gap-[1cqw] text-[2.2cqw] rounded-full border border-white/15 px-[2cqw] py-[.8cqw] text-slate-200 hover:border-white/40 transition-colors disabled:opacity-60">{busy ? 'Memeriksa…' : 'Cek sekarang'}</button></div>
      <div className="flex gap-[.6cqw] h-[7cqw]">{Array.from({ length: 40 }).map((_, i) => <i key={i} title={i === 27 ? 'Gangguan singkat, sudah ditangani' : 'Normal'} className={`flex-1 rounded-[.4cqw] origin-bottom transition-transform hover:scale-y-125 ${i === 27 ? 'bg-amber-300/80' : 'bg-emerald-400/70 hover:bg-emerald-300'}`} />)}</div>
      {names.map((n, i) => (
        <div key={n} className="flex items-center justify-between border-t border-white/[0.07] pt-[2.4cqw]"><span className="text-[2.4cqw] text-slate-200">{n}</span>
          {st[i] === 'ok' ? <span key="ok" className="text-[2.2cqw] text-emerald-300 swap-in">● Online</span> : <span key="w" className="text-[2.2cqw] text-slate-400 flex items-center gap-[1cqw]"><i className="w-[2cqw] h-[2cqw] rounded-full border-2 border-slate-500 border-t-white spin" />Memeriksa</span>}
        </div>
      ))}
      <div className="flex items-center justify-between rounded-[1.2cqw] bg-white/[0.04] p-[2cqw]"><span className="text-[2.2cqw] text-slate-400">Pencadangan terakhir</span><span className="mono text-[2.2cqw] text-white">Hari ini, 02.00</span></div>
    </div></div>
  );
}

/* ---------- Bab cara kerja (Beranda) ---------- */
export function ChatVisual() {
  return (
    <div className="@container w-full"><div className="space-y-[3cqw]">
      <div className="max-w-[78%] rounded-[3cqw] rounded-bl-[.8cqw] bg-white/[0.07] p-[3.4cqw] text-[3.4cqw] text-slate-200">Pelanggan sering bertanya stok lewat chat, admin kewalahan.</div>
      <div className="ml-auto max-w-[78%] rounded-[3cqw] rounded-br-[.8cqw] bg-primary/70 p-[3.4cqw] text-[3.4cqw] text-white">Baik. Berapa banyak pesanan per hari, dan siapa yang mencatatnya?</div>
      <div className="rounded-[3cqw] border border-white/12 p-[3.4cqw] space-y-[2cqw]">
        <span className="mono text-[2.6cqw] text-primary-soft">CATATAN KEBUTUHAN</span>
        {['Cek stok otomatis', 'Rekap pesanan harian', 'Notifikasi ke admin'].map((t) => <p key={t} className="flex items-center gap-[2cqw] text-[3.2cqw] text-slate-200"><Check className="w-[3.6cqw] h-[3.6cqw] text-emerald-400" />{t}</p>)}
      </div>
    </div></div>
  );
}

export function BuildVisual() {
  const items = [['Desain disetujui', 100], ['Halaman utama', 100], ['Dasbor admin', 70], ['Pengujian', 20]];
  return (
    <div className="@container w-full"><div className="rounded-[3cqw] border border-white/12 bg-[#0b1224] p-[5cqw] space-y-[4cqw]">
      <div className="flex items-center justify-between"><span className="text-[4cqw] font-semibold text-white display">Progres proyek</span><span className="mono text-[3cqw] text-slate-500">Minggu 3</span></div>
      {items.map(([t, v]) => (
        <div key={t}>
          <div className="flex justify-between text-[3.2cqw]"><span className="text-slate-200">{t}</span><span className={v === 100 ? 'text-emerald-300' : 'text-slate-400'}>{v === 100 ? 'Selesai' : `${v}%`}</span></div>
          <div className="mt-[1.6cqw] h-[1.6cqw] rounded-full bg-white/[0.07] overflow-hidden"><i className="grow-x block h-full rounded-full bg-primary-soft" style={{ width: `${v}%` }} /></div>
        </div>
      ))}
      <div className="flex items-center gap-[2cqw] rounded-[2cqw] bg-white/[0.04] p-[3cqw] text-[3cqw] text-slate-300"><i className="w-[2cqw] h-[2cqw] rounded-full bg-emerald-400 blink" />Versi uji siap Anda coba</div>
    </div></div>
  );
}

/* ---------- Contoh karya desain & video ---------- */
// Pembungkus: elemen luar menjadi container, sehingga cqw di dalamnya mengikuti lebar kartu
function Box({ className = '', inner = '', children }) {
  return <div className={`@container ${className}`}><div className={`relative overflow-hidden rounded-[2cqw] shadow-xl shadow-black/40 ${inner}`}>{children}</div></div>;
}

export function Poster({ className = '' }) {
  return (
    <Box className={className} inner="aspect-[3/4] bg-gradient-to-br from-[#1e1b4b] via-[#4338ca] to-[#f43f5e] p-[8cqw] flex flex-col text-white">
      <span className="text-[5cqw] tracking-[.2em] uppercase opacity-80">Kopi Senja</span>
      <i className="absolute right-[-18%] top-[16%] w-[70%] aspect-square rounded-full border-[3cqw] border-white/25" />
      <i className="absolute right-[8%] top-[28%] w-[30%] aspect-square rounded-full bg-amber-300/90" />
      <p className="mt-auto display font-bold leading-[.85] text-[17cqw]">GRAND<br />OPENING</p>
      <p className="mt-[4cqw] text-[5cqw] opacity-90">Sabtu, 12 Desember · Diskon 30%</p>
    </Box>
  );
}

export function Flyer({ className = '' }) {
  return (
    <Box className={className} inner="aspect-[3/4] bg-[#f5f1e8] p-[8cqw] flex flex-col text-slate-900">
      <span className="self-start rounded-full bg-slate-900 text-white text-[4.5cqw] px-[3cqw] py-[1cqw]">PROMO AKHIR TAHUN</span>
      <p className="mt-[5cqw] display font-bold text-[20cqw] leading-[.85] text-rose-600">50%</p>
      <p className="text-[6cqw] font-semibold">untuk semua produk</p>
      <div className="mt-auto flex items-end justify-between">
        <span className="w-[38cqw] aspect-square rounded-full bg-gradient-to-br from-amber-300 to-rose-400" />
        <span className="text-right text-[4cqw] leading-tight text-slate-600">Toko Rapi<br />Jl. Merdeka 12</span>
      </div>
    </Box>
  );
}

export function Banner({ className = '' }) {
  return (
    <Box className={className} inner="aspect-[3/1] bg-gradient-to-r from-[#3b2314] to-[#7c4a24] px-[5cqw] flex items-center gap-[4cqw] text-amber-50">
      <span className="w-[14cqw] aspect-square rounded-full bg-amber-200/90 shrink-0 flex items-center justify-center text-[#3b2314] display font-bold text-[4cqw]">KS</span>
      <div><p className="display font-bold text-[7cqw] leading-none">KOPI SENJA</p><p className="mt-[1.4cqw] text-[3cqw] opacity-85">Buka setiap hari · 08.00 – 22.00</p></div>
      <span className="ml-auto rounded-full border border-amber-100/50 px-[2.4cqw] py-[1cqw] text-[2.6cqw] whitespace-nowrap">Pesan via WA</span>
    </Box>
  );
}

export function Social({ className = '', i = 0 }) {
  const v = [['Menu Baru', 'Es Kopi Gula Aren', 'from-amber-200 to-orange-300'], ['Promo Jumat', 'Beli 2 gratis 1', 'from-orange-300 to-rose-400'], ['Tips Seduh', 'Suhu air ideal 92°C', 'from-amber-100 to-amber-300'], ['Jam Buka', 'Setiap hari 08.00', 'from-orange-200 to-amber-400']][i % 4];
  return (
    <Box className={className} inner={`aspect-square bg-gradient-to-br ${v[2]} p-[8cqw] flex flex-col text-[#3b2314]`}>
      <span className="text-[6cqw] font-semibold tracking-wide">0{(i % 4) + 1} / {v[0]}</span>
      <i className="absolute -right-[10%] -bottom-[10%] w-[60%] aspect-square rounded-full bg-white/35" />
      <p className="mt-auto display font-bold text-[11.5cqw] leading-[.95] max-w-[90%]">{v[1]}</p>
      <span className="mt-[4cqw] text-[5cqw] opacity-70">@kopisenja</span>
    </Box>
  );
}

export function PackLabel({ className = '' }) {
  return (
    <div className={`@container relative aspect-[3/4] flex flex-col items-center justify-end ${className}`}>
      <i className="w-[46%] h-[12%] rounded-t-[3cqw] bg-gradient-to-b from-amber-700 to-amber-900" />
      <div className="w-[70%] h-[70%] rounded-[8cqw] bg-gradient-to-br from-amber-400/90 to-amber-600/90 flex items-center justify-center shadow-xl shadow-black/40 relative overflow-hidden">
        <i className="absolute left-[10%] top-[6%] w-[10%] h-[70%] rounded-full bg-white/25" />
        <div className="w-[88%] rounded-[3cqw] bg-[#fdf8ec] py-[6cqw] text-center text-[#5b3412]">
          <p className="text-[4cqw] tracking-[.25em]">MURNI</p>
          <p className="display font-bold text-[11cqw] leading-none mt-[1cqw]">Madu Hutan</p>
          <p className="text-[4cqw] mt-[2cqw] opacity-75">250 g · Sumbawa</p>
        </div>
      </div>
    </div>
  );
}

export function PhotoEdit({ className = '' }) {
  return (
    <Box className={className} inner="aspect-[4/3]">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-300 via-amber-200 to-rose-300" />
      <div className="absolute inset-0 w-1/2 bg-gradient-to-br from-slate-500 via-stone-500 to-stone-600" />
      <i className="absolute left-[18%] bottom-[18%] w-[34%] aspect-square rounded-full bg-[#7c4a24]/80" />
      <i className="absolute right-[20%] top-[18%] w-[16%] aspect-square rounded-full bg-amber-100/90" />
      <span className="absolute inset-y-0 left-1/2 w-[.6cqw] bg-white" />
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[9cqw] h-[9cqw] rounded-full bg-white shadow flex items-center justify-center text-slate-900 text-[4cqw] font-bold">‹›</span>
      <span className="absolute left-[3cqw] top-[3cqw] rounded-full bg-black/50 px-[2cqw] py-[.6cqw] text-[3cqw] text-white">Sebelum</span>
      <span className="absolute right-[3cqw] top-[3cqw] rounded-full bg-black/50 px-[2cqw] py-[.6cqw] text-[3cqw] text-white">Sesudah</span>
    </Box>
  );
}

export function Invite({ className = '' }) {
  return (
    <Box className={className} inner="aspect-[9/16] bg-[#f5efe6] p-[9cqw] flex flex-col items-center text-center text-[#4a3b2a]">
      <i className="absolute -top-[12%] -left-[20%] w-[70%] aspect-square rounded-full bg-[#e9d8c1]" />
      <i className="absolute -bottom-[8%] -right-[25%] w-[75%] aspect-square rounded-full bg-[#e2cfb4]" />
      <span className="relative mt-[22cqw] text-[5cqw] tracking-[.3em]">THE WEDDING OF</span>
      <p className="relative mt-[6cqw] serif !text-[#4a3b2a] text-[17cqw] leading-[.95]">Rina<br />&amp; Dimas</p>
      <span className="relative mt-[8cqw] w-[20cqw] h-px bg-[#4a3b2a]/40" />
      <p className="relative mt-[6cqw] text-[5.5cqw]">Sabtu, 20 Desember</p>
      <span className="relative mt-auto mb-[6cqw] rounded-full border border-[#4a3b2a]/40 px-[5cqw] py-[2cqw] text-[4.5cqw]">Buka undangan</span>
    </Box>
  );
}

export function VectorArt({ className = '' }) {
  return (
    <Box className={className} inner="aspect-[4/3]">
      <svg viewBox="0 0 160 120" className="w-full h-full" aria-hidden="true">
        <rect width="160" height="120" fill="#fde68a" />
        <circle cx="118" cy="40" r="18" fill="#fb923c" />
        <path d="M0 86 L40 44 L70 74 L98 48 L160 96 V120 H0Z" fill="#6366f1" />
        <path d="M0 96 L30 76 L64 98 L110 70 L160 104 V120 H0Z" fill="#312e81" />
        <path d="M0 108 Q40 98 80 108 T160 106 V120 H0Z" fill="#1e1b4b" />
        <path d="M40 44 L48 52 L40 50 L32 53Z" fill="#fff" opacity=".85" />
      </svg>
    </Box>
  );
}

export function Reel({ className = '', title = 'Es Kopi Gula Aren', tone = 'from-[#3b2314] via-[#7c4a24] to-[#f59e0b]', time = '0:15', playing = false }) {
  return (
    <Box className={className} inner={`aspect-[9/16] bg-gradient-to-b ${tone} flex flex-col text-white ${playing ? '' : 'paused'}`}>
      <div className="flex gap-[1.6cqw] p-[5cqw]">{[0, 1, 2, 3].map((i) => <span key={i} className="flex-1 h-[1.2cqw] rounded-full bg-white/30 overflow-hidden"><i className={`story s${i} block h-full bg-white`} /></span>)}</div>
      <i className="absolute left-1/2 top-[38%] -translate-x-1/2 w-[60%] aspect-square rounded-full bg-white/15 reel-zoom" />
      <span className={`absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-[22cqw] h-[22cqw] rounded-full bg-white/90 text-slate-900 flex items-center justify-center transition-all duration-500 ${playing ? 'opacity-0 scale-75' : 'pulse-ring'}`}><Play className="w-[9cqw] h-[9cqw] ml-[1cqw]" fill="currentColor" /></span>
      <div className="mt-auto p-[6cqw] space-y-[2cqw]">
        <p className="display font-bold text-[10cqw] leading-[.95]">{title}</p>
        <div className="flex items-center justify-between text-[5cqw] opacity-80"><span>@kopisenja</span><span className="mono">{time}</span></div>
      </div>
    </Box>
  );
}

export function Timeline({ className = '', playing = true }) {
  const tracks = [
    [['Intro', 18, 'bg-primary/70'], ['Produk', 34, 'bg-primary-soft/60'], ['Promo', 28, 'bg-primary/70'], ['Logo', 20, 'bg-primary-soft/60']],
    [['Teks judul', 30, 'bg-amber-300/70'], ['', 10, ''], ['Harga', 26, 'bg-amber-300/70']],
    [['Musik', 100, 'bg-emerald-400/50']],
  ];
  return (
    <div className={`@container w-full ${className}`}><div className={`rounded-[1.6cqw] border border-white/12 bg-[#0b1224] p-[3cqw] ${playing ? '' : 'paused'}`}>
      <div className="flex items-center justify-between mb-[2.4cqw]"><span className="text-[2.8cqw] font-semibold text-white">Promo_KopiSenja.mp4</span><span className="mono text-[2.2cqw] text-slate-500">00:15 · 1080×1920</span></div>
      <div className="relative space-y-[1.4cqw]">
        {tracks.map((t, k) => (
          <div key={k} className="flex gap-[.6cqw] h-[6cqw]">
            {t.map(([n, w, c], j) => <span key={j} className={`rounded-[.8cqw] ${c} text-[2cqw] text-white/90 px-[1.2cqw] flex items-center overflow-hidden whitespace-nowrap`} style={{ width: `${w}%` }}>{n}</span>)}
          </div>
        ))}
        <i className="playhead absolute top-[-1.4cqw] bottom-[-1.4cqw] w-[.4cqw] bg-accent" />
      </div>
    </div></div>
  );
}

/* ---------- Komposisi siap pakai ---------- */
export function CreativeCollage({ className = '' }) {
  return (
    <Parallax className={`relative w-full aspect-[2/1] ${className}`}>
      <Layer z={14} className="absolute left-[4%] top-[8%] w-[30%]"><div className="-rotate-6 float lift"><Poster /></div></Layer>
      <Layer z={26} className="absolute left-[34%] top-[22%] w-[32%]"><div className="rotate-3 float lift" style={{ '--d': '-2s' }}><Social i={0} /></div></Layer>
      <Layer z={-12} className="absolute right-[4%] top-[2%] w-[24%]"><div className="rotate-6 float lift" style={{ '--d': '-4s' }}><Reel playing /></div></Layer>
    </Parallax>
  );
}

export function HeroVisual() {
  // Data pada mockup berganti berkala agar terasa "hidup"
  const [tick, setTick] = useState(0);
  React.useEffect(() => { const id = setInterval(() => setTick((t) => t + 1), 3800); return () => clearInterval(id); }, []);
  return (
    <Parallax className="relative w-full aspect-[5/4]" aria-hidden="true">
      <Layer z={-10} className="absolute left-0 top-[4%] w-[86%]"><div className="float"><Browser url="dasbor.usahaanda.id"><ScreenDash d={DASH[tick % 3]} /></Browser></div></Layer>
      <Layer z={22} className="absolute right-0 bottom-0 w-[29%]"><div className="float" style={{ '--d': '-2.5s' }}><Phone><ScreenIoT temp={[27, 29, 33][tick % 3]} /></Phone></div></Layer>
      <Layer z={34} className="absolute left-[3%] bottom-[1%] w-[25%]"><div className="-rotate-6 float" style={{ '--d': '-4s' }}><Poster /></div></Layer>
      <Layer z={44} className="absolute right-[6%] -top-[4%]">
        <div key={tick} className="flex items-center gap-2 rounded-full border border-white/12 bg-secondary/90 pl-2 pr-3 py-1.5 text-[11px] sm:text-xs text-slate-200 shadow-lg shadow-black/40 swap-in">
          <span className="w-5 h-5 rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center"><Check className="w-3 h-3" /></span>{['Pesanan baru tercatat otomatis', 'Laporan mingguan terkirim', 'Stok diperbarui dari gudang'][tick % 3]}
        </div>
      </Layer>
    </Parallax>
  );
}

export function GroupVisual({ slug }) {
  if (slug === 'website') return (
    <div className="relative w-full aspect-[16/10]">
      <Browser className="absolute left-0 top-0 w-[80%]"><ScreenSite /></Browser>
      <Phone className="absolute right-0 bottom-0 w-[22%] float"><ScreenSiteMobile /></Phone>
    </div>
  );
  if (slug === 'aplikasi') return (
    <div className="relative w-full aspect-[16/10] flex items-center"><Browser className="w-[92%] mx-auto" url="sistem.usahaanda.id"><ScreenDash /></Browser></div>
  );
  if (slug === 'iot') return (
    <div className="relative w-full aspect-[16/10] flex items-center justify-between gap-[4%]">
      <IotDevice className="w-[62%]" />
      <Phone className="w-[26%] float"><ScreenIoT /></Phone>
    </div>
  );
  return <CreativeCollage />;
}

export function ServiceVisual({ slug }) {
  switch (slug) {
    case 'web-development': return (
      <div className="relative w-full max-w-3xl aspect-[16/10.4]">
        <Browser className="absolute left-0 top-0 w-[82%]"><ScreenSite /></Browser>
        <Phone className="absolute right-0 bottom-0 w-[21%] float"><ScreenSiteMobile /></Phone>
      </div>
    );
    case 'web-application': return <Browser className="w-full max-w-3xl" url="sistem.usahaanda.id"><ScreenDash /></Browser>;
    case 'saas-development': return <Browser className="w-full max-w-3xl" url="app.produkanda.id/mulai"><ScreenPortal /></Browser>;
    case 'ui-ux-design': return <div className="w-full max-w-2xl"><Wireframe /></div>;
    case 'system-integration': return <div className="w-full max-w-3xl"><Hub /></div>;
    case 'iot-embedded-system': return (
      <div className="w-full max-w-3xl flex items-center justify-between gap-[4%]">
        <IotDevice className="w-[62%]" />
        <Phone className="w-[26%] float"><ScreenIoT /></Phone>
      </div>
    );
    case 'graphic-design': return <div className="w-full max-w-3xl"><CreativeCollage /></div>;
    case 'video-editing': return (
      <div className="w-full max-w-3xl grid grid-cols-12 gap-4 items-end">
        <Reel className="col-span-3" />
        <Reel className="col-span-3" title="Rina & Dimas" tone="from-[#4a3b2a] via-[#a1887f] to-[#f5efe6]" time="0:30" />
        <Timeline className="col-span-6" />
      </div>
    );
    case 'maintenance-support': return <div className="w-full max-w-xl"><Monitor /></div>;
    default: return null;
  }
}

// Galeri contoh karya untuk layanan kreatif. Klik karya untuk melihatnya lebih besar.
function Cap({ t, children, className = '', wide = false, onOpen }) {
  return (
    <figure className={`reveal ${className}`}>
      <button type="button" onClick={() => onOpen({ t, node: children, wide })} className="block w-full text-left lift cursor-zoom-in" aria-label={`Perbesar ${t}`}>{children}</button>
      <figcaption className="mt-3 mono text-xs text-slate-500">{t}</figcaption>
    </figure>
  );
}

function Lightbox({ item, onClose }) {
  React.useEffect(() => {
    if (!item) return;
    const k = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [item, onClose]);
  if (!item) return null;
  const node = React.isValidElement(item.node) && item.node.type === Reel ? React.cloneElement(item.node, { playing: true }) : item.node;
  return (
    <div role="dialog" aria-modal="true" aria-label={item.t} onClick={onClose} className="fixed inset-0 z-[60] bg-background/92 backdrop-blur-sm flex flex-col items-center justify-center gap-5 p-6 fade-in cursor-zoom-out">
      <div className={`w-full ${item.wide ? 'max-w-3xl' : 'max-w-sm'} swap-in`} onClick={(e) => e.stopPropagation()}>{node}</div>
      <p className="mono text-xs uppercase tracking-wide text-slate-400">{item.t} · Esc untuk menutup</p>
    </div>
  );
}

export function Gallery({ slug }) {
  const [item, setItem] = useState(null);
  const close = React.useCallback(() => setItem(null), []);
  const o = setItem;
  if (slug === 'video-editing') return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
      <Lightbox item={item} onClose={close} />
      <Cap onOpen={o} t="Video promosi"><Reel /></Cap>
      <Cap onOpen={o} t="Undangan video"><Reel title="Rina & Dimas" tone="from-[#4a3b2a] via-[#a1887f] to-[#f5efe6]" time="0:30" /></Cap>
      <Cap onOpen={o} t="Reels produk"><Reel title="Madu Hutan 250 g" tone="from-[#451a03] via-[#b45309] to-[#fbbf24]" time="0:20" /></Cap>
      <Cap onOpen={o} t="Konten acara"><Reel title="Grand Opening" tone="from-[#1e1b4b] via-[#4338ca] to-[#f43f5e]" time="0:12" /></Cap>
      <Cap onOpen={o} wide t="Penyuntingan dengan teks & musik" className="col-span-2 md:col-span-4"><Timeline /></Cap>
    </div>
  );
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
      <Lightbox item={item} onClose={close} />
      <Cap onOpen={o} t="Poster acara"><Poster /></Cap>
      <Cap onOpen={o} t="Flyer promo"><Flyer /></Cap>
      <Cap onOpen={o} t="Undangan digital" className="row-span-2"><Invite /></Cap>
      <Cap onOpen={o} t="Label kemasan"><PackLabel /></Cap>
      <Cap onOpen={o} wide t="Konten media sosial" className="col-span-2 md:col-span-3">
        <div className="grid grid-cols-3 gap-3"><Social i={0} /><Social i={1} /><Social i={2} /></div>
      </Cap>
      <Cap onOpen={o} wide t="Spanduk / banner" className="col-span-2"><Banner /></Cap>
      <Cap onOpen={o} t="Edit foto"><PhotoEdit /></Cap>
      <Cap onOpen={o} t="Ilustrasi vektor"><VectorArt /></Cap>
    </div>
  );
}

// Tampilan proyek portofolio (dummy)
export function ProjectShot({ shot }) {
  const wrap = 'absolute inset-0 flex items-center justify-center p-[7%]';
  switch (shot) {
    case 'dash': return <div className={wrap}><Browser className="w-full" url="apex.finance/dasbor"><ScreenDash /></Browser></div>;
    case 'shop': return <div className={wrap}><Browser className="w-full" url="velox.store"><ScreenShop /></Browser></div>;
    case 'portal': return <div className={wrap}><Browser className="w-full" url="nexus.app/mulai"><ScreenPortal /></Browser></div>;
    case 'app': return <div className={`${wrap} gap-[6%]`}><Phone className="w-[30%] -rotate-3"><ScreenApp /></Phone><Phone className="w-[30%] rotate-3 mt-[8%]"><ScreenIoT /></Phone></div>;
    case 'social': return <div className={`${wrap} gap-[4%]`}><Poster className="w-[30%] -rotate-3" /><div className="w-[56%] grid grid-cols-2 gap-[4%]"><Social i={0} /><Social i={1} /><Social i={2} /><Social i={3} /></div></div>;
    case 'label': return <div className={`${wrap} gap-[2%] items-end`}><PackLabel className="w-[28%]" /><PackLabel className="w-[36%]" /><PackLabel className="w-[26%]" /></div>;
    case 'invite': return <div className={`${wrap} gap-[6%]`}><Invite className="w-[30%] -rotate-3" /><Reel className="w-[30%] rotate-3" title="Rina & Dimas" tone="from-[#4a3b2a] via-[#a1887f] to-[#f5efe6]" time="0:30" /></div>;
    default: return null;
  }
}

export function ProductShot({ slug }) {
  if (slug === 'pulsedesk') return <Browser url="pulsedesk.id/kotak-masuk"><ScreenInbox /></Browser>;
  if (slug === 'pulsestock') return <Browser url="pulsestock.id/stok"><ScreenStock /></Browser>;
  return (
    <div className="grid grid-cols-[1fr_38%] gap-4 items-center">
      <IotDevice className="w-full" />
      <Phone><ScreenIoT /></Phone>
    </div>
  );
}


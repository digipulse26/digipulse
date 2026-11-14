import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';
import { Segmented } from './interact';
import {
  Browser, Phone, ScreenSite, ScreenSiteMobile, ScreenDash, DASH, ScreenPortal, Hub, HUB_NODES, IotDevice, ScreenIoT,
  CreativeCollage, Reel, Timeline, Monitor,
} from './visuals';

/* Versi interaktif dari visual setiap layanan: pengunjung bisa mencoba, bukan hanya melihat. */

const Hint = ({ children }) => <p className="mono text-[11px] uppercase tracking-wide text-slate-500">{children}</p>;

function Frame({ controls, hint, children }) {
  return (
    <div className="w-full flex flex-col items-center gap-8">
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3">
        <Hint>{hint}</Hint>
        {controls}
      </div>
      {children}
    </div>
  );
}

function DevicePlay() {
  const [v, setV] = useState('desktop');
  const m = v === 'mobile';
  return (
    <Frame hint="Satu website, nyaman di semua layar" controls={<Segmented label="Tampilan" value={v} onChange={setV} opts={[['desktop', 'Desktop'], ['mobile', 'Ponsel']]} />}>
      <div className="relative w-full max-w-3xl aspect-[16/10.4]">
        <div className={`absolute left-0 top-0 w-[82%] transition-all duration-700 ${m ? 'opacity-25 scale-[.94] blur-[2px]' : ''}`}><Browser><ScreenSite /></Browser></div>
        <div className="absolute bottom-0 transition-all duration-700 ease-[cubic-bezier(.2,.8,.2,1)]" style={{ right: m ? '37%' : '0%', width: m ? '27%' : '21%' }}><Phone><ScreenSiteMobile /></Phone></div>
      </div>
    </Frame>
  );
}

function DashPlay() {
  const [r, setR] = useState(0);
  return (
    <Frame hint="Data diperbarui otomatis" controls={<Segmented label="Rentang" value={r} onChange={setR} opts={[[0, 'Hari ini'], [1, '7 hari'], [2, '30 hari']]} />}>
      <Browser className="w-full max-w-3xl" url="sistem.usahaanda.id"><ScreenDash d={DASH[r]} /></Browser>
    </Frame>
  );
}

function PortalPlay() {
  const [sel, setSel] = useState(1);
  return (
    <Frame hint="Klik paket untuk memilih" controls={<span className="mono text-[11px] uppercase tracking-wide text-primary-soft">Paket {['Dasar', 'Usaha', 'Tim'][sel]} dipilih</span>}>
      <Browser className="w-full max-w-3xl" url="app.produkanda.id/mulai"><ScreenPortal sel={sel} onSel={setSel} /></Browser>
    </Frame>
  );
}

// Penggeser sebelum/sesudah: wireframe di kiri, desain akhir di kanan
function WirePlay() {
  const [x, setX] = useState(50);
  const touched = useRef(false);
  useEffect(() => {
    let raf, t0 = performance.now();
    const loop = (t) => { if (touched.current) return; setX(50 + Math.sin((t - t0) / 1100) * 30); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);
  const Bar = ({ w, c = 'bg-white/20' }) => <i className={`block h-[2.4cqw] rounded-full ${c}`} style={{ width: w }} />;
  const Wire = () => (
    <div className="absolute inset-0 p-[6cqw] flex flex-col gap-[4cqw] bg-[#0a1020]">
      <span className="mono text-[3cqw] text-slate-500">WIREFRAME</span>
      <i className="h-[26cqw] rounded-[2cqw] border border-dashed border-white/25" />
      <Bar w="80%" /><Bar w="55%" c="bg-white/10" />
      <div className="grid grid-cols-2 gap-[3cqw]"><i className="h-[16cqw] rounded-[2cqw] border border-dashed border-white/25" /><i className="h-[16cqw] rounded-[2cqw] border border-dashed border-white/25" /></div>
      <i className="mt-auto h-[8cqw] w-[50%] rounded-full border border-dashed border-white/30" />
    </div>
  );
  const Final = () => (
    <div className="absolute inset-0 p-[6cqw] flex flex-col gap-[4cqw] bg-[#0f1733]">
      <span className="mono text-[3cqw] text-primary-soft text-right">DESAIN AKHIR</span>
      <i className="h-[26cqw] rounded-[2cqw] bg-gradient-to-br from-primary/70 via-primary-soft/40 to-accent/50" />
      <span className="text-[6cqw] font-semibold text-white display leading-tight">Pesan meja dalam 30 detik</span>
      <div className="grid grid-cols-2 gap-[3cqw]"><i className="h-[16cqw] rounded-[2cqw] bg-white/[0.07]" /><i className="h-[16cqw] rounded-[2cqw] bg-white/[0.07]" /></div>
      <i className="mt-auto h-[8cqw] w-[50%] rounded-full bg-primary" />
    </div>
  );
  return (
    <Frame hint="Geser untuk membandingkan" controls={<span className="mono text-[11px] uppercase tracking-wide text-slate-400">{Math.round(x)}% desain akhir</span>}>
      <div className="@container w-full max-w-sm">
        <div className="relative aspect-[3/4] rounded-[3cqw] overflow-hidden border border-white/12 select-none">
          <Wire />
          <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${x}%)` }}><Final /></div>
          <div className="absolute inset-y-0 w-px bg-white pointer-events-none" style={{ left: `${x}%` }}>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center text-sm font-bold shadow-lg">‹›</span>
          </div>
          <input type="range" min="0" max="100" value={x} aria-label="Bandingkan wireframe dan desain akhir"
            onPointerDown={() => { touched.current = true; }} onChange={(e) => { touched.current = true; setX(+e.target.value); }}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize" style={{ touchAction: 'pan-y' }} />
        </div>
      </div>
    </Frame>
  );
}

const HUB_MSG = ['Pesanan WhatsApp tercatat', 'Pembayaran terkonfirmasi', 'Data spreadsheet tersinkron', 'Stok mitra diperbarui'];
function HubPlay() {
  const [packet, setPacket] = useState(null);
  const [log, setLog] = useState([]);
  const user = useRef(false);
  const send = (i) => {
    setPacket({ i, id: Date.now() });
    setTimeout(() => setLog((l) => [`${new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}  ${HUB_MSG[i]}`, ...l].slice(0, 3)), 850);
  };
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => { if (!user.current) send(i++ % HUB_NODES.length); }, 2400);
    return () => clearInterval(id);
  }, []);
  return (
    <Frame hint="Klik salah satu sumber data" controls={null}>
      <div className="w-full max-w-3xl"><Hub packet={packet} active={packet ? packet.i : -1} onNode={(i) => { user.current = true; send(i); }} /></div>
      <ul className="w-full max-w-3xl mono text-xs text-slate-400 space-y-1.5 min-h-[4.5rem]" aria-live="polite">
        {log.map((l, k) => <li key={l + k} className={`swap-in ${k ? 'opacity-50' : 'text-emerald-300'}`}>{l}</li>)}
      </ul>
    </Frame>
  );
}

function IotPlay() {
  const [t, setT] = useState(27);
  return (
    <Frame hint="Geser suhu sensor, lihat notifikasinya" controls={
      <label className="flex items-center gap-4 w-full sm:w-auto">
        <span className="mono text-xs text-slate-400 w-10">{t}°C</span>
        <input type="range" min="18" max="40" value={t} onChange={(e) => setT(+e.target.value)} className="dial w-full sm:w-56" aria-label="Suhu sensor" />
      </label>
    }>
      <div className="w-full max-w-3xl flex items-center justify-between gap-[4%]">
        <IotDevice className="w-[62%]" alert={t > 30} />
        <Phone className="w-[26%]"><ScreenIoT temp={t} /></Phone>
      </div>
    </Frame>
  );
}

function VideoPlay() {
  const [on, setOn] = useState(false);
  return (
    <Frame hint="Putar pratinjau hasil suntingan" controls={
      <button type="button" onClick={() => setOn(!on)} className="btn btn-ghost !py-2.5 text-sm">{on ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}{on ? 'Jeda' : 'Putar'}</button>
    }>
      <div className="w-full max-w-3xl grid grid-cols-12 gap-4 items-end">
        <button type="button" onClick={() => setOn(!on)} className="col-span-4 sm:col-span-3" aria-label="Putar atau jeda"><Reel playing={on} /></button>
        <button type="button" onClick={() => setOn(!on)} className="col-span-4 sm:col-span-3" aria-label="Putar atau jeda"><Reel playing={on} title="Rina & Dimas" tone="from-[#4a3b2a] via-[#a1887f] to-[#f5efe6]" time="0:30" /></button>
        <Timeline className="col-span-12 sm:col-span-6" playing={on} />
      </div>
    </Frame>
  );
}

export function ServicePlay({ slug }) {
  switch (slug) {
    case 'web-development': return <DevicePlay />;
    case 'web-application': return <DashPlay />;
    case 'saas-development': return <PortalPlay />;
    case 'ui-ux-design': return <WirePlay />;
    case 'system-integration': return <HubPlay />;
    case 'iot-embedded-system': return <IotPlay />;
    case 'graphic-design': return <Frame hint="Gerakkan kursor atau gulir, arahkan ke karya"><div className="w-full max-w-3xl"><CreativeCollage /></div></Frame>;
    case 'video-editing': return <VideoPlay />;
    case 'maintenance-support': return <Frame hint="Tekan “Cek sekarang” untuk memeriksa sistem"><div className="w-full max-w-xl"><Monitor /></div></Frame>;
    default: return null;
  }
}

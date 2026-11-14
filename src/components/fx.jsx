import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Kartu 3D yang miring mengikuti kursor (efek AR/VR). Tidak aktif di layar sentuh / reduced motion.
export function Tilt({ children, className = '', max = 10, as: Tag = 'div', ...rest }) {
  const ref = useRef(null);
  const move = (e) => {
    const el = ref.current; if (!el) return;
    el.classList.add('touching');
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
    el.style.setProperty('--ry', `${(px - 0.5) * max * 2}deg`);
    el.style.setProperty('--rx', `${(0.5 - py) * max * 2}deg`);
    el.style.setProperty('--gx', `${px * 100}%`);
    el.style.setProperty('--gy', `${py * 100}%`);
  };
  const leave = () => { const el = ref.current; if (el) { el.classList.remove('touching'); el.style.setProperty('--rx', '0deg'); el.style.setProperty('--ry', '0deg'); } };
  return (
    <Tag ref={ref} onPointerMove={move} onPointerUp={leave} onPointerCancel={leave} onPointerLeave={leave} className={`tilt ${className}`} {...rest}>
      {children}
      <span className="glare" />
    </Tag>
  );
}

// Partikel ringan di canvas: jumlah kecil, berhenti saat tab/section tidak terlihat
export function Particles({ density = 38 }) {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext('2d');
    let w = 0, h = 0, raf = 0, visible = true, mx = -999, my = -999;
    const small = window.innerWidth < 768; const n = small ? Math.round(density * 0.45) : density; let lastT = 0;
    const ps = Array.from({ length: n }, () => ({ x: Math.random(), y: Math.random(), vx: (Math.random() - 0.5) * 0.00018, vy: (Math.random() - 0.5) * 0.00018, r: Math.random() * 1.8 + 0.6, a: Math.random() > 0.88 }));
    const size = () => { const dpr = Math.min(window.devicePixelRatio || 1, 1.5); w = c.clientWidth; h = c.clientHeight; c.width = w * dpr; c.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
    const draw = (t = 0) => {
      raf = requestAnimationFrame(draw);
      if (!visible || document.hidden) return;
      if (small && t - lastT < 33) return;
      lastT = t;
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < ps.length; i++) {
        const p = ps[i];
        p.x += p.vx * 16; p.y += p.vy * 16;
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;
        const x = p.x * w, y = p.y * h;
        const dx = x - mx, dy = y - my, d = Math.hypot(dx, dy);
        const k = d < 120 ? (120 - d) / 120 : 0;
        ctx.fillStyle = p.a ? `rgba(244,63,94,${0.5 + k * 0.4})` : `rgba(203,213,225,${0.35 + k * 0.5})`;
        ctx.beginPath(); ctx.arc(x + (dx / (d || 1)) * k * 14, y + (dy / (d || 1)) * k * 14, p.r + k * 2, 0, 6.283); ctx.fill();
        for (let j = i + 1; j < ps.length; j++) {
          const q = ps[j], ex = x - q.x * w, ey = y - q.y * h, dd = ex * ex + ey * ey;
          if (dd < 11000) { ctx.strokeStyle = `rgba(165,180,252,${0.1 * (1 - dd / 11000)})`; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(q.x * w, q.y * h); ctx.stroke(); }
        }
      }
    };
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(c);
    const pm = (e) => { const r = c.getBoundingClientRect(); mx = e.clientX - r.left; my = e.clientY - r.top; };
    size(); raf = requestAnimationFrame(draw);
    window.addEventListener('resize', size);
    window.addEventListener('pointermove', pm, { passive: true });
    return () => { cancelAnimationFrame(raf); io.disconnect(); window.removeEventListener('resize', size); window.removeEventListener('pointermove', pm); };
  }, [density]);
  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" />;
}

export function Marquee({ items, className = '', rev = false }) {
  const row = items.map((t, i) => (
    <span key={i} className="flex items-center whitespace-nowrap">
      <span className="mx-6 md:mx-10">{t}</span><span className="mono text-[0.5em] opacity-40">/</span>
    </span>
  ));
  return (
    <div className={`marquee ${rev ? 'rev' : ''} ${className}`} aria-hidden="true">
      <div className="marquee-track">{row}</div>
      <div className="marquee-track">{row}</div>
    </div>
  );
}

// Garis kolom tipis di latar, memberi struktur seperti kertas grid desain
export function Rules() {
  return (
    <div className="rules" aria-hidden="true">
      <div className="max-w-7xl mx-auto px-6"><i /><i /><i /><i /></div>
    </div>
  );
}

export function Label({ n, children, className = '' }) {
  return <span className={`label ${className}`}>{n && <span className="n">{n}</span>}{children}</span>;
}

export function CtaBand({ title = 'Siap mewujudkan ide Anda?', text = 'Tidak perlu persiapan yang rumit. Ceritakan gagasan, kebutuhan, atau tantangan Anda, dan kami bantu menentukan langkah terbaik berikutnya.' }) {
  const words = title.split(' ');
  const last = words.pop();
  return (
    <section className="relative px-6 py-24 md:py-36 border-t rule overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-8 reveal">
          <Label>Mulai proyek</Label>
          <h2 className="mt-6 text-[2.6rem] leading-[1] sm:text-6xl md:text-[5.5rem]">{words.join(' ')} <span className="serif">{last}</span></h2>
        </div>
        <div className="md:col-span-4 reveal" style={{ '--d': '120ms' }}>
          <p className="text-slate-400 leading-relaxed">{text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/kontak" className="btn btn-primary">Ceritakan ide Anda <ArrowRight className="w-4 h-4" /></Link>
            <Link to="/portofolio" className="btn btn-ghost">Lihat portofolio</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

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
    const ps = Array.from({ length: n }, () => ({ x: Math.random(), y: Math.random(), vx: (Math.random() - 0.5) * 0.00018, vy: (Math.random() - 0.5) * 0.00018, r: Math.random() * 1.8 + 0.6, a: Math.random() > 0.7 }));
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
        ctx.fillStyle = p.a ? `rgba(244,63,94,${0.55 + k * 0.4})` : `rgba(129,140,248,${0.55 + k * 0.4})`;
        ctx.beginPath(); ctx.arc(x + (dx / (d || 1)) * k * 14, y + (dy / (d || 1)) * k * 14, p.r + k * 2, 0, 6.283); ctx.fill();
        for (let j = i + 1; j < ps.length; j++) {
          const q = ps[j], ex = x - q.x * w, ey = y - q.y * h, dd = ex * ex + ey * ey;
          if (dd < 11000) { ctx.strokeStyle = `rgba(129,140,248,${0.14 * (1 - dd / 11000)})`; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(q.x * w, q.y * h); ctx.stroke(); }
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
      <span className="mx-6 md:mx-10">{t}</span><span className="text-accent">✦</span>
    </span>
  ));
  return (
    <div className={`marquee ${rev ? 'rev' : ''} ${className}`} aria-hidden="true">
      <div className="marquee-track">{row}</div>
      <div className="marquee-track">{row}</div>
    </div>
  );
}

export function CtaBand({ title = 'Siap mewujudkan ide Anda?', text = 'Tidak perlu persiapan yang rumit. Ceritakan gagasan, kebutuhan, atau tantangan Anda, dan kami bantu menentukan langkah terbaik berikutnya.' }) {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto relative overflow-hidden rounded-[2rem] p-10 md:p-16 text-center bg-gradient-to-br from-primary/25 via-secondary to-accent/20 border border-white/10">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary/30 blur-3xl liquid" />
        <div className="relative reveal">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">{title}</h2>
          <p className="text-slate-300 mt-4 max-w-xl mx-auto">{text}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/kontak" className="btn btn-primary">Ceritakan Ide Anda <ArrowRight className="w-4 h-4" /></Link>
            <Link to="/portofolio" className="btn btn-ghost">Lihat Portofolio</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PageHead({ eyebrow, title, text, children, className = '' }) {
  return (
    <div className={`relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-16 ${className}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h1 className="mt-5 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] max-w-4xl">{title}</h1>
      {text && <p className="mt-6 text-lg text-slate-400 max-w-2xl leading-relaxed">{text}</p>}
      {children}
    </div>
  );
}

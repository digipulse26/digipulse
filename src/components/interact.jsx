import React, { useEffect, useRef, useState } from 'react';

/*
  Efek interaktif bersama. Semua ringan: satu rAF per efek, berhenti saat elemen
  tidak terlihat, dan menyesuaikan perangkat (kursor di laptop, gulir di ponsel).
*/

export const isFine = () => typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
export const isReduced = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Menulis --mx dan --my (-1..1) ke elemen. Laptop: posisi kursor. Ponsel: posisi gulir.
export function useParallax(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el || isReduced()) return;
    let raf = 0, tx = 0, ty = 0, x = 0, y = 0, visible = true;
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(el);
    const loop = () => {
      raf = requestAnimationFrame(loop);
      if (!visible) return;
      const dx = tx - x, dy = ty - y;
      if (Math.abs(dx) < 0.001 && Math.abs(dy) < 0.001) return;
      x += dx * 0.08; y += dy * 0.08;
      el.style.setProperty('--mx', x.toFixed(3));
      el.style.setProperty('--my', y.toFixed(3));
    };
    const fine = isFine();
    const onPointer = (e) => { tx = (e.clientX / window.innerWidth) * 2 - 1; ty = (e.clientY / window.innerHeight) * 2 - 1; };
    const onScroll = () => {
      const r = el.getBoundingClientRect();
      const p = (r.top + r.height / 2) / window.innerHeight;
      ty = Math.max(-1, Math.min(1, (p - 0.5) * 2));
      tx = ty * -0.6;
    };
    if (fine) window.addEventListener('pointermove', onPointer, { passive: true });
    else { window.addEventListener('scroll', onScroll, { passive: true }); onScroll(); }
    loop();
    return () => {
      cancelAnimationFrame(raf); io.disconnect();
      window.removeEventListener('pointermove', onPointer);
      window.removeEventListener('scroll', onScroll);
    };
  }, [ref]);
}

export function Parallax({ className = '', children, ...rest }) {
  const ref = useRef(null);
  useParallax(ref);
  return <div ref={ref} className={className} {...rest}>{children}</div>;
}

// Lapisan kedalaman di dalam <Parallax>: z besar = bergerak lebih jauh
export function Layer({ z = 10, className = '', style, children }) {
  return <div className={`px ${className}`} style={{ '--z': z, ...style }}>{children}</div>;
}

// Tombol magnetis: .btn dan .magnet sedikit tertarik ke arah kursor (laptop saja)
export function useMagnetic() {
  useEffect(() => {
    if (!isFine() || isReduced()) return;
    let cur = null;
    const reset = () => { if (cur) { cur.style.transform = ''; cur = null; } };
    const move = (e) => {
      const b = e.target.closest ? e.target.closest('.btn, .magnet') : null;
      if (b !== cur) reset();
      if (!b) return;
      cur = b;
      const r = b.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
      b.style.transform = `translate(${dx * 0.18}px, ${dy * 0.3}px)`;
    };
    document.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerleave', reset);
    window.addEventListener('scroll', reset, { passive: true });
    return () => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerleave', reset);
      window.removeEventListener('scroll', reset);
    };
  }, []);
}

// Kecepatan gulir memengaruhi laju animasi (marquee), termasuk arah balik saat menggulir ke atas
export function useScrollVelocity(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el || isReduced() || !el.getAnimations) return;
    let raf = 0, last = window.scrollY, v = 0, visible = true, anims = [];
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(el);
    const t = setTimeout(() => { anims = el.getAnimations({ subtree: true }); }, 100);
    const loop = () => {
      raf = requestAnimationFrame(loop);
      const y = window.scrollY, d = y - last; last = y;
      if (!visible || !anims.length) return;
      v += (d - v) * 0.12;
      const rate = (1 + Math.min(Math.abs(v) * 0.22, 5)) * (v < -0.4 ? -1 : 1);
      for (const a of anims) if (Math.abs(a.playbackRate - rate) > 0.02) a.playbackRate = rate;
    };
    loop();
    return () => { cancelAnimationFrame(raf); clearTimeout(t); io.disconnect(); };
  }, [ref]);
}

// Elemen yang mengikuti kursor dengan sedikit jeda (pratinjau, label "Lihat")
export function CursorFollower({ show, children }) {
  const ref = useRef(null);
  const [fine] = useState(isFine);
  useEffect(() => {
    if (!fine) return;
    let x = window.innerWidth / 2, y = window.innerHeight / 2, tx = x, ty = y, raf = 0;
    const mv = (e) => { tx = e.clientX; ty = e.clientY; };
    window.addEventListener('pointermove', mv, { passive: true });
    const loop = () => {
      raf = requestAnimationFrame(loop);
      x += (tx - x) * 0.16; y += (ty - y) * 0.16;
      if (ref.current) ref.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    loop();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('pointermove', mv); };
  }, [fine]);
  if (!fine) return null;
  return (
    <div ref={ref} className="fixed left-0 top-0 z-50 pointer-events-none" aria-hidden="true">
      <div className={`follower ${show ? 'on' : ''}`}>{children}</div>
    </div>
  );
}

// Kontrol pilihan bergaya garis tipis (bukan pill)
export function Segmented({ opts, value, onChange, label }) {
  return (
    <div role="radiogroup" aria-label={label} className="inline-flex border border-white/15 rounded-full p-1 mono text-[11px] uppercase tracking-wide">
      {opts.map(([v, t]) => (
        <button key={v} type="button" role="radio" aria-checked={value === v} onClick={() => onChange(v)}
          className={`px-3.5 py-1.5 rounded-full transition-colors ${value === v ? 'bg-white text-slate-950' : 'text-slate-400 hover:text-white'}`}>{t}</button>
      ))}
    </div>
  );
}

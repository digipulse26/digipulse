import { useEffect, useRef, useState } from 'react';

export const reduced = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Menambah kelas "in" pada elemen .reveal saat masuk layar (sekali saja)
export function useRevealAll() {
  useEffect(() => {
    const root = document.getElementById('root') || document.body;
    if (!('IntersectionObserver' in window)) { root.querySelectorAll('.reveal').forEach(e => e.classList.add('in')); return; }
    document.documentElement.classList.add('rv-on');
    const seen = new WeakSet();
    const io = new IntersectionObserver((es) => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.08, rootMargin: '0px 0px -4% 0px' });
    const scan = () => root.querySelectorAll('.reveal:not(.in)').forEach(e => { if (!seen.has(e)) { seen.add(e); io.observe(e); } });
    let raf = 0;
    const mo = new MutationObserver(() => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; scan(); }); });
    mo.observe(root, { childList: true, subtree: true });
    scan();
    return () => { io.disconnect(); mo.disconnect(); cancelAnimationFrame(raf); };
  }, []);
}

// Progres scroll 0..1 untuk elemen tinggi (scrollytelling). Menulis CSS var tanpa re-render.
export function useScrollyProgress(count) {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    let raf = 0, last = -1;
    const calc = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const p = Math.min(1, Math.max(0, -r.top / (total || 1)));
      el.style.setProperty('--p', p.toFixed(4));
      const i = Math.min(count - 1, Math.floor(p * count));
      if (i !== last) { last = i; setActive(i); }
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(calc); };
    calc();
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    return () => { window.removeEventListener('scroll', on); window.removeEventListener('resize', on); cancelAnimationFrame(raf); };
  }, [count]);
  return [ref, active];
}

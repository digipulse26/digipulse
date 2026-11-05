import React, { useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const bar = useRef(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const d = document.documentElement;
      const total = d.scrollHeight - d.clientHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${total > 0 ? d.scrollTop / total : 0})`;
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    return () => { window.removeEventListener('scroll', on); window.removeEventListener('resize', on); cancelAnimationFrame(raf); };
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] pointer-events-none">
      <div ref={bar} className="h-full bg-gradient-to-r from-primary to-accent origin-left" style={{ transform: 'scaleX(0)' }} />
    </div>
  );
}

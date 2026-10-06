'use client';
import { useEffect } from 'react';

/** One-time section entrances establish reading order; content is always visible. */
export function EditorialMotion() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches || !('IntersectionObserver' in window)) return;
    const animations: Animation[] = [];
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const animation = entry.target.animate(
          [{ transform: 'translateY(22px)', opacity: 0.65 }, { transform: 'translateY(0)', opacity: 1 }],
          { duration: 650, easing: 'cubic-bezier(.2,.7,.2,1)' }
        );
        animations.push(animation);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.12 });
    document.querySelectorAll('[data-editorial-reveal]').forEach(element => observer.observe(element));
    const stop = () => { if (preference.matches) { observer.disconnect(); animations.forEach(animation => animation.cancel()); } };
    preference.addEventListener('change', stop);
    return () => { observer.disconnect(); preference.removeEventListener('change', stop); animations.forEach(animation => animation.cancel()); };
  }, []);
  return null;
}

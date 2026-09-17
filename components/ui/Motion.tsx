'use client';

import { useEffect } from 'react';

/**
 * Ports the prototype's motion behaviours as one delegated controller so pages
 * can stay server components and keep the handoff's data-attribute markup:
 *
 *   data-reveal      opacity 0→1 + translateY(22px)→0 on intersect, 70ms stagger (max 350ms)
 *   data-count       count-up from data-from to data-count, 1500ms ease-out cubic
 *   data-tilt        rotateX/Y from pointer, glow overlay follows cursor
 *   data-magnet      translate up to ±8px toward pointer
 *   data-parallax    translateY(scrollY * factor)
 *
 * All of it is disabled under prefers-reduced-motion.
 *
 * The controller is created once and lives for the whole session. It must not
 * be rebuilt on route changes: the MutationObserver callback for the new page's
 * DOM runs before React's effect cleanup, so a per-route rebuild hands the new
 * sections to an observer that is disconnected a moment later, and they stay
 * invisible. New pages are picked up by the MutationObserver instead.
 */
export default function Motion() {
  useEffect(() => {
    const reduced =
      typeof matchMedia === 'function' &&
      matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Hidden elements that have not been revealed yet. Released on teardown so
    // a remount (Strict Mode, HMR) never inherits hidden, unobserved content.
    const pending = new Set<HTMLElement>();

    const count = (el: HTMLElement) => {
      const to = parseFloat(el.dataset.count || '0');
      const from = parseFloat(el.dataset.from || '0');
      if (reduced) {
        el.textContent = String(to);
        return;
      }
      const t0 = performance.now();
      const dur = 1500;
      const step = (t: number) => {
        const p = Math.min(1, (t - t0) / dur);
        const e = 1 - Math.pow(1 - p, 3);
        el.textContent = String(Math.round(from + (to - from) * e));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const io =
      typeof IntersectionObserver === 'function'
        ? new IntersectionObserver(
            (entries) => {
              for (const e of entries) {
                const el = e.target as HTMLElement;
                // Already scrolled past (deep link, restored scroll position,
                // anchor jump): show it outright rather than leaving it hidden.
                if (!e.isIntersecting) {
                  if (e.boundingClientRect.bottom <= 0) show(el);
                  continue;
                }
                // A section taller than the viewport can never reach ratio 0.1,
                // so any visible part counts for those.
                const tall = e.boundingClientRect.height > innerHeight * 0.9;
                if (e.intersectionRatio >= 0.1 || tall) show(el);
              }
            },
            { threshold: [0, 0.1] },
          )
        : null;

    function show(el: HTMLElement) {
      pending.delete(el);
      el.style.opacity = '1';
      el.style.transform = 'none';
      io?.unobserve(el);
      if (el.hasAttribute('data-count')) count(el);
    }

    // Tilt cards — bound per element, as in the prototype's onMouseMove/onMouseLeave.
    const onTiltMove = (e: MouseEvent) => {
      const el = e.currentTarget as HTMLElement;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      el.style.transition = 'transform .08s linear, box-shadow .5s, border-color .3s';
      el.style.transform = `perspective(1000px) rotateX(${((0.5 - py) * 10).toFixed(2)}deg) rotateY(${((px - 0.5) * 12).toFixed(2)}deg) translateY(-6px) scale(1.015)`;
      const g = el.querySelector<HTMLElement>('[data-tilt-glow]');
      if (g) {
        g.style.background = `radial-gradient(360px circle at ${(px * 100).toFixed(1)}% ${(py * 100).toFixed(1)}%,rgba(10,112,184,.16),transparent 60%)`;
      }
    };
    const onTiltLeave = (e: MouseEvent) => {
      const el = e.currentTarget as HTMLElement;
      el.style.transition = 'transform .6s cubic-bezier(.2,.7,.2,1), box-shadow .5s, border-color .3s';
      el.style.transform = 'none';
    };

    const scan = () => {
      document
        .querySelectorAll<HTMLElement>('[data-reveal]:not([data-seen]), [data-count]:not([data-seen])')
        .forEach((el, i) => {
          el.setAttribute('data-seen', '');
          // Without an observer nothing could ever reveal it, so never hide it.
          if (reduced || !io) {
            if (el.hasAttribute('data-count')) count(el);
            return;
          }
          const d = Math.min((i % 6) * 70, 350);
          el.style.opacity = '0';
          el.style.transform = 'translateY(22px)';
          el.style.transition = `opacity .7s cubic-bezier(.2,.7,.2,1) ${d}ms, transform .7s cubic-bezier(.2,.7,.2,1) ${d}ms, border-color .3s, box-shadow .45s, background .3s`;
          pending.add(el);
          io.observe(el);
        });

      if (reduced) return;
      document.querySelectorAll<HTMLElement>('[data-tilt]:not([data-tilt-bound])').forEach((el) => {
        el.setAttribute('data-tilt-bound', '');
        el.addEventListener('mousemove', onTiltMove);
        el.addEventListener('mouseleave', onTiltLeave);
      });
    };

    let magnetEl: HTMLElement | null = null;
    const magnet = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const el = target?.closest?.('[data-magnet]') as HTMLElement | null;
      if (magnetEl && magnetEl !== el) {
        magnetEl.style.transform = '';
        magnetEl = null;
      }
      if (!el) return;
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
      const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
      el.style.transform = `translate(${(dx * 8).toFixed(1)}px, ${(dy * 8).toFixed(1)}px)`;
      magnetEl = el;
    };

    const parallax = () => {
      if (window.innerWidth < 760) return;
      const y = window.scrollY;
      document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
        el.style.transform = `translateY(${(y * parseFloat(el.dataset.parallax || '0')).toFixed(1)}px)`;
      });
    };

    scan();
    // Re-scan once the streamed page has settled.
    const raf = requestAnimationFrame(scan);
    // Every later page arrives as a DOM mutation, so this is what handles
    // client-side navigation.
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    if (!reduced) {
      document.addEventListener('mousemove', magnet);
      window.addEventListener('scroll', parallax, { passive: true });
    }

    return () => {
      cancelAnimationFrame(raf);
      mo.disconnect();
      io?.disconnect();
      pending.forEach((el) => {
        el.removeAttribute('data-seen');
        el.style.opacity = '';
        el.style.transform = '';
        el.style.transition = '';
      });
      pending.clear();
      document.removeEventListener('mousemove', magnet);
      window.removeEventListener('scroll', parallax);
      document.querySelectorAll<HTMLElement>('[data-tilt-bound]').forEach((el) => {
        el.removeEventListener('mousemove', onTiltMove);
        el.removeEventListener('mouseleave', onTiltLeave);
        el.removeAttribute('data-tilt-bound');
      });
    };
  }, []);

  return null;
}

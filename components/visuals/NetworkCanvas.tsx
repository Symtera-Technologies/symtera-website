'use client';

import { useCallback, useEffect, useRef } from 'react';

type Node = { x: number; y: number; vx: number; vy: number; kind: 'g' | 'b' | 's'; s: number };

const COL = { g: '140,198,63', b: '10,112,184', s: '27,160,216' } as const;

/**
 * The hero "node and branch" motif: 40 drifting nodes, proximity links and
 * three orbit rings on a canvas. Ported from the prototype's netRef().
 * Static (one frame) under prefers-reduced-motion.
 */
export default function NetworkCanvas() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const raf = useRef(0);

  const start = useCallback((c: HTMLCanvasElement) => {
    const N = 40;
    const nodes: Node[] = Array.from({ length: N }, (_, i) => {
      const a = Math.random() * Math.PI * 2;
      const r = 0.12 + Math.random() * 0.36;
      return {
        x: 0.5 + Math.cos(a) * r,
        y: 0.5 + Math.sin(a) * r,
        vx: (Math.random() - 0.5) * 0.0007,
        vy: (Math.random() - 0.5) * 0.0007,
        kind: i % 5 === 0 ? 'g' : i % 3 === 0 ? 'b' : 's',
        s: 2 + Math.random() * 3,
      };
    });

    const ctx = c.getContext('2d');
    if (!ctx) return () => {};
    let W = 0;
    let H = 0;
    const size = () => {
      const r = c.getBoundingClientRect();
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      W = r.width;
      H = r.height;
      c.width = W * dpr;
      c.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    size();
    const ro = new ResizeObserver(size);
    ro.observe(c);

    const motion = !matchMedia('(prefers-reduced-motion: reduce)').matches;
    let t = 0;

    const draw = () => {
      t += 0.004;
      ctx.clearRect(0, 0, W, H);
      const cx = W / 2;
      const cy = H / 2;
      const R = Math.min(W, H) * 0.42;

      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.ellipse(
          cx,
          cy,
          R * (0.55 + i * 0.22),
          R * (0.55 + i * 0.22) * 0.38,
          -0.5 + i * 0.35 + (motion ? Math.sin(t + i) * 0.05 : 0),
          0,
          Math.PI * 2,
        );
        ctx.strokeStyle = `rgba(27,160,216,${0.16 - i * 0.04})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      if (motion) {
        for (const n of nodes) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0.06 || n.x > 0.94) n.vx *= -1;
          if (n.y < 0.06 || n.y > 0.94) n.vy *= -1;
        }
      }

      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = (a.x - b.x) * W;
          const dy = (a.y - b.y) * H;
          const d = Math.hypot(dx, dy);
          const max = W * 0.19;
          if (d < max) {
            const al = (1 - d / max) * 0.7;
            const gg = a.kind === 'g' || b.kind === 'g';
            ctx.strokeStyle = `rgba(${gg ? COL.g : COL.s},${al})`;
            ctx.lineWidth = gg ? 1.6 : 1;
            ctx.beginPath();
            ctx.moveTo(a.x * W, a.y * H);
            ctx.lineTo(b.x * W, b.y * H);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        const x = n.x * W;
        const y = n.y * H;
        const s = n.kind === 'g' ? n.s + 4 : n.s + 1;
        if (n.kind !== 's') {
          const g = ctx.createRadialGradient(x, y, 0, x, y, s * 5);
          g.addColorStop(0, `rgba(${COL[n.kind]},.5)`);
          g.addColorStop(1, `rgba(${COL[n.kind]},0)`);
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(x, y, s * 5, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.fillStyle = `rgb(${COL[n.kind]})`;
        ctx.beginPath();
        ctx.arc(x, y, s, 0, Math.PI * 2);
        ctx.fill();
      }

      if (motion) raf.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf.current);
      ro.disconnect();
    };
  }, []);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    return start(c);
  }, [start]);

  return <canvas ref={ref} aria-hidden="true" style={{ width: '100%', height: '100%', display: 'block' }} />;
}

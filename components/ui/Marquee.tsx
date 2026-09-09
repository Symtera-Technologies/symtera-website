import Image from 'next/image';
import { MARQUEE_LOGOS } from '@/content/site';
import { PARTNER_GROUPS } from '@/content/partners';

/** The partner-name marquee: one 60s row, masked at both edges. */
export function PartnerMarquee() {
  const flat = PARTNER_GROUPS.flatMap((g) => g.items);
  const items = [...flat, ...flat];
  return (
    <div
      data-marquee-pause
      style={{
        overflow: 'hidden',
        maskImage: 'linear-gradient(to right,transparent,#000 8%,#000 92%,transparent)',
        WebkitMaskImage: 'linear-gradient(to right,transparent,#000 8%,#000 92%,transparent)',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: 'max-content',
          animation: 'sym-marquee 60s linear infinite',
          padding: '18px 0',
          borderTop: '1px solid #DCE3EA',
          borderBottom: '1px solid #DCE3EA',
        }}
      >
        {items.map((n, i) => (
          <span
            key={i}
            style={{
              fontWeight: 500,
              fontSize: 'clamp(18px,1.8vw,26px)',
              letterSpacing: '-.02em',
              color: '#101C2B',
              padding: '0 28px',
              whiteSpace: 'nowrap',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 28,
            }}
          >
            {n}
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#8CC63F', display: 'inline-block' }} />
          </span>
        ))}
      </div>
    </div>
  );
}

function LogoRow({ list, reverse }: { list: typeof MARQUEE_LOGOS; reverse?: boolean }) {
  return (
    <div
      style={{
        display: 'flex',
        width: 'max-content',
        gap: 12,
        animation: `${reverse ? 'sym-marquee-rev' : 'sym-marquee'} 42s linear infinite`,
      }}
    >
      {[...list, ...list].map((c, i) => (
        <div
          key={i}
          style={{
            width: 220,
            height: 130,
            boxSizing: 'border-box',
            overflow: 'hidden',
            background: '#fff',
            border: '1px solid #DCE3EA',
            borderRadius: 14,
            padding: 0,
            flex: '0 0 auto',
          }}
        >
          <Image
            src={c.src}
            alt={c.alt}
            width={220}
            height={130}
            style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
          />
        </div>
      ))}
    </div>
  );
}

/** Two client-logo rows scrolling in opposite directions, 220×130 cards. */
export function ClientLogoMarquee({ gap = 10 }: { gap?: number }) {
  const half = Math.ceil(MARQUEE_LOGOS.length / 2);
  return (
    <div
      data-marquee-pause
      style={{
        display: 'grid',
        gap,
        overflow: 'hidden',
        maskImage: 'linear-gradient(to right,transparent,#000 10%,#000 90%,transparent)',
        WebkitMaskImage: 'linear-gradient(to right,transparent,#000 10%,#000 90%,transparent)',
      }}
    >
      <LogoRow list={MARQUEE_LOGOS.slice(0, half)} />
      <LogoRow list={MARQUEE_LOGOS.slice(half)} reverse />
    </div>
  );
}

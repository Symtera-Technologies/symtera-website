import Link from 'next/link';
import Image from 'next/image';
import { MONO } from '@/lib/tokens';
import { COMPANY, OFFICES, SOCIALS } from '@/content/company';
import Button from '@/components/ui/Button';

const SOCIAL_PATHS: Record<string, string> = {
  LinkedIn:
    'M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z',
  Facebook:
    'M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z',
  'X (Twitter)':
    'M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z',
  Instagram:
    'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.43.41.61.24 1.05.52 1.51.98.46.46.74.9.98 1.51.18.46.36 1.26.41 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.41 2.43a4.1 4.1 0 0 1-.98 1.51c-.46.46-.9.74-1.51.98-.46.18-1.26.36-2.43.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.43-.41a4.1 4.1 0 0 1-1.51-.98 4.1 4.1 0 0 1-.98-1.51c-.18-.46-.36-1.26-.41-2.43C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.24-1.97.41-2.43.24-.61.52-1.05.98-1.51.46-.46.9-.74 1.51-.98.46-.18 1.26-.36 2.43-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.38A5.9 5.9 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13a5.9 5.9 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z',
};

const colTitle: React.CSSProperties = {
  fontFamily: MONO,
  fontSize: 11,
  letterSpacing: '.12em',
  textTransform: 'uppercase',
  color: '#8CC63F',
  margin: '0 0 12px',
};
const colLink: React.CSSProperties = { color: 'inherit', textDecoration: 'none' };

/** Closing CTA band that sits above the footer on every page. */
export function CtaBanner() {
  return (
    <section style={{ position: 'relative', zIndex: 2, background: '#F4F7FA' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 clamp(20px,5vw,80px) clamp(64px,8vw,120px)' }}>
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 24,
            background: 'linear-gradient(120deg,#0B1420 0%,#0A70B8 100%)',
            color: '#F4F7FA',
            padding: 'clamp(32px,5vw,72px)',
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              right: -120,
              top: -120,
              width: 420,
              height: 420,
              borderRadius: '50%',
              background: 'radial-gradient(circle,rgba(140,198,63,.55),transparent 65%)',
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(rgba(244,247,250,.12) 1px,transparent 1px)',
              backgroundSize: '24px 24px',
              maskImage: 'linear-gradient(to right,transparent,#000 50%)',
              WebkitMaskImage: 'linear-gradient(to right,transparent,#000 50%)',
            }}
          />
          <div
            data-stack
            style={{
              position: 'relative',
              display: 'grid',
              gridTemplateColumns: 'minmax(0,7fr) minmax(0,5fr)',
              gap: 28,
              alignItems: 'end',
            }}
          >
            <h2
              style={{
                fontWeight: 500,
                fontSize: 'clamp(34px,5vw,76px)',
                lineHeight: 0.96,
                letterSpacing: '-.04em',
                margin: 0,
                maxWidth: '16ch',
              }}
            >
              Tell us the problem. We’ll bring the system.
            </h2>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifySelf: 'end' }}>
              <Button href="/contact">Request a solution</Button>
              <Button href={`mailto:${COMPANY.email}`} variant="ghost" arrow="none" magnet={false} style={{ border: '1px solid rgba(255,255,255,.3)' }}>
                {COMPANY.email}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 2,
        background: '#0B1420',
        color: '#B7C3CF',
        borderTop: '1px solid rgba(255,255,255,.08)',
      }}
    >
      <div
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          padding: 'clamp(48px,6vw,80px) clamp(20px,5vw,80px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
          gap: 36,
          fontSize: 14,
          lineHeight: 1.6,
        }}
      >
        <div style={{ gridColumn: 'span 1' }}>
          <Image
            src="/symtera-logo.png"
            alt="Symtera Technologies"
            width={240}
            height={64}
            style={{ height: 64, width: 'auto', display: 'block', marginBottom: 16 }}
          />
          <p style={{ margin: 0, maxWidth: '34ch' }}>{COMPANY.blurb}</p>
        </div>

        <div>
          <p style={colTitle}>Company</p>
          <div style={{ display: 'grid', gap: 8 }}>
            <Link data-navlink href="/about" style={colLink}>About</Link>
            <Link data-navlink href="/about/leadership" style={colLink}>Leadership</Link>
            <Link data-navlink href="/about/certifications" style={colLink}>Certifications</Link>
            <Link data-navlink href="/about/affiliations" style={colLink}>Affiliations</Link>
            <Link data-navlink href="/clients" style={colLink}>Clients</Link>
            <Link data-navlink href="/faq" style={colLink}>FAQ</Link>
          </div>
        </div>

        <div>
          <p style={colTitle}>Work</p>
          <div style={{ display: 'grid', gap: 8 }}>
            <Link data-navlink href="/ai" style={colLink}>AI solutions</Link>
            <Link data-navlink href="/services" style={colLink}>Services &amp; cloud</Link>
            <Link data-navlink href="/solutions" style={colLink}>Solutions</Link>
            <Link data-navlink href="/products" style={colLink}>Products</Link>
            <Link data-navlink href="/partners" style={colLink}>Partners</Link>
          </div>
        </div>

        <div>
          <p style={colTitle}>Contact</p>
          <div style={{ display: 'grid', gap: 8 }}>
            <a data-navlink href={`mailto:${COMPANY.email}`} style={colLink}>{COMPANY.email}</a>
            {OFFICES.map((o) => (
              <a key={o.tel} data-navlink href={`tel:${o.tel}`} style={colLink}>{o.phone}</a>
            ))}
            <div style={{ display: 'flex', gap: 10, marginTop: 10, flexWrap: 'wrap' }}>
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  data-soc
                  href={s.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={s.name}
                  title={s.name}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    border: '1px solid rgba(255,255,255,.14)',
                    display: 'grid',
                    placeItems: 'center',
                    color: '#B7C3CF',
                    textDecoration: 'none',
                    transition: 'all .25s',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={SOCIAL_PATHS[s.name]} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            gridColumn: '1/-1',
            borderTop: '1px solid rgba(255,255,255,.08)',
            paddingTop: 18,
            fontFamily: MONO,
            fontSize: 12,
            color: '#8A96A3',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 8,
          }}
        >
          <span>{COMPANY.copyright}</span>
          <span>{COMPANY.tagline}</span>
        </div>
      </div>
    </footer>
  );
}

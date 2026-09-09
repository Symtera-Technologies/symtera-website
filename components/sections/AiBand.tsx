import Link from 'next/link';
import { MONO } from '@/lib/tokens';
import { Eyebrow } from '@/components/ui/Type';
import { ArrowRight } from '@/components/ui/Icons';
import Button from '@/components/ui/Button';
import { AI_LINES } from '@/content/site';
import { AI_PAGES } from '@/content/ai';

export default function AiBand() {
  const rows = AI_LINES.map((l, i) => ({
    ...l,
    href: AI_PAGES[i] ? `/ai/${AI_PAGES[i].slug}` : '/ai',
  }));

  return (
    <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 clamp(20px,5vw,80px) clamp(72px,9vw,140px)' }}>
      <div
        data-stack
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 24,
          background: 'linear-gradient(135deg,#0A70B8 0%,#0B1420 55%,#0B1420 100%)',
          color: '#F4F7FA',
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
          gap: 40,
          padding: 'clamp(28px,4vw,56px)',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(rgba(244,247,250,.1) 1px,transparent 1px)',
            backgroundSize: '24px 24px',
            maskImage: 'radial-gradient(ellipse at 100% 100%,#000,transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 100% 100%,#000,transparent 70%)',
          }}
        />
        <div data-reveal style={{ position: 'relative' }}>
          <Eyebrow>AI solutions</Eyebrow>
          <h2
            style={{
              fontWeight: 500,
              fontSize: 'clamp(32px,4.2vw,60px)',
              lineHeight: 0.98,
              letterSpacing: '-.04em',
              margin: '0 0 22px',
            }}
          >
            Production-grade generative AI. Not demos.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: '#C9D3DD', maxWidth: '44ch', margin: '0 0 32px' }}>
            Context-aware, intelligence-driven and secure by design. We engineer AI platforms that plug into the CRM,
            ERP and data you already run.
          </p>
          <Button href="/ai" size="md">
            See the AI portfolio
          </Button>
        </div>

        <ol style={{ position: 'relative', listStyle: 'none', margin: 0, padding: 0, borderTop: '1px solid rgba(255,255,255,.14)' }}>
          {rows.map((l) => (
            <li key={l.n} data-row data-reveal style={{ padding: 0, borderBottom: '1px solid rgba(255,255,255,.1)' }}>
              <Link
                href={l.href}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '40px 1fr auto',
                  gap: 14,
                  alignItems: 'center',
                  padding: '13px 0',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <span style={{ fontFamily: MONO, fontSize: 12, color: '#8A96A3' }}>{l.n}</span>
                <span style={{ fontWeight: 500, fontSize: 'clamp(17px,1.4vw,20px)', letterSpacing: '-.02em' }}>
                  {l.title}
                </span>
                <ArrowRight size={18} strokeWidth={2} style={{ transition: 'transform .3s, color .3s', color: '#8A96A3' }} />
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

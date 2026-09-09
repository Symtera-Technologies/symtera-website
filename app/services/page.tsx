import type { Metadata } from 'next';
import Link from 'next/link';
import { MONO } from '@/lib/tokens';
import { SERVICE_ROWS, CLOUD_ROWS } from '@/content/site';
import { CLOUD_PAGES } from '@/content/cloud';
import { LightSection } from '@/components/ui/Layout';
import { Eyebrow } from '@/components/ui/Type';
import { ArrowRight } from '@/components/ui/Icons';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Managed services with a proven track record for regional and global clients: software, cloud, infrastructure, integration, intelligence and growth.',
};

export default function ServicesIndexPage() {
  const cloud = CLOUD_ROWS.map((c, i) => ({
    ...c,
    href: CLOUD_PAGES[i] ? `/cloud/${CLOUD_PAGES[i].slug}` : '/services',
  }));

  return (
    <>
      <section
        style={{
          position: 'relative',
          padding: '150px 0 72px',
          background: 'radial-gradient(ellipse 50% 60% at 90% 10%,rgba(10,112,184,.3),transparent 60%)',
        }}
      >
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 clamp(20px,5vw,80px)' }}>
          <span
            data-hero-rise
            style={{
              display: 'block',
              fontFamily: MONO,
              fontSize: 12,
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              color: '#8CC63F',
              marginBottom: 24,
            }}
          >
            Services &amp; technology
          </span>
          <h1
            data-hero-rise
            style={{
              fontWeight: 500,
              fontSize: 'clamp(42px,6.6vw,104px)',
              lineHeight: 0.95,
              letterSpacing: '-.045em',
              margin: 0,
              maxWidth: '15ch',
              animationDelay: '.1s',
            }}
          >
            Enterprise IT, end to end.
          </h1>
          <p
            data-hero-rise
            style={{
              fontSize: 'clamp(17px,1.35vw,20px)',
              lineHeight: 1.6,
              color: '#B7C3CF',
              maxWidth: '58ch',
              margin: '36px 0 0',
              animationDelay: '.2s',
            }}
          >
            Managed services with a proven track record for regional and global clients: software, cloud,
            infrastructure, integration, intelligence and growth.
          </p>
        </div>
      </section>

      <LightSection>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(64px,8vw,120px) clamp(20px,5vw,80px)' }}>
          <div style={{ borderTop: '1px solid #DCE3EA' }}>
            {SERVICE_ROWS.map((s) => {
              const inner = (
                <>
                  <p style={{ fontFamily: MONO, fontSize: 13, margin: 0, color: '#0A70B8' }}>{s.n}</p>
                  <h3
                    style={{
                      fontWeight: 500,
                      fontSize: 'clamp(22px,2vw,28px)',
                      lineHeight: 1.1,
                      letterSpacing: '-.03em',
                      margin: 0,
                    }}
                  >
                    {s.title}
                  </h3>
                  <p style={{ fontSize: 16, lineHeight: 1.6, color: '#4E5D6C', margin: 0, maxWidth: '56ch' }}>{s.copy}</p>
                  {s.slug && (
                    <ArrowRight size={20} strokeWidth={2} style={{ transition: 'transform .3s, color .3s', color: '#8A96A3' }} />
                  )}
                </>
              );
              const rowStyle: React.CSSProperties = {
                display: 'grid',
                gridTemplateColumns: '80px minmax(0,340px) minmax(0,1fr) 24px',
                gap: '12px clamp(20px,4vw,64px)',
                alignItems: 'baseline',
                padding: '28px 0',
                borderBottom: '1px solid #DCE3EA',
                textDecoration: 'none',
                color: 'inherit',
              };
              return s.slug ? (
                <Link key={s.n} data-row data-reveal data-stack href={`/services/${s.slug}`} style={rowStyle}>
                  {inner}
                </Link>
              ) : (
                <div key={s.n} data-row data-reveal data-stack style={rowStyle}>
                  {inner}
                </div>
              );
            })}
          </div>

          <div
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 24,
              background: 'linear-gradient(135deg,#0A70B8 0%,#0B1420 55%)',
              color: '#F4F7FA',
              padding: 'clamp(28px,4vw,56px)',
              marginTop: 'clamp(64px,8vw,120px)',
            }}
          >
            <div data-reveal style={{ maxWidth: 760, marginBottom: 36 }}>
              <Eyebrow>Cloud</Eyebrow>
              <h2 style={{ fontWeight: 500, fontSize: 'clamp(32px,4.2vw,60px)', lineHeight: 0.98, letterSpacing: '-.04em', margin: 0 }}>
                Enterprise cloud services, ready to order.
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,210px),1fr))', gap: 12 }}>
              {cloud.map((c) => (
                <Link
                  key={c.n}
                  data-card
                  data-reveal
                  href={c.href}
                  style={{
                    background: 'rgba(255,255,255,.06)',
                    border: '1px solid rgba(255,255,255,.12)',
                    borderRadius: 16,
                    padding: 24,
                    minHeight: 200,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  <span style={{ fontFamily: MONO, fontSize: 12, letterSpacing: '.12em', color: '#8CC63F' }}>{c.n}</span>
                  <div>
                    <h3 style={{ fontWeight: 500, fontSize: 20, lineHeight: 1.1, letterSpacing: '-.025em', margin: '0 0 10px' }}>
                      {c.title}
                    </h3>
                    <p style={{ fontSize: 13.5, lineHeight: 1.5, color: '#C9D3DD', margin: 0 }}>{c.copy}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </LightSection>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { MONO } from '@/lib/tokens';
import { AI_LINES, AI_CAPS, AI_FAQ } from '@/content/site';
import { AI_PAGES } from '@/content/ai';
import { PROCESS } from '@/content/company';
import { LightSection } from '@/components/ui/Layout';
import { Eyebrow, SectionHeading } from '@/components/ui/Type';
import { ArrowUpRight, ContentIcon } from '@/components/ui/Icons';
import NetworkCanvas from '@/components/visuals/NetworkCanvas';

export const metadata: Metadata = {
  title: 'AI Solutions',
  description:
    'We harness AI to drive growth and efficiency: scalable and secure systems that meet today’s needs and prepare you for what comes next.',
};

export default function AiIndexPage() {
  const cards = AI_LINES.map((l, i) => ({ ...l, page: AI_PAGES[i] }));

  return (
    <>
      <section
        style={{
          position: 'relative',
          padding: '150px 0 72px',
          overflow: 'hidden',
          backgroundImage: 'radial-gradient(rgba(244,247,250,.09) 1px,transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 55% 50% at 80% 30%,rgba(10,112,184,.35),transparent 62%),linear-gradient(to bottom,rgba(11,20,32,0) 40%,#0B1420 100%)',
          }}
        />
        <div
          data-hero-visual
          data-parallax="0.08"
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: '-4vw',
            top: '6vh',
            width: 'min(50vw,680px)',
            height: 'min(50vw,680px)',
            pointerEvents: 'none',
          }}
        >
          <NetworkCanvas />
        </div>
        <div style={{ position: 'relative', maxWidth: 1320, margin: '0 auto', padding: '0 clamp(20px,5vw,80px)' }}>
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
            AI solutions
          </span>
          <h1
            data-hero-rise
            style={{
              fontWeight: 500,
              fontSize: 'clamp(42px,6.6vw,104px)',
              lineHeight: 0.95,
              letterSpacing: '-.045em',
              margin: 0,
              maxWidth: '14ch',
              animationDelay: '.1s',
            }}
          >
            Context-aware, intelligence-driven, <span style={{ color: '#4FB8E8' }}>secure by design.</span>
          </h1>
          <p
            data-hero-rise
            style={{
              fontSize: 'clamp(17px,1.35vw,20px)',
              lineHeight: 1.6,
              color: '#B7C3CF',
              maxWidth: '54ch',
              margin: '36px 0 0',
              animationDelay: '.2s',
            }}
          >
            We harness AI to drive growth and efficiency: scalable and secure systems that meet today’s needs and
            prepare you for what comes next.
          </p>
        </div>
      </section>

      <LightSection>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(64px,8vw,120px) clamp(20px,5vw,80px)' }}>
          <div data-reveal style={{ maxWidth: 760, marginBottom: 40 }}>
            <Eyebrow color="#0A70B8">Eight service lines</Eyebrow>
            <SectionHeading>Pick the outcome. We build the system behind it.</SectionHeading>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap: 14 }}>
            {cards.map((l) => (
              <Link
                key={l.n}
                data-card-light
                data-reveal
                href={l.page ? `/ai/${l.page.slug}` : '/ai'}
                style={{
                  background: '#fff',
                  border: '1px solid #DCE3EA',
                  borderRadius: 18,
                  padding: 28,
                  minHeight: 240,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span
                    style={{
                      display: 'inline-grid',
                      placeItems: 'center',
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: 'rgba(10,112,184,.08)',
                      color: '#0A70B8',
                    }}
                  >
                    {l.page && <ContentIcon name={l.page.icon} />}
                  </span>
                  <ArrowUpRight size={20} strokeWidth={2} style={{ transition: 'transform .3s, color .3s', color: '#8A96A3' }} />
                </div>
                <div>
                  <h3 style={{ fontWeight: 500, fontSize: 23, lineHeight: 1.1, letterSpacing: '-.03em', margin: '0 0 10px' }}>
                    {l.title}
                  </h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.55, color: '#4E5D6C', margin: 0 }}>{l.copy}</p>
                </div>
              </Link>
            ))}
          </div>

          <div data-reveal style={{ marginTop: 'clamp(64px,8vw,120px)', maxWidth: 760 }}>
            <Eyebrow color="#0A70B8">Capabilities</Eyebrow>
            <h2 style={{ fontWeight: 500, fontSize: 'clamp(30px,3.8vw,54px)', lineHeight: 1, letterSpacing: '-.04em', margin: '0 0 8px' }}>
              Under the hood
            </h2>
          </div>

          <div style={{ borderTop: '1px solid #DCE3EA' }}>
            {AI_CAPS.map((c) => (
              <div
                key={c.title}
                data-row
                data-reveal
                data-stack
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(0,320px) minmax(0,1fr)',
                  gap: '12px clamp(20px,4vw,64px)',
                  alignItems: 'baseline',
                  padding: '24px 0',
                  borderBottom: '1px solid #DCE3EA',
                }}
              >
                <h3 style={{ fontWeight: 500, fontSize: 22, lineHeight: 1.1, letterSpacing: '-.025em', margin: 0 }}>{c.title}</h3>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: '#4E5D6C', margin: 0, maxWidth: '62ch' }}>{c.copy}</p>
              </div>
            ))}
          </div>

          <div
            data-stack
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
              gap: '48px clamp(32px,5vw,96px)',
              marginTop: 'clamp(64px,8vw,120px)',
            }}
          >
            <div data-reveal>
              <Eyebrow color="#0A70B8">Our process</Eyebrow>
              <h2
                style={{ fontWeight: 500, fontSize: 'clamp(30px,3.8vw,54px)', lineHeight: 1, letterSpacing: '-.04em', margin: '0 0 24px' }}
              >
                Tailored to your business, delivered with precision.
              </h2>
              {PROCESS.map((s) => (
                <div
                  key={s.n}
                  style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: 12, padding: '14px 0', borderTop: '1px solid #DCE3EA' }}
                >
                  <span style={{ fontFamily: MONO, fontSize: 12, color: '#0A70B8' }}>{s.n}</span>
                  <div>
                    <strong style={{ fontWeight: 500, fontSize: 17 }}>{s.title}</strong>
                    <p style={{ fontSize: 14.5, lineHeight: 1.5, color: '#4E5D6C', margin: '4px 0 0' }}>{s.copy}</p>
                  </div>
                </div>
              ))}
            </div>

            <div data-reveal>
              <Eyebrow color="#0A70B8">Questions</Eyebrow>
              <div style={{ background: '#fff', border: '1px solid #DCE3EA', borderRadius: 18, padding: '8px 24px' }}>
                {AI_FAQ.map(([q, a], i) => (
                  <div
                    key={q}
                    style={{ padding: '18px 0', ...(i < AI_FAQ.length - 1 ? { borderBottom: '1px solid #DCE3EA' } : {}) }}
                  >
                    <strong style={{ fontWeight: 500, fontSize: 18, letterSpacing: '-.01em' }}>{q}</strong>
                    <p style={{ fontSize: 15, lineHeight: 1.55, color: '#4E5D6C', margin: '8px 0 0' }}>{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </LightSection>
    </>
  );
}

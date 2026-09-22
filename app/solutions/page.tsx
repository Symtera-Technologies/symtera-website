import Link from 'next/link';
import { MONO } from '@/lib/tokens';
import { SOLUTIONS, INDUSTRIES } from '@/content/site';
import { LightSection } from '@/components/ui/Layout';
import { Eyebrow } from '@/components/ui/Type';
import { ArrowUpRight } from '@/components/ui/Icons';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Solutions',
  description:
      'Tell us what the business needs to do differently. We map it to the right mix of AI, software, cloud, security and infrastructure.',
  path: '/solutions',
});

export default function SolutionsPage() {
  return (
    <>
      <section
        style={{
          position: 'relative',
          padding: '150px 0 72px',
          background: 'radial-gradient(ellipse 50% 60% at 90% 10%,rgba(140,198,63,.22),transparent 60%)',
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
            Solutions
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
            Start with the outcome.
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
            Tell us what the business needs to do differently. We map it to the right mix of AI, software, cloud,
            security and infrastructure, and stay for the support.
          </p>
        </div>
      </section>

      <LightSection>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(64px,8vw,120px) clamp(20px,5vw,80px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))', gap: 14 }}>
            {SOLUTIONS.map((s) => (
              <Link
                key={s.kicker}
                data-card-light
                data-reveal
                href="/contact"
                style={{
                  background: '#fff',
                  border: '1px solid #DCE3EA',
                  borderRadius: 18,
                  padding: 28,
                  minHeight: 280,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span
                    style={{
                      fontFamily: MONO,
                      fontSize: 12,
                      letterSpacing: '.12em',
                      textTransform: 'uppercase',
                      color: '#0A70B8',
                    }}
                  >
                    {s.kicker}
                  </span>
                  <ArrowUpRight size={20} strokeWidth={2} style={{ transition: 'transform .3s, color .3s', color: '#8A96A3' }} />
                </div>
                <div>
                  <h3
                    style={{
                      fontWeight: 500,
                      fontSize: 'clamp(24px,2.2vw,30px)',
                      lineHeight: 1.05,
                      letterSpacing: '-.03em',
                      margin: '0 0 12px',
                    }}
                  >
                    {s.title}
                  </h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.55, color: '#4E5D6C', margin: '0 0 14px' }}>{s.copy}</p>
                  <p style={{ fontFamily: MONO, fontSize: 11.5, color: '#0A70B8', margin: 0 }}>{s.uses}</p>
                </div>
              </Link>
            ))}
          </div>

          <div
            data-reveal
            data-stack
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0,5fr) minmax(0,7fr)',
              gap: '24px 64px',
              alignItems: 'start',
              marginTop: 'clamp(64px,8vw,120px)',
            }}
          >
            <div>
              <Eyebrow color="#0A70B8">Industries</Eyebrow>
              <h2 style={{ fontWeight: 500, fontSize: 'clamp(30px,3.8vw,54px)', lineHeight: 1, letterSpacing: '-.04em', margin: 0 }}>
                Where we work
              </h2>
            </div>
            <ul
              style={{
                listStyle: 'none',
                margin: 0,
                padding: 0,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
                gap: '0 24px',
                fontWeight: 500,
                fontSize: 'clamp(18px,1.8vw,24px)',
                letterSpacing: '-.02em',
              }}
            >
              {INDUSTRIES.map((i) => (
                <li
                  key={i}
                  style={{ padding: '14px 0', borderTop: '1px solid #DCE3EA' }}
                  dangerouslySetInnerHTML={{ __html: i }}
                />
              ))}
            </ul>
          </div>
        </div>
      </LightSection>
    </>
  );
}

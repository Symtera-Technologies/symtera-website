import type { Metadata } from 'next';
import { MONO } from '@/lib/tokens';
import { COMPANY, VALUES } from '@/content/company';
import { LightSection } from '@/components/ui/Layout';
import { Eyebrow } from '@/components/ui/Type';
import TiltCard from '@/components/ui/TiltCard';
import Button from '@/components/ui/Button';
import { ClientLogoMarquee } from '@/components/ui/Marquee';
import NetworkCanvas from '@/components/visuals/NetworkCanvas';

export const metadata: Metadata = {
  title: 'About Us',
  description: COMPANY.aboutIntro.slice(0, 180),
};

const JUMPS: [string, string, string][] = [
  ['Our Mission', '#about-mission', '#8CC63F'],
  ['History', '#about-history', '#1BA0D8'],
  ['Our Vision', '#about-vision', '#0A70B8'],
  ['Values', '#about-values', '#39B54A'],
];

function FloatCard({ label, value, style }: { label: string; value: string; style: React.CSSProperties }) {
  return (
    <div
      style={{
        position: 'absolute',
        background: 'rgba(255,255,255,.05)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255,255,255,.12)',
        borderRadius: 16,
        padding: '14px 18px',
        ...style,
      }}
    >
      <p
        style={{
          fontFamily: MONO,
          fontSize: 11,
          letterSpacing: '.12em',
          textTransform: 'uppercase',
          color: '#8A96A3',
          margin: '0 0 4px',
        }}
      >
        {label}
      </p>
      <p style={{ fontWeight: 500, fontSize: 15, margin: 0 }}>{value}</p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <section
        style={{
          position: 'relative',
          padding: '150px 0 80px',
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
              'radial-gradient(ellipse 50% 60% at 88% 20%,rgba(10,112,184,.35),transparent 60%),radial-gradient(ellipse 30% 40% at 70% 90%,rgba(140,198,63,.14),transparent 65%),linear-gradient(to bottom,rgba(11,20,32,0) 50%,#0B1420 100%)',
          }}
        />
        <div
          data-stack
          style={{
            position: 'relative',
            maxWidth: 1320,
            margin: '0 auto',
            padding: '0 clamp(20px,5vw,80px)',
            display: 'grid',
            gridTemplateColumns: 'minmax(0,7fr) minmax(0,5fr)',
            gap: '40px clamp(24px,4vw,64px)',
            alignItems: 'end',
          }}
        >
          <div style={{ minWidth: 0 }}>
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
              Home / About Us
            </span>
            <h1
              data-hero-rise
              style={{
                fontWeight: 500,
                fontSize: 'clamp(46px,7vw,112px)',
                lineHeight: 0.94,
                letterSpacing: '-.045em',
                margin: 0,
                animationDelay: '.1s',
              }}
            >
              About <span style={{ color: '#8CC63F' }}>Us</span>
            </h1>
            <p
              data-hero-rise
              style={{
                fontSize: 'clamp(17px,1.35vw,20px)',
                lineHeight: 1.65,
                color: '#B7C3CF',
                maxWidth: '64ch',
                margin: '36px 0 0',
                animationDelay: '.2s',
              }}
            >
              {COMPANY.aboutIntro}
            </p>
            <div data-hero-rise style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 34, animationDelay: '.3s' }}>
              {JUMPS.map(([label, href, dot]) => (
                <a
                  key={href}
                  data-btn="ghost"
                  href={href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    border: '1px solid rgba(255,255,255,.2)',
                    color: '#F4F7FA',
                    textDecoration: 'none',
                    fontSize: 14,
                    padding: '11px 18px',
                    borderRadius: 999,
                    whiteSpace: 'nowrap',
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: dot }} />
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div
            data-hero-visual
            data-hero-rise
            aria-hidden="true"
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '1',
              maxWidth: 520,
              justifySelf: 'end',
              minWidth: 0,
              animationDelay: '.3s',
            }}
          >
            <div data-parallax="0.05" style={{ position: 'absolute', inset: 0 }}>
              <NetworkCanvas />
            </div>
            <FloatCard label="Headquarters" value="New Jersey, USA" style={{ left: '8%', bottom: '10%' }} />
            <FloatCard label="Delivery centre" value="Lahore, Pakistan" style={{ right: '4%', top: '14%' }} />
          </div>
        </div>
      </section>

      <LightSection>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(64px,8vw,120px) clamp(20px,5vw,80px)' }}>
          <div
            id="about-mission"
            data-reveal
            data-stack
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0,5fr) minmax(0,7fr)',
              gap: '24px clamp(32px,5vw,96px)',
              alignItems: 'start',
              paddingBottom: 'clamp(48px,6vw,88px)',
              borderBottom: '1px solid #DCE3EA',
              scrollMarginTop: 110,
            }}
          >
            <div>
              <Eyebrow color="#0A70B8">01</Eyebrow>
              <h2
                style={{ fontWeight: 500, fontSize: 'clamp(40px,5.4vw,84px)', lineHeight: 0.94, letterSpacing: '-.045em', margin: 0 }}
              >
                Mission
              </h2>
            </div>
            <p
              style={{
                fontSize: 'clamp(18px,1.5vw,24px)',
                lineHeight: 1.55,
                letterSpacing: '-.01em',
                color: '#101C2B',
                margin: 0,
                maxWidth: '56ch',
              }}
            >
              {COMPANY.missionFull}
            </p>
          </div>

          <div
            id="about-vision"
            data-reveal
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 24,
              background: 'linear-gradient(120deg,#0B1420 0%,#0A70B8 100%)',
              color: '#F4F7FA',
              padding: 'clamp(32px,5vw,72px)',
              marginTop: 'clamp(48px,6vw,88px)',
              scrollMarginTop: 110,
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                right: -100,
                top: -120,
                width: 420,
                height: 420,
                borderRadius: '50%',
                background: 'radial-gradient(circle,rgba(140,198,63,.5),transparent 65%)',
              }}
            />
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'radial-gradient(rgba(244,247,250,.12) 1px,transparent 1px)',
                backgroundSize: '24px 24px',
                maskImage: 'linear-gradient(to right,transparent 40%,#000)',
                WebkitMaskImage: 'linear-gradient(to right,transparent 40%,#000)',
              }}
            />
            <span
              style={{
                position: 'relative',
                display: 'block',
                fontFamily: MONO,
                fontSize: 12,
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                color: '#8CC63F',
                marginBottom: 20,
              }}
            >
              02 — Vision
            </span>
            <p
              style={{
                position: 'relative',
                fontWeight: 500,
                fontSize: 'clamp(26px,3.4vw,52px)',
                lineHeight: 1.08,
                letterSpacing: '-.035em',
                margin: 0,
                maxWidth: '24ch',
              }}
            >
              {COMPANY.visionFull}
            </p>
          </div>

          <div
            id="about-history"
            data-reveal
            data-stack
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0,5fr) minmax(0,7fr)',
              gap: '24px clamp(32px,5vw,96px)',
              alignItems: 'start',
              padding: 'clamp(48px,6vw,88px) 0',
              borderBottom: '1px solid #DCE3EA',
              scrollMarginTop: 110,
            }}
          >
            <div>
              <Eyebrow color="#0A70B8">03</Eyebrow>
              <h2
                style={{
                  fontWeight: 500,
                  fontSize: 'clamp(40px,5.4vw,84px)',
                  lineHeight: 0.94,
                  letterSpacing: '-.045em',
                  margin: '0 0 24px',
                }}
              >
                History
              </h2>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
                <span
                  data-count="2019"
                  data-from="2000"
                  style={{
                    fontWeight: 500,
                    fontSize: 'clamp(56px,7vw,112px)',
                    lineHeight: 1,
                    letterSpacing: '-.05em',
                    color: '#8CC63F',
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  2019
                </span>
                <span
                  style={{
                    fontFamily: MONO,
                    fontSize: 12,
                    letterSpacing: '.12em',
                    textTransform: 'uppercase',
                    color: '#4E5D6C',
                  }}
                >
                  Founded
                </span>
              </div>
            </div>
            <p style={{ fontSize: 'clamp(17px,1.3vw,20px)', lineHeight: 1.65, color: '#4E5D6C', margin: 0, maxWidth: '60ch' }}>
              {COMPANY.historyFull}
            </p>
          </div>

          <div id="about-values" data-reveal style={{ paddingTop: 'clamp(48px,6vw,88px)', scrollMarginTop: 110 }}>
            <div
              data-stack
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0,5fr) minmax(0,7fr)',
                gap: '24px clamp(32px,5vw,96px)',
                alignItems: 'start',
                marginBottom: 40,
              }}
            >
              <div>
                <Eyebrow color="#0A70B8">04</Eyebrow>
                <h2
                  style={{ fontWeight: 500, fontSize: 'clamp(40px,5.4vw,84px)', lineHeight: 0.94, letterSpacing: '-.045em', margin: 0 }}
                >
                  Values
                </h2>
              </div>
              <p style={{ fontSize: 'clamp(17px,1.3vw,20px)', lineHeight: 1.65, color: '#4E5D6C', margin: 0, maxWidth: '60ch' }}>
                {COMPANY.valuesFull}
              </p>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,160px),1fr))',
                gap: 12,
                perspective: 1400,
              }}
            >
              {VALUES.map((v, i) => (
                <TiltCard
                  key={v}
                  reveal
                  style={{
                    background: 'linear-gradient(160deg,#ffffff,#F4F7FA)',
                    border: '1px solid #DCE3EA',
                    borderRadius: 18,
                    padding: '22px 20px',
                    aspectRatio: '1',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 18px 40px -28px rgba(11,20,32,.35)',
                  }}
                >
                  <span data-tilt-num style={{ position: 'relative', fontFamily: MONO, fontSize: 12, color: '#0A70B8', transform: 'translateZ(20px)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    style={{
                      position: 'relative',
                      fontWeight: 500,
                      fontSize: 'clamp(18px,1.5vw,22px)',
                      letterSpacing: '-.025em',
                      lineHeight: 1.1,
                      transform: 'translateZ(14px)',
                    }}
                  >
                    {v}
                  </span>
                </TiltCard>
              ))}
            </div>
          </div>

          <div data-reveal style={{ marginTop: 'clamp(64px,8vw,120px)' }}>
            <p
              style={{
                fontFamily: MONO,
                fontSize: 12,
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                color: '#0A70B8',
                margin: '0 0 20px',
              }}
            >
              Trusted by
            </p>
            <ClientLogoMarquee gap={12} />
          </div>

          <div
            data-reveal
            data-stack
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0,7fr) minmax(0,5fr)',
              gap: '24px clamp(32px,5vw,96px)',
              alignItems: 'center',
              marginTop: 'clamp(64px,8vw,120px)',
              background: '#fff',
              border: '1px solid #DCE3EA',
              borderRadius: 24,
              padding: 'clamp(28px,4vw,56px)',
            }}
          >
            <div>
              <h2
                style={{
                  fontWeight: 500,
                  fontSize: 'clamp(28px,3.4vw,48px)',
                  lineHeight: 1,
                  letterSpacing: '-.04em',
                  margin: '0 0 16px',
                }}
              >
                Drop us a line! We are here to answer your questions 24/7
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: '#4E5D6C', margin: 0, maxWidth: '56ch' }}>
                If you have any question or queries a member of the staff will always be happy to help. Feel free to
                contact us, and we will be sure to get back to you as soon as possible.
              </p>
            </div>
            <div style={{ justifySelf: 'end' }}>
              <Button href="/contact" style={{ whiteSpace: 'nowrap' }}>
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </LightSection>
    </>
  );
}

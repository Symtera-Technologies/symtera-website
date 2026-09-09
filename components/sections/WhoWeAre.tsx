import { MONO } from '@/lib/tokens';
import { Eyebrow, Pill } from '@/components/ui/Type';
import Button from '@/components/ui/Button';
import { COMPANY } from '@/content/company';
import { OrbitScene } from '@/components/visuals/OrbitScene';

function GlassCard({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        background: 'rgba(255,255,255,.05)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255,255,255,.12)',
        borderRadius: 16,
        padding: '18px 20px',
      }}
    >
      <p
        style={{
          fontFamily: MONO,
          fontSize: 11,
          letterSpacing: '.12em',
          textTransform: 'uppercase',
          color: '#8A96A3',
          margin: '0 0 8px',
        }}
      >
        {label}
      </p>
      <p style={{ fontSize: 14, lineHeight: 1.5, margin: 0, color: '#F4F7FA' }}>{children}</p>
    </div>
  );
}

export default function WhoWeAre() {
  return (
    <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 clamp(20px,5vw,80px) clamp(72px,9vw,140px)' }}>
      <div
        data-stack
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 28,
          background: '#0B1420',
          color: '#F4F7FA',
          display: 'grid',
          gridTemplateColumns: 'minmax(0,7fr) minmax(0,5fr)',
          gap: 40,
          padding: 'clamp(32px,5vw,72px)',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(rgba(244,247,250,.09) 1px,transparent 1px)',
            backgroundSize: '26px 26px',
            maskImage: 'radial-gradient(ellipse at 100% 50%,#000,transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 100% 50%,#000,transparent 75%)',
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: '-8%',
            top: '-30%',
            width: '60%',
            aspectRatio: '1',
            borderRadius: '50%',
            background: 'radial-gradient(circle,rgba(10,112,184,.45),transparent 62%)',
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: '18%',
            bottom: '-40%',
            width: '40%',
            aspectRatio: '1',
            borderRadius: '50%',
            background: 'radial-gradient(circle,rgba(140,198,63,.32),transparent 65%)',
          }}
        />
        <div
          aria-hidden="true"
          data-parallax="-0.04"
          style={{
            position: 'absolute',
            right: 'clamp(16px,4vw,56px)',
            top: '50%',
            width: 'min(34vw,380px)',
            height: 'min(34vw,380px)',
            marginTop: 'min(-17vw,-190px)',
            pointerEvents: 'none',
          }}
        >
          <OrbitScene variant="home" />
        </div>

        <div data-reveal style={{ position: 'relative' }}>
          <Eyebrow style={{ marginBottom: 22 }}>Who we are</Eyebrow>
          <h2
            style={{
              fontWeight: 500,
              fontSize: 'clamp(34px,4.6vw,72px)',
              lineHeight: 0.96,
              letterSpacing: '-.04em',
              margin: '0 0 26px',
              maxWidth: '14ch',
            }}
          >
            We are <span style={{ color: '#8CC63F' }}>Symtera</span> Technologies.
          </h2>
          <p
            style={{
              fontSize: 'clamp(16px,1.25vw,19px)',
              lineHeight: 1.65,
              color: '#C9D3DD',
              maxWidth: '52ch',
              margin: '0 0 30px',
            }}
          >
            An IT solution company and part of a multinational group headquartered in the USA with a global footprint.
            We specialise in business IT solutions: ICT, AI, BI, data centres, web and mobile apps, e-commerce, SMS
            notification services, digital identification services, SEO and SEM, hosting and cloud, IT infrastructure
            and customised solutions.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 34 }}>
            <Pill tone="dark">Lahore</Pill>
            <Pill tone="dark">New Jersey</Pill>
            <Pill tone="green">Since 2019</Pill>
          </div>
          <Button href="/about" variant="ghost" size="md" style={{ border: '1px solid rgba(255,255,255,.25)' }}>
            Our story
          </Button>
        </div>

        <div
          data-reveal
          style={{
            position: 'relative',
            display: 'grid',
            gap: 10,
            alignSelf: 'end',
            justifySelf: 'end',
            width: 'min(100%,300px)',
          }}
        >
          <GlassCard label="Mission">{COMPANY.mission}</GlassCard>
          <GlassCard label="Vision">{COMPANY.vision}</GlassCard>
        </div>
      </div>
    </div>
  );
}

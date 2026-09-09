import { MONO } from '@/lib/tokens';
import { Eyebrow, SectionHeading } from '@/components/ui/Type';
import TiltCard from '@/components/ui/TiltCard';
import { PROCESS } from '@/content/company';

export default function HowWeHelp() {
  return (
    <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 clamp(20px,5vw,80px) clamp(72px,9vw,140px)' }}>
      <div data-reveal style={{ maxWidth: 760, marginBottom: 40 }}>
        <Eyebrow color="#0A70B8">How we help</Eyebrow>
        <SectionHeading>From consultation to a system your team runs every day.</SectionHeading>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))',
          gap: 16,
          perspective: 1400,
        }}
      >
        {PROCESS.map((step) => (
          <TiltCard
            key={step.n}
            reveal
            style={{
              background: 'linear-gradient(160deg,#ffffff 0%,#F4F7FA 100%)',
              border: '1px solid #DCE3EA',
              borderRadius: 20,
              padding: '26px 24px 28px',
              display: 'flex',
              flexDirection: 'column',
              gap: 22,
              boxShadow: '0 1px 0 #fff inset,0 18px 40px -28px rgba(11,20,32,.35)',
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                right: -30,
                top: -30,
                width: 140,
                height: 140,
                borderRadius: '50%',
                background: 'radial-gradient(circle,rgba(140,198,63,.22),transparent 68%)',
              }}
            />
            <span
              data-tilt-num
              style={{
                position: 'relative',
                display: 'inline-grid',
                placeItems: 'center',
                width: 46,
                height: 46,
                borderRadius: 14,
                background: 'linear-gradient(160deg,#0F1B2B,#0B1420)',
                color: '#8CC63F',
                fontFamily: MONO,
                fontSize: 13,
                boxShadow: '0 10px 24px -12px rgba(11,20,32,.6)',
                transform: 'translateZ(30px)',
              }}
            >
              {step.n}
            </span>
            <div style={{ position: 'relative', transform: 'translateZ(16px)' }}>
              <span
                style={{
                  display: 'block',
                  height: 2,
                  width: 40,
                  background: 'linear-gradient(90deg,#8CC63F,#1BA0D8)',
                  borderRadius: 2,
                  marginBottom: 16,
                }}
              />
              <h3 style={{ fontWeight: 500, fontSize: 21, lineHeight: 1.1, letterSpacing: '-.025em', margin: '0 0 10px' }}>
                {step.title}
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.55, color: '#4E5D6C', margin: 0 }}>{step.copy}</p>
            </div>
          </TiltCard>
        ))}
      </div>
    </div>
  );
}

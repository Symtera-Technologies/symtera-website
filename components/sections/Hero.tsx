import { MONO } from '@/lib/tokens';
import Button from '@/components/ui/Button';
import NetworkCanvas from '@/components/visuals/NetworkCanvas';

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        padding: '130px 0 72px',
        backgroundImage: 'radial-gradient(rgba(244,247,250,.09) 1px,transparent 1px)',
        backgroundSize: '28px 28px',
        backgroundPosition: 'center',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(ellipse 55% 50% at 78% 38%,rgba(10,112,184,.35),transparent 62%),radial-gradient(ellipse 30% 30% at 70% 55%,rgba(140,198,63,.16),transparent 65%),linear-gradient(to bottom,rgba(11,20,32,0) 55%,#0B1420 100%)',
        }}
      />
      <div
        data-hero-grid
        style={{
          position: 'relative',
          maxWidth: 1320,
          margin: '0 auto',
          padding: '0 clamp(20px,5vw,80px)',
          display: 'grid',
          gridTemplateColumns: 'minmax(0,7fr) minmax(0,5fr)',
          gap: '40px clamp(24px,4vw,64px)',
          alignItems: 'center',
        }}
      >
        <div style={{ minWidth: 0 }}>
          <div
            data-hero-rise
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              fontFamily: MONO,
              fontSize: 12,
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              color: '#8CC63F',
              marginBottom: 28,
              animationDelay: '.05s',
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#8CC63F',
                boxShadow: '0 0 16px #8CC63F',
                animation: 'sym-pulse 2.4s ease-in-out infinite',
                flex: '0 0 auto',
              }}
            />
            <span>Expanding possibilities · AI · Cloud · Security</span>
          </div>

          <h1
            data-hero-rise
            style={{
              fontWeight: 500,
              fontSize: 'clamp(42px,6.4vw,108px)',
              lineHeight: 0.94,
              letterSpacing: '-.045em',
              margin: 0,
              animationDelay: '.15s',
            }}
          >
            Intelligent systems, built for <span style={{ color: '#8CC63F' }}>scale</span> and{' '}
            <span style={{ color: '#4FB8E8' }}>security.</span>
          </h1>

          <p
            data-hero-rise
            style={{
              fontSize: 'clamp(17px,1.35vw,20px)',
              lineHeight: 1.6,
              color: '#B7C3CF',
              maxWidth: '54ch',
              margin: '36px 0 0',
              animationDelay: '.3s',
            }}
          >
            We design and deploy enterprise-ready AI systems tailored to complex business challenges, and the software,
            cloud, security and infrastructure they run on. A multinational group headquartered in the USA, delivering
            from Lahore and New Jersey.
          </p>

          <div
            data-hero-rise
            style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 36, animationDelay: '.42s' }}
          >
            <Button href="/contact">Start a project</Button>
            <Button href="/ai" variant="ghost" arrow="none">
              Explore AI solutions
            </Button>
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
            maxWidth: 620,
            justifySelf: 'end',
            minWidth: 0,
            animationDelay: '.3s',
          }}
        >
          <div data-parallax="0.06" style={{ position: 'absolute', inset: 0 }}>
            <NetworkCanvas />
          </div>
        </div>
      </div>
    </section>
  );
}

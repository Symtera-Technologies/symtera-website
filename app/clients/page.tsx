import Image from 'next/image';
import { MONO, SERIF } from '@/lib/tokens';
import { CLIENT_LOGOS } from '@/content/site';
import { TESTIMONIAL } from '@/content/company';
import { LightSection } from '@/components/ui/Layout';
import TiltCard from '@/components/ui/TiltCard';
import Counter from '@/components/ui/Counter';
import Button from '@/components/ui/Button';
import { Quote } from '@/components/ui/Icons';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Valuable Clients',
  description: 'We’re trusted worldwide: serving clients across multiple countries.',
  path: '/clients',
});

const caption: React.CSSProperties = {
  fontFamily: MONO,
  fontSize: 12,
  letterSpacing: '.12em',
  textTransform: 'uppercase',
  color: '#8A96A3',
  margin: 0,
};

export default function ClientsPage() {
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
              'radial-gradient(ellipse 50% 60% at 85% 30%,rgba(140,198,63,.24),transparent 60%),linear-gradient(to bottom,rgba(11,20,32,0) 50%,#0B1420 100%)',
          }}
        />
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
            Home / Valuable Clients
          </span>
          <h1
            data-hero-rise
            style={{
              fontWeight: 500,
              fontSize: 'clamp(44px,6.6vw,104px)',
              lineHeight: 0.94,
              letterSpacing: '-.045em',
              margin: 0,
              maxWidth: '15ch',
              animationDelay: '.1s',
            }}
          >
            Valuable{' '}
            <em style={{ fontFamily: SERIF, fontWeight: 500, fontStyle: 'italic', letterSpacing: '-.02em', color: '#8CC63F' }}>
              Clients
            </em>
          </h1>
          <p
            data-hero-rise
            style={{
              fontSize: 'clamp(17px,1.35vw,20px)',
              lineHeight: 1.65,
              color: '#B7C3CF',
              maxWidth: '58ch',
              margin: '36px 0 0',
              animationDelay: '.2s',
            }}
          >
            We&apos;re Trusted Worldwide: Serving Clients Across Multiple Countries.
          </p>
          <div data-hero-rise style={{ display: 'flex', gap: 28, flexWrap: 'wrap', marginTop: 36, animationDelay: '.3s' }}>
            <div>
              <Counter to={46} style={{ color: '#8CC63F', margin: '0 0 8px' }} />
              <p style={caption}>Client brands</p>
            </div>
            <div>
              <Counter to={2019} from={2000} style={{ margin: '0 0 8px' }} />
              <p style={caption}>Serving since</p>
            </div>
          </div>
        </div>
      </section>

      <LightSection>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(56px,7vw,104px) clamp(20px,5vw,80px)' }}>
          <div
            data-reveal
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(150px,1fr))', gap: 12, perspective: 1400 }}
          >
            {CLIENT_LOGOS.map((c, i) => (
              <TiltCard
                key={i}
                style={{
                  aspectRatio: '1',
                  background: '#fff',
                  border: '1px solid #DCE3EA',
                  borderRadius: 16,
                  padding: 10,
                  boxShadow: '0 14px 30px -24px rgba(11,20,32,.35)',
                }}
              >
                <Image
                  src={c.src}
                  alt={c.alt}
                  width={220}
                  height={130}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', transform: 'translateZ(14px)' }}
                />
              </TiltCard>
            ))}
          </div>

          <div
            data-reveal
            data-stack
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
              gap: 14,
              marginTop: 'clamp(48px,6vw,80px)',
            }}
          >
            <figure
              style={{
                margin: 0,
                background: '#fff',
                border: '1px solid #DCE3EA',
                borderRadius: 18,
                padding: 'clamp(24px,3vw,40px)',
              }}
            >
              <span
                style={{
                  display: 'block',
                  fontFamily: MONO,
                  fontSize: 12,
                  letterSpacing: '.14em',
                  textTransform: 'uppercase',
                  color: '#0A70B8',
                  marginBottom: 16,
                }}
              >
                Real testimonials — What They Say About Our Company?
              </span>
              <Quote />
              <blockquote
                style={{
                  fontWeight: 500,
                  fontSize: 'clamp(20px,2vw,28px)',
                  lineHeight: 1.25,
                  letterSpacing: '-.02em',
                  margin: '16px 0 0',
                }}
              >
                {TESTIMONIAL.quote}
              </blockquote>
              <figcaption style={{ fontSize: 14, color: '#4E5D6C', marginTop: 22, fontFamily: MONO }}>
                {TESTIMONIAL.author} — Customer
              </figcaption>
            </figure>

            <div
              style={{
                background: '#0B1420',
                color: '#F4F7FA',
                borderRadius: 18,
                padding: 'clamp(24px,3vw,40px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 24,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  right: -80,
                  top: -80,
                  width: 300,
                  height: 300,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle,rgba(10,112,184,.6),transparent 65%)',
                }}
              />
              <div style={{ position: 'relative' }}>
                <h2
                  style={{
                    fontWeight: 500,
                    fontSize: 'clamp(26px,2.8vw,40px)',
                    lineHeight: 1,
                    letterSpacing: '-.04em',
                    margin: '0 0 14px',
                  }}
                >
                  Drop us a line! We are here to answer your questions 24/7
                </h2>
                <p style={{ fontSize: 15.5, lineHeight: 1.6, color: '#C9D3DD', margin: 0 }}>
                  If you have any question or queries a member of the staff will always be happy to help. Feel free to
                  contact us, and we will be sure to get back to you as soon as possible.
                </p>
              </div>
              <Button href="/contact" style={{ position: 'relative', alignSelf: 'flex-start', padding: '15px 24px' }}>
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </LightSection>
    </>
  );
}

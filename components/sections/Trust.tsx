import { MONO } from '@/lib/tokens';
import { Eyebrow, SectionHeading } from '@/components/ui/Type';
import { Quote } from '@/components/ui/Icons';
import Button from '@/components/ui/Button';
import { PartnerMarquee, ClientLogoMarquee } from '@/components/ui/Marquee';
import { TESTIMONIAL } from '@/content/company';

export default function Trust() {
  return (
    <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 clamp(20px,5vw,80px) clamp(72px,9vw,140px)' }}>
      <div
        data-reveal
        data-stack
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,5fr) minmax(0,7fr)',
          gap: '24px 64px',
          alignItems: 'end',
          marginBottom: 40,
        }}
      >
        <div>
          <Eyebrow color="#0A70B8">Why trust us</Eyebrow>
          <SectionHeading>Trusted worldwide, backed by brands you already know.</SectionHeading>
        </div>
        <p style={{ fontSize: 17, lineHeight: 1.65, color: '#4E5D6C', maxWidth: '46ch', margin: 0, justifySelf: 'end' }}>
          Authorised partner and supplier for 27 security, compliance, endpoint and infrastructure brands. Serving
          clients across multiple countries since 2019.
        </p>
      </div>

      <div data-reveal>
        <PartnerMarquee />
      </div>

      <div
        data-stack
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
          gap: '48px clamp(32px,5vw,96px)',
          marginTop: 'clamp(48px,6vw,80px)',
          alignItems: 'start',
        }}
      >
        <figure
          data-reveal
          style={{
            margin: 0,
            background: '#fff',
            border: '1px solid #DCE3EA',
            borderRadius: 18,
            padding: 'clamp(24px,3vw,40px)',
          }}
        >
          <Quote />
          <blockquote
            style={{
              fontWeight: 500,
              fontSize: 'clamp(22px,2.2vw,30px)',
              lineHeight: 1.2,
              letterSpacing: '-.025em',
              margin: '18px 0 0',
            }}
          >
            {TESTIMONIAL.quote}
          </blockquote>
          <figcaption style={{ fontSize: 14, color: '#4E5D6C', marginTop: 22, fontFamily: MONO }}>
            {TESTIMONIAL.author} — customer
          </figcaption>
        </figure>

        <div data-reveal>
          <p
            style={{
              fontFamily: MONO,
              fontSize: 12,
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              color: '#4E5D6C',
              margin: '0 0 18px',
            }}
          >
            Selected clients
          </p>
          <ClientLogoMarquee />
          <Button href="/clients" variant="blue" arrow="right" size="sm" magnet={false} style={{ marginTop: 18 }}>
            All clients
          </Button>
        </div>
      </div>
    </div>
  );
}

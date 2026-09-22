import { Suspense } from 'react';
import { MONO } from '@/lib/tokens';
import { COMPANY, OFFICES } from '@/content/company';
import { LightSection } from '@/components/ui/Layout';
import ContactForm from '@/components/forms/ContactForm';
import { JsonLd } from '@/components/seo/JsonLd';
import { officesSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Contact',
  description:
      'Select the service you need, share your business needs, and our team will contact you with the best suitable solution.',
  path: '/contact',
});

const kicker = (color: string): React.CSSProperties => ({
  display: 'block',
  fontFamily: MONO,
  fontSize: 12,
  letterSpacing: '.12em',
  textTransform: 'uppercase',
  color,
  marginBottom: 12,
});

export default function ContactPage() {
  const [pk, us] = OFFICES;

  return (
    <>
      <JsonLd data={officesSchema()} />

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
            Contact
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
            Request a solution.
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
            Select the service you need, share your business needs, and our team will contact you with the best suitable
            solution. We are here to answer your questions 24/7.
          </p>
        </div>
      </section>

      <LightSection>
        <div
          data-stack
          style={{
            maxWidth: 1320,
            margin: '0 auto',
            padding: 'clamp(64px,8vw,120px) clamp(20px,5vw,80px)',
            display: 'grid',
            gridTemplateColumns: 'minmax(0,7fr) minmax(0,5fr)',
            gap: '32px clamp(32px,5vw,96px)',
            alignItems: 'start',
          }}
        >
          <Suspense fallback={<div style={{ minHeight: 600 }} />}>
            <ContactForm />
          </Suspense>

          <aside data-reveal style={{ display: 'grid', gap: 12 }}>
            <div style={{ background: '#0B1420', color: '#F4F7FA', borderRadius: 18, padding: 26 }}>
              <span style={kicker('#8CC63F')}>{pk.region}</span>
              <p style={{ fontWeight: 500, fontSize: 18, lineHeight: 1.4, margin: 0, letterSpacing: '-.01em' }}>
                {pk.lines[0]}
                <br />
                {pk.lines[1]}
              </p>
              <a
                href={`tel:${pk.tel}`}
                style={{ fontSize: 15, textDecoration: 'none', display: 'block', marginTop: 10, color: '#4FB8E8' }}
              >
                {pk.phone}
              </a>
            </div>

            <div style={{ background: '#fff', border: '1px solid #DCE3EA', borderRadius: 18, padding: 26 }}>
              <span style={kicker('#0A70B8')}>{us.region}</span>
              <p style={{ fontWeight: 500, fontSize: 18, lineHeight: 1.4, margin: 0, letterSpacing: '-.01em' }}>
                {us.lines[0]}
                <br />
                {us.lines[1]}
              </p>
              <a
                href={`tel:${us.tel}`}
                style={{ fontSize: 15, textDecoration: 'none', display: 'block', marginTop: 10, color: '#0A70B8' }}
              >
                {us.phone}
              </a>
            </div>

            <div style={{ background: '#fff', border: '1px solid #DCE3EA', borderRadius: 18, padding: 26 }}>
              <span style={kicker('#0A70B8')}>Email</span>
              <a
                href={`mailto:${COMPANY.email}`}
                style={{ fontWeight: 500, fontSize: 18, letterSpacing: '-.01em', textDecoration: 'none', color: '#101C2B' }}
              >
                {COMPANY.email}
              </a>
              <p style={{ margin: '10px 0 0', fontSize: 14, color: '#4E5D6C' }}>
                Available 24/7 for questions and support.
              </p>
            </div>
          </aside>
        </div>
      </LightSection>
    </>
  );
}

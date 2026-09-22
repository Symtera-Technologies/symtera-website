import Link from 'next/link';
import { MONO, SERIF } from '@/lib/tokens';
import { pageMetadata } from '@/lib/seo';
import { FAQ_CATEGORIES, FAQ_ALL } from '@/content/faq';
import { ROMAN } from '@/content/site';
import { COMPANY, OFFICES } from '@/content/company';
import { LightSection, DarkCta } from '@/components/ui/Layout';
import { FaqCard } from '@/components/ui/FaqList';
import Button from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';
import { faqPageSchema } from '@/lib/schema';

export const metadata = pageMetadata({
  title: 'Frequently Asked Questions',
  description:
    'Answers about Symtera Technologies: our AI, cloud, cybersecurity, software, hosting and digital marketing services, how we work, and how to get a proposal.',
  path: '/faq',
});

export default function FaqPage() {
  const [pk] = OFFICES;

  return (
    <>
      <JsonLd data={faqPageSchema(FAQ_ALL, '/faq')} />

      <section
        style={{
          position: 'relative',
          padding: '150px 0 72px',
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
              'radial-gradient(ellipse 50% 60% at 88% 20%,rgba(10,112,184,.32),transparent 60%),linear-gradient(to bottom,rgba(11,20,32,0) 50%,#0B1420 100%)',
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
            Home / FAQ
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
            Frequently Asked{' '}
            <em style={{ fontFamily: SERIF, fontWeight: 500, fontStyle: 'italic', letterSpacing: '-.02em', color: '#8CC63F' }}>
              Questions
            </em>
          </h1>
          <p
            data-hero-rise
            style={{
              fontSize: 'clamp(17px,1.35vw,20px)',
              lineHeight: 1.65,
              color: '#B7C3CF',
              maxWidth: '62ch',
              margin: '36px 0 0',
              animationDelay: '.2s',
            }}
          >
            The questions we are asked most often, across services, delivery and working with us. If yours is not here,
            ask us directly and we will answer within 24 hours.
          </p>

          <nav
            data-hero-rise
            aria-label="Question categories"
            style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 36, animationDelay: '.3s' }}
          >
            {FAQ_CATEGORIES.map((c) => (
              <a
                key={c.id}
                data-btn="ghost"
                href={`#${c.id}`}
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
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#8CC63F' }} />
                {c.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <LightSection>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(56px,7vw,104px) clamp(20px,5vw,80px)' }}>
          {FAQ_CATEGORIES.map((c, i) => (
            <div
              key={c.id}
              id={c.id}
              data-reveal
              data-stack
              style={{
                scrollMarginTop: 110,
                display: 'grid',
                gridTemplateColumns: 'minmax(0,4fr) minmax(0,8fr)',
                gap: '20px clamp(32px,5vw,96px)',
                alignItems: 'start',
                padding: 'clamp(36px,4vw,56px) 0',
                borderTop: '1px solid #DCE3EA',
              }}
            >
              <div style={{ position: 'sticky', top: 110 }}>
                <span
                  style={{
                    display: 'block',
                    fontFamily: SERIF,
                    fontSize: 'clamp(44px,4.6vw,72px)',
                    lineHeight: 0.9,
                    color: '#0A70B8',
                    marginBottom: 14,
                  }}
                >
                  {ROMAN[i]}
                </span>
                <h2
                  style={{
                    fontWeight: 500,
                    fontSize: 'clamp(24px,2.4vw,34px)',
                    lineHeight: 1.08,
                    letterSpacing: '-.03em',
                    margin: 0,
                  }}
                >
                  {c.title}
                </h2>
              </div>
              <FaqCard faq={c.items} contactLine={i === FAQ_CATEGORIES.length - 1} />
            </div>
          ))}

          <DarkCta
            title={
              <>
                <h2
                  style={{
                    fontWeight: 500,
                    fontSize: 'clamp(28px,3.4vw,48px)',
                    lineHeight: 1,
                    letterSpacing: '-.04em',
                    margin: '0 0 16px',
                  }}
                >
                  Still have questions?
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: '#C9D3DD', margin: 0, maxWidth: '56ch' }}>
                  Tell us what you are trying to do and our team will come back with a straight answer, usually the same
                  working day. You can also email{' '}
                  <Link href={`mailto:${COMPANY.email}`} style={{ color: '#8CC63F' }}>
                    {COMPANY.email}
                  </Link>{' '}
                  or call {pk.phone}.
                </p>
              </>
            }
          >
            <Button href="/contact" style={{ whiteSpace: 'nowrap' }}>
              Request a solution
            </Button>
          </DarkCta>
        </div>
      </LightSection>
    </>
  );
}

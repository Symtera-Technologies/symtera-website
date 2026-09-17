import type { Metadata } from 'next';
import { MONO, SERIF } from '@/lib/tokens';
import { PARTNER_SECTIONS, PARTNER_CASES } from '@/content/partners';
import { LightSection, DarkCta, BulletList } from '@/components/ui/Layout';
import TiltCard from '@/components/ui/TiltCard';
import Button from '@/components/ui/Button';
import { SvcScene } from '@/components/visuals/SceneSvg';

export const metadata: Metadata = {
  title: 'Partners',
  description:
    'Authorized partnerships with more than 20 leading technology vendors across cybersecurity, networking, cloud computing, infrastructure and enterprise software.',
};

const APPROACH: [string, string][] = [
  [
    'Vendor-Neutral Recommendations:',
    'We match technology to your needs — not the other way around. With 20+ vendor relationships, we have no incentive to push a single vendor’s products.',
  ],
  [
    'Certified Engineers:',
    'Our team holds active certifications from each partner vendor, ensuring we can deploy, configure, and support their products at the highest level.',
  ],
  [
    'Direct Vendor Escalation:',
    'As authorized partners, we have direct escalation paths to vendor engineering teams — meaning faster resolution for complex issues.',
  ],
  [
    'Competitive Pricing:',
    'Partner-tier pricing means you get enterprise technology at rates that are typically below retail — often significantly so.',
  ],
];

export default function PartnersPage() {
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
              'radial-gradient(ellipse 50% 60% at 85% 30%,rgba(10,112,184,.34),transparent 60%),linear-gradient(to bottom,rgba(11,20,32,0) 50%,#0B1420 100%)',
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
              Home / Partners
            </span>
            <h1
              data-hero-rise
              style={{
                fontWeight: 500,
                fontSize: 'clamp(42px,6vw,96px)',
                lineHeight: 0.95,
                letterSpacing: '-.045em',
                margin: 0,
                animationDelay: '.1s',
              }}
            >
              Our Technology Partners —{' '}
              <em style={{ fontFamily: SERIF, fontWeight: 500, fontStyle: 'italic', letterSpacing: '-.02em', color: '#8CC63F' }}>
                20+ Industry-Leading Vendors
              </em>
            </h1>
            <p
              data-hero-rise
              style={{
                fontSize: 'clamp(17px,1.35vw,20px)',
                lineHeight: 1.65,
                color: '#B7C3CF',
                maxWidth: '66ch',
                margin: '36px 0 0',
                animationDelay: '.2s',
              }}
            >
              Technology partnerships are the backbone of our service delivery at{' '}
              <strong style={{ color: '#F4F7FA', fontWeight: 500 }}>Symtera Technologies</strong>. We maintain
              authorized partnerships with more than 20 leading technology vendors across cybersecurity, networking,
              cloud computing, infrastructure, and enterprise software. These aren’t just logos on a webpage — our
              partnerships give you access to vendor-direct pricing, priority support escalation, certified engineering
              expertise, and early access to new technologies.
            </p>
            <p
              data-hero-rise
              style={{
                fontSize: 'clamp(16px,1.25vw,18px)',
                lineHeight: 1.65,
                color: '#B7C3CF',
                maxWidth: '66ch',
                margin: '18px 0 0',
                animationDelay: '.3s',
              }}
            >
              Our approach is <strong style={{ color: '#F4F7FA', fontWeight: 500 }}>vendor-neutral</strong>. We
              recommend the best technology for your specific needs, not the product with the highest margin. With
              partnerships spanning the full technology landscape, we can design solutions that combine best-of-breed
              products from multiple vendors into an integrated, cohesive environment.
            </p>
          </div>
          <div
            data-hero-visual
            data-hero-rise
            aria-hidden="true"
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '1',
              maxWidth: 560,
              justifySelf: 'end',
              minWidth: 0,
              animationDelay: '.3s',
            }}
          >
            <div data-parallax="0.05" style={{ position: 'absolute', inset: 0 }}>
              <SvcScene kind="partners" />
            </div>
          </div>
        </div>
      </section>

      <LightSection>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(56px,7vw,104px) clamp(20px,5vw,80px)' }}>
          {PARTNER_SECTIONS.map((g) => (
            <div
              key={g.num}
              id={g.id}
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
                  {g.num}
                </span>
                <h2
                  style={{
                    fontWeight: 500,
                    fontSize: 'clamp(24px,2.4vw,34px)',
                    lineHeight: 1.08,
                    letterSpacing: '-.03em',
                    margin: '0 0 14px',
                  }}
                >
                  {g.title}
                </h2>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: '#4E5D6C', margin: 0 }}>{g.copy}</p>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,230px),1fr))',
                  gap: 12,
                  perspective: 1400,
                }}
              >
                {g.items.map(([name, copy]) => (
                  <TiltCard
                    key={name}
                    style={{
                      background: 'linear-gradient(160deg,#ffffff,#F4F7FA)',
                      border: '1px solid #DCE3EA',
                      borderRadius: 18,
                      padding: '22px 20px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 12,
                      boxShadow: '0 18px 40px -28px rgba(11,20,32,.35)',
                    }}
                  >
                    <span
                      style={{
                        position: 'relative',
                        display: 'inline-grid',
                        placeItems: 'center',
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: 'linear-gradient(160deg,#0F1B2B,#0B1420)',
                        color: '#8CC63F',
                        fontFamily: SERIF,
                        fontSize: 20,
                        transform: 'translateZ(22px)',
                      }}
                    >
                      {name[0]}
                    </span>
                    <div style={{ position: 'relative', transform: 'translateZ(12px)' }}>
                      <h3 style={{ fontWeight: 500, fontSize: 18, lineHeight: 1.15, letterSpacing: '-.02em', margin: '0 0 6px' }}>
                        {name}
                      </h3>
                      <p style={{ fontSize: 13.5, lineHeight: 1.5, color: '#4E5D6C', margin: 0 }}>{copy}</p>
                    </div>
                  </TiltCard>
                ))}
              </div>
            </div>
          ))}

          <div
            data-reveal
            data-stack
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0,4fr) minmax(0,8fr)',
              gap: '20px clamp(32px,5vw,96px)',
              alignItems: 'start',
              padding: 'clamp(36px,4vw,56px) 0',
              borderTop: '1px solid #DCE3EA',
            }}
          >
            <div>
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
                VI
              </span>
              <h2 style={{ fontWeight: 500, fontSize: 'clamp(24px,2.4vw,34px)', lineHeight: 1.08, letterSpacing: '-.03em', margin: 0 }}>
                Our Partner Approach
              </h2>
            </div>
            <div style={{ fontSize: 16.5, lineHeight: 1.7, color: '#4E5D6C' }}>
              <p style={{ margin: 0 }}>What sets our partner relationships apart from other IT providers:</p>
              <BulletList items={APPROACH} />
            </div>
          </div>

          <div
            data-reveal
            data-stack
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0,4fr) minmax(0,8fr)',
              gap: '20px clamp(32px,5vw,96px)',
              alignItems: 'start',
              padding: 'clamp(36px,4vw,56px) 0',
              borderTop: '1px solid #DCE3EA',
            }}
          >
            <div>
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
                VII
              </span>
              <h2
                style={{
                  fontWeight: 500,
                  fontSize: 'clamp(24px,2.4vw,34px)',
                  lineHeight: 1.08,
                  letterSpacing: '-.03em',
                  margin: '0 0 14px',
                }}
              >
                Partner-Powered Solutions in Action
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: '#4E5D6C', margin: 0 }}>
                Here’s how our multi-vendor approach delivers real results for our clients:
              </p>
            </div>
            <div style={{ display: 'grid', gap: 12 }}>
              {PARTNER_CASES.map((c) => (
                <div
                  key={c.who}
                  data-card-light
                  style={{
                    background: '#0B1420',
                    color: '#F4F7FA',
                    border: '1px solid #0B1420',
                    borderRadius: 18,
                    padding: 24,
                    display: 'grid',
                    gap: 12,
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      right: -60,
                      top: -60,
                      width: 200,
                      height: 200,
                      borderRadius: '50%',
                      background: 'radial-gradient(circle,rgba(10,112,184,.55),transparent 65%)',
                    }}
                  />
                  <span
                    style={{
                      position: 'relative',
                      fontFamily: MONO,
                      fontSize: 12,
                      letterSpacing: '.12em',
                      textTransform: 'uppercase',
                      color: '#8CC63F',
                    }}
                  >
                    {c.who}
                  </span>
                  <div style={{ position: 'relative', display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
                    {c.stack.map((s) => (
                      <span
                        key={s}
                        style={{
                          fontFamily: MONO,
                          fontSize: 12.5,
                          border: '1px solid rgba(255,255,255,.18)',
                          borderRadius: 999,
                          padding: '7px 12px',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {s}
                      </span>
                    ))}
                    <span style={{ color: '#8CC63F', fontSize: 18 }}>=</span>
                  </div>
                  <p style={{ position: 'relative', fontSize: 15, lineHeight: 1.55, color: '#C9D3DD', margin: 0 }}>{c.result}</p>
                </div>
              ))}
            </div>
          </div>

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
                  Become a Symtera Client
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: '#C9D3DD', margin: 0, maxWidth: '56ch' }}>
                  Ready to leverage our partner ecosystem for your next technology project? Tell us about your
                  requirements and we’ll recommend the optimal vendor combination for your specific needs and budget.
                </p>
              </>
            }
          >
            <Button href="/contact" style={{ whiteSpace: 'nowrap' }}>
              Request a Free Consultation
            </Button>
          </DarkCta>
        </div>
      </LightSection>
    </>
  );
}

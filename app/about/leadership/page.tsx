import Link from 'next/link';
import { MONO, SERIF } from '@/lib/tokens';
import { LEADERSHIP } from '@/content/company';
import { LightSection, DarkCta, BulletList } from '@/components/ui/Layout';
import TiltCard from '@/components/ui/TiltCard';
import Button from '@/components/ui/Button';
import { ArrowUpRight } from '@/components/ui/Icons';
import { OrbitScene } from '@/components/visuals/OrbitScene';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Management Team',
  description:
      'Our founding team brings together decades of combined experience in IT infrastructure, cybersecurity, cloud computing, software development, and business strategy.',
  path: '/about/leadership',
});

const EXTENDED_TEAM: [string, string][] = [
  ['Cybersecurity Engineering:', 'Certified security professionals specializing in firewall deployment, endpoint protection, vulnerability assessments, and managed security services.'],
  ['Cloud & Infrastructure:', 'Certified cloud architects and infrastructure engineers who design, deploy, and manage server environments, data centers, and cloud platforms.'],
  ['Web & Mobile Development:', 'Full-stack developers experienced in modern frameworks (React, Angular, Node.js, PHP, Python) and mobile development for iOS and Android.'],
  ['Digital Marketing & SEO:', 'Strategists and specialists who drive organic traffic, manage PPC campaigns, and optimize conversion rates for our clients.'],
  ['Technical Support:', 'Our support team provides responsive assistance across all technology domains, ensuring our clients’ systems run smoothly 24/7.'],
];

const CULTURE: [string, string][] = [
  ['Commitment:', 'We treat every client’s success as our own. When we make a promise, we keep it — on time and on budget.'],
  ['Excellence:', 'We hold ourselves to the highest technical and professional standards. Our ISO certifications aren’t just certificates on a wall — they’re embedded in how we work every day.'],
  ['Partnership:', 'We don’t just deliver projects — we build lasting partnerships. Many of our clients have been with us since our founding year.'],
  ['Teamwork:', 'Our best solutions come from collaboration across disciplines, offices, and cultures. We leverage our diverse team’s perspectives to deliver innovative solutions.'],
  ['Integrity:', 'We provide honest, vendor-neutral recommendations. If a solution isn’t right for you, we’ll tell you — even if it means less revenue for us.'],
];

function Portrait({ location }: { location: string }) {
  return (
    <TiltCard
      style={{
        borderRadius: 20,
        border: '1px solid #DCE3EA',
        background: '#fff',
        boxShadow: '0 30px 60px -36px rgba(11,20,32,.4)',
      }}
    >
      <div
        style={{
          width: '100%',
          aspectRatio: '4/5',
          background: '#F4F7FA',
          display: 'grid',
          placeItems: 'center',
          fontFamily: MONO,
          fontSize: 11,
          letterSpacing: '.14em',
          textTransform: 'uppercase',
          color: '#8A96A3',
        }}
      >
        Portrait
      </div>
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: '45%',
          background: 'linear-gradient(to top,rgba(11,20,32,.82),transparent)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 16,
          bottom: 16,
          right: 16,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: 10,
          color: '#fff',
          whiteSpace: 'nowrap',
        }}
      >
        <span style={{ fontFamily: SERIF, fontSize: 16, fontStyle: 'italic' }}>Est. 2019</span>
        <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase' }}>{location}</span>
      </div>
    </TiltCard>
  );
}

function IndexBlock({ num, title }: { num: string; title: string }) {
  return (
    <div>
      <span
        style={{
          display: 'block',
          fontFamily: SERIF,
          fontSize: 'clamp(48px,5vw,80px)',
          lineHeight: 0.9,
          color: '#0A70B8',
          marginBottom: 14,
        }}
      >
        {num}
      </span>
      <h2 style={{ fontWeight: 500, fontSize: 'clamp(26px,2.6vw,38px)', lineHeight: 1.05, letterSpacing: '-.03em', margin: 0 }}>
        {title}
      </h2>
    </div>
  );
}

const splitRow: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'minmax(0,4fr) minmax(0,8fr)',
  gap: '20px clamp(32px,5vw,96px)',
  alignItems: 'start',
  padding: 'clamp(36px,4vw,56px) 0',
  borderTop: '1px solid #DCE3EA',
};

export default function LeadershipPage() {
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
              'radial-gradient(ellipse 50% 60% at 88% 20%,rgba(10,112,184,.32),transparent 60%),radial-gradient(ellipse 30% 40% at 70% 90%,rgba(140,198,63,.14),transparent 65%),linear-gradient(to bottom,rgba(11,20,32,0) 50%,#0B1420 100%)',
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: 'clamp(20px,5vw,80px)',
            top: 120,
            width: 'min(38vw,460px)',
            height: 'min(38vw,460px)',
            pointerEvents: 'none',
            opacity: 0.9,
          }}
        >
          <OrbitScene />
        </div>
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
            Home / Management Team
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
            Our Leadership Team —{' '}
            <em style={{ fontFamily: SERIF, fontWeight: 500, fontStyle: 'italic', letterSpacing: '-.02em', color: '#8CC63F' }}>
              Decades of Technology Experience
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
            Behind every successful technology solution is a team of experienced leaders with the vision, expertise, and
            commitment to deliver results. At <strong style={{ color: '#F4F7FA', fontWeight: 500 }}>Symtera Technologies</strong>,
            our founding team brings together decades of combined experience in IT infrastructure, cybersecurity, cloud
            computing, software development, and business strategy. Together, they built Symtera from the ground up in
            2019 with a clear mission: to make enterprise-grade technology accessible to businesses of every size.
          </p>
        </div>
      </section>

      <LightSection>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(64px,8vw,120px) clamp(20px,5vw,80px)' }}>
          <p
            data-reveal
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(20px,1.8vw,27px)',
              lineHeight: 1.45,
              color: '#101C2B',
              maxWidth: '60ch',
              margin: '0 0 clamp(40px,5vw,64px)',
            }}
          >
            Our leadership team’s hands-on approach means you’re never far from the decision-makers. Whether you’re
            working on a complex cybersecurity deployment or a straightforward web development project, our founders are
            actively involved in ensuring every engagement meets our{' '}
            <Link href="/about/certifications" style={{ color: '#0A70B8' }}>
              ISO-certified quality standards
            </Link>{' '}
            and exceeds client expectations.
          </p>

          {LEADERSHIP.map((leader) => (
            <article
              key={leader.id}
              data-reveal
              data-stack
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0,4fr) minmax(0,8fr)',
                gap: '28px clamp(32px,5vw,96px)',
                alignItems: 'start',
                padding: 'clamp(40px,5vw,72px) 0',
                borderTop: '1px solid #DCE3EA',
              }}
            >
              <div style={{ position: 'sticky', top: 110 }}>
                <Portrait location={leader.location} />
                <h2
                  style={{
                    fontWeight: 500,
                    fontSize: 'clamp(26px,2.4vw,34px)',
                    lineHeight: 1.05,
                    letterSpacing: '-.03em',
                    margin: '22px 0 6px',
                  }}
                >
                  {leader.name}
                </h2>
                <p
                  style={{
                    fontFamily: MONO,
                    fontSize: 12,
                    letterSpacing: '.1em',
                    textTransform: 'uppercase',
                    color: '#0A70B8',
                    margin: 0,
                  }}
                  dangerouslySetInnerHTML={{ __html: leader.role }}
                />
                {leader.linkedin && (
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      marginTop: 14,
                      fontSize: 13.5,
                      fontWeight: 500,
                      color: '#0A70B8',
                      textDecoration: 'none',
                    }}
                  >
                    LinkedIn
                    <ArrowUpRight size={12} />
                  </a>
                )}
              </div>
              <div style={{ fontSize: 16.5, lineHeight: 1.75, color: '#4E5D6C', display: 'grid', gap: 18 }}>
                {leader.bio.map((p, i) => (
                  <p
                    key={i}
                    style={
                      i === 0
                        ? {
                            margin: 0,
                            fontFamily: SERIF,
                            fontSize: 'clamp(20px,1.7vw,25px)',
                            lineHeight: 1.45,
                            color: '#101C2B',
                          }
                        : { margin: 0 }
                    }
                    dangerouslySetInnerHTML={{ __html: p }}
                  />
                ))}
              </div>
            </article>
          ))}

          <div data-reveal data-stack style={splitRow}>
            <IndexBlock num="IV" title="Our Extended Team" />
            <div style={{ fontSize: 16.5, lineHeight: 1.7, color: '#4E5D6C' }}>
              <p style={{ margin: 0 }}>
                Behind our founding leadership is a talented team of engineers, developers, security analysts, project
                managers, and support specialists who bring our solutions to life every day. Our team structure includes:
              </p>
              <BulletList items={EXTENDED_TEAM} />
              <p style={{ margin: '22px 0 0' }}>
                Our dual-continent presence in the <strong style={{ color: '#101C2B', fontWeight: 500 }}>United States</strong>{' '}
                and <strong style={{ color: '#101C2B', fontWeight: 500 }}>Pakistan</strong> gives us the ability to
                provide extended support hours, rapid team scaling, and competitive pricing — all while maintaining the
                quality standards our ISO certifications demand.
              </p>
            </div>
          </div>

          <div data-reveal data-stack style={splitRow}>
            <IndexBlock num="V" title="Our Culture & Values" />
            <div style={{ fontSize: 16.5, lineHeight: 1.7, color: '#4E5D6C' }}>
              <p style={{ margin: 0 }}>Symtera’s culture is built on five core values that guide everything we do:</p>
              <BulletList items={CULTURE} />
            </div>
          </div>

          <hr style={{ border: 0, height: 1, background: '#DCE3EA', margin: 0 }} />

          <DarkCta
            style={{ marginTop: 'clamp(64px,8vw,120px)' }}
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
                  Join Our Team
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: '#C9D3DD', margin: 0, maxWidth: '56ch' }}>
                  We’re always looking for talented technology professionals who share our passion for excellence. If
                  you’re interested in joining a growing, multinational IT solutions team, check out our current
                  openings.
                </p>
              </>
            }
          >
            <Button href="/contact" style={{ whiteSpace: 'nowrap' }}>
              View Career Opportunities
            </Button>
          </DarkCta>
        </div>
      </LightSection>
    </>
  );
}

import Link from 'next/link';
import { MONO, SERIF } from '@/lib/tokens';
import { VENDOR_PROGRAMS } from '@/content/partners';
import { LightSection, DarkCta, BulletList } from '@/components/ui/Layout';
import TiltCard from '@/components/ui/TiltCard';
import Button from '@/components/ui/Button';
import { ArrowRight } from '@/components/ui/Icons';
import { OrbitScene } from '@/components/visuals/OrbitScene';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Our Affiliations',
  description:
      'Active affiliations with industry organizations, vendor partner programs, academic institutions and professional communities.',
  path: '/about/affiliations',
});

const ASSOCIATIONS: [string, string][] = [
  ['CompTIA:', 'As a member of the Computing Technology Industry Association, we stay current with industry certifications, workforce development initiatives, and best practice frameworks for IT service delivery.'],
  ['Pakistan Software Houses Association (P@SHA):', 'Symtera is affiliated with P@SHA, the leading trade body for Pakistan’s IT industry. This membership connects us with the broader South Asian technology ecosystem and supports our recruitment and training efforts in Lahore.'],
  ['Lahore Chamber of Commerce & Industry:', 'Our affiliation with the LCCI supports our business development activities in Pakistan and provides access to cross-industry networking and trade facilitation resources.'],
  ['ISACA:', 'Our involvement with ISACA supports our cybersecurity and governance practices, keeping our team aligned with global standards for information security auditing, control, and assurance.'],
];

const ACADEMIC: [string, string][] = [
  ['University Partnerships:', 'We collaborate with top-level universities in Pakistan for research projects, guest lectures, and curriculum advisory roles that help align academic programs with industry needs.'],
  ['Internship Programs:', 'Our structured internship program provides university students with hands-on experience in cybersecurity, cloud computing, web development, and IT infrastructure — mentored by our senior engineers.'],
  ['Research Collaborations:', 'We participate in applied research projects focused on emerging technologies including AI/ML applications, advanced threat detection, and IoT security.'],
];

const COMMUNITY: [string, string][] = [
  ['New Jersey Technology Community:', 'Active participation in local NJ business and technology networking events, contributing to the growth of the state’s IT services sector.'],
  ['Lahore Tech Ecosystem:', 'Supporting the growth of Lahore’s technology community through hiring, mentorship, and participation in local tech events and meetups.'],
  ['Industry Conferences:', 'Our leadership team regularly attends and contributes to major technology conferences and vendor-sponsored events, staying current with industry innovations and sharing expertise with the broader community.'],
];

const WHY: [string, string][] = [
  ['Access to Latest Training & Tools:', 'Partner program memberships include access to vendor training, beta programs, and certification paths that keep our engineers at the leading edge of their specializations.'],
  ['Vendor-Direct Escalation Paths:', 'Active partner status gives us direct access to vendor engineering and support teams, enabling faster resolution of complex technical issues.'],
  ['Early Access to New Technologies:', 'As certified partners, we often receive early access to new product releases, enabling us to evaluate and deploy new solutions ahead of the broader market.'],
  ['Competitive Pricing:', 'Partner-tier pricing gives our clients access to enterprise technology at rates well below retail, maximizing the return on their technology investments.'],
  ['Industry Best Practices:', 'Membership in industry associations ensures our processes and methodologies align with current best practices and evolving standards.'],
];

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

export default function AffiliationsPage() {
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
              'radial-gradient(ellipse 50% 60% at 88% 20%,rgba(140,198,63,.24),transparent 60%),radial-gradient(ellipse 30% 40% at 70% 90%,rgba(140,198,63,.14),transparent 65%),linear-gradient(to bottom,rgba(11,20,32,0) 50%,#0B1420 100%)',
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
            Home / Our Affiliations
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
            Our Industry Affiliations &amp;{' '}
            <em style={{ fontFamily: SERIF, fontWeight: 500, fontStyle: 'italic', letterSpacing: '-.02em', color: '#8CC63F' }}>
              Memberships
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
            Staying connected to the broader technology ecosystem is essential for delivering cutting-edge solutions.{' '}
            <strong style={{ color: '#F4F7FA', fontWeight: 500 }}>Symtera Technologies</strong> maintains active
            affiliations with industry organizations, vendor partner programs, academic institutions, and professional
            communities that keep our team at the forefront of technology trends, best practices, and emerging
            innovations.
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
            Our affiliations aren’t just credentials — they represent our ongoing investment in professional
            development, industry engagement, and the technology community. For our clients, these memberships translate
            into access to the latest tools, training, and vendor resources that directly enhance the quality and
            relevance of our solutions.
          </p>

          <div data-reveal data-stack style={splitRow}>
            <IndexBlock num="I" title="Technology Industry Associations" />
            <div style={{ fontSize: 16.5, lineHeight: 1.7, color: '#4E5D6C' }}>
              <p style={{ margin: 0 }}>
                We participate in leading technology industry organizations that set standards, promote best practices,
                and foster professional development across the IT sector:
              </p>
              <BulletList items={ASSOCIATIONS} />
            </div>
          </div>

          <div data-reveal style={{ padding: 'clamp(36px,4vw,56px) 0', borderTop: '1px solid #DCE3EA' }}>
            <div data-stack style={{ ...splitRow, padding: 0, borderTop: 'none' }}>
              <IndexBlock num="II" title="Vendor Partner Programs" />
              <div>
                <p style={{ fontSize: 16.5, lineHeight: 1.7, color: '#4E5D6C', margin: '0 0 22px' }}>
                  Our vendor partnerships go beyond basic reseller agreements. We maintain active, tiered partnerships
                  with leading technology vendors that require ongoing certification, training, and demonstrated
                  expertise:
                </p>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))',
                    gap: 12,
                    perspective: 1400,
                  }}
                >
                  {VENDOR_PROGRAMS.map((v) => (
                    <TiltCard
                      key={v.n}
                      style={{
                        background: 'linear-gradient(160deg,#ffffff,#F4F7FA)',
                        border: '1px solid #DCE3EA',
                        borderRadius: 18,
                        padding: '22px 20px',
                        minHeight: 180,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        gap: 16,
                        boxShadow: '0 18px 40px -28px rgba(11,20,32,.35)',
                      }}
                    >
                      <span
                        style={{
                          position: 'relative',
                          fontFamily: MONO,
                          fontSize: 11,
                          letterSpacing: '.12em',
                          textTransform: 'uppercase',
                          color: '#0A70B8',
                          transform: 'translateZ(20px)',
                        }}
                      >
                        {v.n} — Partner Program
                      </span>
                      <div style={{ position: 'relative', transform: 'translateZ(14px)' }}>
                        <span
                          style={{ display: 'block', fontFamily: SERIF, fontSize: 28, lineHeight: 1, color: '#101C2B', marginBottom: 8 }}
                        >
                          {v.name}
                        </span>
                        <span style={{ fontSize: 13.5, lineHeight: 1.45, color: '#4E5D6C' }}>{v.copy}</span>
                      </div>
                    </TiltCard>
                  ))}
                </div>
                <Link
                  href="/partners"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    marginTop: 22,
                    fontSize: 14.5,
                    fontWeight: 500,
                    color: '#0A70B8',
                    textDecoration: 'none',
                  }}
                >
                  View all of our technology partner relationships
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          <div data-reveal data-stack style={splitRow}>
            <IndexBlock num="III" title="Academic & Research Collaborations" />
            <div style={{ fontSize: 16.5, lineHeight: 1.7, color: '#4E5D6C' }}>
              <p style={{ margin: 0 }}>
                We believe in investing in the next generation of technology professionals. Symtera maintains
                collaborative relationships with academic institutions to support IT education, provide real-world
                training opportunities, and contribute to the technology talent pipeline:
              </p>
              <BulletList items={ACADEMIC} />
            </div>
          </div>

          <div data-reveal data-stack style={splitRow}>
            <IndexBlock num="IV" title="Community Involvement" />
            <div style={{ fontSize: 16.5, lineHeight: 1.7, color: '#4E5D6C' }}>
              <p style={{ margin: 0 }}>
                Technology is a global industry, but impact is local. We’re committed to contributing to the technology
                communities in both our operating regions:
              </p>
              <BulletList items={COMMUNITY} />
            </div>
          </div>

          <div data-reveal data-stack style={splitRow}>
            <IndexBlock num="V" title="Why Affiliations Matter to Our Clients" />
            <div style={{ fontSize: 16.5, lineHeight: 1.7, color: '#4E5D6C' }}>
              <p style={{ margin: 0 }}>
                Our affiliations deliver tangible benefits that directly improve the solutions we deliver to our
                clients:
              </p>
              <BulletList items={WHY} />
              <p style={{ margin: '22px 0 0' }}>
                Our affiliations reflect our commitment to continuous improvement and industry leadership. When you work
                with Symtera, you benefit from the full breadth of our industry connections and partner resources.
              </p>
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
                  Ready to work with an industry-connected IT partner?
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: '#C9D3DD', margin: 0, maxWidth: '56ch' }}>
                  Request a consultation and our team will map your goals to the right partner technologies.
                </p>
              </>
            }
          >
            <Button href="/contact" style={{ whiteSpace: 'nowrap' }}>
              Request a consultation
            </Button>
          </DarkCta>
        </div>
      </LightSection>
    </>
  );
}

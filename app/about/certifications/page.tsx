import Link from 'next/link';
import { MONO, SERIF } from '@/lib/tokens';
import { FRAMEWORKS } from '@/content/partners';
import { LightSection, DarkCta, BulletList } from '@/components/ui/Layout';
import TiltCard from '@/components/ui/TiltCard';
import Button from '@/components/ui/Button';
import { ArrowRight } from '@/components/ui/Icons';
import { OrbitScene, SealScene } from '@/components/visuals/OrbitScene';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Certifications',
  description:
      'Our dual ISO certifications — ISO 9001:2015 and ISO/IEC 27001:2013 — mean every process, project and client interaction is governed by rigorously audited frameworks.',
  path: '/about/certifications',
});

const QMS_BENEFITS: [string, string][] = [
  ['Consistent Project Quality:', 'Every project follows documented processes with defined quality checkpoints, ensuring nothing falls through the cracks regardless of project size or complexity.'],
  ['Continuous Improvement:', 'ISO 9001 requires us to measure, analyze, and continuously improve our processes. Your feedback directly drives enhancements to how we work.'],
  ['Risk-Based Thinking:', 'The 2015 revision emphasizes risk management at every stage. We proactively identify and mitigate potential issues before they affect your project timeline or budget.'],
  ['Clear Accountability:', 'Defined roles, responsibilities, and escalation paths ensure you always know who is responsible for every aspect of your engagement.'],
];

const ISMS_COVERAGE: [string, string][] = [
  ['Data Protection:', 'Rigorous controls governing how client data is stored, transmitted, processed, and disposed of throughout the engagement lifecycle.'],
  ['Access Control:', 'Role-based access control (RBAC), multi-factor authentication (MFA), and least-privilege principles ensure that only authorized personnel can access sensitive systems and data.'],
  ['Risk Management:', 'We conduct regular information security risk assessments, maintain a comprehensive risk register, and implement controls that are proportionate to identified risks.'],
  ['Incident Response:', 'A documented incident management procedure ensures rapid detection, response, and recovery from any security event, with transparent communication to affected clients.'],
  ['Business Continuity:', 'Our ISMS includes business continuity and disaster recovery plans that are tested regularly to ensure we can maintain service delivery even during disruptions.'],
];

const PARTNER_CERTS: [string, string][] = [
  ['Fortinet:', 'NSE (Network Security Expert) certifications for FortiGate firewall deployment, configuration, and management.'],
  ['Sophos:', 'Certified Engineer and Architect certifications for Sophos XGS firewall and endpoint protection solutions.'],
  ['Dell Technologies:', 'Certifications for Dell PowerEdge server deployment, storage solutions, and data center infrastructure.'],
  ['Microsoft:', 'Azure and Microsoft 365 certifications covering cloud infrastructure, identity management, and productivity platform administration.'],
  ['Amazon Web Services:', 'AWS certifications covering cloud architecture, deployment, and operations on the AWS platform.'],
];

const MEANING: [string, string][] = [
  ['Reduced Risk:', 'ISO-certified processes systematically identify and mitigate risks before they become problems, protecting your investment and your data.'],
  ['Regulatory Compliance Support:', 'Our certified ISMS provides a foundation that supports your organization’s compliance with HIPAA, PCI-DSS, GDPR, SOC 2, and other regulatory frameworks.'],
  ['Proven Processes:', 'You’re not relying on ad hoc practices — every aspect of our service delivery follows documented, audited, and continuously improved processes.'],
  ['Auditability:', 'Our ISO certifications provide documented evidence of our security and quality controls that you can share with your own auditors, regulators, and stakeholders.'],
];

const h3: React.CSSProperties = { fontWeight: 500, fontSize: 19, letterSpacing: '-.02em', margin: '32px 0 0' };
const body: React.CSSProperties = { fontSize: 16.5, lineHeight: 1.7, color: '#4E5D6C', margin: 0 };

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

const sealRow: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'minmax(0,7fr) minmax(0,5fr)',
  gap: '32px clamp(32px,5vw,96px)',
  alignItems: 'start',
  padding: 'clamp(40px,5vw,72px) 0',
  borderTop: '1px solid #DCE3EA',
};

export default function CertificationsPage() {
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
            Home / Certifications
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
            Our Certifications —{' '}
            <em style={{ fontFamily: SERIF, fontWeight: 500, fontStyle: 'italic', letterSpacing: '-.02em', color: '#8CC63F' }}>
              Quality &amp; Security You Can Trust
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
            At <strong style={{ color: '#F4F7FA', fontWeight: 500 }}>Symtera Technologies</strong>, certifications
            aren’t just badges on our website — they’re evidence of our commitment to the highest international
            standards in quality management and information security. Our dual ISO certifications mean that every
            process, every project, and every client interaction is governed by rigorously audited frameworks designed
            to minimize risk, ensure consistency, and deliver measurable quality improvements.
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
            When you work with an ISO-certified IT partner, you’re choosing a company that has invested in building and
            maintaining the systems, controls, and culture required to consistently deliver excellent results. Here’s
            what our certifications mean for your business.
          </p>

          <div data-reveal data-stack style={sealRow}>
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
                I
              </span>
              <h2
                style={{
                  fontWeight: 500,
                  fontSize: 'clamp(28px,3vw,44px)',
                  lineHeight: 1.02,
                  letterSpacing: '-.035em',
                  margin: '0 0 20px',
                }}
              >
                ISO 9001:2015 — Quality Management System
              </h2>
              <p style={body}>
                <strong style={{ color: '#101C2B', fontWeight: 500 }}>ISO 9001:2015</strong> is the internationally
                recognized standard for quality management systems (QMS). Symtera’s ISO 9001 certification covers the
                full scope of our IT services delivery, from initial client consultation and solution design through
                implementation, testing, deployment, and post-project support.
              </p>
              <h3 style={h3}>What This Means for You</h3>
              <BulletList items={QMS_BENEFITS} />
              <h3 style={{ ...h3, margin: '32px 0 12px' }}>Scope of Certification</h3>
              <p style={body}>
                Our ISO 9001:2015 certification covers the design, development, and delivery of IT infrastructure
                services, cybersecurity solutions, cloud computing services, web and mobile application development,
                digital marketing services, and managed IT support. The certification is maintained through annual
                surveillance audits and a full recertification audit every three years.
              </p>
            </div>
            <div style={{ position: 'sticky', top: 120, display: 'grid', justifyItems: 'end' }}>
              <SealScene
                id="ISO9001"
                color="#0A70B8"
                arcText="QUALITY MANAGEMENT SYSTEM · CERTIFIED · SYMTERA TECHNOLOGIES ·"
                title="ISO 9001"
                year="2015"
              />
            </div>
          </div>

          <div data-reveal data-stack style={sealRow}>
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
                II
              </span>
              <h2
                style={{
                  fontWeight: 500,
                  fontSize: 'clamp(28px,3vw,44px)',
                  lineHeight: 1.02,
                  letterSpacing: '-.035em',
                  margin: '0 0 20px',
                }}
              >
                ISO/IEC 27001:2013 — Information Security Management System
              </h2>
              <p style={body}>
                <strong style={{ color: '#101C2B', fontWeight: 500 }}>ISO/IEC 27001:2013</strong> is the gold standard
                for information security management systems (ISMS). This certification demonstrates that Symtera has
                implemented a comprehensive, risk-based approach to protecting the confidentiality, integrity, and
                availability of information — both our own and our clients’.
              </p>
              <h3 style={h3}>What This Covers</h3>
              <BulletList items={ISMS_COVERAGE} />
              <h3 style={{ ...h3, margin: '32px 0 12px' }}>Why This Matters for Clients Handling Sensitive Data</h3>
              <p style={body}>
                If your business handles personally identifiable information (PII), financial data, healthcare records,
                or other sensitive information, working with an ISO 27001-certified IT partner significantly reduces
                your compliance risk. Our ISMS aligns with and supports compliance with major regulatory frameworks
                including <strong style={{ color: '#101C2B', fontWeight: 500 }}>HIPAA, GDPR, PCI-DSS, SOC 2,</strong>{' '}
                and <strong style={{ color: '#101C2B', fontWeight: 500 }}>CMMC</strong>. This means working with Symtera
                helps you meet your own compliance obligations more efficiently.
              </p>
            </div>
            <div style={{ position: 'sticky', top: 120, display: 'grid', justifyItems: 'end' }}>
              <SealScene
                id="ISOIEC27001"
                color="#39B54A"
                arcText="INFORMATION SECURITY MANAGEMENT · CERTIFIED · SYMTERA TECHNOLOGIES ·"
                title="ISO/IEC 27001"
                year="2013"
              />
            </div>
          </div>

          <div data-reveal data-stack style={splitRow}>
            <IndexBlock num="III" title="Technology Partner Certifications" />
            <div style={{ fontSize: 16.5, lineHeight: 1.7, color: '#4E5D6C' }}>
              <p style={{ margin: 0 }}>
                Beyond our company-level ISO certifications, our engineering team holds individual certifications from
                leading technology vendors, ensuring hands-on expertise with the products we deploy and manage:
              </p>
              <BulletList items={PARTNER_CERTS} />
            </div>
          </div>

          <div data-reveal data-stack style={splitRow}>
            <IndexBlock num="IV" title="What Our Certifications Mean for Your Business" />
            <div style={{ fontSize: 16.5, lineHeight: 1.7, color: '#4E5D6C' }}>
              <BulletList items={MEANING} />
            </div>
          </div>

          <div data-reveal style={{ padding: 'clamp(36px,4vw,56px) 0', borderTop: '1px solid #DCE3EA' }}>
            <div data-stack style={{ ...splitRow, padding: 0, borderTop: 'none' }}>
              <IndexBlock num="V" title="Compliance Frameworks We Support" />
              <div>
                <p style={{ ...body, margin: '0 0 22px' }}>
                  In addition to our own certifications, we help clients achieve and maintain compliance with
                  industry-specific frameworks:
                </p>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,180px),1fr))',
                    gap: 12,
                    perspective: 1400,
                  }}
                >
                  {FRAMEWORKS.map((f) => (
                    <TiltCard
                      key={f.name}
                      style={{
                        background: 'linear-gradient(160deg,#ffffff,#F4F7FA)',
                        border: '1px solid #DCE3EA',
                        borderRadius: 18,
                        padding: '22px 20px',
                        minHeight: 170,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        boxShadow: '0 18px 40px -28px rgba(11,20,32,.35)',
                      }}
                    >
                      <span style={{ position: 'relative', fontFamily: SERIF, fontSize: 34, lineHeight: 1, color: '#0A70B8', transform: 'translateZ(20px)' }}>
                        {f.name}
                      </span>
                      <span style={{ position: 'relative', fontSize: 13.5, lineHeight: 1.45, color: '#4E5D6C', transform: 'translateZ(12px)' }}>
                        {f.copy}
                      </span>
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
                  View our compliance and SSL partners
                  <ArrowRight size={14} />
                </Link>
              </div>
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
                  Verify Our Certifications
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: '#C9D3DD', margin: 0, maxWidth: '56ch' }}>
                  Transparency is fundamental to trust. If you’d like to verify our ISO certifications or request copies
                  of our certificates for your vendor assessment process, please don’t hesitate to contact us.
                </p>
              </>
            }
          >
            <Button href="/contact" style={{ whiteSpace: 'nowrap' }}>
              Contact us for certification verification
            </Button>
          </DarkCta>
        </div>
      </LightSection>
    </>
  );
}

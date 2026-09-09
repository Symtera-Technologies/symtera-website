import Link from 'next/link';
import { MONO } from '@/lib/tokens';
import { Eyebrow, SectionHeading } from '@/components/ui/Type';
import { ArrowUpRight } from '@/components/ui/Icons';

const CARDS: { kicker: string; title: React.ReactNode; copy: string; href: string }[] = [
  {
    kicker: 'Software',
    title: <>Custom software, web, mobile &amp; e-commerce</>,
    copy: 'Web apps, mobile apps, WordPress, Shopify and WooCommerce stores, API development.',
    href: '/services',
  },
  {
    kicker: 'Cloud',
    title: <>Enterprise cloud, email &amp; hosting</>,
    copy: 'Enterprise email, cloud enterprise servers, cPanel and Windows hosting, Shared Hosting Plus.',
    href: '/services',
  },
  {
    kicker: 'Cybersecurity',
    title: <>Network, endpoint &amp; compliance security</>,
    copy: 'Firewalls, UTM, endpoint protection and SSL from Fortinet, Sophos, Kaspersky, DigiCert and more.',
    href: '/partners',
  },
  {
    kicker: 'Infrastructure & BI',
    title: <>IT infrastructure, IoT &amp; business intelligence</>,
    copy: 'End-to-end infrastructure, data centres, IoT automation, MS-SQL, SharePoint and Power BI.',
    href: '/services',
  },
  {
    kicker: 'Growth',
    title: <>SEO, SEM, social &amp; SMS</>,
    copy: 'Search, paid media, social, and bulk, transactional and OTP SMS with API access.',
    href: '/services',
  },
  {
    kicker: 'Integration',
    title: <>System integrations &amp; APIs</>,
    copy: 'Application integration and API development so every system in the business talks to the others.',
    href: '/services',
  },
];

const kickerStyle: React.CSSProperties = {
  fontFamily: MONO,
  fontSize: 12,
  letterSpacing: '.12em',
  textTransform: 'uppercase',
  color: '#4E5D6C',
};

export default function WhatWeDo() {
  return (
    <div style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(72px,9vw,140px) clamp(20px,5vw,80px)' }}>
      <div
        data-reveal
        data-stack
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,5fr) minmax(0,7fr)',
          gap: '24px 64px',
          alignItems: 'end',
          marginBottom: 56,
        }}
      >
        <div>
          <Eyebrow color="#0A70B8">What we do</Eyebrow>
          <SectionHeading>One partner across the entire stack.</SectionHeading>
        </div>
        <p style={{ fontSize: 17, lineHeight: 1.65, color: '#4E5D6C', maxWidth: '46ch', margin: 0, justifySelf: 'end' }}>
          From AI platforms to the servers, networks and security they depend on. Every engagement is scoped to a
          business outcome, not a technology list.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,280px),1fr))',
          gridAutoRows: 'minmax(240px,auto)',
          gap: 14,
        }}
      >
        <Link
          data-card-light
          data-reveal
          href="/ai"
          style={{
            gridColumn: 'span 2',
            position: 'relative',
            overflow: 'hidden',
            background: '#0B1420',
            color: '#F4F7FA',
            border: '1px solid #0B1420',
            borderRadius: 18,
            padding: 32,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            textDecoration: 'none',
            minWidth: 0,
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              right: -60,
              top: -90,
              width: 360,
              height: 360,
              borderRadius: '50%',
              background: 'radial-gradient(circle,rgba(10,112,184,.6),transparent 65%)',
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              right: 120,
              bottom: -120,
              width: 260,
              height: 260,
              borderRadius: '50%',
              background: 'radial-gradient(circle,rgba(140,198,63,.35),transparent 65%)',
            }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative' }}>
            <span style={{ ...kickerStyle, color: '#8CC63F' }}>AI &amp; Automation</span>
            <ArrowUpRight size={22} strokeWidth={2} style={{ transition: 'transform .3s, color .3s', color: '#B7C3CF' }} />
          </div>
          <div style={{ position: 'relative' }}>
            <h3
              style={{
                fontWeight: 500,
                fontSize: 'clamp(26px,2.6vw,40px)',
                lineHeight: 1.02,
                letterSpacing: '-.035em',
                margin: '0 0 14px',
                maxWidth: '20ch',
              }}
            >
              AI platforms that reason, retrieve and deliver accurate outcomes
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: '#B7C3CF', margin: 0, maxWidth: '60ch' }}>
              Process automation, chatbots, agents, document intelligence, knowledge and RAG, integration, predictive
              and custom AI. Context-aware and secure by design.
            </p>
          </div>
        </Link>

        {CARDS.map((c) => (
          <Link
            key={c.kicker}
            data-card-light
            data-reveal
            href={c.href}
            style={{
              background: '#fff',
              border: '1px solid #DCE3EA',
              borderRadius: 18,
              padding: 28,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              textDecoration: 'none',
              color: 'inherit',
              minWidth: 0,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={kickerStyle}>{c.kicker}</span>
              <ArrowUpRight size={20} strokeWidth={2} style={{ transition: 'transform .3s, color .3s', color: '#8A96A3' }} />
            </div>
            <div>
              <h3 style={{ fontWeight: 500, fontSize: 22, lineHeight: 1.1, letterSpacing: '-.03em', margin: '0 0 10px' }}>
                {c.title}
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.55, color: '#4E5D6C', margin: 0 }}>{c.copy}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

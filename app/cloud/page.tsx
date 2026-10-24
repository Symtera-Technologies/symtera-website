import Link from 'next/link';
import { MONO } from '@/lib/tokens';
import { CLOUD_PAGES } from '@/content/cloud';
import { LightSection } from '@/components/ui/Layout';
import { Eyebrow, SectionHeading } from '@/components/ui/Type';
import { ArrowUpRight, ContentIcon } from '@/components/ui/Icons';
import { pageMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata = pageMetadata({
  title: 'Cloud Hosting & Enterprise Email',
  description:
    'Enterprise email on dedicated servers from $1.99 per mailbox, cloud enterprise servers, and cPanel or Plesk hosting with free SSL and 24/7 support.',
  path: '/cloud',
});

/**
 * The five /cloud pages had no hub, so every one of their breadcrumbs pointed at
 * /services as a stand-in parent — a hierarchy that did not exist. The copy on
 * each card is drawn from that page's own intro rather than written fresh, so
 * the hub cannot drift away from what the pages actually say.
 */
const CARD_COPY: Record<string, string> = {
  'enterprise-email-solutions':
    'Dedicated cloud email servers on your own domain, from $1.99 per mailbox per month, with ActiveSync, antivirus and antispam.',
  'cloud-enterprise-server':
    'Scalable, flexible cloud hosting on public cloud or the Symtera private cloud, built on Oracle Linux.',
  'linux-hosting': 'cPanel-powered Linux hosting with free SSL, zero interruption and 24/7 support.',
  'windows-hosting': 'Plesk-powered Windows hosting with free SSL, zero interruption and 24/7 support.',
  'shared-hosting-plus':
    'cPanel shared hosting bundled with enterprise email, antivirus and antispam, and cloud file storage.',
};

const WHAT_YOU_GET: [title: string, copy: string][] = [
  [
    'Email that carries your own domain',
    'Enterprise email on dedicated servers, with ActiveSync so mailboxes, calendars and address books stay in sync across every device, and enterprise-grade antivirus and spam filtering on every inbox.',
  ],
  [
    'Either hosting stack, not just ours',
    'cPanel on Linux and Plesk on Windows, both with free SSL included, so the platform follows the application rather than the other way round.',
  ],
  [
    'Private cloud where it matters',
    'Public-cloud capacity for general workloads, and the Symtera private cloud on Oracle Linux where data has to stay on known hardware.',
  ],
  [
    'A hosting team on the clock',
    'Hosting support is staffed 24/7, because a mail server that stops at 2am is not a next-business-day problem.',
  ],
];

export default function CloudIndexPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([['Cloud', '/cloud']])} />

      <section
        style={{
          position: 'relative',
          padding: '150px 0 72px',
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
              'radial-gradient(ellipse 55% 50% at 80% 30%,rgba(10,112,184,.35),transparent 62%),linear-gradient(to bottom,rgba(11,20,32,0) 40%,#0B1420 100%)',
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
            Cloud
          </span>
          <h1
            data-hero-rise
            style={{
              fontWeight: 500,
              fontSize: 'clamp(42px,6.6vw,104px)',
              lineHeight: 0.95,
              letterSpacing: '-.045em',
              margin: 0,
              maxWidth: '16ch',
              animationDelay: '.1s',
            }}
          >
            Email and hosting on <span style={{ color: '#4FB8E8' }}>servers we run.</span>
          </h1>
          <p
            data-hero-rise
            style={{
              fontSize: 'clamp(17px,1.35vw,20px)',
              lineHeight: 1.6,
              color: '#B7C3CF',
              maxWidth: '54ch',
              margin: '36px 0 0',
              animationDelay: '.2s',
            }}
          >
            Enterprise email on dedicated servers, cloud enterprise servers on public or private cloud, and managed
            cPanel and Plesk hosting — each with free SSL and a hosting team available around the clock.
          </p>
        </div>
      </section>

      <LightSection>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(64px,8vw,120px) clamp(20px,5vw,80px)' }}>
          <div data-reveal style={{ maxWidth: 760, marginBottom: 40 }}>
            <Eyebrow color="#0A70B8">Five cloud services</Eyebrow>
            <SectionHeading>Start with the workload, not the plan name.</SectionHeading>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap: 14 }}>
            {CLOUD_PAGES.map((p) => (
              <Link
                key={p.slug}
                data-card-light
                data-reveal
                href={`/cloud/${p.slug}`}
                style={{
                  background: '#fff',
                  border: '1px solid #DCE3EA',
                  borderRadius: 18,
                  padding: 28,
                  minHeight: 240,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  textDecoration: 'none',
                  color: 'inherit',
                  minWidth: 0,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span
                    style={{
                      display: 'inline-grid',
                      placeItems: 'center',
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: 'rgba(10,112,184,.08)',
                      color: '#0A70B8',
                    }}
                  >
                    <ContentIcon name={p.icon} />
                  </span>
                  <ArrowUpRight size={20} strokeWidth={2} style={{ transition: 'transform .3s, color .3s', color: '#8A96A3' }} />
                </div>
                <div>
                  <h3 style={{ fontWeight: 500, fontSize: 23, lineHeight: 1.1, letterSpacing: '-.03em', margin: '0 0 10px' }}>
                    {p.nav}
                  </h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.55, color: '#4E5D6C', margin: 0 }}>{CARD_COPY[p.slug]}</p>
                </div>
              </Link>
            ))}
          </div>

          <div data-reveal style={{ marginTop: 'clamp(64px,8vw,120px)', maxWidth: 760 }}>
            <Eyebrow color="#0A70B8">What you get</Eyebrow>
            <h2 style={{ fontWeight: 500, fontSize: 'clamp(30px,3.8vw,54px)', lineHeight: 1, letterSpacing: '-.04em', margin: '0 0 8px' }}>
              The same four things, whichever plan you pick
            </h2>
          </div>

          <div style={{ borderTop: '1px solid #DCE3EA' }}>
            {WHAT_YOU_GET.map(([title, copy]) => (
              <div
                key={title}
                data-row
                data-reveal
                data-stack
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(0,320px) minmax(0,1fr)',
                  gap: '12px clamp(20px,4vw,64px)',
                  alignItems: 'baseline',
                  padding: '24px 0',
                  borderBottom: '1px solid #DCE3EA',
                }}
              >
                <h3 style={{ fontWeight: 500, fontSize: 22, lineHeight: 1.1, letterSpacing: '-.025em', margin: 0 }}>{title}</h3>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: '#4E5D6C', margin: 0, maxWidth: '62ch' }}>{copy}</p>
              </div>
            ))}
          </div>

          <div data-reveal style={{ marginTop: 'clamp(48px,6vw,80px)' }}>
            <Link
              href="/contact?service=Cloud%20Email%20Services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: '#0B1420',
                color: '#F4F7FA',
                borderRadius: 999,
                padding: '15px 26px',
                fontSize: 16,
                textDecoration: 'none',
              }}
            >
              Talk to the hosting team
              <ArrowUpRight size={18} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </LightSection>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { MONO } from '@/lib/tokens';
import Button from '@/components/ui/Button';
import { LightSection } from '@/components/ui/Layout';
import { ArrowUpRight } from '@/components/ui/Icons';

// Next marks 404 responses noindex on its own.
export const metadata: Metadata = {
  title: 'Page not found',
};

/**
 * Old WordPress URLs with no equivalent on the new site end up here, so the
 * page points people at the sections they were most likely looking for.
 */
const DESTINATIONS: { kicker: string; title: string; href: string }[] = [
  { kicker: 'AI', title: 'AI solutions', href: '/ai' },
  { kicker: 'Services', title: 'Software, cloud & infrastructure', href: '/services' },
  { kicker: 'Hosting', title: 'Enterprise email & hosting', href: '/cloud/enterprise-email-solutions' },
  { kicker: 'Products', title: 'Ready-made systems', href: '/products' },
  { kicker: 'Partners', title: 'Technology partners', href: '/partners' },
  { kicker: 'Company', title: 'About Symtera', href: '/about' },
];

export default function NotFound() {
  return (
    <>
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
              'radial-gradient(ellipse 50% 60% at 85% 20%,rgba(10,112,184,.3),transparent 60%),linear-gradient(to bottom,rgba(11,20,32,0) 50%,#0B1420 100%)',
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
            404 · Page not found
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
            This page has moved or no longer exists.
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
            Our website has been rebuilt, so some older addresses no longer lead anywhere. Pick up from one of the
            sections below, or tell us what you were looking for.
          </p>
          <div data-hero-rise style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 36, animationDelay: '.3s' }}>
            <Button href="/">Go to the homepage</Button>
            <Button href="/contact" variant="ghost" arrow="none">
              Contact us
            </Button>
          </div>
        </div>
      </section>

      <LightSection>
        <div
          style={{
            maxWidth: 1320,
            margin: '0 auto',
            padding: 'clamp(56px,7vw,104px) clamp(20px,5vw,80px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))',
            gap: 14,
          }}
        >
          {DESTINATIONS.map((d) => (
            <Link
              key={d.href}
              data-card-light
              href={d.href}
              style={{
                background: '#fff',
                border: '1px solid #DCE3EA',
                borderRadius: 18,
                padding: 26,
                minHeight: 150,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span
                  style={{
                    fontFamily: MONO,
                    fontSize: 12,
                    letterSpacing: '.12em',
                    textTransform: 'uppercase',
                    color: '#0A70B8',
                  }}
                >
                  {d.kicker}
                </span>
                <ArrowUpRight size={20} strokeWidth={2} style={{ transition: 'transform .3s, color .3s', color: '#8A96A3' }} />
              </div>
              <h2 style={{ fontWeight: 500, fontSize: 22, lineHeight: 1.1, letterSpacing: '-.03em', margin: 0 }}>{d.title}</h2>
            </Link>
          ))}
        </div>
      </LightSection>
    </>
  );
}

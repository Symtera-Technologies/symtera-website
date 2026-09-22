import Link from 'next/link';
import { MONO } from '@/lib/tokens';
import { PRODUCT_PAGES } from '@/content/products';
import { PRODUCT_KICKERS } from '@/content/site';
import { stripTags } from '@/lib/html';
import { LightSection } from '@/components/ui/Layout';
import { ArrowUpRight, ContentIcon } from '@/components/ui/Icons';
import SceneSvg from '@/components/visuals/SceneSvg';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Products',
  description: 'Cloud-based systems for HR, operations, healthcare and property, built and supported by Symtera.',
  path: '/products',
});

export default function ProductsIndexPage() {
  return (
    <>
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
            Products
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
            Ready-made systems, built by Symtera.
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
            Cloud-based systems for HR, operations, healthcare and property, built and supported by Symtera.
          </p>
        </div>
      </section>

      <LightSection>
        <div
          style={{
            maxWidth: 1320,
            margin: '0 auto',
            padding: 'clamp(64px,8vw,120px) clamp(20px,5vw,80px)',
            display: 'grid',
            gap: 14,
          }}
        >
          {PRODUCT_PAGES.map((p) => (
            <div
              key={p.slug}
              data-card-light
              data-reveal
              data-stack
              style={{
                background: '#fff',
                border: '1px solid #DCE3EA',
                borderRadius: 20,
                padding: 'clamp(24px,3vw,40px)',
                display: 'grid',
                gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
                gap: '24px clamp(24px,4vw,64px)',
                alignItems: 'center',
              }}
            >
              <div>
                <span
                  style={{
                    display: 'block',
                    fontFamily: MONO,
                    fontSize: 12,
                    letterSpacing: '.12em',
                    textTransform: 'uppercase',
                    color: '#0A70B8',
                    marginBottom: 14,
                  }}
                >
                  {PRODUCT_KICKERS[p.slug] || p.kicker}
                </span>
                <h3
                  style={{
                    fontWeight: 500,
                    fontSize: 'clamp(28px,3vw,44px)',
                    lineHeight: 1,
                    letterSpacing: '-.04em',
                    margin: '0 0 14px',
                  }}
                >
                  {p.nav}
                </h3>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: '#4E5D6C', margin: '0 0 20px', maxWidth: '50ch' }}>
                  {stripTags(p.intro[0])}
                </p>
                <Link
                  data-btn="blue"
                  href={`/products/${p.slug}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    border: '1px solid #DCE3EA',
                    color: '#101C2B',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: 14,
                    padding: '11px 18px',
                    borderRadius: 999,
                  }}
                >
                  Explore {p.nav}
                  <ArrowUpRight size={14} />
                </Link>
              </div>

              <figure
                style={{
                  margin: 0,
                  borderRadius: 14,
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,.08)',
                  background:
                    'radial-gradient(ellipse 70% 60% at 70% 20%,rgba(10,112,184,.45),transparent 60%),#0B1420',
                  aspectRatio: '16/10',
                  position: 'relative',
                }}
              >
                <div style={{ position: 'absolute', inset: '6%' }}>
                  <SceneSvg kind={p.visual} />
                </div>
                <span
                  style={{
                    position: 'absolute',
                    left: 14,
                    top: 14,
                    display: 'inline-grid',
                    placeItems: 'center',
                    width: 38,
                    height: 38,
                    borderRadius: 11,
                    background: 'rgba(140,198,63,.14)',
                    color: '#8CC63F',
                    border: '1px solid rgba(140,198,63,.35)',
                  }}
                >
                  <ContentIcon name={p.icon} size={18} />
                </span>
              </figure>
            </div>
          ))}
        </div>
      </LightSection>
    </>
  );
}

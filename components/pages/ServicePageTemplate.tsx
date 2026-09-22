import Link from 'next/link';
import { MONO, SERIF } from '@/lib/tokens';
import { boldOnDark } from '@/lib/html';
import { ROMAN } from '@/content/site';
import type { AiPage, ServicePage } from '@/content/types';

import Button from '@/components/ui/Button';
import TiltCard from '@/components/ui/TiltCard';
import { LightSection, DarkCta } from '@/components/ui/Layout';
import { ArrowLeft, Check, ContentIcon } from '@/components/ui/Icons';
import FaqList from '@/components/ui/FaqList';
import SceneSvg from '@/components/visuals/SceneSvg';
import SectionBody from './SectionRenderer';
import { JsonLd } from '@/components/seo/JsonLd';
import { serviceSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema';
import PlanMatrix from './PlanMatrix';

export type RelatedLink = { nav: string; href: string; icon: string };

type Props = {
  page: AiPage | ServicePage;
  /** Breadcrumb label and target, e.g. "AI Solutions" → /ai. */
  crumb: string;
  crumbHref: string;
  /** This page's own path, used for the canonical-matching structured data. */
  path: string;
  related: RelatedLink[];
  relatedLabel: string;
  /** Product pages point their CTAs at /contact?service=<Product> to preselect it. */
  demoService?: string;
};

export default function ServicePageTemplate({ page, crumb, crumbHref, path, related, relatedLabel, demoService }: Props) {
  const contactHref = demoService ? `/contact?service=${encodeURIComponent(demoService)}` : '/contact';
  const svc = page as ServicePage;
  const plans = svc.plans;
  const matrix = svc.matrix;
  const images = svc.images;
  const kicker = svc.kicker;

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `${page.title} ${page.accent}`,
          description: page.intro[0],
          path,
          serviceType: crumb,
        })}
      />
      {page.faq.length > 0 && <JsonLd data={faqPageSchema(page.faq, path)} />}
      <JsonLd data={breadcrumbSchema([[crumb, crumbHref], [page.nav, path]])} />

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
              'radial-gradient(ellipse 50% 60% at 85% 30%,rgba(10,112,184,.34),transparent 60%),radial-gradient(ellipse 30% 40% at 60% 100%,rgba(140,198,63,.14),transparent 65%),linear-gradient(to bottom,rgba(11,20,32,0) 50%,#0B1420 100%)',
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
            <Link
              data-hero-rise
              href={crumbHref}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: MONO,
                fontSize: 12,
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                color: '#8CC63F',
                marginBottom: 24,
                textDecoration: 'none',
              }}
            >
              <ArrowLeft />
              {crumb} / {page.nav}
            </Link>

            {kicker && (
              <span
                data-hero-rise
                style={{
                  display: 'block',
                  fontFamily: SERIF,
                  fontStyle: 'italic',
                  fontSize: 'clamp(18px,1.6vw,24px)',
                  color: '#B7C3CF',
                  marginBottom: 14,
                  animationDelay: '.08s',
                }}
              >
                {kicker}
              </span>
            )}

            <h1
              data-hero-rise
              style={{
                fontWeight: 500,
                fontSize: 'clamp(40px,5.6vw,88px)',
                lineHeight: 0.96,
                letterSpacing: '-.045em',
                margin: 0,
                animationDelay: '.1s',
              }}
            >
              <span dangerouslySetInnerHTML={{ __html: page.title }} />{' '}
              <em
                style={{ fontFamily: SERIF, fontWeight: 500, fontStyle: 'italic', letterSpacing: '-.02em', color: '#8CC63F' }}
                dangerouslySetInnerHTML={{ __html: page.accent }}
              />
            </h1>

            <div
              data-hero-rise
              style={{
                display: 'grid',
                gap: 14,
                fontSize: 'clamp(16.5px,1.3vw,19px)',
                lineHeight: 1.65,
                color: '#B7C3CF',
                maxWidth: '62ch',
                margin: '32px 0 0',
                animationDelay: '.2s',
              }}
            >
              {page.intro.map((p, i) => (
                <p key={i} style={{ margin: 0 }} dangerouslySetInnerHTML={{ __html: boldOnDark(p) }} />
              ))}
            </div>

            <div data-hero-rise style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 34, animationDelay: '.3s' }}>
              <Button href={contactHref}>{page.cta[0]}</Button>
              <Button href={contactHref} variant="ghost" arrow="none">
                {page.cta[1]}
              </Button>
            </div>
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
              <SceneSvg kind={page.visual} />
            </div>
          </div>
        </div>
      </section>

      <LightSection>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(56px,7vw,104px) clamp(20px,5vw,80px)' }}>
          {page.sections.map((s, i) => (
            <div
              key={i}
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
                  style={{ fontWeight: 500, fontSize: 'clamp(24px,2.4vw,34px)', lineHeight: 1.08, letterSpacing: '-.03em', margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: s.title }}
                />
              </div>
              <div style={{ fontSize: 16.5, lineHeight: 1.7, color: '#4E5D6C', minWidth: 0 }}>
                <SectionBody section={s} images={images} />
              </div>
            </div>
          ))}

          {plans && (
            <>
              <div data-reveal style={{ padding: 'clamp(36px,4vw,56px) 0', borderTop: '1px solid #DCE3EA' }}>
                <span
                  style={{
                    display: 'block',
                    fontFamily: MONO,
                    fontSize: 12,
                    letterSpacing: '.14em',
                    textTransform: 'uppercase',
                    color: '#0A70B8',
                    marginBottom: 14,
                  }}
                >
                  Choose your plan
                </span>
                <h2
                  style={{
                    fontWeight: 500,
                    fontSize: 'clamp(30px,3.6vw,52px)',
                    lineHeight: 1,
                    letterSpacing: '-.04em',
                    margin: '0 0 32px',
                  }}
                >
                  {plans.title}
                </h2>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))',
                    gap: 14,
                    perspective: 1400,
                    alignItems: 'stretch',
                  }}
                >
                  {plans.items.map((p) => (
                    <TiltCard
                      key={p.name}
                      style={{
                        borderRadius: 22,
                        padding: '30px 26px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 18,
                        background: p.hot ? '#0B1420' : '#fff',
                        color: p.hot ? '#F4F7FA' : '#101C2B',
                        border: `1px solid ${p.hot ? '#0B1420' : '#DCE3EA'}`,
                        boxShadow: '0 24px 50px -32px rgba(11,20,32,.45)',
                      }}
                    >
                      {p.hot && (
                        <span
                          style={{
                            position: 'absolute',
                            top: 18,
                            right: 18,
                            fontFamily: MONO,
                            fontSize: 11,
                            letterSpacing: '.12em',
                            textTransform: 'uppercase',
                            color: '#0B1420',
                            background: '#8CC63F',
                            borderRadius: 999,
                            padding: '6px 10px',
                          }}
                        >
                          Popular
                        </span>
                      )}
                      <div style={{ position: 'relative', transform: 'translateZ(16px)' }}>
                        <span
                          style={{
                            fontFamily: MONO,
                            fontSize: 12,
                            letterSpacing: '.12em',
                            textTransform: 'uppercase',
                            color: p.hot ? '#8A96A3' : '#4E5D6C',
                          }}
                        >
                          {p.name}
                        </span>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 10 }}>
                          <span style={{ fontFamily: SERIF, fontSize: 'clamp(46px,4vw,60px)', lineHeight: 1, letterSpacing: '-.02em' }}>
                            {p.price}
                          </span>
                          <span style={{ fontSize: 13, color: p.hot ? '#8A96A3' : '#4E5D6C' }}>{p.per}</span>
                        </div>
                      </div>
                      <ul
                        style={{
                          position: 'relative',
                          listStyle: 'none',
                          margin: 0,
                          padding: 0,
                          display: 'grid',
                          gap: 10,
                          flex: 1,
                          transform: 'translateZ(10px)',
                        }}
                      >
                        {p.items.map((it, k) => (
                          <li key={k} style={{ display: 'grid', gridTemplateColumns: '18px 1fr', gap: 10, fontSize: 14.5, lineHeight: 1.5 }}>
                            <Check />
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        href="/contact"
                        size="md"
                        style={{ position: 'relative', justifyContent: 'center', transform: 'translateZ(20px)' }}
                      >
                        Choose Plan
                      </Button>
                    </TiltCard>
                  ))}
                </div>
              </div>
              {matrix && <PlanMatrix matrix={matrix} />}
            </>
          )}

          {page.faq.length > 0 && <FaqList faq={page.faq} />}

          <DarkCta
            title={
              <h2 style={{ fontWeight: 500, fontSize: 'clamp(28px,3.4vw,48px)', lineHeight: 1, letterSpacing: '-.04em', margin: 0 }}>
                Ready to Get Started?
              </h2>
            }
          >
            <Button href={contactHref} style={{ whiteSpace: 'nowrap' }}>
              {page.cta[0]}
            </Button>
            <Button
              href={contactHref}
              variant="ghost"
              arrow="none"
              magnet={false}
              style={{ border: '1px solid rgba(255,255,255,.3)', whiteSpace: 'nowrap' }}
            >
              {page.cta[1]}
            </Button>
          </DarkCta>

          <div data-reveal style={{ paddingTop: 'clamp(36px,4vw,56px)' }}>
            <span
              style={{
                display: 'block',
                fontFamily: MONO,
                fontSize: 12,
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                color: '#0A70B8',
                marginBottom: 18,
              }}
            >
              {relatedLabel}
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {related.map((r) => (
                <Link
                  key={r.href}
                  data-partner
                  href={r.href}
                  style={{
                    background: '#fff',
                    border: '1px solid #DCE3EA',
                    borderRadius: 999,
                    padding: '11px 18px',
                    fontWeight: 500,
                    fontSize: 14.5,
                    color: '#101C2B',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    whiteSpace: 'nowrap',
                    flex: '0 0 auto',
                  }}
                >
                  <span style={{ color: '#0A70B8', display: 'inline-grid' }}>
                    <ContentIcon name={r.icon} size={20} />
                  </span>
                  {r.nav}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </LightSection>
    </>
  );
}

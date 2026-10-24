import { ImageResponse } from 'next/og';
import { OG_PAGES, ogPageBySlug, ogSlug } from '@/lib/og-pages';

/**
 * One share card per page, named by the flat slug in lib/og-pages.ts.
 *
 * Prerendered at build time, not rendered on request: this runs on a shared
 * cPanel host where on-demand image generation is the usual cause of broken
 * images, and a share card that 500s is worse than a generic one. `dynamic`
 * and `dynamicParams` below are what hold that guarantee.
 *
 * app/og/route.tsx stays as the fallback for anything not in the list.
 */
export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return OG_PAGES.map((p) => ({ slug: ogSlug(p.path) }));
}

const size = { width: 1200, height: 630 };

/** Longer titles step down so a four-word headline still fills the card. */
function headlineSize(text: string) {
  if (text.length <= 22) return 90;
  if (text.length <= 40) return 74;
  if (text.length <= 60) return 60;
  return 50;
}

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = ogPageBySlug(slug);
  // dynamicParams = false means Next never routes an unknown slug here, so this
  // is a type guard rather than a real branch.
  if (!page) return new Response('Not found', { status: 404 });

  const isHome = page.path === '/';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0B1420',
          padding: 80,
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -180,
            right: -140,
            width: 760,
            height: 760,
            borderRadius: 9999,
            background: 'radial-gradient(circle, rgba(10,112,184,0.55), rgba(11,20,32,0) 65%)',
            display: 'flex',
          }}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 18,
            fontSize: 26,
            letterSpacing: 6,
            color: '#8CC63F',
            textTransform: 'uppercase',
          }}
        >
          <div style={{ width: 16, height: 16, borderRadius: 9999, background: '#8CC63F', display: 'flex' }} />
          {page.eyebrow}
        </div>

        {isHome ? (
          /* The flagship card keeps its two-tone headline. */
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 82, lineHeight: 1.05, color: '#F4F7FA', letterSpacing: -2, display: 'flex' }}>
              Intelligent systems, built
            </div>
            <div style={{ fontSize: 82, lineHeight: 1.05, letterSpacing: -2, display: 'flex', color: '#F4F7FA' }}>
              for&nbsp;<span style={{ color: '#8CC63F' }}>scale</span>&nbsp;and&nbsp;
              <span style={{ color: '#4FB8E8' }}>security.</span>
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                fontSize: headlineSize(page.headline),
                lineHeight: 1.05,
                color: '#F4F7FA',
                letterSpacing: -2,
                display: 'flex',
                maxWidth: 1000,
              }}
            >
              {page.headline}
            </div>
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', fontSize: 26 }}>
          <div style={{ color: '#B7C3CF', display: 'flex' }}>AI · Cloud · Security · Infrastructure</div>
          <div style={{ color: '#8A96A3', display: 'flex' }}>symteratech.com</div>
        </div>
      </div>
    ),
    size,
  );
}

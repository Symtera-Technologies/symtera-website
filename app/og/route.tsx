import { ImageResponse } from 'next/og';

/**
 * The share card every page points at, via openGraph.images in lib/seo.ts.
 *
 * This is a plain route rather than an opengraph-image file because the file
 * convention only applies to the segment holding it: any page that sets its own
 * openGraph block replaces the inherited image, which left every page except
 * the home page without one.
 */
export const dynamic = 'force-static';

const size = { width: 1200, height: 630 };

export function GET() {
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
          Symtera Technologies
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 82, lineHeight: 1.05, color: '#F4F7FA', letterSpacing: -2, display: 'flex' }}>
            Intelligent systems, built
          </div>
          <div style={{ fontSize: 82, lineHeight: 1.05, letterSpacing: -2, display: 'flex', color: '#F4F7FA' }}>
            for&nbsp;<span style={{ color: '#8CC63F' }}>scale</span>&nbsp;and&nbsp;
            <span style={{ color: '#4FB8E8' }}>security.</span>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', fontSize: 26 }}>
          <div style={{ color: '#B7C3CF', display: 'flex' }}>AI · Cloud · Security · Infrastructure</div>
          <div style={{ color: '#8A96A3', display: 'flex' }}>symteratech.com</div>
        </div>
      </div>
    ),
    size,
  );
}

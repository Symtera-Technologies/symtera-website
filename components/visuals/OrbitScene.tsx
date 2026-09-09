/**
 * The rotating orbit motif. `home` is the compact variant inside the "Who we
 * are" panel; `page` is the larger hero decoration on Leadership,
 * Certifications and Affiliations.
 */
export function OrbitScene({ variant = 'page' }: { variant?: 'home' | 'page' }) {
  const home = variant === 'home';
  return (
    <svg viewBox="0 0 400 400" width="100%" height="100%" fill="none" style={{ overflow: 'visible' }}>
      {!home && (
        <circle cx="200" cy="200" r="190" stroke="rgba(244,247,250,.1)" strokeWidth="1" strokeDasharray="2 6" />
      )}
      <circle cx="200" cy="200" r="150" stroke={`rgba(244,247,250,${home ? '.12' : '.14'})`} strokeWidth="1" />
      <ellipse
        cx="200"
        cy="200"
        rx="170"
        ry="58"
        stroke="rgba(27,160,216,.55)"
        strokeWidth="1.2"
        {...(home ? { transform: 'rotate(-26 200 200)' } : {})}
        style={{ transformOrigin: '200px 200px', animation: `sym-spin ${home ? 26 : 30}s linear infinite` }}
      />
      <ellipse
        cx="200"
        cy="200"
        rx="120"
        ry="42"
        stroke="rgba(140,198,63,.6)"
        strokeWidth="1.2"
        {...(home ? { transform: 'rotate(38 200 200)' } : {})}
        style={{ transformOrigin: '200px 200px', animation: `sym-spin ${home ? 18 : 20}s linear infinite reverse` }}
      />
      <circle cx="200" cy="200" r={home ? 7 : 6} fill="#8CC63F" />
      <circle
        cx="200"
        cy="200"
        r="22"
        stroke="rgba(140,198,63,.5)"
        strokeWidth="1"
        style={{ transformOrigin: '200px 200px', animation: 'sym-pulse 3s ease-in-out infinite' }}
      />
      {home && (
        <>
          <circle cx="352" cy="132" r="5" fill="#1BA0D8" />
          <circle cx="78" cy="282" r="4" fill="#F4F7FA" />
          <circle cx="292" cy="318" r="4" fill="#8CC63F" />
        </>
      )}
    </svg>
  );
}

/** Certification seal with the arced text ring. */
export function SealScene({
  id,
  color,
  arcText,
  title,
  year,
}: {
  id: string;
  color: string;
  arcText: string;
  title: string;
  year: string;
}) {
  return (
    <div data-reveal style={{ position: 'relative', aspectRatio: '1', maxWidth: 300, width: '100%', justifySelf: 'end' }}>
      <svg viewBox="0 0 300 300" width="100%" height="100%" fill="none" style={{ overflow: 'visible' }}>
        <circle cx="150" cy="150" r="146" stroke={color} strokeWidth="1" strokeDasharray="2 5" />
        <circle cx="150" cy="150" r="132" stroke={color} strokeWidth="1.5" />
        <circle cx="150" cy="150" r="126" stroke={color} strokeWidth=".6" />
        <circle
          cx="150"
          cy="150"
          r="92"
          stroke={color}
          strokeWidth="1"
          style={{ transformOrigin: '150px 150px', animation: 'sym-spin 40s linear infinite' }}
          strokeDasharray="6 4"
        />
        <path id={`arc-${id}`} d="M150,150 m-108,0 a108,108 0 1,1 216,0 a108,108 0 1,1 -216,0" />
        <text style={{ fontFamily: 'var(--font-geist-mono), monospace', fontSize: 11, letterSpacing: '.3em', fill: color }}>
          <textPath href={`#arc-${id}`} startOffset="2%">
            {arcText}
          </textPath>
        </text>
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', textAlign: 'center', padding: 60 }}>
        <div>
          <div
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: 'clamp(28px,2.6vw,38px)',
              lineHeight: 1,
              color: '#101C2B',
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-geist-mono), monospace',
              fontSize: 11,
              letterSpacing: '.18em',
              textTransform: 'uppercase',
              color,
              marginTop: 10,
            }}
          >
            {year}
          </div>
        </div>
      </div>
    </div>
  );
}

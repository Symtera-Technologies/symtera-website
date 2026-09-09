/** Container: max 1320px, clamp(20px,5vw,80px) side padding. */
export function Container({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 clamp(20px,5vw,80px)', ...style }}>
      {children}
    </div>
  );
}

/** The light (#F4F7FA) content section with the 28px top corners. */
export function LightSection({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <section style={{ background: '#F4F7FA', color: '#101C2B', borderRadius: '28px 28px 0 0', ...style }}>
      {children}
    </section>
  );
}

/** Dark "Ready to Get Started?" band used at the foot of every sub-page. */
export function DarkCta({
  title,
  children,
  style,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      data-reveal
      data-stack
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0,7fr) minmax(0,5fr)',
        gap: '24px clamp(32px,5vw,96px)',
        alignItems: 'center',
        marginTop: 'clamp(36px,4vw,56px)',
        background: '#0B1420',
        color: '#F4F7FA',
        borderRadius: 24,
        padding: 'clamp(28px,4vw,56px)',
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: -100,
          top: -120,
          width: 380,
          height: 380,
          borderRadius: '50%',
          background: 'radial-gradient(circle,rgba(10,112,184,.6),transparent 65%)',
        }}
      />
      <div style={{ position: 'relative' }}>{title}</div>
      <div style={{ position: 'relative', display: 'flex', gap: 10, flexWrap: 'wrap', justifySelf: 'end' }}>
        {children}
      </div>
    </div>
  );
}

/** Sticky roman-numeral index column + body, the sub-page section layout. */
export function IndexedSection({
  num,
  title,
  titleHtml,
  aside,
  children,
  sticky = true,
}: {
  num: React.ReactNode;
  title?: string;
  titleHtml?: string;
  aside?: React.ReactNode;
  children: React.ReactNode;
  sticky?: boolean;
}) {
  return (
    <div
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
      <div style={sticky ? { position: 'sticky', top: 110 } : undefined}>
        <span
          style={{
            display: 'block',
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: 'clamp(44px,4.6vw,72px)',
            lineHeight: 0.9,
            color: '#0A70B8',
            marginBottom: 14,
          }}
        >
          {num}
        </span>
        {titleHtml !== undefined ? (
          <h2
            style={{ fontWeight: 500, fontSize: 'clamp(24px,2.4vw,34px)', lineHeight: 1.08, letterSpacing: '-.03em', margin: 0 }}
            dangerouslySetInnerHTML={{ __html: titleHtml }}
          />
        ) : (
          <h2 style={{ fontWeight: 500, fontSize: 'clamp(24px,2.4vw,34px)', lineHeight: 1.08, letterSpacing: '-.03em', margin: 0 }}>
            {title}
          </h2>
        )}
        {aside}
      </div>
      <div style={{ fontSize: 16.5, lineHeight: 1.7, color: '#4E5D6C', minWidth: 0 }}>{children}</div>
    </div>
  );
}

/** The green-dot bullet list used across About, Partners, Certifications. */
export function BulletList({ items }: { items: [string, string][] }) {
  return (
    <ul style={{ listStyle: 'none', margin: '18px 0 0', padding: 0, display: 'grid', gap: 12 }}>
      {items.map(([k, v], i) => (
        <li
          key={i}
          style={{
            display: 'grid',
            gridTemplateColumns: '14px 1fr',
            gap: 14,
            alignItems: 'start',
            paddingBottom: 12,
            borderBottom: '1px dashed #DCE3EA',
          }}
        >
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#8CC63F', marginTop: 8 }} />
          <span>
            <strong style={{ color: '#101C2B', fontWeight: 500 }}>{k}</strong> {v}
          </span>
        </li>
      ))}
    </ul>
  );
}

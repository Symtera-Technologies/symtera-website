import { MONO, SERIF } from '@/lib/tokens';

/** Geist Mono 12px, .14em tracking, uppercase — green on dark, blue on light. */
export function Eyebrow({
  children,
  color = '#8CC63F',
  style,
}: {
  children: React.ReactNode;
  color?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span
      style={{
        display: 'block',
        fontFamily: MONO,
        fontSize: 12,
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        color,
        marginBottom: 20,
        ...style,
      }}
    >
      {children}
    </span>
  );
}

/** h2 clamp(34px,4.6vw,68px) / .98 / -.04em, weight 500. */
export function SectionHeading({
  children,
  html,
  style,
}: {
  children?: React.ReactNode;
  html?: string;
  style?: React.CSSProperties;
}) {
  const css: React.CSSProperties = {
    fontWeight: 500,
    fontSize: 'clamp(34px,4.6vw,68px)',
    lineHeight: 0.98,
    letterSpacing: '-.04em',
    margin: 0,
    ...style,
  };
  if (html !== undefined) return <h2 style={css} dangerouslySetInnerHTML={{ __html: html }} />;
  return <h2 style={css}>{children}</h2>;
}

/** Cormorant Garamond roman numeral used as the section index. */
export function RomanNumeral({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <span
      style={{
        display: 'block',
        fontFamily: SERIF,
        fontSize: 'clamp(44px,4.6vw,72px)',
        lineHeight: 0.9,
        color: '#0A70B8',
        marginBottom: 14,
        ...style,
      }}
    >
      {children}
    </span>
  );
}

/** 999px pill: white on light sections, translucent on dark. */
export function Pill({
  children,
  tone = 'light',
  style,
}: {
  children: React.ReactNode;
  tone?: 'light' | 'dark' | 'green';
  style?: React.CSSProperties;
}) {
  const tones: Record<string, React.CSSProperties> = {
    light: { background: '#fff', border: '1px solid #DCE3EA', color: '#101C2B' },
    dark: { border: '1px solid rgba(255,255,255,.18)', color: '#F4F7FA' },
    green: { border: '1px solid rgba(140,198,63,.5)', color: '#8CC63F' },
  };
  return (
    <span
      style={{
        fontFamily: MONO,
        fontSize: 12,
        letterSpacing: '.06em',
        borderRadius: 999,
        padding: '7px 12px',
        whiteSpace: 'nowrap',
        flex: '0 0 auto',
        ...tones[tone],
        ...style,
      }}
    >
      {children}
    </span>
  );
}

/** Chip with the green dot, used for the inline keyword lists. */
export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      data-partner
      style={{
        background: '#fff',
        border: '1px solid #DCE3EA',
        borderRadius: 999,
        padding: '9px 16px',
        fontSize: 14,
        color: '#101C2B',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        flex: '0 0 auto',
      }}
    >
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#8CC63F', flex: '0 0 auto' }} />
      {children}
    </span>
  );
}

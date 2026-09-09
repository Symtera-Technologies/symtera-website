// Design tokens from design_handoff_symtera/README.md. Values are copied exactly.

export const COLORS = {
  navy: '#0B1420',
  surface: '#0F1B2B',
  cardFill: 'rgba(255,255,255,.03)',
  border: 'rgba(255,255,255,.08)',
  light: '#F4F7FA',
  white: '#FFFFFF',
  lightBorder: '#DCE3EA',
  inputBg: '#F8FAFC',
  blue: '#0A70B8',
  lightBlue: '#1BA0D8',
  skyText: '#4FB8E8',
  green: '#8CC63F',
  greenHover: '#A5DB5F',
  success: '#39B54A',
  onDark: '#F4F7FA',
  onDark2: '#B7C3CF',
  onDark3: '#C9D3DD',
  muted: '#8A96A3',
  onLight: '#101C2B',
  onLight2: '#4E5D6C',
  error: '#D93025',
} as const;

/** Font stacks. next/font exposes the families through these CSS variables. */
export const MONO = "var(--font-geist-mono), ui-monospace, monospace";
export const SERIF = "var(--font-cormorant), Georgia, serif";
export const SANS = "var(--font-geist), system-ui, sans-serif";

export const CONTAINER = {
  maxWidth: 1320,
  margin: '0 auto',
  padding: '0 clamp(20px,5vw,80px)',
} as const;

/** Geist Mono 12px / .14em / uppercase / green — the eyebrow label. */
export const eyebrow = (color: string = COLORS.green): React.CSSProperties => ({
  display: 'block',
  fontFamily: MONO,
  fontSize: 12,
  letterSpacing: '.14em',
  textTransform: 'uppercase',
  color,
});

export const DOT_GRID = 'radial-gradient(rgba(244,247,250,.09) 1px,transparent 1px)';

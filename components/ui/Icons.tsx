import { ICONS } from '@/content/icons';
import { SERVICE_ICONS } from '@/content/icons';

type SvgProps = { size?: number; style?: React.CSSProperties; strokeWidth?: number };

const base = (size: number, strokeWidth: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none' as const,
  stroke: 'currentColor',
  strokeWidth,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
});

/** Diagonal "open" arrow used on cards and CTAs. */
export function ArrowUpRight({ size = 16, style, strokeWidth = 2.4 }: SvgProps) {
  return (
    <svg {...base(size, strokeWidth)} style={style}>
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

export function ArrowRight({ size = 16, style, strokeWidth = 2.4 }: SvgProps) {
  return (
    <svg {...base(size, strokeWidth)} style={style}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export function ArrowLeft({ size = 12, style, strokeWidth = 2.4 }: SvgProps) {
  return (
    <svg {...base(size, strokeWidth)} style={style}>
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
}

export function ChevronDown({ size = 10, style, strokeWidth = 2.5 }: SvgProps) {
  return (
    <svg {...base(size, strokeWidth)} style={style}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function Check({ size = 18, style, stroke = '#8CC63F' }: SvgProps & { stroke?: string }) {
  return (
    <svg {...base(size, 2.4)} stroke={stroke} style={style}>
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

export function ShieldCheck({ size = 14, stroke = '#39B54A' }: SvgProps & { stroke?: string }) {
  return (
    <svg {...base(size, 2)} stroke={stroke}>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function Quote({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#8CC63F" aria-hidden="true">
      <path d="M7 5h5v6a6 6 0 0 1-6 6v-3a3 3 0 0 0 3-3H5V5h2zm10 0h5v6a6 6 0 0 1-6 6v-3a3 3 0 0 0 3-3h-4V5h2z" />
    </svg>
  );
}

/**
 * Renders one of the content icons (ICONS from ai-pages, SERVICE_ICONS from
 * service-pages) by name. Path data is trusted, static content.
 */
export function ContentIcon({ name, size = 20 }: { name: string; size?: number }) {
  const d = SERVICE_ICONS[name] ?? ICONS[name] ?? '';
  return (
    <svg
      {...base(size, 1.8)}
      dangerouslySetInnerHTML={{ __html: d }}
    />
  );
}

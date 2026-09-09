import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from './Icons';

export type ButtonVariant = 'primary' | 'ghost' | 'blue';

type Props = {
  href?: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
  /** Diagonal arrow (default), right arrow, or none. */
  arrow?: 'up-right' | 'right' | 'none';
  /** Attaches the ±8px pointer magnet from the prototype. */
  magnet?: boolean;
  size?: 'lg' | 'md' | 'sm';
  style?: React.CSSProperties;
  external?: boolean;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
};

const PAD = { lg: '16px 24px', md: '14px 22px', sm: '11px 18px' } as const;
const FONT = { lg: 15, md: 15, sm: 14 } as const;
const ARROW = { lg: 16, md: 16, sm: 14 } as const;

function variantStyle(variant: ButtonVariant): React.CSSProperties {
  if (variant === 'primary') {
    return { background: '#8CC63F', color: '#0B1420', fontWeight: 600, border: 0 };
  }
  if (variant === 'ghost') {
    return { border: '1px solid rgba(255,255,255,.2)', color: '#F4F7FA', fontWeight: 500 };
  }
  return { border: '1px solid #DCE3EA', color: '#101C2B', background: '#fff', fontWeight: 500 };
}

export default function Button({
  href,
  variant = 'primary',
  children,
  arrow = 'up-right',
  magnet = true,
  size = 'lg',
  style,
  external,
  type = 'button',
  disabled,
  onClick,
}: Props) {
  const css: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    textDecoration: 'none',
    fontSize: FONT[size],
    padding: PAD[size],
    borderRadius: 999,
    ...variantStyle(variant),
    ...style,
  };

  const glyph =
    arrow === 'none' ? null : arrow === 'right' ? (
      <ArrowRight size={ARROW[size]} />
    ) : (
      <ArrowUpRight size={ARROW[size]} />
    );

  const attrs = {
    'data-btn': variant,
    ...(magnet ? { 'data-magnet': '' } : {}),
  };

  if (href) {
    if (external || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http')) {
      return (
        <a
          {...attrs}
          href={href}
          style={css}
          {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {})}
        >
          {children}
          {glyph}
        </a>
      );
    }
    return (
      <Link {...attrs} href={href} style={css}>
        {children}
        {glyph}
      </Link>
    );
  }

  return (
    <button {...attrs} type={type} disabled={disabled} onClick={onClick} style={{ ...css, cursor: 'pointer' }}>
      {children}
      {glyph}
    </button>
  );
}

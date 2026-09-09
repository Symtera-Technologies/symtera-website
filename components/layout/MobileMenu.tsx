'use client';

import Link from 'next/link';
import { MONO } from '@/lib/tokens';

const LINKS: [label: string, href: string][] = [
  ['Home', '/'],
  ['About', '/about'],
  ['AI', '/ai'],
  ['Services', '/services'],
  ['Solutions', '/solutions'],
  ['Products', '/products'],
  ['Partners', '/partners'],
  ['Clients', '/clients'],
  ['Contact', '/contact'],
];

/** Full-screen menu with oversized links. */
export default function MobileMenu({ onClose }: { onClose: () => void }) {
  const link: React.CSSProperties = {
    fontWeight: 500,
    fontSize: 'clamp(34px,8vw,64px)',
    lineHeight: 1.05,
    letterSpacing: '-.04em',
    textDecoration: 'none',
    color: 'inherit',
    padding: '12px 0',
    borderBottom: '1px solid rgba(255,255,255,.08)',
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 60,
        background: '#0B1420',
        padding: 'clamp(20px,5vw,80px)',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        overflow: 'auto',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
        <span
          style={{
            fontFamily: MONO,
            fontSize: 12,
            letterSpacing: '.14em',
            textTransform: 'uppercase',
            color: '#8CC63F',
          }}
        >
          Menu
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          style={{
            width: 42,
            height: 42,
            borderRadius: 999,
            border: '1px solid rgba(255,255,255,.16)',
            background: 'transparent',
            color: 'inherit',
            display: 'grid',
            placeItems: 'center',
            cursor: 'pointer',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      {LINKS.map(([label, href], i) => (
        <Link
          key={href}
          href={href}
          onClick={onClose}
          style={
            i === LINKS.length - 1
              ? { ...link, color: '#8CC63F', borderBottom: 'none' }
              : link
          }
        >
          {label}
        </Link>
      ))}
    </div>
  );
}

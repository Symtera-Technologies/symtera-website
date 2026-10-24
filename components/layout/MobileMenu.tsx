'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MONO } from '@/lib/tokens';
import { ChevronDown } from '@/components/ui/Icons';
import { ABOUT_LINKS, PARTNER_LINKS, type NavItem } from './nav-links';

type Section = NavItem & { items?: NavItem[] };

export type MobileMenuProps = {
  onClose: () => void;
  aiLinks: NavItem[];
  serviceLinks: NavItem[];
  cloudLinks: NavItem[];
  productLinks: NavItem[];
};

/**
 * Full-screen menu with oversized links. Below 980px the desktop nav is hidden
 * (see [data-hide-narrow] in globals.css), and its dropdowns open on hover, so
 * this is the only way to reach a sub-page on a touch device: every section
 * that has children can be expanded here.
 *
 * Each row is a link plus a separate toggle, so tapping the label still goes to
 * the section's own page — a disclosure that swallowed the tap would make the
 * hub pages unreachable instead of the children.
 */
export default function MobileMenu({ onClose, aiLinks, serviceLinks, cloudLinks, productLinks }: MobileMenuProps) {
  // One open at a time: at this type size two expanded sections push the rest
  // off the screen.
  const [open, setOpen] = useState<string | null>(null);

  const sections: Section[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about', items: ABOUT_LINKS },
    { label: 'AI Solutions', href: '/ai', items: aiLinks },
    { label: 'Services', href: '/services', items: serviceLinks },
    { label: 'Cloud', href: '/cloud', items: cloudLinks },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Products', href: '/products', items: productLinks },
    { label: 'Partners', href: '/partners', items: PARTNER_LINKS },
    { label: 'Clients', href: '/clients' },
    { label: 'Contact', href: '/contact' },
  ];

  const label: React.CSSProperties = {
    flex: 1,
    fontWeight: 500,
    fontSize: 'clamp(30px,7vw,56px)',
    lineHeight: 1.05,
    letterSpacing: '-.04em',
    textDecoration: 'none',
    color: 'inherit',
    padding: '12px 0',
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
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
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

      {sections.map((section, i) => {
        const last = i === sections.length - 1;
        const expanded = open === section.label;
        const panelId = `mobile-menu-${section.label.toLowerCase().replace(/\s+/g, '-')}`;

        return (
          <div key={section.label} style={{ borderBottom: last ? 'none' : '1px solid rgba(255,255,255,.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Link
                href={section.href}
                onClick={onClose}
                style={last ? { ...label, color: '#8CC63F' } : label}
              >
                {section.label}
              </Link>

              {section.items && (
                <button
                  type="button"
                  onClick={() => setOpen(expanded ? null : section.label)}
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  aria-label={`${expanded ? 'Hide' : 'Show'} ${section.label} pages`}
                  style={{
                    flex: 'none',
                    width: 48,
                    height: 48,
                    borderRadius: 999,
                    border: '1px solid rgba(255,255,255,.16)',
                    background: expanded ? 'rgba(140,198,63,.14)' : 'transparent',
                    color: expanded ? '#8CC63F' : '#B7C3CF',
                    display: 'grid',
                    placeItems: 'center',
                    cursor: 'pointer',
                    transition: 'background .2s, color .2s',
                  }}
                >
                  <ChevronDown
                    size={20}
                    style={{ transform: `rotate(${expanded ? 180 : 0}deg)`, transition: 'transform .2s' }}
                  />
                </button>
              )}
            </div>

            {section.items && expanded && (
              <div
                id={panelId}
                data-hero-rise
                style={{
                  display: 'grid',
                  gap: 2,
                  margin: '0 0 18px',
                  paddingLeft: 14,
                  borderLeft: '1px solid rgba(140,198,63,.35)',
                }}
              >
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    style={{
                      fontSize: 17,
                      lineHeight: 1.4,
                      color: '#B7C3CF',
                      textDecoration: 'none',
                      padding: '11px 4px',
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

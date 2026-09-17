'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { MONO } from '@/lib/tokens';
import { ChevronDown, ArrowUpRight } from '@/components/ui/Icons';
import MobileMenu from './MobileMenu';

type NavItem = { label: string; href: string };
type DropKey = 'home' | 'ai' | 'products' | 'services' | 'cloud' | 'partners';

const HOME_LINKS: NavItem[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Management Team', href: '/about/leadership' },
  { label: 'Certifications', href: '/about/certifications' },
  { label: 'Our Affiliations', href: '/about/affiliations' },
];

const PARTNER_LINKS: NavItem[] = [
  { label: 'Network Security Partners', href: '/partners#network-security' },
  { label: 'Compliance Partners', href: '/partners#ssl-compliance' },
  { label: 'End-Point Security Partners', href: '/partners#endpoint-security' },
  { label: 'Other Brand Partners', href: '/partners#infrastructure-cloud' },
];

export default function Header({
  aiLinks,
  serviceLinks,
  cloudLinks,
  productLinks,
}: {
  aiLinks: NavItem[];
  serviceLinks: NavItem[];
  cloudLinks: NavItem[];
  productLinks: NavItem[];
}) {
  const [drop, setDrop] = useState<DropKey | null>(null);
  const [menu, setMenu] = useState(false);
  const pathname = usePathname() || '/';

  const active: Record<DropKey | 'clients' | 'contact', boolean> = {
    home: pathname === '/' || pathname.startsWith('/about'),
    ai: pathname.startsWith('/ai'),
    products: pathname.startsWith('/products'),
    services: pathname.startsWith('/services'),
    cloud: pathname.startsWith('/cloud'),
    partners: pathname.startsWith('/partners'),
    clients: pathname.startsWith('/clients'),
    contact: pathname.startsWith('/contact'),
  };

  const linkStyle = (on: boolean): React.CSSProperties => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    textDecoration: 'none',
    color: on ? '#8CC63F' : '#B7C3CF',
    padding: '10px 10px',
  });

  const panel = (extra?: React.CSSProperties): React.CSSProperties => ({
    position: 'absolute',
    top: '100%',
    left: 0,
    minWidth: 240,
    padding: 8,
    background: '#0F1B2B',
    border: '1px solid rgba(255,255,255,.1)',
    borderRadius: 14,
    boxShadow: '0 30px 60px -20px rgba(0,0,0,.6)',
    display: 'grid',
    gap: 2,
    animationDuration: '.25s',
    ...extra,
  });

  const dropLink = (item: NavItem, i: number) => (
    <Link
      key={`${item.href}-${i}`}
      data-drop
      href={item.href}
      onClick={() => setDrop(null)}
      style={{ textDecoration: 'none', color: '#F4F7FA', padding: '10px 12px', borderRadius: 8, display: 'block' }}
    >
      {item.label}
    </Link>
  );

  const menuItem = (key: DropKey, label: string, href: string, items: NavItem[], wide?: boolean) => (
    <div onMouseEnter={() => setDrop(key)} style={{ position: 'relative' }}>
      <Link data-navlink href={href} style={linkStyle(active[key])}>
        {label}
        <ChevronDown style={{ transform: `rotate(${drop === key ? 180 : 0}deg)`, transition: 'transform .2s' }} />
      </Link>
      {drop === key && (
        <div
          data-hero-rise
          style={panel(
            wide
              ? { width: 480, gridTemplateColumns: '1fr 1fr' }
              : key === 'home'
                ? undefined
                : { minWidth: 280 },
          )}
        >
          {items.map(dropLink)}
        </div>
      )}
    </div>
  );

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backdropFilter: 'blur(18px) saturate(1.3)',
          WebkitBackdropFilter: 'blur(18px) saturate(1.3)',
          background: 'rgba(11,20,32,.7)',
          borderBottom: '1px solid rgba(255,255,255,.08)',
        }}
      >
        <div
          style={{
            maxWidth: 1320,
            margin: '0 auto',
            padding: '12px clamp(20px,5vw,80px)',
            display: 'flex',
            alignItems: 'center',
            gap: 32,
          }}
        >
          <Link
            href="/"
            style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', color: 'inherit', marginRight: 'auto' }}
          >
            <Image
              src="/symtera-logo.png"
              alt="Symtera Technologies"
              width={220}
              height={58}
              priority
              style={{ height: 58, width: 'auto', display: 'block' }}
            />
          </Link>

          <nav
            data-hide-narrow
            onMouseLeave={() => setDrop(null)}
            style={{
              display: 'flex',
              gap: 2,
              alignItems: 'center',
              fontFamily: MONO,
              fontSize: 12,
              letterSpacing: '.06em',
              textTransform: 'uppercase',
            }}
          >
            {menuItem('home', 'Home', '/', HOME_LINKS)}
            {menuItem('ai', 'AI Solutions', '/ai', aiLinks, true)}
            {menuItem('products', 'Products', '/products', productLinks)}
            {menuItem('services', 'Services', '/services', serviceLinks)}
            {menuItem('cloud', 'Cloud', cloudLinks[0]?.href ?? '/services', cloudLinks)}
            {menuItem('partners', 'Partners', '/partners', PARTNER_LINKS)}
            <Link
              data-navlink
              href="/clients"
              onMouseEnter={() => setDrop(null)}
              style={{ textDecoration: 'none', color: active.clients ? '#8CC63F' : '#B7C3CF', padding: '10px 10px' }}
            >
              Clients
            </Link>
            <Link
              data-navlink
              href="/contact"
              onMouseEnter={() => setDrop(null)}
              style={{ textDecoration: 'none', color: active.contact ? '#8CC63F' : '#B7C3CF', padding: '10px 10px' }}
            >
              Contact
            </Link>
          </nav>

          <Link
            data-hide-narrow
            data-magnet
            data-btn="primary"
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: '#8CC63F',
              color: '#0B1420',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: 13.5,
              padding: '11px 18px',
              borderRadius: 999,
            }}
          >
            Order Now
            <ArrowUpRight size={14} />
          </Link>

          <button
            data-show-narrow
            type="button"
            onClick={() => setMenu(true)}
            aria-label="Menu"
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
              <path d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </header>

      {menu && <MobileMenu onClose={() => setMenu(false)} />}
    </>
  );
}

import type { Metadata } from 'next';
import { Geist, Geist_Mono, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

import Header from '@/components/layout/Header';
import Footer, { CtaBanner } from '@/components/layout/Footer';
import Motion from '@/components/ui/Motion';
import { JsonLd } from '@/components/seo/JsonLd';
import { SITE_URL } from '@/lib/site-url';
import { organizationSchema } from '@/lib/schema';
import { AI_PAGES } from '@/content/ai';
import { SERVICE_PAGES } from '@/content/services';
import { CLOUD_PAGES } from '@/content/cloud';
import { PRODUCT_PAGES } from '@/content/products';

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Symtera Technologies — Intelligent systems, built for scale and security',
    template: '%s — Symtera Technologies',
  },
  description:
    'We design and deploy enterprise-ready AI systems tailored to complex business challenges, and the software, cloud, security and infrastructure they run on.',
  // Icons come from app/favicon.ico, app/icon.png and app/apple-icon.png,
  // which Next links automatically. Sourced from symteratech.com.
  //
  // Pages set their own canonical and Open Graph tags through pageMetadata();
  // no canonical is set here, because children would inherit "/" and every page
  // would claim to be the home page.
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const aiLinks = AI_PAGES.map((p) => ({ label: p.nav, href: `/ai/${p.slug}` }));
  const serviceLinks = SERVICE_PAGES.map((p) => ({ label: p.nav, href: `/services/${p.slug}` }));
  const cloudLinks = CLOUD_PAGES.map((p) => ({ label: p.nav, href: `/cloud/${p.slug}` }));
  const productLinks = PRODUCT_PAGES.map((p) => ({ label: p.nav, href: `/products/${p.slug}` }));

  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${cormorant.variable}`}>
      <body>
        <JsonLd data={organizationSchema()} />
        <div
          style={{
            minHeight: '100vh',
            background: '#0B1420',
            color: '#F4F7FA',
            overflowX: 'clip',
            position: 'relative',
          }}
        >
          <Header
            aiLinks={aiLinks}
            serviceLinks={serviceLinks}
            cloudLinks={cloudLinks}
            productLinks={productLinks}
          />
          <main style={{ position: 'relative', zIndex: 2 }}>{children}</main>
          <CtaBanner />
          <Footer />
        </div>
        <Motion />
      </body>
    </html>
  );
}

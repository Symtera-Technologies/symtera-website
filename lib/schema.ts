import { SITE_URL } from './site-url';
import { SITE_NAME, absoluteUrl } from './seo';
import { COMPANY, SOCIALS } from '@/content/company';
import { decode } from './html';

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;

/**
 * Structured postal addresses. The content files hold these as display lines,
 * which schema.org cannot use, so the parts are spelled out here.
 */
const ADDRESSES = {
  us: {
    '@type': 'PostalAddress',
    streetAddress: '1806 State Route 35, Suite 304',
    addressLocality: 'Oakhurst',
    addressRegion: 'NJ',
    postalCode: '07755',
    addressCountry: 'US',
  },
  pk: {
    '@type': 'PostalAddress',
    streetAddress: '263 H1, Johar Town',
    addressLocality: 'Lahore',
    addressRegion: 'Punjab',
    addressCountry: 'PK',
  },
} as const;

/** Site-wide Organization and WebSite nodes, emitted once in the root layout. */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': ORG_ID,
        name: SITE_NAME,
        legalName: COMPANY.legalName,
        url: SITE_URL,
        logo: { '@type': 'ImageObject', url: `${SITE_URL}/symtera-logo.png` },
        description: COMPANY.blurb,
        foundingDate: String(COMPANY.founded),
        email: COMPANY.email,
        address: ADDRESSES.us,
        sameAs: SOCIALS.map((s) => s.href),
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'sales',
            email: COMPANY.email,
            telephone: '+1-646-505-7083',
            areaServed: 'US',
            availableLanguage: ['en'],
          },
          {
            '@type': 'ContactPoint',
            contactType: 'customer support',
            telephone: '+92-3-111-119-120',
            areaServed: 'PK',
            availableLanguage: ['en', 'ur'],
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': SITE_ID,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: { '@id': ORG_ID },
      },
    ],
  };
}

/** The two offices, for the contact page. */
export function officesSchema() {
  const office = (
    id: string,
    name: string,
    address: (typeof ADDRESSES)[keyof typeof ADDRESSES],
    telephone: string,
  ) => ({
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/contact#${id}`,
    name,
    parentOrganization: { '@id': ORG_ID },
    url: `${SITE_URL}/contact`,
    email: COMPANY.email,
    telephone,
    address,
    priceRange: '$$',
  });
  return {
    '@context': 'https://schema.org',
    '@graph': [
      office('us', `${SITE_NAME} — New Jersey`, ADDRESSES.us, '+1-646-505-7083'),
      office('pk', `${SITE_NAME} — Lahore`, ADDRESSES.pk, '+92-3-111-119-120'),
    ],
  };
}

/** A service offering, used on the AI, service, cloud and product sub-pages. */
export function serviceSchema({
  name,
  description,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: decode(name),
    description: decode(description),
    url: absoluteUrl(path),
    provider: { '@id': ORG_ID },
    areaServed: [{ '@type': 'Country', name: 'United States' }, { '@type': 'Country', name: 'Pakistan' }],
    ...(serviceType ? { serviceType } : {}),
  };
}

export function faqPageSchema(items: [question: string, answer: string][], path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${absoluteUrl(path)}#faq`,
    mainEntity: items.map(([question, answer]) => ({
      '@type': 'Question',
      name: decode(question),
      acceptedAnswer: { '@type': 'Answer', text: decode(answer) },
    })),
  };
}

/** Trail of [label, path] pairs, starting after the home page. */
export function breadcrumbSchema(trail: [label: string, path: string][]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [['Home', '/'] as [string, string], ...trail].map(([name, path], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: decode(name),
      item: absoluteUrl(path),
    })),
  };
}

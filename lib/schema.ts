import { SITE_URL } from './site-url';
import { SITE_NAME, absoluteUrl } from './seo';
import { COMPANY, SOCIALS, LEADERSHIP } from '@/content/company';
import { AI_PAGES } from '@/content/ai';
import { SERVICE_PAGES } from '@/content/services';
import { CLOUD_PAGES } from '@/content/cloud';
import { PRODUCT_PAGES } from '@/content/products';
import { decode, stripTags } from './html';
import type { Plans } from '@/content/types';

const ORG_ID = `${SITE_URL}/#organization`;
/** The Pakistani company. See COMPANY.legalNamePk for why there are two. */
const ORG_PK_ID = `${SITE_URL}/#organization-pk`;
const SITE_ID = `${SITE_URL}/#website`;

/** Stable @id for a named person, so other nodes can point at them. */
const personId = (id: string) => `${SITE_URL}/about/leadership#${id}`;

/**
 * What the organization is competent in, read off the pages that prove it
 * rather than written by hand. A hand-kept list would claim a competence after
 * the page backing it was renamed or removed.
 */
function knowsAbout(): string[] {
  const names = [
    ...SERVICE_PAGES.map((p) => p.nav),
    ...CLOUD_PAGES.map((p) => p.nav),
    ...AI_PAGES.map((p) => p.nav),
    ...PRODUCT_PAGES.map((p) => p.nav),
  ].map((n) => decode(n));
  return [...new Set(names)];
}

/**
 * The service lines as a catalog, pointing at the pages that describe them.
 * No prices: only the SEO and social-media pages publish a rate, and a catalog
 * that priced some lines and not others would read as though the rest were
 * free.
 */
function offerCatalog() {
  const entry = (base: string) => (p: { nav: string; slug: string }) => ({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: decode(p.nav),
      url: `${SITE_URL}${base}/${p.slug}`,
      provider: { '@id': ORG_ID },
    },
  });
  return {
    '@type': 'OfferCatalog',
    name: `${SITE_NAME} services`,
    itemListElement: [
      ...SERVICE_PAGES.map(entry('/services')),
      ...CLOUD_PAGES.map(entry('/cloud')),
      ...AI_PAGES.map(entry('/ai')),
    ],
  };
}

/**
 * One Person node per named leader, linked to the organization both ways.
 *
 * The leadership page listed two founders with their roles and LinkedIn
 * profiles in prose only, so nothing tied the company to a real, resolvable
 * person. `sameAs` against LinkedIn is what lets a search engine or a model
 * treat them as the same entity it already knows about.
 */
export function leadershipSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': LEADERSHIP.map((leader) => ({
      '@type': 'Person',
      '@id': personId(leader.id),
      name: decode(leader.name),
      jobTitle: decode(leader.role),
      description: summarise(leader.bio[0] ?? ''),
      url: `${SITE_URL}/about/leadership#${leader.id}`,
      worksFor: { '@id': ORG_ID },
      ...(leader.linkedin ? { sameAs: [leader.linkedin] } : {}),
    })),
  };
}

/**
 * First sentence of a bio, flattened, for a Person description.
 *
 * The first full stop is not reliably the end of the sentence: one bio opens
 * "Ch. Kashif Talib is the President…", where cutting at the first one yields
 * the description "Ch.". So a candidate stop only counts once enough of a
 * sentence has accumulated to be worth having.
 */
const MIN_SENTENCE = 40;

function summarise(html: string): string {
  const text = decode(stripTags(html)).replace(/\s+/g, ' ').trim();
  for (const m of text.matchAll(/\.\s+/g)) {
    if (m.index !== undefined && m.index >= MIN_SENTENCE) return text.slice(0, m.index + 1);
  }
  return text;
}

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
        alternateName: 'Symtera',
        legalName: COMPANY.legalName,
        url: SITE_URL,
        logo: { '@type': 'ImageObject', url: `${SITE_URL}/symtera-logo.png` },
        description: COMPANY.blurb,
        foundingDate: String(COMPANY.founded),
        email: COMPANY.email,
        address: ADDRESSES.us,
        areaServed: [
          { '@type': 'Country', name: 'United States' },
          { '@type': 'Country', name: 'Pakistan' },
        ],
        /** Both founders are named on /about/leadership and modelled there. */
        founder: LEADERSHIP.map((l) => ({ '@id': personId(l.id) })),
        subOrganization: { '@id': ORG_PK_ID },
        knowsAbout: knowsAbout(),
        hasOfferCatalog: offerCatalog(),
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
      /**
       * The Pakistani company, as its own node rather than a second name for
       * the first one.
       *
       * Both trade as "Symtera Technologies", and the site says LLC in some
       * places and Private Limited in others. Left flat, that reads as one
       * company that cannot keep its own name straight, which weakens the
       * match for either. Modelled as parent and subsidiary it reads as what
       * it is: a group with a US parent and a delivery company in Lahore.
       */
      {
        '@type': 'Organization',
        '@id': ORG_PK_ID,
        name: SITE_NAME,
        legalName: COMPANY.legalNamePk,
        url: SITE_URL,
        /** Stated on /about: the Private Limited was founded in 2019. */
        foundingDate: String(COMPANY.founded),
        address: ADDRESSES.pk,
        telephone: '+92-3-111-119-120',
        parentOrganization: { '@id': ORG_ID },
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
    // No priceRange. The site publishes real prices on the cloud pages and
    // nothing resembling a "$$" tier anywhere, so stating one was an invention
    // of exactly the kind we declined to make with aggregateRating.
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
/**
 * The published plans as offers, so the prices already printed on the page are
 * machine-readable rather than just rendered text.
 *
 * Hosting, email, SEO and social media all publish real rates on the page, but
 * nothing marked them up, so a search engine or a model reading the page had
 * no structured price for a service that plainly has one. Only plans whose
 * price parses as a number are included: a plan priced "Custom" is a real
 * offer but not one that can be stated as a figure.
 */
function planOffers(plans: Plans, path: string) {
  const offers = plans.items.flatMap((p) => {
    const amount = Number((p.price.match(/[\d.]+/) ?? [])[0]);
    if (!Number.isFinite(amount)) return [];
    return [{
      '@type': 'Offer',
      name: decode(p.name),
      price: amount.toFixed(2),
      priceCurrency: 'USD',
      url: absoluteUrl(path),
      availability: 'https://schema.org/InStock',
      // `per` carries the billing basis, e.g. "Per Monthly Fee (Yearly
      // Package)" or "Monthly Package of Per Mailbox". Kept verbatim rather
      // than mapped onto a billing period we would be guessing at.
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: amount.toFixed(2),
        priceCurrency: 'USD',
        unitText: decode(p.per),
      },
    }];
  });
  if (offers.length === 0) return undefined;
  const prices = offers.map((o) => Number(o.price));
  return {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    lowPrice: Math.min(...prices).toFixed(2),
    highPrice: Math.max(...prices).toFixed(2),
    offerCount: offers.length,
    offers,
  };
}

export function serviceSchema({
  name,
  description,
  path,
  serviceType,
  plans,
}: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
  plans?: Plans;
}) {
  const offers = plans ? planOffers(plans, path) : undefined;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: decode(name),
    description: decode(description),
    url: absoluteUrl(path),
    provider: { '@id': ORG_ID },
    areaServed: [{ '@type': 'Country', name: 'United States' }, { '@type': 'Country', name: 'Pakistan' }],
    ...(serviceType ? { serviceType } : {}),
    ...(offers ? { offers } : {}),
  };
}

/**
 * A named, ready-made application, for the /products pages. Those four describe
 * software you license rather than an engagement you book, which is what
 * Service describes, so they carry SoftwareApplication instead.
 *
 * No `offers` or `aggregateRating`: Google wants both for the full software
 * rich result, and the product pages publish neither a price nor a review, so
 * either one would have to be invented.
 */
export function softwareApplicationSchema({
  name,
  description,
  path,
  applicationCategory,
}: {
  name: string;
  description: string;
  path: string;
  applicationCategory: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: decode(name),
    description: decode(description),
    url: absoluteUrl(path),
    applicationCategory,
    // All four are delivered in the browser, which is what the copy claims.
    operatingSystem: 'Web browser',
    // `provider` is not valid on SoftwareApplication — it belongs on Service,
    // where serviceSchema above uses it correctly. For software the authoring
    // organisation is `creator`.
    creator: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
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

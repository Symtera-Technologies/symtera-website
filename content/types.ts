// Shared content types for the ported design content.
// Bodies, titles and accents may contain inline HTML (<b>, &amp;) and are rendered as HTML.

export interface SectionBase {
  title: string;
  body?: string[];
  chips?: string[];
  after?: string;
  list?: string[];
  bullets?: [string, string][];
}

export type ContentSection =
  | (SectionBase & { kind: 'text' })
  | (SectionBase & { kind: 'cards'; items: [string, string, string][] })
  | (SectionBase & { kind: 'steps'; steps: [string, string][] })
  | (SectionBase & { kind: 'pipeline'; steps: string[] })
  | (SectionBase & { kind: 'stats'; stats: [string, string, string][] })
  | (SectionBase & { kind: 'feature'; label?: string; img: number });

export type Faq = [question: string, answer: string];

export interface Plan {
  name: string;
  price: string;
  per: string;
  items: string[];
  hot?: boolean;
}

export interface Plans {
  title: string;
  items: Plan[];
}

export interface Matrix {
  cols: string[];
  rows: (string[])[];
}

/**
 * Shortened <title> for the search result, when `title` + `accent` — which are
 * the page's H1 — would run past the ~60 characters Google shows. The heading is
 * marketing copy and stays as written; this is the search-result version of it.
 * The brand suffix is added by the layout template, so keep this under about 37
 * characters.
 */
export type SeoTitle = { seoTitle?: string };

/** AI service sub-page (/ai/[slug]). */
export interface AiPage extends SeoTitle {
  slug: string;
  nav: string;
  visual: string;
  icon: string;
  title: string;
  accent: string;
  intro: string[];
  cta: [string, string];
  sections: ContentSection[];
  faq: Faq[];
}

/** Service, cloud and product sub-pages share one shape (/services|cloud|products/[slug]). */
export interface ServicePage extends SeoTitle {
  slug: string;
  nav: string;
  visual: string;
  icon: string;
  title: string;
  accent: string;
  kicker?: string;
  intro: string[];
  cta: [string, string];
  images?: string[];
  /**
   * schema.org applicationCategory. Set on the /products pages only, which
   * describe licensed software and so carry SoftwareApplication rather than the
   * Service schema the services and cloud pages use.
   */
  applicationCategory?: string;
  sections: ContentSection[];
  plans?: Plans;
  matrix?: Matrix;
  faq: Faq[];
}

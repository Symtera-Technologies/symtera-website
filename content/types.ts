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

/** AI service sub-page (/ai/[slug]). */
export interface AiPage {
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
export interface ServicePage {
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
  features?: string[];
  sections: ContentSection[];
  plans?: Plans;
  matrix?: Matrix;
  faq: Faq[];
}

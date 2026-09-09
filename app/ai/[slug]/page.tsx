import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AI_PAGES } from '@/content/ai';
import { decode } from '@/lib/html';
import ServicePageTemplate from '@/components/pages/ServicePageTemplate';

export function generateStaticParams() {
  return AI_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = AI_PAGES.find((p) => p.slug === slug);
  if (!page) return {};
  return {
    title: decode(`${page.title} ${page.accent}`),
    description: decode(page.intro[0]),
  };
}

export default async function AiServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = AI_PAGES.find((p) => p.slug === slug);
  if (!page) notFound();

  const related = AI_PAGES.filter((p) => p.slug !== page.slug).map((p) => ({
    nav: p.nav,
    href: `/ai/${p.slug}`,
    icon: p.icon,
  }));

  return (
    <ServicePageTemplate
      page={page}
      crumb="AI Solutions"
      crumbHref="/ai"
      related={related}
      relatedLabel="Explore Related AI Services"
    />
  );
}

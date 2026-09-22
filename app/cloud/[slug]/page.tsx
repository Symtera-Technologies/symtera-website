import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CLOUD_PAGES } from '@/content/cloud';
import { decode } from '@/lib/html';
import { pageMetadata } from '@/lib/seo';
import ServicePageTemplate from '@/components/pages/ServicePageTemplate';

export function generateStaticParams() {
  return CLOUD_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = CLOUD_PAGES.find((p) => p.slug === slug);
  if (!page) return {};
  return pageMetadata({
    title: decode(`${page.title} ${page.accent}`),
    description: decode(page.intro[0]),
    path: `/cloud/${slug}`,
  });
}

export default async function CloudDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = CLOUD_PAGES.find((p) => p.slug === slug);
  if (!page) notFound();

  const related = CLOUD_PAGES.filter((p) => p.slug !== page.slug).map((p) => ({
    nav: p.nav,
    href: `/cloud/${p.slug}`,
    icon: p.icon,
  }));

  return (
    <ServicePageTemplate
      page={page}
      path={`/cloud/${slug}`}
      crumb="Cloud"
      crumbHref={`/cloud/${CLOUD_PAGES[0].slug}`}
      related={related}
      relatedLabel="Explore Related Cloud Pages"
    />
  );
}

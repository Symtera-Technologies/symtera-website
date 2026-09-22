import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICE_PAGES } from '@/content/services';
import { decode } from '@/lib/html';
import { pageMetadata } from '@/lib/seo';
import ServicePageTemplate from '@/components/pages/ServicePageTemplate';

export function generateStaticParams() {
  return SERVICE_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = SERVICE_PAGES.find((p) => p.slug === slug);
  if (!page) return {};
  return pageMetadata({
    title: decode(`${page.title} ${page.accent}`),
    description: decode(page.intro[0]),
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = SERVICE_PAGES.find((p) => p.slug === slug);
  if (!page) notFound();

  const related = SERVICE_PAGES.filter((p) => p.slug !== page.slug).map((p) => ({
    nav: p.nav,
    href: `/services/${p.slug}`,
    icon: p.icon,
  }));

  return (
    <ServicePageTemplate
      page={page}
      path={`/services/${slug}`}
      crumb="Services"
      crumbHref="/services"
      related={related}
      relatedLabel="Explore Related Services Pages"
    />
  );
}

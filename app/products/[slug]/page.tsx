import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PRODUCT_PAGES } from '@/content/products';
import { decode } from '@/lib/html';
import ServicePageTemplate from '@/components/pages/ServicePageTemplate';

export function generateStaticParams() {
  return PRODUCT_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = PRODUCT_PAGES.find((p) => p.slug === slug);
  if (!page) return {};
  return { title: decode(`${page.title} ${page.accent}`), description: decode(page.intro[0]) };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = PRODUCT_PAGES.find((p) => p.slug === slug);
  if (!page) notFound();

  const related = PRODUCT_PAGES.filter((p) => p.slug !== page.slug).map((p) => ({
    nav: p.nav,
    href: `/products/${p.slug}`,
    icon: p.icon,
  }));

  return (
    <ServicePageTemplate
      page={page}
      crumb="Products"
      crumbHref="/products"
      related={related}
      relatedLabel="Explore Related Products Pages"
      demoService={page.nav}
    />
  );
}

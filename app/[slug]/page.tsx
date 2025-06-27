// WordPress integration commented out - this dynamic page is disabled
// import { getPageBySlug, getAllPageSlugs, sanitizeHtml } from '@/lib/wordpress';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  // WordPress dynamic page generation disabled
  console.log('Dynamic page generation disabled - WordPress integration commented out');
  return []; // Return empty array to disable dynamic page generation
}

export default async function GenericPage({ params }: { params: { slug: string } }) {
  // WordPress dynamic page rendering disabled
  console.warn(`Dynamic page access attempted for slug: ${params.slug} - WordPress integration disabled`);
  return notFound();
}

/*
WordPress-based dynamic page rendering has been commented out.
The original code included:
- Dynamic page generation from WordPress content
- Hero sections with ACF fields
- Content sections with custom layouts
- Image handling from WordPress media

This functionality has been replaced with static pages for all content.
If dynamic page generation is needed in the future, this file can be restored from version control.
*/

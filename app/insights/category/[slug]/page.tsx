// WordPress insights category listing commented out
// import { getPosts, getCategories } from '@/lib/wordpress';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface CategoryPageParams {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: CategoryPageParams): Promise<Metadata> {
  return {
    title: 'Category | Alphaxine Insights',
    description: 'Insights category page is temporarily unavailable.',
  };
}

export async function generateStaticParams() {
  // WordPress category page generation disabled
  return [];
}

export default async function CategoryPage({ params }: CategoryPageParams) {
  // WordPress category page rendering disabled
  console.warn(`Category page access attempted for slug: ${params.slug} - WordPress integration disabled`);
  return notFound();
}

/*
WordPress-based insights category listing has been commented out.
The original code included:
- Category-based post filtering
- Post listings with featured images
- Category sidebar navigation
- Post metadata and excerpts

This functionality has been replaced with a placeholder message.
If insights category pages are needed in the future, this file can be restored from version control.
*/ 
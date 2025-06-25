// WordPress Local API Configuration for alphaxine.local
import { cache } from 'react';

const WORDPRESS_LOCAL_API_URL = 'http://alphaxine.local/wp-json/wp/v2';

// Interface for ACF fields structure
interface ServiceCard {
  title: string;
  description: string;
  svg_icon?: string;
}

interface KeyBenefit {
  title: string;
  description: string;
}

interface PageACF {
  hero_title?: string;
  hero_subtitle?: string;
  hero_description?: string;
  description?: string;
  service_cards?: ServiceCard[];
  key_benefits?: KeyBenefit[];
  cta_title?: string;
  cta_text?: string;
  cta_button_label?: string;
  cta_button_link?: string;
}

// Interface for WordPress Page
export interface WordPressPage {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  acf: PageACF;
  date: string;
  modified: string;
  status: string;
}

/**
 * Fetch a single page by slug from WordPress
 */
export const getPageBySlug = cache(async (slug: string): Promise<WordPressPage | null> => {
  try {
    console.log(`Fetching page with slug: ${slug} from ${WORDPRESS_LOCAL_API_URL}`);
    
    const response = await fetch(`${WORDPRESS_LOCAL_API_URL}/pages?slug=${slug}`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error(`Failed to fetch page ${slug}: ${response.status} ${response.statusText}`);
      return null;
    }

    const pages: WordPressPage[] = await response.json();
    
    if (!pages || pages.length === 0) {
      console.warn(`No page found with slug: ${slug}`);
      return null;
    }

    const page = pages[0];
    console.log(`Successfully fetched page: ${page.title.rendered}`);
    
    return page;
  } catch (error) {
    console.error(`Error fetching page ${slug}:`, error);
    return null;
  }
});

/**
 * Get all page slugs for static generation
 */
export const getAllPageSlugs = cache(async (): Promise<{ slug: string }[]> => {
  try {
    console.log(`Fetching all page slugs from ${WORDPRESS_LOCAL_API_URL}`);
    
    const response = await fetch(`${WORDPRESS_LOCAL_API_URL}/pages?per_page=100&status=publish`, {
      next: { revalidate: 3600 },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error(`Failed to fetch pages: ${response.status} ${response.statusText}`);
      return [];
    }

    const pages: WordPressPage[] = await response.json();
    
    const slugs = pages
      .filter(page => page.slug && page.status === 'publish')
      .map(page => ({ slug: page.slug }));
    
    console.log(`Found ${slugs.length} published pages:`, slugs.map(s => s.slug));
    
    return slugs;
  } catch (error) {
    console.error('Error fetching page slugs:', error);
    return [];
  }
});

/**
 * Utility function to sanitize HTML content from WordPress
 */
export function sanitizeHtml(html: string): string {
  // Basic HTML sanitization - you might want to use a library like DOMPurify for production
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '');
}

// Export the API URL for external use
export { WORDPRESS_LOCAL_API_URL };
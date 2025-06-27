// WordPress insights listing commented out
// import { getPosts, getCategories } from '@/lib/wordpress';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insights - Alphaxine',
  description: 'Latest insights and perspectives from Alphaxine',
};

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Insights & Perspectives
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            This section is temporarily unavailable. Please check back soon for our latest insights and industry perspectives.
          </p>
        </div>
      </div>
    </div>
  );
}

/*
WordPress-based insights listing has been commented out.
The original code included:
- Blog post listings from WordPress
- Category filtering
- Search functionality
- Pagination

This functionality has been replaced with a placeholder message.
*/

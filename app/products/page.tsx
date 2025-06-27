import { Metadata } from 'next';
// WordPress integration commented out
// import { getPage } from '@/lib/wordpress';
import PageHero from '@/app/components/UI/PageHero';
import ContentRenderer from '@/app/components/UI/ContentRenderer';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

export const metadata: Metadata = {
  title: 'Products & Solutions | AlphaXine',
  description: 'Explore our innovative products and solutions designed to drive digital transformation and business growth.',
};

export default async function ProductsPage() {
  // WordPress integration commented out
  // const pageData = await getPage('products');
  
  return (
    <BackgroundFix>
      <div className="min-h-screen bg-gray-50">
        <PageHero 
          title="Products & Solutions"
          imageUrl="/images/products-hero.jpg"
        />
        
        <section className="container mx-auto py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Products & Solutions</h2>
              <p className="text-lg text-gray-600 mb-12">
                This section is temporarily unavailable. Please check back soon for information about our innovative products and solutions.
              </p>
            </div>
          </div>
        </section>
      </div>
    </BackgroundFix>
  );
} 


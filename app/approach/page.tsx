import { Metadata } from 'next';
// WordPress integration commented out
// import { getPage } from '@/lib/wordpress';
import PageHero from '@/app/components/UI/PageHero';
import ContentRenderer from '@/app/components/UI/ContentRenderer';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

export const metadata: Metadata = {
  title: 'Our Approach | Alphaxine',
  description: 'Learn about our strategic approach to solving complex business challenges and delivering transformative solutions.',
};

export default async function ApproachPage() {
  // WordPress integration commented out
  // const pageData = await getPage('approach');
  
  return (
    <BackgroundFix>
      <div className="min-h-screen bg-gray-50">
        <PageHero 
          title="Our Approach"
          imageUrl="/images/approach-hero.jpg"
        />
        
        <section className="container mx-auto py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Strategic Approach</h2>
              <p className="text-lg text-gray-600 mb-12">
                This section is temporarily unavailable. Please check back soon for detailed information about our strategic approach to solving complex business challenges.
              </p>
            </div>
          </div>
        </section>
      </div>
    </BackgroundFix>
  );
}

/*
WordPress-based approach page content has been commented out.
The original code included dynamic content fetching from WordPress.
This functionality has been replaced with a placeholder message.
*/

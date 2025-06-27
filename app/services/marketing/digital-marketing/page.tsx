import React from 'react';
import Link from 'next/link';

const DigitalMarketingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-500">
              Digital Marketing Excellence
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              Results-Oriented Digital Campaigns & Conversion Optimization
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Design and execute high-performance digital campaigns, websites, and landing pages that drive measurable business growth through enhanced visibility, targeted engagement, and conversion optimization strategies tailored to your unique market position.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Overview */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-8">Strategic Digital Marketing Platform</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-700 mb-6">
                    Digital marketing success requires more than creative content and broad reach—it demands strategic precision, data-driven decision making, and relentless focus on measurable outcomes. Our comprehensive approach combines campaign design, website optimization, and conversion-focused landing pages to create integrated marketing ecosystems that deliver consistent business growth.
                  </p>
                  <p className="text-gray-700">
                    We build marketing campaigns that evolve with your audience behavior, optimize digital touchpoints for maximum engagement, and create conversion funnels that transform visitors into loyal customers. Every strategy is grounded in performance analytics and designed to scale with your business objectives.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Services</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      Results-driven digital campaign development and management
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      High-conversion website design and optimization
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      Strategic landing page creation and testing
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      Performance analytics and conversion tracking
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Results-Oriented Digital Campaigns */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-8">Results-Oriented Digital Campaigns</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Strategic Campaign Architecture</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Build comprehensive campaign frameworks that align messaging, targeting, and creative execution across multiple digital channels to create cohesive customer experiences that drive meaningful business outcomes.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Multi-channel campaign integration and coordination</li>
                    <li>• Audience research and behavioral targeting strategies</li>
                    <li>• Creative concept development and testing frameworks</li>
                    <li>• Budget optimization and performance forecasting</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Performance-Driven Execution</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Execute campaigns with precision monitoring and real-time optimization that ensures every dollar spent contributes to measurable business growth through advanced tracking, testing, and performance enhancement strategies.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Real-time campaign monitoring and optimization</li>
                    <li>• Advanced attribution modeling and ROI tracking</li>
                    <li>• Conversion funnel analysis and improvement</li>
                    <li>• Competitive analysis and market positioning</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* High-Performance Website Development */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-8">High-Performance Website Development</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">User-Centric Design</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Create intuitive, conversion-focused website designs that guide visitors naturally toward desired actions while providing exceptional user experiences across all devices.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Performance Optimization</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Implement technical optimizations that ensure fast loading times, smooth functionality, and superior search engine performance to maximize visibility and engagement.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Conversion Architecture</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Structure websites with strategic conversion pathways that seamlessly guide visitors from awareness to action through optimized user journeys and compelling calls-to-action.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <h3 className="text-2xl font-bold mb-6 text-red-600">Website Development Framework</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Technical Excellence</h4>
                    <p className="text-gray-700 mb-4">
                      Build websites on robust technical foundations that support business growth, integrate seamlessly with marketing tools, and provide reliable performance under varying traffic conditions.
                    </p>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Responsive design for optimal mobile and desktop experiences</li>
                      <li>• SEO-optimized architecture and content structure</li>
                      <li>• Advanced analytics and conversion tracking integration</li>
                      <li>• Security protocols and performance monitoring systems</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Marketing Integration</h4>
                    <p className="text-gray-700 mb-4">
                      Ensure websites function as powerful marketing assets that support campaign objectives, capture lead information effectively, and provide actionable insights for continuous optimization.
                    </p>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Lead capture forms and marketing automation integration</li>
                      <li>• Content management systems for ongoing optimization</li>
                      <li>• Social media and advertising platform connectivity</li>
                      <li>• Customer relationship management system integration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategic Landing Page Development */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-8">Strategic Landing Page Development</h2>
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">Conversion-Focused Design</h3>
                    <p className="text-gray-700 mb-4">
                      Create targeted landing pages that eliminate distractions and guide visitors toward specific actions through strategic design elements, compelling messaging, and optimized conversion pathways that maximize campaign effectiveness.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm">Message-match optimization for campaign alignment</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm">Strategic form design and lead capture optimization</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm">Compelling call-to-action placement and design</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">Testing & Optimization</h3>
                    <p className="text-gray-700 mb-4">
                      Implement systematic testing methodologies that continuously improve landing page performance through data-driven insights, user behavior analysis, and conversion rate optimization strategies.
                    </p>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• A/B testing frameworks for element optimization</li>
                      <li>• Heat mapping and user behavior analysis</li>
                      <li>• Conversion funnel analysis and improvement</li>
                      <li>• Mobile optimization and cross-device testing</li>
                      <li>• Performance tracking and reporting systems</li>
                      <li>• Iterative design improvements based on data insights</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Visibility & Growth Strategies */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-8">Visibility & Growth Acceleration</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Search Engine Optimization</h3>
                  <p className="text-gray-700 mb-4">
                    Enhance organic visibility through comprehensive SEO strategies that improve search rankings, drive qualified traffic, and establish long-term digital authority in your market segment.
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Technical SEO audits and implementation</li>
                    <li>• Keyword research and content optimization strategies</li>
                    <li>• Local SEO for geographic market penetration</li>
                    <li>• Link building and authority development programs</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Paid Advertising Management</h3>
                  <p className="text-gray-700 mb-4">
                    Execute targeted advertising campaigns across search engines, social media platforms, and display networks that maximize return on advertising investment through strategic targeting and optimization.
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Search engine marketing (Google Ads, Bing Ads)</li>
                    <li>• Social media advertising (Facebook, LinkedIn, Instagram)</li>
                    <li>• Display and retargeting campaign management</li>
                    <li>• Video advertising and YouTube marketing</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Conversion Analytics & Optimization */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-8">Conversion Analytics & Optimization</h2>
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Tracking</h3>
                    <p className="text-gray-700">
                      Implement comprehensive analytics systems that provide actionable insights into campaign performance, user behavior, and conversion optimization opportunities across all digital touchpoints.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Data-Driven Decisions</h3>
                    <p className="text-gray-700">
                      Transform raw data into strategic insights that guide marketing decisions, budget allocation, and campaign optimization strategies for sustained business growth and improved ROI.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Continuous Improvement</h3>
                    <p className="text-gray-700">
                      Establish iterative optimization processes that consistently enhance campaign performance, website effectiveness, and conversion rates through systematic testing and refinement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Impact & ROI */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-8">Measurable Business Impact</h2>
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Increased Revenue Generation</h3>
                    <p className="text-gray-700">
                      Organizations typically achieve 40-70% increase in qualified leads and 25-45% improvement in conversion rates through strategic digital marketing implementation and optimization.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Enhanced Market Visibility</h3>
                    <p className="text-gray-700">
                      Strategic digital campaigns and optimized websites deliver 60-150% improvement in organic search visibility and 3-5x increase in brand awareness metrics.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Accelerated Growth Trajectory</h3>
                    <p className="text-gray-700">
                      Comprehensive digital marketing strategies enable businesses to achieve 2-4x faster growth rates while reducing customer acquisition costs by 30-50% through optimized targeting and conversion processes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-red-50 rounded-lg p-8 border border-red-100">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-red-600 mb-4">Accelerate Your Digital Marketing Success</h3>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  Ready to implement results-oriented digital campaigns, high-performance websites, and conversion-optimized landing pages that drive measurable business growth? Our digital marketing experts will develop a comprehensive strategy that aligns with your business objectives and market opportunities.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center bg-red-600 text-white px-8 py-3 rounded-md font-medium hover:bg-red-700 transition-colors"
                >
                  Launch Your Digital Marketing Strategy
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingPage; 


import React from 'react';
import Link from 'next/link';

const MarketingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-500">
              Intelligent Marketing Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              Data-Driven Campaign Management & Customer Journey Orchestration
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Transform your marketing approach with adaptive, AI-powered campaigns that leverage customer data for personalized messaging across digital channels, featuring real-time performance optimization and seamless integration with your enterprise systems.
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
              <h2 className="text-3xl font-bold text-red-600 mb-8">Strategic Marketing Intelligence Platform</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-700 mb-6">
                    Modern marketing demands precision, agility, and deep customer understanding. Our intelligent marketing solutions combine advanced analytics with automation technology to create campaigns that adapt in real-time based on customer behavior and market dynamics.
                  </p>
                  <p className="text-gray-700">
                    We orchestrate personalized customer experiences across every touchpoint, using data-driven insights to deliver the right message to the right person at exactly the right moment. This approach transforms marketing from broad messaging to targeted conversations that drive meaningful engagement and measurable business growth.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Capabilities</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      Adaptive campaign management with AI optimization
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      Customer data orchestration and personalization
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      Real-time performance tracking and adjustment
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      Integrated workflow automation with enterprise systems
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Adaptive Campaign Management */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-8">Adaptive Campaign Intelligence</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">AI-Powered Optimization</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Deploy machine learning algorithms that continuously analyze campaign performance and automatically adjust targeting, messaging, and budget allocation to maximize ROI and engagement rates across all marketing channels.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Dynamic audience segmentation and targeting</li>
                    <li>• Automated A/B testing and optimization</li>
                    <li>• Predictive budget allocation models</li>
                    <li>• Content performance analysis and recommendations</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Behavioral Response Systems</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Create responsive marketing campaigns that adapt messaging and offers based on real-time customer interactions, purchase history, and engagement patterns to deliver highly relevant experiences that drive conversion.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Real-time behavior tracking and response</li>
                    <li>• Dynamic content personalization</li>
                    <li>• Trigger-based campaign activation</li>
                    <li>• Cross-channel experience consistency</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Customer Data Orchestration */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-8">Customer Data Orchestration</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Unified Customer Profiles</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Consolidate customer data from multiple touchpoints to create comprehensive profiles that enable precise targeting and personalization across all marketing channels.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Intelligent Segmentation</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Leverage advanced analytics to identify meaningful customer segments based on behavior, preferences, and value potential for targeted campaign delivery.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Dynamic Personalization</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Deliver personalized content and offers that adapt in real-time based on customer interactions and contextual factors to maximize engagement and conversion.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <h3 className="text-2xl font-bold mb-6 text-red-600">Digital Channel Orchestration</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.82 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">Email Marketing</h4>
                    <p className="text-gray-700 text-sm">Personalized email campaigns with behavioral triggers and lifecycle automation</p>
                  </div>

                  <div className="text-center">
                    <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 4V4h8v2m-8 0a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V8a2 2 0 00-2-2" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">Social Media</h4>
                    <p className="text-gray-700 text-sm">Coordinated social campaigns with audience-specific content and engagement tracking</p>
                  </div>

                  <div className="text-center">
                    <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">Digital Advertising</h4>
                    <p className="text-gray-700 text-sm">Programmatic ad campaigns with dynamic creative optimization and cross-platform targeting</p>
                  </div>

                  <div className="text-center">
                    <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">Mobile Engagement</h4>
                    <p className="text-gray-700 text-sm">In-app messaging, push notifications, and location-based marketing campaigns</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Real-Time Performance Tracking */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-8">Real-Time Performance Intelligence</h2>
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">Dynamic Strategy Adjustment</h3>
                    <p className="text-gray-700 mb-4">
                      Monitor campaign performance across all channels in real-time and automatically adjust strategies based on engagement metrics, conversion rates, and customer behavior patterns to optimize results continuously.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm">Live performance dashboards with key metric tracking</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm">Automated alerts for performance thresholds</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm">Predictive analytics for campaign optimization</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">Advanced Analytics Framework</h3>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">Attribution Modeling</h4>
                        <p className="text-gray-600 text-sm">Multi-touch attribution analysis to understand the complete customer journey and optimize channel investment strategies.</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">Cohort Analysis</h4>
                        <p className="text-gray-600 text-sm">Track customer behavior patterns over time to identify trends and optimize retention strategies.</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">Predictive Modeling</h4>
                        <p className="text-gray-600 text-sm">Forecast customer lifetime value, churn probability, and campaign performance to guide strategic decisions.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Integrated Workflows */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-8">Enterprise System Integration</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">CRM & Marketing Automation</h3>
                  <p className="text-gray-700 mb-4">
                    Seamlessly connect marketing campaigns with CRM systems to create unified customer journeys that span from initial awareness through conversion and retention, ensuring consistent messaging and optimal timing.
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Bi-directional data synchronization between platforms</li>
                    <li>• Lead scoring and qualification automation</li>
                    <li>• Sales and marketing alignment workflows</li>
                    <li>• Customer lifecycle stage management</li>
                    <li>• Cross-platform reporting and analytics</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Enterprise Data Integration</h3>
                  <p className="text-gray-700 mb-4">
                    Integrate marketing data with enterprise systems including ERP, customer service platforms, and business intelligence tools to create comprehensive customer insights and enable data-driven decision making.
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Real-time data pipeline integration</li>
                    <li>• Customer service and support data inclusion</li>
                    <li>• Financial and transaction data correlation</li>
                    <li>• Inventory and product information synchronization</li>
                    <li>• Compliance and privacy management integration</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Results & ROI */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-8">Measurable Marketing Impact</h2>
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Increased Conversion Rates</h3>
                    <p className="text-gray-700">
                      Organizations typically see 35-50% improvement in conversion rates through personalized, data-driven marketing campaigns that target the right audiences with relevant messaging.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Reduced Customer Acquisition Cost</h3>
                    <p className="text-gray-700">
                      Intelligent targeting and optimization reduce customer acquisition costs by 25-40% while improving the quality of acquired customers and their lifetime value.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Enhanced Customer Lifetime Value</h3>
                    <p className="text-gray-700">
                      Personalized customer journeys and retention strategies increase customer lifetime value by 30-60% through improved engagement and loyalty programs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-red-50 rounded-lg p-8 border border-red-100">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-red-600 mb-4">Transform Your Marketing Performance</h3>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  Ready to implement intelligent marketing solutions that adapt to customer behavior, optimize performance in real-time, and integrate seamlessly with your enterprise systems? Our marketing experts will design a comprehensive strategy tailored to your business objectives and customer needs.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center bg-red-600 text-white px-8 py-3 rounded-md font-medium hover:bg-red-700 transition-colors"
                >
                  Schedule Marketing Strategy Consultation
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

export default MarketingPage; 


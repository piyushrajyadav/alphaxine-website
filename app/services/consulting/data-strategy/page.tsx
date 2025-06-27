import React from 'react';
import Link from 'next/link';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

const DataStrategyPage = () => {
  return (
    <BackgroundFix>
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-500">
                Data Strategy as a Service
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Build a Smarter, Data-Driven Enterprise
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                At Alphaxine Solutions, we design agile, research-backed data strategies that help businesses harness the full potential of their data. From governance to advanced analytics, our approach ensures your data is secure, scalable, and ready for AI integration.
              </p>
            </div>
          </div>
        </section>

        {/* Core Capabilities Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-4">Core Capabilities</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Our comprehensive data strategy services transform raw information into valuable business assets through structured, scalable approaches.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Data Architecture & Integration</h3>
                <p className="text-gray-700 leading-relaxed">
                  We design robust data architectures that seamlessly integrate disparate data sources, creating unified platforms that support real-time analytics and decision-making across your organization.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Governance & Compliance</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our comprehensive governance frameworks ensure compliance with GDPR, HIPAA, and other regulatory requirements while maintaining data quality, security, and accessibility standards throughout your organization.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">BI & Predictive Analytics Enablement</h3>
                <p className="text-gray-700 leading-relaxed">
                  We establish sophisticated business intelligence and predictive analytics capabilities that transform historical data into forward-looking insights, enabling proactive business strategies and outcomes.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">AI-Ready Data Infrastructure</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our infrastructure designs prepare your data ecosystem for artificial intelligence and machine learning applications, ensuring high-quality, accessible data that powers intelligent automation and insights.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Cloud-Native Data Platforms</h3>
                <p className="text-gray-700 leading-relaxed">
                  We develop cloud-native data platforms that leverage modern technologies for scalability, performance, and cost-effectiveness while maintaining enterprise-grade security and reliability standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Alphaxine Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-4">Why Choose Alphaxine?</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Our data strategy approach combines deep technical expertise with proven business methodologies to deliver sustainable, measurable results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl font-bold">🔍</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-600">Research-Driven Frameworks</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our strategies are built on extensive industry research and proven methodologies, ensuring your data initiatives are grounded in best practices and emerging trends that drive competitive advantage.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 text-2xl font-bold">⚙️</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-600">Scalable Tech Stack</h3>
                <p className="text-gray-700 leading-relaxed">
                  We architect technology solutions that grow with your business, leveraging modern cloud platforms and open-source technologies that provide flexibility and cost-effectiveness over time.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl font-bold">🔐</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-600">Secure & Compliant Design</h3>
                <p className="text-gray-700 leading-relaxed">
                  Security and compliance are embedded into every aspect of our data strategy designs, protecting your organization from risks while meeting regulatory requirements across jurisdictions.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 text-2xl font-bold">📊</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-600">Actionable Insights</h3>
                <p className="text-gray-700 leading-relaxed">
                  We focus on delivering practical, actionable insights that drive immediate business value while building long-term analytical capabilities that support strategic decision-making processes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Transformation Process Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-4">Our Data Transformation Process</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                We follow a structured approach to ensure your data transformation delivers measurable business outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Assessment & Discovery</h3>
                <p className="text-gray-700 leading-relaxed">
                  We conduct comprehensive assessments of your current data landscape, identifying opportunities, challenges, and strategic priorities that align with your business objectives.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Strategy Design & Roadmap</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our experts develop customized data strategies and detailed implementation roadmaps that outline phases, timelines, resources, and success metrics for your transformation journey.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Implementation & Optimization</h3>
                <p className="text-gray-700 leading-relaxed">
                  We guide the implementation of your data strategy, providing ongoing support and optimization to ensure sustainable success and continuous improvement of your data capabilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Ready to Unlock Your Data's Potential?</h2>
              <p className="text-lg mb-8 text-gray-200 leading-relaxed">
                Transform your organization into a data-driven enterprise with strategies that deliver measurable business value. Our experts are ready to help you harness the power of your data for competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Schedule a Data Strategy Consultation
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <a 
                  href="mailto:info@alphaxine.com" 
                  className="inline-flex items-center bg-red-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-800 transition-colors"
                >
                  📧 Let's talk data: info@alphaxine.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </BackgroundFix>
  );
};

export default DataStrategyPage; 


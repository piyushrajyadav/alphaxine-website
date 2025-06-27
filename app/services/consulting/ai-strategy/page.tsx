import React from 'react';
import Link from 'next/link';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

const AIStrategyPage = () => {
  return (
    <BackgroundFix>
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-500">
                AI Strategy as a Service
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed font-semibold">
                Transform Your Business with Intelligent Innovation
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                At Alphaxine Solutions Pvt. Ltd., we help organizations unlock the full potential of Artificial Intelligence through tailored, actionable strategies. Our AI Strategy as a Service (AISaaS) ensures your AI initiatives are aligned with business goals, scalable, and ethically sound.
              </p>
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-4">What We Offer</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Our comprehensive AI strategy services are designed to transform your business through intelligent innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-red-600">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">AI Readiness Assessment</h3>
                <p className="text-gray-700 leading-relaxed">
                  We begin by evaluating your organization's current technological landscape, data infrastructure, and team capabilities to identify where your business stands in the AI journey.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-red-600">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Use Case Identification</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our specialists work closely with your teams to identify high-impact AI applications specific to your industry and business model with clear ROI expectations.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-red-600">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Custom AI Roadmap</h3>
                <p className="text-gray-700 leading-relaxed">
                  We develop detailed implementation roadmaps that outline the step-by-step journey from your current state to AI-powered operations with timeline considerations.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-red-600">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Implementation Support</h3>
                <p className="text-gray-700 leading-relaxed">
                  Beyond strategy development, we provide hands-on support during the implementation phase including vendor selection and pilot project execution.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-red-600">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Ongoing Optimization</h3>
                <p className="text-gray-700 leading-relaxed">
                  AI strategy is not a one-time effort. We provide continuous monitoring and optimization services to ensure your AI systems evolve with your business needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-4">Why Choose Us?</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Our approach combines deep AI expertise with strategic business insight to deliver measurable results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl font-bold">✅</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-600">Strategic Alignment</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our AI strategies are meticulously crafted to align with your core business objectives, ensuring every AI initiative directly contributes to your organizational goals.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl font-bold">✅</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-600">Expert Guidance</h3>
                <p className="text-gray-700 leading-relaxed">
                  Benefit from our team's extensive experience across multiple industries and AI technologies, helping you navigate AI adoption with confidence.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl font-bold">✅</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-600">Ethical AI Practices</h3>
                <p className="text-gray-700 leading-relaxed">
                  We prioritize responsible AI development by embedding ethical considerations into every strategy, ensuring transparency and accountability.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl font-bold">✅</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-600">Scalable Solutions</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our strategies are designed for long-term growth and adaptability, creating flexible frameworks that can scale with your business expansion.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl font-bold">✅</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-600">Industry-Specific Insights</h3>
                <p className="text-gray-700 leading-relaxed">
                  Leverage our deep understanding of sector-specific challenges across Finance, Healthcare, Retail, Manufacturing, and Technology sectors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve Section */}
        <section className="py-20 bg-red-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-4">Industries We Serve</h2>
              <div className="flex flex-wrap justify-center items-center gap-4 text-gray-700 font-semibold text-lg">
                <span className="bg-white px-6 py-3 rounded-lg shadow-md">Finance</span>
                <span className="text-red-600 text-2xl">|</span>
                <span className="bg-white px-6 py-3 rounded-lg shadow-md">Healthcare</span>
                <span className="text-red-600 text-2xl">|</span>
                <span className="bg-white px-6 py-3 rounded-lg shadow-md">Retail</span>
                <span className="text-red-600 text-2xl">|</span>
                <span className="bg-white px-6 py-3 rounded-lg shadow-md">Manufacturing</span>
                <span className="text-red-600 text-2xl">|</span>
                <span className="bg-white px-6 py-3 rounded-lg shadow-md">Technology</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Let's Build Your AI Future</h2>
              <p className="text-lg mb-8 text-gray-200 leading-relaxed">
                Ready to transform your business with intelligent innovation? Contact us for a free consultation and discover how our AI Strategy as a Service can accelerate your digital transformation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  📞 Contact us for a free consultation
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <a 
                  href="mailto:info@alphaxine.com" 
                  className="inline-flex items-center bg-red-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-800 transition-colors"
                >
                  📧 Email: info@alphaxine.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </BackgroundFix>
  );
};

export default AIStrategyPage;

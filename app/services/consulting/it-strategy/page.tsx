import React from 'react';
import Link from 'next/link';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

const ITStrategyPage = () => {
  return (
    <BackgroundFix>
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-500">
                IT Strategy as a Service (ITSaaS)
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Empowering Your Business with Future-Ready Technology Roadmaps
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                At Alphaxine Solutions Pvt. Ltd., we understand that a well-aligned IT strategy is the backbone of sustainable business growth. Our IT Strategy as a Service (ITSaaS) offering is designed to help organizations like yours navigate the complexities of digital transformation, align technology with business goals, and stay ahead in a rapidly evolving tech landscape.
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
                Our comprehensive IT strategy services are designed to transform your technology landscape and drive business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">IT Assessment & Planning</h3>
                <p className="text-gray-800 leading-relaxed">
                  We conduct thorough evaluations of your existing technology infrastructure, identifying gaps and opportunities. Our team examines your current systems, processes, and capabilities to create a comprehensive baseline for strategic planning.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Cloud & Infrastructure Strategy</h3>
                <p className="text-gray-800 leading-relaxed">
                  Our specialists help you navigate the complexities of cloud adoption, hybrid environments, and infrastructure modernization. We design scalable architectures that support your business growth while optimizing costs and performance.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Cybersecurity & Compliance</h3>
                <p className="text-gray-800 leading-relaxed">
                  Security is woven into every aspect of our IT strategy recommendations. We ensure your technology roadmap includes robust security measures and compliance frameworks that protect your organization from emerging threats.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Scalable Tech Roadmaps</h3>
                <p className="text-gray-800 leading-relaxed">
                  We create detailed technology roadmaps that grow with your business. Our strategic plans include implementation phases, resource requirements, and timeline considerations that ensure sustainable technology evolution.
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
                Our approach combines deep technical expertise with strategic business insight to deliver measurable results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl font-bold">✅</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-600">Expert Guidance</h3>
                <p className="text-gray-800 leading-relaxed">
                  Our seasoned IT strategists bring decades of combined experience across industries. We understand the nuances of technology implementation and help you avoid common pitfalls while maximizing opportunities for innovation and growth.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl font-bold">✅</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-600">Business-Driven IT</h3>
                <p className="text-gray-800 leading-relaxed">
                  Every technology recommendation we make is directly tied to your business objectives. We ensure that your IT investments contribute meaningfully to revenue growth, operational efficiency, and competitive positioning in your market.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl font-bold">✅</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-600">Future-Ready Solutions</h3>
                <p className="text-gray-800 leading-relaxed">
                  Our strategies are built to last and adapt. We consider emerging technologies, industry trends, and market dynamics to create IT roadmaps that position your organization for long-term success and sustainable growth.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl font-bold">✅</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-600">Risk-Aware Planning</h3>
                <p className="text-gray-800 leading-relaxed">
                  We identify potential technology risks early and build mitigation strategies into our recommendations. Our approach includes security considerations, compliance requirements, and business continuity planning from the ground up.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl font-bold">✅</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-600">Measurable Outcomes</h3>
                <p className="text-gray-800 leading-relaxed">
                  Every strategy comes with clear success metrics and KPIs. We establish baseline measurements and tracking mechanisms to ensure your IT investments deliver the expected returns and business value.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl font-bold">✅</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-600">Vendor-Neutral Perspective</h3>
                <p className="text-gray-800 leading-relaxed">
                  Our recommendations are based solely on what works best for your organization. We maintain independence from technology vendors, ensuring our advice is objective and focused on your specific needs and constraints.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your IT Strategy?</h2>
              <p className="text-lg mb-8 text-red-100 leading-relaxed">
                Take the first step toward aligning your technology with your business vision. Our IT strategy experts are ready to help you build a roadmap that drives real results and positions your organization for sustained success.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Start Your IT Strategy Journey
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </BackgroundFix>
  );
};

export default ITStrategyPage;
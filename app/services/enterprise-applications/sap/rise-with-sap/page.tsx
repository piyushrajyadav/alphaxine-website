import React from 'react';
import Link from 'next/link';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

const RISEWithSAPPage = () => {
  return (
    <BackgroundFix>
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-500">
                RISE with SAP
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Your Complete Path to Cloud Enterprise Transformation
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Transform your business with confidence using RISE with SAP - a comprehensive offering that simplifies your journey to the cloud. This all-in-one solution eliminates complexity by bundling essential tools, removing guesswork from enterprise planning, and providing everything needed for successful digital transformation at a predictable cost.
              </p>
            </div>
          </div>
        </section>

        {/* What is RISE with SAP Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-4">What is RISE with SAP?</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                RISE with SAP streamlines your cloud adoption journey by providing a comprehensive, integrated solution that accelerates digital transformation while reducing complexity and risk.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 00-2 2v2m0 0V9a2 2 0 012-2h14a2 2 0 012 2v2M7 7V3a2 2 0 012-2h6a2 2 0 012 2v4M7 7H3a2 2 0 00-2 2v8a2 2 0 002 2h18a2 2 0 002-2V9a2 2 0 00-2-2h-4M7 7v10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Unified Solution Bundle</h3>
                <p className="text-gray-800 leading-relaxed">
                  Get all essential tools in one comprehensive package with predictable pricing. No more piecemeal license purchases or complex vendor negotiations - everything you need is included from day one.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Simplified Operations Management</h3>
                <p className="text-gray-800 leading-relaxed">
                  Manage SLAs, operations, and issue resolution through a single point of contact. Eliminate the complexity of managing multiple contracts and vendors with streamlined service delivery.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Accelerated Cloud Adoption</h3>
                <p className="text-gray-800 leading-relaxed">
                  Remove uncertainty from your cloud journey with proven methodologies and pre-configured solutions. Start faster, reduce risk, and achieve results more quickly than traditional implementations.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Flexible Digital Strategy</h3>
                <p className="text-gray-800 leading-relaxed">
                  Choose your starting point and design a transformation strategy that fits your business needs. Whether you're beginning your digital journey or advancing existing initiatives, RISE adapts to your pace.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Five Core Elements Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-4">Five Core Elements for Digital Success</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                RISE with SAP delivers a comprehensive, intelligent, and customer-specific offering built on five essential components that drive successful digital transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">SAP S/4HANA Cloud</h3>
                <p className="text-gray-800 text-sm leading-relaxed">
                  Modern cloud ERP foundation with industry-specific functionality and best practices built-in.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Business Process Intelligence</h3>
                <p className="text-gray-800 text-sm leading-relaxed">
                  Advanced analytics and process mining capabilities to optimize operations continuously.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Technology Cloud Credits</h3>
                <p className="text-gray-800 text-sm leading-relaxed">
                  Flexible cloud credits for integration, extension, and innovation on SAP Business Technology Platform.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9a9 9 0 009-9m-9 9c0 1.657-4.03 3-9 3s-9-1.343-9-3m9-9c0-1.657-4.03-3-9-3s-9 1.343-9 3m9 9v-9" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">SAP Business Network Starter Pack</h3>
                <p className="text-gray-800 text-sm leading-relaxed">
                  Connect seamlessly with suppliers, customers, and partners through the world's largest business network.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Embedded Tools & Services</h3>
                <p className="text-gray-800 text-sm leading-relaxed">
                  Complete toolkit including implementation support, training, and ongoing managed services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SAP S/4HANA Cloud Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-4">SAP S/4HANA Cloud: The Foundation of Innovation</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                As the cornerstone of RISE with SAP, S/4HANA Cloud delivers modular ERP capabilities that transform how you operate, innovate, and compete in today's market.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl font-bold">100x</span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Faster Reporting</h3>
                <p className="text-gray-800 leading-relaxed">
                  Experience dramatic performance improvements with in-memory computing that delivers reports 100 times faster than traditional systems.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Embedded AI Technology</h3>
                <p className="text-gray-800 leading-relaxed">
                  Leverage built-in artificial intelligence capabilities that automate processes, predict outcomes, and optimize decision-making across your enterprise.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Real-time Advanced Analytics</h3>
                <p className="text-gray-800 leading-relaxed">
                  Access instant insights with real-time analytics that provide immediate visibility into business performance and operational metrics.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4M15 7l3 3" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Consumer-Grade User Experience</h3>
                <p className="text-gray-800 leading-relaxed">
                  Enjoy intuitive, modern interfaces that work seamlessly across all devices, increasing user adoption and productivity.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">End-to-End Sustainability</h3>
                <p className="text-gray-800 leading-relaxed">
                  Support your environmental goals with comprehensive sustainability tracking and reporting capabilities built into core business processes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-indigo-600 text-lg font-bold">50%</span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Reduced Data Footprint</h3>
                <p className="text-gray-800 leading-relaxed">
                  Minimize storage requirements and improve system performance with a 50% reduction in data footprint through intelligent data management.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Deployment Options Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-4">Flexible Deployment Options</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Choose from multiple deployment approaches designed to deliver optimal performance, reliability, and scalability for your specific business requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-red-600">
                <h3 className="text-xl font-bold mb-4 text-red-600">SAP-Hosted Cloud</h3>
                <p className="text-gray-800 leading-relaxed mb-4">
                  Leverage SAP's proven cloud infrastructure with enterprise-grade security, compliance, and performance. Benefit from SAP's deep expertise in managing mission-critical business applications.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Managed by SAP experts</li>
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Enterprise-grade security</li>
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Predictable performance</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-blue-600">
                <h3 className="text-xl font-bold mb-4 text-red-600">Hyperscale Cloud Approach</h3>
                <p className="text-gray-800 leading-relaxed mb-4">
                  Deploy on leading hyperscale platforms to maximize Infrastructure-as-a-Service benefits. Achieve exceptional performance, reliability, and scalability while accelerating your path to intelligent enterprise.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Maximum scalability</li>
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Global reach</li>
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Advanced integration options</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Ready to RISE with SAP?</h2>
              <p className="text-lg mb-8 text-red-100 leading-relaxed">
                Transform your business with confidence using the most comprehensive cloud transformation offering available. Start your journey to the intelligent enterprise today with RISE with SAP.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Begin Your Transformation
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

export default RISEWithSAPPage;

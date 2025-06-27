import React from 'react';
import Link from 'next/link';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

const SAPS4HANAPage = () => {
  return (
    <BackgroundFix>
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-500">
                SAP S/4HANA Solutions
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                The Digital Core for Modern Business Operations
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Transform your enterprise with SAP S/4HANA, the intelligent business suite that serves as your organization's digital foundation. Built on advanced in-memory technology and modern design principles, it delivers the simplicity and innovation needed to thrive in today's digital economy.
              </p>
            </div>
          </div>
        </section>

        {/* What is S/4HANA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-6">What is SAP S/4HANA?</h2>
              <p className="text-gray-800 text-lg leading-relaxed mb-8">
                SAP S/4HANA represents the next evolution in enterprise resource planning, functioning as the digital backbone that connects your entire business ecosystem. This comprehensive business suite leverages SAP HANA's powerful in-memory platform and incorporates SAP Fiori's intuitive user experience to deliver unprecedented business agility.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Unlike traditional ERP systems, S/4HANA is engineered to integrate seamlessly with Internet of Things devices, big data analytics, mobile applications, and business networks, creating a unified digital environment that supports real-time decision-making and end-to-end process optimization.
              </p>
            </div>
          </div>
        </section>

        {/* Core Capabilities Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-4">Core Business Capabilities</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                S/4HANA Enterprise Management encompasses all critical business processes, providing a comprehensive foundation for modern enterprise operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Financial Management</h3>
                <p className="text-gray-800 leading-relaxed">
                  Comprehensive finance capabilities including order-to-cash, procure-to-pay processes, and advanced financial planning. Real-time financial insights enable better cash flow management and strategic financial decision-making across your organization.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Manufacturing Operations</h3>
                <p className="text-gray-800 leading-relaxed">
                  Complete plan-to-produce capabilities that optimize manufacturing processes, inventory management, and supply chain coordination. Advanced scheduling and resource planning ensure efficient production workflows and cost optimization.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Human Capital Management</h3>
                <p className="text-gray-800 leading-relaxed">
                  Integrated HR functionality through native SAP SuccessFactors Employee Central integration. Streamline workforce management, talent acquisition, performance evaluation, and employee development programs within a unified platform.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V4a2 2 0 00-2-2H8a2 2 0 00-2 2v2m8 0V6a2 2 0 002 2v10a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Service Management</h3>
                <p className="text-gray-800 leading-relaxed">
                  End-to-end request-to-service processes that enhance customer satisfaction and operational efficiency. Comprehensive service delivery management with integrated customer support, field service management, and service analytics capabilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-4">Why Choose SAP S/4HANA?</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Experience massive simplifications and breakthrough innovations that transform how your business operates in the digital economy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Real-Time Processing</h3>
                <p className="text-gray-800 leading-relaxed">
                  In-memory computing eliminates batch processing delays, providing instant access to current business data. Make informed decisions based on real-time information across all business functions and processes.
                </p>
              </div>

              <div className="text-center bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Modern User Experience</h3>
                <p className="text-gray-800 leading-relaxed">
                  SAP Fiori delivers intuitive, consumer-grade interfaces that work seamlessly across desktop, tablet, and mobile devices. Role-based dashboards and simplified navigation enhance user productivity and adoption rates.
                </p>
              </div>

              <div className="text-center bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Simplified Architecture</h3>
                <p className="text-gray-800 leading-relaxed">
                  Reduced data footprint and streamlined data models eliminate redundancy and complexity. Simplified integration architecture reduces total cost of ownership while improving system performance and maintainability.
                </p>
              </div>

              <div className="text-center bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Advanced Analytics</h3>
                <p className="text-gray-800 leading-relaxed">
                  Embedded analytics and machine learning capabilities provide predictive insights and intelligent automation. Transform raw data into actionable business intelligence that drives strategic decision-making.
                </p>
              </div>

              <div className="text-center bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Cloud-Ready Platform</h3>
                <p className="text-gray-800 leading-relaxed">
                  Designed for cloud deployment with flexible hosting options including on-premise, cloud, and hybrid models. Scalable infrastructure supports business growth while maintaining security and compliance standards.
                </p>
              </div>

              <div className="text-center bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Digital Integration</h3>
                <p className="text-gray-800 leading-relaxed">
                  Native integration with SAP Ariba Network, IoT platforms, and third-party systems creates a comprehensive digital ecosystem. Connect suppliers, customers, and partners through unified business networks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-4">Our S/4HANA Services</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Comprehensive implementation and optimization services to maximize your S/4HANA investment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-red-600">Implementation & Migration</h3>
                <p className="text-gray-800 text-sm leading-relaxed">
                  Complete project management for greenfield implementations and legacy system migrations to S/4HANA.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-red-600">Custom Development</h3>
                <p className="text-gray-800 text-sm leading-relaxed">
                  Tailored application development and integration solutions to meet specific business requirements.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-red-600">Support & Optimization</h3>
                <p className="text-gray-800 text-sm leading-relaxed">
                  Ongoing system support, performance tuning, and continuous improvement services.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-red-600">Training & Change Management</h3>
                <p className="text-gray-800 text-sm leading-relaxed">
                  User training programs and organizational change management to ensure successful adoption.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform with SAP S/4HANA?</h2>
              <p className="text-lg mb-8 text-red-100 leading-relaxed">
                Unlock the full potential of your business with SAP S/4HANA. Our experts are ready to guide you through every step of your digital transformation journey, from initial planning to successful implementation and beyond.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Start Your S/4HANA Journey
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

export default SAPS4HANAPage;

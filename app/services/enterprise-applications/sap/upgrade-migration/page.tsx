import React from 'react';
import Link from 'next/link';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

const SAPUpgradeMigrationPage = () => {
  return (
    <BackgroundFix>
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-500">
                SAP Upgrade & Migration Services
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Seamless Transformation to Next-Generation SAP Solutions
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                In today's rapidly evolving business landscape, staying current with SAP technology is crucial for maintaining competitive advantage. Our comprehensive upgrade and migration services ensure your organization transitions smoothly to the latest SAP innovations while minimizing downtime and maximizing business value.
              </p>
            </div>
          </div>
        </section>

        {/* Business Need Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-4">Why Upgrade Now?</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Market dynamics and technological innovations demand continuous evolution of your SAP infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Regulatory & Market Changes</h3>
                <p className="text-gray-800 leading-relaxed">
                  Business environments change rapidly due to new legislation, market regulations, and compliance requirements. Modern SAP versions provide enhanced capabilities to address these evolving demands while ensuring your organization remains compliant and competitive in the marketplace.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Technology Evolution</h3>
                <p className="text-gray-800 leading-relaxed">
                  Continuous innovation in SAP technology brings powerful new features, enhanced performance, and improved user experiences. Regular upgrades ensure you benefit from the latest capabilities while avoiding the risks associated with legacy system support limitations and security vulnerabilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SAP HANA Migration Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-4">SAP S/4HANA Migration Excellence</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Transform your business operations with real-time insights and streamlined processes through SAP S/4HANA.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Preparation</h3>
                <p className="text-gray-800 text-sm leading-relaxed">
                  Comprehensive assessment and planning phase to evaluate current systems and design migration strategy.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Migration</h3>
                <p className="text-gray-800 text-sm leading-relaxed">
                  Systematic data and process migration with rigorous testing and validation at every step.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-yellow-600 text-xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Post-Migration</h3>
                <p className="text-gray-800 text-sm leading-relaxed">
                  System stabilization, user training, and performance monitoring to ensure smooth operations.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 text-xl font-bold">4</span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Optimization</h3>
                <p className="text-gray-800 text-sm leading-relaxed">
                  Continuous improvement and optimization to maximize business value and system performance.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-red-600 text-center">Migration Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-600 text-xl">⚡</span>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Real-Time Processing</h4>
                  <p className="text-gray-700 text-sm">Experience up to 10x faster processing with in-memory computing capabilities.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-600 text-xl">📊</span>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Enhanced Analytics</h4>
                  <p className="text-gray-700 text-sm">Leverage advanced analytics and machine learning for better business insights.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-600 text-xl">🎯</span>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Simplified Processes</h4>
                  <p className="text-gray-700 text-sm">Streamlined business processes with modern, intuitive user interfaces.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alphaxine's Approach Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-4">Alphaxine's SAP Centre of Excellence</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Our comprehensive approach ensures successful migration with minimal business disruption and maximum value realization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Technical Assessment</h3>
                <p className="text-gray-800 text-sm leading-relaxed">
                  Comprehensive evaluation of your current landscape, identifying potential risks and challenges while creating a detailed roadmap for successful implementation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Functional Assessment</h3>
                <p className="text-gray-800 text-sm leading-relaxed">
                  Strategic review of current business processes and implementation of new functionalities to ensure maximum value returns from upgraded system capabilities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Solution Architecture</h3>
                <p className="text-gray-800 text-sm leading-relaxed">
                  Deep-dive analysis of your BI infrastructure to create comprehensive solution blueprints with detailed technical and business requirements.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">System Migration</h3>
                <p className="text-gray-800 text-sm leading-relaxed">
                  Seamless migration from source to target environment with comprehensive testing protocols to ensure minimal business impact throughout the process.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Platform Migration</h3>
                <p className="text-gray-800 text-sm leading-relaxed">
                  Advanced platform migration services covering both standard and high-availability environments with robust disaster recovery capabilities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Implementation Services</h3>
                <p className="text-gray-800 text-sm leading-relaxed">
                  End-to-end implementation including infrastructure integration, data modeling, HANA structure development, and front-end solution delivery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Steps Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-4">Our Migration Success Framework</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Proven methodology for successful SAP transformations with minimal risk and maximum business value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-red-600">Business Case</h3>
                <p className="text-gray-800 text-sm">Develop comprehensive business justification and ROI analysis.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-red-600">Assessment</h3>
                <p className="text-gray-800 text-sm">Conduct thorough technical and functional readiness evaluation.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-red-600">Process Design</h3>
                <p className="text-gray-800 text-sm">Map out detailed migration process and implementation strategy.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-red-600">Execute</h3>
                <p className="text-gray-800 text-sm">Implement migration with continuous monitoring and testing.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-red-600">Long-term Success</h3>
                <p className="text-gray-800 text-sm">Ensure sustained performance and continuous optimization.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your SAP Landscape?</h2>
              <p className="text-lg mb-8 text-red-100 leading-relaxed">
                Partner with Alphaxine's SAP Centre of Excellence for your digital transformation journey. Our experts ensure seamless migration with minimal downtime and maximum business value realization.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Start Your SAP Migration
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

export default SAPUpgradeMigrationPage;

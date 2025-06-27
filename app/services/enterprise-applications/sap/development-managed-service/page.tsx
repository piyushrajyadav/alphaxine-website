import React from 'react';
import Link from 'next/link';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

const SAPDevelopmentManagedServicePage = () => {
  return (
    <BackgroundFix>
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-500">
                SAP Development & Managed Services
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Tailored Solutions and Comprehensive Support for Your SAP Landscape
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Transform your SAP environment with our expert custom development services and comprehensive managed support. We deliver specialized solutions that align perfectly with your unique business requirements while ensuring optimal system performance and reliability.
              </p>
            </div>
          </div>
        </section>

        {/* Custom Development Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-4">SAP Custom Development Excellence</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                When standard SAP functionality needs enhancement, our experienced development team creates tailored solutions that seamlessly integrate with your existing infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Why Custom Development Matters</h3>
                <p className="text-gray-800 leading-relaxed mb-4">
                  While standard configurations address many business needs, organizations often require specialized functionality that goes beyond out-of-the-box capabilities. Our custom development services bridge these gaps with precision-engineered solutions.
                </p>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Develop missing functionalities not covered by standard SAP software</li>
                  <li>• Create enhanced applications for improved operational efficiency</li>
                  <li>• Design complex reports, validations, and accounting forms</li>
                  <li>• Build robust interfaces and third-party integrations</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Development Capabilities</h3>
                <p className="text-gray-800 leading-relaxed mb-4">
                  Our development expertise spans the complete SAP technology stack, enabling us to modernize legacy systems and create innovative solutions that evolve with your business requirements.
                </p>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Legacy system adaptation and modernization</li>
                  <li>• Comprehensive code reviews and optimization</li>
                  <li>• Enterprise coding standards establishment</li>
                  <li>• Cross-platform application development</li>
                </ul>
              </div>
            </div>

            {/* Development Technologies */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-red-600 text-center">Our Development Technologies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-red-600 mb-2">ABAP</h4>
                  <p className="text-gray-700 text-sm">Advanced Business Application Programming for core SAP development</p>
                </div>

                <div className="text-center">
                  <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-red-600 mb-2">SAP Fiori</h4>
                  <p className="text-gray-700 text-sm">Consumer-grade user experience applications across all devices</p>
                </div>

                <div className="text-center">
                  <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-7 h-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-red-600 mb-2">SAPUI5</h4>
                  <p className="text-gray-700 text-sm">Responsive enterprise applications compatible across platforms</p>
                </div>

                <div className="text-center">
                  <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-7 h-7 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-red-600 mb-2">SAP PI/PO</h4>
                  <p className="text-gray-700 text-sm">Process Integration for seamless SAP and third-party harmonization</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Managed Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-4">Comprehensive SAP Managed Services</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Our managed services portfolio ensures your SAP environment operates at peak performance with maximum reliability and security.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">SAP Hosting Services</h3>
                <p className="text-gray-800 text-sm leading-relaxed mb-3">
                  Complete hosting solutions with comprehensive SAP Basis support, managed security, and hosted S/4HANA environments.
                </p>
                <ul className="text-gray-700 text-xs space-y-1">
                  <li>• Infrastructure management and optimization</li>
                  <li>• Security monitoring and compliance</li>
                  <li>• Performance tuning and capacity planning</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Remote Managed Services</h3>
                <p className="text-gray-800 text-sm leading-relaxed mb-3">
                  End-to-end remote management including database administration, system upgrades, and change management.
                </p>
                <ul className="text-gray-700 text-xs space-y-1">
                  <li>• 24/7 system monitoring and support</li>
                  <li>• Incident and problem management</li>
                  <li>• Database and OS administration</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 8l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Service Delivery Management</h3>
                <p className="text-gray-800 text-sm leading-relaxed mb-3">
                  Coordinated service delivery with platinum-level support, hypercare services, and comprehensive reporting.
                </p>
                <ul className="text-gray-700 text-xs space-y-1">
                  <li>• Service level agreement management</li>
                  <li>• Single point of contact coordination</li>
                  <li>• Value-added consulting services</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">SAP Maintenance</h3>
                <p className="text-gray-800 text-sm leading-relaxed mb-3">
                  Proactive maintenance support with software updates, early watch alerts, and ongoing issue resolution.
                </p>
                <ul className="text-gray-700 text-xs space-y-1">
                  <li>• Regular system health checks</li>
                  <li>• Preventive maintenance planning</li>
                  <li>• Access to SAP Service Marketplace</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Application Managed Services</h3>
                <p className="text-gray-800 text-sm leading-relaxed mb-3">
                  Complete application lifecycle management including support, testing, optimization, and enhancement services.
                </p>
                <ul className="text-gray-700 text-xs space-y-1">
                  <li>• Break/fix support and testing</li>
                  <li>• Performance optimization</li>
                  <li>• Application rollouts and upgrades</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Security & Business Continuity</h3>
                <p className="text-gray-800 text-sm leading-relaxed mb-3">
                  Comprehensive security management and business continuity planning with high availability and disaster recovery.
                </p>
                <ul className="text-gray-700 text-xs space-y-1">
                  <li>• Security strategy and planning</li>
                  <li>• Vulnerability assessment</li>
                  <li>• Backup and disaster recovery</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-4">Why Choose Our Managed Services?</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Partner with certified SAP professionals who deliver exceptional service quality and measurable business value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center bg-white p-6 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Expert Team</h3>
                <p className="text-gray-800 text-sm leading-relaxed">
                  SAP-certified professionals with extensive experience in system orchestration and management.
                </p>
              </div>

              <div className="text-center bg-white p-6 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Quality SLAs</h3>
                <p className="text-gray-800 text-sm leading-relaxed">
                  Comprehensive service level agreements ensuring consistent quality and performance standards.
                </p>
              </div>

              <div className="text-center bg-white p-6 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Reduced TCO</h3>
                <p className="text-gray-800 text-sm leading-relaxed">
                  Streamlined operations and optimized resource utilization significantly reduce total cost of ownership.
                </p>
              </div>

              <div className="text-center bg-white p-6 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Enhanced Scalability</h3>
                <p className="text-gray-800 text-sm leading-relaxed">
                  Flexible service delivery models that scale with your business growth and changing requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Optimize Your SAP Investment</h2>
              <p className="text-lg mb-8 text-red-100 leading-relaxed">
                Focus on your core business while we manage your SAP landscape. Our development and managed services teams are ready to streamline your operations, enhance scalability, and achieve your strategic objectives.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Partner with Our Experts
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

export default SAPDevelopmentManagedServicePage;

import React from 'react';
import Link from 'next/link';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

const MicrosoftPage = () => {
  return (
    <BackgroundFix>
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-500">
                Microsoft Solutions & Services
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Empowering Digital Transformation with Microsoft Technologies
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Unlock your organization's full potential with our comprehensive Microsoft solutions. From Dynamics 365 and Office 365 to Azure cloud services, we enable productivity, drive cloud adoption, and deliver powerful business intelligence that transforms how you work and compete.
              </p>
            </div>
          </div>
        </section>

        {/* Microsoft Partnership Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Certified Microsoft Partner</h2>
                <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  As a certified Microsoft partner, Alphaxine Solutions brings deep expertise across the entire Microsoft ecosystem. Our partnership enables us to deliver enterprise-grade solutions that seamlessly integrate with your existing infrastructure while providing the scalability and innovation your business demands.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-red-600">Certified Expertise</h3>
                  <p className="text-gray-800 leading-relaxed">
                    Our team holds Microsoft certifications across Dynamics 365, Azure, and Office 365, ensuring expert implementation and support for your critical business systems.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-red-600">Proven Results</h3>
                  <p className="text-gray-800 leading-relaxed">
                    Successfully delivered 100+ Microsoft implementations, helping organizations achieve measurable improvements in productivity, efficiency, and business performance.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-red-600">End-to-End Support</h3>
                  <p className="text-gray-800 leading-relaxed">
                    From initial planning and implementation to ongoing support and optimization, we provide comprehensive services throughout your Microsoft journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Microsoft Dynamics 365 Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Microsoft Dynamics 365 Solutions</h2>
                <p className="text-gray-700 max-w-3xl mx-auto">
                  Transform your business operations with Dynamics 365, the comprehensive business application platform that unifies CRM and ERP capabilities to drive intelligent decision-making and operational excellence.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Dynamics 365 Sales</h3>
                  <p className="text-gray-800 text-sm leading-relaxed mb-3">
                    Accelerate sales performance with intelligent insights, automated processes, and comprehensive customer relationship management.
                  </p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Lead and opportunity management</li>
                    <li>• Sales forecasting and analytics</li>
                    <li>• Customer engagement automation</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Dynamics 365 Customer Service</h3>
                  <p className="text-gray-800 text-sm leading-relaxed mb-3">
                    Deliver exceptional customer experiences with omnichannel support, knowledge management, and AI-powered insights.
                  </p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Case and ticket management</li>
                    <li>• Knowledge base integration</li>
                    <li>• Customer satisfaction tracking</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Dynamics 365 Finance</h3>
                  <p className="text-gray-800 text-sm leading-relaxed mb-3">
                    Streamline financial operations with comprehensive accounting, budgeting, and financial reporting capabilities.
                  </p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• General ledger and accounting</li>
                    <li>• Budgeting and forecasting</li>
                    <li>• Financial reporting and analytics</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Dynamics 365 Supply Chain</h3>
                  <p className="text-gray-800 text-sm leading-relaxed mb-3">
                    Optimize supply chain operations with advanced planning, inventory management, and manufacturing capabilities.
                  </p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Inventory and warehouse management</li>
                    <li>• Production planning and control</li>
                    <li>• Procurement and sourcing</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Dynamics 365 Human Resources</h3>
                  <p className="text-gray-800 text-sm leading-relaxed mb-3">
                    Empower your workforce with comprehensive HR management, talent acquisition, and employee development tools.
                  </p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Employee lifecycle management</li>
                    <li>• Performance and compensation</li>
                    <li>• Learning and development</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Business Intelligence & Analytics</h3>
                  <p className="text-gray-800 text-sm leading-relaxed mb-3">
                    Transform data into actionable insights with integrated analytics, reporting, and AI-powered recommendations.
                  </p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Real-time dashboards and reports</li>
                    <li>• Predictive analytics and forecasting</li>
                    <li>• KPI monitoring and alerts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office 365 Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Microsoft Office 365 & Productivity Solutions</h2>
                <p className="text-gray-700 max-w-3xl mx-auto">
                  Enhance collaboration and productivity with Office 365's comprehensive suite of cloud-based applications and services designed to enable modern work experiences and seamless team collaboration.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-red-600">Enhanced Collaboration</h3>
                  <p className="text-gray-800 leading-relaxed mb-4">
                    Enable seamless teamwork with Microsoft Teams, SharePoint, and OneDrive, providing integrated communication, file sharing, and project collaboration capabilities that connect your entire organization.
                  </p>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Real-time document collaboration and co-authoring</li>
                    <li>• Integrated video conferencing and messaging</li>
                    <li>• Centralized document management and version control</li>
                    <li>• Cross-platform accessibility and mobile productivity</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-red-600">Enterprise Security & Compliance</h3>
                  <p className="text-gray-800 leading-relaxed mb-4">
                    Protect your organization with advanced security features, compliance tools, and data governance capabilities built into Office 365, ensuring your business data remains secure and compliant with industry regulations.
                  </p>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Advanced threat protection and email security</li>
                    <li>• Multi-factor authentication and identity management</li>
                    <li>• Data loss prevention and compliance monitoring</li>
                    <li>• Information governance and retention policies</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-red-600 text-center">Office 365 Core Applications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-7 h-7 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">Microsoft Teams</h4>
                    <p className="text-gray-700 text-sm">Unified communication and collaboration platform for chat, meetings, and calls</p>
                  </div>

                  <div className="text-center">
                    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">SharePoint Online</h4>
                    <p className="text-gray-700 text-sm">Intelligent content management and team collaboration sites</p>
                  </div>

                  <div className="text-center">
                    <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-7 h-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">Exchange Online</h4>
                    <p className="text-gray-700 text-sm">Enterprise email, calendar, and contact management solution</p>
                  </div>

                  <div className="text-center">
                    <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">OneDrive for Business</h4>
                    <p className="text-gray-700 text-sm">Secure cloud storage and file synchronization for business users</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Azure Cloud Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Microsoft Azure Cloud Services</h2>
                <p className="text-gray-700 max-w-3xl mx-auto">
                  Accelerate your cloud journey with Azure's comprehensive platform of cloud services, enabling scalable infrastructure, application modernization, and digital transformation that drives business innovation and growth.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Cloud Migration & Modernization</h3>
                  <p className="text-gray-800 text-sm leading-relaxed mb-3">
                    Seamlessly migrate your applications and infrastructure to Azure with minimal disruption and maximum efficiency.
                  </p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Assessment and migration planning</li>
                    <li>• Application modernization strategies</li>
                    <li>• Hybrid cloud architecture design</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Infrastructure as a Service (IaaS)</h3>
                  <p className="text-gray-800 text-sm leading-relaxed mb-3">
                    Scalable virtual machines, storage, and networking solutions that provide the foundation for your cloud infrastructure.
                  </p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Virtual machines and compute resources</li>
                    <li>• Storage solutions and backup services</li>
                    <li>• Network configuration and security</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Platform as a Service (PaaS)</h3>
                  <p className="text-gray-800 text-sm leading-relaxed mb-3">
                    Accelerate application development with managed platform services that handle infrastructure complexities.
                  </p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Azure App Service and web applications</li>
                    <li>• Database services and data platforms</li>
                    <li>• Development and deployment tools</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Data & Analytics</h3>
                  <p className="text-gray-800 text-sm leading-relaxed mb-3">
                    Transform your data into insights with Azure's comprehensive data platform and analytics services.
                  </p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Azure SQL Database and data warehousing</li>
                    <li>• Power BI integration and reporting</li>
                    <li>• Machine learning and AI services</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Security & Compliance</h3>
                  <p className="text-gray-800 text-sm leading-relaxed mb-3">
                    Protect your cloud infrastructure with enterprise-grade security features and compliance capabilities.
                  </p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Azure Security Center and monitoring</li>
                    <li>• Identity and access management</li>
                    <li>• Compliance and governance tools</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">DevOps & Automation</h3>
                  <p className="text-gray-800 text-sm leading-relaxed mb-3">
                    Streamline development and deployment processes with Azure DevOps and automation tools.
                  </p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• CI/CD pipeline implementation</li>
                    <li>• Infrastructure as Code (IaC)</li>
                    <li>• Monitoring and performance optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Value Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Delivering Measurable Business Value</h2>
                <p className="text-gray-700 max-w-3xl mx-auto">
                  Our Microsoft solutions enable organizations to achieve significant improvements in productivity, efficiency, and innovation while reducing costs and complexity.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Increased Productivity</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Empower teams with modern collaboration tools that enhance productivity by up to 40% through streamlined workflows and communication.
                  </p>
                </div>

                <div className="text-center bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Cost Optimization</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Reduce IT infrastructure costs by 25-35% through cloud adoption and optimized licensing strategies.
                  </p>
                </div>

                <div className="text-center bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Data-Driven Insights</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Make informed decisions with real-time analytics and business intelligence that provide actionable insights across all operations.
                  </p>
                </div>

                <div className="text-center bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Scalable Growth</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Scale your technology infrastructure seamlessly as your business grows, with flexible cloud solutions that adapt to changing needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Transform Your Business with Microsoft</h2>
              <p className="text-lg mb-8 text-red-100 leading-relaxed">
                Ready to unlock the full potential of Microsoft technologies? Our certified experts are here to guide your digital transformation journey with Dynamics 365, Office 365, and Azure solutions that drive real business results.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Start Your Microsoft Journey
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

export default MicrosoftPage; 


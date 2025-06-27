import React from 'react';
import Link from 'next/link';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

const ERPAssessmentPage = () => {
  return (
    <BackgroundFix>
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-500">
                ERP Assessment Services
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Optimize Your Enterprise Systems for Performance and Growth
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                At Alphaxine Solutions Pvt. Ltd., we help organizations evaluate and enhance their ERP systems to ensure they support business goals, scale efficiently, and deliver measurable value. Our ERP Assessment service provides a comprehensive review of your current ERP environment, identifying gaps, inefficiencies, and opportunities for improvement.
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
                Our comprehensive ERP assessment services provide deep insights into your enterprise systems, delivering actionable recommendations for optimization and growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h1m-1 4h1m-1 4h1m-5-8h1m-1 4h1m-1 4h1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Current System Evaluation</h3>
                <p className="text-gray-700 leading-relaxed">
                  We conduct thorough evaluations of your existing ERP systems, analyzing performance metrics, user satisfaction, and alignment with business processes to establish a comprehensive baseline for improvement.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Process & Workflow Analysis</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our experts analyze your business processes and workflows to identify bottlenecks, redundancies, and areas where ERP optimization can drive significant operational improvements and efficiency gains.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Technology Fit & Scalability Review</h3>
                <p className="text-gray-700 leading-relaxed">
                  We assess your current ERP technology stack's ability to meet future business demands, evaluating scalability, integration capabilities, and alignment with emerging technology trends.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Vendor & Platform Recommendations</h3>
                <p className="text-gray-700 leading-relaxed">
                  Based on our assessment findings, we provide objective recommendations for ERP vendors and platforms that best align with your business requirements, budget, and strategic objectives.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Upgrade & Migration Planning</h3>
                <p className="text-gray-700 leading-relaxed">
                  We develop comprehensive upgrade and migration strategies that minimize business disruption while maximizing the value of your ERP investment through careful planning and phased implementation approaches.
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
                Our ERP assessment approach combines deep technical knowledge with proven business methodologies to deliver insights that drive real value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl font-bold">✅</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-600">Industry-Specific ERP Expertise</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our team brings deep expertise across multiple industries and ERP platforms, ensuring assessments are tailored to your specific sector requirements and business context for maximum relevance.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl font-bold">✅</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-600">Data-Driven Assessment Models</h3>
                <p className="text-gray-700 leading-relaxed">
                  We utilize proven assessment frameworks and data analytics to provide objective, measurable insights into your ERP performance, ensuring recommendations are based on facts rather than assumptions.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl font-bold">✅</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-600">Functional & Technical Insights</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our assessments cover both functional business requirements and technical architecture considerations, providing a holistic view that addresses operational needs and technology capabilities.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl font-bold">✅</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-600">Risk & Compliance Evaluation</h3>
                <p className="text-gray-700 leading-relaxed">
                  We identify potential risks and compliance gaps in your current ERP environment, providing strategies to mitigate these issues and ensure your systems meet regulatory requirements.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl font-bold">✅</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-600">Strategic Roadmap Delivery</h3>
                <p className="text-gray-700 leading-relaxed">
                  Every assessment culminates in a detailed strategic roadmap with clear priorities, timelines, and success metrics that guide your ERP optimization journey from assessment to implementation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Assessment Process Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-4">Our ERP Assessment Process</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                We follow a systematic approach to ensure comprehensive evaluation and actionable recommendations for your ERP environment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Discovery & Planning</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Initial stakeholder interviews and documentation review to understand current state and objectives.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">System Analysis</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Comprehensive evaluation of technical architecture, performance, and functional capabilities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Gap Identification</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Detailed analysis of gaps between current capabilities and business requirements.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Recommendations</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Strategic recommendations with implementation roadmap and success metrics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your ERP Systems?</h2>
              <p className="text-lg mb-8 text-gray-200 leading-relaxed">
                Unlock the full potential of your enterprise systems with our comprehensive ERP assessment services. Our experts are ready to help you identify opportunities for improvement and create a roadmap for success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Schedule Your ERP Assessment
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <a 
                  href="mailto:info@alphaxine.com" 
                  className="inline-flex items-center bg-red-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-800 transition-colors"
                >
                  📧 Assess your ERP today: info@alphaxine.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </BackgroundFix>
  );
};

export default ERPAssessmentPage; 


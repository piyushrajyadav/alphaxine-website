import React from 'react';
import Link from 'next/link';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

const OutsourcingAssessmentPage = () => {
  return (
    <BackgroundFix>
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-500">
                Outsourcing & Supplier Assessment
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Strategic Evaluation and Optimization of Your Outsourcing Partnerships
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Transform your outsourcing approach with comprehensive supplier assessments that enhance operational efficiency, reduce costs, and strengthen vendor relationships for sustainable business growth.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Optimizing Your Outsourcing Strategy</h2>
                <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  In today's competitive business environment, effective outsourcing strategies can be the difference between operational excellence and missed opportunities. Our comprehensive outsourcing and supplier assessment services help organizations evaluate their current partnerships, identify optimization opportunities, and build stronger vendor relationships that drive measurable results.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-red-600">Strategic Outsourcing Evaluation</h3>
                  <p className="text-gray-800 leading-relaxed mb-4">
                    We conduct thorough assessments of your current outsourcing arrangements to identify areas for improvement, cost optimization opportunities, and strategic alignment gaps that may be limiting your business potential.
                  </p>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Current state analysis and performance benchmarking</li>
                    <li>• Cost-benefit evaluation of existing partnerships</li>
                    <li>• Strategic alignment assessment with business objectives</li>
                    <li>• Identification of optimization opportunities</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-red-600">Supplier Relationship Enhancement</h3>
                  <p className="text-gray-800 leading-relaxed mb-4">
                    Our expert consultants help you build stronger, more productive relationships with your suppliers through improved communication frameworks, performance management systems, and collaborative governance structures.
                  </p>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Supplier performance monitoring and evaluation</li>
                    <li>• Communication and collaboration improvement</li>
                    <li>• Contract optimization and renegotiation support</li>
                    <li>• Long-term partnership development strategies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Comprehensive Assessment Services</h2>
                <p className="text-gray-700 max-w-3xl mx-auto">
                  Our structured approach to outsourcing and supplier assessment ensures thorough evaluation and actionable insights for improved business outcomes.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Outsourcing Strategy Development</h3>
                  <p className="text-gray-800 text-sm leading-relaxed mb-3">
                    Develop comprehensive outsourcing strategies that align with your business objectives and maximize operational efficiency.
                  </p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Strategic outsourcing roadmap creation</li>
                    <li>• Core vs. non-core function analysis</li>
                    <li>• Market opportunity assessment</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Vendor Evaluation Framework</h3>
                  <p className="text-gray-800 text-sm leading-relaxed mb-3">
                    Establish robust evaluation criteria and selection processes to identify the most suitable suppliers for your business needs.
                  </p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Comprehensive vendor scoring models</li>
                    <li>• Risk assessment methodologies</li>
                    <li>• Performance benchmarking standards</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Cost Optimization Analysis</h3>
                  <p className="text-gray-800 text-sm leading-relaxed mb-3">
                    Identify cost reduction opportunities while maintaining service quality through detailed financial analysis and benchmarking.
                  </p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Total cost of ownership analysis</li>
                    <li>• Market rate benchmarking</li>
                    <li>• Value engineering opportunities</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Contract & SLA Management</h3>
                  <p className="text-gray-800 text-sm leading-relaxed mb-3">
                    Optimize contract terms and service level agreements to ensure favorable conditions and clear performance expectations.
                  </p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Contract review and optimization</li>
                    <li>• SLA definition and monitoring</li>
                    <li>• Performance penalty frameworks</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Risk Assessment & Mitigation</h3>
                  <p className="text-gray-800 text-sm leading-relaxed mb-3">
                    Identify and address potential risks in your outsourcing arrangements to protect business continuity and performance.
                  </p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Operational risk evaluation</li>
                    <li>• Financial stability assessment</li>
                    <li>• Business continuity planning</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Performance Enhancement</h3>
                  <p className="text-gray-800 text-sm leading-relaxed mb-3">
                    Implement performance improvement initiatives that enhance supplier delivery and drive better business outcomes.
                  </p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Performance monitoring systems</li>
                    <li>• Continuous improvement programs</li>
                    <li>• Service delivery optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Assessment Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Our Assessment Methodology</h2>
                <p className="text-gray-700 max-w-3xl mx-auto">
                  We follow a proven, systematic approach to evaluate your outsourcing arrangements and supplier relationships for maximum impact.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-red-600 font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Discovery & Analysis</h3>
                  <p className="text-gray-700 text-sm">
                    Comprehensive review of current outsourcing arrangements, contracts, and supplier performance data.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-red-600 font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Gap Assessment</h3>
                  <p className="text-gray-700 text-sm">
                    Identification of performance gaps, cost inefficiencies, and opportunities for improvement across all supplier relationships.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-red-600 font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Strategic Recommendations</h3>
                  <p className="text-gray-700 text-sm">
                    Development of actionable recommendations for optimization, including cost reduction and performance enhancement strategies.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-red-600 font-bold text-xl">4</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Implementation Support</h3>
                  <p className="text-gray-700 text-sm">
                    Ongoing support to implement recommendations and monitor progress toward improved outsourcing outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Benefits of Professional Assessment</h2>
                <p className="text-gray-700 max-w-3xl mx-auto">
                  Partnering with our expert consultants delivers measurable improvements across your entire outsourcing portfolio.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Cost Reduction</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Achieve significant cost savings through contract optimization, performance improvements, and strategic vendor negotiations.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Performance Enhancement</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Improve supplier performance through better governance, clear expectations, and continuous monitoring frameworks.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.602-4.777l1.06 1.06A9 9 0 1110.5 3.697l1.06 1.06" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Risk Mitigation</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Reduce operational, financial, and compliance risks through comprehensive supplier assessment and monitoring.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Stronger Partnerships</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Build more collaborative and productive relationships with suppliers that support long-term business success.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Operational Excellence</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Streamline operations and improve service delivery through optimized outsourcing strategies and governance.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Strategic Alignment</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Ensure your outsourcing arrangements support and accelerate your broader business objectives and growth plans.
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
              <h2 className="text-3xl font-bold mb-6">Transform Your Outsourcing Performance</h2>
              <p className="text-lg mb-8 text-red-100 leading-relaxed">
                Ready to optimize your supplier relationships and achieve better outsourcing outcomes? Our expert consultants are here to help you evaluate, enhance, and maximize the value of your outsourcing investments.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Schedule Your Assessment
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

export default OutsourcingAssessmentPage; 


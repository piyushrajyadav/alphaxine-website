import React from 'react';

const BPOPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Business Process Outsourcing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Streamline operations and reduce costs while your organization focuses on strategic growth initiatives
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Overview */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-8">Strategic Business Process Outsourcing</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-700 mb-6">
                    Organizations today face mounting pressure to optimize operational efficiency while controlling costs. Our comprehensive BPO solutions enable companies to delegate non-core functions to specialized teams, allowing internal resources to concentrate on revenue-generating activities and strategic business development.
                  </p>
                  <p className="text-gray-700">
                    We handle complex business processes with proven methodologies, industry-standard tools, and experienced professionals who understand the nuances of modern business operations across various sectors.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Advantages</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      Significant cost reduction in operational expenses
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      Scalable workforce based on business demands
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      Enhanced focus on core business competencies
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      Access to specialized skills and technologies
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technology Outsourcing */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-8">Technology Outsourcing Services</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Application Management</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Complete lifecycle management of business applications including maintenance, support, enhancement, and modernization of legacy systems.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Enterprise application support and maintenance</li>
                    <li>• Custom software development and integration</li>
                    <li>• Application performance monitoring and optimization</li>
                    <li>• Legacy system modernization initiatives</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Infrastructure Services</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Comprehensive IT infrastructure management covering servers, networks, databases, and cloud environments with 24/7 monitoring and support.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Server administration and network management</li>
                    <li>• Database administration and backup services</li>
                    <li>• Cloud infrastructure setup and optimization</li>
                    <li>• Security monitoring and incident response</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Process Outsourcing */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-8">Process Outsourcing Solutions</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">HRMS & Workforce Management</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    End-to-end human resource management services covering recruitment, employee lifecycle management, performance tracking, and compliance reporting.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Talent acquisition and onboarding processes</li>
                    <li>• Employee data management and record keeping</li>
                    <li>• Performance evaluation and review cycles</li>
                    <li>• Benefits administration and compliance tracking</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Payroll & Financial Processing</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Accurate and timely payroll processing with comprehensive financial operations including accounts payable, receivable, and expense management.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Multi-location payroll processing and tax filing</li>
                    <li>• Invoice processing and vendor payment management</li>
                    <li>• Expense report processing and reimbursements</li>
                    <li>• Financial reporting and regulatory compliance</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Benefits */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-8">Proven Business Impact</h2>
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost Optimization</h3>
                    <p className="text-gray-600">
                      Organizations typically achieve 25-40% reduction in operational costs while maintaining or improving service quality standards.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Enhanced Scalability</h3>
                    <p className="text-gray-600">
                      Flexible resource allocation allows rapid scaling during peak periods without the overhead of permanent staff expansion.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategic Focus</h3>
                    <p className="text-gray-600">
                      Leadership teams can dedicate more time to strategic planning, innovation, and core business growth initiatives.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-red-50 rounded-lg p-8 border border-red-100">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-red-600 mb-4">Transform Your Operations</h3>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  Partner with us to identify opportunities for operational efficiency, cost reduction, and strategic growth through tailored BPO solutions.
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center bg-red-600 text-white px-8 py-3 rounded-md font-medium hover:bg-red-700 transition-colors"
                >
                  Discuss Your Requirements
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default BPOPage; 


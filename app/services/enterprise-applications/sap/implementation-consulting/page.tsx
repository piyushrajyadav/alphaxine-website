import React from 'react';

const SAPImplementationConsultingPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-500">
              SAP Implementation & Consulting
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Transform your business with end-to-end SAP implementation services that deliver measurable results and sustainable growth
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Introduction */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-red-600 mb-6">
            Your Strategic SAP Implementation Partner
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Implementing SAP is more than just installing software—it's about transforming your business processes 
            to achieve operational excellence. Our comprehensive SAP implementation and consulting services combine 
            deep technical expertise with strategic business insight to deliver solutions that drive real value.
          </p>
          <p className="text-lg text-gray-700">
            With our proven methodologies, experienced consultants, and industry-specific knowledge, we guide 
            organizations through every phase of their SAP journey, from initial planning to post-implementation 
            optimization and support.
          </p>
        </div>

        {/* Implementation Approach */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-red-600 mb-8">
            Our Implementation Methodology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg className="w-10 h-10 text-red-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <h3 className="text-xl font-semibold text-red-600">Discovery & Planning</h3>
              </div>
              <p className="text-gray-600">
                Comprehensive assessment of current processes, requirements gathering, and strategic roadmap development 
                aligned with your business objectives.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg className="w-10 h-10 text-red-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                </svg>
                <h3 className="text-xl font-semibold text-red-600">Design & Configuration</h3>
              </div>
              <p className="text-gray-600">
                System design, process optimization, and configuration based on SAP best practices and your 
                specific business requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg className="w-10 h-10 text-red-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-xl font-semibold text-red-600">Development & Testing</h3>
              </div>
              <p className="text-gray-600">
                Custom development, system integration, comprehensive testing protocols, and user acceptance 
                testing to ensure quality delivery.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg className="w-10 h-10 text-red-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                <h3 className="text-xl font-semibold text-red-600">Data Migration</h3>
              </div>
              <p className="text-gray-600">
                Secure and accurate migration of legacy data with validation, cleansing, and reconciliation 
                to ensure data integrity in your new SAP system.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg className="w-10 h-10 text-red-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <h3 className="text-xl font-semibold text-red-600">Training & Change Management</h3>
              </div>
              <p className="text-gray-600">
                Comprehensive user training programs and change management strategies to ensure smooth 
                adoption and maximize return on investment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg className="w-10 h-10 text-red-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h3 className="text-xl font-semibold text-red-600">Go-Live & Support</h3>
              </div>
              <p className="text-gray-600">
                Dedicated go-live support, hypercare services, and ongoing optimization to ensure successful 
                production deployment and continuous improvement.
              </p>
            </div>
          </div>
        </div>

        {/* Core Implementation Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-red-600 mb-8">
            Comprehensive Implementation Services
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-red-600 mb-4">SAP ERP Implementation</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Complete FI/CO (Finance & Controlling) module implementation
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  MM (Materials Management) and procurement optimization
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  SD (Sales & Distribution) and customer management
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  PP (Production Planning) and manufacturing execution
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  HR (Human Resources) and payroll management
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Integration with existing systems and third-party applications
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-red-600 mb-4">SAP S/4HANA Implementation</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Greenfield S/4HANA implementations with latest innovations
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Brownfield conversions from existing SAP ECC systems
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Fiori user experience design and implementation
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Real-time analytics and embedded intelligence
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Cloud and on-premise deployment options
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Industry-specific functionality and best practices
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Industry Expertise */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-red-600 mb-8">
            Industry-Specific Implementation Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-red-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-red-600 mb-2">Manufacturing</h3>
              <p className="text-gray-600 text-sm">
                Production planning, quality management, and supply chain optimization
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-red-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-red-600 mb-2">Retail & Distribution</h3>
              <p className="text-gray-600 text-sm">
                Inventory management, demand planning, and customer experience enhancement
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-red-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-red-600 mb-2">Healthcare</h3>
              <p className="text-gray-600 text-sm">
                Patient management, regulatory compliance, and healthcare analytics
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-red-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-red-600 mb-2">Education</h3>
              <p className="text-gray-600 text-sm">
                Student information systems, financial aid management, and academic analytics
              </p>
            </div>
          </div>
        </div>

        {/* Implementation Success Framework */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-red-600 mb-8">
            Implementation Success Framework
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-red-600 mb-4">Project Governance</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    Dedicated project management office (PMO)
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    Clear milestone tracking and reporting
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    Risk management and mitigation strategies
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    Regular stakeholder communication
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-red-600 mb-4">Quality Assurance</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    Comprehensive testing strategies
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    Performance optimization and tuning
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    Security and compliance validation
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    User acceptance testing coordination
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Business Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-red-600 mb-8">
            Measurable Business Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-red-600 mb-3">Operational Efficiency</h3>
              <p className="text-gray-600">
                Streamline business processes and eliminate redundancies to improve overall operational efficiency by 25-40%.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-red-600 mb-3">Cost Reduction</h3>
              <p className="text-gray-600">
                Reduce operational costs through process automation and improved resource utilization across your organization.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-red-600 mb-3">Real-time Visibility</h3>
              <p className="text-gray-600">
                Gain real-time insights into your business operations with integrated reporting and analytics capabilities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-red-600 mb-3">Compliance & Governance</h3>
              <p className="text-gray-600">
                Ensure regulatory compliance and improve governance with built-in controls and audit trails.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-red-600 mb-3">Scalability</h3>
              <p className="text-gray-600">
                Build a scalable foundation that supports your business growth and adapts to changing market conditions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-red-600 mb-3">User Experience</h3>
              <p className="text-gray-600">
                Enhance user productivity with intuitive interfaces and role-based access to relevant information.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Alphaxine */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-red-600 mb-8">
            Why Choose Alphaxine for SAP Implementation
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-red-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-red-600">Certified SAP Experts</h3>
                    <p className="text-gray-600">Team of certified SAP consultants with extensive implementation experience</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-red-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-red-600">Proven Track Record</h3>
                    <p className="text-gray-600">Successfully delivered 50+ SAP implementations across various industries</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-red-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-red-600">Accelerated Delivery</h3>
                    <p className="text-gray-600">Pre-built templates and accelerators to reduce implementation time by 30%</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-red-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-red-600">End-to-End Support</h3>
                    <p className="text-gray-600">Complete project lifecycle support from planning to post-go-live optimization</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-red-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-red-600">Cost-Effective Solutions</h3>
                    <p className="text-gray-600">Optimized implementation approach to maximize ROI and minimize total cost of ownership</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-red-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-red-600">Knowledge Transfer</h3>
                    <p className="text-gray-600">Comprehensive training and documentation to empower your internal teams</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-red-600 mb-4">
            Ready to Transform Your Business with SAP?
          </h2>
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
            Partner with Alphaxine Solutions to implement SAP successfully and unlock the full potential 
            of your business processes. Our experienced consultants are ready to guide you through 
            every step of your SAP journey.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <a
              href="/contact"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Start Your SAP Implementation
            </a>
            <a
              href="/services"
              className="inline-block border border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SAPImplementationConsultingPage;

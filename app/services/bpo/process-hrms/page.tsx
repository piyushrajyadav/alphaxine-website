import React from 'react';
import Link from 'next/link';

const ProcessHRMSPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-500">
              HRMS & Payroll Outsourcing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              Comprehensive Human Resource Management & Payroll Services
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Complete HRMS and payroll outsourcing solutions that ensure regulatory compliance, payroll accuracy, enhanced employee self-service capabilities, and enterprise-grade data security
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
              <h2 className="text-3xl font-bold text-red-600 mb-8">Strategic HRMS & Payroll Outsourcing</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-700 mb-6">
                    Human resource management and payroll processing represent critical business functions that require specialized expertise, stringent compliance protocols, and robust security measures. Our comprehensive outsourcing solutions handle these complex operations while your organization focuses on core strategic initiatives.
                  </p>
                  <p className="text-gray-700">
                    We manage the entire employee lifecycle from onboarding to separation, ensuring accurate payroll processing, regulatory compliance, and seamless employee experiences through modern self-service technologies and secure data management practices.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Services</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      End-to-end payroll processing and tax management
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      Complete HRMS implementation and support
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      Employee benefits administration and enrollment
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      Regulatory compliance and reporting management
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Compliance Management */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-8">Regulatory Compliance Excellence</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Multi-Jurisdiction Compliance</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Navigate complex labor regulations across federal, state, and local jurisdictions with expert compliance management that keeps your organization protected from regulatory violations and associated penalties.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Federal labor law compliance (FLSA, FMLA, ADA)</li>
                    <li>• State-specific wage and hour regulations</li>
                    <li>• Local ordinance and tax requirement adherence</li>
                    <li>• International compliance for global workforce</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Automated Regulatory Updates</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Stay current with evolving regulations through automated system updates and proactive compliance monitoring that ensures your payroll and HR processes adapt to new requirements without manual intervention.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Real-time tax table and rate updates</li>
                    <li>• Automatic compliance rule implementation</li>
                    <li>• Regulatory change impact assessment</li>
                    <li>• Proactive compliance risk mitigation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Payroll Accuracy */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-8">Precision Payroll Processing</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Multi-Tiered Validation</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Comprehensive validation processes with automated checks and human oversight ensure error-free payroll calculations and timely payment processing.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Advanced Tax Calculations</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Sophisticated tax engines handle complex withholding scenarios, garnishments, and benefit deductions with precision across all jurisdictions.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Real-Time Processing</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Immediate processing capabilities for off-cycle payrolls, bonuses, and adjustments with same-day direct deposit and reporting options.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <h3 className="text-2xl font-bold mb-6 text-red-600">Accuracy Metrics & Quality Assurance</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">99.98%</div>
                    <p className="text-gray-700 text-sm">Payroll accuracy rate across all clients and processing cycles</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
                    <p className="text-gray-700 text-sm">On-time payroll delivery with guaranteed processing schedules</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">&lt;0.01%</div>
                    <p className="text-gray-700 text-sm">Error rate requiring manual correction or adjustment</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                    <p className="text-gray-700 text-sm">System availability with automated backup and recovery</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Employee Self-Service */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-8">Employee Self-Service Excellence</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Comprehensive Self-Service Portal</h3>
                  <p className="text-gray-700 mb-4">
                    Empower employees with intuitive self-service capabilities that reduce administrative burden while improving employee satisfaction through immediate access to personal information, benefits, and HR services.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm">Personal information management and updates</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm">Pay stub access and tax document downloads</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m0 0h2a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2h2" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm">Time-off requests and approval workflows</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Mobile-First Experience</h3>
                  <p className="text-gray-700 mb-4">
                    Modern mobile applications provide employees with secure access to HR services from any device, enabling productivity and engagement regardless of location or work schedule.
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Native iOS and Android applications</li>
                    <li>• Responsive web interface for all devices</li>
                    <li>• Offline capability for critical functions</li>
                    <li>• Push notifications for important updates</li>
                    <li>• Biometric authentication for enhanced security</li>
                    <li>• Multi-language support for global workforce</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-8">Enterprise-Grade Data Security</h2>
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">Advanced Encryption</h4>
                    <p className="text-gray-700 text-sm">AES-256 encryption for data at rest and TLS 1.3 for data in transit with end-to-end security protocols</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">Access Controls</h4>
                    <p className="text-gray-700 text-sm">Role-based access with multi-factor authentication and granular permission management</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">Compliance Certifications</h4>
                    <p className="text-gray-700 text-sm">SOC 2 Type II, ISO 27001, and PCI DSS compliance with regular third-party security audits</p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Comprehensive Security Framework</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Data Protection</h5>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Automated data backup with 99.9% recovery guarantee</li>
                        <li>• Geographic data replication for disaster recovery</li>
                        <li>• Real-time threat monitoring and incident response</li>
                        <li>• Regular penetration testing and vulnerability assessments</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Privacy Management</h5>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• GDPR and CCPA compliance with data subject rights</li>
                        <li>• Automated data retention and deletion policies</li>
                        <li>• Comprehensive audit trails for all data access</li>
                        <li>• Employee privacy training and awareness programs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Administration */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-8">Complete Benefits Administration</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Enrollment & Management</h3>
                  <p className="text-gray-700 mb-4">
                    Streamlined benefits enrollment processes with decision support tools that help employees make informed choices while ensuring accurate plan administration and vendor coordination.
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Open enrollment automation and tracking</li>
                    <li>• Life event processing and plan changes</li>
                    <li>• Benefits comparison and decision support tools</li>
                    <li>• COBRA administration and compliance</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Vendor Integration & Claims</h3>
                  <p className="text-gray-700 mb-4">
                    Seamless integration with benefits providers and insurance carriers enables automated enrollment updates, claims processing, and real-time eligibility verification across all benefit programs.
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Real-time carrier eligibility file transmission</li>
                    <li>• Automated premium reconciliation and billing</li>
                    <li>• Claims support and resolution assistance</li>
                    <li>• Flexible spending account administration</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Impact */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-8">Measurable Business Outcomes</h2>
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost Efficiency</h3>
                    <p className="text-gray-700">
                      Organizations typically achieve 40-60% reduction in HR and payroll operational costs through process automation, economies of scale, and elimination of manual errors.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Employee Satisfaction</h3>
                    <p className="text-gray-700">
                      Enhanced employee experience through self-service capabilities, accurate payroll processing, and responsive support increases engagement and reduces turnover.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Compliance Assurance</h3>
                    <p className="text-gray-700">
                      Expert compliance management reduces regulatory risks, minimizes audit findings, and ensures adherence to evolving labor laws and tax requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-red-50 rounded-lg p-8 border border-red-100">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-red-600 mb-4">Transform Your HR & Payroll Operations</h3>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  Ready to enhance compliance, improve payroll accuracy, and deliver exceptional employee experiences? Our HRMS and payroll experts will design a comprehensive solution that meets your organization's unique requirements while ensuring the highest levels of security and regulatory compliance.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center bg-red-600 text-white px-8 py-3 rounded-md font-medium hover:bg-red-700 transition-colors"
                >
                  Schedule HRMS Consultation
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessHRMSPage; 


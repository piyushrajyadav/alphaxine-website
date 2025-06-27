import React from 'react';
import Link from 'next/link';

const DataGovernancePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 py-24">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-red-600 mb-6">
            Data Governance & Compliance
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8">
            Establish comprehensive governance frameworks that enforce data policies, 
            ensure regulatory compliance, and protect enterprise data integrity across all environments
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Build structured controls for data privacy, security, and stewardship while maintaining 
            seamless integration with SAP, analytics platforms, and cloud architectures
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="text-4xl font-bold text-red-600 mb-8">
              Enterprise Data Governance Excellence
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Modern enterprises require robust data governance frameworks that balance accessibility 
              with security, compliance with innovation, and control with agility. Our comprehensive 
              governance solutions establish clear policies, procedures, and technologies that protect 
              your organization while enabling data-driven decision making.
            </p>
            <p className="text-lg text-gray-700">
              From regulatory compliance and risk management to data lineage tracking and access controls, 
              we implement governance frameworks that scale with your business and integrate seamlessly 
              with your existing enterprise architecture, including SAP systems, cloud platforms, and analytics tools.
            </p>
          </div>

          {/* Core Governance Framework */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">
              Comprehensive Governance Framework
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Policy Framework Development</h3>
                <p className="text-gray-600 mb-4">
                  Establish comprehensive data policies that define standards for data access, usage, quality, 
                  retention, and disposal across all enterprise systems and business functions.
                </p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Data classification and sensitivity policies</li>
                  <li>• Access control and permission frameworks</li>
                  <li>• Data retention and archival policies</li>
                  <li>• Privacy and security compliance rules</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Data Stewardship Program</h3>
                <p className="text-gray-600 mb-4">
                  Implement structured stewardship programs with clearly defined roles, responsibilities, 
                  and accountability mechanisms to ensure ongoing governance and data quality management.
                </p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Executive data governance committee</li>
                  <li>• Business and technical data stewards</li>
                  <li>• Domain-specific governance councils</li>
                  <li>• Escalation and decision-making processes</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Access Control & Permissions</h3>
                <p className="text-gray-600 mb-4">
                  Deploy sophisticated access control mechanisms that ensure appropriate data access 
                  based on roles, responsibilities, and business requirements while maintaining security.
                </p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Role-based access control (RBAC)</li>
                  <li>• Attribute-based access control (ABAC)</li>
                  <li>• Dynamic permission management</li>
                  <li>• Privileged access monitoring</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Data Lineage & Tracking</h3>
                <p className="text-gray-600 mb-4">
                  Establish comprehensive data lineage tracking that provides complete visibility into 
                  data origins, transformations, and usage across all enterprise systems and platforms.
                </p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• End-to-end data lineage mapping</li>
                  <li>• Impact analysis and dependencies</li>
                  <li>• Change tracking and version control</li>
                  <li>• Regulatory audit trail maintenance</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Compliance Monitoring</h3>
                <p className="text-gray-600 mb-4">
                  Implement automated monitoring and auditing systems that continuously assess compliance 
                  with internal policies and external regulatory requirements.
                </p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Real-time compliance monitoring</li>
                  <li>• Automated audit reporting</li>
                  <li>• Exception detection and alerting</li>
                  <li>• Regulatory change management</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Data Lifecycle Management</h3>
                <p className="text-gray-600 mb-4">
                  Manage data throughout its complete lifecycle with automated policies for creation, 
                  usage, retention, archival, and secure deletion based on business and regulatory requirements.
                </p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Lifecycle policy automation</li>
                  <li>• Retention schedule management</li>
                  <li>• Secure data destruction</li>
                  <li>• Storage optimization strategies</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Regulatory Compliance */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">
              Regulatory Compliance & Privacy Protection
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">GDPR Compliance</h4>
                  <p className="text-gray-600 text-sm">Data subject rights, consent management, and privacy by design implementation</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Industry Standards</h4>
                  <p className="text-gray-600 text-sm">SOX, HIPAA, PCI-DSS, and sector-specific regulatory compliance frameworks</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l3-1m-3 1l-3-1" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Data Sovereignty</h4>
                  <p className="text-gray-600 text-sm">Geographic data residency, cross-border transfer controls, and jurisdictional compliance</p>
                </div>
              </div>

              <div className="border-t pt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
                  Comprehensive Privacy Protection
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-red-600 mb-3">Privacy by Design</h4>
                    <ul className="text-gray-600 space-y-2 text-sm">
                      <li>• Proactive privacy protection measures</li>
                      <li>• Default privacy settings implementation</li>
                      <li>• Data minimization principles</li>
                      <li>• Purpose limitation and consent management</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-600 mb-3">Security Controls</h4>
                    <ul className="text-gray-600 space-y-2 text-sm">
                      <li>• End-to-end data encryption</li>
                      <li>• Data masking and anonymization</li>
                      <li>• Breach detection and notification</li>
                      <li>• Incident response procedures</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise Architecture Integration */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">
              Enterprise Architecture Alignment
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 9.74s9-4.19 9-9.74V7L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">SAP Integration Governance</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Implement governance protocols specifically designed for SAP environments, ensuring 
                  data consistency, security, and compliance across all SAP modules and connected systems.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">SAP Data Controls</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Master data governance</li>
                      <li>• Transactional data policies</li>
                      <li>• Cross-module consistency</li>
                      <li>• Authorization management</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Integration Oversight</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Data flow monitoring</li>
                      <li>• Interface governance</li>
                      <li>• Change impact assessment</li>
                      <li>• Compliance validation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86zm2-15.86c3.94.49 7 3.85 7 7.93s-3.05 7.44-7 7.93V4.07z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Cloud Architecture Governance</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Establish governance frameworks that span hybrid and multi-cloud environments, 
                  ensuring consistent policies and controls across on-premises and cloud platforms.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Cloud Data Policies</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Multi-cloud governance</li>
                      <li>• Data sovereignty controls</li>
                      <li>• Service-level agreements</li>
                      <li>• Vendor risk management</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Analytics Governance</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Model governance</li>
                      <li>• Analytics data quality</li>
                      <li>• AI/ML ethics frameworks</li>
                      <li>• Performance monitoring</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Monitoring & Auditing */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">
              Advanced Monitoring & Auditing Capabilities
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Real-time Monitoring</h4>
                  <p className="text-gray-600 text-sm">Continuous oversight of data access patterns and usage</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Automated Auditing</h4>
                  <p className="text-gray-600 text-sm">Systematic audit trail generation and compliance reporting</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Exception Alerting</h4>
                  <p className="text-gray-600 text-sm">Proactive detection and notification of policy violations</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Performance Analytics</h4>
                  <p className="text-gray-600 text-sm">Governance effectiveness measurement and optimization</p>
                </div>
              </div>

              <div className="border-t pt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                  Comprehensive Data Integrity Management
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-bold text-red-600 mb-2">Data Quality Monitoring</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Accuracy validation</li>
                      <li>• Completeness assessment</li>
                      <li>• Consistency verification</li>
                      <li>• Timeliness evaluation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-600 mb-2">Access Integrity</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Authorization verification</li>
                      <li>• Privilege escalation detection</li>
                      <li>• Unusual access pattern alerts</li>
                      <li>• Session monitoring</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-600 mb-2">System Integrity</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Configuration drift detection</li>
                      <li>• Unauthorized change alerts</li>
                      <li>• System health monitoring</li>
                      <li>• Performance impact assessment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Implementation Strategy */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">
              Strategic Implementation Approach
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Governance Assessment & Strategy</h3>
                    <p className="text-gray-600">
                      Comprehensive evaluation of current governance maturity, regulatory requirements, 
                      and business objectives to develop a tailored governance strategy and roadmap.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Framework Design & Policy Development</h3>
                    <p className="text-gray-600">
                      Design comprehensive governance frameworks with detailed policies, procedures, 
                      and controls that align with enterprise architecture and business requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Technology Implementation & Integration</h3>
                    <p className="text-gray-600">
                      Deploy governance technologies and integrate with existing SAP, analytics, 
                      and cloud platforms to enable automated policy enforcement and monitoring.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Operationalization & Continuous Improvement</h3>
                    <p className="text-gray-600">
                      Establish ongoing governance operations with continuous monitoring, regular 
                      assessments, and iterative improvements to maintain effectiveness and compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Establish Enterprise Data Governance Excellence
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Partner with Alphaxine Solutions to implement comprehensive data governance frameworks 
              that protect your organization while enabling innovation and compliance across all enterprise systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center bg-white text-red-600 px-8 py-4 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Schedule Governance Assessment
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link 
                href="/services/data-analytics" 
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-md font-medium hover:bg-white hover:text-red-600 transition-colors"
              >
                Explore Data Solutions
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataGovernancePage; 


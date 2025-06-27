import React from 'react';
import Link from 'next/link';

const DataManagementPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 py-24">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-red-600 mb-6">
            Enterprise Data Management
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8">
            Master your enterprise data lifecycle with comprehensive integration, quality management, 
            and governance solutions powered by Azure Data Lake and Power BI
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Transform raw data into trusted analytics pipelines that drive digital transformation 
            while ensuring regulatory compliance and operational excellence
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="text-4xl font-bold text-red-600 mb-8">
              Complete Data Lifecycle Management
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Enterprise organizations generate vast amounts of data across multiple systems, applications, 
              and touchpoints. Effective data management requires a comprehensive approach that addresses 
              the entire data lifecycle—from creation and ingestion to processing, storage, governance, 
              and eventual archival or deletion.
            </p>
            <p className="text-lg text-gray-700">
              Our enterprise data management solutions ensure your organization maintains high-quality, 
              consistent, and compliant data assets that support advanced analytics, regulatory requirements, 
              and strategic business initiatives across your digital transformation journey.
            </p>
          </div>

          {/* Core Data Management Capabilities */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">
              Comprehensive Data Management Framework
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Data Integration & Ingestion</h3>
                <p className="text-gray-600 mb-4">
                  Seamlessly connect and consolidate data from disparate enterprise systems, cloud applications, 
                  and external sources into unified data repositories using modern ETL/ELT processes.
                </p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Real-time and batch data integration</li>
                  <li>• API-based connectivity and data pipelines</li>
                  <li>• Legacy system data extraction</li>
                  <li>• Cloud-native integration platforms</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Data Quality & Validation</h3>
                <p className="text-gray-600 mb-4">
                  Implement comprehensive data quality frameworks that automatically detect, cleanse, 
                  and validate data to ensure accuracy, completeness, and consistency across all systems.
                </p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Automated data profiling and assessment</li>
                  <li>• Data cleansing and standardization</li>
                  <li>• Quality monitoring and alerting</li>
                  <li>• Exception handling and remediation</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Data Governance & Compliance</h3>
                <p className="text-gray-600 mb-4">
                  Establish comprehensive governance frameworks that ensure data security, privacy, 
                  and regulatory compliance while maintaining data lineage and audit capabilities.
                </p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Data classification and cataloging</li>
                  <li>• Privacy and security controls</li>
                  <li>• Audit trails and data lineage</li>
                  <li>• Regulatory compliance automation</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Master Data Management</h3>
                <p className="text-gray-600 mb-4">
                  Create and maintain authoritative, consistent master data across all enterprise systems 
                  to ensure single sources of truth for critical business entities and relationships.
                </p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Customer and supplier master data</li>
                  <li>• Product and service catalogs</li>
                  <li>• Organizational hierarchies</li>
                  <li>• Reference data management</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Data Lifecycle Automation</h3>
                <p className="text-gray-600 mb-4">
                  Implement automated workflows that manage data throughout its entire lifecycle, 
                  from creation and active use to archival and secure deletion based on business rules.
                </p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Automated retention policies</li>
                  <li>• Data archival and purging</li>
                  <li>• Storage optimization</li>
                  <li>• Compliance-driven workflows</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Analytics Pipeline Support</h3>
                <p className="text-gray-600 mb-4">
                  Build trusted data foundations that feed advanced analytics, machine learning models, 
                  and business intelligence platforms with clean, validated, and well-structured data.
                </p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Data preparation for analytics</li>
                  <li>• Feature engineering support</li>
                  <li>• Model training data validation</li>
                  <li>• Real-time analytics enablement</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Modern Data Platforms */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">
              Enterprise-Grade Data Platforms
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 9.74s9-4.19 9-9.74V7L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Azure Data Lake Storage</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Leverage Azure Data Lake as the foundational platform for enterprise data management, 
                  providing scalable, secure, and cost-effective storage for structured, semi-structured, 
                  and unstructured data at any scale.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Storage Capabilities</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Exabyte-scale data storage</li>
                      <li>• Hierarchical namespace</li>
                      <li>• Multi-protocol access</li>
                      <li>• Global data distribution</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Enterprise Features</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Fine-grained access controls</li>
                      <li>• Data encryption at rest</li>
                      <li>• Disaster recovery</li>
                      <li>• Cost optimization tiers</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v20c5.07-.5 9-4.79 9-10s-3.93-9.5-9-10z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Power BI Integration</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Connect Power BI directly to your managed data assets to surface insights efficiently 
                  through interactive dashboards, real-time reports, and self-service analytics capabilities 
                  that empower business users across the organization.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Data Connectivity</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Direct lake connectivity</li>
                      <li>• Real-time data refresh</li>
                      <li>• Incremental refresh</li>
                      <li>• Composite models</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Visualization Features</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Interactive dashboards</li>
                      <li>• Mobile-responsive design</li>
                      <li>• Embedded analytics</li>
                      <li>• Natural language queries</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Governance Framework */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">
              Comprehensive Data Governance Framework
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Data Security</h4>
                  <p className="text-gray-600 text-sm">Comprehensive security controls and access management</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Compliance</h4>
                  <p className="text-gray-600 text-sm">Automated regulatory compliance and audit trails</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Data Lineage</h4>
                  <p className="text-gray-600 text-sm">Complete visibility into data origins and transformations</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Data Catalog</h4>
                  <p className="text-gray-600 text-sm">Searchable inventory of all enterprise data assets</p>
                </div>
              </div>

              <div className="border-t pt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                  Regulatory Compliance Alignment
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h4 className="font-bold text-red-600 mb-2">GDPR & Privacy</h4>
                    <p className="text-gray-600 text-sm">Data subject rights, consent management, and privacy by design</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-red-600 mb-2">Industry Standards</h4>
                    <p className="text-gray-600 text-sm">SOX, HIPAA, PCI-DSS, and sector-specific compliance requirements</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-red-600 mb-2">Data Sovereignty</h4>
                    <p className="text-gray-600 text-sm">Geographic data residency and cross-border transfer controls</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Value */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">
              Digital Transformation Impact
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center bg-white p-6 rounded-lg shadow-lg">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Accelerated Analytics</h3>
                <p className="text-gray-600">
                  Reduce time-to-insight by 70% through automated data preparation and quality validation 
                  that feeds trusted analytics pipelines.
                </p>
              </div>

              <div className="text-center bg-white p-6 rounded-lg shadow-lg">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Risk Mitigation</h3>
                <p className="text-gray-600">
                  Minimize compliance risks and data breaches through comprehensive governance frameworks 
                  and automated security controls.
                </p>
              </div>

              <div className="text-center bg-white p-6 rounded-lg shadow-lg">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Cost Optimization</h3>
                <p className="text-gray-600">
                  Achieve 40% reduction in data storage and processing costs through intelligent lifecycle 
                  management and cloud-native architectures.
                </p>
              </div>
            </div>
          </div>

          {/* Implementation Approach */}
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
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Data Estate Assessment</h3>
                    <p className="text-gray-600">
                      Comprehensive evaluation of existing data landscape, quality issues, governance gaps, 
                      and integration requirements across all enterprise systems.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Platform Architecture Design</h3>
                    <p className="text-gray-600">
                      Design scalable data management architecture leveraging Azure Data Lake, Power BI, 
                      and complementary services aligned with digital transformation objectives.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Governance Framework Implementation</h3>
                    <p className="text-gray-600">
                      Establish data governance policies, security controls, and compliance procedures 
                      that ensure master data consistency and regulatory adherence.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Quality Pipeline Deployment</h3>
                    <p className="text-gray-600">
                      Deploy automated data quality, cleansing, and validation processes that create 
                      trusted analytics pipelines supporting business intelligence and AI initiatives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Transform Your Data Management Strategy
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Partner with Alphaxine Solutions to implement enterprise-grade data management solutions 
              that support your digital transformation journey while ensuring compliance, quality, and governance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center bg-white text-red-600 px-8 py-4 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Schedule Data Assessment
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link 
                href="/services/data-analytics" 
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-md font-medium hover:bg-white hover:text-red-600 transition-colors"
              >
                Explore Analytics Solutions
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataManagementPage; 


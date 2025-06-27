import React from 'react';
import Link from 'next/link';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

const DataLakePage = () => {
  return (
    <BackgroundFix>
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-500">
                Manufacturing Data Lake Solutions
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Unified Manufacturing Intelligence Platform
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Consolidate manufacturing data from smart warehouses, employee performance systems, and process automation into secure, scalable data lakes. Our platform drives operational excellence through real-time analytics, predictive insights, and intelligent automation across your entire manufacturing ecosystem.
              </p>
            </div>
          </div>
        </section>

        {/* Manufacturing Data Integration Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Smart Manufacturing Data Integration</h2>
                <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  Transform manufacturing operations with comprehensive data lakes that integrate smart warehouse systems, employee performance metrics, and process automation insights. Our unified platform enables data-driven decision making across all manufacturing functions.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-red-600">Smart Warehouse Data Architecture</h3>
                  </div>
                  <p className="text-gray-800 leading-relaxed mb-6">
                    Consolidate inventory tracking, material flow, and warehouse automation data into centralized data lakes. Our architecture captures IoT sensor data, RFID tracking, and automated system logs to create comprehensive warehouse intelligence platforms.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Warehouse Data Sources</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• RFID and barcode scanning systems</li>
                        <li>• Automated material handling equipment</li>
                        <li>• Environmental monitoring sensors</li>
                        <li>• Inventory management systems (WMS/ERP)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Analytics Capabilities</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Real-time inventory optimization</li>
                        <li>• Predictive stock replenishment</li>
                        <li>• Space utilization analysis</li>
                        <li>• Equipment performance monitoring</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-red-600">Employee Performance Analytics</h3>
                  </div>
                  <p className="text-gray-800 leading-relaxed mb-6">
                    Integrate workforce management data, productivity metrics, and skills tracking into unified employee performance data lakes. Our platform enables data-driven workforce optimization while maintaining privacy compliance and ethical data usage standards.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Performance Data Integration</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Time and attendance systems</li>
                        <li>• Task completion and quality metrics</li>
                        <li>• Skills assessments and certifications</li>
                        <li>• Safety incident and training records</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Workforce Intelligence</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Productivity trend analysis</li>
                        <li>• Skills gap identification</li>
                        <li>• Optimal shift scheduling</li>
                        <li>• Training effectiveness measurement</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-red-600 text-center">Manufacturing Data Lake Technology Stack</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">Azure Data Lake Storage</h4>
                    <p className="text-gray-700 text-sm">Secure, scalable storage for manufacturing sensor data and operational metrics</p>
                  </div>

                  <div className="text-center">
                    <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-7 h-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">Process Automation</h4>
                    <p className="text-gray-700 text-sm">Automated data pipelines for real-time manufacturing intelligence</p>
                  </div>

                  <div className="text-center">
                    <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">Analytics & BI</h4>
                    <p className="text-gray-700 text-sm">Advanced analytics and business intelligence for manufacturing insights</p>
                  </div>

                  <div className="text-center">
                    <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-7 h-7 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">Security & Compliance</h4>
                    <p className="text-gray-700 text-sm">Enterprise-grade security and manufacturing compliance frameworks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Automation Data Integration Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Process Automation Data Intelligence</h2>
                <p className="text-gray-700 max-w-3xl mx-auto">
                  Integrate manufacturing process automation data into comprehensive data lakes that enable predictive maintenance, quality optimization, and production efficiency. Our platform transforms automation insights into actionable intelligence for continuous improvement.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Equipment Data Streams</h3>
                  <p className="text-gray-800 text-sm leading-relaxed mb-3">
                    Capture real-time data from manufacturing equipment, PLCs, and automated systems for comprehensive process monitoring and optimization.
                  </p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Machine sensor data integration</li>
                    <li>• PLC and SCADA system connectivity</li>
                    <li>• Equipment status and performance metrics</li>
                    <li>• Maintenance alert and diagnostic data</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Quality Control Analytics</h3>
                  <p className="text-gray-800 text-sm leading-relaxed mb-3">
                    Integrate quality inspection data, defect tracking, and process variation measurements for continuous quality improvement and compliance reporting.
                  </p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Automated inspection results</li>
                    <li>• Statistical process control data</li>
                    <li>• Defect pattern analysis</li>
                    <li>• Compliance and audit trail management</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Production Performance</h3>
                  <p className="text-gray-800 text-sm leading-relaxed mb-3">
                    Collect throughput data, cycle times, and operational efficiency metrics to optimize production scheduling and resource allocation.
                  </p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Production line throughput metrics</li>
                    <li>• OEE (Overall Equipment Effectiveness)</li>
                    <li>• Cycle time and bottleneck analysis</li>
                    <li>• Resource utilization optimization</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Energy Management</h3>
                  <p className="text-gray-800 text-sm leading-relaxed mb-3">
                    Monitor energy consumption patterns, power usage efficiency, and sustainability metrics for cost optimization and environmental compliance.
                  </p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Real-time energy consumption tracking</li>
                    <li>• Power quality and efficiency analysis</li>
                    <li>• Carbon footprint measurement</li>
                    <li>• Sustainability reporting automation</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Safety & Compliance</h3>
                  <p className="text-gray-800 text-sm leading-relaxed mb-3">
                    Integrate safety monitoring systems, incident reporting, and regulatory compliance data for comprehensive risk management and reporting.
                  </p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Safety sensor and alarm data</li>
                    <li>• Incident and near-miss reporting</li>
                    <li>• Regulatory compliance tracking</li>
                    <li>• Risk assessment and mitigation</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Predictive Analytics</h3>
                  <p className="text-gray-800 text-sm leading-relaxed mb-3">
                    Apply machine learning models to manufacturing data for predictive maintenance, demand forecasting, and process optimization insights.
                  </p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Predictive maintenance modeling</li>
                    <li>• Demand forecasting algorithms</li>
                    <li>• Process optimization recommendations</li>
                    <li>• Anomaly detection and alerting</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Manufacturing Data Governance Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Manufacturing Data Governance & Compliance</h2>
                <p className="text-gray-700 max-w-3xl mx-auto">
                  Establish comprehensive governance frameworks that ensure manufacturing data security, regulatory compliance, and operational transparency. Our governance solutions support manufacturing standards while enabling data-driven innovation across your operations.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-red-600">Manufacturing Data Catalog</h3>
                  </div>
                  <p className="text-gray-800 leading-relaxed mb-6">
                    Create searchable manufacturing data catalogs that enable engineers and analysts to discover production data, understand equipment relationships, and access relevant datasets for operational analysis and process improvement initiatives.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Data Discovery Features</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Equipment and process data classification</li>
                        <li>• Manufacturing terminology and standards</li>
                        <li>• Production line data mapping</li>
                        <li>• Smart search with manufacturing context</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Operational Context</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Equipment hierarchy and relationships</li>
                        <li>• Process flow documentation</li>
                        <li>• Performance baseline definitions</li>
                        <li>• Historical production data access</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-red-600">Process Lineage & Traceability</h3>
                  </div>
                  <p className="text-gray-800 leading-relaxed mb-6">
                    Track manufacturing data lineage from raw materials through finished products, enabling complete traceability for quality control, regulatory compliance, and continuous improvement. Our lineage tracking supports root cause analysis and impact assessment.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Traceability Capabilities</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Material batch and lot tracking</li>
                        <li>• Process step documentation</li>
                        <li>• Equipment usage history</li>
                        <li>• Quality checkpoint records</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Impact Analysis</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Downstream product impact assessment</li>
                        <li>• Process change impact prediction</li>
                        <li>• Quality issue root cause analysis</li>
                        <li>• Recall and compliance support</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
                <h3 className="text-2xl font-bold mb-6 text-red-600 text-center">Manufacturing Governance Framework</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">Industrial Security</h4>
                    <p className="text-gray-700 text-sm">OT/IT security integration and manufacturing-specific access controls</p>
                  </div>

                  <div className="text-center">
                    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">Quality Assurance</h4>
                    <p className="text-gray-700 text-sm">Manufacturing quality standards and automated validation frameworks</p>
                  </div>

                  <div className="text-center">
                    <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">Regulatory Compliance</h4>
                    <p className="text-gray-700 text-sm">Manufacturing regulation compliance and comprehensive audit support</p>
                  </div>

                  <div className="text-center">
                    <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-7 h-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">Data Stewardship</h4>
                    <p className="text-gray-700 text-sm">Manufacturing data ownership and collaborative stewardship workflows</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Manufacturing Analytics & Intelligence Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Manufacturing Analytics & Intelligence</h2>
                <p className="text-gray-700 max-w-3xl mx-auto">
                  Enable manufacturing teams to access both operational data and refined analytics through intuitive self-service platforms. Our solutions balance data accessibility with security requirements while accelerating manufacturing intelligence across production, warehouse, and workforce operations.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-red-600">Real-Time Manufacturing Dashboards</h3>
                  <p className="text-gray-800 leading-relaxed mb-6">
                    Provide manufacturing engineers and operators with real-time access to production data, equipment performance, and quality metrics through intuitive dashboards that enable immediate response to operational conditions.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Production Intelligence</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Real-time production line monitoring</li>
                        <li>• Equipment effectiveness tracking (OEE)</li>
                        <li>• Quality metrics and defect analysis</li>
                        <li>• Maintenance scheduling optimization</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Smart Warehouse Analytics</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Inventory level monitoring and optimization</li>
                        <li>• Material flow and bottleneck analysis</li>
                        <li>• Automated replenishment insights</li>
                        <li>• Space utilization and efficiency metrics</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-red-600">Employee Performance Analytics</h3>
                  <p className="text-gray-800 leading-relaxed mb-6">
                    Deliver workforce analytics and productivity insights through secure, privacy-compliant dashboards that enable managers to optimize team performance while supporting employee development and engagement.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Workforce Intelligence</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Productivity trend analysis and benchmarking</li>
                        <li>• Skills assessment and gap identification</li>
                        <li>• Training effectiveness measurement</li>
                        <li>• Safety performance and incident tracking</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Operational Optimization</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Optimal shift scheduling and planning</li>
                        <li>• Resource allocation optimization</li>
                        <li>• Cross-training needs analysis</li>
                        <li>• Performance improvement recommendations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-red-600 text-center">Manufacturing Intelligence Framework</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">Operational Analytics</h4>
                    <p className="text-gray-700 text-sm">Real-time production insights and performance optimization analytics</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">Predictive Insights</h4>
                    <p className="text-gray-700 text-sm">Machine learning models for predictive maintenance and forecasting</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">Role-Based Access</h4>
                    <p className="text-gray-700 text-sm">Manufacturing role-based data access and security controls</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">Scalable Platform</h4>
                    <p className="text-gray-700 text-sm">Elastic scaling for growing manufacturing data and user demands</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Manufacturing Business Value Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Manufacturing Excellence Through Data</h2>
                <p className="text-gray-700 max-w-3xl mx-auto">
                  Transform manufacturing operations with data lake solutions that drive operational efficiency, reduce costs, and enable continuous improvement across smart warehouse operations, employee performance, and process automation initiatives.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Production Efficiency</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Increase overall equipment effectiveness (OEE) by 25-35% through real-time monitoring and predictive analytics that optimize production performance.
                  </p>
                </div>

                <div className="text-center bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Smart Warehouse Optimization</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Reduce inventory costs by 20-30% and improve warehouse efficiency through intelligent inventory management and automated material flow optimization.
                  </p>
                </div>

                <div className="text-center bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Workforce Productivity</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Improve employee efficiency by 15-25% through data-driven workforce optimization, skills development, and performance enhancement programs.
                  </p>
                </div>

                <div className="text-center bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Process Automation ROI</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Achieve 200-300% ROI on automation investments through predictive maintenance, quality optimization, and reduced operational downtime.
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
              <h2 className="text-3xl font-bold mb-6">Transform Your Manufacturing Operations</h2>
              <p className="text-lg mb-8 text-red-100 leading-relaxed">
                Ready to revolutionize your manufacturing capabilities with comprehensive data lake solutions? Our experts will help you integrate smart warehouse systems, employee performance analytics, and process automation data into unified intelligence platforms that drive operational excellence and competitive advantage.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Start Your Manufacturing Transformation
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

export default DataLakePage;

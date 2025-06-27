import React from 'react';
import Link from 'next/link';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

const DataWarehousingPage = () => {
  return (
    <BackgroundFix>
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-500">
                Enterprise Data Warehousing & Business Intelligence
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Comprehensive Data Solutions for Strategic Decision-Making
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Transform your organization's data landscape with robust enterprise data warehouses built on industry-leading platforms. Our BI solutions deliver curated insights through automated processes, empowering strategic decisions across all business functions with reliable, consolidated reporting and analytics.
              </p>
            </div>
          </div>
        </section>

        {/* Platform Expertise Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Modern Data Warehouse Platforms</h2>
                <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  We construct robust, scalable data warehouses using cutting-edge technologies that provide the foundation for comprehensive business intelligence. Our platform expertise spans cloud-native and hybrid architectures designed for enterprise performance and reliability.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-red-600">Snowflake Data Cloud</h3>
                  <p className="text-gray-800 leading-relaxed mb-4">
                    Build elastic, high-performance data warehouses with Snowflake's cloud-native architecture that separates storage and compute for optimal scalability and cost efficiency.
                  </p>
                  <ul className="text-gray-700 space-y-2 text-sm text-left">
                    <li>• Zero-copy cloning and time travel capabilities</li>
                    <li>• Automatic scaling and performance optimization</li>
                    <li>• Multi-cloud deployment flexibility</li>
                    <li>• Secure data sharing and collaboration</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-red-600">Azure Synapse Analytics</h3>
                  <p className="text-gray-800 leading-relaxed mb-4">
                    Leverage Microsoft's enterprise analytics service that combines data warehousing, big data analytics, and data integration in a unified platform for comprehensive insights.
                  </p>
                  <ul className="text-gray-700 space-y-2 text-sm text-left">
                    <li>• Serverless and dedicated SQL pools</li>
                    <li>• Apache Spark integration for big data</li>
                    <li>• Native Power BI and Azure ML integration</li>
                    <li>• Hybrid data integration capabilities</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-red-600">SQL Server Enterprise</h3>
                  <p className="text-gray-800 leading-relaxed mb-4">
                    Implement mission-critical data warehouses using SQL Server's proven enterprise capabilities with advanced analytics, in-memory processing, and comprehensive security features.
                  </p>
                  <ul className="text-gray-700 space-y-2 text-sm text-left">
                    <li>• Columnstore indexes for analytical workloads</li>
                    <li>• In-memory OLTP for high-performance processing</li>
                    <li>• Advanced security and encryption features</li>
                    <li>• Seamless integration with Microsoft ecosystem</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Intelligence Platforms Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Advanced Business Intelligence Solutions</h2>
                <p className="text-gray-700 max-w-3xl mx-auto">
                  Deliver comprehensive BI platforms powered by well-curated backend data, enabling organizations to visualize trends, monitor KPIs, and generate actionable insights that drive strategic business decisions.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-red-600">Power BI Enterprise Solutions</h3>
                  </div>
                  <p className="text-gray-800 leading-relaxed mb-6">
                    Deploy comprehensive Power BI environments that transform raw data into compelling visualizations and interactive reports, enabling self-service analytics across your organization with enterprise-grade security and governance.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Core Capabilities</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Interactive dashboards and real-time monitoring</li>
                        <li>• Advanced DAX calculations and modeling</li>
                        <li>• Mobile-responsive design and offline access</li>
                        <li>• Row-level security and data governance</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Integration Features</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Direct connectivity to data warehouses</li>
                        <li>• Automated refresh schedules and alerts</li>
                        <li>• SharePoint and Teams collaboration</li>
                        <li>• Custom connector development</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-red-600">Embedded Reporting Solutions</h3>
                  </div>
                  <p className="text-gray-800 leading-relaxed mb-6">
                    Create seamless embedded analytics experiences within your existing applications and portals, providing contextual insights directly where users work without requiring separate BI tools or complex integrations.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Embedded Analytics</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• White-label dashboard embedding</li>
                        <li>• API-driven report generation</li>
                        <li>• Single sign-on integration</li>
                        <li>• Custom branding and theming</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Advanced Features</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Parameterized reports and filters</li>
                        <li>• Export capabilities (PDF, Excel, CSV)</li>
                        <li>• Scheduled report delivery</li>
                        <li>• Multi-tenant architecture support</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-red-600 text-center">BI Platform Capabilities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">Real-Time Analytics</h4>
                    <p className="text-gray-700 text-sm">Live data streaming and instant visualization updates for time-sensitive decisions</p>
                  </div>

                  <div className="text-center">
                    <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">Self-Service Analytics</h4>
                    <p className="text-gray-700 text-sm">Empower business users to create reports and explore data independently</p>
                  </div>

                  <div className="text-center">
                    <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-7 h-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">Advanced Visualizations</h4>
                    <p className="text-gray-700 text-sm">Rich charting capabilities and custom visual components for complex data</p>
                  </div>

                  <div className="text-center">
                    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">Enterprise Security</h4>
                    <p className="text-gray-700 text-sm">Comprehensive data security with role-based access and audit trails</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ETL and Data Processing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Automated ETL Processes & Data Integration</h2>
                <p className="text-gray-700 max-w-3xl mx-auto">
                  Implement robust, automated ETL processes that reliably feed dashboards and managerial reports with clean, validated data from multiple sources, ensuring consistency and reliability across your entire analytics ecosystem.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Data Extraction & Integration</h3>
                  <p className="text-gray-800 text-sm leading-relaxed mb-3">
                    Extract data from diverse sources including databases, APIs, files, and cloud applications with automated scheduling and error handling.
                  </p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Multi-source data connectivity</li>
                    <li>• Change data capture (CDC) implementation</li>
                    <li>• API integration and web scraping</li>
                    <li>• Real-time and batch processing options</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Data Transformation & Cleansing</h3>
                  <p className="text-gray-800 text-sm leading-relaxed mb-3">
                    Transform raw data into analytics-ready formats with comprehensive data quality rules, validation, and standardization processes.
                  </p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Data quality validation and cleansing</li>
                    <li>• Business rule implementation</li>
                    <li>• Data type conversion and standardization</li>
                    <li>• Calculated fields and aggregations</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Data Loading & Optimization</h3>
                  <p className="text-gray-800 text-sm leading-relaxed mb-3">
                    Efficiently load transformed data into target systems with optimized performance and minimal impact on source systems.
                  </p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Bulk loading and incremental updates</li>
                    <li>• Performance optimization techniques</li>
                    <li>• Data partitioning and indexing strategies</li>
                    <li>• Load balancing and parallel processing</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Workflow Automation & Scheduling</h3>
                  <p className="text-gray-800 text-sm leading-relaxed mb-3">
                    Implement automated workflows with intelligent scheduling, dependency management, and failure recovery mechanisms.
                  </p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Automated job scheduling and orchestration</li>
                    <li>• Dependency management and sequencing</li>
                    <li>• Error handling and retry logic</li>
                    <li>• Notification and alerting systems</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Data Quality Monitoring</h3>
                  <p className="text-gray-800 text-sm leading-relaxed mb-3">
                    Continuous monitoring of data quality metrics with automated alerts and corrective actions to maintain data integrity.
                  </p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Data profiling and quality metrics</li>
                    <li>• Anomaly detection and alerting</li>
                    <li>• Data lineage tracking</li>
                    <li>• Quality scorecards and reporting</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-red-600">Performance Monitoring & Optimization</h3>
                  <p className="text-gray-800 text-sm leading-relaxed mb-3">
                    Real-time monitoring of ETL performance with automated optimization and scaling based on workload demands.
                  </p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Performance metrics and dashboards</li>
                    <li>• Resource utilization monitoring</li>
                    <li>• Automated scaling and optimization</li>
                    <li>• Cost analysis and optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Insights Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Consolidated Insights for Strategic Decisions</h2>
                <p className="text-gray-700 max-w-3xl mx-auto">
                  Transform disparate data sources into unified, actionable insights that support strategic decision-making across all business functions with comprehensive reporting and analytics capabilities.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-red-600">Cross-Functional Analytics</h3>
                  <p className="text-gray-800 leading-relaxed mb-6">
                    Deliver integrated analytics that span multiple business functions, providing comprehensive visibility into organizational performance and enabling coordinated strategic initiatives across departments.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Financial Performance</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Revenue analysis and profitability tracking</li>
                        <li>• Budget vs. actual performance monitoring</li>
                        <li>• Cost center analysis and optimization</li>
                        <li>• Financial forecasting and scenario planning</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Operational Excellence</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Supply chain visibility and optimization</li>
                        <li>• Production efficiency and quality metrics</li>
                        <li>• Customer satisfaction and retention analysis</li>
                        <li>• Resource utilization and capacity planning</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-red-600">Executive Dashboards & KPIs</h3>
                  <p className="text-gray-800 leading-relaxed mb-6">
                    Create comprehensive executive dashboards that provide real-time visibility into critical business metrics, enabling data-driven decision-making at the highest organizational levels.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Strategic KPIs</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Market share and competitive positioning</li>
                        <li>• Customer acquisition and lifetime value</li>
                        <li>• Innovation metrics and R&D performance</li>
                        <li>• Sustainability and ESG reporting</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Performance Monitoring</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Real-time alerts and exception reporting</li>
                        <li>• Trend analysis and predictive indicators</li>
                        <li>• Comparative benchmarking and analysis</li>
                        <li>• Goal tracking and achievement monitoring</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-red-600 text-center">Business Value Delivery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">Faster Decision-Making</h4>
                    <p className="text-gray-700 text-sm">Reduce decision cycle time by 60% with real-time access to consolidated business insights</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">Cost Reduction</h4>
                    <p className="text-gray-700 text-sm">Achieve 25-35% reduction in reporting costs through automated processes and self-service analytics</p>
                  </div>                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">Improved Accuracy</h4>
                    <p className="text-gray-700 text-sm">Ensure 99%+ data accuracy through automated validation and quality monitoring processes</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">Scalable Growth</h4>
                    <p className="text-gray-700 text-sm">Support unlimited scaling with cloud-native architectures that grow with your business</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Transform Your Data Warehousing Strategy</h2>
              <p className="text-lg mb-8 text-red-100 leading-relaxed">
                Ready to build a robust data warehouse and BI platform that delivers actionable insights? Our experts specialize in Snowflake, Azure Synapse, and SQL Server implementations with automated ETL processes that drive strategic decision-making across your organization.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Start Your Data Warehouse Project
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

export default DataWarehousingPage;
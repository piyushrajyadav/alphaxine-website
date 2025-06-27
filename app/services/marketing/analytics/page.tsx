'use client';

import React from 'react';

const MarketingAnalyticsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-red-600">
              Marketing Analytics & Business Intelligence
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform complex marketing data into strategic business insights through unified analytics platforms. We deliver real-time dashboards and predictive modeling that drive informed decision-making across your entire organization.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Integration Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-red-600 mb-6">
                Unified Analytics Platform Integration
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Leverage enterprise-grade platforms including Microsoft Azure, Power BI, and Snowflake to create comprehensive analytics ecosystems that integrate marketing, sales, operations, and enterprise systems for complete business visibility.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-red-600 mb-4 text-center">
                  Microsoft Azure Analytics
                </h3>
                <p className="text-gray-600 text-center">
                  Scalable cloud analytics infrastructure with Azure Synapse Analytics, Data Factory, and Machine Learning services for enterprise-level data processing and insights generation.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-red-600 mb-4 text-center">
                  Power BI Dashboards
                </h3>
                <p className="text-gray-600 text-center">
                  Interactive business intelligence dashboards with real-time data visualization, self-service analytics capabilities, and mobile accessibility for on-the-go insights.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-red-600 mb-4 text-center">
                  Snowflake Data Platform
                </h3>
                <p className="text-gray-600 text-center">
                  High-performance data warehousing with unlimited scalability, secure data sharing, and advanced analytics capabilities for complex marketing data analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-Time Dashboards Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-red-600 mb-6">
                Real-Time Business Intelligence Dashboards
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Deliver actionable insights through dynamic dashboards that provide comprehensive reporting across marketing performance metrics, sales conversions, and operational efficiency indicators in real-time.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-red-600 mb-6">
                  Comprehensive Performance Monitoring
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Marketing Campaign Analytics</h4>
                      <p className="text-gray-600">Track campaign performance, engagement rates, conversion metrics, and ROI across all marketing channels in real-time.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Sales Performance Dashboards</h4>
                      <p className="text-gray-600">Monitor sales pipeline progression, revenue forecasting, and lead conversion rates with automated reporting.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Operational Efficiency Metrics</h4>
                      <p className="text-gray-600">Analyze operational KPIs, resource utilization, and process performance to optimize business operations.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Customer Journey Insights</h4>
                      <p className="text-gray-600">Visualize complete customer journeys from awareness to conversion with touchpoint analysis and attribution modeling.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h4 className="text-xl font-bold text-red-600 mb-6">Key Performance Indicators</h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600">92%</div>
                      <div className="text-sm text-gray-600">Reporting Automation Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600">15s</div>
                      <div className="text-sm text-gray-600">Real-Time Data Refresh</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600">45%</div>
                      <div className="text-sm text-gray-600">Decision Speed Improvement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600">360°</div>
                      <div className="text-sm text-gray-600">Business View Coverage</div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h5 className="font-semibold text-gray-800 mb-3">Dashboard Features</h5>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Interactive data exploration and drill-down capabilities</li>
                      <li>• Custom alerts and automated notifications</li>
                      <li>• Mobile-responsive design for anywhere access</li>
                      <li>• Role-based access control and data security</li>
                      <li>• Multi-language and timezone support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Data Integration Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-red-600 mb-6">
                Enterprise Systems Integration
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Create unified views of performance metrics by integrating data across marketing platforms, sales systems, operational databases, and enterprise applications including SAP for comprehensive business intelligence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10l2 16H5L7 4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-red-600 mb-3">Marketing Platforms</h3>
                <p className="text-gray-600 text-sm">
                  Google Analytics, Facebook Ads, LinkedIn, email marketing tools, and marketing automation platforms
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-red-600 mb-3">Sales Systems</h3>
                <p className="text-gray-600 text-sm">
                  CRM platforms, sales pipelines, lead management systems, and revenue tracking applications
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-red-600 mb-3">SAP Integration</h3>
                <p className="text-gray-600 text-sm">
                  Enterprise resource planning, financial data, supply chain metrics, and operational processes
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-red-600 mb-3">Operations Data</h3>
                <p className="text-gray-600 text-sm">
                  Inventory management, customer service metrics, process efficiency, and quality assurance data
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-red-600 mb-6 text-center">
                Unified Business Intelligence Framework
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-bold text-gray-800 mb-4">Data Integration Layer</h4>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• Real-time API connections and data synchronization</li>
                    <li>• ETL/ELT processes for data transformation</li>
                    <li>• Data quality validation and cleansing</li>
                    <li>• Historical data preservation and archiving</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-4">Analytics Processing</h4>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• Advanced statistical analysis and modeling</li>
                    <li>• Machine learning algorithms for insights</li>
                    <li>• Cross-platform correlation analysis</li>
                    <li>• Performance benchmarking and trending</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-4">Visualization Layer</h4>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• Executive dashboards and KPI scorecards</li>
                    <li>• Operational monitoring and alerting</li>
                    <li>• Ad-hoc reporting and data exploration</li>
                    <li>• Automated report distribution</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Predictive Modeling Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-red-600 mb-6">
                Predictive Analytics & Strategic Forecasting
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Enhance planning and strategic decision-making through advanced predictive modeling capabilities that forecast trends, identify opportunities, and guide resource allocation for optimal business outcomes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-red-600 mb-6">Advanced Forecasting Models</h3>
                <p className="text-gray-800 leading-relaxed mb-6">
                  Implement sophisticated machine learning algorithms and statistical models to predict future business performance, market trends, and customer behavior with high accuracy and reliability.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Predictive Capabilities</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Revenue and sales forecasting models</li>
                      <li>• Customer lifetime value prediction</li>
                      <li>• Market demand and trend analysis</li>
                      <li>• Churn risk identification and prevention</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Business Applications</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Budget planning and resource allocation</li>
                      <li>• Inventory optimization and demand planning</li>
                      <li>• Marketing campaign performance prediction</li>
                      <li>• Risk assessment and mitigation strategies</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-red-600 mb-6">Strategic Decision Support</h3>
                <p className="text-gray-800 leading-relaxed mb-6">
                  Provide executives and decision-makers with data-driven insights and scenario modeling capabilities that support strategic planning, investment decisions, and competitive positioning.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Decision Analytics</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• What-if scenario modeling and simulation</li>
                      <li>• Investment ROI prediction and analysis</li>
                      <li>• Market opportunity assessment</li>
                      <li>• Competitive advantage identification</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Strategic Insights</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Executive summary reports and briefings</li>
                      <li>• Strategic planning support and guidance</li>
                      <li>• Performance optimization recommendations</li>
                      <li>• Growth opportunity identification</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-red-600 mb-6 text-center">
                Predictive Analytics Technology Stack
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-7 h-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-red-600 mb-2">Azure Machine Learning</h4>
                  <p className="text-gray-700 text-sm">Enterprise ML platform for model development and deployment</p>
                </div>

                <div className="text-center">
                  <div className="w-14 h-14 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-7 h-7 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-red-600 mb-2">Statistical Modeling</h4>
                  <p className="text-gray-700 text-sm">Advanced statistical algorithms for accurate forecasting</p>
                </div>

                <div className="text-center">
                  <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-7 h-7 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-red-600 mb-2">Real-Time Scoring</h4>
                  <p className="text-gray-700 text-sm">Live prediction engines for immediate insights</p>
                </div>

                <div className="text-center">
                  <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-7 h-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-red-600 mb-2">Model Monitoring</h4>
                  <p className="text-gray-700 text-sm">Continuous model performance tracking and optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Value Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-red-600 mb-6">
                Data-Driven Business Transformation
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Enable agile, informed decision-making through comprehensive analytics ecosystems that drive continuous performance optimization and strategic competitive advantages.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-white p-6 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Enhanced Decision Speed</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Accelerate decision-making by 60% through real-time analytics and automated insights delivery to key stakeholders.
                </p>
              </div>

              <div className="text-center bg-white p-6 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Improved ROI Tracking</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Achieve 35% better marketing ROI through unified attribution modeling and cross-channel performance analysis.
                </p>
              </div>

              <div className="text-center bg-white p-6 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Predictive Accuracy</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Achieve 85%+ accuracy in business forecasting through advanced machine learning and statistical modeling.
                </p>
              </div>

              <div className="text-center bg-white p-6 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Operational Efficiency</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Optimize business operations with 40% reduction in manual reporting and automated performance monitoring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-red-600">
              Transform Your Analytics Strategy
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to unlock the power of unified business intelligence and predictive analytics? Our experts will design and implement comprehensive analytics solutions that drive strategic decision-making and performance optimization.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Schedule Analytics Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketingAnalyticsPage; 


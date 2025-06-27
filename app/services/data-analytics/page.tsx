import React from 'react';
import Link from 'next/link';

const DataAnalyticsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 py-24">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-red-600 mb-6">
            Data & Analytics Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Transform your business with intelligent data insights, predictive analytics, and 
            interactive dashboards powered by Microsoft Azure, Power BI, and Snowflake
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="text-4xl font-bold text-red-600 mb-8">
              Unlock the Power of Your Data
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              In today's data-driven business environment, organizations that effectively harness their 
              data gain a significant competitive advantage. Our comprehensive data and analytics 
              solutions help you collect, process, analyze, and visualize your data to drive informed 
              decision-making and accelerate business growth.
            </p>
            <p className="text-lg text-gray-700">
              From enterprise data warehousing to advanced predictive modeling, we deliver end-to-end 
              analytics solutions that integrate seamlessly with your existing enterprise applications 
              including SAP, Microsoft Dynamics, and other business-critical systems.
            </p>
          </div>

          {/* Core Analytics Platforms */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">
              Leading Analytics Platforms We Leverage
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 9.74s9-4.19 9-9.74V7L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Microsoft Azure Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive cloud analytics platform offering Azure Synapse Analytics, Azure Data Factory, 
                  and Azure Machine Learning for scalable data processing and advanced analytics.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Real-time data streaming</li>
                  <li>• Serverless analytics</li>
                  <li>• Integrated AI/ML capabilities</li>
                  <li>• Enterprise-grade security</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v20c5.07-.5 9-4.79 9-10s-3.93-9.5-9-10z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Microsoft Power BI</h3>
                <p className="text-gray-600 mb-4">
                  Industry-leading business intelligence platform for creating interactive dashboards, 
                  reports, and data visualizations that drive actionable insights across your organization.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Interactive dashboards</li>
                  <li>• Self-service analytics</li>
                  <li>• Mobile accessibility</li>
                  <li>• Natural language queries</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86zm2-15.86c3.94.49 7 3.85 7 7.93s-3.05 7.44-7 7.93V4.07z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Snowflake Data Platform</h3>
                <p className="text-gray-600 mb-4">
                  Cloud-native data platform enabling seamless data sharing, warehousing, and analytics 
                  with unlimited scalability and performance optimization for complex analytical workloads.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Elastic scaling</li>
                  <li>• Data sharing capabilities</li>
                  <li>• Zero-copy cloning</li>
                  <li>• Multi-cloud support</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Our Analytics Services */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">
              Comprehensive Analytics Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Data Strategy & Architecture</h3>
                <p className="text-gray-600 mb-4">
                  Design robust data architectures that support your business objectives and ensure 
                  scalable, secure, and efficient data management across your organization.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Data strategy development</li>
                  <li>• Enterprise data architecture</li>
                  <li>• Data governance frameworks</li>
                  <li>• Data quality management</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Advanced Analytics & AI</h3>
                <p className="text-gray-600 mb-4">
                  Implement machine learning models, predictive analytics, and artificial intelligence 
                  solutions that provide deep insights and automate decision-making processes.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Predictive modeling</li>
                  <li>• Machine learning algorithms</li>
                  <li>• Statistical analysis</li>
                  <li>• Automated insights</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Interactive Dashboards & Reporting</h3>
                <p className="text-gray-600 mb-4">
                  Create dynamic, user-friendly dashboards and reports that provide real-time visibility 
                  into key performance indicators and business metrics across all levels of your organization.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Executive dashboards</li>
                  <li>• Operational reporting</li>
                  <li>• Mobile-responsive design</li>
                  <li>• Real-time data visualization</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Enterprise Integration</h3>
                <p className="text-gray-600 mb-4">
                  Seamlessly integrate analytics solutions with your existing enterprise applications 
                  including SAP, Microsoft Dynamics, CRM systems, and other business-critical platforms.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• SAP data integration</li>
                  <li>• ERP system connectivity</li>
                  <li>• CRM analytics integration</li>
                  <li>• API-based data flows</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">
              Transform Your Business with Data-Driven Insights
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Improved Decision Making</h3>
                <p className="text-gray-600">
                  Make confident, data-backed decisions with real-time insights and predictive analytics 
                  that reveal trends and opportunities before your competition.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Increased ROI</h3>
                <p className="text-gray-600">
                  Maximize return on investment through optimized operations, reduced costs, 
                  and identification of new revenue streams powered by comprehensive data analysis.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Competitive Advantage</h3>
                <p className="text-gray-600">
                  Stay ahead of market trends with advanced analytics capabilities that provide 
                  deep customer insights and operational intelligence across your entire value chain.
                </p>
              </div>
            </div>
          </div>

          {/* Industry Applications */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">
              Industry-Specific Analytics Solutions
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Manufacturing & Supply Chain</h3>
                  <ul className="text-gray-600 space-y-2 mb-6">
                    <li>• Production optimization analytics</li>
                    <li>• Quality control monitoring</li>
                    <li>• Predictive maintenance</li>
                    <li>• Supply chain visibility</li>
                  </ul>

                  <h3 className="text-xl font-bold text-gray-800 mb-4">Healthcare & Life Sciences</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Patient outcome analysis</li>
                    <li>• Clinical trial analytics</li>
                    <li>• Operational efficiency metrics</li>
                    <li>• Compliance reporting</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Retail & E-commerce</h3>
                  <ul className="text-gray-600 space-y-2 mb-6">
                    <li>• Customer behavior analytics</li>
                    <li>• Inventory optimization</li>
                    <li>• Sales forecasting</li>
                    <li>• Price optimization</li>
                  </ul>

                  <h3 className="text-xl font-bold text-gray-800 mb-4">Financial Services</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Risk assessment modeling</li>
                    <li>• Fraud detection analytics</li>
                    <li>• Regulatory compliance</li>
                    <li>• Customer portfolio analysis</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Business with Data Analytics?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Partner with Alphaxine Solutions to unlock the full potential of your data. Our expert 
              team will design and implement a comprehensive analytics strategy tailored to your 
              specific business needs and objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center bg-white text-red-600 px-8 py-4 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Schedule a Consultation
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link 
                href="/insights" 
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-md font-medium hover:bg-white hover:text-red-600 transition-colors"
              >
                View Case Studies
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataAnalyticsPage; 


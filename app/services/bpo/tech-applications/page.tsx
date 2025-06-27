import React from 'react';
import Link from 'next/link';

const TechApplicationsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-500">
              Technology Outsourcing - Applications
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              Enterprise Application Management & Optimization Services
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Streamline your application portfolio with expert management that delivers enhanced reliability, optimized performance, and significant cost reductions
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
              <h2 className="text-3xl font-bold text-red-600 mb-8">Comprehensive Application Management</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-700 mb-6">
                    Modern enterprises depend on complex application ecosystems that require specialized expertise to maintain, optimize, and evolve. Our application management services take the burden of day-to-day operations off your internal teams while ensuring your critical business systems operate at peak efficiency.
                  </p>
                  <p className="text-gray-700">
                    We approach each application portfolio with a strategic mindset, analyzing performance bottlenecks, identifying cost optimization opportunities, and implementing reliability improvements that directly impact your bottom line and operational effectiveness.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Pillars</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      Proactive application monitoring and maintenance
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      Performance optimization and reliability enhancement
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      Strategic cost management and resource optimization
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      Application lifecycle and portfolio governance
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Reliability Management */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-8">Ensuring Application Reliability</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Proactive Monitoring & Maintenance</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Comprehensive monitoring systems track application health, user experience metrics, and system performance indicators around the clock to identify and resolve issues before they impact business operations.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Real-time application performance monitoring</li>
                    <li>• Automated incident detection and alerting</li>
                    <li>• Preventive maintenance scheduling and execution</li>
                    <li>• Root cause analysis and resolution tracking</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Disaster Recovery & Business Continuity</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Robust backup strategies and disaster recovery protocols ensure your critical applications remain available during unexpected outages or system failures, minimizing business disruption and data loss risks.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Automated backup and recovery procedures</li>
                    <li>• Multi-tier recovery time objectives (RTO)</li>
                    <li>• Failover testing and validation protocols</li>
                    <li>• Business continuity planning and documentation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Performance Optimization */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-8">Performance Optimization Strategies</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Code Optimization</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Systematic analysis and refactoring of application code to eliminate performance bottlenecks, reduce memory consumption, and improve execution efficiency.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Database Tuning</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Database query optimization, index management, and schema refinements that significantly reduce response times and improve overall application responsiveness.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Infrastructure Scaling</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Dynamic resource allocation and auto-scaling configurations that ensure applications have adequate computing power during peak usage periods.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <h3 className="text-2xl font-bold mb-6 text-red-600">Performance Monitoring & Analytics</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Real-Time Metrics</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Application response time tracking</li>
                      <li>• User experience and satisfaction scoring</li>
                      <li>• Resource utilization monitoring</li>
                      <li>• Error rate and availability measurement</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Predictive Analytics</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Capacity planning and growth forecasting</li>
                      <li>• Performance trend analysis</li>
                      <li>• Bottleneck prediction and prevention</li>
                      <li>• Resource optimization recommendations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Cost Management */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-8">Strategic Cost Management</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Resource Optimization</h3>
                  <p className="text-gray-700 mb-4">
                    Systematic analysis of application resource consumption patterns enables intelligent rightsizing of infrastructure components, elimination of redundant systems, and implementation of cost-effective scaling strategies.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-green-600 text-sm font-bold">30%</span>
                      </div>
                      <span className="text-gray-700 text-sm">Average infrastructure cost reduction</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-blue-600 text-sm font-bold">40%</span>
                      </div>
                      <span className="text-gray-700 text-sm">Reduction in maintenance overhead</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-purple-600 text-sm font-bold">60%</span>
                      </div>
                      <span className="text-gray-700 text-sm">Faster deployment and updates</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">License & Vendor Management</h3>
                  <p className="text-gray-700 mb-4">
                    Comprehensive software license tracking and vendor relationship management ensures optimal utilization of software assets while avoiding compliance risks and unnecessary licensing costs.
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Software license audit and optimization</li>
                    <li>• Vendor contract negotiation and management</li>
                    <li>• Compliance monitoring and reporting</li>
                    <li>• Alternative solution evaluation and migration</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Application Lifecycle Management */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-8">Complete Application Lifecycle Management</h2>
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">Planning & Strategy</h4>
                    <p className="text-gray-700 text-sm">Application roadmap development and strategic alignment with business objectives</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">Development & Enhancement</h4>
                    <p className="text-gray-700 text-sm">Custom development, feature enhancement, and modernization initiatives</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">Deployment & Operations</h4>
                    <p className="text-gray-700 text-sm">Automated deployment pipelines and continuous operational support</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">Optimization & Evolution</h4>
                    <p className="text-gray-700 text-sm">Continuous improvement and technology evolution to meet changing needs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Impact */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-8">Measurable Business Impact</h2>
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost Effectiveness</h3>
                    <p className="text-gray-700">
                      Organizations typically achieve 25-40% reduction in total cost of ownership through our application management services, including reduced infrastructure and maintenance costs.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Enhancement</h3>
                    <p className="text-gray-700">
                      Improved application response times by up to 60% and reduced system downtime by 80% through proactive monitoring and optimization strategies.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Reliability Assurance</h3>
                    <p className="text-gray-700">
                      Enhanced system reliability with 99.9% uptime SLA achievement and faster incident resolution through expert monitoring and maintenance practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-red-50 rounded-lg p-8 border border-red-100">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-red-600 mb-4">Optimize Your Application Portfolio</h3>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  Ready to enhance your application reliability, performance, and cost-effectiveness? Our application management experts will work with you to develop a customized strategy that delivers measurable business value.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center bg-red-600 text-white px-8 py-3 rounded-md font-medium hover:bg-red-700 transition-colors"
                >
                  Schedule Application Assessment
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

export default TechApplicationsPage; 


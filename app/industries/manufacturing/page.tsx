'use client';

import { FC } from 'react';
import Link from 'next/link';

const Manufacturing: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-red-600">
              Digital Manufacturing Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your manufacturing operations with intelligent automation, smart warehouse systems, and data-driven employee efficiency solutions. Our comprehensive digital manufacturing platform optimizes every aspect of production for maximum productivity and profitability.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-red-600 mb-6">
                Revolutionizing Manufacturing Through Digital Innovation
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our digital manufacturing solutions integrate cutting-edge technologies to create connected, intelligent production environments that drive operational excellence, reduce costs, and accelerate time-to-market for manufacturers across all industries.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-red-600 mb-4">Smart Warehouse</h3>
                <p className="text-gray-700 leading-relaxed">
                  Intelligent inventory management, automated material handling, and real-time warehouse optimization for streamlined operations.
                </p>
              </div>

              <div className="text-center bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-red-600 mb-4">Employee Efficiency</h3>
                <p className="text-gray-700 leading-relaxed">
                  Workforce optimization tools, skills tracking, and productivity analytics that enhance human performance and job satisfaction.
                </p>
              </div>

              <div className="text-center bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-red-600 mb-4">Process Automation</h3>
                <p className="text-gray-700 leading-relaxed">
                  End-to-end workflow automation, quality control systems, and predictive maintenance for optimized production processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Warehouse Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-red-600 mb-6">
                Smart Warehouse Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Transform traditional warehouses into intelligent distribution centers with IoT sensors, automated systems, and real-time analytics that optimize inventory flow, reduce handling costs, and improve order accuracy.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl font-bold text-red-600 mb-6">
                  Intelligent Inventory Management
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Real-Time Tracking Systems</h4>
                      <p className="text-gray-600">RFID and barcode integration with automated stock level monitoring and predictive replenishment alerts.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Automated Material Handling</h4>
                      <p className="text-gray-600">Robotic picking systems, conveyor optimization, and AI-driven warehouse layout for maximum efficiency.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Dynamic Storage Optimization</h4>
                      <p className="text-gray-600">Machine learning algorithms that optimize storage locations based on demand patterns and seasonality.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h4 className="text-xl font-bold text-red-600 mb-6">Smart Warehouse Metrics</h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600">35%</div>
                      <div className="text-sm text-gray-600">Faster Order Processing</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600">28%</div>
                      <div className="text-sm text-gray-600">Inventory Cost Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600">99.8%</div>
                      <div className="text-sm text-gray-600">Order Accuracy Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600">50%</div>
                      <div className="text-sm text-gray-600">Labor Cost Savings</div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h5 className="font-semibold text-gray-800 mb-3">Key Technologies</h5>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• IoT sensors for environmental monitoring</li>
                      <li>• Computer vision for quality inspection</li>
                      <li>• Warehouse Management System (WMS) integration</li>
                      <li>• Predictive analytics for demand forecasting</li>
                      <li>• Mobile workforce applications</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Efficiency Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-red-600 mb-6">
                Employee Efficiency Optimization
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Empower your workforce with intelligent tools and analytics that enhance productivity, improve safety, and create more engaging work environments while maintaining focus on human-centered manufacturing excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-red-600 mb-4">Performance Analytics</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Real-time productivity tracking, skills assessment, and performance benchmarking to identify improvement opportunities and recognize top performers.
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Individual productivity dashboards</li>
                  <li>• Skills gap analysis and training recommendations</li>
                  <li>• Performance trend visualization</li>
                  <li>• Goal setting and achievement tracking</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-red-600 mb-4">Safety & Compliance</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Advanced safety monitoring systems, compliance tracking, and incident prevention tools that protect workers while maintaining productivity.
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Wearable safety device integration</li>
                  <li>• Hazard detection and alert systems</li>
                  <li>• Compliance audit automation</li>
                  <li>• Safety training progress tracking</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-red-600 mb-4">Skills Development</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Personalized learning paths, cross-training programs, and continuous education platforms that enhance employee capabilities and career growth.
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Competency mapping and development</li>
                  <li>• Virtual reality training simulations</li>
                  <li>• Certification tracking and management</li>
                  <li>• Mentorship program coordination</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-red-600 mb-6 text-center">
                Workforce Optimization Results
              </h3>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">42%</div>
                  <div className="text-gray-600">Productivity Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">65%</div>
                  <div className="text-gray-600">Reduction in Safety Incidents</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">78%</div>
                  <div className="text-gray-600">Employee Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">55%</div>
                  <div className="text-gray-600">Faster Training Completion</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Automation Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-red-600 mb-6">
                Comprehensive Process Automation
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Streamline manufacturing operations through intelligent automation solutions that connect every aspect of production, from raw materials to finished products, ensuring quality, efficiency, and scalability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-red-600 mb-6">Production Line Automation</h3>
                <p className="text-gray-800 leading-relaxed mb-6">
                  Integrate robotic systems, IoT sensors, and AI-driven controls to create seamless production workflows that adapt to changing demands while maintaining consistent quality standards.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Automated Manufacturing Systems</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Robotic assembly and packaging lines</li>
                      <li>• Adaptive production scheduling algorithms</li>
                      <li>• Real-time quality control integration</li>
                      <li>• Flexible manufacturing cell configuration</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Process Optimization</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Lean manufacturing principle implementation</li>
                      <li>• Waste reduction through data analytics</li>
                      <li>• Energy efficiency optimization</li>
                      <li>• Continuous improvement automation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-red-600 mb-6">Predictive Maintenance</h3>
                <p className="text-gray-800 leading-relaxed mb-6">
                  Leverage machine learning and sensor data to predict equipment failures before they occur, reducing downtime and extending asset lifecycles through proactive maintenance strategies.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Condition Monitoring</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Vibration and temperature analysis</li>
                      <li>• Oil analysis and wear particle detection</li>
                      <li>• Acoustic monitoring for anomaly detection</li>
                      <li>• Thermal imaging integration</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Maintenance Intelligence</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Predictive failure modeling</li>
                      <li>• Optimal maintenance scheduling</li>
                      <li>• Spare parts inventory optimization</li>
                      <li>• Maintenance cost analysis and forecasting</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-red-600 mb-3">Quality Assurance</h4>
                <p className="text-gray-700 text-sm">
                  Automated inspection systems with computer vision and statistical process control for consistent product quality.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-red-600 mb-3">ERP Integration</h4>
                <p className="text-gray-700 text-sm">
                  Seamless integration with enterprise systems for unified data flow and comprehensive business intelligence.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-red-600 mb-3">Supply Chain Sync</h4>
                <p className="text-gray-700 text-sm">
                  Real-time supplier integration and automated procurement processes for optimized material flow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-red-600 mb-6">
                Transforming Manufacturing Excellence
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our digital manufacturing solutions deliver measurable business impact across operational efficiency, cost reduction, and quality improvement while positioning manufacturers for future growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-white p-6 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Operational Excellence</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Achieve 40% improvement in overall equipment effectiveness through integrated automation and predictive analytics.
                </p>
              </div>

              <div className="text-center bg-white p-6 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Cost Reduction</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Reduce manufacturing costs by 25-30% through optimized resource allocation and waste elimination.
                </p>
              </div>

              <div className="text-center bg-white p-6 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Quality Enhancement</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Improve product quality by 50% while reducing defect rates through automated inspection and control systems.
                </p>
              </div>

              <div className="text-center bg-white p-6 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Time-to-Market</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Accelerate product development cycles by 35% through streamlined processes and rapid prototyping capabilities.
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
              Ready to Digitize Your Manufacturing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your manufacturing operations with our comprehensive digital solutions. From smart warehouses to process automation, we'll help you achieve operational excellence and competitive advantage.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Start Your Digital Manufacturing Journey
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manufacturing; 


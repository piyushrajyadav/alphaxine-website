import React from 'react';
import Link from 'next/link';

const TechInfrastructurePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-500">
              Technology Outsourcing - Infrastructure
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              Enterprise Infrastructure Management & Operations
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Comprehensive infrastructure outsourcing across cloud, on-premises, and hybrid environments with enterprise-grade security, guaranteed uptime, and unlimited scalability
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
              <h2 className="text-3xl font-bold text-red-600 mb-8">Complete Infrastructure Outsourcing Solutions</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-700 mb-6">
                    Infrastructure management demands specialized expertise, continuous monitoring, and substantial capital investment. Our infrastructure outsourcing services eliminate these burdens while delivering enterprise-grade reliability, security, and performance across all deployment models.
                  </p>
                  <p className="text-gray-700">
                    Whether your organization operates in cloud environments, traditional data centers, or hybrid architectures, we provide unified management that optimizes costs, enhances security posture, and ensures maximum uptime for critical business operations.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Infrastructure Models</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      Public cloud infrastructure management
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      On-premises data center operations
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      Hybrid cloud integration and management
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      Multi-cloud optimization and governance
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cloud Infrastructure */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-8">Cloud Infrastructure Management</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Multi-Cloud Operations</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Comprehensive management across AWS, Azure, Google Cloud, and other leading platforms with unified monitoring, cost optimization, and security governance that eliminates vendor lock-in while maximizing each platform's strengths.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Cross-platform resource optimization and allocation</li>
                    <li>• Automated scaling and workload distribution</li>
                    <li>• Unified billing analysis and cost management</li>
                    <li>• Platform-specific service integration and automation</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Cloud-Native Architecture</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Design and implementation of containerized applications, serverless computing, and microservices architectures that leverage cloud-native capabilities for enhanced resilience, automatic scaling, and cost efficiency.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Kubernetes cluster management and orchestration</li>
                    <li>• Serverless function deployment and monitoring</li>
                    <li>• Containerization and DevOps pipeline integration</li>
                    <li>• API gateway and service mesh implementation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* On-Premises Infrastructure */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-8">On-Premises Infrastructure Excellence</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Center Operations</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Complete data center management including power and cooling optimization, space utilization, hardware lifecycle management, and environmental monitoring for maximum efficiency.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Server & Storage Management</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Proactive management of physical servers, storage arrays, and networking equipment with predictive maintenance, capacity planning, and performance optimization protocols.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Network Infrastructure</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Enterprise network design, implementation, and management covering LAN/WAN connectivity, routing protocols, load balancing, and bandwidth optimization strategies.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <h3 className="text-2xl font-bold mb-6 text-red-600">On-Premises Advantages</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Data Sovereignty & Control</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Complete data residency and regulatory compliance</li>
                      <li>• Direct hardware control and customization capabilities</li>
                      <li>• Predictable performance without external dependencies</li>
                      <li>• Enhanced security through physical access control</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Cost Predictability</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Fixed operational costs with no usage-based charges</li>
                      <li>• Long-term capital equipment depreciation benefits</li>
                      <li>• No data egress or bandwidth overage fees</li>
                      <li>• Optimized resource allocation for consistent workloads</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Hybrid Infrastructure */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-8">Hybrid Infrastructure Integration</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Seamless Cloud Integration</h3>
                  <p className="text-gray-700 mb-4">
                    Bridge on-premises infrastructure with public cloud services through secure, high-performance connections that enable workload mobility, disaster recovery, and cloud bursting capabilities while maintaining unified management and governance.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-blue-600 text-sm font-bold">VPN</span>
                      </div>
                      <span className="text-gray-700 text-sm">Site-to-site VPN connectivity and management</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-green-600 text-sm font-bold">SD-WAN</span>
                      </div>
                      <span className="text-gray-700 text-sm">Software-defined WAN optimization</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-purple-600 text-sm font-bold">API</span>
                      </div>
                      <span className="text-gray-700 text-sm">RESTful API integration and orchestration</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Workload Optimization</h3>
                  <p className="text-gray-700 mb-4">
                    Intelligent workload placement and migration strategies that leverage the strengths of each environment - keeping sensitive data on-premises while utilizing cloud elasticity for variable workloads and development environments.
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Dynamic workload placement based on performance requirements</li>
                    <li>• Automated failover and disaster recovery orchestration</li>
                    <li>• Cost-optimized resource allocation across environments</li>
                    <li>• Consistent security policies and compliance management</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Security Framework */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-8">Enterprise Security Excellence</h2>
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">Zero Trust Architecture</h4>
                    <p className="text-gray-700 text-sm">Multi-layered security with continuous verification, micro-segmentation, and least-privilege access controls</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">Threat Intelligence</h4>
                    <p className="text-gray-700 text-sm">Real-time threat detection, behavioral analysis, and automated incident response capabilities</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">Compliance Assurance</h4>
                    <p className="text-gray-700 text-sm">Comprehensive compliance frameworks for GDPR, HIPAA, SOX, and industry-specific regulations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Uptime & Reliability */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-8">Guaranteed Uptime & Reliability</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Service Level Guarantees</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-800 font-medium">Infrastructure Uptime</span>
                      <span className="text-red-600 font-bold text-lg">99.99%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-800 font-medium">Network Availability</span>
                      <span className="text-red-600 font-bold text-lg">99.95%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-800 font-medium">Incident Response Time</span>
                      <span className="text-red-600 font-bold text-lg">&lt; 15 min</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-800 font-medium">Critical Issue Resolution</span>
                      <span className="text-red-600 font-bold text-lg">&lt; 4 hours</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Proactive Reliability Management</h3>
                  <p className="text-gray-700 mb-4">
                    Our reliability framework combines predictive analytics, redundant architectures, and automated failover mechanisms to prevent issues before they impact your business operations.
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Predictive maintenance using AI-driven analytics</li>
                    <li>• Automated load balancing and traffic distribution</li>
                    <li>• Multi-zone redundancy and disaster recovery testing</li>
                    <li>• Continuous capacity monitoring and scaling</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Scalability Solutions */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-8">Dynamic Scalability Solutions</h2>
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">Vertical Scaling</h4>
                    <p className="text-gray-700 text-sm">Instant CPU, memory, and storage upgrades without service interruption</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">Horizontal Scaling</h4>
                    <p className="text-gray-700 text-sm">Automated instance provisioning and load distribution across multiple servers</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">Auto-Scaling</h4>
                    <p className="text-gray-700 text-sm">Intelligent resource allocation based on real-time demand patterns</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">Cloud Bursting</h4>
                    <p className="text-gray-700 text-sm">Seamless expansion to cloud resources during peak demand periods</p>
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
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost Reduction</h3>
                    <p className="text-gray-700">
                      Achieve 30-50% reduction in infrastructure operating costs through optimized resource utilization, economies of scale, and elimination of capital expenditure cycles.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Enhanced Security</h3>
                    <p className="text-gray-700">
                      Strengthen security posture with enterprise-grade protection, continuous monitoring, and incident response capabilities that exceed internal team capabilities.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Operational Excellence</h3>
                    <p className="text-gray-700">
                      Improve operational efficiency with 24/7 monitoring, proactive maintenance, and guaranteed service levels that ensure consistent business performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-red-50 rounded-lg p-8 border border-red-100">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-red-600 mb-4">Transform Your Infrastructure Operations</h3>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  Ready to modernize your infrastructure with enterprise-grade security, guaranteed uptime, and unlimited scalability? Our infrastructure experts will design a solution that meets your specific requirements across cloud, on-premises, and hybrid environments.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center bg-red-600 text-white px-8 py-3 rounded-md font-medium hover:bg-red-700 transition-colors"
                >
                  Schedule Infrastructure Assessment
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

export default TechInfrastructurePage; 


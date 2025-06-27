'use client';

import React from 'react';

const AIMLPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Dark Background */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-red-600">
              AI & Machine Learning Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your business with intelligent solutions that drive innovation, enhance customer experiences, and deliver measurable results through advanced artificial intelligence and machine learning technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - Light Background */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-red-600 mb-6 flex items-center">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              Intelligent Solutions for Modern Business
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Alphaxine Solutions empowers organizations to harness the transformative potential of artificial intelligence and machine learning. Our comprehensive AI/ML services span from strategic planning and custom model development to enterprise-grade deployment and optimization, enabling businesses to unlock new opportunities and drive sustainable growth.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We specialize in creating tailored AI solutions that integrate seamlessly with existing enterprise systems, including SAP environments, Microsoft Azure platforms, and cloud-native architectures. Our approach ensures that AI initiatives deliver immediate value while building a foundation for long-term digital transformation.
            </p>
          </div>

          {/* Core AI/ML Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-red-600 mb-8 flex items-center">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              Core AI & Machine Learning Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 8h6m-6 4h6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-red-600">AI Strategy & Implementation</h3>
                </div>
                <p className="text-gray-700">
                  Develop comprehensive AI roadmaps aligned with business objectives. Our strategic approach includes feasibility assessments, technology selection, and phased implementation plans that maximize ROI while minimizing operational disruption.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-red-600">Predictive Analytics & Modeling</h3>
                </div>
                <p className="text-gray-700">
                  Build sophisticated predictive models that forecast customer behavior, market trends, and operational outcomes. Our solutions leverage Azure Machine Learning and advanced statistical techniques to deliver actionable insights.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-7 h-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-red-600">Computer Vision Solutions</h3>
                </div>
                <p className="text-gray-700">
                  Implement intelligent image and video analysis systems for quality control, security monitoring, and automated inspection. Our computer vision solutions integrate with manufacturing processes and enterprise workflows.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-7 h-7 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-red-600">Natural Language Processing</h3>
                </div>
                <p className="text-gray-700">
                  Deploy advanced NLP capabilities for document analysis, sentiment monitoring, and automated customer service. Our solutions process unstructured data to extract meaningful insights and automate content workflows.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-7 h-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-red-600">MLOps & Model Management</h3>
                </div>
                <p className="text-gray-700">
                  Establish robust machine learning operations frameworks for model deployment, monitoring, and continuous improvement. Our MLOps practices ensure reliable, scalable, and maintainable AI systems in production environments.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-red-600">Custom AI Development</h3>
                </div>
                <p className="text-gray-700">
                  Design and build specialized AI models tailored to unique business requirements. From recommendation engines to fraud detection systems, we create custom solutions that address specific industry challenges.
                </p>
              </div>
            </div>
          </div>

          {/* Technology Platforms */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-red-600 mb-8">Technology Platforms & Integration</h2>
            <div className="grid md:grid-cols-2 gap-8">
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-red-600 mb-4">Azure AI & Cognitive Services</h3>
                <p className="text-gray-700 mb-4">
                  Leverage Microsoft Azure's comprehensive AI platform for rapid deployment and scaling of intelligent applications.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Azure Machine Learning Studio</li>
                  <li>• Cognitive Services APIs</li>
                  <li>• Azure OpenAI Service</li>
                  <li>• Bot Framework Integration</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-red-600 mb-4">Enterprise System Integration</h3>
                <p className="text-gray-700 mb-4">
                  Seamlessly integrate AI capabilities with existing enterprise applications and data sources.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• SAP S/4HANA AI Extensions</li>
                  <li>• Power Platform AI Builder</li>
                  <li>• API-First Architecture</li>
                  <li>• Real-time Data Processing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Industry Applications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-red-600 mb-8">Industry-Specific AI Applications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-lg font-semibold text-red-600 mb-3">Manufacturing</h3>
                <p className="text-gray-600 text-sm">
                  Predictive maintenance, quality control automation, and supply chain optimization through intelligent monitoring systems.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-lg font-semibold text-red-600 mb-3">Healthcare</h3>
                <p className="text-gray-600 text-sm">
                  Medical image analysis, patient data insights, and clinical decision support systems for improved patient outcomes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-lg font-semibold text-red-600 mb-3">Retail & Logistics</h3>
                <p className="text-gray-600 text-sm">
                  Demand forecasting, personalized recommendations, and intelligent inventory management for enhanced customer experiences.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-lg font-semibold text-red-600 mb-3">Financial Services</h3>
                <p className="text-gray-600 text-sm">
                  Fraud detection, risk assessment, and algorithmic trading solutions that ensure compliance and optimize performance.
                </p>
              </div>
            </div>
          </div>

          {/* Implementation Approach */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-red-600 mb-8">Our AI Implementation Methodology</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                <div className="text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-red-600 font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Discovery & Assessment</h3>
                  <p className="text-gray-600 text-sm">
                    Comprehensive analysis of business requirements, data landscape, and AI readiness to identify optimal opportunities.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-red-600 font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Proof of Concept</h3>
                  <p className="text-gray-600 text-sm">
                    Rapid prototyping and validation of AI solutions to demonstrate value and refine requirements before full implementation.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-red-600 font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Development & Training</h3>
                  <p className="text-gray-600 text-sm">
                    Custom model development, training, and optimization using enterprise-grade platforms and best practices.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-red-600 font-bold text-xl">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Deployment & Support</h3>
                  <p className="text-gray-600 text-sm">
                    Production deployment with comprehensive monitoring, maintenance, and continuous improvement support.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-red-600 mb-8">Transformational Business Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-red-600 mb-3">Enhanced Decision Intelligence</h3>
                <p className="text-gray-700">
                  Transform data into actionable insights with predictive analytics and real-time intelligence that supports strategic decision-making across all business levels.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-red-600 mb-3">Operational Excellence</h3>
                <p className="text-gray-700">
                  Achieve significant efficiency gains through intelligent automation, predictive maintenance, and optimized resource allocation across enterprise operations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-red-600 mb-3">Customer Experience Innovation</h3>
                <p className="text-gray-700">
                  Deliver personalized, intelligent customer interactions through AI-powered recommendations, sentiment analysis, and automated service capabilities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-red-600 mb-3">Competitive Market Advantage</h3>
                <p className="text-gray-700">
                  Differentiate products and services with embedded AI capabilities that create unique value propositions and market positioning.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-red-600 mb-3">Risk Mitigation & Compliance</h3>
                <p className="text-gray-700">
                  Proactively identify potential issues, fraud patterns, and compliance risks before they impact business operations or reputation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-red-600 mb-3">Scalable Innovation Platform</h3>
                <p className="text-gray-700">
                  Build a foundation for continuous innovation with flexible AI infrastructure that adapts to evolving business requirements and emerging technologies.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl mb-6 text-red-100">
              Partner with Alphaxine Solutions to unlock the full potential of artificial intelligence and machine learning for your organization.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Schedule Your AI Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIMLPage; 


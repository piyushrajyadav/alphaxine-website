'use client';

import React from 'react';

const GenerativeAIPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Dark Background */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-red-600">
              Generative AI Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Unlock the power of generative artificial intelligence to revolutionize content creation, automate complex workflows, and accelerate innovation across your enterprise with responsible AI governance.
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
              Enterprise Generative AI Innovation
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Alphaxine Solutions delivers cutting-edge generative AI capabilities that transform how organizations create content, generate insights, and automate complex processes. Our enterprise-grade approach ensures that generative AI implementations maintain the highest standards of governance, security, and brand alignment while delivering measurable business value.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We specialize in deploying large language models within controlled enterprise environments, creating sophisticated automation workflows for documentation and content generation, and establishing comprehensive governance frameworks that ensure consistent, compliant, and brand-appropriate AI-generated outputs.
            </p>
          </div>

          {/* Core Generative AI Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-red-600 mb-8 flex items-center">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              Comprehensive Generative AI Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-red-600">Content Automation</h3>
                </div>
                <p className="text-gray-700">
                  Automate the creation of marketing materials, technical documentation, product descriptions, and customer communications with AI-powered content generation that maintains brand voice and quality standards.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-red-600">Report Generation</h3>
                </div>
                <p className="text-gray-700">
                  Transform raw data and analytics into comprehensive, insight-rich reports with automated narrative generation, executive summaries, and actionable recommendations tailored to different stakeholder audiences.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-7 h-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-red-600">Code Assistance</h3>
                </div>
                <p className="text-gray-700">
                  Accelerate software development with AI-powered code generation, documentation creation, testing assistance, and automated code review capabilities that enhance developer productivity and code quality.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-7 h-7 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-red-600">Enterprise LLM Integration</h3>
                </div>
                <p className="text-gray-700">
                  Deploy and fine-tune large language models within secure enterprise environments, ensuring data privacy while enabling powerful generative capabilities across business applications.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-7 h-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-red-600">Workflow Automation</h3>
                </div>
                <p className="text-gray-700">
                  Streamline complex business processes with intelligent automation that combines generative AI with existing enterprise systems to create efficient, scalable workflow solutions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-red-600">Governance & Compliance</h3>
                </div>
                <p className="text-gray-700">
                  Establish comprehensive governance frameworks that ensure AI-generated content meets regulatory requirements, brand guidelines, and quality standards across all business units.
                </p>
              </div>
            </div>
          </div>

          {/* Large Language Models Platform */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-red-600 mb-8 flex items-center">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              Enterprise-Grade LLM Platform
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-red-600">Controlled AI Environments</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Deploy large language models within secure, controlled enterprise environments that maintain data sovereignty and comply with industry regulations.
                </p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Azure OpenAI Service integration</li>
                  <li>• Private model hosting and fine-tuning</li>
                  <li>• Data residency and sovereignty controls</li>
                  <li>• Enterprise security and compliance frameworks</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-red-600">Model Customization</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Fine-tune and customize language models to align with specific business domains, terminology, and organizational knowledge bases.
                </p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Domain-specific model training</li>
                  <li>• Custom prompt engineering and optimization</li>
                  <li>• Industry terminology and knowledge integration</li>
                  <li>• Performance monitoring and model improvement</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Content Automation Workflows */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-red-600 mb-8 flex items-center">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              Automated Content Generation Workflows
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-red-600 mb-3">Documentation Generation</h3>
                <p className="text-gray-600 text-sm">
                  Automate technical documentation, user manuals, and process guides with consistent formatting and comprehensive coverage.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-red-600 mb-3">Summarization Engine</h3>
                <p className="text-gray-600 text-sm">
                  Extract key insights from lengthy documents, meetings, and reports with intelligent summarization capabilities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-red-600 mb-3">Creative Content</h3>
                <p className="text-gray-600 text-sm">
                  Generate marketing copy, social media content, and creative materials that align with brand voice and messaging strategies.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-red-600 mb-3">Multi-Format Output</h3>
                <p className="text-gray-600 text-sm">
                  Adapt content across multiple formats and channels while maintaining consistency and brand compliance.
                </p>
              </div>
            </div>
          </div>

          {/* Governance Framework */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-red-600 mb-8 flex items-center">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              Comprehensive AI Governance
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-red-600">Compliance Management</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  Ensure all AI-generated content meets regulatory requirements, industry standards, and organizational policies through automated compliance checking.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-red-600">Brand Consistency</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  Maintain consistent brand voice, tone, and messaging across all AI-generated content with sophisticated brand alignment algorithms.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-red-600">Quality Assurance</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  Implement comprehensive quality control mechanisms with automated review processes and human oversight for critical content validation.
                </p>
              </div>
            </div>
          </div>

          {/* Business Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-red-600 mb-8 flex items-center">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              Transformational Business Impact
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-red-600">Cost Reduction</h3>
                </div>
                <p className="text-gray-700">
                  Reduce content creation costs by up to 70% while maintaining quality and consistency through intelligent automation and streamlined workflows.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-red-600">Accelerated Time-to-Market</h3>
                </div>
                <p className="text-gray-700">
                  Decrease content production timelines by 80% with rapid generation capabilities that enable faster campaign launches and product releases.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-7 h-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-red-600">Enhanced Productivity</h3>
                </div>
                <p className="text-gray-700">
                  Empower teams to focus on strategic initiatives by automating routine content tasks and enabling rapid iteration on creative concepts.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-7 h-7 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-red-600">Scalable Operations</h3>
                </div>
                <p className="text-gray-700">
                  Scale content operations without proportional increases in resources, enabling global reach and personalized communication at enterprise scale.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-7 h-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-red-600">Innovation Acceleration</h3>
                </div>
                <p className="text-gray-700">
                  Accelerate innovation cycles with rapid prototyping, concept generation, and iterative refinement capabilities that fuel creative exploration.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-red-600">Competitive Differentiation</h3>
                </div>
                <p className="text-gray-700">
                  Establish market leadership through advanced AI capabilities that enable superior customer experiences and innovative service offerings.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">Unlock Generative AI Potential</h2>
            <p className="text-xl mb-6 text-red-100">
              Transform your content creation, automation workflows, and business processes with enterprise-grade generative AI solutions that maintain the highest standards of governance and compliance.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Start Your Generative AI Journey
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GenerativeAIPage; 


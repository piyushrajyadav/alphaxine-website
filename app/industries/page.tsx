'use client';

import { FC } from 'react';
import Link from 'next/link';

const IndustriesPage: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-red-600">
              Industry-Specific Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Delivering innovative, scalable technology solutions that transform business operations across diverse industries. Our expertise drives measurable results through tailored approaches that address unique sector challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-red-600 mb-6">
                Specialized Solutions Across Key Sectors
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We understand that every industry has distinct operational requirements, regulatory standards, and competitive pressures. Our comprehensive portfolio of solutions is specifically designed to address these unique challenges while driving innovation and growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Healthcare & Education */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-white">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold">Healthcare & Education</h3>
                  </div>
                  <p className="text-blue-100">
                    Transforming patient care and educational outcomes through secure, compliant technology solutions
                  </p>
                </div>
                <div className="p-8">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700">HIPAA-compliant healthcare management systems</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700">Digital learning platforms and student information systems</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700">Telemedicine solutions and remote patient monitoring</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700">Educational analytics and performance tracking</p>
                    </div>
                  </div>
                  <Link 
                    href="/industries/healthcare-education" 
                    className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    Explore Healthcare & Education Solutions
                  </Link>
                </div>
              </div>

              {/* IT/ITES */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-700 p-8 text-white">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold">IT/ITES</h3>
                  </div>
                  <p className="text-purple-100">
                    Accelerating digital transformation with cutting-edge technology infrastructure and services
                  </p>
                </div>
                <div className="p-8">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700">Cloud migration and infrastructure modernization</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700">DevOps automation and continuous integration</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700">Cybersecurity solutions and compliance frameworks</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700">Custom software development and API integration</p>
                    </div>
                  </div>
                  <Link 
                    href="/industries/it-ites" 
                    className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    Explore IT/ITES Solutions
                  </Link>
                </div>
              </div>

              {/* Manufacturing */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-orange-500 to-red-600 p-8 text-white">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold">Manufacturing</h3>
                  </div>
                  <p className="text-orange-100">
                    Optimizing production efficiency through smart manufacturing and Industry 4.0 solutions
                  </p>
                </div>
                <div className="p-8">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700">IoT-enabled production monitoring and control</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700">Supply chain management and inventory optimization</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700">Predictive maintenance and quality assurance systems</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700">ERP integration and workforce management</p>
                    </div>
                  </div>
                  <Link 
                    href="/industries/manufacturing" 
                    className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    Explore Manufacturing Solutions
                  </Link>
                </div>
              </div>

              {/* Retail & Logistics */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-green-600 to-teal-500 p-8 text-white">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold">Retail & Logistics</h3>
                  </div>
                  <p className="text-green-100">
                    Enhancing customer experiences and operational efficiency through digital commerce solutions
                  </p>
                </div>
                <div className="p-8">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700">E-commerce platforms and omnichannel experiences</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700">Warehouse management and automated fulfillment</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700">Customer analytics and personalization engines</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700">Fleet tracking and delivery optimization</p>
                    </div>
                  </div>
                  <Link 
                    href="/industries/retail-logistics" 
                    className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    Explore Retail & Logistics Solutions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-red-600 mb-6">
                Why Industry Leaders Choose Our Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our proven track record of delivering innovative, scalable solutions has earned the trust of organizations across multiple industries. We combine deep sector expertise with cutting-edge technology to drive measurable business outcomes.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-red-600 mb-4">Innovation-Driven Approach</h3>
                <p className="text-gray-700 leading-relaxed">
                  We leverage emerging technologies including AI, IoT, and cloud computing to create breakthrough solutions that give our clients competitive advantages in their respective markets.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-red-600 mb-4">Unlimited Scalability</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our solutions are built on elastic, cloud-native architectures that seamlessly scale with business growth, ensuring performance and reliability as operations expand globally.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-red-600 mb-4">Proven Client Success</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our clients consistently achieve 30-50% operational efficiency improvements, reduced costs, and accelerated time-to-market through our tailored industry solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-red-600 mb-6">
                Delivering Measurable Business Impact
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our industry-specific solutions consistently deliver quantifiable results that drive business growth and operational excellence across diverse sectors.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-white p-8 rounded-lg shadow-lg">
                <div className="text-4xl font-bold text-red-600 mb-2">200+</div>
                <div className="text-gray-600 font-medium">Industry Projects Delivered</div>
              </div>
              <div className="text-center bg-white p-8 rounded-lg shadow-lg">
                <div className="text-4xl font-bold text-red-600 mb-2">45%</div>
                <div className="text-gray-600 font-medium">Average Efficiency Improvement</div>
              </div>
              <div className="text-center bg-white p-8 rounded-lg shadow-lg">
                <div className="text-4xl font-bold text-red-600 mb-2">98%</div>
                <div className="text-gray-600 font-medium">Client Satisfaction Rate</div>
              </div>
              <div className="text-center bg-white p-8 rounded-lg shadow-lg">
                <div className="text-4xl font-bold text-red-600 mb-2">12M</div>
                <div className="text-gray-600 font-medium">Hours of Operational Optimization</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Excellence Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-red-600 mb-6">
                Technology Excellence Across Industries
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We maintain expertise in the latest technologies and industry standards to ensure our solutions remain at the forefront of innovation while meeting strict regulatory and compliance requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-red-600 mb-2">Cloud Platforms</h4>
                <p className="text-gray-600 text-sm">Azure, AWS, Google Cloud with enterprise-grade security and compliance</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-red-600 mb-2">AI & Machine Learning</h4>
                <p className="text-gray-600 text-sm">Advanced analytics, predictive modeling, and intelligent automation</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-red-600 mb-2">Security & Compliance</h4>
                <p className="text-gray-600 text-sm">Industry-specific compliance frameworks and cybersecurity protocols</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-red-600 mb-2">Integration & APIs</h4>
                <p className="text-gray-600 text-sm">Seamless system integration and custom API development</p>
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
              Ready to Transform Your Industry Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Partner with us to implement innovative, scalable solutions that drive measurable results in your industry. Our experts are ready to understand your unique challenges and deliver tailored technology solutions.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Schedule Industry Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage; 


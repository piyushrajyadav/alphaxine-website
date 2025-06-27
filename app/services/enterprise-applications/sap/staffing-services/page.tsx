import React from 'react';
import Link from 'next/link';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

const SAPStaffingServicesPage = () => {
  return (
    <BackgroundFix>
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-500">
                SAP Staffing Services
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Premium SAP Recruitment Solutions Across India and USA
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Alphaxine is a 3-year-old ISO 9001:2015 and ISO 27001:2013 certified IT consulting company, headquartered in Kolkata. SAP Staffing has been one of our core strengths since the beginning. Being one of the premium SAP Staffing Companies in India, we understand our client demands and fulfill those demands by delivering the right resources in stipulated time.
              </p>
            </div>
          </div>
        </section>

        {/* Our Expertise Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-4">Our SAP Recruitment Expertise</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                As an SAP recruitment consultant, understanding the domain and industry of our clients and servicing their SAP requirements has been one of our core strengths. We have a dedicated team of recruiters who cater to the SAP needs of all our clients across India and in the USA.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">SAP Contract Staffing</h3>
                <p className="text-gray-700 leading-relaxed">
                  Flexible contract staffing solutions that provide skilled SAP professionals for specific project durations, helping you scale resources based on immediate needs while maintaining cost efficiency.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">SAP Permanent Staffing</h3>
                <p className="text-gray-700 leading-relaxed">
                  Strategic permanent placement services that help you build long-term SAP teams with professionals who align with your organizational culture and business objectives for sustained growth.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">SAP Contract To Hire</h3>
                <p className="text-gray-700 leading-relaxed">
                  Evaluate-before-you-hire approach that allows you to assess SAP professionals during contract periods before making permanent hiring decisions, reducing recruitment risks significantly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SAP Expertise Areas Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-4">Our SAP Database & Expertise</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                As an SAP staffing agency in India, we maintain an exhaustive database of SAP resumes at all levels including Consultants, Team Leads, Project/Delivery Managers & Top Management Profiles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-red-600">SAP R/3 & S/4 HANA Modules</h3>
                </div>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Functional Modules:</strong> SD (Sales & Distribution), FI-CO (Finance & Controlling), HR (Human Resources), PP (Production Planning), MM (Materials Management)</p>
                  <p><strong>Advanced Modules:</strong> EWM (Extended Warehouse Management), ARIBA, BW (Business Warehouse), APO (Advanced Planner & Optimizer)</p>
                  <p><strong>Specialized Areas:</strong> PS (Project Systems), PM (Plant Maintenance), Basis Administration, GST Implementation</p>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-red-600">SAP Technical Consultants</h3>
                </div>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Development:</strong> SAP ABAP (Advanced Business Application Programming)</p>
                  <p><strong>Frontend Technologies:</strong> UI5 (User Interface 5), FIORI Applications</p>
                  <p><strong>Data Services:</strong> CDS (Core Data Services), OData Services</p>
                  <p><strong>Integration:</strong> Technical Consultants for system integration and custom development</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-4">Our Strategic Approach</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                To meet the highly demanding and competitive industry requirements, we have developed a comprehensive approach that ensures successful SAP resource placement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Dedicated Account Management</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Dedicated account managers who understand clients, their domain, and industry-specific requirements for precise resource matching.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Requirement Analysis</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Comprehensive consultation to understand specific needs and requirements, ensuring perfect alignment with client expectations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Expert Matching</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Utilizing our extensive database and expertise to identify and match the most suitable SAP professionals for specific roles.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Timely Delivery</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Committed delivery within stipulated timelines, ensuring project continuity and client satisfaction across all engagements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Alphaxine Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-4">Why Choose Alphaxine for SAP Staffing?</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Unlike traditional recruitment agencies, we understand that demand for specialized SAP consultants is critical for project success. We operate with precision and dedication to meet client needs convincingly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl font-bold">✅</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-600">ISO Certified Quality</h3>
                <p className="text-gray-700 leading-relaxed">
                  ISO 9001:2015 and ISO 27001:2013 certified processes ensure the highest standards of quality and security in our recruitment practices and client data management.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl font-bold">✅</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-600">Proven Experience</h3>
                <p className="text-gray-700 leading-relaxed">
                  Three years of specialized experience in SAP staffing with a track record of successful placements across diverse industries and project complexities.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl font-bold">✅</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-600">Global Reach</h3>
                <p className="text-gray-700 leading-relaxed">
                  We provide SAP resources across PAN India and globally, including specialized support for clients in the USA, ensuring comprehensive coverage for international projects.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl font-bold">✅</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-600">Exhaustive Database</h3>
                <p className="text-gray-700 leading-relaxed">
                  Comprehensive database of SAP professionals across all levels and modules, ensuring we can fulfill diverse requirements from junior consultants to top management profiles.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl font-bold">✅</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-600">Dedicated Team</h3>
                <p className="text-gray-700 leading-relaxed">
                  Highly professional and experienced SAP recruiters who handle SAP hiring in a seamless and smooth manner, understanding the nuances of SAP consulting requirements.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl font-bold">✅</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-600">Industry Focus</h3>
                <p className="text-gray-700 leading-relaxed">
                  Deep understanding of various industry domains enables us to provide SAP professionals who not only have technical expertise but also relevant industry experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Ready to Build Your SAP Dream Team?</h2>
              <p className="text-lg mb-8 text-gray-200 leading-relaxed">
                Partner with us to access top-tier SAP professionals who can drive your projects to success. Our dedicated recruitment experts are ready to understand your requirements and deliver the right resources within your timeline.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Find Your SAP Experts
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <a 
                  href="mailto:info@alphaxine.com" 
                  className="inline-flex items-center bg-red-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-800 transition-colors"
                >
                  📧 Discuss SAP Staffing: info@alphaxine.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </BackgroundFix>
  );
};

export default SAPStaffingServicesPage;

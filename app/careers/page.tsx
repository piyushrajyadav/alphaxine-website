'use client';

import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const CareersPage: NextPage = () => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Careers at Alphaxine</title>
        <meta name="description" content="Join our team and help us build the future of AI." />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center">Join Our Team</h1>
            <p className="text-xl text-center mt-4">
              Shape the future of technology with innovative solutions that matter.
            </p>
          </div>
        </section>

        {/* Why Join Alphaxine? Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Join Alphaxine?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Innovate and Grow</h3>
                <p className="text-gray-800">
                  Work on cutting-edge projects that push technology boundaries. We invest in your growth with learning opportunities and clear career advancement.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Collaborative Culture</h3>
                <p className="text-gray-800">
                  Join a diverse team where the best ideas win. We foster an inclusive environment where every voice contributes to our success.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Make Real Impact</h3>
                <p className="text-gray-800">
                  Build solutions that transform businesses worldwide. Your work shapes how organizations operate and compete in the digital age.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Technology Solutions Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Technology Solutions</h2>
            <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              At Alphaxine, you'll work with cutting-edge technologies and industry-leading platforms to deliver innovative solutions that transform businesses.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Strategic Consulting</h3>
                <p className="text-gray-600">Guide organizations through digital transformation with expert advisory services and strategic roadmaps.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Enterprise Applications</h3>
                <p className="text-gray-600">Build scalable, robust applications that streamline operations and enhance productivity across organizations.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Data & Analytics</h3>
                <p className="text-gray-600">Harness the power of data with advanced analytics, machine learning, and intelligent reporting solutions.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Automation & AI</h3>
                <p className="text-gray-600">Implement intelligent automation that reduces manual work and accelerates business processes.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Cloud Solutions</h3>
                <p className="text-gray-600">Enable seamless cloud migration with secure, scalable infrastructure and comprehensive support.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Process Optimization</h3>
                <p className="text-gray-600">Streamline operations and eliminate bottlenecks with intelligent business process automation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Current Openings</h2>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                No specific openings right now, but we're always seeking exceptional talent for our growing team.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Passionate about technology and making an impact? We'd love to connect with you.
              </p>
              <Link href="/contact" legacyBehavior>
                <a className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
                  Connect with Us
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* Our Hiring Process Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Hiring Process</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div className="flex flex-col items-center">
                  <div className="bg-blue-500 text-white rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold mb-4">1</div>
                  <h3 className="text-xl font-bold mb-2">Application</h3>
                  <p className="text-gray-600">Submit your resume and cover letter online.</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-blue-500 text-white rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold mb-4">2</div>
                  <h3 className="text-xl font-bold mb-2">Initial Review</h3>
                  <p className="text-gray-600">We assess your qualifications and experience.</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-blue-500 text-white rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold mb-4">3</div>
                  <h3 className="text-xl font-bold mb-2">Interview</h3>
                  <p className="text-gray-600">Discuss your skills with our team.</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-blue-500 text-white rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold mb-4">4</div>
                  <h3 className="text-xl font-bold mb-2">Final Decision</h3>
                  <p className="text-gray-600">Meet leadership for cultural fit assessment.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CareersPage;


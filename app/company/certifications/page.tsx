'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

const Certifications = () => {
  const certifications = [
    {
      name: 'ISO 9001:2015',
      description: 'Validates Alphaxine\'s commitment to consistent service quality and a structured approach to continual improvement.',
      year: '2015',
      category: 'Quality Management System',
      icon: (
        <svg className="w-16 h-16 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      name: 'ISO/IEC 27001:2013',
      description: 'Confirms robust processes to protect sensitive data and maintain a secure information environment.',
      year: '2013',
      category: 'Information Security Management System',
      icon: (
        <svg className="w-16 h-16 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      name: 'StartUp India Certification',
      description: 'Recognized by the Government of India for excellence in IT consulting services and innovation.',
      year: '2024',
      category: 'Government Recognition',
      icon: (
        <svg className="w-16 h-16 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  const affiliations = [
    {
      name: 'SAP Partner / Service Provider',
      description: 'Alphaxine maintains a robust SAP Practice—providing end-to-end implementation, RISE with SAP migration support, and staffing across modules like S/4 HANA, Fiori, and ABAP.',
      category: 'Technology Partnership',
      icon: (
        <svg className="w-16 h-16 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      name: 'Industry Forum Participation',
      description: 'The company has showcased at key industry forums—such as Convergence India and Smart Energy India—highlighting engagement with regional and national tech ecosystems.',
      category: 'IT & Digital Transformation Events',
      icon: (
        <svg className="w-16 h-16 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      name: 'CMMi Level 3',
      description: 'Capability Maturity Model Integration certification demonstrating mature and well-defined software development processes.',
      category: 'Process Maturity',
      icon: (
        <svg className="w-16 h-16 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  return (
      <BackgroundFix>
      <div className="bg-gray-50 bg-gray-100 bg-gray-100 force-gray-bg">
      {/* Hero Section */}
      <section className="text-black py-20 border-b border-gray-200">
        <div className="container mx-auto px-4">            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-600">Our Certifications & Affiliations</h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Industry-recognized certifications and strategic partnerships that demonstrate our commitment to quality, security, and excellence in service delivery.
              </p>
            </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-red-600">Our Certifications</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Industry-recognized certifications that validate our commitment to quality, security, and excellence in service delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg shadow-lg overflow-hidden border border-gray-200"
              >
                <div className="flex justify-center items-center p-6 bg-gray-50 h-48">
                  {cert.icon}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-red-600">{cert.name}</h3>
                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">{cert.year}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3 font-medium">{cert.category}</p>
                  <p className="text-gray-700 leading-relaxed">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-red-600">Industry Affiliations</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Strategic partnerships and industry engagement that strengthen our capabilities and expand our reach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {affiliations.map((affiliation, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg shadow-lg overflow-hidden border border-gray-200"
              >
                <div className="flex justify-center items-center p-6 bg-gray-50 h-48">
                  {affiliation.icon}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-red-600">{affiliation.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3 font-medium">{affiliation.category}</p>
                  <p className="text-gray-700 leading-relaxed">{affiliation.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-black border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-red-600">Partner with a Trusted Digital Transformation Company</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Our certifications and partnerships validate our commitment to excellence. Let's work together to transform your business through innovative technology solutions.
          </p>
          <Link href="/contact" className="bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 inline-flex items-center">
            Discuss Your Requirements
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
      </BackgroundFix>
    );
};

export default Certifications; 











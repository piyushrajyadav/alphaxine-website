'use client';

import React from 'react';
import Link from 'next/link';
import PageHero from '@/app/components/UI/PageHero';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

const ConsultingPage = () => {
  const services = [
    {
      title: 'IT Strategy',
      description: 'Develop comprehensive technology roadmaps aligned with business objectives. Our strategic consulting helps organizations optimize their IT infrastructure, enhance operational efficiency, and drive digital innovation through data-driven decision making.',
      icon: (
        <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      link: '/services/consulting/it-strategy'
    },
    {
      title: 'AI Strategy',
      description: 'Navigate the artificial intelligence landscape with confidence. We help organizations identify AI opportunities, develop implementation strategies, and establish governance frameworks to harness the transformative power of machine learning and automation.',
      icon: (
        <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      link: '/services/consulting/ai-strategy'
    },
    {
      title: 'Data Strategy',
      description: 'Transform your data into a strategic asset. Our data consulting services help organizations establish robust data governance, implement analytics platforms, and create data-driven cultures that enable informed decision-making and competitive advantage.',
      icon: (
        <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      link: '/services/consulting/data-strategy'
    },
    {
      title: 'Outsourcing & Vendor Assessment',
      description: 'Optimize your vendor ecosystem and outsourcing strategies. We provide comprehensive vendor evaluation, risk assessment, and partnership optimization services to help organizations maximize value while minimizing operational risks.',
      icon: (
        <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      link: '/services/consulting/outsourcing-assessment'
    },
    {
      title: 'ERP Assessment',
      description: 'Evaluate and optimize your enterprise resource planning systems. Our ERP consulting services include system assessment, vendor selection, implementation planning, and post-deployment optimization to ensure maximum ROI and operational efficiency.',
      icon: (
        <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
      link: '/services/consulting/erp-assessment'
    },
  ];

  return (
    <BackgroundFix>
      <div className="bg-gray-50 min-h-screen force-gray-bg">
        <PageHero 
          title="Consulting Services"
          subtitle="Empowering Digital Transformation Through Strategic Expertise"
        />
        
        <section className="container mx-auto py-16 px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-red-600 mb-6">Our Consulting Services</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Alphaxine Solutions, we provide a comprehensive range of consulting offerings designed to empower organizations in their digital transformation journey. Our expert specialists work closely with clients to understand their unique challenges and develop tailored strategies that drive growth, efficiency, and innovation.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From strategic planning to implementation guidance, our consulting services span across technology strategy, data analytics, artificial intelligence, and operational excellence. We combine deep industry knowledge with cutting-edge methodologies to deliver measurable results that accelerate your business transformation initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Link href={service.link} key={index} className="block group">
                <div className="rounded-lg shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-lg transform group-hover:-translate-y-1">
                  <div className="p-6">
                    <div className="mb-4 text-red-600 group-hover:text-red-500 transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                    <div className="flex items-center text-red-600 font-medium group-hover:text-red-500 transition-colors">
                      Learn more
                      <svg className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-16 bg-red-50 rounded-lg p-8 border border-red-100">
            <h3 className="text-2xl font-bold text-red-600 mb-4">Need Customized Consulting?</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Every organization has unique challenges and opportunities. Our expert consultants work closely with you to understand your specific requirements and develop tailored solutions that drive measurable results. Whether you need strategic guidance, implementation support, or ongoing advisory services, we're here to help accelerate your digital transformation journey.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-colors"
            >
              Schedule a Consultation
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </BackgroundFix>
  );
};

export default ConsultingPage; 



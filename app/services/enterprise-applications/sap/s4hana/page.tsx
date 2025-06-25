import React from 'react';
import ServicePageTemplate from '@/app/components/ServicePageTemplate';

const SAPS4HANAPage = () => {
  const pageData = {
    title: 'SAP S/4HANA',
    subtitle: 'Next-Generation Intelligent ERP Solution',
    description: 'Transform your business with SAP S/4HANA, the intelligent ERP suite designed to help you run simple in the digital economy with real-time insights and intelligent automation.',
    heroImage: '/images/services/sap-s4hana-hero.jpg',
    features: [
      {
        title: 'S/4HANA Implementation',
        description: 'Complete S/4HANA implementation services from planning and design to deployment and go-live support.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        )
      },
      {
        title: 'Fiori User Experience',
        description: 'Implementation of SAP Fiori applications to deliver intuitive, role-based user experiences across all devices.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        title: 'Real-Time Analytics',
        description: 'Leverage embedded analytics and real-time data processing capabilities for instant business insights.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        )
      },
      {
        title: 'Machine Learning Integration',
        description: 'Integrate intelligent technologies and machine learning capabilities to automate business processes.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        )
      },
      {
        title: 'Cloud Deployment',
        description: 'Deploy S/4HANA on cloud platforms with scalability, security, and performance optimization.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
          </svg>
        )
      },
      {
        title: 'Integration Services',
        description: 'Seamless integration with third-party applications and cloud services using SAP Integration Suite.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        )
      }
    ],
    benefits: [
      {
        title: 'Real-Time Processing',
        description: 'Process transactions and analytics in real-time with in-memory computing capabilities.'
      },
      {
        title: 'Simplified Architecture',
        description: 'Benefit from a simplified data model and streamlined business processes for improved efficiency.'
      },
      {
        title: 'Enhanced User Experience',
        description: 'Deliver modern, intuitive user experiences with SAP Fiori and responsive design.'
      },
      {
        title: 'Intelligent Automation',
        description: 'Automate routine tasks and processes with built-in artificial intelligence and machine learning.'
      },
      {
        title: 'Future-Ready Platform',
        description: 'Build on a platform designed for digital transformation and emerging technologies.'
      },
      {
        title: 'Lower TCO',
        description: 'Reduce total cost of ownership through simplified landscape and optimized operations.'
      }
    ],
    cta: {
      title: 'Transform with S/4HANA',
      description: 'Discover how SAP S/4HANA can revolutionize your business operations and drive digital innovation.',
      buttonText: 'Explore S/4HANA',
      buttonLink: '/contact'
    }
  };

  return <ServicePageTemplate {...pageData} />;
};

export default SAPS4HANAPage;

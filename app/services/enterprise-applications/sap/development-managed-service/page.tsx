import React from 'react';
import ServicePageTemplate from '@/app/components/ServicePageTemplate';

const SAPDevelopmentManagedServicePage = () => {
  const pageData = {
    title: 'SAP Development, Managed Service & Support',
    subtitle: 'Comprehensive SAP Support and Development Services',
    description: 'Ensure optimal performance and continuous improvement of your SAP landscape with our comprehensive managed services, development, and support solutions.',
    heroImage: '/images/services/sap-managed-services-hero.jpg',
    features: [
      {
        title: 'SAP Application Management',
        description: 'Complete application management services including monitoring, maintenance, and optimization of your SAP systems.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        )
      },
      {
        title: 'Custom Development',
        description: 'Expert SAP custom development services including ABAP programming, SAP Fiori apps, and integration solutions.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        )
      },
      {
        title: '24/7 Monitoring & Support',
        description: 'Round-the-clock monitoring and support services to ensure maximum uptime and performance of your SAP systems.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      },
      {
        title: 'Performance Optimization',
        description: 'Continuous performance tuning and optimization services to enhance system efficiency and user experience.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        )
      },
      {
        title: 'Security Management',
        description: 'Comprehensive SAP security services including user management, authorization concepts, and security audits.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        )
      },
      {
        title: 'Change Management',
        description: 'Structured change management processes for SAP system modifications, updates, and enhancements.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        )
      }
    ],
    benefits: [
      {
        title: 'Reduced Operational Costs',
        description: 'Lower your total cost of ownership with our efficient managed services and proactive support approach.'
      },
      {
        title: 'Enhanced System Reliability',
        description: 'Ensure maximum system availability and reliability with our proactive monitoring and maintenance services.'
      },
      {
        title: 'Faster Issue Resolution',
        description: 'Rapid issue identification and resolution with our experienced SAP support team and established processes.'
      },
      {
        title: 'Continuous Improvement',
        description: 'Ongoing system optimization and enhancement recommendations to improve business efficiency.'
      },
      {
        title: 'Compliance & Security',
        description: 'Maintain compliance with industry standards and ensure robust security of your SAP landscape.'
      },
      {
        title: 'Scalable Support Model',
        description: 'Flexible support models that scale with your business needs and growth requirements.'
      }
    ],
    cta: {
      title: 'Optimize Your SAP Operations',
      description: 'Let our experts manage and enhance your SAP systems while you focus on your core business.',
      buttonText: 'Explore Managed Services',
      buttonLink: '/contact'
    }
  };

  return <ServicePageTemplate {...pageData} />;
};

export default SAPDevelopmentManagedServicePage;

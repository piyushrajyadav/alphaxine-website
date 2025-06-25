import React from 'react';
import ServicePageTemplate from '@/app/components/ServicePageTemplate';

const SAPImplementationConsultingPage = () => {
  const pageData = {
    title: 'SAP Implementation & Consulting',
    subtitle: 'End-to-End SAP Implementation Services',
    description: 'Transform your business with our comprehensive SAP implementation and consulting services, delivering proven methodologies and best practices for successful project delivery.',
    heroImage: '/images/services/sap-implementation-hero.jpg',
    features: [
      {
        title: 'SAP ERP Implementation',
        description: 'Complete implementation of SAP ERP modules including FI/CO, MM, SD, PP, and HR with industry best practices and proven methodologies.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        )
      },
      {
        title: 'Business Process Analysis',
        description: 'Comprehensive analysis of your current business processes and optimization recommendations aligned with SAP best practices.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        )
      },
      {
        title: 'System Configuration',
        description: 'Expert configuration of SAP modules tailored to your specific business requirements and industry standards.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
          </svg>
        )
      },
      {
        title: 'Data Migration',
        description: 'Secure and accurate migration of your legacy data to SAP systems with data validation and cleansing services.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
        )
      },
      {
        title: 'Training & Support',
        description: 'Comprehensive end-user training programs and post-implementation support to ensure successful adoption.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        )
      },
      {
        title: 'Go-Live Support',
        description: 'Dedicated go-live support and hypercare services to ensure smooth transition to production environment.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )
      }
    ],
    benefits: [
      {
        title: 'Proven Methodology',
        description: 'Leverage our time-tested implementation methodology based on SAP Activate framework and industry best practices.'
      },
      {
        title: 'Reduced Risk',
        description: 'Minimize implementation risks with our experienced team and structured approach to project management.'
      },
      {
        title: 'Faster Time-to-Value',
        description: 'Accelerate your SAP implementation timeline with our pre-configured templates and accelerators.'
      },
      {
        title: 'Industry Expertise',
        description: 'Benefit from our deep industry knowledge and sector-specific SAP implementation experience.'
      },
      {
        title: 'Cost Optimization',
        description: 'Optimize implementation costs through efficient resource utilization and proven delivery frameworks.'
      },
      {
        title: 'Knowledge Transfer',
        description: 'Comprehensive knowledge transfer ensures your team can effectively manage and maintain the SAP system.'
      }
    ],
    cta: {
      title: 'Ready to Implement SAP?',
      description: 'Partner with our SAP experts to plan and execute your successful SAP implementation project.',
      buttonText: 'Start Your SAP Journey',
      buttonLink: '/contact'
    }
  };

  return <ServicePageTemplate {...pageData} />;
};

export default SAPImplementationConsultingPage;

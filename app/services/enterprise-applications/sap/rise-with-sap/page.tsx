import React from 'react';
import ServicePageTemplate from '@/app/components/ServicePageTemplate';

const RISEWithSAPPage = () => {
  const pageData = {
    title: 'RISE with SAP',
    subtitle: 'Business Transformation as a Service',
    description: 'Accelerate your transformation to the intelligent enterprise with RISE with SAP - a comprehensive offering that combines SAP S/4HANA Cloud with transformation services and tools.',
    heroImage: '/images/services/rise-with-sap-hero.jpg',
    features: [
      {
        title: 'S/4HANA Cloud Transformation',
        description: 'Complete transformation to SAP S/4HANA Cloud with pre-configured industry solutions and best practices.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
        )
      },
      {
        title: 'Business Process Intelligence',
        description: 'Leverage SAP Process Insights to discover, analyze, and optimize your business processes continuously.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        )
      },
      {
        title: 'Integration & Extension',
        description: 'Seamless integration with SAP and third-party solutions using SAP Integration Suite and BTP.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        title: 'Managed Cloud Services',
        description: 'Comprehensive managed services including monitoring, maintenance, and continuous optimization.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        )
      },
      {
        title: 'Transformation Methodology',
        description: 'Proven transformation methodology with pre-built content and industry-specific accelerators.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )
      },
      {
        title: 'Continuous Innovation',
        description: 'Access to latest innovations and quarterly updates with minimal disruption to business operations.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        )
      }
    ],
    benefits: [
      {
        title: 'Accelerated Transformation',
        description: 'Reduce transformation time and complexity with pre-configured solutions and proven methodologies.'
      },
      {
        title: 'Predictable Costs',
        description: 'Subscription-based pricing model with predictable costs and no upfront infrastructure investments.'
      },
      {
        title: 'Risk Mitigation',
        description: 'Minimize transformation risks with SAP-managed infrastructure and proven implementation approach.'
      },
      {
        title: 'Continuous Innovation',
        description: 'Stay current with latest innovations through automatic updates and new feature releases.'
      },
      {
        title: 'Industry Best Practices',
        description: 'Leverage industry-specific best practices and pre-configured business processes.'
      },
      {
        title: 'Scalable Platform',
        description: 'Scale your solution as your business grows with flexible cloud infrastructure.'
      }
    ],
    cta: {
      title: 'Rise to the Intelligent Enterprise',
      description: 'Transform your business with RISE with SAP and become an intelligent, sustainable enterprise.',
      buttonText: 'Start Your RISE Journey',
      buttonLink: '/contact'
    }
  };

  return <ServicePageTemplate {...pageData} />;
};

export default RISEWithSAPPage;

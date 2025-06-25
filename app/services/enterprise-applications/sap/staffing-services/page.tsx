import React from 'react';
import ServicePageTemplate from '@/app/components/ServicePageTemplate';

const SAPStaffingServicesPage = () => {
  const pageData = {
    title: 'SAP Staffing Services',
    subtitle: 'Expert SAP Resources for Your Projects',
    description: 'Access top-tier SAP professionals for your projects with our comprehensive staffing services, providing skilled consultants, developers, and specialists to meet your specific requirements.',
    heroImage: '/images/services/sap-staffing-hero.jpg',
    features: [
      {
        title: 'SAP Functional Consultants',
        description: 'Experienced SAP functional consultants across all modules including FI/CO, MM, SD, PP, HR, and specialized areas.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        )
      },
      {
        title: 'SAP Technical Specialists',
        description: 'Skilled SAP technical professionals including ABAP developers, Basis administrators, and integration specialists.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        )
      },
      {
        title: 'Project Managers',
        description: 'Certified SAP project managers with extensive experience in leading complex SAP implementations and transformations.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        )
      },
      {
        title: 'Business Analysts',
        description: 'SAP business analysts who can bridge business requirements with technical solutions effectively.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        )
      },
      {
        title: 'Solution Architects',
        description: 'Senior SAP solution architects who can design and guide complex SAP landscape transformations.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        )
      },
      {
        title: 'Support Specialists',
        description: 'Dedicated SAP support specialists for ongoing maintenance, troubleshooting, and system optimization.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )
      }
    ],
    benefits: [
      {
        title: 'Rapid Deployment',
        description: 'Quick deployment of skilled SAP resources to meet urgent project timelines and requirements.'
      },
      {
        title: 'Cost Effectiveness',
        description: 'Optimize costs with flexible staffing models including contract, contract-to-hire, and permanent placements.'
      },
      {
        title: 'Proven Expertise',
        description: 'Access to pre-vetted SAP professionals with demonstrated experience and certifications.'
      },
      {
        title: 'Scalable Teams',
        description: 'Scale your team up or down based on project phases and changing business requirements.'
      },
      {
        title: 'Quality Assurance',
        description: 'Rigorous screening and evaluation process ensures high-quality resources for your projects.'
      },
      {
        title: 'Ongoing Support',
        description: 'Continuous support and performance monitoring to ensure successful project outcomes.'
      }
    ],
    cta: {
      title: 'Build Your SAP Dream Team',
      description: 'Connect with our recruitment experts to find the perfect SAP professionals for your project needs.',
      buttonText: 'Find SAP Talent',
      buttonLink: '/contact'
    }
  };

  return <ServicePageTemplate {...pageData} />;
};

export default SAPStaffingServicesPage;

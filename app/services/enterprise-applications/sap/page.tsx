'use client';

import React from 'react';
import ServicePageWithCategories from '@/app/components/ServicePageWithCategories';

const SAPPage = () => {
  const pageData = {
    title: 'SAP Centre of Excellence',
    description: 'Maximize the value of your SAP investment with our comprehensive end-to-end services, from strategic planning and implementation to ongoing support and optimization.',
    serviceCategories: [
      {
        categoryTitle: 'SAP Services',
        services: [
          {
            title: 'SAP Implementation & Consulting Services',
            description: 'End-to-end SAP implementation services with proven methodologies and best practices for successful project delivery.',
            url: '/services/enterprise-applications/sap/implementation-consulting',
            icon: (
              <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            )
          },
          {
            title: 'SAP Development, Managed Service & Support',
            description: 'Comprehensive SAP support, development, and managed services to ensure optimal performance and continuous improvement.',
            url: '/services/enterprise-applications/sap/development-managed-service',
            icon: (
              <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            )
          },
          {
            title: 'SAP UPGRADE & MIGRATION',
            description: 'Seamless SAP system upgrades and migrations with minimal downtime and maximum business continuity.',
            url: '/services/enterprise-applications/sap/upgrade-migration',
            icon: (
              <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
              </svg>
            )
          }
        ]
      },
      {
        categoryTitle: 'SAP Specialised Services',
        services: [
          {
            title: 'S4 HANA',
            description: 'Transform your business with SAP S/4HANA, the intelligent ERP suite designed for the digital economy.',
            url: '/services/enterprise-applications/sap/s4hana',
            icon: (
              <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            )
          },
          {
            title: 'Rise with S4 HANA',
            description: 'Accelerate your transformation with RISE with SAP - business transformation as a service with S/4HANA Cloud.',
            url: '/services/enterprise-applications/sap/rise-with-sap',
            icon: (
              <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            )
          }
        ]
      },
      {
        categoryTitle: 'SAP Staffing Services',
        services: [
          {
            title: 'SAP Staffing Services',
            description: 'Access top-tier SAP professionals for your projects with our comprehensive staffing and recruitment services.',
            url: '/services/enterprise-applications/sap/staffing-services',
            icon: (
              <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            )
          }
        ]
      }
    ]
  };

  return <ServicePageWithCategories {...pageData} />;
};

export default SAPPage; 


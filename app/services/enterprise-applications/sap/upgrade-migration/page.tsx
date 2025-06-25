import React from 'react';
import ServicePageTemplate from '@/app/components/ServicePageTemplate';

const SAPUpgradeMigrationPage = () => {
  const pageData = {
    title: 'SAP Upgrade & Migration',
    subtitle: 'Seamless SAP System Upgrades and Migrations',
    description: 'Modernize your SAP landscape with our comprehensive upgrade and migration services, ensuring minimal downtime and maximum business continuity.',
    heroImage: '/images/services/sap-upgrade-migration-hero.jpg',
    features: [
      {
        title: 'SAP ECC to S/4HANA Migration',
        description: 'Expert migration services from SAP ECC to S/4HANA with comprehensive planning, testing, and execution.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
          </svg>
        )
      },
      {
        title: 'Version Upgrades',
        description: 'Seamless upgrades to the latest SAP versions with minimal business disruption and comprehensive testing.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
          </svg>
        )
      },
      {
        title: 'Platform Migration',
        description: 'Migration of SAP systems across different platforms and databases with data integrity assurance.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        title: 'Cloud Migration',
        description: 'Migration of on-premise SAP systems to cloud environments including AWS, Azure, and Google Cloud.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
        )
      },
      {
        title: 'Legacy System Migration',
        description: 'Migration from legacy systems to SAP with data mapping, conversion, and validation services.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        )
      },
      {
        title: 'Post-Migration Support',
        description: 'Comprehensive post-migration support and optimization services to ensure smooth operations.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )
      }
    ],
    benefits: [
      {
        title: 'Minimal Downtime',
        description: 'Proven migration strategies that minimize business downtime and ensure continuity of operations.'
      },
      {
        title: 'Data Integrity',
        description: 'Comprehensive data validation and testing processes to ensure 100% data integrity during migration.'
      },
      {
        title: 'Risk Mitigation',
        description: 'Structured approach with rollback plans and contingency measures to mitigate migration risks.'
      },
      {
        title: 'Performance Enhancement',
        description: 'Leverage upgrade opportunities to improve system performance and introduce new capabilities.'
      },
      {
        title: 'Future-Ready Platform',
        description: 'Modernize your SAP landscape to take advantage of latest features and future innovations.'
      },
      {
        title: 'Cost Optimization',
        description: 'Optimize infrastructure costs and licensing through strategic migration planning.'
      }
    ],
    cta: {
      title: 'Ready to Modernize Your SAP?',
      description: 'Start your SAP transformation journey with our expert migration and upgrade services.',
      buttonText: 'Plan Your Migration',
      buttonLink: '/contact'
    }
  };

  return <ServicePageTemplate {...pageData} />;
};

export default SAPUpgradeMigrationPage;

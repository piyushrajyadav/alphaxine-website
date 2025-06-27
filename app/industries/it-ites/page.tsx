'use client';

import { FC } from 'react';
import IndustryPageTemplate from '../../components/IndustryPageTemplate';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

const ITAndITES: FC = () => {
  const pageData = {
    title: 'IT & ITES',
    subtitle: 'Transforming Technology Businesses Through Strategic Innovation',
    description: 'Empowering IT and ITES organizations with next-generation ERP systems, intelligent marketing automation, and operational excellence frameworks that drive scalable growth and competitive advantage.',
    heroImage: '/images/industries/it-ites-hero.jpg',
    gradientColors: {
      from: 'purple-600',
      to: 'indigo-500'
    },
    keyStats: [
      {
        value: '200+',
        label: 'IT Projects Delivered'
      },
      {
        value: '99.8%',
        label: 'System Uptime'
      },
      {
        value: '60%',
        label: 'Operational Cost Reduction'
      },
      {
        value: '24/7',
        label: 'Support Coverage'
      }
    ],
    challenges: [
      'Legacy system integration complexity and technical debt management',
      'Rapid technology evolution requiring continuous skill development and adaptation',
      'Scalability demands during peak business periods and growth phases',
      'Data security and compliance requirements across multiple regulatory frameworks',
      'Resource optimization and cost management in competitive market conditions',
      'Customer expectation management for faster delivery and enhanced service quality'
    ],
    solutions: [
      {
        title: 'Enterprise ERP Solutions',
        description: 'Comprehensive ERP implementation and customization services that streamline business processes, enhance data visibility, and improve decision-making capabilities across all organizational functions.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v2M9 7h6" /></svg>',
        link: '/industries/it-ites/erp-solutions'
      },
      {
        title: 'Marketing Automation',
        description: 'Advanced marketing automation platforms that optimize lead generation, customer engagement, and campaign performance through intelligent workflows and data-driven insights.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>',
        link: '/industries/it-ites/marketing-automation'
      },
      {
        title: 'Operational Excellence',
        description: 'Strategic operational frameworks and process optimization solutions that enhance efficiency, reduce costs, and improve service delivery quality across IT service organizations.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>',
        link: '/industries/it-ites/operational-excellence'
      },
      {
        title: 'Digital Infrastructure',
        description: 'Robust cloud infrastructure and security solutions that provide scalable, reliable, and secure technology foundations for growing IT businesses and service providers.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>',
        link: '/industries/it-ites/digital-infrastructure'
      },
      {
        title: 'Data Analytics & AI',
        description: 'Intelligent analytics solutions and artificial intelligence implementations that transform business data into actionable insights for competitive advantage and strategic decision-making.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>',
        link: '/industries/it-ites/data-analytics-ai'
      },
      {
        title: 'Managed IT Services',
        description: 'Comprehensive managed service solutions that provide 24/7 monitoring, proactive maintenance, and strategic technology management to optimize IT performance and reliability.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" /></svg>',
        link: '/industries/it-ites/managed-services'
      }
    ],
    caseStudies: [
      {
        title: 'Global Tech Company ERP Transformation',
        description: 'Complete ERP modernization for a multinational IT services company, integrating financial, HR, and project management systems across 15 countries.',
        image: '/images/case-studies/it-1.jpg',
        clientName: 'TechGlobal Solutions',
        result: '45% improvement in process efficiency and 30% reduction in operational costs',
        link: '/contact'
      },
      {
        title: 'Marketing Automation Success Story',
        description: 'Implementation of advanced marketing automation platform for a leading software development company, enhancing lead generation and customer engagement.',
        image: '/images/case-studies/it-2.jpg',
        clientName: 'InnovaSoft Technologies',
        result: '180% increase in qualified leads and 65% improvement in conversion rates',
        link: '/contact'
      },
      {
        title: 'Operational Excellence Initiative',
        description: 'Comprehensive operational excellence program for an ITES organization, focusing on process optimization and service quality enhancement.',
        image: '/images/case-studies/it-3.jpg',
        clientName: 'ServiceExcel Corp',
        result: '50% reduction in service delivery time and 40% improvement in customer satisfaction',
        link: '/contact'
      }
    ]
  };

  return <IndustryPageTemplate {...pageData} />;
};

export default ITAndITES; 


'use client';

import { FC } from 'react';
import IndustryPageTemplate from '../../components/IndustryPageTemplate';
import Image from 'next/image';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

const HealthcareEducation: FC = () => {
  const pageData = {
    title: 'Healthcare & Education',
    subtitle: 'Transforming Care and Learning Through Technology',
    description: 'Offering digital and IT solutions tailored to the unique operational needs of healthcare providers and educational institutions.',
    heroImage: '/images/industries/healthcare-education-hero.jpg',
    gradientColors: {
      from: 'blue-600',
      to: 'cyan-500'
    },
    keyStats: [
      {
        value: '95%',
        label: 'Patient Satisfaction'
      },
      {
        value: '40%',
        label: 'Operational Efficiency'
      },
      {
        value: '50+',
        label: 'Healthcare Clients'
      },
      {
        value: '24/7',
        label: 'System Uptime'
      }
    ],
    challenges: [
      'Complex regulatory compliance requirements (HIPAA, FERPA)',
      'Integration of legacy systems with modern technology',
      'Data security and privacy protection',
      'Scalability for growing patient and student populations',
      'Cost management while maintaining quality care and education',
      'Ensuring seamless user experience for patients, students, and staff'
    ],
    solutions: [
      {
        title: 'Healthcare Systems',
        description: 'Implementing systems that ensure accurate billing, claims validation, and revenue management in healthcare organizations.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>',
        link: '/industries/healthcare-education/healthcare-systems'
      },
      {
        title: 'Learning Systems',
        description: 'Building scalable digital platforms for universities to support student lifecycle and administrative workflows.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>',
        link: '/industries/healthcare-education/learning-systems'
      },
      {
        title: 'Patient Engagement',
        description: 'Enhancing patient engagement through personalized portals, online scheduling, and digital care tools.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>',
        link: '/industries/healthcare-education/patient-engagement'
      },
      {
        title: 'NAAC Accreditation',
        description: 'Developing platforms to support self-study report data collection, accreditation workflows, and readiness tracking for NAAC.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>',
        link: '/industries/healthcare-education/naac-accreditation'
      },
      {
        title: 'Compliance',
        description: 'Ensuring adherence to healthcare regulations (HIPAA, HITECH) and educational standards through robust compliance management systems.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>',
        link: '/industries/healthcare-education/compliance'
      },
      {
        title: 'Digital Transformation',
        description: 'Modernizing healthcare and educational institutions through comprehensive digital transformation strategies and cutting-edge technology implementation.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>',
        link: '/industries/healthcare-education/digital-transformation'
      }
    ],
    caseStudies: [
      {
        title: 'Metropolitan Healthcare System Modernization',
        description: 'Comprehensive EHR implementation and system integration for a large metropolitan healthcare network serving over 500,000 patients.',
        image: '/images/case-studies/healthcare-1.jpg',
        clientName: 'Metropolitan Healthcare Network',
        result: '40% improvement in patient data accessibility and 25% reduction in administrative costs',
        link: '/case-studies/metropolitan-healthcare'
      },
      {
        title: 'University Learning Management Platform',
        description: 'Development of an integrated learning management system for a state university with 45,000 students and 3,000 faculty members.',
        image: '/images/case-studies/education-1.jpg',
        clientName: 'State University System',
        result: '60% increase in student engagement and 35% improvement in course completion rates',
        link: '/case-studies/state-university'
      },
      {
        title: 'National Healthcare Analytics Implementation',
        description: 'Implementation of advanced analytics platform for population health management across multiple healthcare facilities.',
        image: '/images/case-studies/healthcare-2.jpg',
        clientName: 'National Healthcare Consortium',
        result: '30% improvement in patient outcomes and $2M annual cost savings through predictive analytics',
        link: '/case-studies/national-healthcare'
      }
    ]
  };

  return <IndustryPageTemplate {...pageData} />;
};

export default HealthcareEducation; 


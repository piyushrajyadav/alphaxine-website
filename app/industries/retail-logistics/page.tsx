'use client';

import { FC } from 'react';
import IndustryPageTemplate from '../../components/IndustryPageTemplate';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

const RetailLogistics: FC = () => {
  const pageData = {
    title: 'Retail & Logistics',
    subtitle: 'Transforming Commerce Through Intelligent Supply Chain Solutions',
    description: 'In the fast-paced world of retail, success depends on perfect timing—having the right products in the right place at exactly the right moment. We help retailers and logistics companies harness the power of AI and automation to create seamless shopping experiences while optimizing every aspect of their supply chain operations.',
    heroImage: '/images/industries/retail-logistics-hero.jpg',
    gradientColors: {
      from: 'green-600',
      to: 'green-800'
    },
    keyStats: [
      {
        value: '35%',
        label: 'Reduction in inventory holding costs through AI-powered optimization'
      },
      {
        value: '50%',
        label: 'Improvement in order fulfillment speed with smart warehouse integration'
      },
      {
        value: '25%',
        label: 'Increase in customer satisfaction through personalized experiences'
      },
      {
        value: '40%',
        label: 'Decrease in stockouts and overstock situations'
      }
    ],
    challenges: [
      'Balancing inventory levels to avoid costly stockouts while preventing expensive overstock situations',
      'Managing complex omnichannel operations where customers expect seamless experiences across all touchpoints',
      'Optimizing warehouse operations to meet increasingly demanding delivery expectations',
      'Providing personalized customer experiences at scale while maintaining operational efficiency'
    ],
    solutions: [
      {
        title: 'AI-Powered Inventory Intelligence',
        description: 'Transform your inventory management with predictive analytics that forecast demand patterns, automate replenishment decisions, and maintain optimal stock levels. Our AI algorithms learn from historical data, seasonal trends, and market signals to help you avoid both stockouts and overstock while significantly reducing shrinkage.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>',
        link: '/contact'
      },
      {
        title: 'Smart Warehouse Ecosystems',
        description: 'Create intelligent warehouse environments by seamlessly integrating IoT sensors, robotics, and advanced WMS platforms. Our solutions provide real-time inventory visibility, streamline order fulfillment processes, and optimize store replenishment operations—ensuring your supply chain operates at peak efficiency.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>',
        link: '/contact'
      },
      {
        title: 'Enhanced Customer Experience Platform',
        description: 'Elevate your customer relationships through personalized recommendation engines, seamless click-and-collect services, and proactive supply chain insights. We help you deliver fast, reliable service that builds lasting shopper loyalty and keeps customers coming back for more.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>',
        link: '/contact'
      },
      {
        title: 'Unified Operations Optimization',
        description: 'Achieve operational excellence through our comprehensive approach that connects every aspect of your retail and logistics operations. From demand forecasting to last-mile delivery, we help you build a customer-centric edge that drives competitive advantage in today\'s demanding markets.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>',
        link: '/contact'
      }
    ],
    caseStudies: [
      {
        title: 'Regional Retail Chain Transformation',
        description: 'A mid-sized retail chain was struggling with frequent stockouts during peak seasons and excess inventory during slower periods. Our AI-powered inventory optimization solution reduced their holding costs by 35% while improving product availability to 98%. The automated replenishment system now handles 80% of purchasing decisions, freeing up their team to focus on strategic initiatives.',
        image: '/images/case-studies/retail-chain.jpg',
        clientName: 'Regional Fashion Retailer',
        result: '35% reduction in inventory costs, 98% product availability',
        link: '/contact'
      },
      {
        title: 'E-commerce Fulfillment Revolution',
        description: 'An online retailer needed to scale their warehouse operations to meet growing customer expectations for same-day delivery. We implemented a smart warehouse ecosystem with IoT integration and robotics automation. Order processing time decreased by 60%, and they now fulfill 95% of orders within 24 hours, leading to a 40% increase in customer satisfaction scores.',
        image: '/images/case-studies/logistics.jpg',
        clientName: 'E-commerce Marketplace',
        result: '60% faster order processing, 95% same-day fulfillment rate',
        link: '/contact'
      }
    ]
  };

  return <IndustryPageTemplate {...pageData} />;
};

export default RetailLogistics; 


'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Service {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  icon: string;
  link: string;
}

const services: Service[] = [
  {
    id: 'consulting',
    title: 'Consulting',
    shortDesc: 'Strategic guidance for digital transformation',
    longDesc: 'Expert advisory services to help you navigate complex technology decisions and create roadmaps for sustainable growth.',
    icon: '/image/icons/consulting.svg',
    link: '/services/consulting',
  },
  {
    id: 'enterprise',
    title: 'Enterprise Applications',
    shortDesc: 'Scalable solutions for modern businesses',
    longDesc: 'Build and optimize enterprise-grade applications that streamline operations and enhance productivity across your organization.',
    icon: '/image/icons/enterprise.svg',
    link: '/services/enterprise-applications',
  },
  {
    id: 'data',
    title: 'Data & Analytics',
    shortDesc: 'Turn data into actionable insights',
    longDesc: 'Harness the power of your data with advanced analytics, machine learning, and intelligent reporting solutions.',
    icon: '/image/icons/data.svg',
    link: '/services/data-analytics',
  },
  {
    id: 'automation',
    title: 'Intelligent Automation & AI',
    shortDesc: 'Automate processes with AI-driven solutions',
    longDesc: 'Implement smart automation that reduces manual work, improves accuracy, and accelerates business processes.',
    icon: '/image/icons/automation.svg',
    link: '/services/automation-ai',
  },
  {
    id: 'bpo',
    title: 'Business Process Outsourcing',
    shortDesc: 'Streamline operations with expert support',
    longDesc: 'Optimize your business processes with our comprehensive outsourcing services that reduce costs and improve efficiency.',
    icon: '/image/icons/bpo.svg',
    link: '/services/bpo',
  },
  {
    id: 'marketing',
    title: 'Intelligent Marketing',
    shortDesc: 'AI-powered marketing automation',
    longDesc: 'Enhance customer engagement and drive revenue growth with intelligent marketing platforms and strategies.',
    icon: '/image/icons/marketing.svg',
    link: '/services/marketing',
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState<string>(services[0].id);
  const [expandedMobileService, setExpandedMobileService] = useState<string | null>(null);

  const toggleMobileService = (serviceId: string) => {
    if (expandedMobileService === serviceId) {
      setExpandedMobileService(null);
    } else {
      setExpandedMobileService(serviceId);
      setActiveService(serviceId);
    }
  };

  return (
    <section className="py-16 md:py-20 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Comprehensive Technology Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From strategy to implementation, we deliver end-to-end services that transform how your business operates and competes.
          </p>
        </div>

        {/* Mobile View Services List with Accordion Style */}
        <div className="lg:hidden space-y-4 mb-8">
          {services.map((service) => (
            <div key={service.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleMobileService(service.id)}
                className={`w-full text-left px-4 py-3 transition-all duration-200 flex items-center justify-between ${
                  expandedMobileService === service.id
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-50 text-gray-700'
                }`}
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 mr-3 flex-shrink-0">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={32}
                      height={32}
                      className={`${expandedMobileService === service.id ? 'filter brightness-0 invert' : ''}`}
                    />
                  </div>                    <div>
                      <h3 className="font-semibold">{service.title}</h3>
                      <p className="text-sm text-gray-600">{service.shortDesc}</p>
                    </div>
                </div>
                <svg
                  className={`w-5 h-5 transition-transform ${expandedMobileService === service.id ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Expanded Service Content for Mobile */}
              {expandedMobileService === service.id && (
                <div className="bg-white p-5 border-t border-gray-200">
                  <p className="text-gray-700 mb-4">{service.longDesc}</p>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Offerings:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.id === 'consulting' && [
                        'Digital transformation strategy',
                        'Technology roadmap development',
                        'Change management consulting'
                      ].map((offering, index) => (
                        <div key={index} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-700">{offering}</span>
                        </div>
                      ))}
                      {service.id === 'enterprise' && [
                        'ERP system implementation',
                        'Custom application development',
                        'System integration services'
                      ].map((offering, index) => (
                        <div key={index} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-700">{offering}</span>
                        </div>
                      ))}
                      {service.id === 'data' && [
                        'Business intelligence solutions',
                        'Machine learning implementation',
                        'Data warehouse design'
                      ].map((offering, index) => (
                        <div key={index} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-700">{offering}</span>
                        </div>
                      ))}
                      {service.id === 'automation' && [
                        'Process automation design',
                        'AI chatbot development',
                        'Workflow optimization'
                      ].map((offering, index) => (
                        <div key={index} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-700">{offering}</span>
                        </div>
                      ))}
                      {service.id === 'bpo' && [
                        'Finance and accounting outsourcing',
                        'Customer support services',
                        'HR process optimization'
                      ].map((offering, index) => (
                        <div key={index} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-700">{offering}</span>
                        </div>
                      ))}
                      {service.id === 'marketing' && [
                        'Marketing automation platforms',
                        'Customer journey optimization',
                        'Performance analytics'
                      ].map((offering, index) => (
                        <div key={index} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-700">{offering}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop View with Side Navigation */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Service Navigation */}
          <div className="lg:col-span-1 order-1 lg:order-none">
            <div className="bg-gray-50 rounded-xl p-4 md:p-6 sticky top-20">
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.id}>
                    <button
                      onClick={() => setActiveService(service.id)}
                      className={`w-full text-left px-3 md:px-4 py-3 rounded-lg transition-all duration-200 flex items-center ${
                        activeService === service.id
                          ? 'bg-red-600 text-white'
                          : 'text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <div className="w-8 h-8 mr-3 flex-shrink-0">
                        <Image
                          src={service.icon}
                          alt={service.title}
                          width={32}
                          height={32}
                          className={`${activeService === service.id ? 'filter brightness-0 invert' : ''}`}
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm md:text-base">{service.title}</h3>
                        <p className="text-xs text-gray-600 line-clamp-1">{service.shortDesc}</p>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Service Details */}
          <div className="lg:col-span-2 order-2 lg:order-none min-h-[400px] relative">
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: activeService === service.id ? 1 : 0,
                  x: activeService === service.id ? 0 : 20,
                  position: activeService === service.id ? 'relative' : 'absolute',
                  zIndex: activeService === service.id ? 1 : -1,
                }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-lg p-6 md:p-8 w-full"
                style={{
                  top: 0,
                  left: 0,
                  right: 0,
                }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={32}
                      height={32}
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">{service.title}</h3>
                </div>

                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">{service.longDesc}</p>

                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-gray-800">Key Offerings</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.id === 'consulting' && [
                        'Digital transformation strategy',
                        'Technology roadmap development',
                        'Change management consulting',
                        'Business process optimization',
                        'IT governance frameworks',
                        'Risk assessment and mitigation'
                      ].map((offering, index) => (
                        <div key={index} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-700">{offering}</span>
                        </div>
                      ))}
                      {service.id === 'enterprise' && [
                        'ERP system implementation',
                        'Custom application development',
                        'System integration services',
                        'Legacy system modernization',
                        'API development and management',
                        'Quality assurance and testing'
                      ].map((offering, index) => (
                        <div key={index} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-700">{offering}</span>
                        </div>
                      ))}
                      {service.id === 'data' && [
                        'Business intelligence solutions',
                        'Machine learning implementation',
                        'Data warehouse design',
                        'Advanced analytics platforms',
                        'Real-time data processing',
                        'Predictive modeling'
                      ].map((offering, index) => (
                        <div key={index} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-700">{offering}</span>
                        </div>
                      ))}
                      {service.id === 'automation' && [
                        'Process automation design',
                        'AI chatbot development',
                        'Workflow optimization',
                        'Robotic process automation',
                        'Intelligent document processing',
                        'Decision automation systems'
                      ].map((offering, index) => (
                        <div key={index} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-700">{offering}</span>
                        </div>
                      ))}
                      {service.id === 'bpo' && [
                        'Finance and accounting outsourcing',
                        'Customer support services',
                        'HR process optimization',
                        'Supply chain management',
                        'Procurement services',
                        'Back-office operations'
                      ].map((offering, index) => (
                        <div key={index} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-700">{offering}</span>
                        </div>
                      ))}
                      {service.id === 'marketing' && [
                        'Marketing automation platforms',
                        'Customer journey optimization',
                        'Performance analytics',
                        'Email campaign management',
                        'Social media automation',
                        'Lead nurturing systems'
                      ].map((offering, index) => (
                        <div key={index} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-700">{offering}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

function getServiceOfferings(serviceId: string): string[] {
  return [];
} 
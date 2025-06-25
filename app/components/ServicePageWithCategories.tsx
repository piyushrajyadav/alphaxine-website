'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

interface ServiceLink {
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
}

interface ServiceCategory {
  categoryTitle: string;
  services: ServiceLink[];
}

interface ServicePageWithCategoriesProps {
  title: string;
  description: string;
  serviceCategories: ServiceCategory[];
}

const ServicePageWithCategories: React.FC<ServicePageWithCategoriesProps> = ({
  title,
  description,
  serviceCategories
}) => {
  return (
    <BackgroundFix>
      <div className="bg-gray-50 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-red-400">{title}</h1>
              <p className="text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto">{description}</p>
            </div>
          </div>
        </section>

        {/* Service Categories Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {serviceCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-16">
                  {/* Category Title */}
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 text-red-600">{category.categoryTitle}</h2>
                    <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
                  </div>

                  {/* Services Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.services.map((service, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group"
                      >
                        <Link href={service.url}>
                          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full border border-gray-100 hover:border-red-200 group-hover:scale-105">
                            <div className="flex flex-col items-center text-center">
                              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                              </div>
                              <h3 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                                {service.title}
                              </h3>
                              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                                {service.description}
                              </p>
                              <div className="inline-flex items-center text-red-600 font-semibold group-hover:text-red-700 transition-colors duration-300">
                                Learn More
                                <svg 
                                  className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                                  fill="none" 
                                  stroke="currentColor" 
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gray-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-red-400">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Contact our experts to discuss how our SAP solutions can drive your digital transformation.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started Today
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </BackgroundFix>
  );
};

export default ServicePageWithCategories;

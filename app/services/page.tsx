import { Metadata } from 'next';
import Link from 'next/link';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

export const metadata: Metadata = {
  title: 'Our Services | Alphaxine Solutions',
  description: 'Comprehensive technology solutions including consulting, enterprise applications, data analytics, AI automation, BPO, and marketing services.',
};

const services = [
  {
    id: 'consulting',
    title: 'Consulting Services',
    description: 'Strategic guidance and expert consulting to accelerate your digital transformation journey with proven methodologies.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    subServices: [
      { name: 'IT Strategy', href: '/services/consulting/it-strategy', desc: 'Comprehensive IT roadmaps and strategic planning' },
      { name: 'AI Strategy', href: '/services/consulting/ai-strategy', desc: 'AI implementation strategies and frameworks' },
      { name: 'Data Strategy', href: '/services/consulting/data-strategy', desc: 'Data governance and analytics strategy' },
      { name: 'ERP Assessment', href: '/services/consulting/erp-assessment', desc: 'Enterprise system evaluation and optimization' },
      { name: 'Outsourcing Assessment', href: '/services/consulting/outsourcing-assessment', desc: 'Strategic outsourcing analysis and planning' }
    ]
  },
  {
    id: 'enterprise',
    title: 'Enterprise Applications',
    description: 'Robust enterprise software solutions that streamline operations, enhance productivity, and drive business growth.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    subServices: [
      { name: 'SAP Solutions', href: '/services/enterprise-applications/sap', desc: 'Complete SAP implementation and optimization' },
      { name: 'Microsoft Dynamics', href: '/services/enterprise-applications/microsoft-dynamics', desc: 'Dynamics 365 implementation and customization' },
      { name: 'Custom Development', href: '/services/enterprise-applications/custom-development', desc: 'Tailored enterprise application development' }
    ]
  },
  {
    id: 'data',
    title: 'Data & Analytics',
    description: 'Transform your data into actionable insights with our comprehensive analytics solutions and data management platforms.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    subServices: [
      { name: 'Data Lake Solutions', href: '/services/data-analytics/data-lake', desc: 'Centralized data storage and analytics platforms' },
      { name: 'Business Intelligence', href: '/services/data-analytics/business-intelligence', desc: 'Interactive dashboards and reporting solutions' },
      { name: 'Data Engineering', href: '/services/data-analytics/data-engineering', desc: 'Data pipeline and infrastructure development' },
      { name: 'Data Management', href: '/services/data-analytics/data-management', desc: 'Data governance and quality management' }
    ]
  },
  {
    id: 'automation',
    title: 'Intelligent Automation & AI',
    description: 'Leverage artificial intelligence and automation technologies to optimize processes and drive innovation.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    subServices: [
      { name: 'AI & Machine Learning', href: '/services/automation-ai/ai-ml', desc: 'Custom AI models and machine learning solutions' },
      { name: 'Robotic Process Automation', href: '/services/automation-ai/rpa', desc: 'Automated workflow and process optimization' },
      { name: 'Cognitive Solutions', href: '/services/automation-ai/cognitive-solutions', desc: 'Intelligent document processing and analysis' }
    ]
  },
  {
    id: 'bpo',
    title: 'Business Process Outsourcing',
    description: 'Scalable outsourcing solutions that optimize costs while maintaining quality and enhancing operational efficiency.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    subServices: [
      { name: 'Technology Applications', href: '/services/bpo/tech-applications', desc: 'Application development and maintenance' },
      { name: 'Technology Infrastructure', href: '/services/bpo/tech-infrastructure', desc: 'IT infrastructure management and support' },
      { name: 'Process & HRMS', href: '/services/bpo/process-hrms', desc: 'HR process outsourcing and management systems' }
    ]
  },
  {
    id: 'marketing',
    title: 'Intelligent Marketing',
    description: 'Data-driven marketing solutions that enhance customer engagement and drive measurable business results.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    subServices: [
      { name: 'Digital Marketing', href: '/services/marketing/digital-marketing', desc: 'Comprehensive digital marketing campaigns' },
      { name: 'Content Strategy', href: '/services/marketing/content-strategy', desc: 'Strategic content planning and creation' },
      { name: 'Marketing Analytics', href: '/services/marketing/analytics', desc: 'Data-driven marketing insights and optimization' }
    ]
  }
];

export default function ServicesPage() {
  return (
    <BackgroundFix>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-500">
                Our Services
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Comprehensive Technology Solutions for Modern Business
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Transform your business with our expert consulting, enterprise applications, data analytics, AI automation, and strategic outsourcing services designed to drive growth and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-red-600 mb-6">
                  Empower Your Business with Our Expert Solutions
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  From strategic consulting to cutting-edge technology implementation, we deliver comprehensive solutions that accelerate your digital transformation journey.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {services.map((service) => (
                  <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    {/* Service Header */}
                    <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 text-white">
                      <div className="flex items-center mb-4">
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4 text-white">
                          {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold">{service.title}</h3>
                      </div>
                      <p className="text-red-100 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Sub-services */}
                    <div className="p-6">
                      <div className="space-y-4">
                        {service.subServices.map((subService, index) => (
                          <Link
                            key={index}
                            href={subService.href}
                            className="block p-4 rounded-lg border border-gray-200 hover:border-red-300 hover:bg-red-50 transition-all duration-200 group"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <h4 className="font-semibold text-gray-800 group-hover:text-red-600 transition-colors">
                                  {subService.name}
                                </h4>
                                <p className="text-gray-600 text-sm mt-1">
                                  {subService.desc}
                                </p>
                              </div>
                              <svg
                                className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition-colors ml-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-lg mb-8 text-red-100 leading-relaxed">
                Let our experts help you choose the right solutions for your business needs. Contact us today to start your digital transformation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Get Started Today
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link 
                  href="/industries" 
                  className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
                >
                  Explore Industry Solutions
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </BackgroundFix>
  );
}
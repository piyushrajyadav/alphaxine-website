'use client';

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-8 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-red-600"></div>
        <div className="absolute bottom-40 left-10 w-40 h-40 rounded-full bg-red-600"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4 transform transition-transform hover:scale-105">
              <Image 
                src="/image/logo.webp" 
                alt="Alphaxine Logo" 
                width={120} 
                height={30}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-red-400 text-lg font-medium mb-6 italic">
              We Care for People
            </p>
           
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-6 relative pb-3">
                Contact Us
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-600"></span>
              </h3>
              <div className="space-y-3 text-gray-400">
                <div>
                  <h4 className="text-white font-semibold mb-2">Corporate Address</h4>
                  <p className="text-sm leading-relaxed">Unit 3A & 3B, 23rd Floor, Imagine Tech Park, Block DP, Plot 6, Salt Lake, DP Block, Sector V, Saltlake, Kolkata, West Bengal 700091</p>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-sm">+91 33 40670040</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">info@alphaxine.com</span>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/alphaxine" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/company/about-us" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/company/leadership" className="text-gray-400 hover:text-white transition-colors">Leadership Team</Link></li>
              <li><Link href="/company/mission-vision" className="text-gray-400 hover:text-white transition-colors">Mission & Vision</Link></li>
              <li><Link href="/company/journey" className="text-gray-400 hover:text-white transition-colors">Our Journey</Link></li>
              <li><Link href="/company/certifications" className="text-gray-400 hover:text-white transition-colors">Certifications</Link></li>
              <li><Link href="/company/partners" className="text-gray-400 hover:text-white transition-colors">Our Partners</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/consulting" className="text-gray-400 hover:text-white transition-colors">Consulting</Link></li>
              <li><Link href="/services/enterprise-applications" className="text-gray-400 hover:text-white transition-colors">Enterprise Applications</Link></li>
              <li><Link href="/services/data-analytics" className="text-gray-400 hover:text-white transition-colors">Data & Analytics</Link></li>
              <li><Link href="/services/automation-ai" className="text-gray-400 hover:text-white transition-colors">Intelligent Automation & AI</Link></li>
              <li><Link href="/services/bpo" className="text-gray-400 hover:text-white transition-colors">Business Process Outsourcing</Link></li>
              <li><Link href="/services/marketing" className="text-gray-400 hover:text-white transition-colors">Intelligent Marketing</Link></li>
            </ul>
          </div>

          {/* Products & Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><Link href="/industries/healthcare-education" className="text-gray-400 hover:text-white transition-colors">Healthcare & Education</Link></li>
              <li><Link href="/industries/it-ites" className="text-gray-400 hover:text-white transition-colors">IT/ITES</Link></li>
              <li><Link href="/industries/manufacturing" className="text-gray-400 hover:text-white transition-colors">Manufacturing</Link></li>
              <li><Link href="/industries/retail-logistics" className="text-gray-400 hover:text-white transition-colors">Retail & Logistics</Link></li>
              <li><Link href="/approach/digital-transformation" className="text-gray-400 hover:text-white transition-colors">Digital Transformation</Link></li>
              <li><Link href="/approach/strategy-methodology" className="text-gray-400 hover:text-white transition-colors">Strategy Methodology</Link></li>
              <li><Link href="/approach/implementation-methodology" className="text-gray-400 hover:text-white transition-colors">Implementation Methodology</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © Alphaxine. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
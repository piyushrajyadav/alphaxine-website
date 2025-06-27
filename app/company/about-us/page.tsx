'use client';

import Image from 'next/image';
import Link from 'next/link';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';
import CorporateBrochure from '@/app/components/about/CorporateBrochure';
import PageContent from '@/app/components/UI/PageContent';

const AboutUs = () => {
  return (
    <BackgroundFix>
      <div className="force-gray-bg">
        {/* Hero Section */}
        <section className="text-black py-20 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-600">About Alphaxine</h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Alphaxine Solutions Private Limited, founded in 2019 in Kolkata, began as an IT services firm specializing in SAP services for global clients. Over the years, we have evolved into a comprehensive technology solutions provider with a clear vision: to be one of the most preferred digital partners driving business through IT, while building a vibrant organization that changes lives every day – one solution at a time.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 inline-flex items-center justify-center">
                    Connect With Us
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                  <Link href="/company/leadership" className="border-2 border-red-600 text-red-600 px-6 py-3 rounded-lg font-medium hover:bg-red-50 inline-flex items-center justify-center">
                    Our Leadership
                  </Link>
                </div>
              </div>
              <div className="relative h-80 md:h-96">
                <Image 
                  src="/image/alphaxine team.jpeg" 
                  alt="Alphaxine Team" 
                  fill
                  className="object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold mb-6 text-red-600">Who We Are</h2>
                <div className="space-y-4 mb-8">
                  <p className="text-gray-700 leading-relaxed">
                    Alphaxine Solutions has expanded its expertise to include SAP ECC, BTP, S4 HANA, and various extensions. As an SAP Global PartnerEdge partner, we maintain industry-leading certifications and partnerships that validate our commitment to excellence.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Recently, we earned the "StartUpIndia" certification from the Government of India for our IT consulting services. With locations in Kolkata and our new expansion to Delaware, US, we have steadily grown our global footprint.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Our strategic focus on IT consulting and services has led to the formation of the Alphaxine Group, which aims to meet the evolving needs of clients through leadership, advisory, and core teams. We are driven by our commitment to provide creative, professional, and customized business solutions that enable customers to become wealthier while helping them face daily organizational challenges.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg">
                    <div className="text-black font-bold text-3xl mb-2">2019</div>
                    <div className="text-black">Founded</div>
                  </div>
                  <div className="p-4 rounded-lg">
                    <div className="text-black font-bold text-3xl mb-2">12+</div>
                    <div className="text-black">Global Clients</div>
                  </div>
                  <div className="p-4 rounded-lg">
                    <div className="text-black font-bold text-3xl mb-2">150+</div>
                    <div className="text-black">Team Members</div>
                  </div>
                  <div className="p-4 rounded-lg">
                    <div className="text-black font-bold text-3xl mb-2">4</div>
                    <div className="text-black">Global Offices</div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative h-96">
                <Image 
                  src="/image/alphaxine office.webp" 
                  alt="Alphaxine Office" 
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-red-600">Our Core Values</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Our values reflect our commitment to delivering innovative solutions that transform industries and improve lives through technology, while building lasting partnerships with our clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-red-600">Innovation</h3>
                <p className="text-gray-600 text-sm text-center">
                  We recognize the importance of innovation to navigate the complex business and technological landscape, providing high returns on efficiency and cost-effectiveness.
                </p>
              </div>
              
              <div className="p-6 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9zm8 0h-6v6h6V9z" clipRule="evenodd" />
                    <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-red-600">Integrity</h3>
                <p className="text-gray-600 text-sm text-center">
                  Our ISO certifications and commitment to quality standards reflect our dedication to maintaining the highest levels of integrity in all our operations.
                </p>
              </div>
              
              <div className="p-6 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-red-600">Collaboration</h3>
                <p className="text-gray-600 text-sm text-center">
                  We work closely with clients, partners like IIMs across India, and our extended ecosystem to deliver comprehensive solutions that meet evolving needs.
                </p>
              </div>
              
              <div className="p-6 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-red-600">Social Impact</h3>
                <p className="text-gray-600 text-sm text-center">
                  We focus on Healthcare and higher education in developing countries to create social value through digital transformation and improve lives globally.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image 
                  src="/image/IT_services.webp" 
                  alt="Our Approach" 
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="">
                <h2 className="text-3xl font-bold mb-6 text-red-600">Our Services & Capabilities</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Alphaxine's comprehensive services span across IT and AI strategy consulting, outsourcing assessments, transformation, automation, and specialized technology solutions designed to drive digital transformation across industries.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                      <span className="text-black font-bold">1</span>
                    </div>
                    <div className="">
                      <h3 className="text-xl font-bold mb-2 text-red-600">Enterprise Applications</h3>
                      <p className="text-gray-600 text-sm">SAP ECC, BTP, S4 HANA, Microsoft, and Odoo implementation and consulting services.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                      <span className="text-black font-bold">2</span>
                    </div>
                    <div className="">
                      <h3 className="text-xl font-bold mb-2 text-red-600">Data & Analytics</h3>
                      <p className="text-gray-600 text-sm">Microsoft Azure, Power BI, and Snowflake solutions for data-driven insights.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                      <span className="text-black font-bold">3</span>
                    </div>
                    <div className="">
                      <h3 className="text-xl font-bold mb-2 text-red-600">Higher Education</h3>
                      <p className="text-gray-600 text-sm">Partnerships with IIMs across India for executive education and classroom services.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                      <span className="text-black font-bold">4</span>
                    </div>
                    <div className="">
                      <h3 className="text-xl font-bold mb-2 text-red-600">Healthcare Solutions</h3>
                      <p className="text-gray-600 text-sm">Specialized focus on healthcare providers and digital transformation in developing countries.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-black border-t border-gray-200">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-red-600">Ready to Transform Your Business?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Partner with us to unlock your organization's potential. Let's work together to create innovative solutions that drive growth, enable success, and transform your business through cutting-edge technology.
            </p>
            <Link href="/contact" className="bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 inline-flex items-center">
              Get in Touch
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Corporate Brochure */}
        <CorporateBrochure />

      </div>
    </BackgroundFix>
  );
};

export default AboutUs; 












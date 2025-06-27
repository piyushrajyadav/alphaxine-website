'use client';

import Image from 'next/image';
import Link from 'next/link';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

const MissionVision = () => {
  return (
    <BackgroundFix>
      <div className="force-gray-bg">
        {/* Hero Section */}
        <section className="text-black py-20 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-600">Our Mission & Vision</h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Driving digital transformation and creating lasting value for our clients and communities worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-red-600">Our Mission</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    To build a vibrant organization by providing quality staffing solutions, along with innovating ourselves constantly, to be the leader of global trends in the sector. We also have a mission to change lives every day – one job at a time.
                  </p>
                  <p className="text-lg leading-relaxed">
                    To provide our clients with creative, professional, and customized business solutions in order to cater to their organizational needs and face the challenges every day they meet.
                  </p>
                  <p className="text-lg leading-relaxed font-medium text-red-600">
                    Enable customers to become wealthier.
                  </p>
                </div>
              </div>
              <div className="relative h-96">
                <Image 
                  src="/image/mission.webp" 
                  alt="Alphaxine Mission" 
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative h-96">
                <Image 
                  src="/image/vision.jpg" 
                  alt="Alphaxine Vision" 
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-red-600">Our Vision</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    To be one of the most preferred digital partners to drive business through IT.
                  </p>
                  <p className="text-lg leading-relaxed">
                    To be one of the most preferred and reliable sources for integrated IT Staffing Solutions.
                  </p>
                  <p className="text-lg leading-relaxed">
                    All other solutions offered to our clients are driven with expertise and knowledge to be recognized as the most renowned company in its space.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 bg-red-100 text-red-600 font-semibold rounded-full mb-4">
                Our Values
              </div>
              <h2 className="text-3xl font-bold mb-4 text-red-600">The Principles That Guide Us</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Our core values shape every decision we make and every solution we deliver, ensuring we remain true to our commitment of excellence and integrity.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-lg shadow-lg border-t-4 border-red-600">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-600">Innovation</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  We embrace cutting-edge technologies and creative problem-solving approaches to deliver solutions that drive meaningful business transformation. Our commitment to continuous learning ensures we stay ahead of industry trends and technological advancements.
                </p>
              </div>
              
              <div className="p-8 rounded-lg shadow-lg border-t-4 border-red-600">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-600">Client Partnership</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  We build lasting relationships based on trust, transparency, and mutual success. Our collaborative approach ensures that every client becomes a valued partner in achieving their strategic objectives and business goals.
                </p>
              </div>
              
              <div className="p-8 rounded-lg shadow-lg border-t-4 border-red-600">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-600">Excellence</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  We maintain the highest standards in everything we do, from technical execution to client service. Our ISO certifications and industry recognitions reflect our unwavering commitment to quality and operational excellence.
                </p>
              </div>
              
              <div className="p-8 rounded-lg shadow-lg border-t-4 border-red-600">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-600">Integrity</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  We conduct business with honesty and transparency in all our interactions. Our ethical practices and reliable delivery have earned us the trust of clients, partners, and team members across the globe.
                </p>
              </div>
              
              <div className="p-8 rounded-lg shadow-lg border-t-4 border-red-600">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m3 5.197V9a3 3 0 00-3-3v4.5M9 21v-7.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-600">Collaboration</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  We foster teamwork and knowledge sharing both within our organization and with our clients. Our collaborative culture enables us to leverage diverse expertise and deliver comprehensive solutions.
                </p>
              </div>
              
              <div className="p-8 rounded-lg shadow-lg border-t-4 border-red-600">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-600">Adaptability</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  We embrace change and continuously evolve our capabilities to meet emerging market demands. Our agile approach allows us to quickly respond to new challenges and opportunities in the digital landscape.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Purpose Statement */}
        <section className="py-20 text-black border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-red-600">Our Purpose</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-10">
                At Alphaxine Solutions, we exist to bridge the gap between technology potential and business success. We transform complex challenges into innovative solutions, empowering organizations to thrive in an increasingly digital world while creating meaningful opportunities for professional growth and development.
              </p>
              <div className="w-20 h-1 bg-red-600 mx-auto"></div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-black border-t border-gray-200">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-red-600">Join Us on Our Journey</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Partner with us to transform your digital vision into reality. Together, we can build innovative solutions that drive growth, create value, and shape the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 inline-flex items-center justify-center">
                Contact Us
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link href="/company/leadership" className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-red-50 inline-flex items-center justify-center">
                Meet Our Team
              </Link>
            </div>
          </div>
        </section>
      </div>
    </BackgroundFix>
  );
};

export default MissionVision; 











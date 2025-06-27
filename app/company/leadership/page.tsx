'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';
import CorporatePresentation from '@/app/components/leadership/CorporatePresentation';

interface LeaderProfile {
  id: string;
  name: string;
  position: string;
  image: string;
  linkedin?: string;
  email?: string;
  videoId?: string;
  bio?: string;
}

const LeadershipTeam = () => {
  const [activeProfile, setActiveProfile] = useState<string | null>(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState('');

  const leadershipProfiles: LeaderProfile[] = [
    {
      id: 'tamal-datta',
      name: 'Tamal Datta',
      position: 'Chairman & Managing Director',
      image: '/image/tamal datta.jpeg',
      linkedin: 'https://www.linkedin.com/in/tamal-datta-54929135/',
      email: 'tamal@alphaxine.com',
      bio: 'An engineer (B.Tech & M.Tech) turned into a management professional (MBA, alumni of IIM-Kozhikode) spanning more than 11 years of experience in Oil & Gas, Mining, Heavy Engineering, and IT Industries. Currently, he is Chairman & MD of Alphaxine Solutions Private Limited and Managing Director of Skybuffer India, a member of Skybuffer\'s global board.'
    },
    {
      id: 'mallika-datta',
      name: 'Mallika Datta',
      position: 'Chief Executive Officer',
      image: '/image/mallika datta.jpeg',
      linkedin: 'https://www.linkedin.com/in/mallika-datta-506789187/',
      email: 'mallika@alphaxine.com',
      bio: 'Mallika has more than 9 years of experience in Recruitment, Capital Market and Banking operations. She is having a Post Graduate degree in English literature and having a wide range of professional certifications like NISM Series V, Series VII, Series VIII. She has worked with different sectors like Banking, Capital market and Automobiles in different verticals like HR, Recruitment, Loan Officer, Bank Officer and Financial Advisor (ICICI BANK, HDFC BANK). Currently working as C.E.O of Alphaxine Solutions Private Limited.'
    },
    {
      id: 'abhijit-pal',
      name: 'Abhijit Pal',
      position: 'Executive Director',
      image: '/image/abhijit pal.jpeg',
      linkedin: 'https://www.linkedin.com/in/abhijit-pal-0721593/',
      email: 'abhijit@alphaxine.com',
      bio: 'A seasoned technology leader with extensive experience in driving digital transformation and innovation. Abhijit brings deep expertise in enterprise technology solutions and strategic business development, playing a crucial role in Alphaxine\'s technological advancement and executive decision-making.'
    },
    {
      id: 'sourav-mukharjee',
      name: 'Sourav Mukharjee',
      position: 'Head - Business Development & Admin',
      image: '/image/sorav mukhrjee.jpeg',
      linkedin: 'https://www.linkedin.com/in/souravmukherjeeofficial/',
      email: 'sourav@alphaxine.com',
      bio: 'A dynamic business development professional with exceptional skills in strategic planning and administrative excellence. Sourav leads our business development initiatives and administrative operations, ensuring seamless growth and operational efficiency across all verticals of Alphaxine Solutions.'
    },
  ];

  const openVideoModal = (videoId: string) => {
    setCurrentVideoId(videoId);
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
    setCurrentVideoId('');
  };

  return (
    <BackgroundFix>
      <div className="force-gray-bg">
        {/* Hero Section */}
        <section className="text-black py-20 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-600">Our Leadership Team</h1>
              <div className="h-6 bg-gray-200 rounded w-full max-w-2xl mx-auto"></div>
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-red-600">Executive Leadership</h2>
              <div className="h-6 bg-gray-200 rounded w-full max-w-3xl mx-auto mb-2"></div>
              <div className="h-6 bg-gray-200 rounded w-full max-w-2xl mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadershipProfiles.map((leader) => (
                <div 
                  key={leader.id} 
                  className="rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className="relative h-64">
                    <Image 
                      src={leader.image} 
                      alt={leader.name} 
                      fill
                      className="object-cover"
                    />
                    {leader.videoId && (
                      <button 
                        onClick={() => openVideoModal(leader.videoId!)}
                        className="absolute bottom-4 right-4 bg-red-600 text-white rounded-full p-2 shadow-lg hover:bg-red-700 transition-colors"
                        aria-label={`Watch ${leader.name}'s introduction video`}
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                        </svg>
                      </button>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-red-600 mb-1">{leader.name}</h3>
                    <p className="text-black font-medium mb-4">{leader.position}</p>
                    
                    <div className="flex space-x-3 mb-4">
                      {leader.linkedin && (
                        <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="text-black hover:text-red-600 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                      )}
                      {leader.email && (
                        <a href={`mailto:${leader.email}`} className="text-black hover:text-red-600 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </a>
                      )}
                    </div>
                    
                    {/* Full Bio - Always Shown */}
                    {leader.bio && (
                      <div className="mb-4">
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {leader.bio}
                        </p>
                      </div>
                    )}
                    
                    {leader.videoId && (
                      <button
                        onClick={() => openVideoModal(leader.videoId!)}
                        className="mt-4 inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors"
                      >
                        Watch Introduction Video
                        <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advisory Board Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-red-600">Honorary Advisory Board</h2>
              <div className="h-6 bg-gray-200 rounded w-full max-w-3xl mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image 
                      src="/image/amalan_chakrabarti.jpg" 
                      alt="Dr. Amalan Chakrabarti" 
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="">
                    <h3 className="text-xl font-bold text-red-600">Dr. Amalan Chakrabarti</h3>
                    <p className="text-black">Distinguished Professor</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    A distinguished academician and researcher with extensive expertise in technology and innovation. Dr. Chakrabarti brings valuable academic insights and strategic guidance to Alphaxine Solutions, contributing to our research and development initiatives and helping bridge the gap between academic excellence and industry innovation.
                  </p>
                </div>
              </div>

              <div className="rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image 
                      src="https://media.licdn.com/dms/image/v2/D4D03AQEJYYi5PUhVCw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1694536689536?e=1756339200&v=beta&t=uPhfhgqpgeL6FQh-ZVaMHWhwsbxuk8zHf1mOflCPJq0" 
                      alt="Amit Kumar Das" 
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="">
                    <h3 className="text-xl font-bold text-red-600">Amit Kumar Das</h3>
                    <p className="text-black">Distinguished Professor</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    A distinguished professional bringing valuable industry insights and strategic guidance to Alphaxine Solutions, contributing to our growth and innovation initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-black border-t border-gray-200">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-red-600">Join Our Team</h2>
            <div className="h-6 bg-gray-200 rounded w-full max-w-2xl mx-auto mb-8"></div>
            <Link href="/careers" className="bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 inline-flex items-center">
              View Opportunities
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Corporate Presentation */}
        <CorporatePresentation />
      </div>
    </BackgroundFix>
  );
};

export default LeadershipTeam; 












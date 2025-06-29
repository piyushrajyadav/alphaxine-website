'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';
import { sendEmail } from '@/app/lib/emailjs';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);
    setErrorMessage(null);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: new Date().toLocaleString(),
      to_name: 'alphaxine Team'
    };

    try {
      const result = await sendEmail(templateParams);

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setErrorMessage('An unexpected error occurred');
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setSubmitStatus(null);
        setErrorMessage(null);
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <BackgroundFix>
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold text-gray-800 mb-8">Contact Us</h1>
              
              <div className="flex flex-col gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full">
                  <h2 className="text-2xl font-semibold mb-6 text-gray-800">Send us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">Name*</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                        required
                        minLength={2}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">Email*</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-gray-700 mb-2">Message*</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                        required
                        minLength={10}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700 transition-colors duration-300 flex items-center justify-center ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : 'Send Message'}
                    </button>

                    {submitStatus === 'success' && (
                      <div className="text-green-600 text-center mt-4 p-3 bg-green-50 rounded-md">
                        <p>Thank you for your message. We'll get back to you soon!</p>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="text-red-600 text-center mt-4 p-3 bg-red-50 rounded-md">
                        <p>Something went wrong. Please try again later.</p>
                        {errorMessage && (
                          <p className="text-sm mt-1">{errorMessage}</p>
                        )}
                      </div>
                    )}
                  </form>
                </div>

                {/* Contact Information */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Offices</h2>
                  
                  {/* All Addresses in One Card */}
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-red-600 mb-6">Office Locations</h3>
                    
                    <div className="space-y-6">
                      {/* Corporate Address */}
                      <div className="flex items-start space-x-4 pb-4 border-b border-gray-200">
                        <div className="bg-red-600 p-3 rounded-full flex-shrink-0">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-red-600 mb-2 text-lg">Corporate Address</h4>
                          <p className="text-gray-700 leading-relaxed">
                            Unit 3A & 3B, 23rd Floor, Imagine Tech Park, Block DP, Plot 6, Salt Lake, DP Block, Sector V, Saltlake, Kolkata, West Bengal 700091
                          </p>
                        </div>
                      </div>

                      {/* Registered Address */}
                      <div className="flex items-start space-x-4 pb-4 border-b border-gray-200">
                        <div className="bg-blue-600 p-3 rounded-full flex-shrink-0">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-red-600 mb-2">Registered Address</h4>
                          <p className="text-gray-700 leading-relaxed">
                            6th Floor, 2A, Ecospace, Ecospace Business Park, Action Area II, Newtown, Kolkata - 700160
                          </p>
                        </div>
                      </div>

                      {/* Office Address */}
                      <div className="flex items-start space-x-4 pb-4 border-b border-gray-200">
                        <div className="bg-green-600 p-3 rounded-full flex-shrink-0">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-red-600 mb-2">Office Address</h4>
                          <p className="text-gray-700 leading-relaxed">
                            Unit 11G, 11th Floor, Everest House, 46C, Chowringhee Road, Kolkata - 700 071
                          </p>
                        </div>
                      </div>

                      {/* US Office Address */}
                      <div className="flex items-start space-x-4">
                        <div className="bg-purple-600 p-3 rounded-full flex-shrink-0">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-red-600 mb-2">US Office Address</h4>
                          <p className="text-gray-700 leading-relaxed">
                            Alphaxine LLC, 16192 Coastal Highway, Lewes, Delaware 19958, County of Sussex
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                      <div className="flex items-center space-x-3">
                        <div className="bg-red-600 p-2 rounded-full">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800 text-sm">Phone</h3>
                          <p className="text-gray-600 text-sm">+91 33 40670040</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-lg">
                      <div className="flex items-center space-x-3">
                        <div className="bg-red-600 p-2 rounded-full">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800 text-sm">Email</h3>
                          <p className="text-gray-600 text-sm">info@alphaxine.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </BackgroundFix>
  );
}
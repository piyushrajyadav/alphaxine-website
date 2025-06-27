'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// WordPress integration commented out - using static content
// import { getLatestInsights } from '@/lib/wordpress';

interface InsightPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

// Static content to replace WordPress integration
const staticInsights: InsightPost[] = [
  {
    id: 1,
    slug: 'digital-transformation-trends-2024',
    title: 'Digital Transformation Trends Shaping 2024',
    excerpt: 'Explore the key digital transformation trends that are revolutionizing businesses across industries.',
    date: '2024-01-15',
    image: '/images/digital-transformation.jpg',
    category: 'Digital Strategy'
  },
  {
    id: 2,
    slug: 'cloud-migration-best-practices',
    title: 'Cloud Migration: Best Practices for Success',
    excerpt: 'Learn essential strategies for successful cloud migration and avoid common pitfalls.',
    date: '2024-01-10',
    image: '/images/cloud-migration.jpg',
    category: 'Cloud Solutions'
  },
  {
    id: 3,
    slug: 'ai-implementation-guide',
    title: 'AI Implementation: A Strategic Guide for Businesses',
    excerpt: 'Discover how to effectively implement AI solutions to drive business growth and efficiency.',
    date: '2024-01-05',
    image: '/images/ai-implementation.jpg',
    category: 'AI & Innovation'
  }
];

const Insights = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'blogs' | 'case-studies'>('all');

  // Filter static content based on active tab
  const getFilteredInsights = () => {
    // Since we're using static content, we'll show the same insights for all tabs
    return staticInsights;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Latest Insights & Perspectives
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay updated with our latest thoughts on technology trends, industry developments, and strategic insights that drive business transformation.
            </p>
          </motion.div>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-lg p-1 shadow-sm">
            <button
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'all' ? 'bg-red-600 text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('all')}
            >
              All Insights
            </button>
            <button
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'case-studies' ? 'bg-red-600 text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('case-studies')}
            >
              Case Studies
            </button>
            <button
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'blogs' ? 'bg-red-600 text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('blogs')}
            >
              Blog Posts
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {getFilteredInsights().map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href={`/insights/${post.slug}`}>
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-sm text-gray-500">{formatDate(post.date)}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 line-clamp-2 hover:text-red-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-red-600 font-medium flex items-center text-sm">
                      Read more
                      <svg 
                        className="ml-1 w-4 h-4" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/insights"
            className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg shadow hover:bg-red-700 transition-colors duration-200"
          >
            View all insights
            <svg
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Insights; 
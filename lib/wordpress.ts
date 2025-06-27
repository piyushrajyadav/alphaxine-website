/*
WordPress integration commented out - this file is no longer used in the current static implementation.
All WordPress dependencies and functionality have been replaced with static content.

This file contained WordPress API integration code for:
- Job listings and details
- Service pages and categories  
- Blog posts and insights
- Dynamic page content
- Menu items and navigation
- Search functionality
- Widget areas

All of this functionality has been replaced with static content in the respective components.
The original WordPress integration code has been removed to prevent build issues.

If WordPress integration is needed in the future, this file can be restored from version control.
*/

// Placeholder exports to prevent import errors
export const getLatestInsights = () => Promise.resolve([]);
export const getAllJobs = () => Promise.resolve([]);
export const getJobBySlug = () => Promise.resolve(null);
export const getAllServices = () => Promise.resolve([]);
export const getServiceBySlug = () => Promise.resolve(null);
export const getPageBySlug = () => Promise.resolve(null);
export const getPosts = () => Promise.resolve([]);
export const getPost = () => Promise.resolve(null);
export const getCategories = () => Promise.resolve([]);
export const getRecentPosts = () => Promise.resolve([]);
export const getCaseStudies = () => Promise.resolve([]);

export default {
  getLatestInsights,
  getAllJobs,
  getJobBySlug,
  getAllServices,
  getServiceBySlug,
  getPageBySlug,
  getPosts,
  getPost,
  getCategories,
  getRecentPosts,
  getCaseStudies
};

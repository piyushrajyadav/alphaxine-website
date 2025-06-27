/*
WordPress Local API integration commented out - this file is no longer used.
All WordPress dependencies and functionality have been replaced with static content.

Original file contained local WordPress installation API integration code.
This has been disabled to prevent build issues and connection attempts.

If WordPress local integration is needed in the future, this file can be restored from version control.
*/

// Placeholder exports to prevent import errors
export const getLatestInsights = () => Promise.resolve([]);
export const getPageBySlug = () => Promise.resolve(null);
export const getPosts = () => Promise.resolve([]);
export const getAllPageSlugs = () => Promise.resolve([]);
export const sanitizeHtml = (html: string) => html;
export const WORDPRESS_LOCAL_API_URL = '';

export default {
  getLatestInsights,
  getPageBySlug,
  getPosts,
  getAllPageSlugs,
  sanitizeHtml
};

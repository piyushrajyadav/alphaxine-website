/*
WordPress API helper functions commented out - this file is no longer used.
All WordPress dependencies and functionality have been replaced with static content.

Original file contained WordPress API helper functions for:
- Fetching latest posts and insights
- Getting single posts by slug
- Menu fetching
- Page content by slug
- Search functionality
- Widget area content

All of this functionality has been replaced with static content in the respective components.
This has been disabled to prevent build issues and connection attempts.

If WordPress API integration is needed in the future, this file can be restored from version control.
*/

// Placeholder exports to prevent import errors
export const getLatestInsights = () => Promise.resolve([]);
export const getPostBySlug = () => Promise.resolve(null);
export const getMenu = () => Promise.resolve([]);
export const getPageBySlug = () => Promise.resolve(null);
export const searchContent = () => Promise.resolve([]);
export const getWidgetArea = () => Promise.resolve([]);

export default {
  getLatestInsights,
  getPostBySlug,
  getMenu,
  getPageBySlug,
  searchContent,
  getWidgetArea
};

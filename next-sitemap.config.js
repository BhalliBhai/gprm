/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // Replace with your site's actual URL
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://gprm.vercel.app',
  generateRobotsTxt: true, // (optional)
  // ...other options
};

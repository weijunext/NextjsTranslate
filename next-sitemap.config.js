/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.URL || "https://nextjstranslate.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
};

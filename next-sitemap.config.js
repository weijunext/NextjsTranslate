/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.URL || 'https://nextjstranslate.com',
  generateRobotsTxt: true,
  exclude: ['/server.xml'], // <= exclude her
}
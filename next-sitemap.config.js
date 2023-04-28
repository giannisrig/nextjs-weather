/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://weather-app.giannisriganas.com",
  generateIndexSitemap: false,
  generateRobotsTxt: true, // (optional)
};

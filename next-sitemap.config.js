/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://generaltechworks.com/", // Replace with your domain
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000, // (optional) split sitemaps if too large
  changefreq: "daily",
  priority: 0.7,
  exclude: [""], // (optional) paths to exclude
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
    ],
  },
};

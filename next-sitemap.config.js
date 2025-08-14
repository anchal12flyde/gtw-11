/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://generaltechworks.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  exclude: [
    "/private/",
    "/temp/",
    "/agency-partnership/",
    "/animation/",
    "/audit/",
    "/join-our-team/",
    "/thankyou-page/",
    "/step-one-form/",
    "/step-five/",
    "/step-four/",
    "/step-three-consult/",
    "/step-three-infra/",
    "/step-three-mobile/",
    "/step-three-saas/",
    "/step-three-web/",
    "/step-two-form/",
    "/style-guide/",
  ],
  robotsTxtOptions: {
    policies: [
      // Normal users
      {
        userAgent: "*",
        disallow: [
          "/private/",
          "/temp/",
          "/agency-partnership/",
          "/animation/",
          "/audit/",
          "/join-our-team/",
          "/thankyou-page/",
          "/step-one-form/",
          "/step-five/",
          "/step-four/",
          "/step-three-consult/",
          "/step-three-infra/",
          "/step-three-mobile/",
          "/step-three-saas/",
          "/step-three-web/",
          "/step-two-form/",
          "/style-guide/",
        ],
      },
      { userAgent: "*", allow: "/" },

      // Googlebot
      { userAgent: "Googlebot", allow: "/" },

      // Capital path block
      { userAgent: "*", disallow: "/Audit/" },
      { userAgent: "*", allow: "/audit/" },
    ],
    additionalSitemaps: ["https://generaltechworks.com/sitemap.xml"],
    additionalRobotsTxt: `
# Host
Host: https://generaltechworks.com/
`,
  },
};

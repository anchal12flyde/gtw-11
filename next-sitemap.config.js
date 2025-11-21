module.exports = {
  siteUrl: "https://www.generaltechworks.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
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
          "/lead-gen-form/",
        ],
      },
    ],
  },
};

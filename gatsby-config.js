module.exports = {
  siteMetadata: {
    title: `Harvard Undergraduate Veterans Organization`,
    description: `Home of the HUVO`,
    author: `Curt and @drawnwren`,
    menuLinks: [
      {
        name: "About the Team",
        link: "/aboutus",
      },
      {
        name: "Events",
        link: "/events",
      },
      {
        name: "Reach Out",
        link: "/reachout",
      },
      /* ##TODO: Waiting on data
      {
        name: "FAQ",
        link: "/faqs",
      },
      */
    ],
    mission:
      "The Harvard Undergraduate Veterans Organization represents American and international veterans at Harvard College. As an organization, we unify a small, select demographic inside of Harvard College with the aim of facilitating exchange of ideas with and increasing awareness of veterans in the greater Harvard community. Aside from our commitment to the exchange of ideas within the college, we also liaise with the larger veteran communities at Harvard’s graduate schools, veterans seeking admission to Harvard College, and those in the professional world who seek to share their experience with student veterans. Our organization continues to work hand-in-hand with Harvard and veterans to smooth the application and transition process for those who have demonstrated excellence in the service of their nation.",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/faqs`,
        name: "faqs",
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/members`,
        name: "members",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: "blog",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Harvard Undergraduate Veterans Organization`,
        short_name: `HUVO`,
        start_url: `/`,
        background_color: `#A51C30`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/harvard-college.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

module.exports = {
  siteMetadata: {
    title: `Harvard Undergraduate Veterans Organization`,
    description: `Home of the HUVO`,
    author: `Curt and @drawnwren`,
    menuLinks: [
      {
        name: 'Reach Out',
        link: '/ReachOut',
      },
      {
        name: 'About the Team',
        link: '/AboutUs',
      },
      {
        name: 'Events',
        link: '/Events',
      },
      {
        name: 'FAQ',
        link: '/FAQs',
      },
      {
        name: 'Gallery',
        link: '/Gallery',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('sass'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/assets`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/members`,
        name: 'members',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: 'blog',
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

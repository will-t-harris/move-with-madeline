const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Move with Madeline`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    { resolve: `gatsby-plugin-mdx`, options: { extensions: [".mdx", `.md`] } },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ["Bubbler One", "Varela"],
        },
      },
    },
    {
      resolve: `gatsby-background-image-es5`,
      options: {
        specialChars: "/:",
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout.js`),
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
      },
    },
    /**
     * Source plugins
     */
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `move.with.madeline`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `index-pages`,
        path: `${__dirname}/blog/index-pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fitness-posts`,
        path: `${__dirname}/blog/fitness`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `travel-posts`,
        path: `${__dirname}/blog/travel`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `food-posts`,
        path: `${__dirname}/blog/food`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `lifestyle-posts`,
        path: `${__dirname}/blog/lifestyle`,
      },
    },
  ],
}

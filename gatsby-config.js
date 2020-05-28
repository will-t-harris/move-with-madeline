module.exports = {
  siteMetadata: {
    title: `Move with Madeline`,
    description: `Fitness, wellness, and lifestyle blog for Madeline Walkdon`,
    author: `Will Harris`,
    keywords: ["fitness", "movement", "travel", "lifestyle", "food"],
    siteUrl: "https://www.movewithmadeline.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    { resolve: `gatsby-plugin-mdx`, options: { extensions: [".mdx", `.md`] } },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
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

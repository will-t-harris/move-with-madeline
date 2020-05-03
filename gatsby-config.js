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
    `gatsby-plugin-mdx`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ["Bubbler One", "Varela"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout.tsx`),
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        content: [
          path.join(process.cwd(), "src/**/!(*.d).{ts,js,jsx,tsx,md,mdx}"),
        ],
      },
    },
    /**
     * Source plugins
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/img`,
      },
    },
  ],
}

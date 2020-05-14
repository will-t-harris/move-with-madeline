const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

// Add slug nodes to graph on build
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: `pages` })

    createNodeField({ node, name: `slug`, value: `${slug}` })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const FitnessPostTemplate = path.resolve(
    "src/templates/fitnessPostTemplate.js"
  )
  const TravelPostTemplate = path.resolve("src/templates/travelPostTemplate.js")
  const FoodPostTemplate = path.resolve("src/templates/foodPostTemplate.js")
  const LifestylePostTemplate = path.resolve(
    "src/templates/lifestylePostTemplate.js"
  )

  const result = await graphql(`
    {
      fitnessPosts: allFile(
        filter: { sourceInstanceName: { eq: "fitness-posts" } }
      ) {
        nodes {
          childMarkdownRemark {
            fields {
              slug
            }
          }
        }
      }
      travelPosts: allFile(
        filter: { sourceInstanceName: { eq: "travel-posts" } }
      ) {
        nodes {
          childMarkdownRemark {
            fields {
              slug
            }
          }
        }
      }
      foodPosts: allFile(filter: { sourceInstanceName: { eq: "food-posts" } }) {
        nodes {
          childMarkdownRemark {
            fields {
              slug
            }
          }
        }
      }
      lifestylePosts: allFile(
        filter: { sourceInstanceName: { eq: "lifestyle-posts" } }
      ) {
        nodes {
          childMarkdownRemark {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild("Error while running GraphQL query")
    return
  }

  result.data.fitnessPosts.nodes.forEach((node) => {
    const { childMarkdownRemark } = node

    createPage({
      path: `/fitness${childMarkdownRemark.fields.slug}`,
      component: FitnessPostTemplate,
      context: {
        slug: childMarkdownRemark.fields.slug,
      },
    })
  })

  result.data.travelPosts.nodes.forEach((node) => {
    const { childMarkdownRemark } = node

    createPage({
      path: `/travel${childMarkdownRemark.fields.slug}`,
      component: TravelPostTemplate,
      context: {
        slug: childMarkdownRemark.fields.slug,
      },
    })
  })

  result.data.foodPosts.nodes.forEach((node) => {
    const { childMarkdownRemark } = node

    createPage({
      path: `food${childMarkdownRemark.fields.slug}`,
      component: FoodPostTemplate,
      context: {
        slug: childMarkdownRemark.fields.slug,
      },
    })
  })

  result.data.lifestylePosts.nodes.forEach((node) => {
    const { childMarkdownRemark } = node

    createPage({
      path: `lifestyle${childMarkdownRemark.fields.slug}`,
      component: LifestylePostTemplate,
      context: {
        slug: childMarkdownRemark.fields.slug,
      },
    })
  })
}

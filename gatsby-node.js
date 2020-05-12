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
            frontmatter {
              topImage
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
        topImage: childMarkdownRemark.frontmatter.topImage,
      },
    })
  })
}

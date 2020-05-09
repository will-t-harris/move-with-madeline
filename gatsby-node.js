const { createFilePath } = require(`gatsby-source-filesystem`)

// Add slug nodes to graph on build
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: `pages` })

    createNodeField({ node, name: `slug`, value: `/fitness${slug}` })
  }
}

// exports.createPages = async ({ graphql, actions, reporter }) => {
//   const { createPage } = actions

//   const result = await graphql(``)
// }

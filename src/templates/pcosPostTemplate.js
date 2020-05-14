import React from "react"
import { graphql } from "gatsby"

const PCOSPostTemplate = ({ data }) => {
  const {
    postContent: { childMarkdownRemark: post },
  } = data

  return (
    <div>
      <img src={post.frontmatter.topImage} className="w-full" />
      <div>
        <h1 className="text-center text-2xl font-content">
          {post.frontmatter.title}
        </h1>
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
          className="mx-6"
        ></div>
      </div>
    </div>
  )
}

export default PCOSPostTemplate

export const query = graphql`
  query pcosPostQuery($slug: String!) {
    postContent: file(
      sourceInstanceName: { eq: "pcos-posts" }
      childMarkdownRemark: { fields: { slug: { eq: $slug } } }
    ) {
      id
      childMarkdownRemark {
        frontmatter {
          title
          publishedDate
          topImage
          buttonText
          cardText
        }
        html
      }
    }
  }
`

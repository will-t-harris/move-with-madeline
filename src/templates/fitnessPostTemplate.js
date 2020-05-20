import React from "react"
import { graphql } from "gatsby"

const FitnessPostTemplate = ({ data }) => {
  const {
    postContent: { childMarkdownRemark: post },
  } = data

  return (
    <div>
      <img
        src={post.frontmatter.topImage}
        className="w-full h-640 object-cover object-top"
      />
      <div className="markdown">
        <h1 className="text-center">{post.frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
          className="markdown"
        ></div>
      </div>
    </div>
  )
}

export default FitnessPostTemplate

export const query = graphql`
  query fitnessPostQuery($slug: String!) {
    postContent: file(
      sourceInstanceName: { eq: "fitness-posts" }
      childMarkdownRemark: { fields: { slug: { eq: $slug } } }
    ) {
      id
      childMarkdownRemark {
        frontmatter {
          title
          publishedDate
          topImage
        }
        html
      }
    }
  }
`

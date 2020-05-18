import React from "react"
import { graphql } from "gatsby"

const FoodPostTemplate = ({ data }) => {
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
        <h1 className="text-center text-2xl font-content">
          {post.frontmatter.title}
        </h1>
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
          className="markdown"
        ></div>
      </div>
    </div>
  )
}

export default FoodPostTemplate

export const query = graphql`
  query foodPostQuery($slug: String!) {
    postContent: file(
      sourceInstanceName: { eq: "food-posts" }
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

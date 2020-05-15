import React from "react"
import { graphql } from "gatsby"

const FoodPostTemplate = ({ data }) => {
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
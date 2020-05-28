import React from "react"
import { graphql } from "gatsby"
import startCase from "lodash/startCase"
import toLower from "lodash/toLower"

import SEO from "../components/SEO"

const FitnessPostTemplate = ({ data }) => {
  const {
    postContent: { childMarkdownRemark: post },
  } = data
  const pathname = data.sitePage.path
  const startCaseTitle = startCase(toLower(post.frontmatter.title))

  return (
    <div>
      <SEO title={startCaseTitle} pathname={pathname} />
      <img
        src={post.frontmatter.topImage}
        className="w-full h-760 object-cover"
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

export default FitnessPostTemplate

export const query = graphql`
  query fitnessPostQuery($slug: String!) {
    sitePage(path: { regex: $slug }) {
      path
    }
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

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import BlogPostCard from "../components/BlogPostCard"

const PCOSPage = () => {
  const data = useStaticQuery(graphql`
    query PCOSPageQuery {
      pcosIndexContent: markdownRemark(fields: { slug: { eq: "/pcos/" } }) {
        frontmatter {
          title
        }
      }
      pcosIndexImage: imageSharp(
        fluid: { originalName: { regex: "/pcos-index/" } }
      ) {
        id
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
      pcosPost: allFile(filter: { sourceInstanceName: { eq: "pcos-posts" } }) {
        nodes {
          id
          childMarkdownRemark {
            frontmatter {
              buttonText
              cardText
              title
              topImage
              publishedDate
            }
            fields {
              slug
            }
          }
          sourceInstanceName
        }
      }
    }
  `)

  return (
    <>
      <Img
        fluid={data.pcosIndexImage.fluid}
        className="index-image-clip-path h-552"
      />
      <div>
        <h1 className="text-center text-3xl font-bold font-content mb-16">
          {data.pcosIndexContent.frontmatter.title.toUpperCase()}
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 lg:grid-rows-6 gap-1">
        {data.pcosPost &&
          data.pcosPost.nodes.map((node) => (
            <BlogPostCard
              key={node.id}
              data={node.childMarkdownRemark}
              source={node.sourceInstanceName}
            />
          ))}
      </div>
    </>
  )
}

export default PCOSPage

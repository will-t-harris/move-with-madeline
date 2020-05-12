import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import BlogPostCard from "../components/BlogPostCard"

const FitnessPage = () => {
  const data = useStaticQuery(graphql`
    query fitnessPageQuery {
      fitnessIndexContent: markdownRemark(
        fields: { slug: { eq: "/fitness/" } }
      ) {
        frontmatter {
          title
        }
      }
      fitnessIndexImage: imageSharp(
        fluid: { originalName: { eq: "fitness-01.png" } }
      ) {
        id
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
      fitnessPost: allFile(
        filter: { sourceInstanceName: { eq: "fitness-posts" } }
      ) {
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
        }
      }
    }
  `)

  return (
    <>
      <div>
        <Img
          fluid={data.fitnessIndexImage.fluid}
          className="index-image-clip-path"
        />
      </div>
      <div>
        <h1 className="text-center text-2xl font-content">
          {data.fitnessIndexContent.frontmatter.title.toUpperCase()}
        </h1>
      </div>
      <div className="grid">
        {data.fitnessPost &&
          data.fitnessPost.nodes.map((node) => (
            <BlogPostCard key={node.id} data={node.childMarkdownRemark} />
          ))}
      </div>
    </>
  )
}

export default FitnessPage

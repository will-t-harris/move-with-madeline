import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import BlogPostCard from "../components/BlogPostCard"

const LifestylePage = () => {
  const data = useStaticQuery(graphql`
    query lifestylePageQuery {
      lifestyleIndexContent: markdownRemark(
        fields: { slug: { eq: "/lifestyle/" } }
      ) {
        frontmatter {
          title
        }
      }
      lifestyleIndexImage: imageSharp(
        fluid: { originalName: { regex: "/lifestyle-index/" } }
      ) {
        id
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
      lifestylePost: allFile(
        filter: { sourceInstanceName: { eq: "lifestyle-posts" } }
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
          sourceInstanceName
        }
      }
    }
  `)

  return (
    <>
      <Img
        fluid={data.lifestyleIndexImage.fluid}
        className="index-image-clip-path h-552"
      />
      <div>
        <h1 className="text-center text-3xl font-bold font-content mb-16">
          {data.lifestyleIndexContent.frontmatter.title.toUpperCase()}
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 lg:grid-rows-6 gap-1">
        {data.lifestylePost &&
          data.lifestylePost.nodes.map((node) => (
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

export default LifestylePage

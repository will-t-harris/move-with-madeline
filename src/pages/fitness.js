import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { SEO, BlogPostCard } from "../components"

const FitnessPage = () => {
  const data = useStaticQuery(graphql`
    query fitnessPageQuery {
      sitePage(
        component: { regex: "/fitness/" }
        id: { eq: "SitePage /fitness/" }
      ) {
        path
      }
      fitnessIndexContent: markdownRemark(
        fields: { slug: { eq: "/fitness/" } }
      ) {
        frontmatter {
          title
        }
      }
      fitnessIndexImage: imageSharp(
        fluid: { originalName: { regex: "/fitness-index/" } }
      ) {
        id
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
      fitnessPost: allFile(
        filter: { sourceInstanceName: { eq: "fitness-posts" } }
      ) {
        nodes {
          id
          childMarkdownRemark {
            frontmatter {
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

  const pathname = data.sitePage.path

  return (
    <>
      <SEO title="Fitness" pathname={pathname} />
      <Img
        fluid={data.fitnessIndexImage.fluid}
        className="index-image-clip-path h-552"
      />
      <div>
        <h1 className="text-center text-3xl font-bold font-content mb-16">
          {data.fitnessIndexContent.frontmatter.title.toUpperCase()}
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 lg:grid-rows-6 gap-1">
        {data.fitnessPost &&
          data.fitnessPost.nodes.map((node) => (
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

export default FitnessPage

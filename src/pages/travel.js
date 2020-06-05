import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/SEO"
import BlogPostCard from "../components/BlogPostCard"

const TravelPage = () => {
  const data = useStaticQuery(graphql`
    query travelPageQuery {
      sitePage(
        component: { regex: "/travel/" }
        id: { eq: "SitePage /travel/" }
      ) {
        path
      }
      travelIndexContent: markdownRemark(fields: { slug: { eq: "/travel/" } }) {
        frontmatter {
          title
          image
        }
      }
      travelIndexImage: imageSharp(
        fluid: { originalName: { regex: "/travel-index/" } }
      ) {
        id
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
      travelPost: allFile(
        filter: { sourceInstanceName: { eq: "travel-posts" } }
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
      <SEO title="Travel" pathname={pathname} />
      <Img
        fluid={data.travelIndexImage.fluid}
        className="index-image-clip-path h-552"
      />
      <div>
        <h1 className="text-center text-3xl font-bold font-content mb-16">
          {data.travelIndexContent.frontmatter.title.toUpperCase()}
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 lg:grid-rows-6 gap-1">
        {data.travelPost &&
          data.travelPost.nodes.map((node) => (
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

export default TravelPage

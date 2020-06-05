import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/SEO"
import BlogPostCard from "../components/BlogPostCard"

const LifestylePage = () => {
  const data = useStaticQuery(graphql`
    query lifestylePageQuery {
      sitePage(
        component: { regex: "/lifestyle/" }
        id: { eq: "SitePage /lifestyle/" }
      ) {
        path
      }
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
          ...GatsbyImageSharpFluid
        }
      }
      lifestylePost: allFile(
        filter: { sourceInstanceName: { eq: "lifestyle-posts" } }
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
      <SEO title="Lifestyle" pathname={pathname} />
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

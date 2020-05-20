import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import BlogPostCard from "../components/BlogPostCard"

const FoodPage = () => {
  const data = useStaticQuery(graphql`
    query foodPageQuery {
      foodIndexContent: markdownRemark(fields: { slug: { eq: "/food/" } }) {
        frontmatter {
          title
        }
      }
      foodIndexImage: imageSharp(
        fluid: { originalName: { regex: "/food-index/" } }
      ) {
        id
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
      foodPost: allFile(filter: { sourceInstanceName: { eq: "food-posts" } }) {
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

  return (
    <>
      <Img
        fluid={data.foodIndexImage.fluid}
        className="index-image-clip-path h-552"
      />
      <div>
        <h1 className="text-center text-3xl font-bold font-content mb-16">
          {data.foodIndexContent.frontmatter.title.toUpperCase()}
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 lg:grid-rows-6 gap-1">
        {data.foodPost &&
          data.foodPost.nodes.map((node) => (
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

export default FoodPage

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const FitnessPage = () => {
  const data = useStaticQuery(graphql`
    query fitnessPageQuery {
      markdownRemark(fields: { slug: { eq: "/fitness/" } }) {
        frontmatter {
          title
        }
      }
      imageSharp(fluid: { originalName: { eq: "fitness-01.png" } }) {
        id
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  `)

  return (
    <>
      <div>
        <Img fluid={data.imageSharp.fluid} className="index-image-clip-path" />
      </div>
      <div>
        <h1 className="text-center text-2xl font-content">
          {data.markdownRemark.frontmatter.title.toUpperCase()}
        </h1>
      </div>
    </>
  )
}

export default FitnessPage

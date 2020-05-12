import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const IntroSection = () => {
  const data = useStaticQuery(graphql`
    query indexPageQuery {
      markdownRemark(id: { eq: "ea78fdb9-afaa-5282-b440-d2a41485b4d7" }) {
        frontmatter {
          title
          intro
        }
      }
      imageSharp(fluid: { originalName: { eq: "madeline-01.jpg" } }) {
        fluid(quality: 100, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  `)

  return (
    <div className="lg:flex">
      <div className="flex flex-col">
        <h1 className="text-5xl text-center font-subheader font-medium leading-tight p-16 lg:mt-40">
          {data.markdownRemark.frontmatter.title}
        </h1>
        <p className="font-content mx-4 leading-relaxed opacity-75 pb-16 px-4 lg:w-1/2 lg:mx-auto lg:mb-40">
          {data.markdownRemark.frontmatter.intro}
        </p>
      </div>
      <div className="lg:w-1/2 lg:flex-end lg:mr-32 lg:my-40">
        <Img
          fluid={data.imageSharp.fluid}
          className="h-352 rounded-tl-xl rounded-br-xl mx-8"
        />
      </div>
    </div>
  )
}

export default IntroSection

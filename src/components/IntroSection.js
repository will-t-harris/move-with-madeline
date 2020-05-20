import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const IntroSection = () => {
  const data = useStaticQuery(graphql`
    query indexPageQuery {
      file(sourceInstanceName: { eq: "index-pages" }, name: { eq: "index" }) {
        childMarkdownRemark {
          frontmatter {
            title
            intro
          }
        }
      }
      imageSharp(fluid: { originalName: { eq: "madeline-intro.jpg" } }) {
        fluid(quality: 100, maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `)

  return (
    <div className="lg:flex bg-indigo-100">
      <div className="flex flex-col">
        <h1 className="text-5xl text-textDark text-center font-subheader font-medium leading-tight p-16 lg:mt-32">
          {data.file.childMarkdownRemark.frontmatter.title}
        </h1>
        <p className="font-content text-textDark mx-4 leading-relaxed opacity-75 pb-16 px-4 lg:w-1/2 lg:mx-auto lg:mb-32 lg:p-0">
          {data.file.childMarkdownRemark.frontmatter.intro}
        </p>
      </div>
      <div className="lg:w-1/2 lg:flex-end lg:mr-32 lg:my-32">
        <Img
          fluid={data.imageSharp.fluid}
          className="h-352 mx-8 mb-16 lg:mb-0 rounded-tl-xl rounded-br-xl "
        />
      </div>
    </div>
  )
}

export default IntroSection

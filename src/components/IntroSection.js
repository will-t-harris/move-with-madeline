import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const IntroSection = () => {
  const data = useStaticQuery(graphql`
    query indexPageQuery {
      file(
        sourceInstanceName: { eq: "index-pages" }
        relativePath: { regex: "/index/" }
      ) {
        id
        absolutePath
        childMdx {
          frontmatter {
            introTitle
            introContent
          }
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
    <div>
      <div className="flex flex-col">
        <h1 className="text-5xl text-center font-subheader font-medium leading-tight p-16">
          {data.file.childMdx.frontmatter.introTitle}
        </h1>
        <p className="font-content mx-4 leading-relaxed opacity-75 pb-16 px-4">
          {data.file.childMdx.frontmatter.introContent}
        </p>
      </div>
      <div>
        <Img
          fluid={data.imageSharp.fluid}
          className="h-352 rounded-tl-xl rounded-br-xl mx-8"
        />
      </div>
    </div>
  )
}

export default IntroSection

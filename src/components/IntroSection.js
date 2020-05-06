import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const IntroSection = () => {
  const data = useStaticQuery(graphql`
    query indexPageQuery {
      file(sourceInstanceName: { eq: "index-pages" }) {
        id
        childMdx {
          frontmatter {
            intro
            title
          }
        }
      }
      imageSharp(fluid: { originalName: { eq: "madeline-01.jpg" } }) {
        fluid(quality: 100, maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `)
  console.log(data)
  return (
    <div>
      <div className="flex flex-col">
        <h1 className="text-5xl text-center font-subheader leading-tight py-16">
          {data.file.childMdx.frontmatter.title}
        </h1>
        <p className="font-content text-center mx-4 leading-5 pb-16">
          {data.file.childMdx.frontmatter.intro}
        </p>
      </div>
      <div className="mx-4">
        <Img
          fluid={data.imageSharp.fluid}
          className="h-352 rounded-tl-xl rounded-br-xl"
        />
      </div>
    </div>
  )
}

export default IntroSection

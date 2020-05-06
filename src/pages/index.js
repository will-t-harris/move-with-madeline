import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/SEO"
import IntroSection from "../components/IntroSection"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query HomeQuery {
      file(relativePath: { eq: "madeline-home-placeholder.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <>
      <SEO title="Home" />
      <Img fluid={data.file.childImageSharp.fluid} className="h-552" />
      <div className="h-552 bg-bgPrimary">
        <IntroSection />
      </div>
      <div style={{ height: "150px", overflow: "hidden" }}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M-29.91 95.02c124.15 156.91 366.25-231.9 532.16 15.8L500 0H0z"
            style={{ stroke: "none" }}
            className="fill-current text-bgPrimary"
          />
        </svg>
      </div>
    </>
  )
}

export default IndexPage

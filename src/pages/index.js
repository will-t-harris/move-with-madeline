import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/SEO"
import IntroSection from "../components/IntroSection"
import InstagramBanner from "../components/InstagramBanner"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query homeQuery {
      sitePage(component: { regex: "/index/" }) {
        path
      }
      file(relativePath: { eq: "madeline-home-02.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const pathname = data.sitePage.path

  return (
    <>
      <SEO title="Home" pathname={pathname} />
      <Img fluid={data.file.childImageSharp.fluid} className="h-552" />
      <div>
        <IntroSection />
      </div>
      // <InstagramBanner />
    </>
  )
}

export default IndexPage

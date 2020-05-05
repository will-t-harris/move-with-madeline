import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import SubHeader from "./SubHeader"

interface Props {
  siteTitle: string
}

const Header = ({ siteTitle = "" }: Props) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      file(relativePath: { eq: "madeline-logo.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <header>
      <div className="flex justify-center py-10">
        <Img fixed={data.file.childImageSharp.fixed} />
      </div>
      <SubHeader />
    </header>
  )
}

export default Header

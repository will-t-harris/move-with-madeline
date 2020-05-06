import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import SubHeader from "./SubHeader"

const Header = siteTitle => {
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

Header.defaultProps = {
  siteTitle: "",
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

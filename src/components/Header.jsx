import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import SubHeader from "./SubHeader"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "madeline-logo.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <header>
      <div className="mx-auto ">
        <div className="flex justify-center ">
          <Img fixed={data.file.childImageSharp.fixed} />
        </div>
        <SubHeader />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

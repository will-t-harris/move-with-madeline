import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import classnames from "classnames"

import SubHeader from "./SubHeader"

const Header = ({
  siteTitle,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  toggleMobileMenuOpen,
}) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      file(relativePath: { eq: "madeline-logo.png" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  let sliderButtonClasses = classnames({
    "text-white": isMobileMenuOpen,
    "text-black": !isMobileMenuOpen,
  })

  return (
    <header>
      <div className="flex">
        <div className="flex mx-auto pt-12 pl-2 max-w-full">
          <Link to="/">
            <Img fixed={data.file.childImageSharp.fixed} />
          </Link>
          <button
            className="flex z-20 lg:hidden"
            onClick={toggleMobileMenuOpen}
          >
            <svg
              className={`fill-current h-6 w-6 ${sliderButtonClasses}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
      <SubHeader
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </header>
  )
}

export default Header

Header.defaultProps = {
  siteTitle: "",
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
}

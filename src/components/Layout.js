import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "../../src/index.css"

import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenuOpen={toggleMobileMenu}
      />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

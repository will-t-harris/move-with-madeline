import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import Footer from "./Footer"

import "../../src/index.css"

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
        setIsMobileMenuOpen={setIsMobileMenuOpen}
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

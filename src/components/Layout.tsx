import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "../../src/index.css"

import Header from "./Header"

interface Props {
  children?: any
  title: string
}

const Layout = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  )
}

export default Layout

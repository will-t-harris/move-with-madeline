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
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>Footer</footer>
      </div>
    </>
  )
}

export default Layout

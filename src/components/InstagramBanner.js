import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import InstagramPostCard from "./InstagramPostCard"

const InstagramBanner = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstaNode(limit: 5, sort: { fields: timestamp, order: DESC }) {
        nodes {
          timestamp
          id
          localFile {
            childImageSharp {
              fixed(width: 250, height: 250) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <div className="flex flex-col banner-background lg:flex-row">
        {data &&
          data.allInstaNode.nodes.map((node) => (
            <a
              key={node.id}
              href={`https://www.instagram.com/p/${node.id}`}
              className="mx-auto my-6"
            >
              <InstagramPostCard
                key={node.id}
                cardImgSrc={node.localFile.childImageSharp.fixed}
              />
            </a>
          ))}
      </div>
    </>
  )
}

export default InstagramBanner

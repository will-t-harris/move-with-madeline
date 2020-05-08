import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import InstagramPostCard from "./InstagramPostCard"

const InstagramBanner = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstaNode(limit: 4, sort: { fields: timestamp, order: DESC }) {
        nodes {
          timestamp
          id
          localFile {
            childImageSharp {
              fixed(width: 150, height: 150) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      {data &&
        data.allInstaNode.nodes.map((node) => (
          <a key={node.id} href={`https://www.instagram.com/p/${node.id}`}>
            <InstagramPostCard
              key={node.id}
              cardImgSrc={node.localFile.childImageSharp.fixed}
            />
          </a>
        ))}
    </div>
  )
}

export default InstagramBanner

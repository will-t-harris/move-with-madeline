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
              fixed(width: 200, height: 200) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div className="flex flex-col banner-background mt-16">
      <div className="mx-auto mt-6 bg-red-400 text-white font-content shadow-lg">
        <a href="https://www.instagram.com/move.with.madeline/" className="p-2">
          FOLLOW ME @move.with.madeline!
        </a>
      </div>
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
  )
}

export default InstagramBanner

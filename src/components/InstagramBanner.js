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
    <>
      <a
        href="https://www.instagram.com/move.with.madeline/"
        className="font-content font-bold"
      >
        <div className="hidden lg:block lg:font-content lg:text-bgPrimary lg:text-center lg:mx-auto lg:-mb-16 lg:bg-red-600 lg:w-1/3 lg:h-6 lg:transform lg:translate-y-2 lg:shadow-md lg:whitespace-no-wrap lg:rounded-sm">
          FOLLOW ME @move.with.madeline
        </div>
      </a>
      <div className="flex flex-col banner-background mt-16 lg:flex-row">
        <div className="mx-auto mt-6 bg-red-600 text-white font-content rounded-sm shadow-lg lg:hidden">
          <a
            href="https://www.instagram.com/move.with.madeline/"
            className="px-2 font-content font-bold"
          >
            FOLLOW ME @move.with.madeline
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
    </>
  )
}

export default InstagramBanner

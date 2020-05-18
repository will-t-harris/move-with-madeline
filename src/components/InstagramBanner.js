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
<<<<<<< HEAD
      <div className="flex flex-col banner-background lg:flex-row">
=======
      <a
        href="https://www.instagram.com/move.with.madeline/"
        className="font-content font-bold"
      >
        <div className="hidden lg:block lg:font-content lg:text-textDark lg:text-center lg:mx-auto lg:bg-instagramButton lg:w-1/3 lg:h-6 lg:whitespace-no-wrap lg:rounded-t-md">
          FOLLOW ME @move.with.madeline
        </div>
      </a>
      <div className="flex flex-col banner-background shadow-inner lg:flex-row">
        <div className="mx-auto mt-6 bg-instagramButton text-white font-content rounded-sm shadow-lg lg:hidden">
          <a
            href="https://www.instagram.com/move.with.madeline/"
            className="px-2 font-content font-bold"
          >
            FOLLOW ME @move.with.madeline
          </a>
        </div>
>>>>>>> master
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

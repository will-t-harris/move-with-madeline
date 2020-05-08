import React from "react"
import Img from "gatsby-image"

const InstagramPostCard = ({ cardImgSrc }) => {
  return <Img fixed={cardImgSrc} className="shadow-lg" />
}

export default InstagramPostCard

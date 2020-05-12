import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const BlogPostCard = ({ data }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      Image Goes Here
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{data.frontmatter.title}</div>
        <p className="text-gray-700 text-base">{data.frontmatter.cardText}</p>
        <Link to={`/fitness/${data.fields.slug}`}>Link to post</Link>
      </div>
    </div>
  )
}

export default BlogPostCard

BlogPostCard.propTypes = {
  data: PropTypes.object.isRequired,
}

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const BlogPostCard = ({ data }) => {
  return (
    <div className="mx-auto w-352 rounded-lg shadow-lg">
      <img src={data.frontmatter.topImage} className="rounded-lg" />
      <div className="flex flex-col px-6 py-4 bg-gray-200 rounded-b-lg">
        <h2 className="mb-2 font-bold text-textDark text-xl text-center font-content">
          {data.frontmatter.title}
        </h2>
        <p className="text-textDark text-base opacity-75 mb-4">
          {data.frontmatter.cardText}
        </p>
        <Link
          to={`/fitness/${data.fields.slug}`}
          className="font-content text-center bg-textDark text-bgPrimary py-2 rounded-lg"
        >
          READ MORE
        </Link>
      </div>
    </div>
  )
}

export default BlogPostCard

BlogPostCard.propTypes = {
  data: PropTypes.object.isRequired,
}

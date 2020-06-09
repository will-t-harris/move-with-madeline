import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const BlogPostCard = ({ data, source }) => {
  const basePath =
    source === "fitness-posts"
      ? "fitness"
      : source === "travel-posts"
      ? "travel"
      : source === "food-posts"
      ? "food"
      : source === "lifestyle-posts"
      ? "lifestyle"
      : source === "pcos-posts"
      ? "pcos"
      : ""

  return (
    <div className="mx-auto w-352 rounded-lg shadow-lg mb-12 ">
      <Link
        to={`/${basePath}/${data.fields.slug}`}
        className="font-content text-center bg-textDark text-bgPrimary py-2 rounded-lg"
      >
        <img
          src={data.frontmatter.topImage}
          className="rounded-t-lg h-56 w-full object-cover"
        />

        <div className="flex flex-col px-6 bg-gray-200 rounded-b-lg">
          <h2 className="my-4 font-bold text-textDark text-xl text-center font-content">
            {data.frontmatter.title}
          </h2>
        </div>
      </Link>
    </div>
  )
}

export default BlogPostCard

BlogPostCard.propTypes = {
  data: PropTypes.object.isRequired,
  source: PropTypes.string.isRequired,
}

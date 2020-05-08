import React from "react"
import PropTypes from "prop-types"

const YoutubeIcon = ({ twClasses }) => (
  <svg
    className={twClasses}
    width="22"
    height="22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.54 3.442c-.253-1.355-.998-2.422-1.945-2.784C17.88 0 11 0 11 0S4.12 0 2.405.658C1.458 1.02.713 2.088.46 3.442 0 5.898 0 11.022 0 11.022s0 5.124.46 7.58c.253 1.355.998 2.378 1.945 2.74C4.12 22 11 22 11 22s6.88 0 8.595-.658c.947-.362 1.692-1.385 1.945-2.74.46-2.456.46-7.58.46-7.58s0-5.124-.46-7.58zM8.75 15.675V6.37l5.75 4.652-5.75 4.652z"
      fill="#02101A"
    />
  </svg>
)

export default YoutubeIcon

YoutubeIcon.propTypes = {
  twClasses: PropTypes.string,
}

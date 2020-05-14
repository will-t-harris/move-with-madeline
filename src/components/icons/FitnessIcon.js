import React from "react"
import PropTypes from "prop-types"

const FitnessIcon = ({ twClasses }) => (
  <svg
    width="48"
    height="48"
    className={`fill-current ${twClasses}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0)">
      <path d="M47.162 14.745l-3.97-3.97 2.984-2.982a1.404 1.404 0 000-1.988L42.182 1.81c-.528-.528-1.462-.528-1.989 0L37.21 4.793 33.24.823a2.813 2.813 0 00-3.977 3.978l13.921 13.921a2.813 2.813 0 003.978-3.977zM18.737 43.199L4.816 29.278a2.813 2.813 0 00-3.978 3.977l3.97 3.97-2.978 2.977a1.405 1.405 0 000 1.988l3.995 3.994a1.401 1.401 0 001.988 0l2.977-2.977 3.97 3.97a2.813 2.813 0 003.977-3.978zM25.285 16.734L16.748 25.3l5.966 5.966 8.538-8.566-5.966-5.966zM43.184 22.7L25.286 4.8a2.813 2.813 0 00-3.978 3.978l17.899 17.898a2.813 2.813 0 003.977-3.977zM26.692 39.221l-17.9-17.898A2.812 2.812 0 104.817 25.3L22.714 43.2a2.812 2.812 0 003.978-3.978z" />
    </g>
    <defs>
      <clipPath>
        <path d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default FitnessIcon

FitnessIcon.propTypes = {
  twClasses: PropTypes.string,
}

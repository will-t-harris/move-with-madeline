import React from "react"
import PropTypes from "prop-types"

const TravelIcon = ({ twClasses }) => (
  <svg
    width="48"
    height="48"
    className={`fill-current ${twClasses}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.16 28.8H6.72L2.4 36H0V12h2.4l4.32 7.2h13.44L14.4 0h4.8l11.52 19.2H43.2a4.8 4.8 0 010 9.6H30.72L19.2 48h-4.8l5.76-19.2z" />
  </svg>
)

export default TravelIcon

TravelIcon.propTypes = {
  twClasses: PropTypes.string,
}

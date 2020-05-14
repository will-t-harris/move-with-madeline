import React from "react"
import PropTypes from "prop-types"

const LifestyleIcon = ({ twClasses }) => (
  <svg
    width="48"
    height="48"
    className={`fill-current ${twClasses}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.6 26.4H4.8A4.8 4.8 0 010 21.6V12c0-2.64 2.16-4.8 4.8-4.8h4.8V2.4h33.6v24a9.6 9.6 0 01-9.6 9.6H19.2a9.6 9.6 0 01-9.6-9.6zm0-4.8V12H4.8v9.6h4.8zM4.8 40.8v-2.4H48v2.4l-9.6 4.8h-24l-9.6-4.8z" />
  </svg>
)

export default LifestyleIcon

LifestyleIcon.propTypes = {
  twClasses: PropTypes.string,
}

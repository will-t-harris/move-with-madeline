import React from "react"
import PropTypes from "prop-types"

const FoodIcon = ({ twClasses }) => (
  <svg
    width="48"
    height="48"
    className={`fill-current ${twClasses}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M43.2 26.4v16.8a4.8 4.8 0 01-9.6 0v-12h-4.8v-24A7.2 7.2 0 0136 0h7.2v26.4zM9.6 24a4.8 4.8 0 01-4.8-4.8V2.4a2.4 2.4 0 014.8 0V12H12V2.4a2.4 2.4 0 014.8 0V12h2.4V2.4a2.4 2.4 0 014.8 0v16.8a4.8 4.8 0 01-4.8 4.8v19.2a4.8 4.8 0 01-9.6 0V24z" />
  </svg>
)

export default FoodIcon

FoodIcon.propTypes = {
  twClasses: PropTypes.string,
}

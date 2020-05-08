import React from "react"
import PropTypes from "prop-types"

const TwitterIcon = ({ twClasses }) => (
  <svg
    className={twClasses}
    width="22"
    height="22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.168 5.483c.014.24.014.481.014.722C20.182 13.544 15.645 22 7.354 22c-2.555 0-4.928-.911-6.924-2.492.363.051.712.069 1.089.069 2.107 0 4.048-.877 5.597-2.372-1.982-.052-3.643-1.65-4.216-3.85.28.051.559.086.852.086.405 0 .81-.07 1.187-.19-2.066-.515-3.616-2.75-3.616-5.448v-.069c.6.413 1.298.67 2.038.705-1.214-.997-2.01-2.698-2.01-4.623a6.51 6.51 0 01.614-2.802c2.22 3.369 5.556 5.569 9.297 5.81a7.662 7.662 0 01-.112-1.272C11.15 2.492 13.16 0 15.66 0c1.297 0 2.47.67 3.294 1.753a7.947 7.947 0 002.861-1.34c-.335 1.289-1.047 2.371-1.982 3.059.908-.12 1.787-.43 2.597-.86a11.203 11.203 0 01-2.262 2.87z"
      fill="#02101A"
    />
  </svg>
)

export default TwitterIcon

TwitterIcon.propTypes = {
  twClasses: PropTypes.string,
}

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const SubHeader = ({ isOpen }) => {
  return (
    <>
      <div className="hidden md:flex md:justify-center">
        <ul className="flex flex-row font-subheader">
          <li className="mx-6 text-2xl">
            <Link to="#">Fitness</Link>
          </li>
          <li className="mx-6 text-2xl">
            <Link to="#">Travel</Link>
          </li>
          <li className="mx-6 text-2xl">
            <Link to="#">Food</Link>
          </li>
          <li className="mx-6 text-2xl">
            <Link to="#">Lifestyle</Link>
          </li>
          <li className="mx-6 text-2xl">
            <Link to="#">PCOS</Link>
          </li>
        </ul>
      </div>
      <div
        className={`${isOpen ? "" : "hidden"} w-full block flex-grow lg:hidden`}
      >
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
      </div>
    </>
  )
}

export default SubHeader

SubHeader.propTypes = {
  isOpen: PropTypes.bool.isRequired,
}

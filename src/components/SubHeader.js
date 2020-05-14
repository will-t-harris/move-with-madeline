import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const SubHeader = ({ isOpen }) => {
  return (
    <>
      <div className="hidden md:flex md:justify-center py-16">
        <ul className="flex flex-row font-subheader">
          <li className="mx-6 text-2xl">
            <Link to="/fitness">Fitness</Link>
          </li>
          <li className="mx-6 text-2xl">
            <Link to="/travel">Travel</Link>
          </li>
          <li className="mx-6 text-2xl">
            <Link to="/food">Food</Link>
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

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import classnames from "classnames"

import HomeIcon from "./icons/HomeIcon"
import FitnessIcon from "./icons/FitnessIcon"
import TravelIcon from "./icons/TravelIcon"
import FoodIcon from "./icons/FoodIcon"
import LifestyleIcon from "./icons/LifestyleIcon"

const SubHeader = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  let sliderBodyClass = classnames({
    hidden: !isMobileMenuOpen,
    block: isMobileMenuOpen,
  })

  const closeMenu = () => {
    setIsMobileMenuOpen((isMobileMenuOpen = false))
  }

  return (
    <>
      <div className="hidden md:flex md:justify-center py-12">
        <ul className="flex flex-row font-subheader">
          <li className="mx-6 text-2xl text-textDark">
            <Link to="/fitness">Fitness</Link>
          </li>
          <li className="mx-6 text-2xl text-textDark">
            <Link to="/travel">Travel</Link>
          </li>
          <li className="mx-6 text-2xl text-textDark">
            <Link to="/food">Food</Link>
          </li>
          <li className="mx-6 text-2xl text-textDark">
            <Link to="/lifestyle">Lifestyle</Link>
          </li>
        </ul>
      </div>

      <div
        className={`${sliderBodyClass} absolute left-0 top-0 min-h-screen w-full
         bg-gray-600 z-10 lg:hidden`}
      >
        <ul className="flex flex-col content-center mt-32" onClick={closeMenu}>
          <li className="mb-4 h-20 bg-gray-900 flex flex-row text-2xl text-white">
            <HomeIcon twClasses="self-center ml-8" />
            <Link className="font-subheader text-4xl leading-20 ml-24" to="/">
              Home
            </Link>
          </li>
          <li className="mb-4 h-20 bg-gray-900 flex flex-row text-2xl text-white">
            <FitnessIcon twClasses="self-center ml-8" />
            <Link
              className="font-subheader text-4xl leading-20 ml-24"
              to="/fitness"
            >
              Fitness
            </Link>
          </li>
          <li className="mb-4 h-20 bg-gray-900 flex flex-row text-2xl text-white">
            <TravelIcon twClasses="self-center ml-8" />
            <Link
              className="font-subheader text-4xl leading-20 ml-24"
              to="/travel"
            >
              Travel
            </Link>
          </li>
          <li className="mb-4 h-20 bg-gray-900 flex flex-row text-2xl text-white">
            <FoodIcon twClasses="self-center ml-8" />
            <Link
              className="font-subheader text-4xl leading-20 ml-24"
              to="/food"
            >
              Food
            </Link>
          </li>
          <li className="mb-4 h-20 bg-gray-900 flex flex-row text-2xl text-white">
            <LifestyleIcon twClasses="self-center ml-8" />
            <Link
              className="font-subheader text-4xl leading-20 ml-24"
              to="/lifestyle"
            >
              Lifestyle
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default SubHeader

SubHeader.propTypes = {
  isOpen: PropTypes.bool.isRequired,
}

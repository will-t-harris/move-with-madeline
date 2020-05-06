import React from "react"
import { Link } from "gatsby"

const SubHeader = () => {
  return (
    <div className="flex justify-center">
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
  )
}

export default SubHeader

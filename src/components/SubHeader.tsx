import React from "react"

interface Props {
  twClasses?: string
}

const SubHeader = ({ twClasses }: Props) => {
  return (
    <div className="flex justify-center">
      <ul className="flex flex-row font-subheader">
        <li className="mx-6">Fitness</li>
        <li className="mx-6">Travel</li>
        <li className="mx-6">Food</li>
        <li className="mx-6">Lifestyle</li>
        <li className="mx-6">PCOS</li>
      </ul>
    </div>
  )
}

export default SubHeader

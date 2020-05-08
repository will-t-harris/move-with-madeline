import React from "react"

import YoutubeIcon from "./icons/YoutubeIcon"
import InstagramIcon from "./icons/InstagramIcon"
import TwitterIcon from "./icons/TwitterIcon"
import AmazonIcon from "./icons/AmazonIcon"

const Footer = () => {
  return (
    <div className="flex flex-col h-40 bg-bgPrimary">
      <div className="mx-auto pt-16 pb-8 flex flex-row h-20">
        <YoutubeIcon twClasses="mr-2" />
        <InstagramIcon twClasses="mr-2" />
        <TwitterIcon twClasses="mr-2" />
        <AmazonIcon />
      </div>
      <div className="mx-auto opacity-50">
        All content &copy; Madeline Walkon
      </div>
    </div>
  )
}

export default Footer

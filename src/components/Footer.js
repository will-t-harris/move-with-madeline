import React from "react"

import YoutubeIcon from "./icons/YoutubeIcon"
import InstagramIcon from "./icons/InstagramIcon"
import TwitterIcon from "./icons/TwitterIcon"
import AmazonIcon from "./icons/AmazonIcon"

const Footer = () => {
  return (
    <footer className="flex flex-col h-40 bg-bgPrimary">
      <div className="mx-auto pt-16 pb-8 flex flex-row h-20">
        <a href="https://www.youtube.com/channel/UCPYe2LOAGOJOesjCOBMd_Sg/">
          <YoutubeIcon twClasses="mr-2" />
        </a>
        <a href="https://www.instagram.com/move.with.madeline/">
          <InstagramIcon twClasses="mr-2" />
        </a>
        <TwitterIcon twClasses="mr-2" />
        <AmazonIcon />
      </div>
      <div className="mx-auto opacity-50">
        All content &copy; Madeline Walkon
      </div>
      <div className="mx-auto opacity-50">
        <a href="mailto:hello@movewithmadeline.com">
          hello@movewithmadeline.com
        </a>
      </div>
    </footer>
  )
}

export default Footer

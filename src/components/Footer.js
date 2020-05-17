import React from "react"

import YoutubeIcon from "./icons/YoutubeIcon"
import InstagramIcon from "./icons/InstagramIcon"
import TwitterIcon from "./icons/TwitterIcon"
import AmazonIcon from "./icons/AmazonIcon"

const Footer = () => {
  return (
    <footer className="flex flex-col h-24">
      <div className="mx-auto pt-4 pb-4 flex flex-row h-20">
        <a href="https://www.youtube.com/channel/UCPYe2LOAGOJOesjCOBMd_Sg/">
          <YoutubeIcon twClasses="mr-2 text-textDark opacity-75" />
        </a>
        <a href="https://www.instagram.com/move.with.madeline/">
          <InstagramIcon twClasses="mr-2 text-textDark opacity-75" />
        </a>
        <TwitterIcon twClasses="mr-2 text-textDark opacity-75" />
        <AmazonIcon twClasses=" text-textDark opacity-75" />
      </div>
      <div className="mx-auto text-textDark opacity-75 cursor-default">
        All content &copy; Madeline Walkon
      </div>
      <div className="mx-auto text-textDark pb-4 opacity-75">
        <a href="mailto:hello@movewithmadeline.com">
          hello@movewithmadeline.com
        </a>
      </div>
    </footer>
  )
}

export default Footer

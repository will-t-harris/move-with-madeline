import React from "react"

import InstagramIcon from "./icons/InstagramIcon"
import AmazonIcon from "./icons/AmazonIcon"

const Footer = () => {
  return (
    <footer className="flex flex-col h-24">
      <div className="mx-auto pt-4 pb-4 flex flex-row h-20">
        <a href="https://www.instagram.com/move.with.madeline/">
          <InstagramIcon twClasses="mr-2 text-textDark opacity-75" />
        </a>
        <a href="https://www.amazon.com/shop/influencer-23600ba5?ref=cm_sw_em_r_inf_own_influencer-23600ba5_dp_DRKuGImMtufAN">
          <AmazonIcon twClasses=" text-textDark opacity-75" />
        </a>
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

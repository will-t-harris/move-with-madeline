import React from "react"
import CMS from "netlify-cms-app"

import ContentBlock from "../components/ContentBlock"

CMS.registerEditorComponent({
  id: "content-block",
  label: "Content Block",
  fields: [
    { name: "post-content", label: "Post Content Block", widget: "text" },
  ],
  pattern: /^<ContentBlock/,
  fromBlock: match => {
    return {
      id: match[1],
    }
  },
  toBlock: obj => "content " + obj.id,
})

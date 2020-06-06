import React from "react"

import { useInstagramFeed } from "../useInstagramFeed"

const InstagramGallery = () => {
  let photos = useInstagramFeed({
    userId: "22249284318",
    thumbnailWidth: 640,
    photoCount: 4,
  })

  return (
    <div className="photos">
      {photos &&
        photos.map(({ id, src, url }) => (
          <a key={id} href={url} target="_blank">
            <img className="photo" src={src} />
          </a>
        ))}
    </div>
  )
}

export default InstagramGallery

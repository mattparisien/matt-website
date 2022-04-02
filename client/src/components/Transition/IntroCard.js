import React from 'react'

function IntroCard({images}) {
  return (
    <div className="o-introCard -flex -align-center -justify-center">
      <div className="o-introCard_mediaWrapper">
        {images && images.slice(0,4).map((img, idx) => {
          return (
            <img key={idx} src={img.url}></img>
          )
        })}
      </div>
    </div>
  )
}

export default IntroCard
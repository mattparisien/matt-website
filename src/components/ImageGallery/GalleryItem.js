import React from 'react'

function GalleryItem(props) {

  const imageStyle = {
    backgroundImage: `url(${process.env.REACT_APP_STRAPI_URL + props.image})`
  }

  return (
    <div className="image-gallery__item">
        <div className="image-gallery__item__image -isFull" style={imageStyle}>
          
        </div>
    </div>
  )
}

export default GalleryItem

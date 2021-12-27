import React from "react";
import GalleryItem from "./GalleryItem";

function ImageGallery(props) {
	const { data } = props;

	const images =
		data &&
		data.map(post => {
			return post.attributes.Photo.data.slice(0, 3).map((image, index )=> {
				return <GalleryItem image={image.attributes.url} key={index}/>;
			});
		});

	return <div className='image-gallery-container -isFull'>
    {images}
  </div>;
}

export default ImageGallery;

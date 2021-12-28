import React, { useRef } from "react";
import GalleryItem from "./GalleryItem";

function ImageGallery(props) {
	const { data } = props;
	const imageRefs = useRef([]);
	const containerRef = useRef(null);

	

	const images =
		data &&
		data.map(post => {
			return post.attributes.Photo.data.map((image, index) => {
				return <GalleryItem image={image.attributes.url} key={index}/>;
			});
		});

	return <div ref={containerRef} className='image-gallery-container -isFull'>{images}</div>;
}

export default ImageGallery;

import React, { forwardRef } from "react";
import { Parallax } from "react-scroll-parallax";

function GalleryItem(props, ref) {
	const imageStyle = {
		backgroundImage: `url(${process.env.REACT_APP_STRAPI_URL + props.image})`,
	};

	return (
		<div className='image-gallery__item'>
			<Parallax className='image-gallery__item__image-wrapper -isFull'  y={[-30, 20]}>
				<img
					className='image-gallery__item__image'
					src={`${process.env.REACT_APP_STRAPI_URL + props.image}`}
					alt='grid-image'
				></img>
			</Parallax>
		</div>
	);
}

export default GalleryItem;

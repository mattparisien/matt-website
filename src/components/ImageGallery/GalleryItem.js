import React, { forwardRef, useRef } from "react";
import { Parallax } from "react-scroll-parallax";
import { useEffect } from "react/cjs/react.development";
import { useIntersect } from "../../helpers/hooks/useIntersect";

function GalleryItem(props, ref) {

	
	const images = props.image && (
		<img
			className='image-gallery__item__image'
			src={`${process.env.REACT_APP_STRAPI_URL + props.image}`}
			alt='grid-image'
		></img>
	);

	const videos = props.video && (
		<video autoPlay loop muted playsInline width={"100%"}>
			<source src={`${process.env.REACT_APP_STRAPI_URL + props.video}`}></source>
		</video>
	)

	

	return (
		<div
			className={`image-gallery__item ${props.isVisible ? "is-visible" : ""}`}
			ref={ref}
		>
			<Parallax
				className='image-gallery__item__image-wrapper -isFull'
				y={[-30, 20]}
			>
				{images}
				{videos}
			</Parallax>
		</div>
	);
}

export default forwardRef(GalleryItem);

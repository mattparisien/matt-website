import React, { forwardRef, useRef, useState, useEffect } from "react";
import { useIntersect } from "../../helpers/hooks/useIntersect";
import useResize from "../../helpers/hooks/useResize";
import { device, deviceSize } from "../../styles/breakpoints";
import BreakpointWrapper from "./BreakpointWrapper";

function GalleryItem(props, ref) {
	const [isMobileBreakpoint, setMobileBreakpoint] = useState(false);
	const [windowWidth] = useResize();

	useEffect(() => {
		if (windowWidth <= deviceSize.tablet && !isMobileBreakpoint) {
			setMobileBreakpoint(true);
		}
	}, [windowWidth]);

	const images = props.image && (
		<img
			className='image-gallery__item__image'
			src={`${process.env.REACT_APP_STRAPI_URL + props.image}`}
			alt='grid-image'
		></img>
	);

	const videos = props.video && (
		<video autoPlay loop muted playsInline width={"100%"}>
			<source
				src={`${process.env.REACT_APP_STRAPI_URL + props.video}`}
			></source>
		</video>
	);

	return (
		<div
			className={`image-gallery__item ${props.isVisible ? "is-visible" : ""}`}
			ref={ref}
		>
			<BreakpointWrapper isMobile={isMobileBreakpoint}>
				{images}
				{videos}
			</BreakpointWrapper>
		</div>
	);
}

export default forwardRef(GalleryItem);

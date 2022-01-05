import React from "react";
import { Parallax } from "react-scroll-parallax";

function BreakpointWrapper({ isMobile, children }) {
	return (
		<>
			{!isMobile ? (
				<Parallax className='image-gallery__item__image-wrapper' y={[-30, 20]}>
					{children}
				</Parallax>
			) : (
				<div className='image-gallery__item__image-wrapper'>{children}</div>
			)}
		</>
	);
}

export default BreakpointWrapper;

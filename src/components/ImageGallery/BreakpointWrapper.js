import React from "react";
import { Parallax } from "react-scroll-parallax";

function BreakpointWrapper({ breakpoint, children }) {
	return (
		<>
			{!breakpoint ? (
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

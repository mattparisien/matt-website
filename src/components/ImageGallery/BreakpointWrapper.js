import React from "react";

function BreakpointWrapper({ isMobile, children }) {
	return (
		<>
			{!isMobile ? (
				{ children }
			) : (
				<div className='image-gallery__item__image-wrapper'>{children}</div>
			)}
		</>
	);
}

export default BreakpointWrapper;

import React, { forwardRef } from "react";

function Sticky(props, ref) {
	return (
		<div className='sticky-wrapper' ref={ref}>
			{props.children}
		</div>
	);
}

export default forwardRef(Sticky);

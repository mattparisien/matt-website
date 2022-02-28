import React, { forwardRef } from "react";

function StickyWrapper(props, ref) {
	return (
		<div className='StickyWrapper' ref={ref}>
			{props.children}
		</div>
	);
}

export default forwardRef(StickyWrapper);

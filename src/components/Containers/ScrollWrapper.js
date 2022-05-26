import React, { forwardRef } from "react";

function ScrollWrapper(props, ref) {
	return (
		<div className='ScrollWrapper' data-scroll-container ref={ref}>
			{props.children}
		</div>
	);
}

export default forwardRef(ScrollWrapper);

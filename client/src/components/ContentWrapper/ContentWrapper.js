import React, { forwardRef } from "react";
import { StyledContent } from "./styles/StyledContentWrapper";

function ContentWrapper(props, ref) {
	return (
		<StyledContent {...props} className='ContentWrapper' ref={ref}>
			{props.children}
		</StyledContent>
	);
}

export default forwardRef(ContentWrapper);

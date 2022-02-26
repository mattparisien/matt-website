import React, { forwardRef } from "react";
import { StyledContent } from "./styles/StyledContentWrapper";
import { Box } from "@material-ui/core";

function ContentWrapper(
	{ headerOffset, footerOffset, children, isDefaultContentHidden },
	ref
) {
	return (
		<StyledContent
			paddingTop={headerOffset}
			marginBottom={footerOffset}
			hideContentDefault={isDefaultContentHidden}
			className='ContentWrapper'
			ref={ref}
		>
			{children}
		</StyledContent>
	);
}

export default forwardRef(ContentWrapper);

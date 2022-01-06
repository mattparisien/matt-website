import React, { forwardRef } from "react";
import { StyledContent } from "./styles/StyledContentWrapper";

function ContentWrapper({ headerOffset, footerOffset, children }, ref) {
	return (
		<StyledContent
			paddingTop={headerOffset}
			marginBottom={footerOffset}
			className='content-wrapper'
			ref={ref}
		>
			{children}
		</StyledContent>
	);
}

export default forwardRef(ContentWrapper);

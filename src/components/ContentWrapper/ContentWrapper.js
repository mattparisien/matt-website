import React from "react";
import { StyledContent } from "./styles/StyledContentWrapper";

function ContentWrapper({ headerOffset, footerOffset, children }) {
	return (
		<StyledContent
			paddingTop={headerOffset}
			marginBottom={footerOffset}
			className='content-wrapper'
		>
			{children}
		</StyledContent>
	);
}

export default ContentWrapper;

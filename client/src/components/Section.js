import React, { forwardRef } from "react";
import styled from "styled-components";


const StyledSection = styled.section`
	margin: 5vw 0;
`;

function Section(props, ref) {
	return (
		<StyledSection
			className={props.classes}
			ref={ref}
			data-scroll-section
			data-theme-trigger={props["data-theme-trigger"]}
			data-theme-triggerRatio={props["data-theme-triggerRatio"]}
		>
			
			{props.children}
		</StyledSection>
	);
}

export default forwardRef(Section);

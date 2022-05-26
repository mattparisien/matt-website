import React, { forwardRef } from "react";
import styled from "styled-components";
import SectionWave from "./SectionWave";

const StyledSection = styled.section`
	margin: 5vw 0;
`;

function Section(props, ref) {
	return (
		<StyledSection className={props.classes} ref={ref} data-scroll-section>
			{props.hasWave && <SectionWave ref={ref} />}
			{props.children}
		</StyledSection>
	);
}

export default forwardRef(Section);

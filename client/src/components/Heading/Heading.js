import React, { forwardRef } from "react";
import styled from "styled-components";

const StyledHeading = styled.h1`
	font-family: "Brutal";
	font-style: normal;
	font-weight: lighter;
	margin: 0;

	${({ styles }) => (styles ? styles : "")}
`;

function Heading(props, ref) {
	return (
		<StyledHeading
			as={`h${props.level}`}
			{...props}
			className='Heading'
			ref={ref}
		>
			{props.children}
		</StyledHeading>
	);
}

export default forwardRef(Heading);

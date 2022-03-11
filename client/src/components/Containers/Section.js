import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
	${({ theme, offsetTop }) => offsetTop && theme.spacing(4, "padding-top")};
	position: relative;
	z-index: 1;
	width: 100%;
	height: ${({ height }) => (height ? height : "100vh")};
	margin: ${({ margin }) => (margin ? margin : "0")};

	background-color: ${({ theme, bg }) => (bg ? theme.colors[bg] : "black")};

	color: ${({ theme, bg }) =>
		bg ? theme.colors[bg === "dark" ? "light" : "dark"] : "blue"};

	.LinkCircle path {
		stroke: ${({ theme, bg }) =>
			bg ? theme.colors[bg === "dark" ? "light" : "dark"] : "blue"};
	}
`;

function Section(props) {
	return (
		<>
			<StyledSection className='Section' {...props} bg={props.bg}>
				{props.children}
			</StyledSection>
		</>
	);
}

export default Section;

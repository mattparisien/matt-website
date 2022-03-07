import React from "react";
import styled from "styled-components";
import ColorTrigger from "../ColorTrigger/ColorTrigger";

const StyledSection = styled.section`
	${({ theme, offsetTop }) => offsetTop && theme.spacing(4, "padding-top")};
	position: relative;
	z-index: 1;
	width: 100%;
	height: ${({ height }) => (height ? height : "100vh")};
	position: ${({ position }) => (position ? position : "")};
	background-color: ${({ theme, bg }) => (bg ? theme.colors[bg] : "black")};
	color: ${({ theme, bg, color }) =>
		bg
			? theme.colors[bg === "dark" ? "light" : bg === "light" ? "dark" : color]
			: ""};
`;

function Section(props) {
	return (
		<>
			<StyledSection className='Section' {...props} bg={props.bg}>
				<ColorTrigger foreground={props.bg === "light" ? "dark" : "light"}>
					{props.children}
				</ColorTrigger>
			</StyledSection>
		</>
	);
}

export default Section;

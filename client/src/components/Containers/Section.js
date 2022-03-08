import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useTheme } from "styled-components";
import styled from "styled-components";
import { addHeaderSpacing } from "../../styles/global";
import ColorTrigger from "../ColorTrigger/ColorTrigger";

const StyledSection = styled.section`
	${({ theme, offsetTop }) => offsetTop && theme.spacing(4, "padding-top")};
	position: relative;
	z-index: 1;
	width: 100%;
	height: ${({ height }) => (height ? height : "100vh")};
	
	background-color: ${({ theme, bg }) => (bg ? theme.colors[bg] : "black")};
	
	color: ${({ theme, bg }) =>
		bg ? theme.colors[bg === "dark" ? "light" : "dark"] : "blue"};
`;

function Section(props) {
	const theme = useTheme();

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

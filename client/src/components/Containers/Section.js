import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useTheme } from "styled-components";
import styled from "styled-components";
import { addHeaderSpacing } from "../../styles/global";

const StyledHeroBg = styled.div`
	height: ${addHeaderSpacing("height", "100vh")};
	background-color: ${props =>
		props.theme.colors[props.bg === "dark" ? "dark" : "light"]};
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
`;

function Section(props) {
	const theme = useTheme();

	const sectionStyle = {
		width: "100%",
		height: props.height ? props.height : "100vh",
		position: "relative",
		backgroundColor: props.bg ? theme.colors[props.bg] : "black",
		color: props.bg
			? theme.colors[props.bg === "dark" ? "light" : "dark"]
			: "blue",
	};

	return (
		<>
			<Box component='section' className='Section' sx={sectionStyle}>
				{props.children}
			</Box>
			<StyledHeroBg {...props} className='hero-background'>
				*
			</StyledHeroBg>
		</>
	);
}

export default Section;

import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "styled-components";

function Section(props) {
	const theme = useTheme();

	const sectionStyle = {
		width: "100%",
		height: "100vh",
		position: "relative",
		backgroundColor: props.bg ? theme.colors[props.bg] : "black",
		color: props.bg
			? theme.colors[props.bg === "dark" ? "light" : "dark"]
			: "blue",
	};

	return (
		<Box component='section' className='Section' sx={sectionStyle}>
			{props.children}
		</Box>
	);
}

export default Section;

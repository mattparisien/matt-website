import React, { useRef, useEffect, useState } from "react";
import { Box } from "@mui/material";
import gsap from "gsap";
import { useTheme } from "styled-components";

function Loader() {
	const theme = useTheme();

	const loaderStyle = {
		position: "fixed",
		top: 0,
		left: 0,
		width: "100%",
		height: "100vh",
		zIndex: 9999,
		backgroundColor: theme.colors.dark,
		color: theme.colors.light,
    fontFamily: 'Haas',
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontSize: "15vw"


	};

	return (
		<Box sx={loaderStyle} component='div'>
			<span>Work hard</span>
			<span>Work hard</span>
			<span>Work hard</span>
		</Box>
	);
}

export default Loader;

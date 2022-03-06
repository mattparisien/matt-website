import { Box } from "@mui/material";
import gsap from "gsap";
import React, { useContext, useEffect, useRef } from "react";
import { useTheme } from "styled-components";
import { LoadingContext } from "../App/App";

function Loader({ isActive }) {
	const theme = useTheme();

	const loaderStyle = {
		position: "fixed",
		top: 0,
		left: 0,
		width: "100vw",
		height: "100vh",
		backgroundColor: theme.colors.dark,
		color: theme.colors.light,
		display: isActive ? "block" : "none",
		zIndex: 9999,
	};

	const wordStyle = {
		opacity: 0,
	};

	return <Box sx={loaderStyle} component='div' className='Loader'></Box>;
}

export default Loader;

import { Box } from "@mui/material";
import React from "react";
import { useTheme } from "styled-components";

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

	return <Box sx={loaderStyle} component='div' className='Loader'></Box>;
}

export default Loader;

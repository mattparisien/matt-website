import React from "react";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";

function Layout({ children, height, bg }) {
	const theme = useTheme();
	return (
		<Box
			component='section'
			sx={{
				height: height,
				width: "100vw",
				backgroundColor: theme.palette.primary[bg],
				color: theme.palette.primary[bg === "dark" ? "light" : "dark"],
			}}
			className='Layout'
		>
			<Container sx={{ height: "100%" }} maxWidth='xl'>
				{children}
			</Container>
		</Box>
	);
}

export default Layout;

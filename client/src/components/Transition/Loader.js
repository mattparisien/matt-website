import { Box, Container } from "@mui/material";
import { keyframes } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import Line from "../Line/Line";

const wordAnim = keyframes`
	0% {
		transform: translateY(150%);
		opacity: 0;
	} 100% {
		transform: translateY(0);
		opacity: 1;
	}
`;

const bgLeaveAnim = keyframes`
	0% {
		transform: scaleY(1)
	}
	100% {
		transform: scaleY(0.001)
	}
`;

const fadeContent = keyframes`
	0% {
		opacity: 1
	}

	100% {
		opacity: 0
	}
`;

function Loader() {
	const [isAnimCompleted, setAnimCompleted] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setAnimCompleted(true);
		}, 1600);
	}, []);

	const theme = useTheme();

	const loaderStyle = {
		top: 0,
		left: 0,
		position: "fixed",
		height: "100vh",
		width: "100vw",
		color: theme.colors.light,
		zIndex: 9999,
		display: isAnimCompleted ? "none" : "flex",
		alignItems: "center",
		justifyContent: "center",
	};

	const word = {
		fontFamily: "Neue Mtl",
		fontSize: "2rem",
		width: "100%",
		display: "block",
		animation: `
			${wordAnim} 600ms ease
		`,
	};

	const loadSpacer = {
		margin: 0,
		height: "10rem",
		width: "100%",
	};

	const copyright = {
		fontSize: "0.8rem",
		position: "absolute",
	};

	const background = {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		backgroundColor: theme.colors.dark,
		zIndex: -1,
		animation: `${bgLeaveAnim} 600ms ease forwards`,
		transformOrigin: "top",
		animationDelay: "1s",
	};

	const container = {
		animation: `${fadeContent} 400ms linear forwards`,
		animationDelay: "1s",
	};

	return (
		<Box sx={loaderStyle} component='div' className='Loader'>
			<Container sx={container}>
				<Line />
				<Box sx={loadSpacer}>
					<Box component='span' sx={word}>
						Matthew Parisien{" "}
						<Box component='span' sx={copyright}>
							©
						</Box>
					</Box>

					<Box component='span' sx={word}>
						Software & Graphic Design
					</Box>
				</Box>
				<Line />
				<Box sx={loadSpacer}></Box>
				<Line />
			</Container>
			<Box className='loader-background' sx={background}></Box>
		</Box>
	);
}

export default Loader;

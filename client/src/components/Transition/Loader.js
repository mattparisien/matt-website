import { Box, Container, useMediaQuery } from "@mui/material";
import { keyframes } from "@mui/system";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
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

function Loader({ isActive }) {
	const [isAnimCompleted, setAnimCompleted] = useState(false);
	const matches = useMediaQuery("(max-width: 600px)", { noSsr: true });
	const timeline = useRef(gsap.timeline());
	const content = useRef(null);
	const bg = useRef(null);

	useEffect(() => {
		const timeOut = setTimeout(() => {
			setAnimCompleted(true);
			
		}, 3000);

		return () => {
			clearTimeout(timeOut)
		}
	}, []);

	useEffect(() => {
		if (content.current && bg.current) {
			timeline.current
				.to(bg.current, {
					scaleX: 1,
					duration: 0.6,
					ease: "power2.out",
				})
				.to(
					bg.current,
					{
						scaleY: 0.001,
						duration: 0.6,
						ease: "power2.out",
					},
					1.2
				)
				.to(
					content.current,
					{
						opacity: 0,
				
					},
					1.3
				);
		}
	}, [bg, content]);

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
		fontSize: matches ? "0.8rem" : "2rem",
		width: "100%",
		display: "block",
		transform: "translateY(100%)",
		opacity: 0,
		animation: `${wordAnim} 400ms ease forwards`,
		"&:nth-of-type(1)": {
			animationDelay: "100ms",
		},
		"&:nth-of-type(2)": {
			animationDelay: "200ms",
		},
	};

	const loadSpacer = {
		padding: "2rem 0",
		margin: 0,
		boxSizing: "border-box",
		height: matches ? "10rem" : "20rem",
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
		backgroundColor: "black",
		zIndex: -1,
		transformOrigin: "left top",
		transform: "scaleX(0.001)",
		animationDelay: "1s",
	};

	const container = {
		animationDelay: "1s",
	};

	return (
		<Box sx={loaderStyle} component='div' className='Loader'>
			<Container sx={container} ref={content}>
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
			<Box className='loader-background' sx={background} ref={bg}></Box>
		</Box>
	);
}

export default Loader;

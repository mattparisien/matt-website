import { useMediaQuery } from "@material-ui/core";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import gsap from "gsap";
import $ from "jquery";
import React, { useContext, useEffect, useRef, useState } from "react";
import styled, { keyframes, useTheme } from "styled-components";
import { LoadingContext } from "../App/App";
import Layout from "../Containers/Layout";

const gradientAnim = keyframes`
	0% {
		transform: translateY(0);
	}

	100% {
		transform: translateY(calc(-100% - 100vh));
	}
`;

const GradientBg = styled.div`
	background-image: ${({ theme }) => theme.colors.gradient};

	width: 100%;
	height: 550%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
	animation: ${gradientAnim} 65s linear infinite;
	animation-direction: reverse-alternate;

	&::after {
		position: absolute;
		top: 0;
		left: 0;
		content: "";
		background-color: black;
		width: 100%;
		height: 100%;
	}
`;

function SplashPage(props) {
	const headingStyle = {
		fontFamily: "Brutal",
		textAlign: "center",
		fontSize: "6.9vw",
		margin: 0,
		position: "absolute",
		bottom: 0,
		left: "50%",
		width: "100%",
		transform: "translateX(-50%)",
	};

	const heading = useRef(null);
	const [animationComplete, setAnimationComplete] = useState(false);

	const containerStyle = {
		height: "100%",
		width: "100%",
		position: "relative",
	};

	// useEffect(() => {
	// 	if (splitText && splitText.chars) {
	// 		isLoading && toggleLoading();
	// 		let delay = 0;

	// 		for (let i = 0; i < splitText.lines.length; i++) {
	// 			delay += 0.5;
	// 			gsap.to(
	// 				$(splitText.lines[i]).find(".char"),
	// 				{
	// 					ease: "expo.inOut",
	// 					duration: 2,
	// 					y: 0,
	// 					stagger: 0.03,
	// 					onComplete: () => {
	// 						if (i === splitText.lines.length - 1) {
	// 							setAnimationComplete(true);
	// 						}
	// 					},
	// 				},
	// 				delay
	// 			);
	// 		}
	// 	}
	// }, []);

	const timeline = useRef(gsap.timeline());
	const lines = useRef([]);
	lines.current = [];
	const accentRefs = useRef([]);
	accentRefs.current = [];

	const addToRefs = el => {
		if (el && !lines.current.includes(el)) {
			lines.current.push(el);
		}
	};

	const addToAccentRefs = el => {
		if (el && !accentRefs.current.includes(el)) {
			accentRefs.current.push(el);
		}
	};

	useEffect(() => {
		if (lines.current[0] && accentRefs.current[0]) {
			timeline.current
				.to(lines.current, {
					y: 0,
					duration: 2,
					stagger: 0.1,
					ease: "expo.inOut",
					onComplete: () => {
						setAnimationComplete(true);
					},
				})
				.to(
					accentRefs.current,
					{
						color: "black",
						duration: 1,
					},
					2
				)
				.to(
					$(accentRefs.current).find(".accent-bg"),
					{
						width: "100%",
						ease: "circ.inOut",
						duration: 1.2,
						stagger: 0.2,
					},
					1.5
				);
		}
	}, [lines.current, accentRefs.current]);

	useEffect(() => {
		animationComplete && props.showHeader();
	}, [animationComplete, props.showHeader]);

	return (
		<Layout bg='dark'>
			<Box sx={containerStyle}>
				<Typography
					ref={heading}
					variant={"h2"}
					component='h2'
					className='splash-heading'
					style={headingStyle}
				>
					<div className='line-wrapper'>
						<span className='line' ref={addToRefs}>
							Full{" "}
							<span className='accent' ref={addToAccentRefs}>
								stack
								<span className='accent-bg'></span>
							</span>{" "}
							developer
						</span>{" "}
					</div>{" "}
					<div className='line-wrapper'>
						{" "}
						<span className='line' ref={addToRefs}>
							& graphic designer
						</span>{" "}
					</div>{" "}
					<div className='line-wrapper'>
						{" "}
						<span className='line' ref={addToRefs}>
							based in the beautiful
						</span>{" "}
					</div>{" "}
					<div className='line-wrapper'>
						{" "}
						<span className='line' ref={addToRefs}>
							city of <span className='image'></span>{" "}
							<span className='accent' ref={addToAccentRefs}>
								Montréal
								<span className='accent-bg'></span>
							</span>
						</span>{" "}
					</div>
				</Typography>
			</Box>
			<GradientBg className='gradient-bg'></GradientBg>
		</Layout>
	);
}

export default SplashPage;

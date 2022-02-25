import React, { useRef, useEffect, useContext } from "react";
import { Box } from "@mui/material";
import gsap from "gsap";
import { useTheme } from "styled-components";
import { LoadingContext } from "../../App/App";

function Loader({ isActive }) {
	const theme = useTheme();
	const { toggleLoading } = useContext(LoadingContext);

	const loaderStyle = {
		position: "fixed",
		top: 0,
		left: 0,
		width: "100%",
		height: "100vh",
		zIndex: 9999,
		backgroundColor: theme.colors.dark,
		color: theme.colors.light,
		fontFamily: "Haas",
		display: isActive ? "flex" : "none",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
		fontSize: "15vw",
		transform: "translateX(-100%)",
	};

	const wordStyle = {
		opacity: 0,
	};

	const word1 = useRef(null);
	const word2 = useRef(null);
	const word3 = useRef(null);
	const container = useRef(null);
	const fadeInTimeline = useRef(gsap.timeline());
	const fadeOutTimeline = useRef(gsap.timeline());
	const masterTimeline = useRef(gsap.timeline());
	const translateTimeline = useRef(gsap.timeline());

	useEffect(() => {
		if (
			word1.current &&
			word2.current &&
			word3.current &&
			container.current &&
			isActive
		) {
			const speed = 0.2;
			const ease = "linear.easeNone";

			translateTimeline.current
				.to(container.current, {
					x: 0,
					ease: "expo.inOut",
					duration: 0.9,
				})
				.to(container.current, {
					y: "-100%",
					ease: "expo.inOut",
					duration: 0.9,
					onComplete: () => {
						toggleLoading();
					},
				})
				.set(container.current, { clearProps: "all" });

			const fadeIn = () => {
				fadeInTimeline.current
					.to(
						word1.current,
						{
							opacity: 1,
							duration: speed,
							ease: ease,
						},
						0
					)
					.to(
						word2.current,
						{
							opacity: 1,
							duration: speed,
							ease: ease,
						},
						speed
					)
					.to(
						word3.current,
						{
							opacity: 1,
							duration: speed,
							ease: ease,
						},
						speed * 2
					);
				return fadeInTimeline.current;
			};

			const fadeOut = () => {
				fadeOutTimeline.current
					.to(
						word1.current,
						{
							opacity: 0,
							ease: ease,
						},
						speed
					)
					.to(
						word2.current,
						{
							opacity: 0,
							ease: ease,
						},
						speed * 2
					)
					.to(
						word3.current,
						{
							opacity: 0,
							ease: ease,
						},
						speed * 3
					);

				return fadeOutTimeline.current;
			};

			masterTimeline.current.add(fadeIn()).add(fadeOut(), "-=0.5");
		}
	}, [word1, word2, word3, container, isActive]);

	return (
		<Box sx={loaderStyle} component='div' ref={container} className='Loader'>
			<span ref={word1} style={wordStyle}>
				Work hard
			</span>
			<span ref={word2} style={wordStyle}>
				Work hard
			</span>
			<span ref={word3} style={wordStyle}>
				Work hard
			</span>
		</Box>
	);
}

export default Loader;

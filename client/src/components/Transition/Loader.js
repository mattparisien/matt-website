import { Box, Container, useMediaQuery } from "@mui/material";
import { keyframes } from "@mui/system";
import gsap from "gsap";
import CSSPlugin from "gsap/CSSPlugin";
import React, { useEffect, useRef } from "react";
import { useTheme } from "styled-components";
import Star from "../Star/Star";
import {Planet1} from "../Vector/Planets";

gsap.registerPlugin(CSSPlugin);

const wordAnim = keyframes`
	0% {
		transform: translateY(150%);
		opacity: 0;
	} 100% {
		transform: translateY(0);
		opacity: 1;
	}
`;

function Loader({ isActive, setDone }) {
	const matches = useMediaQuery("(max-width: 600px)", { noSsr: true });

	const content = useRef(null);
	const containerRef = useRef(null);
	const bg = useRef(null);

	useEffect(() => {
		if (isActive) {
			const tl = gsap.timeline();

			tl.set(containerRef.current, { display: "flex" })
				.to(bg.current, {
					scaleX: 1,
					duration: 1,
					ease: "circ.inOut",
				})
				.to(
					bg.current,
					{
						scaleY: 0.001,
						duration: 1,
						ease: "circ.inOut",
						transformOrigin: 'top'
					},
					1.6
				)
				.to(
					content.current,
					{
						opacity: 0,
					},
					1.3
				)
				.set([bg.current, content.current, containerRef.current], {
					clearProps: "all",
				});

			setDone();
		}
	}, [isActive, setDone]);

	// 	if (content.current && bg.current && containerRef.current) {
	// 		//Play on initial component load

	// 		const container = containerRef.current;
	// 		const background = bg.current;
	// 		const items = content.current;

	// 		//Play everytime isActive is true

	// 		if (isActive && !hasPlayed) {
	// 			transitionAnim(masterTimeline.current, container, background, items)
	// 				.progress(0)
	// 				.play();
	// 		}

	// 		//Prevent from playing again
	// 	}
	// }, [bg, content, containerRef, isActive, hasPlayed]);

	return (
		<div className='o-loader' ref={containerRef}>
			<div className='o-loader_content' ref={content}>
				<Planet1/>
			</div>
			<Box className='o-loader_background' ref={bg}></Box>
		</div>
	);
}

export default Loader;

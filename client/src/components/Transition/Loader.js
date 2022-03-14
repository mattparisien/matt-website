import { Box } from "@mui/material";
import gsap from "gsap";
import CSSPlugin from "gsap/CSSPlugin";
import React, { useEffect, useRef, useState } from "react";
import { Planet1 } from "../Vector/Planets";

gsap.registerPlugin(CSSPlugin);


function Loader({ isActive, setDone }) {
	

	const content = useRef(null);
	const containerRef = useRef(null);
	const bg = useRef(null);
	const [hasPlayed, setHasPlayed] = useState(false);

	useEffect(() => {
		if (isActive && !hasPlayed) {
			setHasPlayed(true)
			const tl = gsap.timeline();
			

			console.log('hello!')

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
					2,
				)
				.to(
					content.current,
					{
						opacity: 0,
						onComplete: () => {
							setDone();
						}
					},
					1.3
				)
				.set([bg.current, content.current, containerRef.current], {
					clearProps: "all",
				});

			
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

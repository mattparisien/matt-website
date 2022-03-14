import { Box } from "@mui/material";
import gsap from "gsap";
import CSSPlugin from "gsap/CSSPlugin";
import React, { useEffect, useRef, useState } from "react";
import { Planet1 } from "../Vector/Planets";
import classNames from "classnames";

gsap.registerPlugin(CSSPlugin);

function Loader({ isActive, setDone }) {
	const content = useRef(null);
	const containerRef = useRef(null);
	const bg = useRef(null);
	const [hasPlayed, setHasPlayed] = useState(false);
	const [isFirstVisit, setFirstVisit] = useState(true);

	const classes = classNames("o-loader", { "is-first-visit": isFirstVisit });

	useEffect(() => {
		if (isActive && !hasPlayed) {
			setHasPlayed(true);

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
						transformOrigin: "top",
					},
					1
				)
				.to(
					content.current,
					{
						opacity: 0,
						onComplete: () => {
							setDone();
							setFirstVisit(false);
						},
					},
					1.3
				)
				.set([bg.current, content.current, containerRef.current], {
					clearProps: "all",
				});
		}
	}, [isActive, setDone, hasPlayed]);

	return (
		<div className={classes} ref={containerRef}>
			<div className='o-loader_content' ref={content}>
				<Planet1 />
			</div>
			<Box className='o-loader_background' ref={bg}></Box>
		</div>
	);
}

export default Loader;

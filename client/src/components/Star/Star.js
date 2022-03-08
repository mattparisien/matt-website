import React, { useEffect, useRef } from "react";
import { useTheme } from "styled-components";
import gsap from "gsap";

function Star({ height, color, strokeWidth }) {
	const theme = useTheme();
	const star = {
		height: height,
		width: "100%"
	};

	const lineTimeline = useRef(gsap.timeline());
  const lineRefs = useRef([]);
	lineRefs.current = [];


	// useEffect(() => {
	// 	if (lineRefs.current) {
	// 		gsap.set(lineRefs.current, { transformOrigin: "50% 50%" });

	// 		lineTimeline.current.to(lineRefs.current, {
	// 			rotation: "180deg",
	// 			ease: "expo.inOut",
	// 			duration: 3,
	// 			repeat: -1,
	// 			stagger: 0.1,
	// 			yoyo: true,
	// 			repeatDelay: 0,
	// 		});
	// 	}
	// }, [lineRefs]);

	const line = {
		fill: theme.colors[color],
		color: theme.colors[color],
		fill: "none",
		stroke: theme.colors[color],
		strokeMiterlimit: 10,
		strokeWidth: strokeWidth,
		transition: '2s linear',
		transformOrigin: "center"
	};


	const addToLineRefs = el => {
		if (el && !lineRefs.current.includes(el)) {
			lineRefs.current.push(el);
		}
	};

	return (
		<svg
			id='svg-star'
			style={star}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 398.89 407.59'
		>
			<path
				class='cls-1'
				d='M223.11,539.31,388.89,167'
				transform='translate(-106.56 -149.34)'
				style={line}
				ref={addToLineRefs}
			/>
			<path
				class='cls-1'
				d='M149.89,484.13l312.22-262'
				transform='translate(-106.56 -149.34)'
				style={line}
				ref={addToLineRefs}
			/>
			<path
				class='cls-1'
				d='M108.26,402.44l395.48-98.6'
				transform='translate(-106.56 -149.34)'
				style={line}
				ref={addToLineRefs}
			/>
			<path
				class='cls-1'
				d='M106.66,310.77l398.68,84.74'
				transform='translate(-106.56 -149.34)'
				style={line}
				ref={addToLineRefs}
			/>
			<path
				class='cls-1'
				d='M145.41,227.67,466.59,478.61'
				transform='translate(-106.56 -149.34)'
				style={line}
				ref={addToLineRefs}
			/>
			<path
				class='cls-1'
				d='M216.66,170,395.34,536.31'
				transform='translate(-106.56 -149.34)'
				style={line}
				ref={addToLineRefs}
			/>
			<path
				class='cls-1'
				d='M306,149.34V556.93'
				transform='translate(-106.56 -149.34)'
				style={line}
				ref={addToLineRefs}
			/>
		</svg>
	);
}

export default Star;

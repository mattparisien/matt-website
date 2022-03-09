import React, { useEffect, useRef } from "react";
import { useTheme } from "styled-components";
import gsap from "gsap";

function Star({ height, color, strokeWidth }) {
	const theme = useTheme();
	const star = {
		height: height,
		width: "100%",
	};

	const lineTimeline = useRef(
		gsap.timeline({ repeat: -1, repeatDelay: 0, yoyo: true })
	);
	const lineRefs = useRef([]);
	lineRefs.current = [];


	const line = {
		fill: "none",
		stroke: theme.colors["light"],
		strokeMiterlimit: 10,
		strokeWidth: strokeWidth,

		transformOrigin: "center",
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
				className='cls-1'
				d='M223.11,539.31,388.89,167'
				transform='translate(-106.56 -149.34)'
				style={line}
				ref={addToLineRefs}
			/>
			<path
				className='cls-1'
				d='M149.89,484.13l312.22-262'
				transform='translate(-106.56 -149.34)'
				style={line}
				ref={addToLineRefs}
			/>
			<path
				className='cls-1'
				d='M108.26,402.44l395.48-98.6'
				transform='translate(-106.56 -149.34)'
				style={line}
				ref={addToLineRefs}
			/>
			<path
				className='cls-1'
				d='M106.66,310.77l398.68,84.74'
				transform='translate(-106.56 -149.34)'
				style={line}
				ref={addToLineRefs}
			/>
			<path
				className='cls-1'
				d='M145.41,227.67,466.59,478.61'
				transform='translate(-106.56 -149.34)'
				style={line}
				ref={addToLineRefs}
			/>
			<path
				className='cls-1'
				d='M216.66,170,395.34,536.31'
				transform='translate(-106.56 -149.34)'
				style={line}
				ref={addToLineRefs}
			/>
			<path
				className='cls-1'
				d='M306,149.34V556.93'
				transform='translate(-106.56 -149.34)'
				style={line}
				ref={addToLineRefs}
			/>
		</svg>
	);
}

export default Star;

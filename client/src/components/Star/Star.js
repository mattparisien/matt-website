import React, { useRef, useState, useEffect } from "react";
import { useTheme } from "styled-components";
import gsap from "gsap";
import { useMediaQuery } from "@material-ui/core";
import { device } from "../../styles/breakpoints";

function Star({ height, color, strokeWidth }) {
	const mobile = useMediaQuery(device.mobileL);
	const theme = useTheme();
	const lineRefs = useRef([]);
	lineRefs.current = [];
	const starRef = useRef(null);

	const addToLineRefs = el => {
		if (el && !lineRefs.current.includes(el)) {
			lineRefs.current.push(el);
		}
	};

	const star = {
		height: height,
		width: height,
		maxWidth: "700px",
		maxHeight: "700px",
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		zIndex: 1,
	};

	const line = {
		color: theme.colors.orange,
		fill: "none",
		stroke: theme.colors.dark,
		strokeMiterlimit: 10,
		strokeWidth: strokeWidth
	};

	const [hasPlayed, setHasPlayed] = useState(false);

	useEffect(() => {
		if (lineRefs.current && !hasPlayed) {
			setHasPlayed(true);

			let delay = 0;
			let rotation = 270;

			//Individual line tls
			lineRefs.current.reverse().forEach((item, index) => {
				let tl = gsap.timeline();

				tl.set(item, {
					rotation: `${rotation}deg`,
					transformOrigin: "center",

					scale: 0.01,
				})
					.to(item, {
						width: "100%",
						delay: 1.4,
						duration: 0.8,
						scale: 1,
						ease: "power3.out",
					})
					.to(
						item,
						{
							rotation: "0deg",
							ease: "expo.inOut",
							duration: 3,
						},
						1
					)
					.to(item, {
						rotation: `${rotation}deg`,
						delay: delay,
						duration: 4,
						transformOrigin: "center",
						ease: "expo.inOut",
						repeat: -1,
						yoyo: true,
						repeatDelay: 1,
					});

				rotation += 26;
				delay += 0.1;
			});
		}
	}, [lineRefs, starRef, hasPlayed]);
	return (
		<svg
			id='svg-star'
			ref={starRef}
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

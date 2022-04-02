import { Box } from "@mui/system";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useTheme } from "styled-components";
import $ from "jquery";

function Star({ height, color, strokeWidth, inline, margin }) {
	const theme = useTheme();
	const lineRefs = useRef([]);
	lineRefs.current = [];
	const starRef = useRef(null);
	const [ref, inView] = useInView();

	const addToLineRefs = el => {
		if (el && !lineRefs.current.includes(el)) {
			lineRefs.current.push(el);
		}
	};

	const star = {
		height: height,
		width: height,
		margin: margin,
		maxWidth: "700px",
		maxHeight: "700px",
		zIndex: 1,
	};

	const line = {
		color: theme.colors.orange,
		fill: "none",
		stroke: theme.colors[color],
		strokeMiterlimit: 10,
		strokeWidth: strokeWidth,
	};

	const [hasPlayed, setHasPlayed] = useState(false);

	useEffect(() => {
		if (lineRefs.current && !hasPlayed) {
			console.log("hrse!");
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

						duration: 0.3,
						scale: 1,
						ease: "power3.out",
					})
					.to(item, {
						rotation: "0deg",
						ease: "expo.inOut",
						duration: 3,
					})
					.to(item, {
						rotation: `${rotation}deg`,
						delay: delay,
						duration: 25,
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
		<Box className={inline ? "c-star -inline" : "c-star"} ref={ref}>
			<svg
				id='c-icon_svg c-icon_svg_star'
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
		</Box>
	);
}

function Eyes() {
	const ref = useRef(null);
	const tl = useRef(gsap.timeline({ repeat: -1, yoyo: true }));

	useEffect(() => {
		const pupils = $(ref.current).find(".c-icon_eyes--pupil");

		tl.current
			.to(pupils, {
				y: "-4vw",
				x: "-3vw",
				duration: 1,
				ease: "power3.out",
				delay: 5,
			})
			.to(pupils, {
				y: "4vw",
				x: "3vw",
				ease: "power3.out",
			});
	}, []);

	return (
		<svg
			ref={ref}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 435 265'
			className='c-icon_svg c-icon_svg_eyes -inline'
		>
			<ellipse
				cx={103.5}
				cy={132.5}
				rx={102}
				ry={131}
				className='c-icon_svg_eyes--eye'
			/>
			<ellipse
				cx={331.5}
				cy={132.5}
				rx={102}
				ry={131}
				className='c-icon_svg_eyes--eye'
			/>
			<circle
				cx={103.5}
				cy={149.44}
				r={35}
				className='c-icon_svg_eyes--pupil'
			/>
			<circle
				cx={337.5}
				cy={149.44}
				r={35}
				className='c-icon_svg_eyes--pupil'
			/>
		</svg>
	);
}

function Arrow() {
	const arrow1 = useRef(null);
	const arrow2 = useRef(null);
	const tl = useRef(gsap.timeline({ repeat: -1 }));

	useEffect(() => {
		tl.current
			.to(arrow1.current, {
				x: "100%",
				duration: 1,
				ease: "power.in",
			})
			.to(arrow2.current, {
				x: "0",
				duration: 1,
				ease: "power3.out",
			}, 0.4);
	}, []);

	return (
		<>
			<svg
				ref={arrow1}
				className='c-icon_svg c-icon_svg_arrow -inline'
				viewBox='0 0 84 22'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path d='M0 11H83M83 11L72.5 0.5M83 11L72.5 21.5'></path>
				<path d='M0 11H83M83 11L72.5 0.5M83 11L72.5 21.5'></path>
			</svg>
			<svg
				ref={arrow2}
				className='c-icon_svg c-icon_svg_arrow -inline'
				viewBox='0 0 84 22'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path d='M0 11H83M83 11L72.5 0.5M83 11L72.5 21.5'></path>
				<path d='M0 11H83M83 11L72.5 0.5M83 11L72.5 21.5'></path>
			</svg>
		</>
	);
}

export function Icon(props) {
	return (
		<span className='c-icon -inline'>
			{props.variant === "star" && <Star {...props} />}
			{props.variant === "eyes" && <Eyes {...props} />}
			{props.variant === "arrow" && <Arrow {...props} />}
		</span>
	);
}

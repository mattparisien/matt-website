import { Box } from "@mui/material";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useTheme } from "styled-components";

export default function Arrow(props) {
	const theme = useTheme();
	const arrows = useRef([]);
	arrows.current = [];
	const tl = useRef(gsap.timeline({ repeat: -1, repeatDelay: 0.5 }));

	const addToArrows = el => {
		if (el && !arrows.current.includes(el)) {
			arrows.current.push(el);
		}
	};

	useEffect(() => {
		if (arrows.current) {
			gsap.set(arrows.current[1], {
				x: "-100%",
				position: "absolute",
				left: 0,
				top: 0,
			});
			tl.current
				.to(arrows.current[0], {
					x: "100%",
					duration: 1,
					ease: "power3.in",
				})
				.to(
					arrows.current[1],
					{
						x: "0",
						duration: 1,

						ease: "power3.out",
					},
					0.8
				);
		}
	}, [arrows]);

	return (
		<Box
			className='svg-overflow-wrapper'
			sx={{ overflow: "hidden", position: "relative" }}
		>
			<svg
				class='arrow'
				width={props.width}
				height={props.height}
				viewBox='0 0 84 22'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				ref={addToArrows}
			>
				<path
					d='M0 11H83M83 11L72.5 0.5M83 11L72.5 21.5'
					stroke={theme.colors[props.color]}
				></path>
				<path
					d='M0 11H83M83 11L72.5 0.5M83 11L72.5 21.5'
					stroke={theme.colors[props.color]}
				></path>
			</svg>
			<svg
				class='arrow'
				width={props.width}
				height={props.height}
				viewBox='0 0 84 22'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				ref={addToArrows}
			>
				<path
					d='M0 11H83M83 11L72.5 0.5M83 11L72.5 21.5'
					stroke={theme.colors[props.color]}
				></path>
				<path
					d='M0 11H83M83 11L72.5 0.5M83 11L72.5 21.5'
					stroke={theme.colors[props.color]}
				></path>
			</svg>
		</Box>
	);
}

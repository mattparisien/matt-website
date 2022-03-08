import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React, { forwardRef, useContext, useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import { ColorContext } from "../../App/App";
import Layout from "../Containers/Layout";
import Line from "../Line/Line";
import ParagraphLayout from "../Paragraph/ParagraphLayout";
import { Pills } from "../Pills/Pills";
import { device, deviceSize } from "../../styles/breakpoints";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "styled-components";
import gsap from "gsap";
import useSplit from "../../helpers/hooks/useSplit";

function HomePage(props, ref) {
	const theme = useTheme();
	const introTimeline = useRef(gsap.timeline());
	const card = useRef(null);
	const marquees = useRef([]);
	marquees.current = [];
	const lines = useRef([]);
	lines.current = [];
	const desktop = useMediaQuery(device.laptop);
	const mobile = useMediaQuery(`(max-width: ${deviceSize.mobileL}px`);
	const headingRef = useRef(null);

	const { splitText } = useSplit([headingRef.current], {
		type: "lines, words",
		linesClass: "heading-line",
	});

	const pillInfo = [
		{
			text: "ReactJS",
			highlighted: false,
		},
		{
			text: "NodeJS",
			highlighted: false,
		},
		{
			text: "Express",
			highlighted: true,
		},
		{
			text: "SQL",
			highlighted: false,
		},
		{
			text: "HTML5",
			highlighted: false,
		},
		{
			text: "Styled Components",
			highlighted: false,
		},
		{
			text: "Human",
			highlighted: false,
		},
		{
			text: "MaterialUI",
			highlighted: false,
		},
		{
			text: "MongoDB",
			highlighted: false,
		},
		{
			text: "GSAP",
			highlighted: false,
		},
		{
			text: "Threejs",
			highlighted: false,
		},
		{
			text: "Ruby on rails",
			highlighted: false,
		},
		{
			text: "Empathy",
			highlighted: true,
		},
		{
			text: "Rest APIS",
			highlighted: false,
		},
		{
			text: "Illustrator",
			highlighted: false,
		},
		{
			text: "Photoshop",
			highlighted: false,
		},
		{
			text: "Git",
			highlighted: false,
		},
		{
			text: "Mobile-first",
			highlighted: false,
		},
		{
			text: "Mocha/Chai",
			highlighted: false,
		},
		{
			text: "Cypress",
			highlighted: false,
		},
		{
			text: "Figma",
			highlighted: false,
		},
		{
			text: "Modern Javascript",
			highlighted: false,
		},
	];

	const marqueeStyle = {
		fontSize: desktop ? "10rem" : "13vw",
		fontFamily: mobile ? "Georgia" : "Neue Mtl",
		fontWeight: "lighter",
	};

	const word = {
		marginRight: "8vw",
	};

	const featuredWrapper = {
		backgroundColor: theme.colors.yellow,
		height: desktop ? "700px" : mobile ? "150vw" : "600px",
		width: desktop ? "560px" : mobile ? "100%" : "500px",
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		zIndex: 1,
	};

	useEffect(() => {
		console.log(marquees);
		if (card.current && marquees.current) {
			console.log(marquees.current);
			console.log("made it here");

			gsap.set(marquees.current, {
				y: "100%",
				opacity: 0,
			});

			if (!props.isLoading) {
				introTimeline.current
					.to(marquees.current, {
						y: 0,
						opacity: 1,
						duration: 2,
						ease: "expo.inOut",
						stagger: 0.1,
					})
					.from(
						card.current,
						{
							y: "100%",
							ease: "power3.out",
							opacity: 0,
							duration: 0.8,
						},
						0.9
					);
			}
		}
	}, [card, marquees.current, lines.current, props.isLoading]);

	const heading = {
		fontSize: "7vw",
		lineHeight: "7vw",
		fontFamily: "Neue Mtl",
		fontWeight: "lighter",
		width: "100%",
		color: theme.colors.light,
		textAlign: "center",
		"& .heading-line": {
			display: "flex !important",
			justifyContent: "space-between",
		},
	};

	const innerHero = {
		width: "100%",
		height: "100%",
		display: "flex",
		alignItems: "end",
		textAlign: "center",
	};

	const line = {
		fill: theme.colors.dark,
		color: theme.colors.dark,
		fill: "none",
		stroke: "#231f20",
		strokeMiterlimit: 10,
		strokeWidth: "1px",
	};

	const addToLineRefs = el => {
		if (el && !lines.current.includes(el)) {
			lines.current.push(el);
		}
	};

	const star = {};

	return (
		<>
			<Layout bg={"green"} color='light' height='100vh' fullbleed>
				<Box className='hero-inner' sx={innerHero}>
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

					<Box as='h2' className='hero-heading' sx={heading} ref={headingRef}>
						I like to leverage the power of software & design to push people and
						brands forward
					</Box>
				</Box>
			</Layout>

			<Layout bg='light' height='40vw'>
				<ParagraphLayout indent indentHeading='about' variant={1}>
					Full-stack software developer & graphic designer obsessed with digital
					products and passionate about building responsive user interfaces.
				</ParagraphLayout>
			</Layout>
			<Layout bg='light' height='40vw'>
				<Line />
				<div className='half-section-wrapper'>
					<ParagraphLayout indent indentHeading='about' variant={2}>
						Good research leads to effective design and better tech stacks. I
						draw from daring, innovative references to create smooth, seamless
						user experiences. My work never brags, but it sure does speak for
						itself.
					</ParagraphLayout>
				</div>
			</Layout>
			<Layout bg='light' height='auto' fullbleed>
				<Line />
			</Layout>
			<Layout bg='light' height='100vw'>
				<Pills info={pillInfo} />
			</Layout>
			<Layout bg='dark'></Layout>
		</>
	);
}

export default forwardRef(HomePage);

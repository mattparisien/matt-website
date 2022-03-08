import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React, { forwardRef, useContext, useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import { ColorContext } from "../../App/App";
import Layout from "../Containers/Layout";
import Line from "../Line/Line";
import ParagraphLayout from "../Paragraph/ParagraphLayout";
import { Pills } from "../Pills/Pills";
import { device } from "../../styles/breakpoints";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "styled-components";
import gsap from "gsap";

function HomePage(props, ref) {
	const theme = useTheme();
	const introTimeline = useRef(gsap.timeline());
	const card = useRef(null);
	const marquees = useRef([]);
	marquees.current = [];
	const lines = useRef([]);
	lines.current = [];
	const desktop = useMediaQuery(device.laptop);

	const addToRefs = el => {
		if (el && !marquees.current.includes(el)) {
			marquees.current.push(el);
		}
	};

	const addToLines = el => {
		if (el && !lines.current.includes(el)) {
			lines.current.push(el);
		}
	};

	const imgStyle = {
		position: "absolute",
		top: 0,
		left: 0,
	};

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
		fontFamily: "Neue Mtl",
		fontWeight: "lighter",
	};

	const word = {
		marginRight: "8vw",
	};

	const featuredWrapper = {
		backgroundColor: theme.colors.yellow,
		height: "50vw",
		width: "40vw",
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		zIndex: 99,
	};

	useEffect(() => {
		console.log(marquees);
		if (card.current && marquees.current) {
			console.log(marquees.current);
			console.log("made it here");
			gsap.set(card.current, {
				y: "100%",
				opacity: 0,
			});
			gsap.set(marquees.current, {
				y: "100%",
				opacity: 0,
			});

			if (!props.isLoading) {
				introTimeline.current
					.to([marquees.current], {
						y: 0,
						opacity: 1,
						duration: 2,
						ease: "expo.inOut",
						stagger: 0.1,
					})
					.to(
						card.current,
						{
							y: "-50%",
							opacity: 1,
							duration: 1,
							ease: "power2.out",
						},
						1.2
					);
			}
		}
	}, [card, marquees.current, lines.current, props.isLoading]);

	return (
		<>
			<Layout bg='dark' fullbleed={true} hero={true}>
				<Box
					className='hero__inner'
					sx={{
						display: "flex",
						alignItems: "center",
						position: "relative",
						justifyContent: "center",
						height: "100%",
						flexDirection: "column",
					}}
				>
					<Box
						sx={{
							width: "100%",
							position: "relative",
							height: desktop ? "15rem" : "26vw",
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
						}}
					>
						<Container ref={addToLines}>
							<Line />
						</Container>

						<Box className='marquee-overflow-box' sx={{ overflow: "hidden" }}>
							<Box ref={addToRefs}>
								<Marquee gradient={false} style={marqueeStyle}>
									<Box sx={word}>Software</Box>
									<Box sx={word}>Software</Box>
									<Box sx={word}>Software</Box>
									<Box sx={word}>Software</Box>
									<Box sx={word}>Software</Box>
								</Marquee>
							</Box>
						</Box>
						<Container ref={addToLines}>
							<Line />
						</Container>
					</Box>
					<Box
						sx={{
							width: "100%",
							position: "relative",
							height: desktop ? "15rem" : "26vw",
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
						}}
					>
						<Container ref={addToLines}>
							<Line color='dark' />
						</Container>

						<Box className='marquee-overflow-box' sx={{ overflow: "hidden" }}>
							<Box ref={addToRefs}>
								<Marquee
									gradient={false}
									style={marqueeStyle}
									direction='right'
								>
									<Box sx={word}>Design</Box>
									<Box sx={word}>Design</Box>
									<Box sx={word}>Design</Box>
									<Box sx={word}>Design</Box>
									<Box sx={word}>Design</Box>
								</Marquee>
							</Box>
						</Box>

						<Container ref={addToLines}>
							<Line />
						</Container>
					</Box>
					<Box
						className='featured-wrapper'
						sx={featuredWrapper}
						ref={card}
					></Box>
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

import { Box } from "@mui/system";
import React, { forwardRef, useContext, useRef } from "react";
import { ColorContext } from "../../App/App";
import Layout from "../Containers/Layout";
import Line from "../Line/Line";
import Heading from "../Heading/Heading";
import ParagraphLayout from "../Paragraph/ParagraphLayout";
import { Pills } from "../Pills/Pills";
import Marquee from "react-fast-marquee";
import { Container } from "@mui/material";

function HomePage(props, ref) {
	//Declare refs needed for animation
	const stickySection = useRef(null);

	const { changeColors } = useContext(ColorContext);
	const { revealContent, colors } = props;

	const containerStyles = { maxWidth: 2000, margin: "0 auto" };

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

	const stickyRef = useRef(null);

	const marqueeStyle = {
		fontSize: "13vw",
		fontFamily: "Neue Mtl",
		fontWeight: "lighter",
	};

	const word = {
		marginRight: "8vw",
	};

	return (
		<>
			<Layout bg='dark' fullbleed={true} hero={true}>
				<Box
					className='hero__inner'
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						height: "100%",
						flexDirection: "column",
					}}
				>
					<Box
						sx={{
							width: "100%",
							position: "relative",
							height: "22vw",
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
						}}
					>
						<Container>
							<Line />
						</Container>

						<Box className='marquee-overflow-box' sx={{ overflow: "hidden" }}>
							<Marquee gradient={false} style={marqueeStyle}>
								<Box sx={word}>Software</Box>
								<Box sx={word}>Software</Box>
								<Box sx={word}>Software</Box>
								<Box sx={word}>Software</Box>
								<Box sx={word}>Software</Box>
							</Marquee>
						</Box>
						<Container>
							<Line />
						</Container>
					</Box>
					<Box
						sx={{
							width: "100%",
							position: "relative",
							height: "22vw",
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
						}}
					>
						<Container>
							<Line color='dark' />
						</Container>

						<Box className='marquee-overflow-box' sx={{ overflow: "hidden" }}>
							<Marquee gradient={false} style={marqueeStyle} direction="right">
								<Box sx={word}>Design</Box>
								<Box sx={word}>Design</Box>
								<Box sx={word}>Design</Box>
								<Box sx={word}>Design</Box>
								<Box sx={word}>Design</Box>
							</Marquee>
						</Box>
						<Container>
							<Line />
						</Container>
					</Box>

					<Line />
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

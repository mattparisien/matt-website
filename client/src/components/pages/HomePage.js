import { Typography } from "@mui/material";
import { Box, textTransform } from "@mui/system";
import React, {
	forwardRef,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";
import { useTheme } from "styled-components";
import { ColorContext, DataContext } from "../App/App";
import Layout from "../Containers/Layout";
import Line from "../Divider/Line";
import ResponsiveGrid from "../Grid/ResponsiveGrid";
import ParagraphLayout from "../Paragraph/ParagraphLayout";
import useSplit from "../../helpers/hooks/useSplit";
import gsap from "gsap";
import useHeaderSpacing from "../../helpers/hooks/useHeaderSpacing";
import { useMediaQuery } from "@material-ui/core";

function HomePage(props, ref) {
	//Declare refs needed for animation

	const [headerHeight] = useHeaderSpacing();
	const data = useContext(DataContext);
	const heading = useRef(null);
	const heading2 = useRef(null);
	const revealer = useRef(null);
	revealer.current = [];
	const brandLine = useRef(null);
	const introTimeline = useRef(gsap.timeline());
	const theme = useTheme();
	const [layoutColor, setLayoutColor] = useState("dark");
	const [featuredProject, setFeaturedProject] = useState(null);
	const [brandLineShow, setBrandLineShow] = useState(false);
	const { splitText } = useSplit([heading.current, heading2.current], {
		type: "lines, chars",
		linesClass: "line",
		charsClass: "char",
	});

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

	const [hasPlayed, setHasPlayed] = useState(false);

	const [gridData, setGridData] = useState(null);
	const matches = useMediaQuery("(max-width: 800px)");

	useEffect(() => {
		if (data && data.software) {
			const featuredProj = data.software.slice(0, matches ? 1 : 2);
			setFeaturedProject(featuredProj);

			const array = data.software.slice(0, 2).map(project => {
				return {
					id: project.id,
					name: project.name,
					featureImage:
						process.env.REACT_APP_API_URL + "/images/" + project.image.filename,
					description: project.description,
					href: project.url,
				};
			});
			setGridData(() => ({ data: array }));
		}
	}, [data, splitText, matches]);

	useEffect(() => {
		if (splitText && splitText.chars && !hasPlayed && revealer.current[0]) {
			setHasPlayed(true);
			const firstHeadingChars = splitText.chars.slice(0, 7);
			const secondHeadingChars = splitText.chars.slice(7, 14);
			introTimeline.current
				.to(firstHeadingChars, {
					y: 0,
					duration: 1,
					stagger: 0.05,
					ease: "expo.inOut",
				})
				.to(firstHeadingChars, {
					y: "-100%",
					duration: 1,
					stagger: 0.05,
					ease: "expo.inOut",
				})

				.to(
					secondHeadingChars,
					{
						y: 0,
						duration: 1,
						stagger: 0.05,
						ease: "expo.inOut",
						onStart: () => {
							setBrandLineShow(true);
							props.showHeader();
						},
					},
					1.2
				)
				.to(
					revealer.current,
					{
						y: "100%",
						ease: "circ.inOut",
						stagger: 0.1,
						duration: 2,
					},
					1.5
				)
				.set(revealer.current, {
					display: "none",
				});
		}

		console.log(revealer.current);
	}, [splitText, revealer.current]);

	const headingStyles = {
		zIndex: 1,
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: "100%",
		color: theme.colors.light,
		fontSize: "20vw",
		textTransform: "uppercase",
		lineHeight: "19vw",
		"& .line": {
			overflow: "hidden",
		},
		"& .char": {
			transform: "translateY(100%)",
		},
	};

	const heading2Styles = {
		color: theme.colors.light,
		fontSize: matches ? "18.98vw" : "10vw",
		letterSpacing: "-1.4px",
		textTransform: "uppercase",
		lineHeight: matches ? "18vw" : "9vw",
		"& .line": {
			overflow: "hidden",
		},
		"& .char": {
			transform: "translateY(100%)",
		},
	};

	const brandLineStyles = {
		width: matches ? "100%" : "250px",
		textTransform: "uppercase",
		fontSize: "0.8rem",
		lineHeight: "0.8rem",
		textIndent: !matches && "30%",
		opacity: brandLineShow ? 1 : 0,
		transition: "300ms ease",
	};

	const featured = {
		backgroundColor: "blue",
		width: "100%",
		height: "34vw",
		position: "relative",
		overflow: "hidden",
		display: "flex",
		flexDirection: matches ? "column" : "row",
		marginTop: headerHeight,
		"& .project-wrapper": {
			width: "50%",
			height: "100%",
		},
		"& .project-wrapper:hover .cta span": {
			transform: 'translateY(0)',
			opacity: 1,
		},
		"& img": {
			width: "100%",
			height: "90%",
			objectFit: "cover",
			objectPosition: "left",
			position: "relative",
		},
		"& .cta": {
			height: "10%",
			width: "100%",
			backgroundColor: "red",
			display: "flex",
			alignItems: "center",
			justifyContent: "end",
			textTransform: "uppercase",
			fontSize: "0.8rem",
			overflow: "hidden",
			"& span": {
				transition: "500ms ease",
				transform: "translateY(-110%)",
				opacity: 0,
			},
		},
		"& .revealer": {
			width: "100%",
			height: "100%",
			backgroundColor: theme.colors.dark,
			position: "absolute",
			top: 0,
			left: 0,
			zIndex: 0,
		},
	};

	const heroBottom = {
		display: "flex",
		alignItems: matches ? "start" : "end",
		flexDirection: matches ? "column" : "row",
		justifyContent: matches ? "center" : "space-between",
		width: "100%",
	};

	const addToRevealerRefs = el => {
		if (el && !revealer.current.includes(el)) {
			revealer.current.push(el);
		}
	};

	return (
		<>
			<Layout bg={"dark"} hero={true}>
				<Box
					className='hero__inner'
					sx={{
						display: "flex",
						flexDirection: "column-reverse",
						alignItems: "center",
						justifyContent: "space-between",
						height: "100%",
					}}
				>
					<Typography component='h1' sx={headingStyles} ref={heading}>
						Matth3w
					</Typography>
					<Box className='hero-bottom-bar' sx={heroBottom}>
						<Typography component='h3' sx={heading2Styles} ref={heading2}>
							Matth3w
						</Typography>
						<Typography
							component='span'
							sx={brandLineStyles}
							ref={brandLine}
							pr={2}
							pb={2}
						>
							Full-Stack developer based in the city of Montreal, Canada.
						</Typography>
					</Box>
					<Box className='featured-work-wrapper' sx={featured}>
						{featuredProject &&
							featuredProject[0] &&
							featuredProject.map(proj => {
								return (
									<>
										<a className='project-wrapper'>
											<img
												src={`${process.env.REACT_APP_API_URL}/images/${proj.image.filename}`}
											></img>
											<div className='revealer' ref={addToRevealerRefs}></div>
											<Box className='cta'>
												<Box component='span'>View project</Box>
											</Box>
										</a>
									</>
								);
							})}
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
			<Layout bg={layoutColor} height='auto'>
				{/* <Pills info={pillInfo} /> */}
				<ParagraphLayout indent indentHeading={"work"} variant={1}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
					placeat?
				</ParagraphLayout>
				<Box>
					<ResponsiveGrid
						items={gridData}
						hoverCb={() =>
							setLayoutColor(layoutColor === "dark" ? "light" : "dark")
						}
					/>
				</Box>
			</Layout>
			<Layout bg='dark'></Layout>
		</>
	);
}

export default forwardRef(HomePage);

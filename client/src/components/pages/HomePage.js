import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import gsap from "gsap";
import $ from "jquery";
import React, {
	forwardRef,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";
import Marquee from "react-fast-marquee";
import { useTheme } from "styled-components";
import { DataContext } from "../../App/App";
import useSplit from "../../helpers/hooks/useSplit";
import { device, deviceSize } from "../../styles/breakpoints";
import Layout from "../Containers/Layout";
import Line from "../Line/Line";
import ParagraphLayout from "../Paragraph/ParagraphLayout";

function HomePage(props, ref) {
	const [featuredProject, setFeaturedProject] = useState(null);
	const data = useContext(DataContext);
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
		wordsClass: "word",
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

	const wordTimelineLine3 = useRef(
		gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 0 })
	);
	const wordTimelineLine4 = useRef(
		gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 0 })
	);

	useEffect(() => {
		if (data && data.software) {
			setFeaturedProject({
				id: data.software[0].id,
				title: data.software[0].name,
				url: data.software[0].url,
				description: data.software[0].description,
			});
		}
	}, [data]);

	useEffect(() => {
		if (headingRef.current) {
			const word = $(headingRef.current).find(".word");

			const offsets = [
				{
					index: 11,
					x: "10vw",
				},
				{
					index: "10",
					x: "19vw",
				},
				{
					index: 9,
					x: "28vw",
				},
			];

			wordTimelineLine4.current
				.to(
					word[14],
					{
						x: "-35vw",
						duration: 3,
						ease: "expo.inOut",
					},
					0
				)
				.to(
					word[14],
					{
						x: "0",
						duration: 3,
						ease: "expo.inOut",
					},
					3
				)
				.to(
					word[13],
					{
						x: "36.2vw",
						duration: 3,
						ease: "expo.inOut",
					},
					3.2
				);

			wordTimelineLine3.current
				.to(
					word[offsets[0].index],
					{
						duration: 3,
						x: offsets[0].x,
						ease: "expo.inOut",
					},
					0
				)
				.to(
					word[offsets[1].index],
					{
						duration: 3,
						x: offsets[1].x,
						ease: "expo.inOut",
					},
					0.2
				)
				.to(
					word[offsets[2].index],
					{
						duration: 3,
						x: offsets[2].x,
						ease: "expo.inOut",
					},
					0.2
				);
		}
	}, [headingRef.current]);

	const heading = {
		marginBottom: 0,
		fontSize: "7vw",
		lineHeight: "7vw",
		fontFamily: "Neue Mtl",
		fontWeight: "lighter",
		width: "100%",
		color: theme.colors.dark,
		textAlign: "center",
		textTransform: "uppercase",
		"& .heading-line": {
			display: "flex !important",
			justifyContent: "space-between",
		},
		"& .heading-line:nth-of-type(4)": {
			justifyContent: "flex-end !important",
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
		strokeWidth: "0.4vw",
	};

	const lineRefs = useRef([]);
	lineRefs.current = [];

	const addToLineRefs = el => {
		if (el && !lineRefs.current.includes(el)) {
			lineRefs.current.push(el);
		}
	};

	const star = {
		height: "6vw",
	};

	const lineTimeline = useRef(gsap.timeline());

	useEffect(() => {
		if (lineRefs.current) {
			gsap.set(lineRefs.current, { transformOrigin: "center" });

			lineTimeline.current.to(lineRefs.current, {
				rotation: "180deg",
				ease: "expo.inOut",
				duration: 3,
				repeat: -1,
				stagger: 0.1,
				yoyo: true,
				repeatDelay: 0,
			});
		}
	}, [lineRefs.current]);

	const marqueeOffset = {
		transform: `translateY(100%)`,
		opacity: 0,
	};

	return (
		<>
			<Layout bg={"green"} color='light' height='100vh' fullbleed>
				<Box className='hero-inner' sx={innerHero}>
					<Box as='h2' className='hero-heading' sx={heading} ref={headingRef}>
						— I Leverage the power of software &{" "}
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
						</svg>{" "}
						design to push people and brands forward.
					</Box>
				</Box>
			</Layout>

			<Layout bg='light' height='auto'>
				<ParagraphLayout indent indentHeading='about' variant={1}>
					Hey. I'm a full-stack software developer & graphic designer obsessed
					with digital products and passionate about building responsive user
					interfaces. Previously at Lighthouse Labs, I'm currently exploring the
					space where development and animation intersects.
				</ParagraphLayout>
			</Layout>
			<Layout bg='light' height='auto'>
				<Box
					sx={{
						width: "100%",
						height: "100%",
						paddingTop: desktop ? "5rem" : "2rem",
					}}
				>
					<Line />
					<div className='half-section-wrapper'>
						<ParagraphLayout indent indentHeading='Philosophy' variant={2}>
							Good research leads to effective design and better tech stacks. I
							believe that a team of people who love creating, learning and
							growing together have the ability to transcend the workplace.
						</ParagraphLayout>
					</div>
				</Box>
			</Layout>
			<Layout bg='light' height='auto' fullbleed>
				<Line />
			</Layout>
			<Layout bg='dark' height='100vw' fullbleed>
				<Box
					sx={{
						height: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<MarqueeBlock
						projectTitle={featuredProject && featuredProject.title}
					/>
					<FeaturedCard featuredProject={featuredProject} />
				</Box>
			</Layout>
			<Layout bg='dark'></Layout>
		</>
	);
}

const FeaturedCard = ({ featuredProject }) => {
	const desktop = useMediaQuery(device.laptop);
	const mobile = useMediaQuery(`(max-width: ${deviceSize.mobileL}px`);
	const theme = useTheme();

	const featuredWrapper = {
		height: desktop ? "700px" : mobile ? "150vw" : "600px",
		width: desktop ? "560px" : mobile ? "100%" : "500px",
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		zIndex: 1,
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		padding: "2rem",
		boxSizing: "border-box",
		"&:hover .card-bg": {
			transform: "scale(1.1)",
		},
	};

	const bg = {
		backgroundColor: theme.colors.pink,
		position: "absolute",
		top: 0,
		left: 0,
		height: "100%",
		width: "100%",
		zIndex: -2,
		transition: "400ms ease",
	};

	const media = {};

	const title = {
		fontSize: "2rem",

		color: theme.colors.dark,
		margin: 0,
	};

	const description = {
		color: theme.colors.dark,
		textIndent: "39%",
		
		fontSize: "0.8rem"
	};

	return (
		<Box
			className='featured-work-card'
			sx={featuredWrapper}
			component='a'
			href={featuredProject ? featuredProject.url : ""}
			target='_blank'
			rel='noreferrer'
		>
			<Box className='title' sx={title} component='h4'>
				{featuredProject ? featuredProject.title : ""}
			</Box>
			<Box sx={media} className='media-wrapper'></Box>
			<Box className='description' sx={description} component='span'>
				{featuredProject ? featuredProject.description : ""}
			</Box>

			<Box className='card-bg' sx={bg}></Box>
		</Box>
	);
};

const MarqueeBlock = ({ projectTitle }) => {
	const desktop = useMediaQuery(device.laptop);
	const mobile = useMediaQuery(`(max-width: ${deviceSize.mobileL}px`);

	const marqueeStyle = {
		fontSize: desktop ? "10rem" : "13vw",
		fontFamily: mobile ? "Georgia" : "Neue Mtl",
		fontWeight: "lighter",
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				height: "40vw",
				justifyContent: "space-between",
			}}
		>
			<Line/>
			<Box
				className='marquee-rail-overflow-wrapper'
				sx={{ overflow: "hidden" }}
			>
				
				<Box className='marquee-rail-yOffset-wrapper'>
					<Marquee sx={marqueeStyle} gradient={false}>
						<MarqueeItem multiplier={10}>Featured Work</MarqueeItem>
					</Marquee>
				</Box>
				<Line/>
			</Box>
			<Box
				className='marquee-rail-overflow-wrapper'
				sx={{ overflow: "hidden" }}
			>
				<Box className='marquee-rail-yOffset-wrapper'>
					<Marquee sx={marqueeStyle} gradient={false} direction={"right"}>
						<MarqueeItem multiplier={10}>
							{projectTitle ? projectTitle : "Featured Work"}
						</MarqueeItem>
					</Marquee>
				</Box>
			</Box>
			<Box
				className='marquee-rail-overflow-wrapper'
				sx={{ overflow: "hidden" }}
			>
				<Box className='marquee-rail-yOffset-wrapper'>
					<Marquee sx={marqueeStyle} gradient={false}>
						<MarqueeItem multiplier={10}>Featured Work</MarqueeItem>
					</Marquee>
				</Box>
			</Box>
		</Box>
	);
};

const MarqueeItem = ({ speed, multiplier, children }) => {
	const marqueeWord = {
		marginRight: "8vw",
		fontSize: "10vw",
	};
	return [...Array(multiplier)].map((e, i) => (
		<Box className='marquee-word' key={i} sx={marqueeWord}>
			{children}
		</Box>
	));
};

export default forwardRef(HomePage);

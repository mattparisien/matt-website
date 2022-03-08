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
import useResize from "../../helpers/hooks/useResize";

function HomePage(props, ref) {
	const [windowWidth] = useResize();
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
	const headingRef = useRef([]);
	headingRef.current = [];

	const addToHeadingRef = el => {
		if (el && !headingRef.current.includes(el)) {
			headingRef.current.push(el);
		}
	};

	const { splitText } = useSplit(headingRef.current, {
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
	const lineRefs = useRef([]);
	lineRefs.current = [];

	const lineTl = useRef(gsap.timeline());

	const addToLineRefs = el => {
		if (el && !lineRefs.current.includes(el)) {
			lineRefs.current.push(el);
		}
	};

	const [hasPlayed, setHasPlayed] = useState(false);

	useEffect(() => {
		if (lineRefs.current && !hasPlayed) {
			let delay = 0;
			let rotation = 30;

			setHasPlayed(true);

			lineRefs.current.reverse().forEach((item, index) => {
				let tl = gsap.timeline();
				console.log("hello!");

				tl.to(item, {
					rotation: `${rotation}deg`,
					delay: delay,
					duration: 3,
					transformOrigin: "center",
					ease: "expo.inOut",
					repeat: -1,
					yoyo: true
				});
				rotation += 38;
				delay += 0.1;
			});
		}
	}, [lineRefs.current]);

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
			transform: "translateY(100%)",
			opacity: 0,
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
		flexDirection: "column",
		justifyContent: "center",
	};

	const line = {
		fill: theme.colors.orange,
		color: theme.colors.orange,
		fill: "none",
		stroke: theme.colors.dark,
		strokeMiterlimit: 10,
		strokeWidth: mobile ? "0.9vw" : "3px",
	};

	const star = {
		height: "50vw",
		width: "50vw",
		zIndex: 99,
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
	};

	const lineTimeline = useRef(gsap.timeline({ repeat: -1, yoyo: true }));

	const marqueeOffset = {
		transform: `translateY(100%)`,
		opacity: 0,
	};

	const bg = {
		position: "absolute",
		top: 0,
		left: 0,
		width: "200px",

		background: theme.colors.gradient,
		zIndex: 9,
		filter: `blur(30px)`,
		height: "300%",
		mixBlendMode: "normal",
	};

	return (
		<>
			<Layout bg={"green"} color='light' height='100vh'>
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
					</svg>{" "}
					{/* <Box
						as='h2'
						className='hero-heading'
						sx={heading}
						ref={addToHeadingRef}
					>
						— I Leverage the power of software & design to push people and
						brands forward.
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
					</Box> */}
				</Box>
			</Layout>

			<Layout bg='light' height='auto'>
				<Box
					sx={{
						height: "100%",
						width: "100%",
						padding: mobile ? "3rem 0" : "5rem 0",
					}}
				>
					<ParagraphLayout indent indentHeading='about' variant={1}>
						Hey. I'm a full-stack software developer & graphic designer obsessed
						with digital products and passionate about building responsive user
						interfaces. Previously at Lighthouse Labs, I'm currently exploring
						the space where development and animation intersects.
					</ParagraphLayout>
					<Line color='dark' />
				</Box>
			</Layout>
			<Layout bg='light' height='auto'>
				<Box
					sx={{
						width: "100%",
						height: "100%",

						padding: mobile ? "3rem 0" : "5rem 0",
					}}
				>
					<div className='half-section-wrapper'>
						<ParagraphLayout indent indentHeading='Philosophy' variant={2}>
							<Line color='dark' />
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
					{/* <FeaturedCard featuredProject={featuredProject} /> */}
				</Box>
			</Layout>
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

		fontSize: "0.8rem",
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
			<Line />
			<Box
				className='marquee-rail-overflow-wrapper'
				sx={{ overflow: "hidden" }}
			>
				<Box className='marquee-rail-yOffset-wrapper'>
					<Marquee sx={marqueeStyle} gradient={false}>
						<MarqueeItem multiplier={10}>Featured Work</MarqueeItem>
					</Marquee>
				</Box>
				<Line />
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

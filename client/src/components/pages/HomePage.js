import { Typography } from "@mui/material";
import { Box } from "@mui/system";
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

function HomePage(props, ref) {
	//Declare refs needed for animation

	const data = useContext(DataContext);
	const heading = useRef(null);
	const theme = useTheme();
	const [layoutColor, setLayoutColor] = useState("dark");
	const { splitText } = useSplit([heading.current], {
		type: "lines, chars",
		linesClass: "line",
		charsClass: "char",
	});

	const imgStyle = {
		position: "absolute",
		top: 0,
		left: 0,
	};

	const introTimeline = useRef(gsap.timeline());

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

	const [gridData, setGridData] = useState(null);

	useEffect(() => {



		if (data && data.software) {
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
	}, [data, splitText]);

	useEffect(() => {
		if (splitText && splitText.chars) {
			introTimeline.current.to(splitText.chars, {
				y: 0,
				duration: 1,
				stagger: 0.05,
				ease: 'expo.inOut'
			})
			.to(splitText.chars, {
				y: "-100%",
				duration: 1,
				stagger: 0.05,
				ease: 'expo.inOut',
				onComplete: () => {
					props.showHeader()
				}
			})
		}
	}, [splitText])

	const stickyRef = useRef(null);

	const headingStyles = {
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

	return (
		<>
			<Layout bg={"dark"} fullbleed={true} hero={true}>
				<Box
					className='hero__inner'
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						height: "100%",
					}}
				>
					<Typography component='h1' sx={headingStyles} ref={heading}>
						Matth3w
					</Typography>
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

import { Box } from "@mui/system";
import gsap from "gsap";
import React, { forwardRef, useContext, useRef, useState, useEffect } from "react";
import { useTheme } from "styled-components";
import useHeaderSpacing from "../../../helpers/hooks/useHeaderSpacing";
import useSplit from "../../../helpers/hooks/useSplit";
import { DataContext } from "../../App/App";
import Layout from "../../Containers/Layout";
import Line from "../../Divider/Line";
import ResponsiveGrid from "../../Grid/ResponsiveGrid";
import ParagraphLayout from "../../Paragraph/ParagraphLayout";
import Hero from "./Hero";

function HomePage(props, ref) {
	//Declare refs needed for animation

	const data = useContext(DataContext);

	
	const [layoutColor, setLayoutColor] = useState("dark");


	// useEffect(() => {
	// 	if (data && data.software) {
	// 		setGridData(() => ({ data: array }));
	// 	}
	// }, [data]);

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

	// const [gridData, setGridData] = useState(null);

	return (
		<>
			<Hero data={data} showHeader={props.showHeader}/>
			<Layout bg='light' height='auto'>
				<ParagraphLayout
					indent
					indentHeading='about'
					variant={1}
					justify='start'
				>
					I am a full-stack software developer & graphic designer obsessed with
					<span className='accent'>digital products</span> and passionate about
					building great user interfaces. Previously at Lighthouse Labs, I
					graduated with a manifesto in
					<span className='accent'>software</span> craftsmanship and leanred how
					to self-manage. Good research leads to effective design and better
					tech stacks. I draw from daring, innovative references to create
					smooth, seamless user experiences. My work never brags, but it sure
					does speak for itself.
				</ParagraphLayout>
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
			
			</Layout>
			<Layout bg='dark'></Layout>
		</>
	);
}

export default forwardRef(HomePage);

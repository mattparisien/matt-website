import React, { forwardRef, useContext, useState } from "react";
import { useTheme } from "styled-components";
import { DataContext } from "../../App/App";
import Layout from "../../Containers/Layout";
import ParagraphLayout from "../../Paragraph/ParagraphLayout";
import Hero from "./Hero";
import Work from "./Work";
import { useMediaQuery } from "@material-ui/core";

function HomePage(props, ref) {
	//Declare refs needed for animation
	const matches = useMediaQuery("(max-width: 800px)");

	const data = useContext(DataContext);
	const theme = useTheme();

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
			<Hero
				data={data}
				showHeader={props.showHeader}
				theme={theme}
				matches={matches}
			/>
			<Layout bg='light' height='auto' fullBleed={true}>
				<Work
					projectAmount={data && data.software && data.software.length}
					projects={data && data.software}
					theme={theme}
					matches={matches}
				/>
			</Layout>
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
		</>
	);
}

export default forwardRef(HomePage);

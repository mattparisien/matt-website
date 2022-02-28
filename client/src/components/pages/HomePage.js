import React, { forwardRef, useContext, useRef } from "react";
import { ColorContext } from "../../App/App";
import Layout from "../Containers/Layout";
import Heading from "../Heading/Heading";
import ParagraphLayout from "../Paragraph/ParagraphLayout";
import { Box } from "@mui/system";
import Line from "../Divider/Line";
import Button from "../Button/Button";
import { Pills } from "../Pills/Pills";
import styled from "styled-components";

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
			text: "ReactJS",
			highlighted: false,
		},
		{
			text: "ReactJS",
			highlighted: true,
		},
		{
			text: "ReactJS",
			highlighted: false,
		},
		{
			text: "ReactJS",
			highlighted: false,
		},
		{
			text: "ReactJS",
			highlighted: false,
		},
		{
			text: "ReactJS",
			highlighted: false,
		},

	];

	const stickyRef = useRef(null);

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
					}}
				>
					<Heading>Developer.</Heading>
				</Box>
			</Layout>

			<Layout bg='light' height='40vw'>
				<ParagraphLayout indent indentHeading='about' variant={1}>
					Full-stack software developer & graphic designer obsessed with digital
					products and passionate about building fantastic user interfaces.
				</ParagraphLayout>
			</Layout>
			<Layout bg='light' height='40vw'>
				<Line />
				<div className='half-section-wrapper'>
					<ParagraphLayout indent indentHeading='about' variant={2}>
						Full-stack software developer & graphic designer obsessed with
						digital products and passionate about building fantastic user
						interfaces.
					</ParagraphLayout>
				</div>
			</Layout>
			<Layout bg='light' height='auto' fullbleed>
				<Line />
				<Heading>Stack</Heading>
			</Layout>
			<Layout bg='light' height='50vw'>
				<Pills info={pillInfo} />
			</Layout>
			<Layout bg='dark'>
				
			</Layout>
		</>
	);
}

export default forwardRef(HomePage);

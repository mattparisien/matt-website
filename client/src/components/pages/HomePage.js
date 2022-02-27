import { Box } from "@mui/material";
import React, { forwardRef, useContext, useRef } from "react";
import { ColorContext } from "../../App/App";
import ColorTrigger from "../ColorTrigger/ColorTrigger";
import Line from "../Line/Line";
import Paragraph from "../Paragraph/Paragraph";
import { StyledHome } from "./styles/StyledHome";
import { Link } from "react-router-dom";
import Layout from "../Containers/Layout";
import ParagraphLayout from "../Paragraph/ParagraphLayout";
import Heading from "../Heading/Heading";

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

	return (
		<Layout bg='dark' height='40vw' fullBleed>
			{/* <ParagraphLayout indent>
				Hey, I'm Matt * I'm a full-stack software developer & graphic designer
				obsessed with digital products and passionate about building fantastic
				user interfaces.
			</ParagraphLayout> */}
			<Heading>Developer.</Heading>
			<Box
				sx={{
					minHeight: "100vh",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Line />
			</Box>
		</Layout>
	);
}

export default forwardRef(HomePage);

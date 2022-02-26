import { Box } from "@mui/material";
import React, { forwardRef, useContext, useRef } from "react";
import { ColorContext } from "../../App/App";
import ColorTrigger from "../ColorTrigger/ColorTrigger";
import Line from "../Line/Line";
import Paragraph from "../Paragraph/Paragraph";
import { StyledHome } from "./styles/StyledHome";
import { Link } from "react-router-dom";
import Layout from "../Containers/Layout";

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
		<Layout>
			<Box
				sx={{
					minHeight: "100vh",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Paragraph>
					Hey, I'm Matt * I'm a full-stack software developer & graphic designer
					obsessed with digital products and passionate about building fantastic
					user interfaces.
				</Paragraph>
			</Box>
			<Box
				sx={{
					minHeight: "100vh",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Line />
				<ColorTrigger threshold={0.5} background='light' foreground='dark'>
					<Paragraph margin={"10vw 0"}>
						Skilled in ReactJS & HTLM5, modern Javascript (ES6), Strapi CMS,
						CSS/SASS, Styled Components, GSAP, REST APIs, UI testing,
						Nodejs/Express and SQL.
					</Paragraph>

					<Paragraph>
						Interested <span className='accent'>?</span>{" "}
						<a href='#'>View work</a>
					</Paragraph>
				</ColorTrigger>
			</Box>
		</Layout>
	);
}

export default forwardRef(HomePage);

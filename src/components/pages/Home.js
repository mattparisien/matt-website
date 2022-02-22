import React, { useRef, forwardRef, useState } from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Sticky from "../Sticky";
import Section from "../Section";
import FeaturedWork from "./components/FeaturedWork";
import Paragraph from "../Paragraph/Paragraph";
import { StyledHome } from "./styles/StyledHome";
import { Box } from "@mui/material";

function Home(props, ref) {
	//Declare refs needed for animation
	const stickySection = useRef(null);

	const { revealContent, colors } = props;

	return (
		<StyledHome colors={colors} >
			<Box className="container" sx={{maxWidth: 2000, margin: "0 auto"}}>
				<Paragraph indent>
					Hey, my name is Matt. I'm a full-stack web developer, beauty
					photographer and graphic designer obsessed with digital products and
					passionate about building great user interfaces. Skilled in ReactJS &
					HTLM5, modern Javascript (ES6), Strapi CMS, CSS/SASS, Styled
					Components, GSAP, REST APIs, UI testing, Nodejs/Express and SQL. 
				</Paragraph>
			</Box>
		</StyledHome>
	);
}

export default forwardRef(Home);

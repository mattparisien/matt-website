import React, { useRef, forwardRef, useState } from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Sticky from "../Sticky";
import Section from "../Section";
import FeaturedWork from "./components/FeaturedWork";
import Paragraph from "../Paragraph/Paragraph";
import { StyledHome } from "./styles/StyledHome";
import { Box } from "@mui/material";
import SplitText from "gsap/SplitText";
import gsap from "gsap";
import { Button } from "@mui/material";

function Home(props, ref) {
	//Declare refs needed for animation
	const stickySection = useRef(null);

	const { revealContent, colors } = props;

	const containerStyles = { maxWidth: 2000, margin: "10vw auto" };

	return (
		<StyledHome colors={colors}>
			<Box className='container' sx={containerStyles}>
				<Paragraph>
					Hey, my name is Matt. I'm a full-stack web developer & graphic
					designer obsessed with digital products and passionate about building
					great user interfaces.
				</Paragraph>
				<Paragraph>
					Skilled in ReactJS & HTLM5, modern Javascript (ES6), Strapi CMS,
					CSS/SASS, Styled Components, GSAP, REST APIs, UI testing,
					Nodejs/Express and SQL.
				</Paragraph>
			</Box>
			<Box sx={containerStyles}>
				<Paragraph>
					<span className="accent">Interested?</span> <a href="mailto:hello@matthewparisien.com">Talk to me</a>
				</Paragraph>
			</Box>
		</StyledHome>
	);
}

export default forwardRef(Home);

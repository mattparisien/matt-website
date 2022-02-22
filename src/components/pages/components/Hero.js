import React, { useRef, useEffect, useState } from "react";
import Section from "../../Section";
import HeroClipPath from "./HeroClipPath";
import heroAnim from "../motion/hero";
import gsap from "gsap";
import Paragraph from "../../Paragraph/Paragraph";

function Hero(props) {
	return (
		<Section classes={"section-hero"}>
			<Paragraph indent>
				Hey, I'm Matt. I'm a full-stack web developer, beauty
				photographer and graphic designer obsessed with digital products and
				passionate about building great user experiences. Skilled in ReactJS &
				HMTL5, modern Javascript (ES6), Strapi CMS, CSS/SASS, Styled Components,
				GSAP, REST APIs, and more.
			</Paragraph>
		</Section>
	);
}

export default Hero;

import React from "react";
import Paragraph from "../../Paragraph/Paragraph";
import Section from "../../Section";

function Hero(props) {
	return (
		<Section classes={"section-hero"}>
			<Paragraph indent>
				Hey, I'm Matt. I'm a full-stack web developer, beauty photographer and
				graphic designer obsessed with digital products and passionate about
				building great user experiences. Skilled in ReactJS & HMTL5, modern
				Javascript (ES6), Strapi CMS, CSS/SASS, Styled Components, GSAP, REST
				APIs, and more.
			</Paragraph>
		</Section>
	);
}

export default Hero;

import React, { useRef, useEffect, useState } from "react";
import Section from "../../Section";
import HeroClipPath from "./HeroClipPath";
import heroAnim from "../motion/hero";
import gsap from "gsap";

function Hero(props) {


	return (
		<Section classes={"section-hero"}>
			<div className='title -isFull'>
				<h1
					className='title_heading -isRelative -headingLarge -hasPaddingSmall'
					data-scroll
					data-scroll-speed='6'
				>
				Matt
				</h1>
			</div>
		</Section>
	);
}

export default Hero;

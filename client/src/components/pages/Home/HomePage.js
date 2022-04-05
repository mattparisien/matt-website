import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CSSRulePlugin from "gsap/src/CSSRulePlugin";
import MorphSVGPlugin from "gsap/src/MorphSVGPlugin";
import React, { forwardRef, useContext, useRef, useState } from "react";
import Slider from "../../Slider/Slider";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { DataContext } from "../../../App/App";
import Container from "../../Containers/Container";
import Section from "../../Containers/Section";
import { Icon } from "../../Vector/Icons";
import FeaturedProjects from "./Components/FeaturedProjects";
import Gallery from "./Components/Gallery";
import Hero from "./Components/Hero";
import PreFooter from "./Components/PreFooter";
import IntroCard from "../../Transition/IntroCard";
import Button from "../../Button/Button";

function HomePage(props, ref) {
	gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin, CSSRulePlugin);
	const data = useContext(DataContext);

	// const { windowWidth } = useResize();
	const marquees = useRef([]);
	marquees.current = [];
	const lines = useRef([]);
	lines.current = [];
	const headingRef = useRef([]);
	headingRef.current = [];

	// const sticky = useRef(null);
	// const grow = useRef(null);
	// const path = useRef(null);
	// const inner = useRef(null);

	const fantasticRefs = useRef([]);
	fantasticRefs.current = [];

	const filterFeaturedProjects = array => {
		return array.filter(x => x.Featured);
	};

	return (
		<>
			<div className='o-page o-page_home -no-offset'>
				{/* <div className='o-sticky' ref={sticky}> */}

				<Hero
					featuredItems={
						data && data.projects && data.projects.reverse().slice(0, 2)
					}
				/>
				{/* </div> */}
				<Section
					classes='o-intro -padding-lg'
					data-theme='light'

					// data-theme-trigger='light'
					// data-theme-triggerRatio='0.8'
				>
					<Container classes='-flex -flex-column -align-end'>
						<div className='o-text  -padding-top-lg'>
							I am a Montreal-based{" "}
							<Icon
								variant='star'
								color='light'
								inline
								height={"2.3vw"}
								strokeWidth={"2px"}
								margin={"0"}
							/>{" "}
							developer & photographer in love with digital products and
							passionate about crafting great user experiences through
							storytelling. <Icon variant='eyes' /> My background is in
							commercial photography and graphic design, which I both still
							freelance with. My work is always driven by a passion for what I
							do,
							<Icon variant='arrow' /> and a love for people.
						</div>
						<Button>move me!</Button>
					</Container>
				</Section>
				<FeaturedProjects items={data && data.projects} />

				{/* <Work projects={data.projects} /> */}

				{/* <Section classes='o-photo -padding-huge'>
					<h2 className='o-h2 -split -padding-lg -fadeUpChars'>Photography</h2>
			
					<Slider items={data.photos} />
				</Section> */}
				{/* <Values /> */}
				{/* <Gallery images={data.photos && data.photos}/> */}
			</div>
		</>
	);
}

export default forwardRef(HomePage);

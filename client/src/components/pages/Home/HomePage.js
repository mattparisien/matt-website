import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MorphSVGPlugin from "gsap/src/MorphSVGPlugin";
import $ from "jquery";
import React, { forwardRef, useContext, useEffect, useRef } from "react";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { DataContext } from "../../../App/App";
import useResize from "../../../helpers/hooks/useResize";
import Container from "../../Containers/Container";
import Section from "../../Containers/Section";
import StickySection from "../../Layouts/StickySection";
import Work from "../Work";
import Slider from "../../Slider/Slider";
import Link from "../../Link/Link";
import { Icon } from "../../Vector/Icons";
import CSSRulePlugin from "gsap/src/CSSRulePlugin";
import Hero from "./Components/Hero";

function HomePage(props, ref) {
	gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin, CSSRulePlugin);
	const data = useContext(DataContext);

	const { windowWidth } = useResize();
	const marquees = useRef([]);
	marquees.current = [];
	const lines = useRef([]);
	lines.current = [];
	const headingRef = useRef([]);
	headingRef.current = [];

	const sticky = useRef(null);
	const grow = useRef(null);
	const path = useRef(null);
	const inner = useRef(null);

	const fantasticRefs = useRef([]);
	fantasticRefs.current = [];

	const addToRefs = el => {
		if (el && !fantasticRefs.current.includes(el)) {
			fantasticRefs.current.push(el);
		}
	};

	console.log(data.projects);

	return (
		<>
			<div
				className='o-page o-page_home -no-offset'
				data-theme={props.currentTheme}
			>
				{/* <div className='o-sticky' ref={sticky}> */}

				<Hero
					featuredItems={
						data &&
						data.projects &&
						data.projects.slice(0, 2)
					}
				/>
				{/* </div> */}
				<Section
					classes='o-intro'
					data-theme-trigger='light'
					data-theme-triggerRatio='0.8'
				>
					<Container>
						<div className='o-text  -padding-top-lg -split'>
							I am a Montreal-based full-stack developer in love with digital
							products{" "}
							<Icon
								variant='star'
								color='light'
								inline
								height={"2.3vw"}
								strokeWidth={"2px"}
								margin={"0"}
							/>
							and passionate about crafting great user experiences{" "}
							<Icon variant='eyes' /> through storytelling. My work is always
							driven by a passion for what I do,
							<Icon variant='arrow' /> and a love for people.
						</div>

						<div className='o-text -padding-lg -split' ref={grow}>
							I believe a team who loves creating, learning and growing together
							have the ability to transcend the workplace. Good communication
							creates good stories that engage, progress, and create memorable
							experiences.
						</div>
					</Container>
				</Section>

				<Work projects={data.projects} />

				<Section classes='o-photo -padding-huge'>
					<h2 className='o-h2 -split -padding-lg -fadeUpChars'>Photography</h2>
					{/* <Container>
						<Grid items={data.photos} />
					</Container> */}
					<Slider items={data.photos} />
				</Section>
				{/* <Values /> */}
			</div>
		</>
	);
}

export default forwardRef(HomePage);

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MorphSVGPlugin from "gsap/src/MorphSVGPlugin";
import $ from "jquery";
import React, { forwardRef, useContext, useEffect, useRef } from "react";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { DataContext } from "../../App/App";
import useResize from "../../helpers/hooks/useResize";
import Container from "../Containers/Container";
import Section from "../Containers/Section";
import StickySection from "../Layouts/StickySection";
import Work from "./Work";

function HomePage(props, ref) {
	gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);
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
	const heroTitleTl = useRef(null);
	const fantasticRefs = useRef([]);
	fantasticRefs.current = [];

	useEffect(() => {
		ScrollTrigger.refresh();
	}, [windowWidth]);

	useEffect(() => {
		setTimeout(() => {
			ScrollTrigger.refresh();
		}, 500);

		if (sticky.current) {
			heroTitleTl.current = gsap.timeline({
				scrollTrigger: {
					trigger: sticky.current,
					start: "top top",
					pinSpacing: false,
					scrub: 1,
					pin: true,
					invalidateOnResize: true,
				},
			});
		}

		//If all refs are rendered, call heroAnim

		// const timelines = [heroTitle.current, scrollTl.current];

		heroTitleTl.current
			.set(path.current, { scale: 0.0001 })
			.to($(".o-hero_title span:first-of-type"), {
				scale: 1.25,
				opacity: 0,
			})
			.to($(".o-hero_title span:nth-of-type(2)"), {
				scale: 1.25,
				opacity: 1,
			})
			.to($(".o-hero_title span:nth-of-type(2)"), {
				scale: 1.25,
				opacity: 0,
			})
			.to($(".o-hero_title span:nth-of-type(3)"), {
				scale: 1.25,
				opacity: 1,
			})
			.to($(".o-hero_title span:nth-of-type(3)"), {
				scale: 1.25,
				opacity: 0,
			})
			.to($(".o-hero_title span:nth-of-type(4)"), {
				scale: 1.25,
				opacity: 1,
			})
			.to(
				path.current,

				{
					scale: 5,
					duration: 10,
				}
			)
			.to(path.current, {
				morphSVG:
					"M49,2.6C49,27.4,24.5,54.8,3.4,54.8C-17.7,54.8,-35.3,27.4,-35.3,2.6C-35.3,-22.1,-17.7,-44.2,3.4,-44.2C24.5,-44.2,49,-22.1,49,2.6Z",
			})
			.to(path.current, {
				morphSVG:
					"M34,-64.5C41.4,-54.6,42.8,-40.1,48.4,-28.6C53.9,-17,63.6,-8.5,63.8,0.1C63.9,8.7,54.5,17.4,49.3,29.4C44,41.5,42.9,57,35.4,68.1C27.9,79.1,14,85.7,3.4,79.8C-7.1,73.9,-14.2,55.4,-23.9,45.6C-33.6,35.8,-45.8,34.7,-57.3,28.5C-68.7,22.4,-79.4,11.2,-81.6,-1.3C-83.8,-13.7,-77.6,-27.4,-66.5,-34.3C-55.5,-41.2,-39.7,-41.3,-27.8,-48.5C-15.9,-55.8,-7.9,-70.3,2.7,-74.9C13.3,-79.6,26.6,-74.4,34,-64.5Z",
			});

		// heroAnim(words.current, blob.current, timelines);
		// scrollTl.current
		// 	.set(path.current, { scale: 0.0001 })

		// 	.to(
		// 		path.current,

		// 		{
		// 			scale: 5,
		// 		}
		// 	)
		// 	.to(
		// 		path.current,
		// 		{
		// 			duration: 0.5,
		// 			morphSVG:
		// 				"M49,2.6C49,27.4,24.5,54.8,3.4,54.8C-17.7,54.8,-35.3,27.4,-35.3,2.6C-35.3,-22.1,-17.7,-44.2,3.4,-44.2C24.5,-44.2,49,-22.1,49,2.6Z",
		// 		},

		// 		10
		// 	)
		// 	.to(path.current, {
		// 		morphSVG:
		// 			"M34,-64.5C41.4,-54.6,42.8,-40.1,48.4,-28.6C53.9,-17,63.6,-8.5,63.8,0.1C63.9,8.7,54.5,17.4,49.3,29.4C44,41.5,42.9,57,35.4,68.1C27.9,79.1,14,85.7,3.4,79.8C-7.1,73.9,-14.2,55.4,-23.9,45.6C-33.6,35.8,-45.8,34.7,-57.3,28.5C-68.7,22.4,-79.4,11.2,-81.6,-1.3C-83.8,-13.7,-77.6,-27.4,-66.5,-34.3C-55.5,-41.2,-39.7,-41.3,-27.8,-48.5C-15.9,-55.8,-7.9,-70.3,2.7,-74.9C13.3,-79.6,26.6,-74.4,34,-64.5Z",
		// 	});
	}, [heroTitleTl]);

	const addToRefs = el => {
		if (el && !fantasticRefs.current.includes(el)) {
			fantasticRefs.current.push(el);
		}
	};

	return (
		<>
			<div className='o-page o-page_home -no-offset'>
				<div className='o-sticky' ref={sticky}>
					<div className='o-sticky_inner' ref={inner}>
						<Section
							classes='o-hero -fullHeight -flex -align-center -justify-center'
							data-theme='party'
						>
							<Container>
								<h1 className='o-h1 o-hero_title -split -huge'>
									<span>ask</span>
									<span>for</span>
									<span>good</span>
									<span>stories</span>
								</h1>
								<div className='o-hero_cta'>
									<div className='line'></div>{" "}
									<div className='o-text'>Scroll</div>
								</div>
							</Container>
						</Section>
					</div>
				</div>
				<Section classes='o-intro  -offset-prev' data-theme='dark'>
					<Container>
						<div className='o-text -big -padding-top-lg'>
							I am a Montreal-based full-stack developer in love with digital
							products and passionate about crafting great user experiences
							through storytelling. My work is always driven by a passion for
							what I do, and a love for people.
						</div>
						<div className='o-text -big -padding-lg' ref={grow}>
							I believe a team who loves creating, learning and growing together
							have the ability to transcend the workplace. Good communication
							creates good stories that engage, progress, and create memorable
							experiences.
						</div>
					</Container>
				</Section>

				<StickySection
					els={fantasticRefs.current}
					dataTheme='superstar'
					start={"bottom bottom"}
					classes='-flex -align-center -justify-center -stretchY'
					animation={{ x: 0, duration: 2 }}
				>
					<div
						className='o-text -huge -padding-lg -flex -flex-column -align-center -justify-start -stretchY'
						ref={grow}
					>
						<div ref={addToRefs} style={{ transform: "translateX(-100vw)" }}>
							Make
						</div>
						<div ref={addToRefs} style={{ transform: "translateX(100vw)" }}>
							Fantastic
						</div>
						<div ref={addToRefs} style={{ transform: "translateX(-100vw)" }}>
							Things
						</div>
					</div>
				</StickySection>

				<Work projects={data.projects} />
				{/* <Values /> */}
			</div>
		</>
	);
}

export default forwardRef(HomePage);

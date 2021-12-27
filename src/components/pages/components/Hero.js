import React, { useRef, useEffect, useState } from "react";
import Section from "../../Section";
import HeroClipPath from "./HeroClipPath";
import heroAnim from "../motion/hero";
import gsap from "gsap";

function Hero(props) {
	const { stickySection } = props;
	const [trigger, setTrigger] = useState(null);

	const heroTitle = useRef(null);
	const words = useRef([]);
	words.current = [];
	const blob = useRef(null);

	const addToRefs = el => {
		if (words.current && !words.current.includes(el)) {
			words.current.push(el);
		}
	};

	//Declare hero animation timelines
	const heroTitleTl = useRef(null);
	const scrollTl = useRef(null);

	useEffect(() => {
		//If there's a scroll trigger ref, set timelines with trigger
		if (trigger) {
			heroTitleTl.current = gsap.timeline({
				scrollTrigger: {
					trigger: trigger,
					start: "top top",
					end: "+=1000",
					scrub: !0,
					pin: true,
					pinSpacing: true,
				},
			});
		}

		//If all refs are rendered, call heroAnim
		if (words.current && blob.current && heroTitleTl.current) {
			const timelines = [heroTitleTl.current];
			console.log(timelines);
			heroAnim(words.current, blob.current, timelines);
		}
	}, [heroTitleTl, scrollTl, blob, words, trigger]);

	//Set trigger
	useEffect(() => {
		if (stickySection.current && !trigger) {
			setTrigger(stickySection.current);
		}
	}, [stickySection]);

	return (
		<Section classes={"section-hero"}>
			<div className='title -isFull -flexCenterAll -flexColumn'>
				<h1
					className='title_heading -isRelative -headingLarge'
					data-scroll
					data-scroll-speed='6'
				>
					<span
						className='
            title-heading__part
            title_heading__one
            -isAbsolute -isAbsolute__centered
          '
						ref={addToRefs}
					>
						TELL
					</span>
					<span
						className='
            title-heading__part title-heading__two
            -isAbsolute -isAbsolute__centered
          '
						ref={addToRefs}
					>
						GOOD
					</span>
					<span
						className='
            title-heading__part title-heading__three
            -isAbsolute -isAbsolute__centered
          '
						ref={addToRefs}
					>
						STORIES
					</span>
				</h1>
			</div>
			<span className='scrollCta -isTiny'>Scroll</span>
			<HeroClipPath ref={blob} />
		</Section>
	);
}

export default Hero;

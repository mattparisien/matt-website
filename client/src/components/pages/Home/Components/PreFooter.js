import gsap from "gsap";
import $ from "jquery";
import React, { useEffect, useRef } from "react";
import Container from "../../../Containers/Container";
import Section from "../../../Containers/Section";

function PreFooter() {
	const tl = useRef(gsap.timeline());
	const line1 = useRef(null);
	const line2 = useRef(null);
	const line3 = useRef(null);
	const line1Words = $(line1.current).find(".c-word");
	const line2Words = $(line2.current).find(".c-word");

	const duration = 2;

	useEffect(() => {
		setTimeout(() => {
			gsap.timeline()
		
				.to(line1Words[1], {
					x: "6vw",
					duration: 3,
					ease: "expo.inOut",
				})
				.to(line1Words[1], {
					x: "-5vw",
					duration: 2,
					ease: "expo.inOut",
				})
				.to(line1Words[2], {
					x: "-10vw",
					duration: 3,
					ease: "expo.inOut",
				}, 3)
				.to(line1Words[2], {
					x: "0",
					duration: 3,
					ease: "expo.inOut",
				}, 6)
				.to(line1Words[1], {
					x: "8vw",
					duration: 3,
					ease: "expo.inOut",
				}, 6.9);
		}, 200);
	}, [line2Words, line1Words.current]);

	return (
		<Section classes='o-preFooter -padding-top-huge'>
			<Container classes=' -flex -align-end '>
				<p className='o-text'>
					<div className='o-line o-line_1 -split -padding-top-huge' ref={line1}>
						— YOUR WEBSITE
					</div>
					<div className='o-line o-line_2 -split' ref={line2}>
						IS ... BORING?
					</div>
					<div className='o-line o-line_3 -split' ref={line3}>
						NO WORRIES. <br></br>LET'S TALK.
					</div>
				</p>
			</Container>
		</Section>
	);
}

export default PreFooter;

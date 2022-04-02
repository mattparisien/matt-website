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
	const line2Words = $(line2.current).find(".c-word");
  

	const duration = 2;

	useEffect(() => {
		tl.current
			.to(
				line2Words[1],
				{
					x: "-8vw",
					duration: duration,
					ease: "power3.out",
				},
				0
			)
			.to(
				line2Words[2],
				{
					x: "-16vw",
					duration: duration,
					ease: "power3.out",
				},
				0.5
			)
			.to(
				line2Words[2],
				{
					x: 0,
					duration: duration,
					ease: "power3.out",
				},
				1
			)
			.to(
				line2Words[1],
				{
					x: "7vw",
					duration: duration,
					ease: "power3.out",
				},
				1.5
			)
			.to(
				line2Words[0],
				{
					x: "15vw",
					duration: duration,
					ease: "power3.out",
				},
				2
			)
			.timeScale(2);
	}, [ line2Words]);

	return (
		<Section classes='o-preFooter'>
			<Container classes=' -flex -align-end'>
				<p className='o-text'>
					<div className='o-line o-line_1 -split' ref={line1}>
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

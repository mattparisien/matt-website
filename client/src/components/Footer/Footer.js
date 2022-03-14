import gsap from "gsap";
import SplitText from "gsap/SplitText";
import React, { useEffect, useRef, useState, useMemo } from "react";
import Container from "../Containers/Container";

function Footer(props) {
	const linkRefs = useRef([]);
	const hoverArea = useRef(null);
	linkRefs.current = [];

	const words = useMemo(
		() => [
			"do lunch",
			"collaborate",
			"talk development",
			"meet on zoom",
			"work together",
			"write code",
		],
		[]
	);

	// const [location] = useMouseMove();

	const [word, setWord] = useState(words[0]);
	const [isSplit, setIsSplit] = useState(false);
	// const [hovering, setHovering] = useState(false);
	const split = useRef(null);
	const button = useRef(null);
	const container = useRef(null);

	useEffect(() => {
		if (split.current) {
			const splitText = new SplitText(split.current, {
				type: "chars",
				charsClass: "c-char",
			});

			setIsSplit(true);

			if (splitText.chars) {
				const tl = gsap.timeline();
				tl.set(split.current, {
					opacity: 1,
				})
					.to(splitText.chars, {
						y: 0,
						duration: 1,
						ease: "expo.inOut",
						delay: 0.2,
						stagger: 0.03,
					})
					.to(splitText.chars, {
						y: "-100%",
						duration: 1,
						ease: "expo.inOut",
						delay: 0.2,
						stagger: 0.03,
					});
			}
		}
	}, [split, isSplit, word]);

	useEffect(() => {
		setInterval(() => {
			setWord(
				prev =>
					words[
						words.indexOf(prev) === words.length - 1
							? 1
							: words.indexOf(prev) + 1
					]
			);
		}, 3000);
	}, [words]);
	

	const callParallax = (event) => {
		
	}

	const handleMouseEnter = (e) => {
		
	}

	const handleMouseMove = (e) => {
		
	}

	const handleMouseLeave = () => {

	}

	return (
		<footer className='o-footer'>
			<Container classes='-stretchX'>
				<div
					className='o-footer_contact'
					ref={container}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					onMouseMove={handleMouseMove}
				>
					<h2 className='o-footer_heading o-h2'>
						Let's{" "}
						<div ref={split} className='o-footer_text-switch'>
							{word}
						</div>
					</h2>

					<a
						ref={button}
						className='o-footer_btn'
						href="mailto:hello@matthewparisien.com?subject=Let's talk"
					>
						Email me
					</a>
				</div>
			</Container>

			<div className='o-footer_bottom'>
				<Container classes='-flex -align-center -justify-between -stretchX'>
					<h3 className='o-footer_email o-h3'>
						<a
							href="mailto:hello@matthewparisien.com?Subject=Let's talk"
							target={"_blank"}
							rel='noreferrer'
						>
							hello@matthewparisien.com
						</a>
					</h3>

					<div className='o-footer_credits -text-tiny'>
						WORDS + IMAGES + CODE ©2022 MATT PARISIEN
					</div>
				</Container>
			</div>
		</footer>
	);
}

export default Footer;

import gsap from "gsap";
import SplitText from "gsap/SplitText";
import React, { useEffect, useRef, useState } from "react";
import Container from "../Containers/Container";
import useMouseMove from "../../helpers/hooks/useMouseMove";
import $ from "jquery";

function Footer(props) {
	const linkRefs = useRef([]);
	const hoverArea = useRef(null);
	linkRefs.current = [];

	const words = [
		"do lunch",
		"collaborate",
		"talk development",
		"meet on zoom",
		"work together",
	];

	const [location] = useMouseMove();

	const [word, setWord] = useState(words[0]);
	const [isSplit, setIsSplit] = useState(false);
	const [hovering, setHovering] = useState(false);
	const split = useRef(null);
	const button = useRef(null);

	useEffect(() => {
		if (hovering && button.current && hoverArea.current) {
			setTimeout(() => {
				gsap.to(button.current, {
					left: location.pageX,
					top: location.pageY,
					x: "-50%",
					y: "-50%",
					position: "fixed",
				});
			}, 100);
		}
	}, [hovering, location, button, hoverArea]);

	useEffect(() => {
		if (split.current && !isSplit) {
			const splitText = new SplitText(split.current, {
				type: "chars",
				charsClass: "c-char",
			});

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
	}, [split.current, isSplit, word]);

	useEffect(() => {
		setInterval(() => {
			setWord(
				prev =>
					words[
						words.indexOf(prev) === words.length ? 1 : words.indexOf(prev) + 1
					]
			);
		}, 3000);
	}, []);

	return (
		<footer className='o-footer'>
			<Container classes='-stretchX'>
				<div className='o-footer_contact'>
					<h2 className='o-footer_heading o-h2'>
						Let's{" "}
						<div ref={split} className='o-footer_text-switch'>
							{word}
						</div>
					</h2>
					<div
						className='o-footer_spacer'
						ref={hoverArea}
						onMouseEnter={() => setHovering(true)}
						onMouseLeave={() => setHovering(false)}
					>
						<a
							ref={button}
							className='o-footer_btn'
							href="mailto:hello@matthewparisien.com?subject=Let's talk"
						>
							Get in touch
						</a>
					</div>
				</div>
			</Container>

			<div className='o-footer_bottom'>
				<Container classes='-flex -align-center -justify-between -stretchX'>
					<h3 className='o-footer_email o-h3'>hello@matthewparisien.com</h3>

					<div className='o-footer_credits -text-tiny'>
						WORDS + IMAGES + CODE ©2022 MATT PARISIEN
					</div>
				</Container>
			</div>
		</footer>
	);
}

export default Footer;

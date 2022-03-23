import gsap from "gsap";
import SplitText from "gsap/SplitText";
import $ from "jquery";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import Container from "../Containers/Container";
import Section from "../Containers/Section";
import Link from "../Link/Link";

function Footer(props) {
	const linkRefs = useRef([]);

	linkRefs.current = [];

	const [ref, inView] = useInView({ threshold: 0.4 });

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

	const split = useRef(null);

	useEffect(() => {
		if (inView) {
			gsap.to($("footer").find(".c-char"), {
				y: 0,
				duration: 1,
				ease: "expo.inOut",

				stagger: 0.02,
				opacity: 1,
			});
		}
	}, [inView, ref]);

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
						delay: 0.1,
						stagger: 0.03,
					})
					.to(splitText.chars, {
						y: "-100%",
						duration: 1,
						ease: "expo.inOut",
						delay: 0.1,
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

	return (
		<footer
			className={`o-footer ${inView && "is-inview"}`}
			data-theme='coolGirl'
		>
			<Section classes='-padding-lg -stretchX -stretchY'>
				<Container classes='-stretchX -relative -padding-lg'>
					<h2 className='o-h2'>Let's talk!</h2>
					<Link classes="o-footer_email" href="mailto:hello@matthewparisien.com?subject=Let's talk">
						matthewparisien4@gmail.com
					</Link>
				</Container>

				<div className='o-footer_bottom'>
					<Container classes='-flex -align-end -justify-between -stretchX'>
						<div className='footer-list'>
							<div>
								<ul>
									<li>All Rights Reserved</li>
									<li>2020 © Matthew Parisien</li>
								</ul>
							</div>
							<div>
								<ul>
									<li>Follow me on</li>
									<li>
										<Link
											href='https://www.instagram.com/matt.parisien/'
											target='_blank'
										>
											Instagram
										</Link>
									</li>
									<li>
										<Link
											href='https://www.linkedin.com/in/matthew-parisien-365572130/'
											target='_blank'
										>
											LinkedIn
										</Link>
									</li>
									<li>
										<Link
											href='https://github.com/mattparisien'
											target='_blank'
										>
											GitHub
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</Container>
				</div>
			</Section>
		</footer>
	);
}

export default Footer;

import gsap from "gsap";
import SplitText from "gsap/SplitText";
import $ from "jquery";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import Container from "../Containers/Container";
import Section from "../Containers/Section";
import Link from "../Link/Link";

function Footer({ data }) {
	const linkRefs = useRef([]);

	linkRefs.current = [];

	const [ref, inView] = useInView({ threshold: 0.4 });

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
	}, [split, isSplit]);

	return (
		<footer
			className={`o-footer ${inView && "is-inview"}`}
			// data-theme='light'
		>
			<Section classes='-padding-lg -stretchX -stretchY' data-theme='blue'>
				<Container classes='-stretchX -relative -padding-lg'>
					<div className='inner -fadeUpChildren'>
						<div
							className='o-footer_image'
							style={{
								backgroundImage: `url(${
									data.personalPhoto[0] && data.personalPhoto[0].url
								})`,
							}}
						></div>
					</div>
				</Container>

				<div className='o-footer_bottom'>
					<Container classes='-flex -align-end -justify-center -stretchX'>
						<Link
							classes='o-footer_email -split -fadeUpChars'
							href="mailto:hello@matthewparisien.com?subject=Let's talk"
							hoverEffect={"chars"}
						>
							matthewparisien4@gmail.com
						</Link>
					</Container>
				</div>
			</Section>
		</footer>
	);
}

export default Footer;

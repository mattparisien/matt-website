import gsap from "gsap";
import SplitText from "gsap/SplitText";
import $ from "jquery";
import React, { useEffect, useRef, useState, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import Container from "../Containers/Container";
import Section from "../Containers/Section";
import Link from "../Link/Link";
import Button from "../Button/Button";

function Footer({ data }) {
	const linkRefs = useRef([]);

	linkRefs.current = [];

	const [ref, inView] = useInView({ threshold: 0.4 });

	const [isSplit, setIsSplit] = useState(false);

	const split = useRef(null);

	const timeZone = useMemo(() => {
		return new Date().toLocaleTimeString() + " EST";
	});

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
			<Container classes='o-footer_cta'>
				<div className='inner -relative'>
					<h2 className='lines -relative'>
						<div>Let's work</div>
						<div className='o-footer_self'>
							<img
								src={
									"https://res.cloudinary.com/dzoe0rah1/image/upload/v1647526928/me_b_and_w_5cecd7ce41.jpg"
								}
								alt=''
							/>
							<br></br>
						</div>
						together
					</h2>
				</div>
			</Container>
			{/* <Container classes='o-footer_buttons'>
				<Button href={"mailto:hello@matthewparisien.com"}>
					hello@matthewparisien.com
				</Button>
				<Button href={"tel:+15144671771"}>+1 514 467 1771</Button>
			</Container> */}
			<div className='o-footer_bottom -flex -align-end -justify-between -stretchX'>
				<div className='left'>
					<div className='version'>
						<div className='title'>Version</div>
						<div>2022 © Edition</div>
					</div>
					<div className='time'>
						<div className='title'>local time</div>
						<div>{timeZone}</div>
					</div>
				</div>
				<div className='right'>
					<div className='socials'>
						<div className='title'>Socials</div>
						<ul className='-flex'>
							<li>
								<a href='Instagram'>Instagram</a>
							</li>
							<li>
								<a href='Github'>Github</a>
							</li>
							<li>
								<a href='LinkedIn'>LinkedIn</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;

import React from "react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Container from "../Containers/Container";

function HeadingSection({ text, dataTheme }) {
	gsap.registerPlugin(ScrollTrigger);
	const sticky = useRef(null);
	const heading = useRef(null);

	useEffect(() => {
		if (sticky.current) {
			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: sticky.current,
					pin: true,
					pinSpacing: false,
					scrub: !0,
				},
			});
			tl.to(heading.current, {
				x: "-50%",
			});
		}
	}, [sticky]);

	return (
		<div
			className='o-heading-section -fullHeight -relative -offset-prev'
			ref={sticky}
			data-theme={dataTheme ? dataTheme : "regular"}
		>
			<Container classes='-stretchY'>
				<h2 className='o-h2 -absolute' ref={heading}>{text}</h2>
			</Container>
		</div>
	);
}

export default HeadingSection;

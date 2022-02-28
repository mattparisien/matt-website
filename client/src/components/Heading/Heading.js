import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import useResize from "../../helpers/hooks/useResize";
import $ from "jquery";
import InView from "react-intersection-observer";
import { device } from "../../styles/breakpoints";

const StyledHeading = styled.h2`
	margin: 0;

	letter-spacing: -0.5vw;
	font-family: Haas;
	font-weight: lighter;
	width: 100%;
	text-align: center;

	white-space: nowrap;

	.line {
		white-space: nowrap;
		width: 100%;
	}

	.scroll-char {
		display: inline-block;
	}

	.initial-hidden-char {
		transform: translateX(-100vw);
	}

	@media ${device.mobileL} {
		line-height: 15vw;
		.hero-heading-char {
			font-size: 30vw;
			line-height: 15vw;
		}
	}

	@media ${device.laptop} {
		.hero-heading-char {
			font-size: 25vw;
			line-height: 25vw;
		}
	}
`;

function Heading(props) {
	const [intersecting, setIntersecting] = useState(null);
	const [isSplit, setIsSplit] = useState(false);
	const [splitText, setSplitText] = useState(null);
	const headingTimeline = useRef(gsap.timeline());
	const [windowWidth, isResized] = useResize();
	const [hasPlayed, setHasPlayed] = useState(false);
	const [hasCharWrapped, setCharWrapped] = useState(false);
	// const timeline = useRef(gsap.timeline());

	const headingRef = useRef(null);

	useEffect(() => {
		if (!isSplit && headingRef.current) {
			const mySplitText = new SplitText(headingRef.current, {
				type: "chars",
				linesClass: "line",
				charsClass: "hero-heading-char initial-hidden-char",
			});
			// const splitTextWrap = new SplitText(headingRef.current, {
			// 	type: "lines",
			// 	linesClass: "line-wrapper",
			// });
			setIsSplit(true);
			setSplitText(mySplitText);
			// setSplitWrap(splitTextWrap);
		}

		if (isSplit && !hasCharWrapped) {
			$(splitText.chars).each((i, el) => {
				if (i % 2 === 0) {
					$(el).wrap(
						"<div class='scroll-char' data-scroll data-scroll-speed=2 ></div>"
					);
				} else {
					$(el).wrap(
						"<div class='scroll-char' data-scroll data-scroll-speed=4></div>"
					);
				}
			});
			setCharWrapped(true);
		}

		if (isSplit && intersecting && !hasPlayed) {
			const chars = $(intersecting).find(".hero-heading-char");
			let duration = 4;
			headingTimeline.current.to(chars, {
				x: 0,
				duration: duration,
				stagger: -0.2,
				ease: "circ.out",
				onComplete: () => {
					chars.removeClass("initial-hidden-char");
				},
			});
			setHasPlayed(true);
		}
	}, [isSplit, windowWidth, intersecting, splitText]);

	return (
		<StyledHeading
			ref={headingRef}
			className='Heading'
			data-scroll
			data-scroll-speed={5}
		>
			<InView
				style={{ transform: "translateX(-4vw)" }}
				className='heading-view-wrapper'
				onChange={(inView, entry) => inView && setIntersecting(entry.target)}
			>
				{props.children}
			</InView>
		</StyledHeading>
	);
}

export default Heading;

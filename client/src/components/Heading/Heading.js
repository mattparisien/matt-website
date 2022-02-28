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
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%) scale(1.2);
	white-space: nowrap;

	.line {
		white-space: nowrap;
		width: 100%;
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
		line-height: 15vw;
		.hero-heading-char {
			font-size: 22vw;
			line-height: 15vw;
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

		if (isSplit && intersecting && !hasPlayed) {
			console.log("hello!");
			const chars = $(intersecting).find(".hero-heading-char");
			console.log(chars);
			let duration = 4;
			headingTimeline.current.to(chars, {
				x: 0,
				duration: duration,
				stagger: -0.3,
				ease: "circ.out",
				onComplete: () => {
					chars.removeClass("initial-hidden-char");
				},
			});
			setHasPlayed(true);
		}
	}, [isSplit, windowWidth, intersecting, splitText]);

	return (
		<InView
			className='heading-view-wrapper'
			onChange={(inView, entry) => inView && setIntersecting(entry.target)}
		>
			<StyledHeading ref={headingRef} className='Heading'>
				{props.children}
			</StyledHeading>
		</InView>
	);
}

export default Heading;

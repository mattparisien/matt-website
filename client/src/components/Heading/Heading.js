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
	transform: translate(-50%, -50%)scale(1.2);
	

	.line {
		white-space: nowrap;
		width: 100%;
	}

	.hero-heading-char {
		transform: translateX(-100vw);
	}

	@media ${device.laptopL} {
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
	// const timeline = useRef(gsap.timeline());

	const headingRef = useRef(null);

	useEffect(() => {
		if (!isSplit && headingRef.current) {
			const mySplitText = new SplitText(headingRef.current, {
				type: "chars",
				linesClass: "line",
				charsClass: "hero-heading-char",
			});
			// const splitTextWrap = new SplitText(headingRef.current, {
			// 	type: "lines",
			// 	linesClass: "line-wrapper",
			// });
			setIsSplit(true);
			setSplitText(mySplitText);
			// setSplitWrap(splitTextWrap);
		}

		if (isSplit && intersecting) {
			const chars = $(intersecting).find(".hero-heading-char");
			console.log(chars);
			let duration = 2;
			headingTimeline.current.to(chars, {
				x: 0,
				duration: duration,
				stagger: -0.2,
				ease: "circ.Out",
			});
		}
	}, [isSplit, windowWidth, intersecting, splitText]);

	useEffect(() => {
		splitText && setSplitText(splitText.revert().split());
	}, [windowWidth, splitText]);

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

import gsap from "gsap";
import { SplitText } from "gsap/all";
import $ from "jquery";
import React, { useCallback, useEffect, useRef, useState } from "react";
import useResize from "../../helpers/hooks/useResize";
import {
	StyledVariant1Paragraph,
	StyledVariant2Paragraph,
} from "./styles/StyledParagraph";
import { useInView } from "react-intersection-observer";
import { Box } from "@mui/material";

function Paragraph(props) {
	const [intersecting, setIntersecting] = useState(null);
	const [isSplit, setIsSplit] = useState(false);
	const [splitText, setSplitText] = useState(null);
	const [splitWrap, setSplitWrap] = useState(null);
	const paragraph = useRef(null);
	const [windowWidth, isResized] = useResize();
	// const timeline = useRef(gsap.timeline());

	useEffect(() => {
		if (!isSplit && paragraph.current) {
			const mySplitText = new SplitText(paragraph.current, {
				type: "lines, words, chars",
				linesClass: "line",
			});

			setTimeout(() => {
				mySplitText.revert().split();
				// });
				setIsSplit(true);
				setSplitText(mySplitText);
			}, 200);
			// const splitTextWrap = new SplitText(paragraph.current, {
			// 	type: "lines",
			// 	linesClass: "line-wrapper",

			// setSplitWrap(splitTextWrap);
		}
	}, [isSplit, windowWidth, intersecting, splitText]);

	useEffect(() => {
		if (splitText && !splitWrap) {
			$(splitText.lines).wrap("<div></div>");
			setSplitWrap(true);
		}

		splitText && setSplitText(splitText.revert().split());
	}, [windowWidth, splitText, splitWrap]);

	const paragraphClass = "Paragraph";
	const ref = useRef();
	const [inViewRef, inView] = useInView();

	const setRefs = useCallback(
		node => {
			// Ref's from useRef needs to have the node assigned to `current`
			ref.current = node;
			// Callback refs, like the one from `useInView`, is a function that takes the node as an argument
			inViewRef(node);
		},
		[inViewRef]
	);

	useEffect(() => {
		if (inView) {
			console.log($(ref.current).find(".line"));

			gsap.to($(ref.current).find(".line"), {
				y: 0,
				opacity: 1,
				ease: "power3.out",
				duration: 1,
				stagger: 0.1,
				delay: 0.1,
			});
		}
	}, [inView, inViewRef, ref]);

	return (
		<>
			{props.variant === 1 ? (
				<Box ref={setRefs} className='view-wrapper' sx={{ width: "100%" }}>
					<StyledVariant1Paragraph
						className={paragraphClass}
						{...props}
						isResized={isResized}
						ref={paragraph}
					>
						{props.indent ? <span className='spacer'>&nbsp;</span> : ""}
						{props.children}
					</StyledVariant1Paragraph>
				</Box>
			) : (
				<Box ref={setRefs} className='view-wrapper' sx={{ width: "100%" }}>
					<StyledVariant2Paragraph
						className={paragraphClass}
						{...props}
						isResized={isResized}
						ref={paragraph}
					></StyledVariant2Paragraph>
				</Box>
			)}
		</>
	);
}

export default Paragraph;

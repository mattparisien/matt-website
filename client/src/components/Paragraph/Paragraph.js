import gsap from "gsap";
import { SplitText } from "gsap/all";
import $ from "jquery";
import React, { useCallback, useEffect, useRef, useState } from "react";
import useResize from "../../helpers/hooks/useResize";
import {
	StyledVariant1Paragraph,
	StyledVariant2Paragraph,
	StyledVariant3Paragraph,
} from "./styles/StyledParagraph";
import { useInView } from "react-intersection-observer";
import { Box } from "@mui/material";

function Paragraph(props) {
	const [intersecting] = useState(null);
	const [isSplit, setIsSplit] = useState(false);
	const [splitText, setSplitText] = useState(null);

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
			}, 250);
			// const splitTextWrap = new SplitText(paragraph.current, {
			// 	type: "lines",
			// 	linesClass: "line-wrapper",

			// setSplitWrap(splitTextWrap);
		}
	}, [isSplit, windowWidth, intersecting, splitText]);

	useEffect(() => {
		splitText && setSplitText(splitText.revert().split());
	}, [windowWidth, splitText]);

	const paragraphClass = "Paragraph";
	const ref = useRef();
	const [inViewRef, inView, entry] = useInView({
		threshold: 1,
	});

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
		console.log("in view", inView);

		if (inView) {
			setTimeout(() => {
				gsap.to($(entry.target).find(".line"), {
					y: 0,
					opacity: 1,
					ease: "power3.out",
					duration: 1,
					stagger: 0.1,
					delay: 0.1,
				});
			}, 250);
		}
	}, [inView, inViewRef, ref, windowWidth]);

	return (
		<>
			<Box
				ref={setRefs}
				className='view-wrapper'
				sx={{
					width: props.variant === 1 ? "100%" : "30%",
				}}
			>
				{props.variant === 1 ? (
					<StyledVariant1Paragraph
						className={paragraphClass}
						{...props}
						isResized={isResized}
						ref={paragraph}
					>
						{props.indent ? <span className='spacer'>&nbsp;</span> : ""}
						{props.children}
					</StyledVariant1Paragraph>
				) : props.variant === 2 ? (
					<StyledVariant2Paragraph
						className={paragraphClass}
						{...props}
						isResized={isResized}
						ref={paragraph}
					></StyledVariant2Paragraph>
				) : (
					<StyledVariant3Paragraph
						className={paragraphClass}
						{...props}
						isResized={isResized}
						ref={paragraph}
					></StyledVariant3Paragraph>
				)}
			</Box>
		</>
	);
}

export default Paragraph;

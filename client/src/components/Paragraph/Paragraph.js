import { Box } from "@mui/material";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import $ from "jquery";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import useResize from "../../helpers/hooks/useResize";
import {
	StyledVariant1Paragraph,
	StyledVariant2Paragraph,
	StyledVariant3Paragraph
} from "./styles/StyledParagraph";

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
		}
	}, [isSplit, windowWidth, intersecting, splitText]);

	useEffect(() => {
		splitText && setSplitText(splitText.revert().split());
	}, [windowWidth, splitText]);

	const paragraphClass = "Paragraph";
	const ref = useRef();
	const [inViewRef, inView, entry] = useInView({
		threshold: 0.3,
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
	}, [inView, inViewRef, ref, windowWidth, entry]);

	return (
		<>
			<Box
				ref={setRefs}
				className='view-wrapper'
				sx={{width: "100%"}}
				
			>
				{props.variant === 1 ? (
					<StyledVariant1Paragraph
						desktop={props.desktop}
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
					desktop={props.desktop}
						className={paragraphClass}
						{...props}
						isResized={isResized}
						ref={paragraph}
					></StyledVariant2Paragraph>
				) : (
					<StyledVariant3Paragraph
					desktop={props.desktop}
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

import React, { useRef, useEffect, useState } from "react";
import { StyledParagraph } from "./styles/StyledParagraph";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import $ from "jquery";
import useResize from "../../helpers/hooks/useResize";
import InView from "react-intersection-observer";
import styled from "styled-components";
import { StyledStandardParagraph } from "./styles/StyledParagraph";

function Paragraph(props) {
	const [intersecting, setIntersecting] = useState(null);
	const [isSplit, setIsSplit] = useState(false);
	const [splitText, setSplitText] = useState(null);
	const paragraph = useRef(null);
	const [windowWidth, isResized] = useResize();
	// const timeline = useRef(gsap.timeline());

	useEffect(() => {
		if (!isSplit && paragraph.current) {
			const mySplitText = new SplitText(paragraph.current, {
				type: "lines, chars, words",
				linesClass: "line",
				charsClass: "char",
			});
			setIsSplit(true);
			setSplitText(mySplitText);
		}

		if (isSplit && intersecting) {
			const lines = $(intersecting).find(".line");

			lines.each((index, el) => {
				const chars = $(el).find(".char");
				let delay = 0;
				gsap.set(chars, {
					y: "100%",
					opacity: 0,
				});
				gsap.to(chars, {
					y: 0,
					opacity: 1,
					stagger: 0.02,
					duration: 2,
					ease: "expo.inOut",
					delay: delay + index / 4,
					onComplete: () => {
						$(paragraph.current).removeClass("is-initial-hidden");
					},
				});
			});
		}

		if (splitText) {
			$(splitText.lines).wrap("<div class='line-wrapper'></div>");
		}
	}, [isSplit, windowWidth, intersecting, splitText]);

	useEffect(() => {
		splitText && splitText.revert().split();
	}, [windowWidth, splitText]);

	const paragraphClass = "Paragraph";

	return (
		<InView
			className='paragraph-view-wrapper'
			onChange={(inView, entry) => inView && setIntersecting(entry.target)}
			style={{width: "100%"}}
		>
			<StyledStandardParagraph
				className={paragraphClass}
				{...props}
				isResized={isResized}
				ref={paragraph}
			>
				{props.children}
			</StyledStandardParagraph>
		</InView>
	);
}

export default Paragraph;

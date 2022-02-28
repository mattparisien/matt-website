import React, { useRef, useEffect, useState } from "react";
import { StyledParagraph } from "./styles/StyledParagraph";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import $ from "jquery";
import useResize from "../../helpers/hooks/useResize";
import InView from "react-intersection-observer";
import styled from "styled-components";
import {
	StyledVariant1Paragraph,
	StyledVariant2Paragraph,
} from "./styles/StyledParagraph";

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
				type: "lines, chars, words",
				linesClass: "line",
				charsClass: "char",
			});
			// const splitTextWrap = new SplitText(paragraph.current, {
			// 	type: "lines",
			// 	linesClass: "line-wrapper",
			// });
			setIsSplit(true);
			setSplitText(mySplitText);

			// setSplitWrap(splitTextWrap);
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
	}, [isSplit, windowWidth, intersecting, splitText]);

	useEffect(() => {

		if (splitText && !splitWrap) {
			$(splitText.lines).wrap("<div></div>");
			setSplitWrap(true);
		}

		splitText && setSplitText(splitText.revert().split());
	}, [windowWidth, splitText, splitWrap]);

	const paragraphClass = "Paragraph";

	return (
		<InView
			className='paragraph-view-wrapper'
			onChange={(inView, entry) => inView && setIntersecting(entry.target)}
			style={{ width: "100%" }}
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
			) : (
				<StyledVariant2Paragraph
					className={paragraphClass}
					{...props}
					isResized={isResized}
					ref={paragraph}
				></StyledVariant2Paragraph>
			)}
		</InView>
	);
}

export default Paragraph;

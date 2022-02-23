import React, { useRef, useEffect, useState } from "react";
import { StyledParagraph } from "./styles/StyledParagraph";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import $ from "jquery";

function Paragraph(props) {
	const [isSplit, setIsSplit] = useState(false);
	const [splitText, setSplitText] = useState(null);
	const paragraph = useRef(null);
	const timeline = useRef(gsap.timeline());

	useEffect(() => {
		if (!isSplit && paragraph.current) {
			const mySplitText = new SplitText(paragraph.current, {
				type: "lines, chars",
				linesClass: "line",
				charsClass: "char",
			});

			$(mySplitText.lines).wrap("<div class='line-wrapper'></div>");
			setIsSplit(true);
		}

		if (isSplit) {
			const lines = $(paragraph.current).find(".line");

			lines.each((index, el) => {
				const chars = $(el).find(".char");
				let delay = 0;

				gsap.to(chars, {
					y: 0,
					opacity: 1,
					stagger: 0.02,
					duration: 2,
					ease: "expo.inOut",
					delay: delay + index / 4,
				});
			});
		}
	}, [isSplit]);

	return (
		<StyledParagraph className='Paragraph' {...props} ref={paragraph}>
			{props.children}
		</StyledParagraph>
	);
}

export default Paragraph;

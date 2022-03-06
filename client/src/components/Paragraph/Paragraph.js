import gsap from "gsap";
import SplitText from "gsap/SplitText";
import $ from "jquery";
import React, { useEffect, useRef, useState } from "react";
import useResize from "../../helpers/hooks/useResize";
import {
	StyledVariant1Paragraph,
	StyledVariant2Paragraph,
} from "./styles/StyledParagraph";
import { useContext } from "react";
import { LoadingContext } from "../App/App";

function Paragraph(props) {
	const { toggleHeaderShow } = useContext(LoadingContext);
	const [isSplit, setIsSplit] = useState(false);
	const [splitText, setSplitText] = useState(null);
	const [splitWrap, setSplitWrap] = useState(null);
	const paragraph = useRef(null);
	const [windowWidth, isResized] = useResize();
	// const timeline = useRef(gsap.timeline());

	useEffect(() => {
		if (!isSplit && paragraph.current) {
			gsap.registerPlugin(SplitText);
			const mySplitText = new SplitText(paragraph.current, {
				type: "lines, chars, words",
				charsClass: "char",
				linesClass: "line line-initial-hidden",
			});

			setTimeout(() => {
				mySplitText.revert().split();
				setIsSplit(true);
				setSplitText(mySplitText);
			}, 200);

			// setSplitWrap(splitTextWrap);
		}

		if (splitText) {
			

			let delay = 0;

			setTimeout(() => {
				for (let i = 0; i < splitText.lines.length; i++) {
					delay += 0.2;
					gsap.to(
						$(splitText.lines[i]).find(".char"),
						{
							duration: 2,
							ease: "expo.inOut",
							stagger: 0.05,
							y: 0,
							onComplete: () => {
								toggleHeaderShow()
							},
						},
						delay
					);
				}
			}, 200);
		}
	}, [isSplit, splitText, windowWidth]);

	useEffect(() => {
		if (splitText && !splitWrap) {
			$(splitText.lines).wrap("<div></div>");
			setSplitWrap(true);
		}

		splitText && setSplitText(splitText.revert().split());
	}, [windowWidth, splitText, splitWrap]);

	const paragraphClass = "Paragraph";

	return (
		<>
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
		</>
	);
}

export default Paragraph;

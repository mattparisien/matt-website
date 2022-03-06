import React, { useRef, useState } from "react";
import useResize from "../../helpers/hooks/useResize";
import {
	StyledVariant1Paragraph,
	StyledVariant2Paragraph
} from "./styles/StyledParagraph";

function Paragraph(props) {
	const [intersecting, setIntersecting] = useState(null);
	const [isSplit, setIsSplit] = useState(false);
	const [splitText, setSplitText] = useState(null);
	const [splitWrap, setSplitWrap] = useState(null);
	const paragraph = useRef(null);
	const [windowWidth, isResized] = useResize();
	// const timeline = useRef(gsap.timeline());

	// useEffect(() => {
	// 	if (!isSplit && paragraph.current) {
	// 		const mySplitText = new SplitText(paragraph.current, {
	// 			type: "lines",
	// 			linesClass: "line line-initial-hidden",
	// 		});
	// 		// const splitTextWrap = new SplitText(paragraph.current, {
	// 		// 	type: "lines",
	// 		// 	linesClass: "line-wrapper",
	// 		// });
	// 		setIsSplit(true);
	// 		setSplitText(mySplitText);

	// 		// setSplitWrap(splitTextWrap);
	// 	}

	// 	if (isSplit && intersecting) {
	// 		gsap.to(splitText.lines, {
	// 			y: 0,
	// 			opacity: 1,
	// 			stagger: 0.05,
	// 			duration: 1,
	// 			ease: "power2.out",
	// 			delay: 0.2,
	// 		});
	// 	}
	// }, [isSplit, windowWidth, intersecting, splitText]);

	// useEffect(() => {
	// 	if (splitText && !splitWrap) {
	// 		$(splitText.lines).wrap("<div></div>");
	// 		setSplitWrap(true);
	// 	}

	// 	splitText && setSplitText(splitText.revert().split());
	// }, [windowWidth, splitText, splitWrap]);

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

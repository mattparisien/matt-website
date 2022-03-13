import React, { useEffect } from "react";
import classNames from "classnames";
import { SplitText } from "gsap/all";
import { useRef, useState } from "react";
import $ from "jquery";
import gsap from "gsap";

function Paragraph(props) {
	const classes = classNames(`c-text -text-${props.size}`, {
		"-indent": props.indent,
		[props.classes]: props.classes,
	});

	const p = useRef(null);
	const splitText = useRef(null);
	const [lines, setLines] = useState(null);

	useEffect(() => {
		if (!lines && p.current) {
			setTimeout(() => {
				const mySplitText = new SplitText([p.current], {
					type: "lines",
					linesClass: "line u-line-translate",
				});
				$(mySplitText.lines).wrap("<div class='line-wrapper'></div>");
				setLines(mySplitText);
			}, 200);
		}

		lines &&
			gsap.to(lines.lines, {
				y: 0,
				opacity: 1,
				ease: "expo.inOut",
				duration: 2.5,
				stagger: 0.1
			});
	}, [lines]);

	return (
		<div className={classes} ref={p}>
			{props.children}
		</div>
	);
}

export default Paragraph;

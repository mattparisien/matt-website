import classNames from "classnames";
import React, { useRef } from "react";
import Link from "../Link/Link";

function CircleButton({ text, href, color, classes }) {
	const btnClasses = classNames("c-circle-button -fade-up-load", {
		[classes]: classes,
	});

	const button = useRef(null);

	
	return (
		<Link classes={btnClasses} href={href} ref={button}>
			{text}
			<div className={`c-circle-button_bg -bg-${color}`}></div>
		</Link>
	);
}

export default CircleButton;

import classNames from "classnames";
import React, { forwardRef } from "react";
import Link from "../Link/Link";

function CircleButton({ text, href, color, classes }) {
	const btnClasses = classNames("c-circle-button", {
		[`-bg-${color}`]: color,
		[classes]: classes,
	});

	return (
		<Link classes={btnClasses} href={href}>
			{text}
		</Link>
	);
}

export default forwardRef(CircleButton);

import classNames from "classnames";
import React, { forwardRef } from "react";
import Link from "../Link/Link";

function CircleButton({ text, href, color }) {
	const btnClasses = classNames("c-circle-button", { [`-bg-${color}`]: color });

	return (
		<Link classes={btnClasses} href={href}>
			{text}
		</Link>
	);
}

export default forwardRef(CircleButton);

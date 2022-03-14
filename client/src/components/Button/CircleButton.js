import React, {forwardRef} from "react";
import Link from "../Link/Link";
import classNames from "classnames";
import { buttonClasses } from "@mui/material";

function CircleButton({text, href, color}, ref) {

  const btnClasses = classNames('c-circle-button', {[`-bg-${color}`]: color})

	return (
		<Link

			classes={btnClasses}
			href={href}
      ref={ref}
		>
			{text}
		</Link>
	);
}

export default forwardRef(CircleButton);

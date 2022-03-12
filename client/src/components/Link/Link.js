import { Box } from "@mui/material";
import classNames from "classnames";
import React from "react";

function Link(props) {
	const classes = classNames("Link -relative", {
		[props.classes]: props.classes,
	});

	return (
		<Box
			component='a'
			className={classes}
			href={props.href}
			target={props.target}
			onClick={props.onClick}
		>
			{props.children}
			
		</Box>
	);
}

export default Link;

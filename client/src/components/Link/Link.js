import { Box } from "@mui/material";
import React from "react";
import LinkCircle from "./LinkCircle";
import classNames from "classnames";

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
			{!props.noCircle && <LinkCircle isSelect={props.isSelect} />}
		</Box>
	);
}

export default Link;

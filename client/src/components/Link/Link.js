import { Box } from "@mui/material";
import React from "react";
import LinkCircle from "./LinkCircle";

function Link(props) {
	return (
		<Box
			component='a'
			className={`Link -relative`}
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

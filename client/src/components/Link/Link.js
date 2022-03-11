import React from "react";
import LinkCircle from "./LinkCircle";
import { Box } from "@mui/material";

function Link(props) {
	return (
		<Box
			component="a"
			className={`Link ${props.className ? props.className : ""}`}
			href={props.href}
			target={props.target}
			onClick={props.onClick}
			sx={props.style}
		>
			{props.children}
			{!props.noCircle && <LinkCircle isSelect={props.isSelect}/>}
		</Box>
	);
}

export default Link;


import React from "react";
import LinkCircle from "./LinkCircle";
import { Box } from "@mui/material";

function Link(props) {
	const linkTextWrapper = {
		position: "relative",

		"&::after": {
			position: "absolute",
			top: -4,
			right: -6,
			content: props.superscript ? `'${props.superscript}'` : "''",
			fontSize: "0.6rem",
		},
	};

	return (
		<Box
			component='a'
			className={`Link ${props.className ? props.className : ""}`}
			href={props.href}
			target={props.target}
			onClick={props.onClick}
		>
			<Box component='span' sx={linkTextWrapper}>
				{props.children}{" "}
			</Box>
			{!props.noCircle && <LinkCircle isSelect={props.isSelect} />}
		</Box>
	);
}

export default Link;

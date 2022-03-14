import { Box } from "@mui/material";
import classNames from "classnames";
import React from "react";
import { useContext } from "react";
import { CursorContext } from "../../App/App";

function Link(props) {
	const classes = classNames("c-link", {
		[props.classes]: props.classes,
	});

	const { setCursorState } = useContext(CursorContext);

	const handleMouseEnter = () => {
		setCursorState("link-hovering");
	};

	const handleMouseLeave = () => {
		setCursorState("following");
	};

	return (
		<a
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className={classes}
			href={props.href}
			target={props.target}
			onClick={props.onClick}
		>
			{props.children}
		</a>
	);
}

export default Link;

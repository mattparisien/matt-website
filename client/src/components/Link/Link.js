import { Box } from "@mui/material";
import classNames from "classnames";
import React from "react";
import { useContext } from "react";
import { CursorContext, LoadingContext } from "../../App/App";

import { NavigationType, useNavigate } from "react-router-dom";

function Link(props) {
	const classes = classNames("c-link", {
		[props.classes]: props.classes,
	});

	const navigate = useNavigate();
	const { playTransition } = useContext(LoadingContext);

	const handleNavigate = e => {
		e.preventDefault();
		playTransition();
		setTimeout(() => {
			navigate(props.href);
		}, 1000);
	};

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
			onClick={props.onClick || (props.isRouterLink && handleNavigate)}
		>
			{props.children}
		</a>
	);
}

export default Link;

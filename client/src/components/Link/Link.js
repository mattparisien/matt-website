import classNames from "classnames";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CursorContext, LoadingContext } from "../../App/App";

function Link(props) {
	const classes = classNames("c-link", {
		[props.classes]: props.classes,
	});

	const navigate = useNavigate();
	const { playTransition } = useContext(LoadingContext);

	const handleNavigate = e => {
		props.onClick(e);
		e.preventDefault();

		playTransition();

		setTimeout(() => {
			navigate(props.href);
		}, 1400);
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
			href={!props.isRouterLink && props.href}
			target={props.target}
			onClick={!props.isRouterLink ? props.onClick : handleNavigate}
		>
			{props.children}
		</a>
	);
}

export default Link;

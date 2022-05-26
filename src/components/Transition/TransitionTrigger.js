import classNames from "classnames";
import React, { useContext } from "react";
import { LoadingContext } from "../../App/App";
import Link from "../Link/Link";

function TransitionTrigger(props) {
	const { playTransition, toggleMenu, menuActive } =
		useContext(LoadingContext);
	const classes = classNames("TransitionTrigger -block -stretchX", {
		[props.classes]: props.classes,
	});

	const handleClick = () => {
		menuActive && toggleMenu();
		playTransition();
	};

	return (
		<Link onClick={handleClick} classes={classes} noCircle={props.noCircle}>
			{props.children}
		</Link>
	);
}

export default TransitionTrigger;

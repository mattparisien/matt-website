import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingContext } from "../../App/App";
import Link from "../Link/Link";
import classNames from "classnames";

function TransitionTrigger(props) {
	const { playTransition, toggleMenu, menuActive } = useContext(LoadingContext);
	const classes = classNames("TransitionTrigger", {
		[props.classes]: props.classes,
	});
	const navigate = useNavigate();

	const handleClick = () => {
		menuActive && toggleMenu();
		playTransition();

		setTimeout(() => {
			navigate(props.to);
		}, 700);
	};

	return (
		<Link
			onClick={handleClick}
			classes={classes}
			noCircle={props.noCircle}
		>
			{props.children}
		</Link>
	);
}

export default TransitionTrigger;

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingContext } from "../../App/App";
import Link from "../Link/Link";

function TransitionTrigger(props) {
	const { playTransition, toggleMenu, menuActive } = useContext(LoadingContext);

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
			className='TransitionTrigger'
			noCircle={props.noCircle}
		>
			{props.children}
		</Link>
	);
}

export default TransitionTrigger;

import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoadingContext } from "../../App/App";
import Link from "../Link/Link";

function TransitionTrigger(props) {
	const { toggleTransitioning, isTransitioning } = useContext(LoadingContext);

	const navigate = useNavigate();
	const location = useLocation();

	const handleClick = () => {
		toggleTransitioning();

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

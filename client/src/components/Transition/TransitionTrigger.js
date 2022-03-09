import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoadingContext } from "../../App/App";
import Link from "../Link/Link";

function TransitionTrigger(props) {
	const [isTransitioning, setTransitioning] = useState(false);
	const { toggleLoading } = useContext(LoadingContext);
	const navigate = useNavigate();
	const location = useLocation();
	const handleClick = () => {
		!isTransitioning &&
			props.to !== location.pathname &&
			setTransitioning(true);
	};

	useEffect(() => {
		if (isTransitioning) {
			toggleLoading();
			setTimeout(() => {
				navigate(props.to);
				setTransitioning(false);
			}, 700);
		}
	}, [isTransitioning, navigate, toggleLoading, props.to]);

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

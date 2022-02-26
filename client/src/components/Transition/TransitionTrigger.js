import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { LoadingContext } from "../../App/App";

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
	}, [isTransitioning]);

	return (
		<a onClick={handleClick} className='TransitionTrigger'>
			{props.children}
		</a>
	);
}

export default TransitionTrigger;

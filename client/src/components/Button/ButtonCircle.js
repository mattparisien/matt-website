import React from "react";
import styled from "styled-components";
import Link from "../Link/Link";
import TransitionTrigger from "../Transition/TransitionTrigger";

const StyledCircleButton = styled(TransitionTrigger)`
	position: relative;
	height: 100px;
	width: 100px;

	.button-circle-bg {
		background-color: ${({theme, color}) => theme.colors[color]};
		height: 100%;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 99;
	}
`

function ButtonCircle(props) {
	return (
		<StyledCircleButton {...props} to={props.href} noCircle>
			{props.children}
			<div className='button-circle-bg'></div>
		</StyledCircleButton>
	);
}

export default ButtonCircle;

import React from "react";
import styled from "styled-components";
import Link from "../Link/Link";
import TransitionTrigger from "../Transition/TransitionTrigger";

const StyledBtn = styled.button`
	background: transparent;
	border: 0px;
	font-family: "Neue Mtl";

	color: ${({ theme, color }) => theme.colors["light"]};
	font-size: ${({ fontSize }) => (fontSize ? fontSize : "1rem")};
	height: 10rem;
	width: 10rem;

	.Link {
		font-family: "Neue Mtl";
		display: block;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	&:hover .button-circle-bg {
		transform: scale(1.2);
	}

	.button-circle-bg {
		transition: 400ms ease;
		height: 100%;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-color: ${({ theme, color }) => theme.colors[color]};
		border-radius: 50%;
		z-index: -1;
	}
`;

function ButtonCircle(props) {
	return (
		<StyledBtn
			{...props}
			data-scroll={props.scrollSpeed ? true : false}
			data-scroll-speed={props.scrollSpeed}
		>
			<TransitionTrigger to={props.href} noCircle>
				{props.children}
				<div className='button-circle-bg'></div>
			</TransitionTrigger>
		</StyledBtn>
	);
}

export default ButtonCircle;

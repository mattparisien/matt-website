import React from "react";
import styled from "styled-components";

const StyledBurger = styled.button`
	width: 50px;
	height: 50px;
	background: transparent;
	border: 0px;
	position: relative;

	.circle {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
		overflow: hidden;
	}

	.hover-circle {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 3rem;
		height: 3rem;
		background-color: red;
		border-radius: 50%;
		transform: translate(-50%, -50%) scale(0);
		transition: 300ms ease;
		z-index: 1;
		background-color: hotpink;
	}
	
	.burger {
		height: 0.4rem;
		position: relative;
		

		&::after {
			content: '';
			width: 100%;
			position: absolute;
			bottom: 0;
			left: 0;
			height: 2px;
			background-color: black;

		}

		&::before {
			content: '';
			width: 100%;
			position: absolute;
			top: 0;
			left: 0;
			height: 2px;
			background-color: black;

		}
	}

	&:hover .hover-circle {
		transform: translate(-50%, -50%) scale(1.4);
	}
`;

function MobileNav(props) {
	return (
		<StyledBurger className='MobileNav' {...props} onClick={props.toggleMenu}>
			<div className="burger"></div>
			
			<div className='circle'>
				<div className='hover-circle'></div>
			</div>
		</StyledBurger>
	);
}

export default MobileNav;

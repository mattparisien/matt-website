import React from "react";
import styled from "styled-components";

const StyledBurger = styled.button`
	height: 100%;
	width: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background: transparent;
	border: 0px;

	&:hover .top {
		transform: ${isBurger => (isBurger ? "translateX(-10px)" : "none")};
	}

	&:hover .bottom {
		transform: ${isBurger => (isBurger ? "translateX(10px)" : "none")};
	}

	.top,
	.bottom {
		transition: 300ms ease;
		height: 1px;
		width: 100%;
		transform-origin: center;
	}

	.top {
		margin-bottom: ${({ isBurger }) => (isBurger ? "0.4rem" : 0)};
		transform: ${({ isBurger }) => (isBurger ? "none" : "rotate(45deg)")};
	}

	.bottom {
		transform: ${({ isBurger }) => (isBurger ? "none" : "rotate(-45deg)")};
	}
`;

function MobileNav(props) {
	return (
		<StyledBurger className='MobileNav' {...props} onClick={props.toggleMenu}>
			<div className='top'></div>
			<div className='bottom'></div>
		</StyledBurger>
	);
}

export default MobileNav;

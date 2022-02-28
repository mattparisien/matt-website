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
    transform: translateX(-10px);
  }

  &:hover .bottom {
    transform: translateX(10px);
  }

	.top,
	.bottom {
    transition: 300ms ease;
		height: 1px;
		width: 100%;
	}

	.top {
		margin-bottom: 0.4rem;
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

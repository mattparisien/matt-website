import styled from "styled-components";




export const StyledMenuLink = styled.a`
	align-self: flex-start;
	font-size: 1.4rem;
	position: fixed;
	top: 0;
	right: 0;
	padding: 2rem;
	font-family: "Kobe Bold";
	z-index: 9999999;
	color: ${({theme, isMenuActive}) => isMenuActive ? theme.colors.light : theme.colors.dark};
	transition: 300ms ease;
	transition-delay: 300ms;
	

	.menu-trigger__inner {
		position: relative;
		overflow: hidden;
		transition: 300ms ease;
	}

	#close {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 100%;
		transform: translate(-50%, -50%);
		display: flex;
		align-items: center;
		justify-content: center;

		.char {
			opacity: 0;
			transform: translateY(100%);
		}
	}



`;

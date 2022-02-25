import React, { useRef, useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
	background-color: ${({ theme }) => theme.colors.red};
	color: ${({ theme }) => theme.colors.light};
	font-family: "Haas";
	text-decoration: none;
	outline: none;
	border: 0px;
	font-size: 1.4rem;
	padding: 2rem 4rem;
	display: flex;
	transition: 300ms ease;
	position: relative;

	&:hover {
		opacity: 0.8;
	}

	${({ align }) => {
		return align
			? `
				margin-${align}: auto;
			`
			: ``;
	}}
`;

const StyledLink = styled.a`
	background-color: ${({ theme }) => theme.colors.red};
	color: ${({ theme }) => theme.colors.light};
	font-family: "Haas";
	text-decoration: none;
	outline: none;
	border: 0px;
	font-size: 1.4rem;
	padding: 2rem 4rem;
	display: flex;
	transition: 300ms ease;
	display: block;
	width: 8rem;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		opacity: 0.8;
	}

	${({ align }) => {
		return align
			? `
				margin-${align}: auto;
			`
			: ``;
	}}
`;

function Button(props) {
	return props.$href ? (
		<StyledLink
			href={props.$href}
			{...props}
			data-scroll
			data-scroll-speed={3}
		></StyledLink>
	) : (
		<StyledButton
			type='button'
			{...props}
			data-scroll
			data-scroll-speed={3}
		></StyledButton>
	);
}

export default Button;

import React, { useRef, useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { LoadingContext } from "../../App/App";

const StyledButton = styled.button`
	background-color: ${({ theme, naked }) => (naked ? "none" : theme.colors.red)};
	background: transparent;
	color: ${({ theme, naked }) =>
		naked ? theme.colors.dark : theme.colors.light};
	font-family: "Haas";
	text-decoration: none;
	outline: none;
	border: 0px;
	font-size: 1.4rem;
	padding: ${({ naked }) => (naked ? "0" : "2rem 4rem")}
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
	const navigate = useNavigate();
	const { toggleLoading } = useContext(LoadingContext);

	const handleClick = () => {
		toggleLoading();
		setTimeout(() => {
			navigate(props.$to);
		}, 700);
	};

	return props.$href ? (
		<StyledLink href={props.$href} {...props}></StyledLink>
	) : (
		<StyledButton
			type='button'
			{...props}
			onClick={props.$to ? handleClick : ""}
		></StyledButton>
	);
}

export default Button;

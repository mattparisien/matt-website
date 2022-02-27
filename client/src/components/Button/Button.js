import React, { useRef, useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { LoadingContext } from "../../App/App";
import { device } from "../../styles/breakpoints";

const buttonSizes = {
	mobileS: "0.7rem 1rem",
	mobileM: "0.7rem 1rem",
	mobileL: "0.9rem 1.3rem",
	tablet: "1.4rem 2.3rem",
	laptop: "2rem 4rem",
	laptopL: "2rem 4rem",
	desktop: "2rem 4rem",
	desktopL: "2rem 4rem",
};

const renderResponsiveSizes = object => {
	return Object.entries(object).map(size => {
		return `
			@media ${device[size[0]]} {
				padding: ${size[1]};
			}
			`;
	});
};

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

	${renderResponsiveSizes(buttonSizes)};

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
			onClick={props.onClickHandler}
			type='button'
			{...props}
			onClick={props.$to ? handleClick : props.onClick ? props.onClick : ""}
		></StyledButton>
	);
}

export default Button;

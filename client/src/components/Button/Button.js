import React, { useRef, useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { LoadingContext } from "../App/App";
import { renderResponsiveSizes } from "../../styles/global";

const buttonSizes = {
	mobileS: {
		padding: "0.7rem 1rem",
		fontSize: "1rem",
	},
	mobileM: {
		padding: "0.7rem 1rem",
		fontSize: "1rem",
	},
	mobileL: {
		padding: "0.9rem 1.3rem",
		fontSize: "1rem",
	},
	tablet: {
		padding: "1.4rem 2.3rem",
		fontSize: "1.2rem",
	},
	laptop: {
		padding: "2rem 4rem",
		fontSize: "1.4rem",
	},
	laptopL: {
		padding: "2rem 4rem",
		fontSize: "1.4rem",
	},
	desktop: {
		padding: "2rem 4rem",
		fontSize: "1.4rem",
	},
	desktopL: {
		padding: "2rem 4rem",
		fontSize: "1.4rem",
	},
};

const StyledRectangleButton = styled.button`
	background-color: ${({ theme, naked }) => theme.colors.red};
	color: ${({ theme, naked }) =>
		naked ? theme.colors.dark : theme.colors.light};
	font-family: "Haas";
	text-decoration: none;
	outline: none;
	border: 0px;
	font-size: 1.4rem;
	padding: ${({ naked }) => (naked ? "0" : "2rem 4rem")};
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

const StyledCircleButton = styled.button`
	background-color: ${({ theme, naked }) => theme.colors.red};
	color: ${({ theme, naked }) =>
		naked ? theme.colors.dark : theme.colors.light};
	font-family: "Haas";
	text-decoration: none;
	outline: none;
	border: 0px;
	font-size: 1.4rem;
	padding: 7.4rem 5rem;
	border-radius: 50%;
	display: flex;
	transition: 300ms ease;
	position: relative;

	a {
		margin: 0;
		padding: 0;
	}

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
		props.variant === "circle" ? (
			<StyledCircleButton>
				<StyledLink href={props.$href} {...props} />
			</StyledCircleButton>
		) : (
			<StyledLink href={props.$href} {...props}></StyledLink>
		)
	) : props.variant === "circle" ? (
		<StyledCircleButton
			className='Button'
			onClick={props.onClickHandler}
			type='button'
			{...props}
			onClick={props.$to ? handleClick : props.onClick ? props.onClick : ""}
		>
			{props.children}
		</StyledCircleButton>
	) : (
		<StyledRectangleButton
			className='Button'
			onClick={props.onClickHandler}
			type='button'
			{...props}
			onClick={props.$to ? handleClick : props.onClick ? props.onClick : ""}
		>
			{props.children}
		</StyledRectangleButton>
	);
}

export default Button;

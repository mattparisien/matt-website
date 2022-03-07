import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import { useTheme } from "styled-components";
import { useMediaQuery } from "@material-ui/core";

function RectangleButton({ children, onClick, bg, hoverBg, color, type }) {
	const theme = useTheme();
	const matches = useMediaQuery("(max-width: 900px");

	const RectangleButton = {
		textTransform: "none",
		color: theme.colors[color],
		fontFamily: "Neue Mtl",
		fontSize: "1rem",
		backgroundColor: theme.colors[bg],
		padding: "1.5rem 6rem",
		width: "auto",
		alignSelf: "flex-end",
		margin: "2rem 0",

		transition: "400ms ease",
		"&:hover": {
			backgroundColor: theme.colors[hoverBg],
			transform: "scale(1.2)",
		},
		"& svg": {
			width: matches ? "20px" : "40px",
			height: matches ? "20px" : "40px",
		},
	};

	return (
		<Button
			sx={RectangleButton}
			onClick={onClick}
			type={type ? type : "button"}
		>
			{children}
		</Button>
	);
}

export default RectangleButton;

import React from "react";
import { Grid } from "@mui/material";
import styled from "styled-components";
import { Box } from "@mui/material";

const Item = styled(Box)`
	padding: 2rem;
	background-color: blue;
`;

function ResponsiveGrid({ data }) {
	return (
		<Grid container spacing={2}>
			<Grid item xs={6} md={8}>
				<Item>xs=6 md=8</Item>
			</Grid>
			<Grid item xs={6} md={4}>
				<Item>xs=6 md=4</Item>
			</Grid>
			<Grid item xs={6} md={4}>
				<Item>xs=6 md=4</Item>
			</Grid>
			<Grid item xs={6} md={8}>
				<Item>xs=6 md=8</Item>
			</Grid>
		</Grid>
	);
}

export default ResponsiveGrid;

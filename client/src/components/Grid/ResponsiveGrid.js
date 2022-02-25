import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import styled from "styled-components";
import { Box } from "@mui/material";

const Item = styled(Box)`
	padding: 2rem;
	background-color: blue;
`;

function ResponsiveGrid({ items }) {
	const itemSizes = [
		{
			id: 1,
			xs: 6,
			md: 8,
			height: "5rem",
		},
		{
			id: 2,
			xs: 6,
			md: 4,
			height: "5rem",
		},
		{
			id: 3,
			xs: 6,
			md: 4,
			height: "5rem",
		},
		{
			id: 4,
			xs: 6,
			md: 8,
			height: "5rem",
		},
	];

	useEffect(() => {
		console.log(items);
	}, [items]);

	return (
		<Grid container spacing={2}>
			{items &&
				items.map((item, index) => {
					return (
						<Grid
							item
							xs={itemSizes[(index += 1)].xs}
							md={itemSizes[(index += 1)].md}
							key={index}
						>
							<Item sx={{height: "10rem"}}>
								{item.name}
							</Item>
						</Grid>
					);
				})}
		</Grid>
	);
}

export default ResponsiveGrid;

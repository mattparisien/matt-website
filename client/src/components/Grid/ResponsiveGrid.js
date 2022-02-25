import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import styled from "styled-components";
import { Box } from "@mui/material";

const Item = styled(Box)`
	background-color: blue;
`;

function ResponsiveGrid({ items }) {
	const itemSizes = [
		{
			id: 1,
			xs: 6,
			md: 8,
			height: "30rem",
		},
		{
			id: 2,
			xs: 6,
			md: 4,
			height: "30rem",
		},
		{
			id: 3,
			xs: 6,
			md: 4,
			height: "25rem",
		},
		{
			id: 4,
			xs: 6,
			md: 8,
			height: "10rem",
		},
	];

	const imageStyle = {
		objectFit: "cover",
		width: "100%",
		height: "100%",
	};

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
							sx={{ padding: 0 }}
						>
							<Item
								sx={{ position: "relative", padding: 0 }}
								height={itemSizes[index].height}
							>
								<img src={item.featureImage} style={imageStyle}></img>
							</Item>
						</Grid>
					);
				})}
		</Grid>
	);
}

export default ResponsiveGrid;

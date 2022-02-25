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
			xs: 6,
			md: 8,
			height: "50vw",
		},
		{
			xs: 6,
			md: 4,
			height: "20vw",
		},
		{
			xs: 6,
			md: 4,
			height: "10vw",
		},
		{
			xs: 6,
			md: 8,
			height: "50vw",
		},
		{
			xs: 6,
			md: 8,
			height: "10vw",
		},
		{
			xs: 6,
			md: 4,
			height: "10vw",
		},
		{
			xs: 6,
			md: 4,
			height: "10vw",
		},
	];

	const linkStyle = {
		height: "100%",
		width: "100%",
	};

	return (
		<Grid container spacing={2}>
			{items &&
				items.slice(0, 6).map((item, index) => {
					return (
						<Grid
							item
							xs={itemSizes[index].md}
							md={itemSizes[index].md}
							key={index}
							sx={{ padding: 0 }}
						>
							<Item
								height={itemSizes[index].height}
								sx={{
									backgroundImage: `url(${item.featureImage})`,
									backgroundPosition: "center",
									backgroundSize: "cover",
								}}
							>
								<a href={item.url} style={linkStyle}></a>
							</Item>
						</Grid>
					);
				})}
		</Grid>
	);
}

export default ResponsiveGrid;

import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import styled from "styled-components";
import { Box } from "@mui/material";

const Item = styled(Box)`
	background-color: blue;
	min-height: 20vw;
`;

function ResponsiveGrid({ items }) {
	const itemSizes = [
		{
			column: "span 6",
			row: "span 2",
		},
		{
			column: "span 6",
		},
		{
			column: "span 6",
		},
		{
			column: "span 8",
		},
		{
			column: "span 4",
		},
		{
			column: "span 8",
		},
		{
			column: "span 4",
		},
	];

	const linkStyle = {
		height: "100%",
		width: "100%",
	};

	return (
		<Box
			display='grid'
			gridTemplateColumns='repeat(12, 1fr)'
			gridTemplateRows='repeat(6, 1fr)'
			gap={2}
		>
			{items &&
				items.slice(0, 6).map((item, index) => {
					return (
						<Box
							gridColumn={itemSizes[index].column}
							gridRow={itemSizes[index].row}
						>
							<Item
								sx={{
									height: "100%",
									backgroundImage: `url(${item.featureImage})`,
									backgroundPosition: "center",
									backgroundSize: "cover",
								}}
							>
								<a href={item.url} style={linkStyle}></a>
							</Item>
						</Box>
					);
				})}
		</Box>
	);
}

export default ResponsiveGrid;

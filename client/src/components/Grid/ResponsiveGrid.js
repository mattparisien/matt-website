import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import styled from "styled-components";
import { Box } from "@mui/material";
import { CircularProgress } from "@mui/material";

const Item = styled(Box)`
	background-color: blue;
	min-height: 20vw;
	background-color: ${({ theme }) => theme.colors.grey};
`;

const LoadingOverlay = styled(Box)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.colors.grey};
	display: flex;
	align-items: center;
	justify-content: center;
`;

function ResponsiveGrid({ items, isItemLoading }) {
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
			column: "span 12",
			row: "span 2",
		},
		{
			column: "span 6",
			row: "span 1",
		},
		{
			column: "span 6",
			row: "span 2",
		},
		{
			column: "span 6",
			row: "span 2",
		},
		{
			column: "span 6",
			row: "span 2",
		},
	];

	const linkStyle = {
		height: "100%",
		width: "100%",
	};

	const renderGridItems = () => {
		return (
			items &&
			items.data.slice(0, 10).map((item, index) => {
				return (
					<Box
						gridColumn={itemSizes[index].column}
						gridRow={itemSizes[index].row}
						sx={{ position: "relative" }}
						key={index}
					>
						<Item
							sx={{
								height: "100%",
								backgroundImage: `url(${item.src})`,
								backgroundPosition: "center",
								backgroundSize: "cover",
							}}
						>
							<a
								style={{ display: "block" }}
								href={item.url}
								style={linkStyle}
							></a>
						</Item>
					</Box>
				);
			})
		);
	};

	return (
		<Box
			display='grid'
			gridTemplateColumns='repeat(12, 1fr)'
			gridTemplateRows='repeat(8, 1fr)'
			gap={2}
		>
			{renderGridItems()}
		</Box>
	);
}

export default ResponsiveGrid;

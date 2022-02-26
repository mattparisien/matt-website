import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import styled from "styled-components";
import { Box } from "@mui/material";
import { CircularProgress } from "@mui/material";
import { useProgressiveImage } from "../../helpers/hooks/useProgressiveImage";

const Item = styled(Box)`
	background-color: blue;
	min-height: 20vw;
	background-color: ${({ theme }) => theme.colors.grey};
	overflow: hidden;

	a {
		width: 100%;
		height: 100%;
		position: absolute;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
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
	const sourceLoaded = useProgressiveImage(items);

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

	const divideArray = (arr, size) => {
		var myArray = [];
		for (var i = 0; i < arr.length; i += size) {
			myArray.push(arr.slice(i, i + size));
		}
		return myArray;
	};

	const renderGridItems = () => {
		if (items) {
			const divided = divideArray(items.data, 10);

			return divided.map((subArray, index) => {
				return (
					<Box
						display='grid'
						gridTemplateColumns='repeat(12, 1fr)'
						gridAutoRows={`50vmin`}
						gap={2}
						className={`ResponsiveGrid ResponsiveGrid__${index + 1}`}
						sx={{ marginBottom: 2 }}
					>
						{subArray.map((item, i) => {
							return (
								<Box
									gridColumn={itemSizes[i].column}
									gridRow={itemSizes[i].row}
									sx={{ position: "relative" }}
									key={i}
								>
									<Item
										sx={{
											height: "100%",
											backgroundPosition: "center",
											backgroundSize: "cover",
										}}
									>
										{sourceLoaded && sourceLoaded[item.id] ? (
											<a href={item.url} style={linkStyle}>
												<img src={sourceLoaded[item.id]}></img>
											</a>
										) : (
											<CircularProgress color="inherit"/>
										)}
									</Item>
								</Box>
							);
						})}
					</Box>
				);
			});
		}
	};

	return <>{renderGridItems()}</>;
}

export default ResponsiveGrid;

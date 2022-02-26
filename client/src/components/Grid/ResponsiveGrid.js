import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { Box } from "@mui/material";
import { CircularProgress } from "@mui/material";
import { useProgressiveImage } from "../../helpers/hooks/useProgressiveImage";
import { device } from "../../styles/breakpoints";

const Item = styled(Box)`
	background-color: blue;
	min-height: 20vw;
	background-color: ${({ theme }) => theme.colors.grey};
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;

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

	&:hover .title-overlay {
		opacity: 1;
	}

	.title-overlay {
		position: absolute;
		top: 50%;
		left: 50%;
		font-family: Haas;
		transform: translate(-50%, -50%);
		font-size: 4vw;
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: ${({ theme }) => theme.colors.light};
		z-index: 1;
		transition: 300ms ease;
		opacity: 0;
		text-transform: capitalize;

		@media ${device.tablet} {
			font-size: 5rem;
		}

		&::after {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: black;
			z-index: -1;
			opacity: 0.4;
		}
	}
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
			console.log(divided);
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
											<a
												href={item.url || item.href}
												style={linkStyle}
												target='_blank'
											>
												<img src={sourceLoaded[item.id]}></img>
												{item.name && (
													<Box className='title-overlay'>{item.name}</Box>
												)}
											</a>
										) : (
											<CircularProgress color='inherit' />
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

import { useMediaQuery } from "@material-ui/core";
import { Box, CircularProgress } from "@mui/material";
import gsap from "gsap";
import $ from "jquery";
import React, { useEffect, useState } from "react";
import InView from "react-intersection-observer";
import styled from "styled-components";
import { useProgressiveImage } from "../../helpers/hooks/useProgressiveImage";
import { device } from "../../styles/breakpoints";
import { useTheme } from "styled-components";

const Item = styled(Box)`
	background-color: blue;
	background-color: ${({ theme }) => theme.colors.grey};
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	transform: translateY(300px);
	opacity: 0;

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
		
		transform: translate(-50%, -50%);
		font-size: 4vw;
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: ${({ theme }) => theme.colors.light};
		z-index: 1;

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
			background-color: white;
			z-index: -1;
			opacity: 0.4;
		}
	}
`;

function ResponsiveGrid({ items, isItemLoading, hoverCb }) {
	const theme = useTheme();
	const sourceLoaded = useProgressiveImage(items);
	const matches = useMediaQuery("(max-width: 800px)");

	const [intersecting, setIntersecting] = useState(null);

	const linkStyle = {
		height: "100%",
		width: "100%",

		display: "block",
	};

	const gridContainer = {
		display: "flex",
		flexDirection: matches ? "column" : "row",
		justifyContent: "center",
		flexWrap: "wrap",
		gap: 2,
	};

	const gridItem = {
		boxSizing: "border-box",
		width: matches ? "100%" : "48%",
		height: matches ? "120vw" : "50vw",
		maxHeight: "800px",

		position: "relative",
		overflow: "hidden",

		"&:hover .image-wrapper": {
			transform: "translate(-50%, -50%)scale(0.9)",
		},

		"&:hover .title-overlay::after": {
			transform: "scaleX(1)",
		},
	};

	const imageWrapper = {
		width: "100%",
		height: "50%",
		overflow: "hidden",
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)scale(0.8)",
		transition: "800ms ease-in-out",
	};

	const imageStyle = {
		width: "100%",
		height: "100%",
		objectFit: "cover",
		objectPosition: "left",
	};

	const background = itemId => {
		console.log(sourceLoaded);
		const bg = {
			position: "absolute",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			zIndex: -1,
			backgroundImage: `url(${sourceLoaded[itemId]})`,
			backgroundPosition: "center",
			backgroundSize: "cover",
			filter: "blur(50px)",
			transform: "scale(1.7)",
			transition: "800ms ease-in-out",
		};
		return bg;
	};

	const title = {
		textTransform: "uppercase",
		fontSize: "1.3rem",
		position: "relative",
		display: "inline",
		"&::after": {
			position: "absolute",
			left: 0,
			bottom: 0,
			content: '""',
			backgroundColor: theme.colors.light,
			height: "1px",
			width: "100%",
			transformOrigin: "left",
			transform: "scaleX(0)",
			transition: "800ms ease-in-out",
		},
	};

	const description = {
		position: "absolute",
		bottom: 0,
		right: 0,
		width: matches ? "100%" : "50%",
		textIndent: "30%",
		textTransform: "uppercase",
		fontSize: "0.8rem",
	};

	const renderGridItems = () => {
		if (items) {
			return (
				<Box spacing={2} sx={gridContainer} pb={5}>
					{items.data.map((item, i) => {
						return (
							<Box
								sx={gridItem}
								p={4}
								onMouseEnter={hoverCb}
								onMouseLeave={hoverCb}
							>
								<InView
									as='div'
									style={{ width: "100%", height: "100%" }}
									onChange={(inView, entry) =>
										inView && setIntersecting(entry.target)
									}
								>
									<Box id={i} sx={{ height: "100%" }}>
										{sourceLoaded && sourceLoaded[item.id] ? (
											<a
												href={item.url || item.href}
												style={linkStyle}
												target='_blank'
											>
												<Box className='image-wrapper' sx={imageWrapper}>
													<img
														src={sourceLoaded[item.id]}
														style={imageStyle}
													></img>
												</Box>
												{item.name && (
													<Box className='title-overlay' sx={title}>
														{item.name}
													</Box>
												)}
												{item.description && (
													<Box className='description-overlay' sx={description} p={4}>
														{item.description.substr(
															0,
															item.description.indexOf(".") + 1
														)}
													</Box>
												)}
											</a>
										) : (
											<CircularProgress color='inherit' />
										)}
									</Box>
									<Box
										className='background'
										sx={sourceLoaded ? () => background(item.id) : ""}
									></Box>
								</InView>
							</Box>
						);
					})}
				</Box>
			);
		}
	};

	return <>{renderGridItems()}</>;
}

export default ResponsiveGrid;

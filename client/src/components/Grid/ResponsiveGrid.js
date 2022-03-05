import { Box, CircularProgress, stepClasses } from "@mui/material";
import gsap from "gsap";
import $ from "jquery";
import React, { useEffect, useState } from "react";
import InView from "react-intersection-observer";
import styled from "styled-components";
import { useProgressiveImage } from "../../helpers/hooks/useProgressiveImage";
import { device } from "../../styles/breakpoints";
import { Grid } from "@mui/material";
import { useMediaQuery } from "@material-ui/core";

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

function ResponsiveGrid({ items, isItemLoading, mouseEnterCb }) {
	const sourceLoaded = useProgressiveImage(items);
	const matches = useMediaQuery("(max-width: 600px)");

	const [intersecting, setIntersecting] = useState(null);
	const [hasFadeUp, setHasFadeUp] = useState(null);

	useEffect(() => {
		if (intersecting) {
			gsap.to($(intersecting).children(), {
				y: 0,
				opacity: 1,
				duration: 0.5,
				stagger: 0.2,
			});
			setHasFadeUp(true);
		}
	}, [intersecting, hasFadeUp]);

	const linkStyle = {
		height: "100%",
		width: "100%",

		display: "block",
	};

	const gridContainer = {
		display: "flex",
		flexDirection: matches ? "column" : "row",
		justifyContent: "center",
		gap: 2,
	};

	const gridItem = {
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
		transition: "800ms ease",
	};

	const imageStyle = {
		width: "100%",
		height: "100%",
		objectFit: "cover",
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
		};
		return bg;
	};

	const title = {
		textTransform: "uppercase",
		fontSize: "1.8rem",
		position: "relative",
		display: "inline",
		"&::after": {
			position: "absolute",
			left: 0,
			bottom: 0,
			content: '""',
			backgroundColor: "black",
			height: "1px",
			width: "100%",
			transformOrigin: "left",
			transform: "scaleX(0)",
			transition: "800ms ease",
		},
	};

	const renderGridItems = () => {
		if (items) {
			return (
				<Box spacing={2} sx={gridContainer}>
					{items.data.map((item, i) => {
						return (
							<Box
								sx={gridItem}
								p={4}
								onMouseEnter={mouseEnterCb}
								onMouseLeave={mouseEnterCb}
								
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

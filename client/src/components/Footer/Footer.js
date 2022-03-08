import { Box, ListItem, useMediaQuery } from "@mui/material";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { useTheme } from "styled-components";
import { deviceSize } from "../../styles/breakpoints";
import Layout from "../Containers/Layout";
import Star from "../Star/Star";
import InView from "react-intersection-observer";
import $ from "jquery";
import { keyframes } from "@mui/system";

const socialLinks = [
	{
		name: "LinkedIn",
		path: "/",
	},
	{
		name: "Facebook",
		path: "/",
	},
	{
		name: "Instagram",
		path: "/",
	},
	{
		name: "Github",
		path: "/",
	},
];

const gradientAnim = keyframes`
0% {
	transform: translateY(0)
}
100% {
	transform: translateY(-80%)
}
`;

function Footer(props, ref) {
	const [starColor, setStarColor] = useState("light");
	const footerStyle = {
		backgroundColor: props.backgroundColor,
		color: props.foregroundColor,
	};
	const theme = useTheme();
	const laptop = useMediaQuery(`(max-width: ${deviceSize.laptop}px)`);
	const tablet = useMediaQuery(`(max-width: ${deviceSize.tablet}px)`);
	const footerRef = useRef(null);

	useEffect(() => {
		if (theme) {
			const colorNames = Object.keys(theme.colors);

			for (let i = 0; i < colorNames.length; i++) {
				if (
					colorNames[i] === "dark" ||
					colorNames[i] === "dark2" ||
					colorNames[i] === "lighterDark"
				) {
					colorNames.splice(i, 1);
				}
			}

			let counter = 0;
			setInterval(() => {
				setStarColor(colorNames[counter]);

				if (counter >= colorNames.length - 1) {
					counter = 0;
				} else {
					counter++;
				}
			}, 3000);
		}
	}, []);

	const lineVertical = {
		width: "1px",
		height: "100%",
		backgroundColor: theme.colors.light,
	};

	const lineHorizontal = {
		width: "100%",
		height: "1px",
		backgroundColor: theme.colors.light,
	};

	const lineHorizontalCentered = {
		width: "100%",
		height: "1px",
		backgroundColor: theme.colors.light,
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
	};

	const lineHorizontalTop = {
		width: "100%",
		height: "1px",
		backgroundColor: theme.colors.light,
		position: "absolute",
		top: 0,
		left: 0,
	};

	const lineVerticalCentered = {
		width: "1px",
		height: "100%",

		backgroundColor: theme.colors.light,
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
	};

	const lineVerticalLeft = {
		width: "1px",
		height: "100%",
		backgroundColor: theme.colors.light,
		position: "absolute",
		top: 0,
		left: 0,
	};

	const gradientWrapper = {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "110%",

		zIndex: -1,
		borderRadius: "50%",
		filter: "blur(5vw)",
		overflow: "hidden",
	};

	const gradient = {
		height: "300%",
		width: "100%",
		background: theme.colors.gradient,
		animation: `${gradientAnim} 60s linear alternate-reverse`,
	};

	return (
		<footer className='Footer'>
			<Layout
				bg='dark'
				style={footerStyle}
				ref={(footerRef, ref)}
				height={tablet ? "90vw" : "60vw"}
				fullbleed
			>
				<Box sx={lineHorizontal}></Box>
				<Box
					display='flex'
					justifyContent='center'
					alignItems='center'
					flexDirection={tablet ? "column" : "row"}
					sx={{ textTransform: "uppercase", height: "100%" }}
				>
					<Box
						sx={{
							height: tablet ? "40%" : "100%",
							width: tablet ? "100%" : "40%",
						}}
					>
						<Box sx={{ height: "50%", position: "relative" }}>
							<Star height='100%' color={starColor} strokeWidth={"2px"} />
						</Box>
					</Box>

					<Box
						className='social-links-list'
						component='ul'
						sx={{
							margin: 0,
							padding: 0,
							display: "flex",
							height: tablet ? "60%" : "100%",
							width: tablet ? "100%" : "60%",
							flexWrap: "wrap",
							alignItems: "center",
							justifyContent: "center",
							position: "relative",
						}}
					>
						<Line sx={lineHorizontalCentered}></Line>
						<Line sx={lineVerticalCentered}></Line>
						{!tablet && <Line sx={lineVerticalLeft}></Line>}
						{tablet && <Line sx={lineHorizontalTop}></Line>}
						{socialLinks.map((link, i) => {
							return (
								<ListItem
									sx={{
										padding: 0,

										width: "50%",
										fontSize: laptop ? "2rem" : "4rem",
										textTransform: "capitalize",
										fontFamily: "Neue Mtl",
										textAlign: "center",
										height: "50%",
										"&:hover a": {
											backgroundColor: theme.colors.light,
											color: theme.colors.dark,
										},
										"& a": {
											display: "flex",
											width: "100%",
											height: "100%",
											alignItems: "center",
											justifyContent: "center",
											transition: "400ms ease",
										},
									}}
								>
									<a href={link.path} target='_blank' rel='noreferrer'>
										{link.name}
									</a>
								</ListItem>
							);
						})}
					</Box>
				</Box>
			</Layout>
		</footer>
	);
}

const Line = ({ sx }) => {
	const [intersecting, setIntersecting] = useState(false);

	useEffect(() => {
		if (intersecting) {
			$(intersecting).find("");
		}
	}, [intersecting]);

	return (
		<InView
			className='line-view-wrapper'
			onChange={(inView, entry) => inView && setIntersecting(entry.target)}
		>
			<Box sx={sx} className='line'></Box>
		</InView>
	);
};

export default forwardRef(Footer);

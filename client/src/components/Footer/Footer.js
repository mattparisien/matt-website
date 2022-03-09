import { Box, ListItem, useMediaQuery } from "@mui/material";
import { keyframes } from "@mui/system";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { useTheme } from "styled-components";
import { deviceSize } from "../../styles/breakpoints";
import Layout from "../Containers/Layout";
import Star from "../Star/Star";
import { useInView } from "react-intersection-observer";

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

const horizontalLineAnim = `
	0% {
		transform: scaleX(0.001)
	}

	100% {
		transform: scaleX(1)
	}
`;

const verticalLineAnim = `
	0% {
		transform: scaleY(0.001)
	}

	100% {
		transform: scaleY(1)
	}
`;

function Footer(props) {
	const [starColor, setStarColor] = useState("light");
	const footerStyle = {
		backgroundColor: props.backgroundColor,
		color: props.foregroundColor,
	};
	const theme = useTheme();
	const laptop = useMediaQuery(`(max-width: ${deviceSize.laptop}px)`);
	const tablet = useMediaQuery(`(max-width: ${deviceSize.tablet}px)`);
	const footerRef = useRef(null);
	const [ref, inView, entry] = useInView({
		threshold: 0.5,
	});

	useEffect(() => {
		console.log(inView);

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
	}, [inView]);

	const lineHorizontal = {
		width: "100%",
		height: "1px",
		backgroundColor: theme.colors.light,
		transformOrigin: "center",
		transform: "scaleX(0.001)",
		transform: !inView ? "scaleX(0.001)" : "scaleX(1)",
		transition: "1s ease",
		transitionDelay: 0.1
	};

	const lineHorizontalCentered = {
		width: "100%",
		height: "1px",
		backgroundColor: theme.colors.light,
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: `translate(-50%, -50%)${
			!inView ? "scaleX(0.001)" : "scaleX(1)"
		}`,
		transformOrigin: "center",

		transition: "1s ease",
		transitionDelay: 0.2
	};

	const lineHorizontalTop = {
		width: "100%",
		height: "1px",
		backgroundColor: theme.colors.light,
		transformOrigin: "center",
		position: "absolute",
		top: 0,
		left: 0,
		transform: !inView ? "scaleX(0.001)" : "scaleX(1)",
		transition: "1s ease",
		transitionDelay: 0.3
	};

	const lineVerticalCentered = {
		width: "1px",
		height: "100%",
		transformOrigin: "center",
		backgroundColor: theme.colors.light,
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: `translate(-50%, -50%)${
			!inView ? "scaleY(0.001)" : "scaleY(1)"
		}`,

		transition: "1s ease",
		transitionDelay: 0.4
	};

	const lineVerticalLeft = {
		width: "1px",
		height: "100%",
		backgroundColor: theme.colors.light,
		position: "absolute",
		transformOrigin: "center",
		top: 0,
		left: 0,
		transform: !inView ? "scaleY(0.001)" : "scaleY(1)",
		transition: "1s ease",
		transitionDelay: 0.5
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
				height={tablet ? "90vw" : "60vw"}
				fullbleed
			>
				<Box sx={lineHorizontal}></Box>
				<Box
					ref={ref}
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
	return <Box sx={sx} className='line'></Box>;
};

export default Footer;

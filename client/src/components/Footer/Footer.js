import { Box, ListItem } from "@mui/material";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { useTheme } from "styled-components";
import Layout from "../Containers/Layout";
import Star from "../Star/Star";
import styled from "styled-components";

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

function Footer(props, ref) {
	const [starColor, setStarColor] = useState("light");
	const footerStyle = {
		backgroundColor: props.backgroundColor,
		color: props.foregroundColor,
	};
	const theme = useTheme();

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

	const lineVerticalCentered = {
		width: "1px",
		height: "100%",

		backgroundColor: theme.colors.light,
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
	};

	return (
		<footer className='Footer'>
			<Layout
				bg='dark'
				style={footerStyle}
				ref={(footerRef, ref)}
				height='80vh'
				fullbleed
			>
				<Box sx={lineHorizontal}></Box>
				<Box
					display='flex'
					justifyContent='center'
					alignItems='center'
					sx={{ textTransform: "uppercase", height: "100%" }}
				>
					<Box sx={{ height: "100%", width: "50%"}} >
						<Box sx={{height: "50%"}}>
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
							height: "100%",
							width: "50%",
							flexWrap: "wrap",
							alignItems: "center",
							justifyContent: "center",
							position: "relative",
						}}
					>
						<Box sx={lineHorizontalCentered}></Box>
						<Box sx={lineVerticalCentered}></Box>
						{socialLinks.map((link, i) => {
							return (
								<ListItem
									sx={{
										padding: 0,

										width: "50%",
										fontSize: "4rem",
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
											transition: "400ms ease"
										},
									}}
								>
									<a href={link.path}>{link.name}</a>
								</ListItem>
							);
						})}
					</Box>
				</Box>
			</Layout>
		</footer>
	);
}

export default forwardRef(Footer);

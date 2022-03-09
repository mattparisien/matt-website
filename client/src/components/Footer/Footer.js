import { Box, ListItem, useMediaQuery } from "@mui/material";
import gsap from "gsap";
import $ from "jquery";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useTheme } from "styled-components";
import { deviceSize } from "../../styles/breakpoints";
import Layout from "../Containers/Layout";
import Star from "../Star/Star";

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

// const gradientAnim = keyframes`
// 0% {
// 	transform: translateY(0)
// }
// 100% {
// 	transform: translateY(-80%)
// }
// `;

function Footer(props) {
	const [starColor, setStarColor] = useState("light");

	const footerStyle = {
		backgroundColor: props.backgroundColor,
		color: props.foregroundColor,
	};
	const theme = useTheme();
	const laptop = useMediaQuery(`(max-width: ${deviceSize.laptop}px)`);
	const tablet = useMediaQuery(`(max-width: ${deviceSize.tablet}px)`);

	const [ref, inView] = useInView({
		threshold: 0.5,
	});
	const linkRefs = useRef([]);
	linkRefs.current = [];
	// const { splitText } = useSplit(linkRefs.current, {
	// 	type: "chars",
	// 	charsClass: "char",
	// });

	const addToLinkRefs = el => {
		if (el && !linkRefs.current.includes(el)) {
			linkRefs.current.push(el);
		}
	};

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

		if (inView && linkRefs.current) {
			for (let i = 0; i < linkRefs.current.length; i++) {
				let tl = gsap.timeline();

				tl.to(
					$(linkRefs.current).find(".char"),
					{
						y: 0,
						opacity: 1,
						duration: 0.9,
						stagger: 0.05,
						ease: "expo.inOut",
					},
					0
				);
			}
		}
	}, [inView, linkRefs, theme]);

	const lineHorizontal = {
		width: "100%",
		height: "1px",
		backgroundColor: theme.colors.light,
		transformOrigin: "center",
		transform: !inView ? "scaleX(0.001)" : "scaleX(1)",
		transition: "1s ease",
		transitionDelay: 0.1,
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
		transitionDelay: 0.2,
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
		transitionDelay: 0.3,
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
		transitionDelay: 0.4,
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
		transitionDelay: 0.5,
	};

	// const gradientWrapper = {
	// 	position: "absolute",
	// 	top: 0,
	// 	left: 0,
	// 	width: "100%",
	// 	height: "110%",

	// 	zIndex: -1,
	// 	borderRadius: "50%",
	// 	filter: "blur(5vw)",
	// 	overflow: "hidden",
	// };

	// const gradient = {
	// 	height: "300%",
	// 	width: "100%",
	// 	background: theme.colors.gradient,
	// 	animation: `${gradientAnim} 60s linear alternate-reverse`,
	// };

	const footerLink = {
		textTransform: "none",
		overflow: "hidden",
		"& .char": {
			transform: `translateY(100%)`,
			opacity: 0,
		},
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
							{props.data && (
								<Box
									className='contact-info-wrapper'
									sx={{
										textTransform: "none",
										fontSize: "0.8rem",
										width: "200px",
									}}
								>
									<Box className='name'>Matthew Parisien</Box>
									<Box className='phone' sx={{ marginTop: 1 }}>
										{props.data.Phone}
									</Box>
									<Box className='email' sx={{ marginTop: 1 }}>
										{props.data.Email}
									</Box>
									<Box className='greeting' sx={{ marginTop: 1 }}>
										{props.data.Greeting}
									</Box>
								</Box>
							)}
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
									key={i}
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
									<Box
										component='a'
										href={link.path}
										target='_blank'
										rel='noreferrer'
										ref={addToLinkRefs}
										sx={footerLink}
									>
										<Box component='span' sx={{ overflow: "hidden" }}>
											{link.name}
										</Box>
									</Box>
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

import { Box } from "@mui/system";
import gsap from "gsap";
import React, { useRef } from "react";
import styled from "styled-components";
import Layout from "../Containers/Layout";
import Line from "../Line/Line";
import ParagraphLayout from "../Paragraph/ParagraphLayout";
import CircleButton from "../Button/CircleButton";
import { useTheme } from "styled-components";
import { Container } from "@mui/material";

const GradientBg = styled.div`
	width: 100%;
	height: 550%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
	animation-direction: reverse-alternate;
`;

function SplashPage(props) {
	const theme = useTheme();
	const button = useRef(null);
	const lines = useRef([]);
	lines.current = [];
	const accentRefs = useRef([]);
	accentRefs.current = [];

	const containerStyle = {
		height: "100%",
		width: "100%",
		position: "relative",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		"& .hero-word": {
			fontFamily: "Brutal",
			textTransform: "uppercase",
			fontSize: "20vw",
			letterSpacing: "-1.2vw",
		},
	};

	const onCompleteCb = () => {
		gsap.to(button.current, {
			y: 0,
			ease: "expo.inOut",
			duration: 2,
		});
	};

	const buttonWrapper = {
		position: "absolute",
		bottom: 0,
		right: 0,
	};

	return (
		<Layout bg='light'>
			<Box sx={containerStyle}>
				<ParagraphLayout variant={1} indent onCompleteCallback={onCompleteCb}>
					Craft, code, and smile. I'm a full-stack developer & graphic designer
					based in the beautiful city of Montréal. Previously at Lighthouse
					Labs, I'm obsessed with digital products and motivated in modelling
					great user experiences. Website coming soon.
				</ParagraphLayout>
				<Line color='dark' />
				<Box sx={buttonWrapper} className='button-wrapper'>
					<CircleButton
						onClick={() =>
							(window.location =
								"mailto:hello@matthewparisien.com?subject=Let's talk.")
						}
					>
						<svg
							width='37'
							height='37'
							viewBox='0 0 37 37'
							fill={theme.colors.light}
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M0 29.5V37H7.5L29.62 14.88L22.12 7.38L0 29.5ZM35.42 9.08C36.2 8.3 36.2 7.04 35.42 6.26L30.74 1.58C29.96 0.8 28.7 0.8 27.92 1.58L24.26 5.24L31.76 12.74L35.42 9.08V9.08Z'
								fill={theme.colors.light}
							/>
						</svg>
					</CircleButton>
				</Box>
			</Box>

			<GradientBg className='gradient-bg'></GradientBg>
		</Layout>
	);
}

export default SplashPage;

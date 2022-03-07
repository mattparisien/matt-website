import { Box } from "@mui/system";
import gsap from "gsap";
import React, { useRef } from "react";
import styled from "styled-components";
import Layout from "../Containers/Layout";
import Line from "../Line/Line";
import ParagraphLayout from "../Paragraph/ParagraphLayout";

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
			</Box>

			<GradientBg className='gradient-bg'></GradientBg>
		</Layout>
	);
}

export default SplashPage;

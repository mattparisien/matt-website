import { Box } from "@mui/system";
import React, { useRef } from "react";
import styled from "styled-components";
import Layout from "../Containers/Layout";
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


	const lines = useRef([]);
	lines.current = [];
	const accentRefs = useRef([]);
	accentRefs.current = [];

	const containerStyle = {
		height: "100%",
		width: "100%",
		position: "relative",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	};

	return (
		<Layout bg='light'>
			<Box sx={containerStyle}>
				<ParagraphLayout variant={1} indent>
					Craft, code, and smile. I'm a full-stack software developer & graphic
					designer based in the beautiful city of Montréal. Previously at
					Lighthouse Labs, I'm obsessed with digital products and passionate
					about crafting great user experiences.
				</ParagraphLayout>
			</Box>
			<GradientBg className='gradient-bg'></GradientBg>
		</Layout>
	);
}

export default SplashPage;

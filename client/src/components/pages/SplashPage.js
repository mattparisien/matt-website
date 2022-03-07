import { Box } from "@mui/system";
import gsap from "gsap";
import React, { useRef } from "react";
import styled from "styled-components";
import { deviceSize } from "../../styles/breakpoints";
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

const Button = styled.button`
	
	border: 0px;
	position: relative;
	color: white;
	padding: 2rem 4rem;
	margin: 1rem 0;
	transform: translateY(150%);
	background: transparent;
	font-size: 1rem;

	background-color: ${({ theme }) => theme.colors.red};
	overflow: hidden;

	&:hover .circle {
		transform: scale(1.6)translateY(0);
	}

	.circle {
		position: absolute;
		top: 0;
		left: 0;
		transition: 800ms ease;
		width: 100%;
		height: 250%;
		border-radius: 50%;
		background-color: ${({ theme }) => theme.colors.purple};
		z-index: -1;
		transform: translateY(100%);
	}

	@media (max-width: ${deviceSize.mobileL}px) {
		padding: 1.4rem 2.2rem;
		font-size: 0.8rem;
	}
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
	};

	const onCompleteCb = () => {
		gsap.to(button.current, {
			y: 0,
			ease: 'expo.inOut',
			duration: 2
		})
	};

	return (
		<Layout bg='light'>
			<Box sx={containerStyle}>
				<ParagraphLayout variant={1} indent onCompleteCallback={onCompleteCb}>
					Craft, code, and smile. I'm a full-stack{" "}
					<span className='accent'>
						software <span className='accent-bg'></span>{" "}
					</span>{" "}
					developer & graphic designer based in the beautiful city of{" "}
					<span className='accent'>
						Montréal <span className='accent-bg'></span>{" "}
					</span>
					. Previously at Lighthouse Labs, I'm obsessed with digital products
					and passionate about crafting great user{" "}
					<span className='accent'>
						experiences. <span className='accent-bg'></span>{" "}
					</span>
				</ParagraphLayout>
				<div className='button-wrapper' style={{alignSelf: "start", overflow: "hidden"}}>
					<Button ref={button}>
						Get in touch
						<div className='circle'></div>
					</Button>
				</div>
			</Box>

			<GradientBg className='gradient-bg'></GradientBg>
		</Layout>
	);
}

export default SplashPage;

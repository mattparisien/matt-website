import { Box } from "@mui/system";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Layout from "../Containers/Layout";
import Line from "../Line/Line";
import ParagraphLayout from "../Paragraph/ParagraphLayout";
import SocialList from "../Lists/SocialList";
import { Instagram, LinkedIn, GitHub } from "@material-ui/icons";

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

	const socialList = [
		{
			name: "Instagram",
			path: "https://instagram.com/matt.parisien",
			component: Instagram,
		},
		{
			name: "LinkedIn",
			path: "https://www.linkedin.com/in/matthew-parisien-365572130/",
			component: LinkedIn,
		},
		{
			name: "Github",
			path: "https://github.com/mattparisien/matt-website",
			component: GitHub,
		},
	];

	const listItems = useRef([]);
	listItems.current = [];

	const addToRefs = el => {
		if (el && !listItems.current.includes(el)) {
			listItems.current.push(el);
		}
	};

	useEffect(() => {
		if (listItems) {
			gsap.set(listItems.current, { y: "100%", opacity: 0 });
			setTimeout(() => {
				gsap.to(listItems.current, {
					y: 0,
					opacity: 2,
					stagger: 0.1,
					ease: "power3.out",
				});
			}, 1400);
		}
	}, [listItems]);

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
				<Box
					component='ul'
					sx={{
						alignSelf: "start",
						marginTop: 0,
						display: "flex",
						width: "280px",
						justifyContent: "space-between",
						paddingLeft: 0,
						fontFamily: "Neue Mtl",
					}}
				>
					{socialList.map((item, i) => {
						return (
							<>
								<li key={i} ref={addToRefs}>
									<a href={item.path} target='_blank' rel='noreferrer'>
										{item.name}
									</a>
								</li>
							</>
						);
					})}
				</Box>
			</Box>

			<GradientBg className='gradient-bg'></GradientBg>
		</Layout>
	);
}

export default SplashPage;

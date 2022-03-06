import React, { useEffect, useRef, useState } from "react";
import Layout from "../Containers/Layout";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import useSplit from "../../helpers/hooks/useSplit";
import gsap from "gsap";
import $ from "jquery";
import { useMediaQuery } from "@material-ui/core";

function SplashPage(props) {
	const maxFontSize = useMediaQuery("(min-width: 1600px)");
	const mobileFontSize = useMediaQuery("(max-width: 800px)");

	const headingStyle = {
		fontFamily: "Brutal",
		textAlign: "center",
		fontSize: maxFontSize ? "7.5rem" : mobileFontSize? "8vw" : "7vw",
		margin: 0,
		position: "absolute",
		bottom: 0,
		left: "50%",
		width: "100%",
		transform: "translateX(-50%)",
	};

	const heading = useRef(null);
	const timeline = useRef(gsap.timeline());
	const [animationComplete, setAnimationComplete] = useState(false);

	const { splitText } = useSplit([heading.current], {
		type: "lines, words, chars",
		linesClass: "line",
		charsClass: "char",
	});

	const containerStyle = {
		height: "100%",
		width: "100%",
		position: "relative",
	};

	useEffect(() => {
		if (splitText && splitText.chars) {
			let delay = 0;

			for (let i = 0; i < splitText.lines.length; i++) {
				delay += 0.5;
				gsap.to(
					$(splitText.lines[i]).find(".char"),
					{
						ease: "expo.inOut",
						duration: 2,
						y: 0,
						ease: "expo.inOut",
						stagger: 0.03,
						onComplete: () => {
							if (i === splitText.lines.length - 1) {
								setAnimationComplete(true);
							}
						},
					},
					delay
				);
			}
		}
	}, [splitText]);

	useEffect(() => {
		animationComplete && props.showHeader();
	}, [animationComplete]);

	return (
		<Layout bg='dark'>
			<Box sx={containerStyle}>
				<Typography
					ref={heading}
					variant={"h2"}
					component='h2'
					className='splash-heading'
					style={headingStyle}
				>
					Full stack developer & graphic designer based in the beautiful city of
					Montréal
				</Typography>
			</Box>
		</Layout>
	);
}

export default SplashPage;

import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import useHeaderSpacing from "../../../helpers/hooks/useHeaderSpacing";
import useSplit from "../../../helpers/hooks/useSplit";
import Layout from "../../Containers/Layout";
import Heading from "../../Heading/Heading";

function Hero({ data, showHeader, theme, matches }) {
	const heading = useRef(null);
	const heading2 = useRef(null);
	const revealer = useRef(null);
	revealer.current = [];
	const brandLine = useRef(null);
	const introTimeline = useRef(gsap.timeline());
	const [featuredProject, setFeaturedProject] = useState(null);
	const [brandLineShow, setBrandLineShow] = useState(false);
	const [headerHeight] = useHeaderSpacing();
	const [hasPlayed, setHasPlayed] = useState(false);
	const { splitText } = useSplit([heading.current, heading2.current], {
		type: "lines, chars",
		linesClass: "line",
		charsClass: "char",
	});

	useEffect(() => {
		if (data && data.software) {
			const featuredProj = data.software.slice(0, matches ? 1 : 2);
			setFeaturedProject(featuredProj);

			const array = data.software.slice(0, 2).map(project => {
				return {
					id: project.id,
					name: project.name,
					featureImage:
						process.env.REACT_APP_API_URL + "/images/" + project.image.filename,
					description: project.description,
					href: project.url,
				};
			});
		}
	}, [data, splitText, matches]);

	useEffect(() => {
		if (splitText && splitText.chars && !hasPlayed && revealer.current[0]) {
			setHasPlayed(true);
			const firstHeadingChars = splitText.chars.slice(0, 7);
			const secondHeadingChars = splitText.chars.slice(7, 14);
			introTimeline.current
				.to(firstHeadingChars, {
					y: 0,
					duration: 1,
					stagger: 0.05,
					ease: "expo.inOut",
				})
				.to(firstHeadingChars, {
					y: "-100%",
					duration: 1,
					stagger: 0.05,
					ease: "expo.inOut",
				})

				.to(
					secondHeadingChars,
					{
						y: 0,
						duration: 1,
						stagger: 0.05,
						ease: "expo.inOut",
						onStart: () => {
							setBrandLineShow(true);
							showHeader();
						},
					},
					1.2
				)
				.to(
					revealer.current,
					{
						y: "100%",
						ease: "circ.inOut",
						stagger: 0.1,
						duration: 2,
					},
					1.5
				)
				.set(revealer.current, {
					display: "none",
				})
				.set(splitText.lines[0], {
					display: "none",
				});
		}
	}, [splitText, revealer.current]);

	const headingStyles = {
		zIndex: 1,
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: "100%",
		color: theme.colors.light,
		"font-family": "Brutal",
		fontSize: "20vw",
		textTransform: "uppercase",
		lineHeight: "19vw",
		"& .line": {
			overflow: "hidden",
		},
		"& .char": {
			transform: "translateY(100%)",
		},
	};

	const heading2Styles = {
		color: theme.colors.light,
		fontSize: matches ? "18.98vw" : "10vw",
		letterSpacing: "-1.4px",
		textTransform: "uppercase",
		lineHeight: matches ? "18vw" : "9vw",
		"& .line": {
			overflow: "hidden",
		},
		"& .char": {
			transform: "translateY(100%)",
		},
	};

	const brandLineStyles = {
		width: matches ? "100%" : "250px",
		textTransform: "uppercase",
		fontSize: "0.8rem",
		lineHeight: "0.8rem",
		textIndent: !matches && "30%",
		opacity: brandLineShow ? 1 : 0,
		transition: "300ms ease",
	};

	const featured = {
		width: "100%",
		height: "34vw",
		position: "relative",
		overflow: "hidden",
		display: "flex",
		flexDirection: matches ? "column" : "row",
		marginTop: headerHeight,
		"& .project-wrapper": {
			width: "50%",
			height: "100%",
		},
		"& .project-wrapper:hover .cta span": {
			transform: "translateY(0)",
			opacity: 1,
		},
		"& img": {
			width: "100%",
			height: "90%",
			objectFit: "cover",
			objectPosition: "left",
			position: "relative",
		},
		"& .cta": {
			height: "10%",
			width: "100%",

			display: "flex",
			alignItems: "center",
			justifyContent: "end",
			textTransform: "uppercase",
			fontSize: "0.8rem",
			overflow: "hidden",
			"& span": {
				transition: "500ms ease",
				transform: "translateY(-110%)",
				opacity: 0,
			},
		},
		"& .revealer": {
			width: "100%",
			height: "100%",
			backgroundColor: theme.colors.dark,
			position: "absolute",
			top: 0,
			left: 0,
			zIndex: 0,
		},
	};

	const heroBottom = {
		display: "flex",
		alignItems: matches ? "start" : "end",
		flexDirection: matches ? "column" : "row",
		justifyContent: matches ? "center" : "space-between",
		width: "100%",
	};

	const addToRevealerRefs = el => {
		if (el && !revealer.current.includes(el)) {
			revealer.current.push(el);
		}
	};

	return (
		<Layout bg={"dark"} hero={true}>
			<Box
				className='hero__inner'
				sx={{
					display: "flex",
					flexDirection: "column-reverse",
					alignItems: "center",
					justifyContent: "space-between",
					height: "100%",
				}}
			>
				<Heading level={1} styles={headingStyles} ref={heading}>
					Matth3w
				</Heading>
				<Box className='hero-bottom-bar' sx={heroBottom}>
					<Heading level={1} styles={heading2Styles} ref={heading2}>
						Matth3w
					</Heading>
					<Typography
						component='span'
						sx={brandLineStyles}
						ref={brandLine}
						pr={2}
						pb={2}
					>
						Full-Stack developer based in the city of Montreal, Canada.
					</Typography>
				</Box>
				<Box className='featured-work-wrapper' sx={featured}>
					{featuredProject &&
						featuredProject[0] &&
						featuredProject.map(proj => {
							return (
								<>
									<a className='project-wrapper'>
										<img
											src={`${process.env.REACT_APP_API_URL}/images/${proj.image.filename}`} alt="project-image"
										></img>
										<div className='revealer' ref={addToRevealerRefs}></div>
										<Box className='cta'>
											<Box component='span'>View project</Box>
										</Box>
									</a>
								</>
							);
						})}
				</Box>
			</Box>
		</Layout>
	);
}

export default Hero;

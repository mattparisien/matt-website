import { Box, List, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ContainerFluid from "../../Containers/ContainerFluid";
import Heading from "../../Heading/Heading";

const StyledUl = styled(List)`
	width: 100%;
	padding: 0;
	display: block;

	li {
		border-bottom: 1px solid black;
		transition: 300ms ease;
		height: ${({ listItemHeight }) => listItemHeight};
		box-sizing: border-box;
		padding: ${({ matches }) => (matches ? "0.4rem 0.4rem 0.4rem 0" : "0")};

		a {
			height: 100%;
			display: flex;

			align-items: ${({ matches }) => (matches ? "start" : "center")};
			justify-content: space-between;
			padding: ${({ matches }) => (matches ? "0" : "0.6rem 0 0.5rem 0")};
			.project-category {
				margin-right: 20vw;
			}
		}

		&:hover {
			background-color: ${({ theme }) => theme.colors.dark};

			a {
				color: ${({ theme }) => theme.colors.light} !important;
			}
		}
	}
`;

function Work({ projectAmount, projects, theme, matches }) {
	const topBar = {
		padding: "1vw",
		width: "100%",
		height: "15vw",
		display: "flex",
		alignItems: "center",
		borderBottom: "1px solid black",
		border: "0px",
		background: "none",
		transition: "300ms ease",
	
		"&:hover": {
			backgroundColor: theme.colors.dark,
			color: theme.colors.light,
		},
		"&:hover .line": {
			backgroundColor: theme.colors.light,
		},
	};

	const [formattedProjects, setFormattedProjects] = useState(null);
	const [hasFilterClicked, setFilterClicked] = useState(false);

	useEffect(() => {
		if (projects) {
			const formatted = projects.map(proj => {
				return {
					id: proj.id,
					title: proj.name,
					href: proj.url,
				};
			});

			setFormattedProjects(formatted);
		}
	}, [projects]);

	const containerStyle = {
		display: "flex",
		width: "100%",

		"& .desktop-image-container": {
			width: "51vw",
			height: "25vw",
			overflow: "hidden",
			display: matches ? "none" : "block",
			position: "sticky",
			top: 0,
			left: 0,
		},
		"& img": {
			width: "100%",
			height: "100%",
			objectFit: "cover",
			objectPosition: "left",
		},
	};

	const filter = {
		width: "10vw",
		height: "100%",
		position: "relative",
		transform: `rotate(${hasFilterClicked ? "45deg" : "-deg"})`,
		transformOrigin: "center",
		transition: "300ms ease",

		".line": {
			width: "80%",
			height: "2px",
			backgroundColor: "black",
			position: "absolute",
			top: "50%",
			transform: `translateY(-50%)`,
			transition: "300ms ease",
		},

		".line:nth-of-type(2)": {
			transform: "rotate(90deg)translateY(-50%)",
		},
	};

	const cta = {
		width: "38vw",
		display: "flex",
		height: "100%",
		alignItems: "start",
		justifyContent: "center",
	};

	const infoWrapper = {
		marginLeft: 0.7,
		display: "flex",
		flexDirection: matches ? "column" : "row",
		width: "100%",
		height: "100%",
		justifyContent: "space-between",
		alignItems: "start",
		"& .project-category": {
			textTransform: matches && "capitalize",
		},
		"& .project-title": {
			textTransform: "uppercase",
		},
	};

	const [image, setImage] = useState(null);

	const handleMouseEnter = filename => {
		setImage(`${process.env.REACT_APP_API_URL}/images/${filename}`);
	};

	const handleTopBarClick = e => {
		e.preventDefault();
		setFilterClicked(hasFilterClicked ? false : true);
	};


const headingStyles = `
	font-size: 10vw;
	line-height: 10vw;
	text-transform: uppercase;

`;

const headingStyles2 = `
	font-size: 10vw;
	line-height: 10vw;
	margin-left: 29vw;
	text-transform: uppercase;

`

	return (
		<>
			<Box
				className='featured-topBar'
				sx={topBar}
				component='button'
				onClick={handleTopBarClick}
			>
				<Heading level={2} styles={headingStyles}>
					{projectAmount}
				</Heading>
				
				<Heading level={2} styles={headingStyles2}>
					All
				</Heading>
				<Box className='filter-cta' sx={cta}>
					<Typography component='span'>Filter Projects</Typography>
				</Box>
				<Box className='filter-button' sx={filter}>
					<Box className='line'></Box>
					<Box className='line'></Box>
				</Box>
			</Box>
			<ContainerFluid>
				<Box sx={containerStyle}>
					<Box
						className='desktop-image-container'
						sx={{
							backgroundImage: `url(${image})`,
							backgroundPosition: "left",
							backgroundSize: "cover",
						}}
					></Box>
					<StyledUl
						listItemHeight={matches ? "15vw" : "auto"}
						matches={matches}
					>
						{projects &&
							projects.map(proj => {
								return (
									<li
										key={proj.id}
										onMouseEnter={() => handleMouseEnter(proj.image.filename)}
										onMouseLeave={() => setImage(null)}
									>
										<a href={proj.url}>
											<Box
												className='mobile-image-container'
												sx={{
													width: "30vw",
													height: "100%",
													backgroundImage: `url(${process.env.REACT_APP_API_URL}/images/${proj.image.filename})`,
													backgroundPosition: "left",
													backgroundSize: "cover",
													display: matches ? "block" : "none",
												}}
											></Box>
											<Box className='project-info-wrapper' sx={infoWrapper}>
												<p
													className='project-title'
													style={{
														fontSize: "1.4rem",
														letterSpacing: "-0.2px",
														margin: 0,
													}}
												>
													{proj.name}
												</p>

												<p
													className='project-category'
													style={{
														fontSize: "1.4rem",
														letterSpacing: "-0.9px",
														margin: "0 21.9vw 0 0",
													}}
												>
													Software
												</p>
											</Box>
										</a>
									</li>
								);
							})}
					</StyledUl>
				</Box>
			</ContainerFluid>
		</>
	);
}

export default Work;

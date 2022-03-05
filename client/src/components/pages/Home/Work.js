import React, { useEffect, useState } from "react";
import Layout from "../../Containers/Layout";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { textTransform } from "@mui/system";
import UnorderedList from "../../Lists/UnorderedList";
import styled from "styled-components";
import { List } from "@mui/material";

const StyledUl = styled(List)`
	width: 100%;
	padding: 0;
	display: block;

	li {
		font-size: 1.3rem;
		text-transform: uppercase;
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
		height: "11vw",
		display: "flex",
		alignItems: "center",
		borderBottom: "1px solid black",
		border: "0px",
		background: "none",
		transition: "300ms ease",
		"& h2": {
			fontSize: "11vw",
			lineHeight: "9vw",
			textTransform: "uppercase",
		},
		"&:hover": {
			backgroundColor: theme.colors.dark,
			color: theme.colors.light,
		},
		"&:hover .line": {
			backgroundColor: theme.colors.light,
		},
	};

	const [formattedProjects, setFormattedProjects] = useState(null);

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
			overflow: "hidden",
			display: matches ? "none" : "block",
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

		".line": {
			width: "80%",
			height: "2px",
			backgroundColor: "black",
			position: "absolute",
			top: "50%",
			transform: "translateY(-50%)",
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
		}
	}

	const [image, setImage] = useState(null);

	const handleMouseEnter = filename => {
		setImage(`${process.env.REACT_APP_API_URL}/images/${filename}`);
	};

	return (
		<>
			<Box className='featured-topBar' sx={topBar} component='button'>
				<Typography variant='h2' component='h2'>
					{projectAmount}
				</Typography>
				<Typography variant='h2' component='h2' sx={{ marginLeft: "27vw" }}>
					All
				</Typography>
				<Box className='filter-cta' sx={cta}>
					<Typography component='span'>Filter Projects</Typography>
				</Box>
				<Box className='filter-button' sx={filter}>
					<Box className='line'></Box>
					<Box className='line'></Box>
				</Box>
			</Box>
			<Box sx={containerStyle}>
				<Box
					className='desktop-image-container'
					sx={{
						backgroundImage: `url(${image})`,
						backgroundPosition: "left",
						backgroundSize: "cover",
					}}
				></Box>
				<StyledUl listItemHeight={matches ? "15vw" : "auto"} matches={matches}>
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
										<Box className="project-info-wrapper" sx={infoWrapper}>
											<Typography className='project-title'>
												{proj.name}
											</Typography>

											<Typography className='project-category'>
												Software
											</Typography>
										</Box>
									</a>
								</li>
							);
						})}
				</StyledUl>
			</Box>
		</>
	);
}

export default Work;

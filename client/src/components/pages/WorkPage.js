import { Box, useMediaQuery } from "@mui/material";
import React, { useContext, useState } from "react";
import { useTheme } from "styled-components";
import { DataContext } from "../../App/App";
import { device } from "../../styles/breakpoints";
import Container from "../Containers/Container";
import Section from "../Containers/Section";
import Link from "../Link/Link";
import Paragraph from "../Paragraph/Paragraph";
import ProjectList from "../Lists/ProjectList";
import Star from "../Star/Star";

function WorkPage() {
	const theme = useTheme();
	const tablet = useMediaQuery(device.tablet);
	const [category, setCategory] = useState("software");

	const { projects, photos } = useContext(DataContext);

	return (
		<>
			<Container classes='-bg-dark'>
				<Section classes='-fullHeight -flex -align-end -justify-center'>
					<Paragraph indent size='big'>
						I love what I do. A lot. Previously im commercial photography, I'm
						currently designing, developing and maintaining full-stack
						applications for various freelance clients. I also do beauty
						photography on the side <Star color='light' height='50px' strokeWidth={"5px"} inline /> check it out below.
						<span>
							
						</span>{" "}
					</Paragraph>
				</Section>
			</Container>
			<Container classes='-bg-light'>
				<Section>
					<ProjectList projects={projects} photos={photos} />
				</Section>
			</Container>
		</>
	);
}

const PhotographyGrid = ({ items, tablet, theme }) => {
	const imageStyle = {
		width: "100%",
		height: "100%",
		objectFit: "cover",
	};

	const photoItem = {
		height: tablet ? "54vw" : "120vw",

		gridColumn: tablet ? "span 3" : "span 6",
	};

	return (
		<Box
			display='grid'
			gridTemplateColumns={"repeat(6, 1fr)"}
			className='PhotographyGrid'
			gap={2}
		>
			{items &&
				items.map(photo => {
					return (
						<Box
							className='PhotographyGrid__item'
							sx={photoItem}
							key={photo.id}
						>
							<Box
								className='PhotographyGrid__image'
								src={photo.url}
								alt={photo.alternativeText}
								component={"img"}
								sx={imageStyle}
							></Box>
						</Box>
					);
				})}
		</Box>
	);
};

const ProjectsGrid = ({ items, tablet, theme }) => {
	const itemStyle = {
		width: "100%",
		height: "100%",
		objectFit: "cover",
		transition: "400ms ease",
		position: "sticky",
		zIndex: 1,
	};

	const itemWrapper = {
		height: tablet ? "54vw" : "120vw",
		gridColumn: tablet ? "span 3" : "span 6",
		backgroundColor: theme.colors.blue,
		padding: "2vw",
		"&:hover .ProjectsGrid__image": {
			opacity: 0,
		},
		"&:hover .info-bar-top, &:hover .info-bar-bottom": {
			opacity: 1,
			transform: "translateY(0)",
		},
	};

	const video = {
		objectFit: "cover",
		position: "absolute",
		top: 0,
		left: 0,
		zIndex: 0,
		width: "100%",
		height: "100%",
	};

	const mediaWrapper = {
		position: "relative",
		height: "50%",
		width: "100%",
		backgroundColor: theme.colors.yellow,
		overflow: "hidden",
	};

	const infoBarTop = {
		position: "absolute",
		left: 0,
		top: 0,
		color: theme.colors.light,
		fontSize: "1rem",
		transform: "translateY(100%)",
		opacity: 0,
		transition: "400ms ease",
	};

	const infoBarBottom = {
		position: "absolute",
		right: 0,
		bottom: 0,
		color: theme.colors.light,
		width: "50%",

		transform: "translateY(100%)",
		opacity: 0,
		transition: "400ms ease",
		transitionDelay: "100ms",
	};

	return (
		<Box
			display='grid'
			gridTemplateColumns={"repeat(6, 1fr)"}
			className='ProjectsGrid'
			gap={2}
		>
			{items &&
				items.map(project => {
					return (
						<Box
							className='ProjectsGrid__item'
							sx={itemWrapper}
							component='a'
							href={project.Location}
							target='_blank'
							rel='noreferrer'
							key={project.id}
						>
							<Box
								className='ProjectGrid__item__inner'
								sx={{
									position: "relative",
									width: "100%",
									height: "100%",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									flexDirection: "column",
								}}
							>
								<Box className='info-bar-top' sx={infoBarTop}>
									<Box className='title'>{project.Title}</Box>
								</Box>
								<Box className='ProjectsGrid__media-wrapper' sx={mediaWrapper}>
									<Box
										className='ProjectsGrid__image'
										src={project.Cover.image.url}
										alt={project.Cover.image.alt}
										component={"img"}
										sx={itemStyle}
									></Box>
									{project.Cover.video && (
										<video
											style={video}
											autoPlay
											loop
											playsInline
											mute
											key={project.id}
											src={project.Cover.video.url}
										></video>
									)}
								</Box>
								<Box sx={infoBarBottom} className='info-bar-bottom -text-tiny'>
									{project.PreviewText}
								</Box>
							</Box>
						</Box>
					);
				})}
		</Box>
	);
};

export default WorkPage;

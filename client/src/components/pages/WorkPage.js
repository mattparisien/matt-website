import { Box } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App/App";
import Layout from "../Containers/Layout";
import Line from "../Divider/Line";
import ResponsiveGrid from "../Grid/ResponsiveGrid";
import UnorderedList from "../Lists/UnorderedList";
import ParagraphLayout from "../Paragraph/ParagraphLayout";
import { useMediaQuery } from "@mui/material";
import { device } from "../../styles/breakpoints";
import { useTheme } from "styled-components";

function WorkPage() {
	const theme = useTheme();
	const tablet = useMediaQuery(device.tablet);
	const [category, setCategory] = useState("software");

	const { projects, photos } = useContext(DataContext);

	return (
		<>
			<Layout bg='light' height='45vh' offsetTop>
				<ParagraphLayout indent indentHeading='work' variant={1}>
					I design, develop and maintain full-stack applications for a living. I
					also do beauty photography on the side, check it out below.
				</ParagraphLayout>
			</Layout>
			<Layout bg='light' height='auto'>
				<Box className='categories-bar' sx={{ marginBottom: "4rem" }}>
					<UnorderedList
						height={3}
						clickHandlers={{
							software: () => setCategory("software"),
							photography: () => setCategory("photography"),
						}}
						noTransition
						negativeOffset='left'
						listItems={[
							{
								title: "Software",
								href: "",
							},
							{
								title: "Photography",
								href: "",
							},
						]}
					/>
					<Line />
					<Box className='grid-wrapper' sx={{ padding: "5rem 0" }}>
						{category === "photography" ? (
							<PhotographyGrid items={photos} tablet={tablet} theme={theme} />
						) : (
							<ProjectsGrid items={projects} tablet={tablet} theme={theme} />
						)}
					</Box>
				</Box>
			</Layout>
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
		padding: "2vw",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		"&:hover .ProjectsGrid__image": {
			opacity: 0,
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
							href={project.url}
							target='_blank'
							rel='noreferrer'
							key={project.id}
						>
							<Box className='ProjectsGrid__media-wrapper' sx={mediaWrapper}>
								<Box
									className='ProjectsGrid__image'
									src={project.Cover.image.url}
									alt={project.Cover.image.alt}
									component={"img"}
									sx={itemStyle}
								></Box>
								<video
									style={video}
									autoPlay
									loop
									playsInline
									mute
									key={project.id}
									src={project.Cover.video.url}
								></video>
							</Box>
						</Box>
					);
				})}
		</Box>
	);
};

export default WorkPage;

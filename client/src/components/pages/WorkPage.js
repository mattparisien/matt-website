import React, { useContext, useState, useEffect } from "react";
import Layout from "../Containers/Layout";

import { Box } from "@mui/material";
import Button from "../Button/Button";

import styled from "styled-components";
import ResponsiveGrid from "../Grid/ResponsiveGrid";
import { DataContext } from "../../App/App";
import Line from "../Divider/Line";
import ParagraphLayout from "../Paragraph/ParagraphLayout";
import UnorderedList from "../Lists/UnorderedList";

function WorkPage() {
	const StyledCategoryBtn = styled(Button)`
		margin-right: 4rem;
	`;

	const [itemLoading, setItemLoading] = useState(false);
	const [gridData, setGridData] = useState(null);
	const [category, setCategory] = useState("software");

	const { software, photography } = useContext(DataContext);

	const handleCategoryClick = e => {
		e.preventDefault();
		setItemLoading(!itemLoading);
		setCategory(e.target.id);
	};

	useEffect(() => {
		if (category === "photography" && photography) {
			const sourceArray = photography.map(image => {
				return {
					id: image._id,
					src: `${process.env.REACT_APP_API_URL}/images/${image.filename}`,
				};
			});

			setGridData(prev => ({
				data: sourceArray,
			}));
		} else if (category === "software" && software) {
			const array = software.map(project => {
				return {
					id: project._id,
					name: project.name,
					featureImage: project.featureImage,
					description: project.description,
					href: project.url,
				};
			});

			setGridData(() => ({ data: array }));
		}
	}, [photography, software, category]);

	return (
		<>
			<Layout bg='light' height='45vh'>
				<ParagraphLayout indent indentHeading='work'>
					I design, develop and maintain full-stack applications for a living. I
					also do beauty photography on the side, check it out below.
				</ParagraphLayout>
			</Layout>
			<Layout bg='light' height='auto'>
				<Box className='categories-bar' sx={{ marginBottom: "4rem" }}>
					<UnorderedList
						clickHandlers={{
							software: () => setCategory("software"),
							photography: () => setCategory("photography")
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
					{/* <form
						action={`${process.env.REACT_APP_API_URL}/upload`}
						method='POST'
						encType='multipart/form-data'
					>
						<input name='image' type='file' accept='image/*' />
						<input type='submit' value='Submit' />
					</form> */}
				</Box>

				<ResponsiveGrid
					items={gridData}
					isItemLoading={itemLoading}
					setItemLoading={() => setItemLoading(!itemLoading)}
				/>
			</Layout>
		</>
	);
}

export default WorkPage;

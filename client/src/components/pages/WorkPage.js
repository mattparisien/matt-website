import React, { useContext, useState, useEffect } from "react";
import Layout from "../Containers/Layout";
import { Box } from "@mui/material";
import ResponsiveGrid from "../Grid/ResponsiveGrid";
import { DataContext } from "../../App/App";
import Line from "../Divider/Line";
import ParagraphLayout from "../Paragraph/ParagraphLayout";
import UnorderedList from "../Lists/UnorderedList";

function WorkPage() {
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
					id: project.id,
					name: project.name,
					featureImage:
						process.env.REACT_APP_API_URL + "/images/" + project.image.filename,
					description: project.description,
					href: project.url,
				};
			});

			setGridData(() => ({ data: array }));
		}
	}, [photography, software, category]);



	return (
		<>
			<Layout bg='light' height='45vh' offsetTop>
				<ParagraphLayout indent indentHeading='work' variant={1}>
					I design, develop and maintain
					full-stack applications for a living. I also do beauty photography on
					the side, check it out below.
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

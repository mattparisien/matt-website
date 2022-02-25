import React, { useContext, useState } from "react";
import Layout from "../Containers/Layout";
import Paragraph from "../Paragraph/Paragraph";
import { Box } from "@mui/material";
import Button from "../Button/Button";
import { ButtonGroup } from "@material-ui/core";
import styled from "styled-components";
import ResponsiveGrid from "../Grid/ResponsiveGrid";
import { DataContext } from "../../App/App";
import Line from "../Divider/Line";
import axios from "axios";

function WorkPage() {
	const StyledCategoryBtn = styled(Button)`
		margin-right: 4rem;
	`;

	const [itemLoading, setItemLoading] = useState(false);
	const [category, setCategory] = useState("software");

	const { projects, photography } = useContext(DataContext);

	const handleCategoryClick = e => {
		e.preventDefault();
		setItemLoading(!itemLoading);
	};

	// const handleSubmit = e => {
	// 	e.preventDefault();
	// 	const image = e.target[0].files[0];

	// 	console.log(image)

	// 	axios
	// 		.post(`${process.env.REACT_APP_API_URL}/upload`, image)
	// 		.then(res => console.log(res))
	// 		.catch(err => console.log(err));
	// };

	return (
		<>
			<Layout bg='light' height='45vh'>
				<Paragraph indent indentHeading='Work'>
					I design, develop and maintain full-stack applications for a living. I
					also do beauty photography on the side, check it out below.
				</Paragraph>
			</Layout>
			<Layout bg='light' height='auto'>
				<Box className='categories-bar' sx={{ marginBottom: "4rem" }}>
					<ButtonGroup style={{ marginBottom: "2rem" }}>
						<StyledCategoryBtn naked onClick={handleCategoryClick}>
							Software
						</StyledCategoryBtn>
						<StyledCategoryBtn naked onClick={handleCategoryClick}>
							Photography
						</StyledCategoryBtn>
					</ButtonGroup>
					<Line />
					<form
						action={`${process.env.REACT_APP_API_URL}/upload`}
						method='POST'
						encType='multipart/form-data'
						onSubmit={handleSubmit}
					>
						<input name='image' type='file' accept='image/*' />
						<input type='submit' value='Submit' />
					</form>
				</Box>

				<ResponsiveGrid
					items={category === "software" ? projects : photography}
					isItemLoading={itemLoading}
					setItemLoading={() => setItemLoading(!itemLoading)}
				/>
			</Layout>
		</>
	);
}

export default WorkPage;

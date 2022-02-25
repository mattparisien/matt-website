import React from "react";
import Layout from "../Containers/Layout";
import Paragraph from "../Paragraph/Paragraph";
import { Box } from "@mui/material";
import Button from "../Button/Button";
import { ButtonGroup } from "@material-ui/core";
import styled from "styled-components";
import ResponsiveGrid from "../Grid/ResponsiveGrid";

function WorkPage() {
	const StyledCategoryBtn = styled(Button)`
		margin-right: 4rem;
	`;

	return (
		<>
			<Layout bg='light' height='30vh'>
				<Paragraph indent indentHeading='Work'>
					I design, develop and maintain full-stack applications for a living. I
					also do beauty photography on the side, check it out below.
				</Paragraph>
			</Layout>
			<Layout bg='light' height='auto'>
				<Box className='categories-bar'>
					<ButtonGroup>
						<StyledCategoryBtn naked>Software</StyledCategoryBtn>
						<StyledCategoryBtn naked>Photography</StyledCategoryBtn>
					</ButtonGroup>
				</Box>
				<ResponsiveGrid />
			</Layout>
		</>
	);
}

export default WorkPage;

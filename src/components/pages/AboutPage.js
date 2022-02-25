import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import ContainerFluid from "../Containers/ContainerFluid";
import Section from "../Containers/Section";
import { Box } from "@mui/material";
import styled from "styled-components";
import Loader from "../Loading/Loader";

const StyledFromHeading = styled(Paragraph)`
	margin-bottom: 4rem;
`;

function About() {
	const flexStyle = {
		display: "flex",
		alignItems: "flex-start",
		flexDirection: "column",
	};

	return (
		<>
			<Loader />
			<Section bg='light'>
				<ContainerFluid>
					<Box sx={flexStyle}>
						<Box sx={{ margin: "5rem 0" }}>
							<Paragraph indent>Made in Montreal,</Paragraph>
							<Paragraph indent>Quebec, Canada</Paragraph>
						</Box>
						<Paragraph indent indentHeading={"About"}>
							Hey, I'm Matt - full-stack web developer & photographer and
							graphic designer obsessed with digital products and passionate
							about interactive digital experiences. I work hard and deliver
							results.
						</Paragraph>
					</Box>
				</ContainerFluid>
			</Section>
		</>
	);
}

export default About;

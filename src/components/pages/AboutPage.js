import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import ContainerFluid from "../Containers/ContainerFluid";
import Section from "../Containers/Section";
import { Box } from "@mui/material";
import styled from "styled-components";

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
		<Section>
			<ContainerFluid>
				<Box sx={flexStyle}>
					<Box sx={{ marginBottom: "5rem" }}>
						<Paragraph>Made in Montreal</Paragraph>
						<Paragraph>Quebec, Canada</Paragraph>
					</Box>
					<Paragraph indent>
						Hey, I'm Matt - full-stack web developer, beauty photographer and
						graphic designer obsessed with digital products and passionate about
						interactive digital experiences. I work hard and deliver results.
					</Paragraph>
				</Box>
			</ContainerFluid>
		</Section>
	);
}

export default About;

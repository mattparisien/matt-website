import React, { useEffect, useContext } from "react";
import Paragraph from "../Paragraph/Paragraph";
import ContainerFluid from "../Containers/ContainerFluid";
import Section from "../Containers/Section";
import { Box } from "@mui/material";
import styled from "styled-components";
import Button from "../Button/Button";
import Line from "../Divider/Line";
import SocialList from "../Lists/SocialList";

const margin = 4;

const StyledFromHeading = styled(Paragraph)`
	margin-bottom: ${margin}rem;
`;

function About() {
	const flexStyle = {
		display: "flex",
		alignItems: "flex-start",
		flexDirection: "column",
	};

	return (
		<>
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
					<Box sx={{ marginTop: `${margin * 2}rem` }}>
						<Line />
						{/* <StyledDivider /> */}
						<Button align='left' $href='mailto:hello@matthewparisien.com'>
							Get in touch
						</Button>
						<SocialList orientation="horizontal" />
					</Box>
				</ContainerFluid>
			</Section>
			<Section>
				<ContainerFluid>
					<Paragraph indent indentHeading={"About"}>
						Hey, I'm Matt - full-stack web developer & photographer and graphic
						designer obsessed with digital products and passionate about
						interactive digital experiences. I work hard and deliver results.
					</Paragraph>
				</ContainerFluid>
			</Section>
		</>
	);
}

export default About;

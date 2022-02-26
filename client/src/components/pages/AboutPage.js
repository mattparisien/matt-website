import React, { useEffect, useContext } from "react";
import Paragraph from "../Paragraph/Paragraph";
import ContainerFluid from "../Containers/ContainerFluid";
import Section from "../Containers/Section";
import { Box } from "@mui/material";
import styled from "styled-components";
import Button from "../Button/Button";
import Line from "../Divider/Line";
import SocialList from "../Lists/SocialList";
import Layout from "../Containers/Layout";
import ParagraphLayout from "../Paragraph/ParagraphLayout";

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
			<Layout bg='light'>
				<Box sx={flexStyle}>
					<Box sx={{ marginBottom: "5rem" }}>
						<Paragraph indent>Made in Montreal,</Paragraph>
						<Paragraph indent>Quebec, Canada</Paragraph>
					</Box>
					<ParagraphLayout indent indentHeading='About'>
						Hey, I'm Matt - full-stack web developer & photographer and graphic
						designer obsessed with digital products and passionate about
						interactive digital experiences. I work hard and consistently
						deliver results.
					</ParagraphLayout>
				</Box>
				<Box sx={{ marginTop: `${margin * 2}rem` }}>
					<Line />
					{/* <StyledDivider /> */}
					<Box
						className='contact-bar'
						sx={{
							display: "flex",
							flexDirection: "row-reverse",
							alignItems: "center",
							marginTop: `${margin}rem`,
						}}
					>
						<Button align='left' $href='mailto:hello@matthewparisien.com'>
							Get in touch
						</Button>
						<SocialList orientation='horizontal' />
					</Box>
				</Box>
			</Layout>
			{/* </ContainerFluid>
			</Section> */}
			{/* // <Section>
			// 	<ContainerFluid>
			// 		<Paragraph indent indentHeading={"About"}>
			// 			Hey, I'm Matt - full-stack web developer & photographer and graphic
			// 			designer obsessed with digital products and passionate about
			// 			interactive digital experiences. I work hard and deliver results.
			// 		</Paragraph>
			// 	</ContainerFluid>
			// </Section> */}
		</>
	);
}

export default About;

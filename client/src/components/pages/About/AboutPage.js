import React, { useEffect, useContext } from "react";
import Paragraph from "../../Paragraph/Paragraph";
import { Box } from "@mui/material";
import styled from "styled-components";
import Button from "../../Button/Button";
import Line from "../../Divider/Line";
import SocialList from "../../Lists/SocialList";
import Layout from "../../Containers/Layout";
import ParagraphLayout from "../../Paragraph/ParagraphLayout";
import { deviceSize } from "../../../styles/breakpoints";

const margin = 4;

const StyledFromHeading = styled(Paragraph)`
	margin-bottom: ${margin}rem;
`;

const StyledContactBar = styled(Box)`
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
	${({ theme }) => theme.spacing(2, "margin-top")};

	@media (max-width: ${deviceSize.mobileL}px) {
		flex-direction: column-reverse;
		align-items: start;

		a {
			margin-right: auto;
			margin-left: 0px;
		}
	}
`;

function AboutPage() {
	const flexStyle = {
		display: "flex",
		alignItems: "flex-start",
		flexDirection: "column",
	};

	return (
		<>
			<Layout bg='light' offsetTop>
				<Box sx={flexStyle}>
					<Box sx={{ marginBottom: "5rem" }}>
						<Paragraph indent variant={1}>Made in Montreal,</Paragraph>
						<Paragraph indent variant={1}>Quebec, Canada</Paragraph>
					</Box>
					<ParagraphLayout indent indentHeading='About' variant={1}>
						Hey, I'm Matt - full-stack web developer & photographer and graphic
						designer obsessed with digital products and passionate about
						interactive digital experiences. I work hard and consistently
						deliver results.
					</ParagraphLayout>
				</Box>
				<Box sx={{ marginTop: `${margin * 2}rem` }}>
					<Line />
					{/* <StyledDivider /> */}
					<StyledContactBar className='contact-bar'>
						<Button align='left' $href='mailto:hello@matthewparisien.com'>
							Get in touch
						</Button>
						<SocialList orientation='horizontal' />
					</StyledContactBar>
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

export default AboutPage;

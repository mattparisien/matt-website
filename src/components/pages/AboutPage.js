import React, { useEffect, useContext } from "react";
import Paragraph from "../Paragraph/Paragraph";
import ContainerFluid from "../Containers/ContainerFluid";
import Section from "../Containers/Section";
import { Box } from "@mui/material";
import styled from "styled-components";
import Loader from "../Loading/Loader";
import Button from "../Button/Button";
import { Divider } from "@mui/material";
import { LoadingContext } from "../../App/App";

const margin = 4;

const StyledFromHeading = styled(Paragraph)`
	margin-bottom: ${margin}rem;
`;

const StyledDivider = styled(Divider)`
	border-bottom-width: 1spx;
	background-color: ${({ theme }) => theme.colors.dark};
`;

function About() {
	const flexStyle = {
		display: "flex",
		alignItems: "flex-start",
		flexDirection: "column",
	};

	const { isLoading, toggleLoading } = useContext(LoadingContext);

	useEffect(() => {
		toggleLoading();
	}, []);

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
						<StyledDivider />
						<Button align='left' $href='mailto:hello@matthewparisien.com'>
							Get in touch
						</Button>
					</Box>
				</ContainerFluid>
			</Section>
			<Section></Section>
		</>
	);
}

export default About;

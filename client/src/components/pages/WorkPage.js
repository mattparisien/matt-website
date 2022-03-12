import React, { useContext } from "react";
import { DataContext } from "../../App/App";
import Container from "../Containers/Container";
import Section from "../Containers/Section";
import ProjectList from "../Lists/ProjectList";
import Paragraph from "../Paragraph/Paragraph";
import Star from "../Star/Star";

function WorkPage() {
	const { projects, photos } = useContext(DataContext);

	return (
		<>
			<Container classes='-bg-dark'>
				<Section classes='-fullHeight -flex -align-end -justify-center'>
					<Paragraph indent size='big'>
						I love what I do. A lot. Previously im commercial photography, I'm
						currently designing, developing and maintaining full-stack
						applications for various freelance clients. I also do beauty
						photography on the side{" "}
						<Star color='light' height='50px' strokeWidth={"5px"} inline />{" "}
						check it out below.
						<span></span>{" "}
					</Paragraph>
				</Section>
			</Container>
			<Container classes='-bg-light'>
				<Section>
					<ProjectList projects={projects} photos={photos} />
				</Section>
			</Container>
		</>
	);
}

export default WorkPage;

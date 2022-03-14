import React from "react";
import Container from "../Containers/Container";
import TextSwitch from "../TextSwitch/TextSwitch";

function AboutPage() {
	const words = ["Web developer", "designer", "bagel lover", "awkward dancer", ];

	return (
		<Container>
			<TextSwitch words={words} />
		</Container>
	);
}

export default AboutPage;

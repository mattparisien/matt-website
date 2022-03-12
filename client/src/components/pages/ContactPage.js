import React from "react";
import Section from "../Containers/Section";
import Container from "../Containers/Container";
import Button from "../Button/Button";
import FooterNav from "../Nav/FooterNav";
import Paragraph from "../Paragraph/Paragraph";
import Line from "../Line/Line";
import Form from "./components/Form/Form";

function ContactPage() {
	const formFields = [
		{
			tagName: "input",
			label: "My name is ",
			placeholder: "Name",
			name: "name",
		},
		{
			tagName: "input",
			label: "I work for",
			placeholder: "Company",
			name: "company",
		},
		{
			tagName: "input",
			label: "I'm looking for",
			placeholder: "Describe your projects",
			name: "project",
		},
		{
			tagName: "input",
			label: "Please contact me at",
			placeholder: "justine@example.com",
			name: "email",
		},
		{
			tagName: "input",
			label: "I'm looking for",
			placeholder: "Describe your projects",
			name: "company",
		},
	];

	return (
		<Container classes='-fullHeight -flex -flex-column'>
			<Paragraph size='big'>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, totam?
			</Paragraph>
      <Form formFields={formFields}/>
			<FooterNav />
			<Line />
		</Container>
	);
}

export default ContactPage;

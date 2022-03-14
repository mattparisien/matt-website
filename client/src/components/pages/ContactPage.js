import React from "react";
import Container from "../Containers/Container";
import Form from "../Form/Form";
import FooterNav from "../Nav/FooterNav";

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
			label: "Please contact me at",
			placeholder: "justine@example.com",
			name: "email",
		},
		{
			tagName: "textarea",
			label: "I'm looking for",
			placeholder: "Describe your project",
			name: "project",
		},
	];

	return (
		<>
			<Container classes='-fullHeight -flex -flex-column -padding-top-huge -bg-dark -justify-center'>
				<Form formFields={formFields} />
				<Container
					classes={
						"-absolute -bottom -left -height-auto -flex -align-end -stretchX"
					}
				>
					<FooterNav />
				</Container>
			</Container>
		</>
	);
}

export default ContactPage;

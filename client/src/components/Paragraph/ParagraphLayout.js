import React from "react";
import Paragraph from "./Paragraph";
import { Box } from "@mui/system";

function ParagraphLayout(props) {
	const { text, indent, indentHeading, children } = props;

	const boxStyles = {
	
	height: "100%",
	width: "100%",
	display: "flex",
	alignItems: "center",
	justifyContent: "center"

	};

	return (
		<Box sx={boxStyles} className='ParagraphLayout'>
			<Paragraph {...props}>{children}</Paragraph>
		</Box>
	);
}

export default ParagraphLayout;

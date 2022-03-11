import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";
import Paragraph from "./Paragraph";
import classNames from "classnames";

const StyledParagraphWrapper = styled(Box)`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
`;

function ParagraphLayout(props) {
	const classes = classNames("ParagraphLayout", {
		[props.classes]: props.clases,
	});
	const { children } = props;

	return (
		<StyledParagraphWrapper className={classes} {...props}>
			<Paragraph {...props} variant={props.variant}>
				{children}
			</Paragraph>
		</StyledParagraphWrapper>
	);
}

export default ParagraphLayout;

import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";
import Paragraph from "./Paragraph";

const StyledParagraphWrapper = styled(Box)`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: ${({ variant }) => (variant === 2 ? "start" : "center")};
	justify-content: center;


`;

function ParagraphLayout(props) {
	const { children } = props;

	return (
		<StyledParagraphWrapper className='ParagraphLayout' {...props}>
			<Paragraph {...props} variant={props.variant}>
				{children}
			</Paragraph>
		</StyledParagraphWrapper>
	);
}

export default ParagraphLayout;

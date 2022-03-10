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

	.spacer {
		width: 50%;
		height: 100%;
	}

	p {
		${({ theme }) => theme.spacing(2, "margin-top")};
		${({ theme }) => theme.spacing(2, "margin-bottom")};
	}
`;

function ParagraphLayout(props) {
	const { children } = props;

	return (
		<StyledParagraphWrapper className='ParagraphLayout' {...props}>
			{props.variant === 2 && <div className='spacer'></div>}
			{props.variant === 3 && <div className='spacer'></div>}
			<Paragraph {...props} variant={props.variant}>
				{children}
			</Paragraph>
		</StyledParagraphWrapper>
	);
}

export default ParagraphLayout;

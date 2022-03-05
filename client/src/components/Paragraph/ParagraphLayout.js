import React from "react";
import Paragraph from "./Paragraph";
import { Box } from "@mui/system";
import { useTheme } from "styled-components";
import styled from "styled-components";

const StyledParagraphWrapper = styled(Box)`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: ${({ variant }) => (variant === 2 ? "start" : "center")};
	justify-content: ${({justify}) => justify ? justify : "center"};

	p {
		${({ theme }) => theme.spacing(2, "margin-top")};
		${({ theme }) => theme.spacing(2, "margin-bottom")};
	}
`;

function ParagraphLayout(props) {
	const { text, indent, indentHeading, children, align } = props;

	const boxStyles = {
		height: "100%",
		width: "100%",
		display: "flex",
		alignItems: props.align ? props.align : "center",
		justifyContent: "center",
	};

	return (
		<StyledParagraphWrapper className='ParagraphLayout' {...props}>
			<Paragraph {...props} variant={props.variant}>
				{children}
			</Paragraph>
		</StyledParagraphWrapper>
	);
}

export default ParagraphLayout;

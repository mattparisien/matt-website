import React, { useState } from "react";
import styled from "styled-components";
import { Divider } from "@mui/material";
import InView from "react-intersection-observer";

const StyledDivider = styled(Divider)`
	border-bottom-width: 1px;
  transition: 2s ease;
	width: ${({ intersecting }) => (intersecting ? "100%" : "0%")};
	background-color: ${({ theme }) => theme.colors.dark};
`;

function Line({ id }) {
	const [intersecting, setIntersecting] = useState(null);

	return (
		<InView
			className='divider-view-wrapper'
			onChange={(inView, entry) => inView && setIntersecting(entry.target)}
		>
			<StyledDivider intersecting={intersecting} className='Line' />
		</InView>
	);
}

export default Line;

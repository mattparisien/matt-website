import React, { useState } from "react";
import styled from "styled-components";
import InView from "react-intersection-observer";

const StyledLine = styled.div`
	width: ${({ intersecting }) => (intersecting ? "100%" : "0%")};
	margin-bottom: 2.5rem;
	transition: 1s ease;
	height: 1px;
	background-color: ${({ theme }) => theme.colors.light};
`;

function Line() {
	const [intersecting, setIntersecting] = useState(false);

	return (
		<InView
			className='line-view-wrapper'
			onChange={(inView, entry) => inView && setIntersecting(true)}
		>
			<StyledLine intersecting={intersecting}></StyledLine>
		</InView>
	);
}

export default Line;

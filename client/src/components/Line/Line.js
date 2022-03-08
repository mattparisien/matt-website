import React, { useState } from "react";
import styled from "styled-components";
import InView from "react-intersection-observer";

const StyledLine = styled.div`
	width: 100%;
	transform: ${({intersecting}) => intersecting ? "scaleX(1)" : "scaleX(0.001)"};
	margin-bottom: 2.5rem;
	transition: 600ms ease;
	height: 1px;
	transform-origin: center;
	background-color: ${({ theme, color }) => color ? color : theme.colors.light};
`;

function Line(props) {
	const [intersecting, setIntersecting] = useState(false);

	return (
		<InView
		style={{height: "1px"}}
			className='line-view-wrapper'
			onChange={(inView, entry) => inView && setIntersecting(true)}
		>
			<StyledLine intersecting={intersecting} {...props}></StyledLine>
		</InView>
	);
}

export default Line;

import React, { useContext } from "react";
import Paragraph from "../Paragraph/Paragraph";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LoadingContext } from "../../App/App";
import { useNavigate } from "react-router-dom";

const StyledConstructionHeading = styled(Paragraph)``;

const StyledWrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 1500px;
	margin: 0 auto;
`;

function Construction() {
	
	
	
	return (
		<StyledWrapper className='Construction'>
			<StyledConstructionHeading>
				Hey. I'm currently working very hard to make this website the best it
				can be. Check back soon or contact me.
			</StyledConstructionHeading>
		</StyledWrapper>
	);
}

export default Construction;

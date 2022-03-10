import React from "react";
import styled from "styled-components";
import Arrow from "../Vector/Arrow";

const StyledBtn = styled.button`
	background: transparent;
	border: 0px;
	font-family: "Neue Mtl";
	font-size: ${({ fontSize }) => (fontSize ? fontSize : "1rem")};
`;

function Button(props) {
	return <StyledBtn {...props}>{props.children}</StyledBtn>;
}

export default Button;

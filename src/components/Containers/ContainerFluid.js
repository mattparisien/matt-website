import React from "react";
import { Box } from "@mui/material";
import { Container } from "@mui/material";

function ContainerFluid(props) {

	const containerStyle = {
		position: "relative",
		height: "100%"
	}

	return <Container maxWidth='xl'  sx={containerStyle}>{props.children}</Container>;
}

export default ContainerFluid;
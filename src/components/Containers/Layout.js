import React, { useEffect } from "react";
import Section from "./Section";
import ContainerFluid from "./ContainerFluid";

function Layout(props) {
	return (
		<Section bg={props.bg}>
			<ContainerFluid>{props.children}</ContainerFluid>
		</Section>
	);
}

export default Layout;

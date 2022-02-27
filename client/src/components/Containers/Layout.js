import React, { useEffect } from "react";
import Section from "./Section";
import ContainerFluid from "./ContainerFluid";

function Layout(props) {
	return (
		<Section bg={props.bg} height={props.height}>
			{!props.fullBleed ? (
				<ContainerFluid>{props.children}</ContainerFluid>
			) : (
				props.children
			)}
		</Section>
	);
}

export default Layout;

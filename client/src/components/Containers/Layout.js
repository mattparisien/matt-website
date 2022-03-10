import React from "react";
import ContainerFluid from "./ContainerFluid";
import Section from "./Section";

function Layout(props) {
	return (
		<>
			<Section bg={props.bg} height={props.height} offsetTop={props.offsetTop} overflow={props.overflow}>
				<ContainerFluid isfull={props.fullWidth}>
					{props.children}
				</ContainerFluid>
			</Section>
		</>
	);
}

export default Layout;

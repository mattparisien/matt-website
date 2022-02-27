import React, { useEffect } from "react";
import Section from "./Section";
import ContainerFluid from "./ContainerFluid";
import styled from "styled-components";

function Layout(props) {
	return (
		<>
			<Section bg={props.bg} height={props.height} offsetTop={props.offsetTop}>
				{!props.fullBleed ? (
					<>
						<ContainerFluid>{props.children}</ContainerFluid>
					</>
				) : (
					<>{props.children}</>
				)}
			</Section>
		</>
	);
}

export default Layout;

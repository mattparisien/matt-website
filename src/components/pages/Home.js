import React, { useRef, forwardRef } from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Sticky from "../Sticky";
import Section from "../Section";
import FeaturedWork from "./components/FeaturedWork";

import { StyledHome } from "./styles/StyledHome";

function Home(props, ref) {
	//Declare refs needed for animation
	const stickySection = useRef(null);

	

	return (
		<StyledHome colors={props.colors}>
			<FeaturedWork ref={ref}/>
		</StyledHome>
	);
}

export default forwardRef(Home);

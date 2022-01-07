import React, { useRef, forwardRef, useState } from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Sticky from "../Sticky";
import Section from "../Section";
import FeaturedWork from "./components/FeaturedWork";

import { StyledHome } from "./styles/StyledHome";
import { useEffect } from "react/cjs/react.development";

function Home(props, ref) {
	//Declare refs needed for animation
	const stickySection = useRef(null);

	const { revealContent, colors } = props;



	return (
		<StyledHome colors={colors}>
			<FeaturedWork ref={ref} />
		</StyledHome>
	);
}

export default forwardRef(Home);

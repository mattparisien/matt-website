import React, { useRef } from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Sticky from "../Sticky";
import Section from "../Section";
import FeaturedWork from "./components/FeaturedWork";
import { StyledHome } from "./styles/StyledHome";

function Home(props) {
	//Declare refs needed for animation
	const stickySection = useRef(null);

	

	return (
		<StyledHome colors={props.colors}>
			<Sticky ref={stickySection}>
				<Hero stickySection={stickySection} />
				<About />
			</Sticky>
			<FeaturedWork />
		</StyledHome>
	);
}

export default Home;

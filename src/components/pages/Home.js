import React, { useRef } from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Sticky from "../Sticky";

function Home() {

		//Declare refs needed for animation
		const stickySection = useRef(null);

	return (
		<>
			<Sticky ref={stickySection}>
				<Hero stickySection={stickySection}/>
				<About />
			</Sticky>
		</>
	);
}

export default Home;

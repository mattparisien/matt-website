import Home from "./components/pages/Home";
import CursorFollower from "./components/CursorFollower";
import { GlobalStyle } from "./styles/global";

import { useState, useRef, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Modal from "./components/Modals/Modal";
import { Helmet } from "react-helmet";
import Footer from "./components/Footer/Footer";
import useScroll from "./helpers/useScroll";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import gsap from "gsap/all";

function App() {
	//Themes
	const themes = {
		colors: {
			light: "rgb(244, 241, 235)",
			dark: "rgb(24, 24, 24)",
			lighterDark: "#111111",
			red: "#DF181F",
			green: "#1c8c53",
			blue: "rgb(78, 140, 162)",
			yellow: "#faf281",
			pink: "#f1b9b8",
			orange: "rgb(231, 100, 53)",
			grey: "rgb(207, 207, 207)",
			purple: "#5b487c",
		},
	};

	const [colorHasChanged, setColorHasChanged] = useState(false);

	const [state, setState] = useState({
		entryScreenActive: true,
		modal: {
			isActive: false,
			hasBeenActive: false,
		},
		colors: {
			backgroundColor: themes.colors.light,
			foregroundColor: themes.colors.dark,
		},
		isLoading: true,
	});

	const [isScrolling, scrollDirection, scrollTop] = useScroll();

	const scrollContainer = useRef(null);

	const cursor = useRef(null);

	const toggleModalVisibility = () => {
		setState(prev => ({
			...prev,
			modal: {
				isActive: !state.modal.isActive,
				hasBeenActive: true,
			},
		}));
	};

	const titleRef = useRef(null);
	const mainContentRef = useRef(null);
	const revealContentTl = useRef(gsap.timeline());

	//Reveal content on load
	useEffect(() => {
		if (!state.isLoading) {
			revealContentTl.current
				.to(titleRef.current, {
					opacity: 1,
					delay: 0.2,
					duration: 2,
				})
				.to(
					mainContentRef.current,
					{
						opacity: 1,
						y: 0,
						duration: 0.1,
					},
					1
				);
		}
	}, [state.isLoading]);

	/***** CHANGE SECTION COLORS ON SCROLL ****/

	return (
		<div className='App' ref={scrollContainer}>
			<ThemeProvider theme={themes}>
			<Helmet>
				<title>Matthew Parisien</title>
				<meta
					name='description'
					content='Web Developer, Photographer & Graphic Designer'
				/>
			</Helmet>
			<Modal
				isActive={state.modal.isActive}
				hasBeenActive={state.modal.hasBeenActive}
				hideModal={toggleModalVisibility}
			/>
			{/* <EntryScreen isActive={state.entryScreenActive} setState={setState} /> */}
			<Header ref={titleRef} />
			<main className='content-wrapper' ref={mainContentRef}>
				<GlobalStyle
					isScrollDisabled={state.isLoading}
					theme={themes}
					colors={state.colors}
					contentOpacity={state.isLoading}
				/>
				<Home colors={state.colors} />
			</main>
			<CursorFollower ref={cursor} />

			<Footer
				backgroundColor={themes.colors.dark}
				foregroundColor={themes.colors.light}
			/>
			<Preloader setLoading={setState} />
			</ThemeProvider>
		</div>
	);
}

export default App;

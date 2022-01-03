import * as styles from "./styles/css/index.css";
import Home from "./components/pages/Home";
import CursorFollower from "./components/CursorFollower";
import { GlobalStyle } from "./styles/global";
import EntryScreen from "./components/EntryScreen";
import { useState, useRef, useEffect } from "react";
import $ from "jquery";
import Button from "./components/Button/Button";
import Pencil from "./components/Vector/Pencil";
import Close from "./components/Vector/Close";
import Modal from "./components/Modals/Modal";
import { Helmet } from "react-helmet";
import Footer from "./components/Footer";
import useScroll from "./helpers/useScroll";

function App() {
	//Themes
	const themes = {
		colors: {
			light: "rgb(244, 241, 235)",
			dark: "rgb(24, 24, 24)",
			lighterDark: "#111111",
			red: "#DF181F",
			green: "#039924s",
			blue: "rgb(78, 140, 162)",
			yellow: "#faf281",
			pink: "#f1b9b8",
			orange: "rgb(231, 100, 53)",
			grey: "rgb(207, 207, 207)",
			purple: "#5b487c",
		},
	};

	const [state, setState] = useState({
		entryScreenActive: true,
		modal: {
			isActive: false,
			hasBeenActive: false,
		},
		sectionColors: {
			home: {
				heroSection: {
					background: themes.colors.pink,
					foreground: themes.colors.orange,
				},
				aboutSection: {
					background: themes.colors.purple,
					foreground: themes.colors.pink,
				},
				featuredWorkSection: {
					background: themes.colors.yellow,
					foreground: themes.colors.pink,
				},
			},
			footer: {
				background: themes.colors.purple,
				foreground: themes.colors.pink,
			},
		},
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

	const changeSectionColor = () => {};

	/***** CHANGE SECTION COLORS ON SCROLL ****/
	useEffect(() => {
		scrollTop === 2200 && changeSectionColor();
	}, [scrollTop]);

	return (
		<div className='App' ref={scrollContainer}>
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
			<main className='content-wrapper'>
				<GlobalStyle scrollDisabled={state.entryScreenActive} />
				<Home colors={state.sectionColors.home} />
			</main>
			<CursorFollower ref={cursor} />
			<Button
				style={"circle"}
				id={"contactCta"}
				onClick={toggleModalVisibility}
				bg={state.modal.isActive ? "Pink" : "Light"}
			>
				{state.modal.isActive ? (
					<Close classes={"contactCta__close"} />
				) : (
					<Pencil classes={"contactCta__pencil"} />
				)}
			</Button>
			<Footer />
		</div>
	);
}

export default App;

import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Contact from "../components/pages/Contact";
import { GlobalStyle } from "../styles/global";
import { useState, useRef, useEffect, createContext } from "react";
import { ThemeProvider } from "styled-components";
import Modal from "../components/Modals/Modal";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer/Footer";
import Preloader from "../components/Preloader/Preloader";
import Header from "../components/Header/Header";
import gsap from "gsap/all";
import ContentWrapper from "../components/ContentWrapper/ContentWrapper";
import Menu from "../components/Menu/Menu";
import MenuLink from "../components/Header/Menu/MenuLink";
import { useIntersect } from "../helpers/hooks/useIntersect";
import { Routes, Route, useLocation } from "react-router-dom";
import $ from "jquery";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Construction from "../components/pages/Construction";

export const ColorContext = createContext();

function App() {
	//Themes
	const themes = {
		colors: {
			light: "#ffff",
			dark: "#141414",
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

	const scrollRef = useRef(null);

	const [state, setState] = useState({
		entryScreenActive: true,
		modal: {
			isActive: false,
			hasBeenActive: false,
		},
		colors: {
			backgroundColor: themes.colors.dark,
			foregroundColor: themes.colors.light,
		},
		headerHeight: null,
		footerHeight: null,
		isFooterIntersecting: false,
		menuActive: false,
		isLoading: false,
	});

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

	/***** ANIMATE CONTENT ENTRY ON LOAD  *****/

	const galleryRef = useRef(null);
	const revealContentTl = useRef(gsap.timeline({ paused: true }));
	const headerRef = useRef(null);
	const footerRef = useRef(null);
	const contentWrapperRef = useRef(null);
	const menuTriggerRef = useRef(null);

	const location = useLocation();

	// useEffect(() => {
	// 	if (!state.isLoading) {
	// 		//If not loading, animate content in

	// 		const headerTitleChars = $(headerRef.current).find(".char");
	// 		const header = headerRef.current;
	// 		const mainContent = galleryRef.current;
	// 		const menuBtn = menuTriggerRef.current;
	// 		const titleChars = headerTitleChars;
	// 		const timeline = revealContentTl.current;

	// 		const refs = {
	// 			header,
	// 			mainContent,
	// 			titleChars,
	// 			menuBtn,
	// 		};

	// 		animateContentEntry(timeline, refs).play();
	// 	} else {
	// 		const titleChars = $(headerRef.current).find(".char");
	// 		// revealContentTl.current.set(titleChars, { clearProps: "all" });
	// 	}
	// }, [headerRef, state.isLoading]);

	//Calculate header height
	useEffect(() => {
		if (headerRef.current && footerRef.current) {
			const headerHeight = $(headerRef.current).find("h1").height();
			const footerHeight = footerRef.current.getBoundingClientRect().height;
			setState(prev => ({
				...prev,
				headerHeight: headerHeight,
				footerHeight: footerHeight,
			}));
		}
	}, [headerRef, footerRef]);

	const toggleMenuActivity = () => {
		setState(prev => ({ ...prev, menuActive: !state.menuActive }));
	};

	const toggleLoadingState = () => {
		setState(prev => ({
			...prev,
			isLoading: state.isLoading ? false : true,
		}));
	};

	const changeColors = (bg, fg) => {
		console.log(bg, fg);
		setState(prev => ({
			...prev,
			colors: {
				backgroundColor: bg,
				foregroundColor: fg,
			},
		}));
	};

	const colorContextControls = {
		changeColors,
	};

	return (
		<ThemeProvider theme={themes}>
			<ColorContext.Provider value={colorContextControls}>
				<LocomotiveScrollProvider
					options={{
						smooth: true,
					}}
					containerRef={scrollRef}
				>
					<div className='App'>
						<Helmet>
							<title>Matthew Parisien</title>
							<meta
								name='description'
								content='Web Developer, Photographer & Graphic Designer'
							/>
						</Helmet>

						{/* <Header
							ref={headerRef}
							currentPath={location.pathname}
							headerOffset={state.headerHeight}
							isMenuActive={state.menuActive}
						/> */}

						<div
							className='scroll-container'
							ref={scrollRef}
							data-scroll-container
						>
							<ContentWrapper
								headerOffset={state.headerHeight}
								footerOffset={state.footerHeight}
								ref={contentWrapperRef}
							>
								<GlobalStyle
									isScrollDisabled={state.isLoading}
									isCursorWait={state.isLoading}
									theme={themes}
									backgroundColor={state.colors.backgroundColor}
									foregroundColor={state.colors.foregroundColor}
								/>

								<Routes>
									<Route path='/' element={<Construction />} />
								</Routes>
							</ContentWrapper>
						</div>
					</div>
				</LocomotiveScrollProvider>
			</ColorContext.Provider>
		</ThemeProvider>
	);
}

export default App;
